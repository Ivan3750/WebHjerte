import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
import db from "@/app/lib/db";
import Button from "@/app/components/Button";

// Утиліта для отримання поста
async function getBlogPost(id) {
  const [rows] = await db.execute("SELECT * FROM posts WHERE id = ? LIMIT 1", [id]);
  return rows[0];
}

// Генерація SEO метаданих
export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const blog = await getBlogPost(id);

  if (!blog) {
    return {
      title: "Blog ikke fundet",
      description: "Dette blogindlæg findes ikke.",
    };
  }

  return {
    title: blog.metaTitle || blog.seo_title || "Blogindlæg – WebHjerte",
    description: blog.seo_description || blog.excerpt || "Læs vores seneste blogindlæg.",
    keywords: blog.seo_keywords || "blog, SEO, webdesign, WebHjerte",
    openGraph: {
      title: blog.seo_title || blog.metaTitle || "WebHjerte Blogindlæg",
      description: blog.seo_description || blog.excerpt,
      image: blog.cover_image || "https://webhjerte.dk/og-blog.jpg",
      type: "article",
      url: `https://www.webhjerte.dk/blog/${id}`,
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo_title || blog.metaTitle || "WebHjerte Blogindlæg",
      description: blog.seo_description || blog.excerpt,
      image: blog.cover_image || "https://webhjerte.dk/og-blog.jpg",
    },
    robots: "index, follow",
  };
};

// Статичні маршрути
export const generateStaticParams = async () => {
  const [posts] = await db.execute("SELECT id FROM posts");
  return posts.map((post) => ({ id: post.id.toString() }));
};

// Основна сторінка
export default async function PostPage({ params }) {
  const { id } = params;
  const post = await getBlogPost(id);
  if (!post) return notFound();

  const markdownFixed = post.content
    .replace(/\r\n/g, "\n")
    .replace(/\n{2,}/g, "\n\n");

  return (
    <div className="p-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {post.image_url && (
          <img
            src={post.image_url}
            alt={post.title}
            className="mb-6 rounded w-full max-h-[500px] object-cover"
          />
        )}


        <div className="content prose max-w-none">
          <ReactMarkdown>{markdownFixed}</ReactMarkdown>
        </div>

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
