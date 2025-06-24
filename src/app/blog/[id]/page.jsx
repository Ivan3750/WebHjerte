import ReactMarkdown from "react-markdown";
import db from "@/app/lib/db";
import Button from "@/app/components/Button";

export async function generateStaticParams() {
  // Для статичної генерації сторінок по id
  const [posts] = await db.execute("SELECT id FROM posts");
  return posts.map((post) => ({ id: post.id }));
}

export default async function PostPage({ params }) {
  const id = params.id; // ✅ правильне отримання id з URL

  // Отримуємо пост з БД
  const query =
    "SELECT title, content, image_url FROM posts WHERE id = ? LIMIT 1";
  const [rows] = await db.execute(query, [id]);
  const post = rows[0];

  if (!post) {
    return <div>Пост не знайдено</div>;
  }

  // Чистимо markdown
  const markdownFixed = post.content
    .replace(/\r\n/g, "\n")
    .replace(/\n{2,}/g, "\n\n");

  return (
    <div className="p-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {post.image_url && (
          <img src={post.image_url} alt="Post image" className="mb-4 rounded" />
        )}

        <div className="content">
          <ReactMarkdown>{markdownFixed}</ReactMarkdown>
        </div>

        {/* Додано допоміжний блок */}
        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded shadow-sm my-5" >
          <h3 className="text-xl font-semibold text-[#444] mb-2 ">
            Har du brug for hjælp?
          </h3>
          <p className="text-gray-700">
            Vi kan hjælpe dig med alt omkring din hjemmeside – fra optimering
            til redesign. Tøv ikke med at kontakte os!
          </p>
       
          <Link href="/kontakt">
          <Button name="Kontakt os"></Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
