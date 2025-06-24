import Image from "next/image";
import { notFound } from 'next/navigation';

// Функція для отримання даних блогу
async function getBlogPost(id) {
  try {
    const res = await fetch(`https://web-cbe1.onrender.com/blog/${id}`);
    if (!res.ok) throw new Error("Помилка завантаження");

    return await res.json();
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return null;
  }
}

// Функція для рендерингу контенту
function RenderContent({ content }) {
  if (!Array.isArray(content)) return <p>{content}</p>;

  return content.map((block, index) => {
    switch (block.type) {
      case "text":
        return <p key={index} className="mb-4 text">{block.value}</p>;
      case "heading":
        return <h2 key={index} className="text-xl font-bold">{block.value}</h2>;
      case "image":
        return <Image 
                key={index} 
                className="rounded-2xl" 
                src={`https://web-cbe1.onrender.com${block.url}`} 
                alt={block.alt} 
                width={800} 
                height={400} 
                priority
              />;
      case "video":
        return <video key={index} controls className="w-full">
                 <source src={`https://web-cbe1.onrender.com${block.url}`} type="video/mp4" />
               </video>;
      default:
        return null;
    }
  });
}

// Функція для генерації метаданих
export async function generateMetadata({ params }) {
  const blog = await getBlogPost(params.blogID);

  if (!blog) {
    return {
      title: "Blog not found",
      description: "The blog you are looking for does not exist.",
    };
  }

  return {
    title: blog.metaTitle || blog.seo_title || "Blogindlæg – WebHjerte",
    description: blog.seo_description || blog.excerpt || "Læs vores seneste blogindlæg.",
    keywords: blog.seo_keywords || "blog, SEO, webdesign, WebHjerte",
    openGraph: {
      title: blog.seo_title || blog.metaTitle || "WebHjerte Blogindlæg",
      description: blog.seo_description || blog.excerpt || "Læs vores seneste artikel på bloggen.",
      image: blog.cover_image || "https://webhjerte.dk/og-blog.jpg",
      type: 'article',
      url: `https://www.webhjerte.dk/blog/${params.blogID}`
    },
    twitter: {
      card: "summary_large_image",
      title: blog.seo_title || blog.metaTitle || "WebHjerte Blogindlæg",
      description: blog.seo_description || blog.excerpt || "Læs vores seneste blogindlæg.",
      image: blog.cover_image || "https://webhjerte.dk/og-blog.jpg",
    },
    robots: "index, follow"
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
        {blog.coverImage && <Image 
                              src={blog.coverImage} 
                              alt={blog.title} 
                              width={800} 
                              height={400} 
                              priority 
                            />}
        <RenderContent content={blog.content} />
      </article>
    </section>
  );
}
