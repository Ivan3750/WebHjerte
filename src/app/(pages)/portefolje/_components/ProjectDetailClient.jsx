"use client";

import { ArrowIcon, ArrowBadge } from "../../../components/ui/ArrowIcon";
import Link from "next/link";
import Image from "next/image";
import PageHero from "../../../components/ui/PageHero";
import CtaSearchBlock from "../../../components/ui/CTA";
import { FadeUp } from "../../../components/home/fx/Reveal";
import ProjectShowcase from "./ProjectShowcase";

const Check = () => (
  <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden>
    <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const hostOf = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export default function ProjectDetailClient({ project, next }) {
  return (
    <>
      <PageHero
        breadcrumbs={[
          { href: "/", label: "Forside" },
          { href: "/portefolje", label: "Portefølje" },
          { label: project.title },
        ]}
        eyebrow={project.tags.join(" · ")}
        titleLines={[project.title, <span key="s" className="text-[#00a8e8]">{project.subtitle}</span>]}
        size="md"
      />

      {/* Billede, der "hænger" ind over hero */}
      <section className="scene relative bg-[#f7f6f6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 -mt-10 sm:-mt-16 relative z-10">
          <FadeUp>
            <div className="relative rounded-3xl overflow-hidden border border-[#e8e6e6] bg-[#1c1e1e] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)]">
              <Image
                src={project.heroImage}
                alt={`${project.title} – ${project.subtitle}`}
                width={1600}
                height={1000}
                priority
                sizes="(min-width: 1280px) 1200px, 100vw"
                className="w-full h-auto object-cover"
              />
              <span className="absolute top-4 left-4 glass glass-solid text-[11px] uppercase tracking-[0.12em] text-white rounded-full px-3.5 py-1.5">
                {project.client}
              </span>
            </div>
          </FadeUp>
        </div>

        {/* Fakta */}
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-10 sm:py-14">
          <FadeUp className="rounded-3xl bg-white border border-[#e8e6e6] grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#eeecec]">
            <div className="p-6 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#8a8a8a] mb-3">Kunde</p>
              <p className="text-[15px] font-semibold text-[#1c1e1e]">{project.client}</p>
              <p className="text-[13px] text-[#6a6a6a] mt-1">{project.location}</p>
              {project.site && (
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[13px] text-[#00a8e8] hover:underline"
                >
                  <span className="inline-flex items-center gap-1.5">{hostOf(project.site)}<ArrowIcon className="w-3.5 h-3.5" direction="upright" /></span>
                </a>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#8a8a8a] mb-3">Services</p>
              <ul className="flex flex-col gap-2.5">
                {project.services.map((service) => (
                  <li key={service} className="flex items-center gap-2.5">
                    <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 bg-[#00a8e8]/10 border border-[#00a8e8]/30">
                      <Check />
                    </span>
                    <span className="text-[13px] text-[#4a4a4a]">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.14em] text-[#8a8a8a] mb-3">Teknologier</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-[12px] px-3 py-1.5 rounded-full bg-[#f3f2f2] text-[#4a4a4a]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Om projektet */}
      <section className="scene bg-[#eceeee]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <FadeUp as="h2" delay={0.05} className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.15] text-[clamp(24px,3.2vw,40px)]">
              {project.client}: udfordringen bag projektet
            </FadeUp>
          </div>
          <div className="flex flex-col gap-5">
            <FadeUp as="p" className="text-[16px] sm:text-[17px] text-[#2a2a2a] leading-[1.8] font-medium">
              {project.overview}
            </FadeUp>
            <FadeUp as="p" delay={0.05} className="text-[15px] text-[#5a5a5a] leading-[1.9]">
              {project.overviewExtra}
            </FadeUp>
            {project.site && (
              <FadeUp delay={0.1} className="mt-3">
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00a8e8] hover:bg-[#1c1e1e] text-white px-7 py-3.5 text-[13px] font-semibold transition-colors"
                >
                  Se hjemmesiden <ArrowIcon className="w-4 h-4" direction="upright" />
                </a>
              </FadeUp>
            )}
          </div>
        </div>
      </section>

      {/* Mærk siden: enheder der følger med, når man scroller */}
      <ProjectShowcase project={project} />

      {/* Næste case: stort, mørkt kort med billedet i fuld bredde */}
      {next && next.slug !== project.slug && (
        <section className="scene bg-[#f7f6f6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
            <FadeUp>
              <Link
                href={`/portefolje/${next.slug}`}
                className="group relative block overflow-hidden rounded-3xl bg-[#1c1e1e] aspect-[4/5] sm:aspect-[16/8] focus-visible:outline-2 focus-visible:outline-[#00a8e8]"
              >
                <Image
                  src={next.heroImage}
                  alt={`${next.title} – ${next.subtitle}`}
                  fill
                  sizes="(min-width: 1280px) 1200px, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#101313] via-[#101313]/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 flex items-end justify-between gap-6">
                  <div className="max-w-[28ch]">
                    <p className="text-[13px] text-[#9fb0b0] mb-3">Næste projekt</p>
                    <p className="text-[clamp(26px,3.6vw,46px)] font-semibold text-white leading-[1.1] tracking-tight">{next.title}</p>
                    <p className="mt-3 text-[15px] text-[#cfd8d8] leading-snug">{next.subtitle}</p>
                  </div>
                  <ArrowBadge size="lg" tone="dark" />
                </div>
              </Link>
            </FadeUp>
            <FadeUp className="mt-7 flex flex-wrap items-center justify-between gap-4">
              <Link href="/portefolje" className="text-[13px] text-[#5a5a5a] hover:text-[#00a8e8] transition-colors">
                ← Tilbage til alle projekter
              </Link>
              <Link
                href="/kontakt"
                className="inline-flex items-center rounded-full bg-[#00a8e8] hover:bg-[#1c1e1e] text-white px-7 py-3.5 text-[13px] font-semibold transition-colors"
              >
                Jeg vil også have en side, der virker
              </Link>
            </FadeUp>
          </div>
        </section>
      )}

      <CtaSearchBlock />
    </>
  );
}
