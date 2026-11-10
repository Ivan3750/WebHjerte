import Link from "next/link";
import PageHero, { PrimaryLink, GhostLink } from "../ui/PageHero";
import Questions from "../Questions";
import CtaSearchBlock from "../ui/CTA";
import QuickLeadForm from "../ui/QuickLeadForm";
import ScrollProgress from "../ui/ScrollProgress";
import { FadeUp, RevealLines } from "../home/fx/Reveal";
import SectionBody, { slugify } from "./ContentBlocks";
import CityScene from "./CityScene";
import TocNav from "./TocNav";
import { ReadMore } from "./RelatedCards";
import { SITE_URL, breadcrumbLd } from "../../lib/seo";

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" });

const defaultFacts = [
  { num: "48 timer", label: "Til første designudkast" },
  { num: "0 kr", label: "Hvis designet ikke passer" },
  { num: "24 timer", label: "Svar på din henvendelse" },
];

/**
 * Fælles skabelon til alle indholdssider (tjenester, lokale sider, guides, ordliste, FAQ).
 *
 * Samme struktureret data (JSON-LD) til Google og AI-assistenter, men to layouts:
 *  - "service"/"page": brede bånd i skiftende toner (lys/hvid/mørk) med overskrift i venstre kolonne,
 *    ligesom sektionerne på forsiden – og et overblik øverst.
 *  - "article": roligt læselayout med indholdsfortegnelse, der følger med, og læsefremgang.
 * Sektioner kan bruge: paragraphs, stats, quote, callout, bullets, compare, after, steps, cards, table, subs, cta.
 */
export default function ContentPage({
  path,
  type = "service", // "service" | "article" | "page"
  name,
  serviceType,
  eyebrow,
  h1,
  intro,
  summary,
  summaryLabel = "Kort svar",
  sections = [],
  faqs = [],
  related = [],
  breadcrumbs = [],
  published,
  updated,
  facts = defaultFacts,
  withForm = true,
  glossary,
  description,
  extra,
  afterSummary,
  readMinutes,
  city,
}) {
  const url = `${SITE_URL}${path}`;
  const trail = [{ name: "Forside", path: "/" }, ...breadcrumbs.map((b) => ({ name: b.label, path: b.href })), { name, path }];

  const graph = [
    {
      "@type": type === "article" ? "Article" : "WebPage",
      "@id": `${url}#page`,
      url,
      name,
      headline: type === "article" ? h1 : undefined,
      description: description || intro,
      inLanguage: "da-DK",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      author: type === "article" ? { "@id": `${SITE_URL}/#ivan` } : undefined,
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: type === "article" ? url : undefined,
      datePublished: published,
      dateModified: updated || published,
      speakable: {
        "@type": "SpeakableSpecification",
        cssSelector: ["[data-speakable]"],
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbLd(trail).itemListElement,
    },
  ];

  if (type === "service") {
    graph.push({
      "@type": "Service",
      "@id": `${url}#service`,
      name,
      serviceType: serviceType || name,
      url,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: [
        { "@type": "City", name: "Horsens" },
        { "@type": "AdministrativeArea", name: "Midtjylland" },
        { "@type": "Country", name: "Danmark" },
      ],
      offers: {
        "@type": "Offer",
        priceCurrency: "DKK",
        price: "2500",
        description: "Priser starter fra 2.500 kr (ekskl. moms) for en landingside",
      },
    });
  }

  if (glossary) {
    graph.push({
      "@type": "DefinedTermSet",
      "@id": `${url}#terms`,
      name,
      hasDefinedTerm: glossary.map((g) => ({
        "@type": "DefinedTerm",
        name: g.term,
        description: g.def,
        inDefinedTermSet: `${url}#terms`,
      })),
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph.filter(Boolean) };

  const isArticle = type === "article";
  const toc = sections.filter((s) => s.h2).map((s) => ({ id: s.id || slugify(s.h2), label: s.h2 }));

  const heroMeta = isArticle ? (
    <>
      <span>
        Af{" "}
        <Link href="/om-mig" className="text-[#c9d3d3] border-b border-white/25 hover:border-[#00a8e8] hover:text-[#00a8e8] transition-colors">
          Ivan Kohan
        </Link>
      </span>
      <span className="w-1 h-1 rounded-full bg-white/25" aria-hidden />
      <span>{updated ? `Opdateret ${fmtDate(updated)}` : published ? fmtDate(published) : "Webudvikler i Horsens"}</span>
      {readMinutes ? (
        <>
          <span className="w-1 h-1 rounded-full bg-white/25" aria-hidden />
          <span>{readMinutes} min. læsning</span>
        </>
      ) : null}
    </>
  ) : null;

  const aside = city ? (
    <CityScene city={city} />
  ) : withForm ? (
    <div className="rounded-3xl glass p-6 sm:p-8">
      <QuickLeadForm />
    </div>
  ) : null;

  const midIdx = sections.length >= 4 ? Math.floor(sections.length / 2) : -1;

  /* Mellem-CTA: mørkt kort i læsespalten – uden telefonnummer, ét tydeligt næste skridt */
  const midCta = (
    <FadeUp className="my-4">
      <div className="relative overflow-hidden rounded-3xl bg-[#1c1e1e] p-7 sm:p-10">
        <div aria-hidden className="grid-fade absolute inset-0 opacity-40" />
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#00a8e8]/10 blur-[90px]" />
        <div className="relative">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#00a8e8]" />
            Fast pris · svar inden for 24 timer
          </p>
          <p className="text-white font-semibold tracking-tight leading-[1.15] text-[clamp(20px,2.4vw,28px)] mb-4 max-w-[22ch]">
            Vil du vide, hvad det koster for dig?
          </p>
          <p className="text-[14px] text-[#93a0a0] leading-[1.85] max-w-[50ch] mb-7">
            Skriv kort, hvad du har brug for. Du får en fast pris og et første designudkast inden for 48 timer. Passer det ikke, betaler du 0 kr.
          </p>
          <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
        </div>
      </div>
    </FadeUp>
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ScrollProgress />
      <PageHero
        eyebrow={eyebrow}
        titleLines={[h1]}
        lead={intro}
        size="md"
        meta={heroMeta}
        facts={type === "service" ? facts : null}
        actions={
          <>
            <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
            <GhostLink href={isArticle ? "/blog" : "/portefolje"}>{isArticle ? "Flere guides" : "Se eksempler"}</GhostLink>
          </>
        }
        aside={aside}
      />

      <section className="scene bg-[#f7f6f6]">
        <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 pt-14 sm:pt-20 pb-20 sm:pb-28 lg:grid lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16">
          <aside className="hidden lg:block">
            <div className="sticky top-28 flex flex-col gap-8">
              {toc.length > 1 && <TocNav items={toc} title={isArticle ? "I denne guide" : "På denne side"} />}
              <div className="relative overflow-hidden rounded-3xl bg-[#1c1e1e] p-5">
                <div aria-hidden className="pointer-events-none absolute -top-12 -right-12 w-32 h-32 rounded-full bg-[#00a8e8]/15 blur-2xl" />
                <div className="relative">
                  <p className="text-[13px] font-semibold text-white leading-snug mb-2">Vil du have hjælp til din hjemmeside?</p>
                  <p className="text-[12px] text-[#8a9696] leading-[1.7] mb-4">Fast pris og svar inden for 24 timer.</p>
                  <PrimaryLink href="/kontakt" className="!text-[12px]">
                    Få et tilbud
                  </PrimaryLink>
                </div>
              </div>
            </div>
          </aside>

          <div className="max-w-[740px] min-w-0">
            {summary && (
              <FadeUp>
                <div className="relative overflow-hidden rounded-3xl bg-white border border-[#e8e6e6] p-6 sm:p-8 mb-14">
                  <div aria-hidden className="pointer-events-none absolute -top-14 -right-14 w-44 h-44 rounded-full bg-[#00a8e8]/10 blur-2xl" />
                  <p className="relative text-[11px] uppercase tracking-[0.16em] text-[#00a8e8] font-semibold mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00a8e8] text-[#10181a] flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                        <path d="M5 12l5 5 9-10" />
                      </svg>
                    </span>
                    {summaryLabel}
                  </p>
                  <p data-speakable className="relative text-[16px] sm:text-[17px] font-medium text-[#2a2d2d] leading-[1.8]">
                    {summary}
                  </p>
                </div>
              </FadeUp>
            )}
            {afterSummary && <div className="mb-16">{afterSummary}</div>}

            <div className="flex flex-col gap-16 sm:gap-20">
              {sections.map((section, idx) => (
                <div key={section.h2 || section.paragraphs?.[0]} className="contents">
                  {idx === midIdx && midCta}
                  <article id={section.id || (section.h2 ? slugify(section.h2) : undefined)} className="scroll-mt-28">
                    {section.eyebrow && <p className="text-[11px] uppercase tracking-[0.14em] text-[#8a8a8a] mb-3">{section.eyebrow}</p>}
                    {section.h2 && (
                      <div className="mb-6">
                        <p className="text-[12px] tabular-nums text-[#00a8e8] mb-3 flex items-center gap-3">
                          {String(idx + 1).padStart(2, "0")}
                          <span className="w-10 h-px bg-[#00a8e8]/40" />
                        </p>
                        <RevealLines
                          lines={[section.h2]}
                          className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.2] text-[clamp(22px,2.6vw,30px)] max-w-[26ch] [overflow-wrap:break-word]"
                        />
                      </div>
                    )}
                    <SectionBody section={section} idx={idx} />
                  </article>
                </div>
              ))}

              {glossary && (
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {glossary.map((g, i) => (
                    <FadeUp key={g.term} delay={(i % 2) * 0.05}>
                      <div id={slugify(g.term)} className="scroll-mt-24 h-full rounded-3xl bg-white border border-[#e8e6e6] p-6 transition-colors hover:border-[#cfe9f5]">
                        <dt className="text-[16px] font-semibold text-[#1c1e1e] mb-2">{g.term}</dt>
                        <dd className="text-[14px] text-[#5a5d5d] leading-[1.8]">{g.def}</dd>
                      </div>
                    </FadeUp>
                  ))}
                </dl>
              )}
            </div>
          </div>
        </div>
      </section>

      {extra}
      <ReadMore items={related} eyebrow="Læs videre" lines={isArticle ? ["Flere guides,", "der kan hjælpe dig"] : ["Næste skridt", "for dig"]} />
      {faqs.length > 0 && <Questions faqs={faqs} />}
      <CtaSearchBlock />
    </>
  );
}
