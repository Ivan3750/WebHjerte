import ReactMarkdown from 'react-markdown';
import db from '@/app/lib/db';

export async function generateStaticParams() {
  // Для статичної генерації сторінок по id
  const [posts] = await db.execute('SELECT id FROM posts');
  return posts.map(post => ({ id: post.id }));
}

export default async function PostPage({ params }) {
  const id = params.id; // ✅ правильне отримання id з URL

  // Отримуємо пост з БД
  const query = 'SELECT title, content, image_url FROM posts WHERE id = ? LIMIT 1';
  const [rows] = await db.execute(query, [id]);
  const post = rows[0];

  if (!post) {
    return <div>Пост не знайдено</div>;
  }

  // Чистимо markdown
  const markdownFixed = post.content
    .replace(/\r\n/g, '\n')
    .replace(/\n{2,}/g, '\n\n');

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
        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded shadow-sm">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">
            Потрібна допомога?
          </h3>
          <p className="text-gray-700">
            Ми можемо вам допомогти з усіма питаннями по сайту — від оптимізації до редизайну.
            Не соромтесь звертатися!
          </p>
          <a
            href="/kontakt"
            className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Зв’язатися з нами
          </a>
        </div>
      </div>
    </div>
  );
}
