import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
import db from "@/app/lib/db";
import Button from "@/app/components/Button";

// Окрема функція для отримання поста
async function getBlogPost(id) {
  const [rows] = await db.execute("SELECT * FROM posts WHERE id = ? LIMIT 1", [id]);
  return rows[0];
}

// Для генерації статичних сторінок (SSG)
export async function generateStaticParams() {
  const [posts] = await db.execute("SELECT id FROM posts");
  return posts.map((post) => ({ id: String(post.id) }));
}

export async function generateMetadata({ params }) {
  const blog = await getBlogPost(params.id);

  if (!blog) {
    return {
      title: "Blog ikke fundet",
      description: "Dette blogindlæg findes ikke.",
    };
  }

  return {
    title:  blog.seo_title ,
    description: blog.seo_description,
    keywords: blog.seo_keywords,
    openGraph: {
      title: blog.seo_title,
      description: blog.seo_description,
      image: blog.cover_image,
      type: "article",
      url: `https://www.webhjerte.dk/blog/${params.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo_title,
      description: blog.seo_description,
      image: blog.cover_image,
    },
    robots: "index, follow",
  };
}

// Сторінка поста
export default async function PostPage({ params }) {
  const id = Number(params.id); // перевіряємо, що це число

  const post = await getBlogPost(id);
  if (!post) return notFound();

  const markdownFixed = post.content
    .replace(/\r\n/g, "\n")
    .replace(/\n{2,}/g, "\n\n");

  return (
    <div className="p-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {post.image_url && (
          <img src={post.image_url} alt={post.title} className="mb-6 rounded w-full max-h-[500px] object-cover" />
        )}

        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

        <div className="content prose max-w-none">
          <ReactMarkdown>{markdownFixed}</ReactMarkdown>
        </div>

        {/* Допоміжний блок */}
        <div className="mt-12 p-6 bg-blue-50 border-l-4 border-blue-400 rounded shadow-sm my-5">
          <h3 className="text-xl font-semibold text-[#444] mb-2">
            Har du brug for hjælp?
          </h3>
          <p className="text-gray-700">
            Vi kan hjælpe dig med alt omkring din hjemmeside – fra optimering
            til redesign. Tøv ikke med at kontakte os!
          </p>

          <Link href="/kontakt">
            <Button name="Kontakt os" />
          </Link>
        </div>
      </div>
    </div>
  );
}
