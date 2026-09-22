import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";
import ProjectDetailClient from "../_components/ProjectDetailClient";

 
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetail({ params }) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return <ProjectDetailClient project={project} />;
}