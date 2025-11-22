export async function POST(req) {
  try {
    const { name, email, project } = await req.json();

    if (!name || !email || !project) {
      return new Response(
        JSON.stringify({ success: false, message: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const telegramMessage = `
📩 Ny kontaktformular!
Navn: ${name}
Email: ${email}
Projekt: ${project}
`;

    const TELEGRAM_API_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;

    const response = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: telegramMessage,
      }),
    });

    const data = await response.json();
console.log("Telegram API response:", data); // <-- add this

    if (!data.ok) {
      throw new Error("Telegram API error");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Form sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Telegram send error:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Error sending form" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
