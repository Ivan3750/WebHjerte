const express = require("express");
const db = require("../../db");
const router = express.Router();

// GET: Всі пости
router.get("/blogPosts", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT id, title, img_data FROM blog_posts");
    
    const posts = rows.map((post) => {
      // Ensure img_data is a Buffer
      const imgData = Buffer.isBuffer(post.img_data) ? post.img_data : Buffer.from(post.img_data, 'binary');
      
      return {
        id: post.id,
        title: post.title,
        image: `data:image/jpeg;base64,${imgData.toString("base64")}`, // Adjust MIME type if necessary
      };
    });

    res.json(posts);

  } catch (error) {
    console.error("Error fetching blog posts:", error);
    res.status(500).send("Internal Server Error");
  }
});

// GET: Один пост за ID
router.get('/blogPosts/:id', async (req, res) => {
  const { id } = req.params;

  // Перевіряємо, чи ID – це число
  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid blog post ID" });
  }

  try {
    const [results] = await db.query(
      "SELECT id, title, content, DATE_FORMAT(date, '%Y-%m-%d') AS date FROM blog_posts WHERE id = ?",
      [id]
    );

    if (results.length === 0) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    res.status(200).json(results[0]);
  } catch (err) {
    console.error("❌ Error fetching blog post by ID:", err);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
