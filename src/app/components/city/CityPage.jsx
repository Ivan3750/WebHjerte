import Link from "next/link";
import PageHero, { PrimaryLink, GhostLink } from "../ui/PageHero";
import SectionHead from "../ui/SectionHead";
import BureauCompare from "../ui/BureauCompare";
import PriceStrip from "../ui/PriceStrip";
import FormToLead from "../ui/FormToLead";
import CasesCarousel from "../home/CasesCarousel";
import { FadeUp } from "../home/fx/Reveal";
import { SerpSimulator, BreakEven, ZigZag } from "./CityBlocks";
import { SITE_URL, breadcrumbLd } from "../../lib/seo";
import { isHiddenHref } from "../../data/hidden";

/**
 * Personlig byside med fokus på virksomhedens resultat. Hver sektion har sin egen opbygning:
 *  1 Hero  2 Redaktionel tekst  3 Google-simulator  4 Tre søjler (skiftevis)  5 Brancher (bento)
 *  6 Hjemtjent-beregner  7 Sammenligning  8 Forløb (zig-zag)  9 Priser  10 Cases  11 Kontakt
 * Ingen tegninger af byen – bynavn, bydele og eksempler gør siden personlig.
 */
const wrap = "max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24";

export default function CityPage({ city }) {
  const url = `${SITE_URL}${city.path}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: city.serviceName,
        description: city.lead,
        inLanguage: "da-DK",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: city.serviceName,
        serviceType: "Webbureau",
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: [{ "@type": "City", name: city.name }, { "@type": "Country", name: "Danmark" }],
        offers: {
          "@type": "Offer",
          priceCurrency: "DKK",
          price: "2500",
          priceSpecification: { "@type": "PriceSpecification", price: "2500", priceCurrency: "DKK", valueAddedTaxIncluded: true },
          description: "Priser starter fra 2.500 kr (inkl. moms) for en landingside",
        },
      },
      { ...breadcrumbLd([{ name: "Forside", path: "/" }, { name: city.breadcrumb, path: city.path }]) },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* 1. Hero – uden formular og uden bygrafik */}
      <PageHero
        titleLines={[city.h1]}
        lead={city.lead}
        actions={
          <>
            <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
            <GhostLink href={city.secondary.href}>{city.secondary.label}</GhostLink>
          </>
        }
        aside={
          <div className="rounded-3xl bg-[#242828] border border-white/10 p-6 sm:p-8">
            <p className="text-[16px] font-semibold text-white mb-6">{city.aside.title}</p>
            <div className="flex flex-col gap-5">
              {city.aside.items.map((d, i) => (
                <div key={d.num} className={i ? "pt-5 border-t border-white/10" : ""}>
                  <p className="text-[clamp(26px,2.8vw,34px)] font-semibold leading-none tracking-tight text-white">{d.num}</p>
                  <p className="text-[15px] text-[#b4bdbd] mt-2 leading-snug">{d.label}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* 2. Redaktionel: stor overskrift til venstre, tekst og slagord til højre */}
      <section className="scene bg-[#f7f6f6]">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-24 items-start`}>
          <div className="lg:sticky lg:top-28">
            <SectionHead lines={city.editorial.title} maxW="max-w-[24ch]" className="!mb-0" />
          </div>
          <div className="flex flex-col gap-6">
            {city.editorial.paragraphs.map((t, i) => (
              <FadeUp key={i} delay={i * 0.06} as="p" className={i === 0 ? "text-[19px] text-[#1c1e1e] leading-[1.65] font-medium" : "text-[16px] text-[#4a4a4a] leading-[1.75]"}>
                {t}
              </FadeUp>
            ))}
            <FadeUp className="mt-4 rounded-3xl bg-[#1c1e1e] p-7 sm:p-10">
              {city.editorial.punch.map((l, i) => (
                <p key={l} className={`text-[clamp(26px,3.2vw,40px)] font-semibold leading-[1.15] tracking-tight ${i === 2 ? "text-[#00a8e8]" : "text-white"}`}>
                  {l}
                </p>
              ))}
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 3. Google-simulator (interaktiv) */}
      <section className="scene bg-[#1c1e1e]">
        <div className={wrap}>
          <SectionHead dark lines={city.serp.title} lead={city.serp.lead} maxW="max-w-[30ch]" />
          <SerpSimulator branches={city.serp.branches} districts={city.serp.districts} improvements={city.serp.improvements} cityName={city.name} />
        </div>
      </section>

      {/* 4. Tre søjler – tekst og eksempel bytter side */}
      <section className="scene bg-[#eceeee]">
        <div className={wrap}>
          <SectionHead lines={city.pillars.title} maxW="max-w-[30ch]" />
          <div className="flex flex-col gap-10 sm:gap-14">
            {city.pillars.items.map((p, i) => (
              <FadeUp key={p.n} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center">
                <div className={i % 2 ? "lg:order-2" : ""}>
                  <p className="text-[clamp(44px,5vw,64px)] font-light leading-none tabular-nums text-[#00a8e8] mb-4">{p.n}</p>
                  <h3 className="text-[clamp(22px,2.4vw,30px)] font-semibold text-[#1c1e1e] leading-snug tracking-tight mb-4">{p.title}</h3>
                  <p className="text-[16px] text-[#4a4a4a] leading-[1.75] max-w-[52ch]">{p.text}</p>
                </div>
                <div className={`rounded-3xl p-7 sm:p-9 ${i % 2 ? "bg-white border border-[#e8e6e6] lg:order-1" : "bg-[#1c1e1e]"}`}>
                  <p className={`text-[13px] font-semibold mb-3 ${i % 2 ? "text-[#00a8e8]" : "text-[#00a8e8]"}`}>{p.example.label}</p>
                  <p className={`text-[17px] leading-[1.65] ${i % 2 ? "text-[#1c1e1e]" : "text-white"}`}>{p.example.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Brancher – ujævnt gitter (bento) */}
      <section className="scene bg-[#1c1e1e]">
        <div className={wrap}>
          <SectionHead dark lines={city.industries.title} lead={city.industries.lead} />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <FadeUp className="lg:col-span-2 lg:row-span-2">
              <Link href={city.industries.big.href} className="group h-full rounded-3xl bg-[#00a8e8] p-8 sm:p-12 flex flex-col justify-between gap-10 min-h-[340px] hover:bg-[#0092cb] transition-colors">
                <div>
                  <p className="text-[14px] font-semibold text-white/90 mb-4">{city.industries.big.goal}</p>
                  <h3 className="text-[clamp(28px,3.4vw,44px)] font-semibold text-white leading-[1.1] tracking-tight mb-5">{city.industries.big.title}</h3>
                  <p className="text-[17px] text-white/95 leading-[1.7] max-w-[46ch]">{city.industries.big.text}</p>
                </div>
                <span className="text-[15px] font-semibold text-white">{city.industries.big.cta} →</span>
              </Link>
            </FadeUp>
            {city.industries.small.map((x, i) => {
              // Skjulte sider (se data/hidden.js): kortet bliver stående, men uden link
              const linked = x.href && !isHiddenHref(x.href);
              const Tag = linked ? Link : "div";
              return (
                <FadeUp key={x.title} delay={0.08 * (i + 1)}>
                  <Tag {...(linked ? { href: x.href } : {})} className={`group h-full rounded-3xl bg-[#242828] border border-white/10 p-7 flex flex-col gap-3 ${linked ? "hover:bg-[#2a2e2e] transition-colors" : ""}`}>
                    <p className="text-[13px] font-semibold text-[#00a8e8]">{x.goal}</p>
                    <p className="text-[21px] font-semibold text-white leading-snug">{x.title}</p>
                    <p className="text-[15px] text-[#b4bdbd] leading-[1.7] flex-1">{x.text}</p>
                    {linked && <span className="text-[14px] font-semibold text-white mt-2">{x.cta} →</span>}
                  </Tag>
                </FadeUp>
              );
            })}
            <FadeUp className="lg:col-span-3" delay={0.24}>
              <Link href={city.industries.wide.href} className="group rounded-3xl bg-[#242828] border border-white/10 p-7 sm:p-9 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#2a2e2e] transition-colors">
                <div className="max-w-[62ch]">
                  <p className="text-[13px] font-semibold text-[#00a8e8] mb-2">{city.industries.wide.goal}</p>
                  <p className="text-[22px] font-semibold text-white leading-snug mb-2">{city.industries.wide.title}</p>
                  <p className="text-[15px] text-[#b4bdbd] leading-[1.7]">{city.industries.wide.text}</p>
                </div>
                <span className="btn-ghost shrink-0">{city.industries.wide.cta}</span>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* 6. Hjemtjent-beregner (interaktiv) */}
      <section className="scene bg-[#f7f6f6]">
        <div className={wrap}>
          <SectionHead lines={city.breakeven.title} lead={city.breakeven.lead} />
          <BreakEven />
        </div>
      </section>

      {/* 7. Sammenligning */}
      <section className="scene bg-[#1c1e1e]">
        <div className={wrap}>
          <SectionHead dark lines={city.compare.title} lead={city.compare.lead} />
          <BureauCompare rows={city.compare.rows} agencyLabel={city.compare.agencyLabel} meLabel="WebHjerte – Horsens" />
        </div>
      </section>

      {/* 8. Forløb som zig-zag */}
      <section className="scene bg-[#eceeee]">
        <div className={wrap}>
          <SectionHead lines={city.collab.title} lead={city.collab.lead} maxW="max-w-[30ch]" />
          <ZigZag steps={city.collab.steps} />
        </div>
      </section>

      {/* 9–11. Priser, cases og kontakt */}
      <PriceStrip />
      <CasesCarousel />
      <FormToLead titleLine={city.formTitle} description={city.formDescription} />
    </>
  );
}
