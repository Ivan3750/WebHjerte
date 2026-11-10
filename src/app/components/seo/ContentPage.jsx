import { Fragment } from "react";
import Link from "next/link";
import PageHero, { PrimaryLink, GhostLink } from "../ui/PageHero";
import Questions from "../Questions";
import CtaSearchBlock from "../ui/CTA";
import QuickLeadForm from "../ui/QuickLeadForm";
import ScrollProgress from "../ui/ScrollProgress";
import { FadeUp, RevealLines } from "../home/fx/Reveal";
import SpotlightCard from "../home/fx/SpotlightCard";
import SectionBody, { slugify, wantsDark } from "./ContentBlocks";
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
  const toc = sections
    .filter((s) => s.h2)
    .map((s) => ({ id: s.id || slugify(s.h2), label: s.h2 }));

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

  const hero = (
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
      aside={
        withForm ? (
          <div className="rounded-3xl glass p-6 sm:p-8">
            <QuickLeadForm />
          </div>
        ) : null
      }
    />
  );

  /* ───────────── Mellem-CTA: ingen telefonnummer, ét tydeligt næste skridt ───────────── */
  const midCtaInner = (
    <FadeUp>
      <div className="rounded-3xl glass p-7 sm:p-12 grid md:grid-cols-[1fr_auto] gap-8 items-center relative overflow-hidden" style={{ backgroundColor: "#242828" }}>
        <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#00a8e8]/10 blur-[90px]" />
        <div className="relative">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#00a8e8]" />
            Fast pris · svar inden for 24 timer
          </p>
          <p className="text-white font-semibold tracking-tight leading-[1.15] text-[clamp(20px,2.6vw,30px)] mb-4 max-w-[24ch]">
            Vil du vide, hvad det koster for dig?
          </p>
          <p className="text-[14px] text-[#93a0a0] leading-[1.85] max-w-[54ch]">
            Skriv kort, hvad du har brug for. Du får en fast pris og et første designudkast inden for 48 timer. Passer det ikke, betaler du 0 kr.
          </p>
        </div>
        <div className="relative flex flex-wrap gap-3">
          <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
        </div>
      </div>
    </FadeUp>
  );

  /* ───────────── Artikel-layout ───────────── */
  if (isArticle) {
    const midIdx = sections.length >= 4 ? Math.floor(sections.length / 2) : -1;
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <ScrollProgress />
        {hero}

        <section className="scene bg-[#f7f6f6]">
          <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 pt-14 sm:pt-20 pb-20 sm:pb-28 lg:grid lg:grid-cols-[230px_minmax(0,1fr)] lg:gap-16">
            <aside className="hidden lg:block">
              <div className="sticky top-28 flex flex-col gap-8">
                {toc.length > 1 && <TocNav items={toc} />}
                <div className="rounded-2xl bg-[#1c1e1e] p-5">
                  <p className="text-[13px] font-semibold text-white leading-snug mb-2">Vil du have hjælp til din hjemmeside?</p>
                  <p className="text-[12px] text-[#8a9696] leading-[1.7] mb-4">Fast pris og svar inden for 24 timer.</p>
                  <PrimaryLink href="/kontakt" className="!text-[12px]">
                    Få et tilbud
                  </PrimaryLink>
                </div>
              </div>
            </aside>

            <div className="max-w-[720px] min-w-0">
              {summary && (
                <FadeUp>
                  <div className="rounded-2xl bg-white border border-[#e8e6e6] p-6 sm:p-7 mb-14" style={{ borderLeft: "3px solid #00a8e8" }}>
                    <p className="text-[11px] uppercase tracking-[0.14em] text-[#00a8e8] font-medium mb-2.5">{summaryLabel}</p>
                    <p data-speakable className="text-[16px] sm:text-[17px] font-medium text-[#2a2d2d] leading-[1.8]">
                      {summary}
                    </p>
                  </div>
                </FadeUp>
              )}
              {afterSummary && <div className="mb-16">{afterSummary}</div>}

              <div className="flex flex-col gap-16 sm:gap-20">
                {sections.map((section, idx) => (
                  <div key={section.h2 || section.paragraphs?.[0]} className="contents">
                    {idx === midIdx && <div className="-mx-1">{midCtaInner}</div>}
                    <article id={section.id || (section.h2 ? slugify(section.h2) : undefined)} className="scroll-mt-28">
                      {section.eyebrow && <p className="text-[11px] uppercase tracking-[0.14em] text-[#8a8a8a] mb-3">{section.eyebrow}</p>}
                      {section.h2 && (
                        <div className="mb-6">
                          <p className="text-[12px] tabular-nums text-[#00a8e8] mb-3 flex items-center gap-3">
                            {String(idx + 1).padStart(2, "0")}
                            <span className="w-8 h-px bg-[#00a8e8]/50" />
                          </p>
                          <RevealLines
                            lines={[section.h2]}
                            className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.2] text-[clamp(22px,2.6vw,30px)] max-w-[26ch]"
                          />
                        </div>
                      )}
                      <SectionBody section={section} />
                    </article>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {extra}
        <ReadMore items={related} eyebrow="Læs videre" lines={["Flere guides,", "der kan hjælpe dig"]} />
        {faqs.length > 0 && <Questions faqs={faqs} />}
        <CtaSearchBlock />
      </>
    );
  }

  /* ───────────── Tjeneste-/side-layout: brede bånd ───────────── */
  const midIdx = sections.length >= 4 ? Math.floor(sections.length / 2) : -1;

  // Tone pr. sektion: mørk til trin/nøgletal, ellers skiftevis lys og hvid – aldrig to mørke bånd lige efter hinanden.
  const hasOverview = !!(summary || toc.length > 2);
  const tones = [];
  let prevDark = false;
  let flip = hasOverview ? 1 : 0;
  sections.forEach((s, i) => {
    const afterCta = i === midIdx; // mellem-CTA'en er mørk og ligger lige før denne sektion
    const dark = wantsDark(s) && !prevDark && !afterCta && i !== sections.length - 1 && i !== 0 && i !== midIdx - 1;
    tones.push(dark ? "dark" : flip++ % 2 === 0 ? "light" : "white");
    prevDark = dark;
  });
  const toneBg = { light: "bg-[#f7f6f6]", white: "bg-white", dark: "bg-[#1c1e1e]" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {hero}

      {(summary || toc.length > 2) && (
        <section className="scene bg-[#f7f6f6]">
          <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
            <div className={`grid gap-10 lg:gap-16 ${summary && toc.length > 2 ? "lg:grid-cols-[1.1fr_1fr]" : ""}`}>
              {summary && (
                <FadeUp>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-[#00a8e8] mb-4 flex items-center gap-3 font-medium">
                    <span className="w-8 h-px bg-[#00a8e8]" />
                    {summaryLabel}
                  </p>
                  <p data-speakable className="text-[clamp(16px,1.6vw,19px)] font-medium text-[#1c1e1e] leading-[1.75]">
                    {summary}
                  </p>
                </FadeUp>
              )}
              {toc.length > 2 && (
                <FadeUp delay={0.1}>
                  <TocNav items={toc} title="På denne side" variant="overview" />
                </FadeUp>
              )}
            </div>
            {afterSummary && <div className="mt-12">{afterSummary}</div>}
          </div>
        </section>
      )}

      {sections.map((section, idx) => {
        const tone = tones[idx];
        const dark = tone === "dark";
        const id = section.id || (section.h2 ? slugify(section.h2) : undefined);
        return (
          <Fragment key={section.h2 || section.paragraphs?.[0]}>
            {idx === midIdx && (
              <section className="scene relative overflow-hidden bg-[#1c1e1e]">
                <div aria-hidden className="grid-fade absolute inset-0 opacity-40" />
                <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-14 sm:py-20">{midCtaInner}</div>
              </section>
            )}
            <section id={id} className={`scene scroll-mt-20 ${toneBg[tone]}`}>
              <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
                <div className={section.h2 ? "lg:grid lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14 xl:gap-20" : ""}>
                  {section.h2 && (
                    <header className="mb-8 lg:mb-0">
                      <div className="lg:sticky lg:top-28">
                        <p className={`text-[clamp(40px,5vw,64px)] font-light leading-none tabular-nums mb-5 ${dark ? "text-white/15" : "text-[#d9d7d7]"}`}>
                          {String(idx + 1).padStart(2, "0")}
                        </p>
                        {section.eyebrow && (
                          <p className={`text-[11px] uppercase tracking-[0.14em] mb-3 ${dark ? "text-[#7f8c8c]" : "text-[#8a8a8a]"}`}>{section.eyebrow}</p>
                        )}
                        <RevealLines
                          lines={[section.h2]}
                          className={`font-semibold tracking-tight leading-[1.18] text-[clamp(21px,2.1vw,27px)] hyphens-auto [overflow-wrap:break-word] ${dark ? "text-white" : "text-[#1c1e1e]"}`}
                        />
                      </div>
                    </header>
                  )}
                  <div className="min-w-0">
                    <SectionBody section={section} dark={dark} />
                  </div>
                </div>
              </div>
            </section>
          </Fragment>
        );
      })}

      {glossary && (
        <section className="scene bg-[#f7f6f6]">
          <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {glossary.map((g, i) => (
                <FadeUp key={g.term} delay={(i % 2) * 0.05}>
                  <div id={slugify(g.term)} className="scroll-mt-24 h-full">
                    <SpotlightCard dark={false} className="h-full rounded-2xl bg-white border border-[#e8e6e6]">
                      <div className="p-6">
                        <dt className="text-[16px] font-semibold text-[#1c1e1e] mb-2">{g.term}</dt>
                        <dd className="text-[14px] text-[#5a5d5d] leading-[1.8]">{g.def}</dd>
                      </div>
                    </SpotlightCard>
                  </div>
                </FadeUp>
              ))}
            </dl>
          </div>
        </section>
      )}

      {extra}
      <ReadMore items={related} />
      {faqs.length > 0 && <Questions faqs={faqs} />}
      <CtaSearchBlock />
    </>
  );
}
