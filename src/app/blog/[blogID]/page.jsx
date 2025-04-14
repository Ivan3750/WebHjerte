import Image from "next/image";
import { notFound } from 'next/navigation';

async function getBlogPost(id) {
  const res = await fetch(`https://web-cbe1.onrender.com/blog/${id}`);
  if (!res.ok) throw new Error("Помилка завантаження");
  return res.json();
}

function RenderContent({ content }) {
  if (!Array.isArray(content)) return <p>{content}</p>;

  return content.map((block, index) => {
    switch (block.type) {
      case "text":
        return <p key={index} className="mb-4 text">{block.value}</p>;
      case "heading":
        return <h2 key={index} className="text-xl font-bold">{block.value}</h2>;
      case "image":
        return <Image key={index} className="rounded-2xl" src={`https://web-cbe1.onrender.com${block.url}`} alt={block.alt} width={800} height={400} />;
      case "video":
        return <video key={index} controls className="w-full"><source src={`https://web-cbe1.onrender.com${block.url}`} type="video/mp4" /></video>;
      default:
        return null;
    }
  });
}

// Функція для генерації метаданих
export async function generateMetadata({ params }) {
  const blog = await getBlogPost(params.blogID);

  return {
    title: blog.metaTitle || blog.seo_title,
    description: blog.seo_description || "Опис відсутній",
    keywords: blog.seo_keywords || "",
    openGraph: {
      title: blog.seo_title,
      description: blog.seo_description || "Опис відсутній",
      image: blog.cover_image || "",
      type: 'article',
      url: `https://www.webhjerte.dk/blog/${params.blogID}`
    }
  };
}

export default async function BlogPost({ params }) {
  const blog = await getBlogPost(params.blogID);

  if (!blog) {
    notFound(); // Якщо блогу не знайдено, показати сторінку 404
  }

  return (
    <section className="bg-white rounded-t-3xl">
      <article className="max-w-3xl mx-auto p-4">
        <h1 className="blogtitle">{blog.title}</h1>
        {blog.coverImage && <Image src={blog.coverImage} alt={blog.title} width={800} height={400} />}
        <RenderContent content={blog.content} />
      </article>
    </section>
  );
}
