import Image from "next/image";
import PageHero, { PrimaryLink } from "../../components/ui/PageHero";
import { FadeUp, RevealLines } from "../../components/home/fx/Reveal";
import BlogList from "./_components/BlogList";
import { articles } from "../../data/content";
import Ivan from "../../assets/Ivan.jpg";
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
        titleLines={["Guides om hjemmesider,", "SEO og AI-synlighed"]}
        lead="Praktiske guides til dig, der skal have en hjemmeside til din virksomhed i Horsens eller Midtjylland – og blive fundet i både Google og AI-søgning."
        size="md"
      />
      <section className="scene bg-[#f7f6f6]">
        <div className="px-5 sm:px-10 lg:px-16 xl:px-20 py-16 sm:py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-14">
            <RevealLines
              lines={["Skrevet til dig, der", "driver en lille virksomhed"]}
              className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.1] text-[clamp(24px,2.6vw,34px)]"
            />

            <FadeUp className="flex items-center gap-4 rounded-3xl bg-white border border-[#e8e6e6] pl-3 pr-6 py-3 w-fit">
              <Image src={Ivan} alt="Ivan Kohan" width={52} height={52} className="w-[52px] h-[52px] rounded-full object-cover object-[50%_24%]" />
              <div>
                <p className="text-[14px] font-semibold text-[#1c1e1e] leading-tight">Ivan Kohan</p>
                <p className="text-[12.5px] text-[#6a6a6a] mt-1">Webudvikler i Horsens · {posts.length} guides, opdateres løbende</p>
              </div>
            </FadeUp>
          </div>

          <BlogList posts={posts} />

          <FadeUp className="mt-14 sm:mt-20 rounded-3xl bg-[#1c1e1e] p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-white font-semibold text-[clamp(18px,2vw,24px)] leading-snug mb-2">Savner du en guide om et bestemt emne?</p>
              <p className="readable text-[15px] text-[#b4bdbd] leading-[1.7] max-w-[52ch]">
                Skriv til mig, hvad du undrer dig over – så skriver jeg gerne en guide om det.
              </p>
            </div>
            <PrimaryLink href="/kontakt">Foreslå et emne</PrimaryLink>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
