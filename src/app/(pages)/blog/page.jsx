import Link from "next/link";
import PageHero from "../../components/ui/PageHero";
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
    desc: "Faste pakkepriser, hvad der er inkluderet, og hvad der kan ændre prisen.",
    category: "Priser",
  },
  {
    href: "/freelancer-vs-bureau",
    title: "Freelancer eller webbureau?",
    desc: "Forskellene på ansvar, pris og kommunikation, og hvad du bør spørge om.",
    category: "Guides",
  },
];

export default function BlogPage() {
  const posts = [
    ...articles.map((a) => ({ href: `/blog/${a.slug}`, title: a.h1, desc: a.intro, category: a.category })),
    ...legacy,
  ];
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
      <section className="sheet bg-[#f7f6f6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {posts.map((post) => (
              <Link
                key={post.href}
                href={post.href}
                className="group rounded-2xl p-6 flex flex-col gap-3 bg-white border border-[#e8e6e6] hover:border-[#00a8e8]/40 transition-colors"
              >
                <p className="text-[11px] uppercase tracking-[0.14em] text-[#7a7a7a]">{post.category}</p>
                <p className="flex items-start justify-between gap-3 text-[15px] font-medium text-[#1c1e1e] group-hover:text-[#00a8e8] transition-colors leading-snug">
                  {post.title}
                  <span className="text-[#b8b6b6] group-hover:text-[#00a8e8] transition-all group-hover:translate-x-1">→</span>
                </p>
                <p className="text-[13px] text-[#6a6a6a] leading-relaxed">{post.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-[#e4e2e2] flex flex-wrap items-center gap-3">
            <span className="text-[12px] text-[#5a5a5a]">Slå begreber op:</span>
            {[
              { href: "/ordliste", label: "Ordliste" },
              { href: "/ofte-stillede-spoergsmaal", label: "Ofte stillede spørgsmål" },
              { href: "/om-webhjerte", label: "Fakta om WebHjerte" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="text-[12px] text-[#3a3a3a] bg-white border border-[#e4e2e2] rounded-full px-4 py-1.5 hover:border-[#00a8e8] hover:text-[#00a8e8] transition-colors">
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
