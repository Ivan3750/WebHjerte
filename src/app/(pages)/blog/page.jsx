import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
import { FadeUp, RevealLines } from "../../components/home/fx/Reveal";
import BlogList from "./_components/BlogList";
import CtaSearchBlock from "../../components/ui/CTA";
import { articles } from "../../data/content";
import { breadcrumbLd, SITE_URL } from "../../lib/seo";

export const metadata = {
  title: "Blog – guides om hjemmesider, SEO og AI-synlighed | WebHjerte",
  description:
    "Guides om hjemmesider, priser, lokal SEO og synlighed i AI-søgning, skrevet af WebHjerte i Horsens. Praktiske råd til små virksomheder.",
  alternates: { canonical: "https://www.webhjerte.dk/blog" },
};

const legacy = [
  {
    href: "/blog/hvad-koster-en-hjemmeside-2026",
    title: "Hvad koster en hjemmeside i 2026?",
    desc: "Rigtige tal: hjemmesidebygger, freelancer og bureau sammenlignet – plus prisberegner.",
    category: "Priser",
    readMinutes: 10,
    updated: "2026-11-10",
  },
  {
    href: "/freelancer-vs-bureau",
    title: "Freelancer eller webbureau?",
    desc: "Forskellene på ansvar, pris og kommunikation, og hvad du bør spørge om.",
    category: "Guides",
  },
  {
    href: "/webstrategi",
    title: "Webstrategi: en klar plan, før du bygger",
    desc: "Sådan finder du ud af, hvad din hjemmeside skal kunne – før du bruger penge på den.",
    category: "Guides",
  },
  {
    href: "/baeredygtigt-webdesign",
    title: "Bæredygtigt webdesign",
    desc: "Lette, hurtige sider, der belaster mindre – og som kunderne har det bedre med.",
    category: "Guides",
  },
  {
    href: "/ofte-stillede-spoergsmaal",
    title: "Ofte stillede spørgsmål",
    desc: "Korte, ærlige svar om priser, tid, ejerskab og samarbejde.",
    category: "FAQ",
  },
];

export default function BlogPage() {
  const fmt = (iso) => new Date(iso).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" });
  const posts = [
    legacy[0],
    ...articles.map((a) => ({ href: `/blog/${a.slug}`, title: a.h1, desc: a.intro, category: a.category, readMinutes: a.readMinutes, updated: a.updated })),
    ...legacy.slice(1),
  ].map((p) => ({
    ...p,
    category: p.category === "Guides" ? "Guides" : p.category,
    meta: [p.readMinutes ? `${p.readMinutes} min. læsning` : null, p.updated ? `Opdateret ${fmt(p.updated)}` : null].filter(Boolean).join(" · ") || undefined,
  }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/blog#page`,
        url: `${SITE_URL}/blog`,
        name: "Blog – guides om hjemmesider, SEO og AI-synlighed",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        inLanguage: "da-DK",
        hasPart: posts.map((p) => ({ "@type": "Article", headline: p.title, url: `${SITE_URL}${p.href}` })),
      },
      { "@type": "BreadcrumbList", itemListElement: breadcrumbLd([{ name: "Forside", path: "/" }, { name: "Blog", path: "/blog" }]).itemListElement },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        breadcrumbs={[{ label: "Forside", href: "/" }, { label: "Blog" }]}
        eyebrow="Blog"
        titleLines={["Guides om hjemmesider,", "SEO og AI-synlighed"]}
        lead="Praktiske guides til dig, der skal have en hjemmeside til din virksomhed i Horsens eller Midtjylland – og blive fundet i både Google og AI-søgning."
        size="md"
      />
      <section className="scene bg-[#f7f6f6]">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
          <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#00a8e8]" />
            Alle guides
          </FadeUp>
          <RevealLines
            lines={["Skrevet til dig, der", "driver en lille virksomhed"]}
            className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.1] text-[clamp(24px,3.3vw,40px)] mb-10 sm:mb-14"
          />

          <BlogList posts={posts} />

          <div className="mt-16 pt-8 border-t border-[#e4e2e2] flex flex-wrap items-center gap-3">
            <span className="text-[12px] text-[#5a5a5a]">Mere fra WebHjerte:</span>
            {[
              { href: "/ofte-stillede-spoergsmaal", label: "Ofte stillede spørgsmål" },
              { href: "/om-mig", label: "Om mig" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-[12px] text-[#3a3a3a] bg-white border border-[#e4e2e2] rounded-full px-4 py-2 hover:border-[#00a8e8] hover:text-[#00a8e8] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CtaSearchBlock />
    </>
  );
}
