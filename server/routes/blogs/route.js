const express = require("express");
const multer = require("multer");
const path = require("path");
const db = require("../../db");

const router = express.Router();

// 📌 Налаштування multer для завантаження фото
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Унікальне ім'я
  },
});
const upload = multer({ storage });

// 📌 Отримання всіх блогів
router.get("/", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, title, description, image_url FROM blog_posts ORDER BY date DESC");
    res.json(rows);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 📌 Отримання окремого поста
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid blog post ID" });
  }

  try {
    const [results] = await db.query("SELECT * FROM blog_posts WHERE id = ?", [id]);

    if (results.length === 0) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json(results[0]);
  } catch (err) {
    console.error("Error fetching blog post:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 📌 Додавання нового поста (з фото)
router.post("/", upload.single("image"), async (req, res) => {
  const { title, description, content } = req.body;
  const imageUrl = req.file ? `/uploads/${req.file.filename}` : null;

  if (!title || !description || !content) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    await db.query("INSERT INTO blog_posts (title, description, content, image_url) VALUES (?, ?, ?, ?)", 
      [title, description, content, imageUrl]);

    res.status(201).json({ message: "Blog post created successfully" });
  } catch (error) {
    console.error("Error inserting blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// 📌 Видалення поста
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const [result] = await db.query("DELETE FROM blog_posts WHERE id = ?", [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json({ message: "Blog post deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
