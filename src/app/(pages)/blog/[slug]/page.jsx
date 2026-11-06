import { notFound } from "next/navigation";
import ContentPage from "../../../components/seo/ContentPage";
import { articles, pageMetadata, articlePath } from "../../../data/content";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

const find = (slug) => articles.find((a) => a.slug === slug);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = find(slug);
  if (!article) return {};
  return pageMetadata(article, articlePath(article), "article");
}

export default async function ArticleRoute({ params }) {
  const { slug } = await params;
  const a = find(slug);
  if (!a) notFound();
  return (
    <ContentPage
      path={articlePath(a)}
      type="article"
      name={a.name}
      eyebrow={`Guide · ${a.category}${a.readMinutes ? ` · ${a.readMinutes} min. læsning` : ""}`}
      h1={a.h1}
      intro={a.intro}
      summary={a.summary}
      sections={a.sections}
      faqs={a.faqs}
      related={a.related}
      breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      withForm={false}
      description={a.description}
      published={a.published}
      updated={a.updated}
    />
  );
}
