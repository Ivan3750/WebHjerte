import PageHero, { PrimaryLink, GhostLink } from "../ui/PageHero";
import SectionHead from "../ui/SectionHead";
import Image from "next/image";
import FormToLead from "../ui/FormToLead";
import CasesCarousel from "../home/CasesCarousel";
import { FadeUp } from "../home/fx/Reveal";
import { SerpSimulator } from "./CityBlocks";
import CityServices from "./CityServices";
import { offer as OFFER, promise as PROMISE } from "../../data/content/offer";
import { photos as PHOTOS } from "../../data/photos";
import { SITE_URL, breadcrumbLd } from "../../lib/seo";

/**
 * Personlig byside med fokus på virksomhedens resultat:
 *  hero med foto, redaktionel tekst, Google-simulator, tre søjler, "Det får du", foto + løfter, cases og kontakt.
 * Ingen priser, trin eller tabeller her (se docs/design-regler.md).
 * Ingen tegninger af byen – bynavn, bydele og eksempler gør siden personlig.
 */
const wrap = "max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24";

export default function CityPage({ city }) {
  const url = `${SITE_URL}${city.path}`;
  const slug = city.path.slice(1);
  const hero = PHOTOS[slug]?.hero;
  const work = PHOTOS[slug]?.work;
  const offer = OFFER[slug];
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
          hero ? (
            <div className={`relative overflow-hidden rounded-3xl bg-[#2a2e2e] ${hero.portrait ? "aspect-[4/5] max-w-[420px] lg:ml-auto" : "aspect-[4/3]"}`}>
              <Image src={hero.src} alt={hero.alt} fill priority sizes="(min-width: 1024px) 480px, 92vw" className={`object-cover ${hero.portrait ? "object-top" : ""}`} />
            </div>
          ) : null
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

      {/* Ydelser – det, jeg kan sælge kunden */}
      <CityServices city={city.name} />

      {/* Det får du */}
      {offer && (
        <section className="scene bg-[#1c1e1e]">
          <div className={wrap}>
            <SectionHead dark lines={[offer.title]} maxW="max-w-[24ch]" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
              {offer.items.map((it, i) => (
                <FadeUp key={it.title} delay={(i % 2) * 0.06} className="py-8 border-t border-white/15">
                  <h3 className="text-[clamp(20px,1.9vw,24px)] font-semibold text-white leading-snug mb-3">{it.title}</h3>
                  <p className="readable text-[17px] text-[#c4cccc] leading-[1.75] max-w-[52ch]">{it.text}</p>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Foto + løfter */}
      <section className="scene bg-[#f7f6f6]">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center`}>
          {work && (
            <FadeUp className={`relative overflow-hidden rounded-3xl bg-[#2a2e2e] ${work.portrait ? "aspect-[4/5]" : "aspect-[4/3]"} max-w-[460px] w-full`}>
              <Image src={work.src} alt={work.alt} fill sizes="(min-width: 1024px) 460px, 92vw" className={`object-cover ${work.portrait ? "object-top" : ""}`} />
            </FadeUp>
          )}
          <div>
            <SectionHead lines={["Sådan arbejder jeg"]} />
            <div className="flex flex-col gap-4">
              {PROMISE.map((t) => (
                <p key={t.slice(0, 30)} className="readable text-[17px] leading-[1.75] text-[#3f4446] max-w-[58ch]">{t}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CasesCarousel />
      <FormToLead titleLine={city.formTitle} description={city.formDescription} />
    </>
  );
}
