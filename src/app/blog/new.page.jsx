import Link from 'next/link';
import db from '@/app/lib/db';

export default async function BlogList() {
  const [rows] = await db.execute(
    'SELECT id, title, content FROM posts ORDER BY id DESC'
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📚 Усі пости</h1>
      {rows.length === 0 && <p>😢 Поки що немає постів.</p>}
      {rows.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <div className="mb-6 p-4 border rounded hover:shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 line-clamp-2">
              {post.content.replace(/[#_*`>\-\n]/g, '').slice(0, 150)}...
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
