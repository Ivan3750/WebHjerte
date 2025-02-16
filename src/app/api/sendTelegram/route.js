export async function POST(request) {
  const { name, email, packages, project, budget } = await request.json();

  // Your Telegram bot token and chat ID
  const TELEGRAM_API_URL = `https://api.telegram.org/bot7649949520:AAGpP4NpJllNAE7_9DTnafNBVn5HDRdWo_o/sendMessage`;
  const CHAT_ID = "-1002473193818";

  // Prepare the message to send
  const message = `
    New Contact Form Submission:

    Name: ${name}
    Email: ${email}
    Package: ${packages}
    Project: ${project}
    Budget: ${budget} DKK
  `;

  // Send message to Telegram
  try {
    const response = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });
console.log(message)
    if (response.ok) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ success: false, error: "Failed to send message" }), { status: 500 });
    }
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}