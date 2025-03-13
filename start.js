// server.js
const express = require("express");
const next = require("next");
const helmet = require("helmet");
const crypto = require("crypto");

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Middleware to generate a nonce for each request
  server.use((req, res, next) => {
    res.locals.nonce = crypto.randomBytes(16).toString("base64");
    next();
  });

  // Secure Content Security Policy
  server.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: [
            "'self'",
            (req, res) => `'nonce-${res.locals.nonce}'`,
            "'unsafe-eval'", // Needed for Next.js
            "https://cdn.jsdelivr.net",
            "https://www.webhjerte.dk",
          ],
          connectSrc: ["'self'", "https://webhjerte.dk", "wss:"],
          imgSrc: ["'self'", "data:", "https://webhjerte.dk"],
          styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
          fontSrc: ["'self'", "https://fonts.gstatic.com"],
          objectSrc: ["'none'"],
          frameAncestors: ["'self'"],
          upgradeInsecureRequests: [],
        },
      },
    })
  );

  // Handle Next.js pages
  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});