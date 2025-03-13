// server.js (or router.js)
const express = require("express");
const fetch = require('node-fetch'); // For making HTTP requests
require("dotenv").config();

const router = express.Router();


// Middleware to parse JSON body
router.use(express.json());

// Your Telegram bot token and chat ID
const TELEGRAM_API_URL =process.env.TELEGRAM_API;
const CHAT_ID = process.env.CHAT_ID;

router.post('/submit-contact', async (req, res) => {
  const { name, email, packages, project, budget } = req.body;

  const message = `
    New Contact Form Submission:

    Name: ${name}
    Email: ${email}
    Package: ${packages}
    Project: ${project}
    Budget: ${budget} DKK
  `;

  try {
    // Send message to Telegram
    const response = await fetch(TELEGRAM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(500).json({ success: false, error: 'Failed to send message' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
});

module.exports = router;
