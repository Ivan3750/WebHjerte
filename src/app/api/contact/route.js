const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

// Simpel in-memory rate limit (pr. server-instans) mod spam på formularen
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) {
      if (!times.some((t) => now - t < WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

const clean = (value, max) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (rateLimited(ip)) {
      return json({ success: false, message: "For mange forsøg. Prøv igen senere." }, 429);
    }

    const body = await req.json();

    // Honeypot: rigtige brugere efterlader feltet tomt
    if (body?.website) {
      return json({ success: true, message: "Form sent successfully!" });
    }

    const name = clean(body?.name, 120);
    const email = clean(body?.email, 160);
    const phone = clean(body?.phone, 40);
    const pakke = clean(body?.pakke, 80) || "Ikke angivet";
    const message = clean(body?.message, 3000);

    // Et navn og mindst én måde at kontakte kunden på (e-mail eller telefon)
    if (!name || (!email && !phone)) {
      return json({ success: false, message: "Navn samt e-mail eller telefon er påkrævet" }, 400);
    }
    if (email && !EMAIL_RE.test(email)) {
      return json({ success: false, message: "Ugyldig e-mailadresse" }, 400);
    }

    const telegramMessage = [
      "📩 Ny henvendelse fra webhjerte.dk",
      `Navn: ${name}`,
      email && `Email: ${email}`,
      phone && `Telefon: ${phone}`,
      `Pakke: ${pakke}`,
      message && `Besked: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");

    const response = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: telegramMessage,
        }),
      },
    );

    const data = await response.json();
    if (!data.ok) {
      throw new Error("Telegram API error");
    }

    return json({ success: true, message: "Form sent successfully!" });
  } catch (error) {
    console.error("Contact form error:", error);
    return json({ success: false, message: "Error sending form" }, 500);
  }
}
