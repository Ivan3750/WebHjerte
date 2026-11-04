"use client";

import Link from "next/link";
import Image from "next/image";
import PageHero from "../../../components/ui/PageHero";
import CtaSearchBlock from "../../../components/ui/CTA";
import { FadeUp } from "../../../components/home/fx/Reveal";

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
            <div className="relative rounded-3xl overflow-hidden border border-[#e8e6e6] bg-[#111313] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.5)]">
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
              <p className="text-[15px] font-semibold text-[#111313]">{project.client}</p>
              <p className="text-[13px] text-[#6a6a6a] mt-1">{project.location}</p>
              {project.site && (
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-[13px] text-[#00a8e8] hover:underline"
                >
                  {hostOf(project.site)} ↗
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
      <section className="scene bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#00a8e8]" />
              Om projektet
            </FadeUp>
            <FadeUp as="h2" delay={0.05} className="text-[#111313] font-semibold tracking-tight leading-[1.15] text-[clamp(24px,3.2vw,40px)]">
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
                  className="inline-flex items-center gap-2 rounded-full bg-[#00a8e8] hover:bg-[#111313] text-white px-7 py-3.5 text-[13px] font-semibold transition-colors"
                >
                  Se hjemmesiden <span aria-hidden>↗</span>
                </a>
              </FadeUp>
            )}
          </div>
        </div>
      </section>

      {/* Proces */}
      <section className="scene bg-[#0b0d0d]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-20 sm:py-28 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { n: "01", kicker: "UX/UI Design", title: "Design & brugeroplevelse", text: project.designDescription },
            { n: "02", kicker: "Udvikling", title: "Fra idé til færdigt produkt", text: project.developmentDescription, tech: true },
          ].map((b, i) => (
            <FadeUp key={b.n} delay={i * 0.08}>
              <div className="h-full rounded-3xl glass p-7 sm:p-10 flex flex-col gap-4">
                <span className="text-[44px] font-light leading-none tabular-nums text-[#00a8e8]">{b.n}</span>
                <p className="text-[11px] uppercase tracking-[0.16em] text-[#7f8c8c]">{b.kicker}</p>
                <h3 className="text-[22px] sm:text-[26px] font-semibold text-white leading-tight tracking-tight">{b.title}</h3>
                <p className="text-[14px] text-[#93a0a0] leading-[1.85]">{b.text}</p>
                {b.tech && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-3">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-[12px] px-3.5 py-1.5 rounded-full border border-white/10 text-[#b4bebe]">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Næste case */}
      {next && next.slug !== project.slug && (
        <section className="scene bg-[#f7f6f6]">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
            <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a] mb-6 flex items-center gap-3">
              <span className="w-8 h-px bg-[#00a8e8]" />
              Næste projekt
            </FadeUp>
            <FadeUp>
              <Link
                href={`/portefolje/${next.slug}`}
                className="group grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-6 md:gap-10 items-center rounded-3xl bg-white border border-[#e8e6e6] p-3 sm:p-4 hover:border-[#00a8e8]/40 transition-colors"
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#111313]">
                  <Image
                    src={next.heroImage}
                    alt={`${next.title} – ${next.subtitle}`}
                    fill
                    sizes="(min-width: 768px) 55vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                  />
                </div>
                <div className="px-3 pb-4 md:pb-0 md:pr-8 flex flex-col gap-3">
                  <p className="text-[22px] sm:text-[26px] font-semibold text-[#111313] leading-tight tracking-tight">
                    {next.title}
                    <span className="block text-[15px] font-normal text-[#8a8a8a] mt-1.5">{next.subtitle}</span>
                  </p>
                  <span className="inline-flex items-center gap-2 text-[13px] font-medium text-[#111313] group-hover:text-[#00a8e8] transition-colors">
                    Se projektet <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </FadeUp>
            <FadeUp className="mt-6">
              <Link href="/portefolje" className="text-[13px] text-[#5a5a5a] hover:text-[#00a8e8] transition-colors">
                ← Tilbage til alle projekter
              </Link>
            </FadeUp>
          </div>
        </section>
      )}

      <CtaSearchBlock />
    </>
  );
}
