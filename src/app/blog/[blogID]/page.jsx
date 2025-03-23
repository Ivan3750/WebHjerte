/* import { useRouter } from "next/router";
import Image from "next/image";
import Head from "next/head";

export async function getStaticPaths() {
  const res = await fetch("/api/blogPosts");
  const blogs = await res.json();

  const paths = blogs.map((blog) => ({ params: { id: blog.id.toString() } }));

  return { paths, fallback: "blocking" }; // ISR для нових статей
}

export async function getStaticProps({ params }) {
  const res = await fetch(`/blogPosts/${params.id}`);
  const blog = await res.json();

  return { props: { blog }, revalidate: 60 };
}

export default function BlogPost({ blog }) {
  const router = useRouter();
  if (router.isFallback) return <p>Завантаження...</p>;

  return (
    <>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
      </Head>

      <article>
        <h1>{blog.title}</h1>
        <p><strong>Опубліковано:</strong> {blog.date}</p>

        {blog.image_url && (
          <Image src={blog.image_url} alt={blog.title} width={800} height={400} layout="responsive" />
        )}

        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </article>
    </>
  );
}
 */