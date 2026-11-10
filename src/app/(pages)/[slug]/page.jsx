import { notFound } from "next/navigation";
import ContentPage from "../../components/seo/ContentPage";
import { contentPages, pageMetadata, pagePath } from "../../data/content";

// Alle faste sider har egne mapper og går forud. Denne rute leverer de datadrevne indholdssider.
export const dynamicParams = false;

export function generateStaticParams() {
  return contentPages.map((p) => ({ slug: p.slug }));
}

const find = (slug) => contentPages.find((p) => p.slug === slug);

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = find(slug);
  if (!page) return {};
  return pageMetadata(page, pagePath(page));
}

export default async function ContentRoute({ params }) {
  const { slug } = await params;
  const page = find(slug);
  if (!page) notFound();
  return (
    <ContentPage
      path={pagePath(page)}
      type={page.type}
      name={page.name}
      serviceType={page.serviceType}
      eyebrow={page.eyebrow}
      h1={page.h1}
      intro={page.intro}
      summary={page.summary}
      sections={page.sections}
      faqs={page.faqs}
      related={page.related}
      glossary={page.glossary}
      withForm={page.withForm !== false}
      facts={page.facts}
      description={page.description}
      published={page.published}
      updated={page.updated}
    />
  );
}
