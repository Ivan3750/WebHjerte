const path = require("path");
const multer = require("multer");
const db = require("./model");

// Налаштування `multer` для збереження фото
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage }).array("images", 5);

// 📌 Створити пост
exports.createPost = async (req, res) => {
  try {
    const { title, description, content } = req.body;
    const postId = await db.createPost(title, description, content);
    res.json({ message: "✅ Пост створено!", postId });
  } catch (error) {
    res.status(500).json({ error: "Помилка створення поста", details: error.message });
  }
};

// 📌 Завантажити фото
exports.uploadImages = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) return res.status(500).json({ error: "Помилка завантаження фото" });

    const postId = req.params.post_id;
    const images = req.files.map((file) => `/uploads/${file.filename}`);

    try {
      await db.saveImages(postId, images);
      res.json({ message: "✅ Фото успішно завантажено!", images });
    } catch (error) {
      res.status(500).json({ error: "Помилка збереження фото", details: error.message });
    }
  });
};

// 📌 Отримати пост у вигляді HTML
exports.getPostHtml = async (req, res) => {
  try {
    const post = await db.getPost(req.params.id);
    if (!post) return res.status(404).send("❌ Пост не знайдено");

    const images = await db.getPostImages(req.params.id);
    res.render("post", { post, images });
  } catch (error) {
    res.status(500).json({ error: "Помилка отримання поста", details: error.message });
  }
};
