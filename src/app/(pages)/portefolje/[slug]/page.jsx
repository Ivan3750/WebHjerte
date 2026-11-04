import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import ProjectDetailClient from "../_components/ProjectDetailClient";
import { breadcrumbLd, orgRef, SITE_URL } from "../../../lib/seo";

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const imageOf = (project) => {
  const img = project.heroImage;
  if (!img) return null;
  if (typeof img === "string") return { url: img };
  return { url: img.src, width: img.width, height: img.height };
};

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const url = `${SITE_URL}/portefolje/${project.slug}`;
  const title = `${project.title} – case | WebHjerte`;
  const description = `${project.subtitle}. Se hvordan WebHjerte hjalp ${project.client} (${project.location}) med ny hjemmeside.`;
  const image = imageOf(project);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "WebHjerte",
      locale: "da_DK",
      type: "article",
      ...(image ? { images: [{ ...image, alt: project.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image.url] } : {}),
    },
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const image = imageOf(project);
  const url = `${SITE_URL}/portefolje/${project.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#case`,
        url,
        name: `${project.title} – ${project.subtitle}`,
        description: project.overview,
        inLanguage: "da-DK",
        creator: orgRef,
        about: project.services,
        keywords: [...project.tags, ...project.technologies].join(", "),
        ...(image ? { image: `${SITE_URL}${image.url}` } : {}),
        isPartOf: { "@id": `${SITE_URL}/portefolje#list` },
      },
      breadcrumbLd([
        { name: "Forside", path: "/" },
        { name: "Portefølje", path: "/portefolje" },
        { name: project.title, path: `/portefolje/${project.slug}` },
      ]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProjectDetailClient project={project} next={next} />
    </>
  );
}
