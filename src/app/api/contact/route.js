import { issueToken, checkToken, checkOrigin, checkEmail, checkContent, isDuplicate } from "./guard";

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

// Formularen henter et signeret tidsstempel her, første gang den bruges (anti-bot).
export async function GET() {
  return new Response(JSON.stringify({ token: issueToken() }), {
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });
}

// Afvist af anti-bot-tjek: logges uden persondata, og brugeren får en generisk fejl.
const blocked = (reason, status = 400) => {
  console.warn(`Contact form blocked: ${reason}`);
  return json({ success: false, message: "Kunne ikke sende. Prøv igen eller skriv til hej@webhjerte.dk" }, status);
};

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

    // Kun kald fra vores eget site
    const originProblem = checkOrigin(req);
    if (originProblem) return blocked(originProblem, 403);

    if (!(req.headers.get("content-type") || "").includes("application/json")) {
      return blocked("content_type", 415);
    }
    const body = await req.json();

    // Honeypot: rigtige brugere efterlader feltet tomt. Botten får et falsk "succes".
    if (body?.website) {
      return json({ success: true, message: "Form sent successfully!" });
    }

    // Signeret tidsstempel: kræver at formularen er hentet og udfyldt i en rigtig browser
    const tokenProblem = checkToken(body?.token);
    if (tokenProblem) return blocked(tokenProblem);

    const name = clean(body?.name, 120);
    const email = clean(body?.email, 160);
    const phone = clean(body?.phone, 40);
    const pakke = clean(body?.pakke, 80) || "Ikke angivet";
    const message = clean(body?.message, 3000);

    // Mindst én måde at kontakte kunden på (e-mail eller telefon); navn er valgfrit
    if (!email && !phone) {
      return json({ success: false, message: "E-mail eller telefon er påkrævet" }, 400);
    }
    if (email && !EMAIL_RE.test(email)) {
      return json({ success: false, message: "Ugyldig e-mailadresse" }, 400);
    }

    const emailProblem = checkEmail(email);
    if (emailProblem) return blocked(emailProblem);

    const contentProblem = checkContent({ name, message });
    if (contentProblem) return blocked(contentProblem);

    // Dobbelt-indsendelse: svar OK, men send ikke igen
    if (isDuplicate(email || phone, message)) {
      return json({ success: true, message: "Form sent successfully!" });
    }

    const telegramMessage = [
      "📩 Ny henvendelse fra webhjerte.dk",
      name && `Navn: ${name}`,
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
