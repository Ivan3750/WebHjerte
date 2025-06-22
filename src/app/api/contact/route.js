import { NextResponse } from "next/server";

const TELEGRAM_API_URL = process.env.TELEGRAM_API;
const CHAT_ID = process.env.CHAT_ID;

if (!TELEGRAM_API_URL || !CHAT_ID) {
  throw new Error("❌ Missing TELEGRAM_API or CHAT_ID in environment variables.");
}

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, email, project } = data;

    if (!name || !email || !project) {
      return NextResponse.json({ success: false, error: "All fields are required." }, { status: 400 });
    }

    const message = `📩 New Contact Form Submission:\n🏷 Name: ${name}\n📧 Email: ${email}\n💡 Project: ${project}`.trim();

    const telegramResponse = await fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
    });

    const telegramData = await telegramResponse.json();

    if (!telegramResponse.ok) {
      throw new Error(`Telegram API error: ${telegramData.description || telegramResponse.statusText}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error:", error.message);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
