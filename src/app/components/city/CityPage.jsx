import Link from "next/link";
import PageHero, { PrimaryLink, GhostLink } from "../ui/PageHero";
import SectionHead from "../ui/SectionHead";
import BureauCompare from "../ui/BureauCompare";
import PriceStrip from "../ui/PriceStrip";
import FormToLead from "../ui/FormToLead";
import CasesCarousel from "../home/CasesCarousel";
import { FadeUp } from "../home/fx/Reveal";
import { CityStats, DistrictPicker, CityTimeline } from "./CityBlocks";
import { SITE_URL, breadcrumbLd } from "../../lib/seo";

/**
 * Personlig byside. Hver sektion er forskellig opbygget, så siden føles som en rejse gennem byen:
 *  1 Hero med afstand  2 Byen i tal  3 Vælg bydel  4 Fire tjek  5 Brancher
 *  6 Samarbejde (tidslinje)  7 Sammenligning  8 Lokal SEO  9 Priser  10 Cases  11 Kontakt
 * Ingen tegninger af byen – kun indhold, der er skrevet til netop den by.
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
            <p className="text-[16px] font-semibold text-white mb-6">{city.distance.title}</p>
            <div className="flex flex-col gap-5">
              {city.distance.items.map((d, i) => (
                <div key={d.num} className={i ? "pt-5 border-t border-white/10" : ""}>
                  <p className="text-[clamp(28px,3vw,38px)] font-semibold leading-none tracking-tight text-white">{d.num}</p>
                  <p className="text-[15px] text-[#b4bdbd] mt-2 leading-snug">{d.label}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* 2. Byen i tal */}
      <section className="scene bg-[#f7f6f6]">
        <div className={wrap}>
          <SectionHead lines={city.stats.title} lead={city.stats.lead} maxW="max-w-[30ch]" />
          <CityStats items={city.stats.items} />
        </div>
      </section>

      {/* 3. Vælg bydel */}
      <section className="scene bg-[#1c1e1e]">
        <div className={wrap}>
          <SectionHead dark lines={city.districts.title} lead={city.districts.lead} maxW="max-w-[30ch]" />
          <DistrictPicker items={city.districts.items} />
        </div>
      </section>

      {/* 4. Fire tjek */}
      <section className="scene bg-[#eceeee]">
        <div className={wrap}>
          <SectionHead lines={city.checks.title} lead={city.checks.lead} maxW="max-w-[30ch]" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {city.checks.items.map((c, i) => (
              <FadeUp key={c.title} delay={(i % 2) * 0.08} className="h-full">
                <div className="h-full rounded-3xl bg-white border border-[#e8e6e6] p-6 sm:p-8 flex gap-5">
                  <span className="shrink-0 w-12 h-12 rounded-2xl bg-[#00a8e8] text-white text-[18px] font-semibold flex items-center justify-center">{i + 1}</span>
                  <div>
                    <p className="text-[19px] font-semibold text-[#1c1e1e] leading-snug mb-2">{c.title}</p>
                    <p className="text-[15px] text-[#4a4a4a] leading-[1.7]">{c.text}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Brancher */}
      <section className="scene bg-[#1c1e1e]">
        <div className={wrap}>
          <SectionHead dark lines={city.industries.title} lead={city.industries.lead} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {city.industries.items.map((x, i) => (
              <FadeUp key={x.title} delay={(i % 2) * 0.08} className="h-full">
                <Link
                  href={x.href}
                  className="group h-full rounded-3xl bg-[#242828] border border-white/10 p-7 sm:p-9 flex flex-col gap-3 hover:bg-[#2a2e2e] transition-colors"
                >
                  <p className="text-[clamp(20px,2vw,24px)] font-semibold text-white leading-snug">{x.title}</p>
                  <p className="text-[15px] text-[#b4bdbd] leading-[1.75] flex-1">{x.text}</p>
                  <span className="mt-3 text-[14px] font-semibold text-[#00a8e8]">{x.cta} →</span>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Samarbejde */}
      <section className="scene bg-[#f7f6f6]">
        <div className={wrap}>
          <SectionHead lines={city.collab.title} lead={city.collab.lead} maxW="max-w-[30ch]" />
          <CityTimeline steps={city.collab.steps} />
        </div>
      </section>

      {/* 7. Sammenligning */}
      <section className="scene bg-[#1c1e1e]">
        <div className={wrap}>
          <SectionHead dark lines={city.compare.title} lead={city.compare.lead} />
          <BureauCompare rows={city.compare.rows} agencyLabel={city.compare.agencyLabel} meLabel="WebHjerte – Horsens" />
        </div>
      </section>

      {/* 8. Lokal SEO */}
      <section className="scene bg-[#eceeee]">
        <div className={wrap}>
          <SectionHead lines={city.seo.title} lead={city.seo.lead} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {city.seo.items.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.07} className="h-full">
                <div className="h-full rounded-3xl bg-white border border-[#e8e6e6] p-6 flex flex-col gap-4">
                  <span className="text-[34px] font-light leading-none tabular-nums text-[#00a8e8]">{s.n}</span>
                  <p className="text-[18px] font-semibold text-[#1c1e1e] leading-snug">{s.title}</p>
                  <p className="text-[15px] text-[#4a4a4a] leading-[1.7]">{s.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
          {city.seo.cta && (
            <div className="mt-10">
              <GhostLink href={city.seo.cta.href} light>
                {city.seo.cta.label}
              </GhostLink>
            </div>
          )}
        </div>
      </section>

      {/* 9–11. Priser, cases og kontakt */}
      <PriceStrip />
      <CasesCarousel />
      <FormToLead titleLine={city.formTitle} description={city.formDescription} />
    </>
  );
}
