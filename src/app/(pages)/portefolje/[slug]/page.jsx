import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import ProjectDetailClient from "../_components/ProjectDetailClient";

 
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  const url = `https://www.webhjerte.dk/portefolje/${project.slug}`;
  const title = `${project.title} – case | WebHjerte`;
  const description = `${project.subtitle}. Se hvordan WebHjerte hjalp ${project.client} (${project.location}) med ny hjemmeside.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article" },
  };
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}