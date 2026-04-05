import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}


export default async function ProjectDetail({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Breadcrumb */}
      <section className="pt-28 pb-6 px-4 max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500">
          <Link href="/">Forside</Link>
          <span>/</span>
          <Link href="/projects">Portefølje</Link>
          <span>/</span>
          <span className="text-neutral-900">{project.title}</span>
        </nav>
      </section>

      {/* Tags */}
      <section className="px-4 max-w-7xl mx-auto py-1">
        <div className="flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 text-xs rounded-full bg-neutral-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Title */}
      <section className="px-4 max-w-7xl mx-auto py-4">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
          {project.title}
          <br />
          <span className="text-neutral-400 font-normal text-3xl sm:text-4xl">
            {project.subtitle}
          </span>
        </h1>
      </section>

      {/* Hero Image */}
      <section className="px-4 max-w-7xl mx-auto pb-16">
        <div className="rounded-2xl overflow-hidden">
          <Image
                src={project.heroImage}
            alt={project.title}
            width={1400}
            height={800}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
      </section>
<section className="px-4 max-w-7xl mx-auto pb-24">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    {project.gallery.map((image, index) => (
      <div
        key={index}
        className="rounded-2xl overflow-hidden"
      >
        <Image
          src={image}
          alt={`${project.title} screenshot ${index + 1}`}
          width={1200}
          height={900}
          className="w-full h-full object-cover hover:scale-105 transition duration-500"
        />
      </div>
    ))}
  </div>
</section>
      <section className="px-4 max-w-7xl mx-auto pb-20">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
          Resultater
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {project.results.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-bold">{stat.value}</p>
              <p className="text-sm text-neutral-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Overview */}
      <section className="px-4 max-w-7xl mx-auto pb-20 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-xs uppercase tracking-widest text-neutral-500">
            Overblik
          </p>
          <h2 className="text-3xl font-bold">
            {project.client}: projektets vision
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            {project.overview}
          </p>
          <p className="text-neutral-600 leading-relaxed">
            {project.overviewExtra}
          </p>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Kunde
            </p>
            <p className="font-medium">
              {project.client} - {project.location}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Services
            </p>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="px-4 py-1 text-xs rounded-full bg-neutral-100"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-500 mb-2">
              Teknologier
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-1 text-xs rounded-full bg-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* UX/UI */}
      <section className="px-4 max-w-7xl mx-auto pb-20">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
          UX/UI Design
        </p>
        <h2 className="text-3xl font-bold mb-6">
          Design & brugeroplevelse
        </h2>
        <p className="text-neutral-600 max-w-3xl leading-relaxed">
          {project.designDescription}
        </p>
      </section>

      {/* Development */}
      <section className="px-4 max-w-7xl mx-auto pb-20">
        <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
          Udvikling
        </p>
        <h2 className="text-3xl font-bold mb-6">
          Fra ide til færdigt produkt
        </h2>
        <p className="text-neutral-600 max-w-3xl leading-relaxed mb-8">
          {project.developmentDescription}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-5 py-2 text-sm rounded-xl bg-neutral-100"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 max-w-7xl mx-auto pb-24">
        <div className="bg-neutral-100 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Har du et lignende projekt i tankerne?
          </h2>
          <p className="text-neutral-600 mb-8">
            Vi hjælper dig med at skabe en hjemmeside der konverterer besøgende til kunder.
          </p>
          <Link
            href="/kontakt"
            className="inline-block rounded-full bg-black text-white px-8 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Kontakt os →
          </Link>
        </div>
      </section>
    </div>
  );
}