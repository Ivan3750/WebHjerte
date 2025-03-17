const mysql = require("mysql2/promise");
const db = require("../../db");


// 📌 Створити пост
exports.createPost = async (title, description, content) => {
  const [result] = await db.query(
    "INSERT INTO posts (title, description, content) VALUES (?, ?, ?)",
    [title, description, content]
  );
  return result.insertId;
};

// 📌 Зберегти фото
exports.saveImages = async (postId, images) => {
  const values = images.map((url) => [postId, url]);
  await db.query("INSERT INTO post_images (post_id, img_url) VALUES ?", [values]);
};

// 📌 Отримати пост
exports.getPost = async (postId) => {
  const [rows] = await db.query("SELECT * FROM posts WHERE id = ?", [postId]);
  return rows.length ? rows[0] : null;
};

// 📌 Отримати фото для поста
exports.getPostImages = async (postId) => {
  const [rows] = await db.query("SELECT img_url FROM post_images WHERE post_id = ?", [postId]);
  return rows;
};
