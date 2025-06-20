const express = require("express");
const next = require("next");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

// 📌 Підключаємо маршрути
const blogsRoute = require("./server/routes/blogs/route");
const projectsRoute = require("./server/routes/projects/route");
const telegramRoute = require("./server/routes/telegram/route");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.prepare()
  .then(() => {
    const server = express();

    server.use(cors({
      origin: 'https://web-hjerte-ivans-projects-b42b0b81.vercel.app', // або "*" для всіх доменів
      methods: ['GET', 'POST']
    }));
    
        server.use(morgan("dev"));
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use("/uploads", express.static("uploads")); // 📌 Доступ до фото

    // 📌 Маршрути
    server.use("/api/blogPosts/", blogsRoute);
    server.use("/api/", projectsRoute);
    server.use("/api/telegramRoute", telegramRoute);

    server.all("*", (req, res) => handle(req, res));

    // 🛠️ Error handling
    server.use((err, req, res, next) => {
      console.error("Server Error:", err.stack);
      res.status(500).json({ error: "Internal Server Error", message: err.message });
    });

    server.listen(PORT, '0.0.0.0', () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
      })
  .catch((err) => {
    console.error("Error starting server:", err);
    process.exit(1);
  });
