import Link from "next/link";
import PageHero, { PrimaryLink, GhostLink } from "../ui/PageHero";
import Questions from "../Questions";
import CtaSearchBlock from "../ui/CTA";
import QuickLeadForm from "../ui/QuickLeadForm";
import ScrollProgress from "../ui/ScrollProgress";
import { FadeUp, RevealLines } from "../home/fx/Reveal";
import SectionBody, { slugify, autoVisual } from "./ContentBlocks";
import BlogCover from "./BlogCover";
import CityScene from "./CityScene";
import TocNav from "./TocNav";
import { ReadMore } from "./RelatedCards";
import { SITE_URL, breadcrumbLd } from "../../lib/seo";
import SectionHead from "../ui/SectionHead";
import PriceStrip from "../ui/PriceStrip";
import NichePackage from "../ui/NichePackage";
import GuaranteesBlock from "../home/GuaranteesBlock";
import CasesCarousel from "../home/CasesCarousel";
import ProcessBlock from "../home/ProcessBlock";
import SupportTariffsBlock from "../../(pages)/services/_components/SupportTariffsBlock";
import { AiChatDemo, AiSavings, AiDayCompare, AiByTrade, AiStart } from "../variants/AiBlocks";
import { SiteAnatomy, SiteTree } from "../variants/SiteBlocks";
import { ShopJourney, ShopPlatforms, ShopPrice } from "../variants/ShopBlocks";
import { CareStatus, CareMonth, CareCosts } from "../variants/CareBlocks";

/**
 * Hver hovedside i menuen har sin egen opbygning og sine egne illustrerede blokke,
 * så siderne ikke ligner hinanden. `aside` erstatter formularen i hero, `blocks` erstatter
 * de fælles blokke (pris, garantier, cases, proces), og `open` er antal åbne afsnit i "Godt at vide".
 */
const VARIANTS = {
  ai: {
    aside: <AiChatDemo />,
    blocks: [<AiSavings key="s" />, <AiDayCompare key="d" />, <AiByTrade key="t" />, <AiStart key="p" />],
    open: 0,
  },
  site: {
    blocks: [<SiteAnatomy key="a" />, <SiteTree key="t" />, <PriceStrip key="p" />, <CasesCarousel key="c" />],
    open: 1,
  },
  shop: {
    blocks: [<ShopJourney key="j" />, <ShopPlatforms key="p" />, <ShopPrice key="pr" />, <CasesCarousel key="c" />],
    open: 0,
  },
  care: {
    aside: <CareStatus />,
    blocks: [
      <CareMonth key="m" />,
      <div key="t" className="bg-[#1c1e1e] pt-16 sm:pt-24">
        <SupportTariffsBlock />
      </div>,
      <CareCosts key="c" />,
    ],
    open: 0,
  },
};

const fmtDate = (iso) =>
  new Date(iso).toLocaleDateString("da-DK", { day: "numeric", month: "long", year: "numeric" });

const defaultFacts = [
  { num: "48 timer", label: "Til første designudkast" },
  { num: "0 kr", label: "Hvis designet ikke passer" },
  { num: "24 timer", label: "Svar på din henvendelse" },
];

/**
 * Fælles skabelon til indholdssider (tjenester, lokale sider, brancher, FAQ) og blogartikler.
 *
 * To layouts:
 *  - "service": skrevet til kunden først. Efter hero kommer pris, garantier, cases og proces,
 *    og den lange tekst ligger nederst som "Godt at vide" med sammenklappelige afsnit.
 *    Al tekst er stadig i HTML'en, så Google kan læse den.
 *  - "page" (fx FAQ): kun guide-delen, uden nummerering.
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
  nichePackage,
  description,
  extra,
  afterSummary,
  readMinutes,
  city,
  variant,
}) {
  const v = VARIANTS[variant];
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
        priceSpecification: { "@type": "PriceSpecification", price: "2500", priceCurrency: "DKK", valueAddedTaxIncluded: true },
        description: "Priser starter fra 2.500 kr (inkl. moms) for en landingside",
      },
    });
  }

  const jsonLd = { "@context": "https://schema.org", "@graph": graph.filter(Boolean) };

  const isArticle = type === "article";
  const isService = type === "service";
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

  const aside = v?.aside ? v.aside : withForm ? (
    <div className="rounded-3xl glass p-6 sm:p-8">
      <QuickLeadForm />
    </div>
  ) : null;

  const midIdx = sections.length >= 4 ? Math.floor(sections.length / 2) : -1;

  // Samme illustration må kun bruges én gang pr. side
  const used = new Set();
  const visuals = sections.map((s, i) => {
    // I artikler står forsidebilledet lige over første afsnit, så det får ingen ekstra illustration
    const v = isArticle && i === 0 && !s.visual ? null : autoVisual(s, i, isArticle);
    const name = typeof v === "string" ? v : v?.name;
    if (!name) return null;
    if (used.has(name) && !s.visual) return null;
    used.add(name);
    return v;
  });

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
          <p className="readable text-[16px] text-[#a6b1b1] leading-[1.75] max-w-[50ch] mb-7">
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
      {isArticle && <ScrollProgress />}
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
        below={city ? <CityScene city={city} /> : null}
      />

      {isArticle ? (
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

            <div className="readable max-w-[740px] min-w-0">
              {/* Illustration og et kort svar øverst – så man får pointen uden at læse hele guiden */}
              <FadeUp className="mb-14">
                <BlogCover href={path} dark h="h-[220px] sm:h-[320px]" />
                {summary && (
                  <aside className="mt-5 rounded-3xl bg-white border border-[#e8e6e6] p-6 sm:p-8">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-[#00a8e8] font-semibold mb-3">{summaryLabel}</p>
                    <p className="text-[16.5px] leading-[1.75] text-[#2a2f30]">{summary}</p>
                  </aside>
                )}
              </FadeUp>
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
                      <SectionBody section={section} idx={idx} visual={visuals[idx]} />
                    </article>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {v ? v.blocks : isService && (
            <>
              <PriceStrip />
              <GuaranteesBlock />
              {nichePackage && <NichePackage className="bg-[#f7f6f6] pt-16 sm:pt-24" trade={nichePackage} />}
              <CasesCarousel />
              <ProcessBlock />
            </>
          )}
          {afterSummary}
          <GuideSection sections={sections} visuals={visuals} collapse={isService} open={v ? v.open : 2} />
        </>
      )}

      {extra}
      <ReadMore items={related} eyebrow="Læs videre" lines={isArticle ? ["Flere guides,", "der kan hjælpe dig"] : ["Næste skridt", "for dig"]} />
      {faqs.length > 0 && <Questions faqs={faqs} />}
      <CtaSearchBlock />
    </>
  );
}

const Chevron = () => (
  <span aria-hidden className="w-9 h-9 rounded-full border border-[#dcdada] flex items-center justify-center shrink-0 transition-transform duration-300 group-open:rotate-180">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2.5 4.5L6 8l3.5-3.5" stroke="#1c1e1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

/**
 * "Godt at vide": den lange tekst til dem, der vil læse mere – uden nummerering og indholdsfortegnelse.
 * På tjenestesider er de første to afsnit åbne og resten sammenklappet (<details>), men stadig i HTML'en.
 */
function GuideSection({ sections, visuals, collapse, open: openCount = 2 }) {
  const h2Class = "text-[#1c1e1e] font-semibold tracking-tight leading-[1.2] text-[clamp(20px,2.4vw,28px)] [overflow-wrap:break-word]";
  return (
    <section className="scene bg-[#f7f6f6]">
      <div className="readable max-w-[820px] mx-auto px-5 sm:px-10 pt-16 sm:pt-24 pb-20 sm:pb-28">
        {collapse && (
          <SectionHead
            eyebrow="Godt at vide"
            lines={["Vil du vide mere,", "før du beslutter dig?"]}
            lead="Her er det vigtigste samlet – åbn de emner, der er relevante for dig."
            className="mb-10 sm:mb-14"
          />
        )}
        <div className="flex flex-col gap-4">
          {sections.map((section, idx) => {
            const id = section.id || (section.h2 ? slugify(section.h2) : undefined);
            const open = !collapse || !section.h2 || idx < openCount;
            if (open) {
              return (
                <article key={section.h2 || section.paragraphs?.[0]} id={id} className="scroll-mt-28 rounded-3xl bg-white border border-[#e8e6e6] p-6 sm:p-9">
                  {section.h2 && <h2 className={`${h2Class} mb-6`}>{section.h2}</h2>}
                  <SectionBody section={section} idx={idx} visual={visuals[idx]} />
                </article>
              );
            }
            return (
              <details key={section.h2} id={id} className="group scroll-mt-28 rounded-3xl bg-white border border-[#e8e6e6] open:border-[#cfe9f5] transition-colors">
                <summary className="list-none [&::-webkit-details-marker]:hidden cursor-pointer flex items-center justify-between gap-4 p-6 sm:px-9 sm:py-7">
                  <h2 className={`${h2Class} min-w-0`}>{section.h2}</h2>
                  <Chevron />
                </summary>
                <div className="px-6 sm:px-9 pb-7 sm:pb-9">
                  <SectionBody section={section} idx={idx} visual={visuals[idx]} />
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
