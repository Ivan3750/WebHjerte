import { ArrowIcon } from "../../components/ui/ArrowIcon";
import Link from "next/link";
import HeroService from "./_components/HeroService";
import WhatWeOfferBlock from "./_components/WhatWeOfferBlock";
import PackagesBlock from "./_components/PackagesBlock";
import { visibleLinks } from "../../data/hidden";
import FormToLead from "../../components/ui/FormToLead";
import { FaqSplit, FaqLd } from "../../components/landing/shared";
import { PromiseBlock } from "../../components/seo/ServiceLayout";
import { promise } from "../../data/content/offer";
import { photoFor } from "../../data/photos";
import SupportTariffsBlock from "./_components/SupportTariffsBlock";
import SectionHead from "../../components/ui/SectionHead";
import { FadeUp } from "../../components/home/fx/Reveal";
import { breadcrumbLd, orgRef, SITE_URL } from "../../lib/seo";
import { supportPlans } from "../../data/supportPlans";

export const metadata = {
  title: "Priser og ydelser: hjemmeside, webshop, SEO og AI | WebHjerte",
  description:
    "Alle ydelser og faste priser: hjemmesider i WordPress, Shopify og kode, webshops, SEO og AI-integration (chatbot, automatisering). Fra 2.500 kr.",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "Priser på webdesign – klare pakker uden skjulte gebyrer | WebHjerte",
    description:
      "4 klare pakker til lokale virksomheder i Horsens og Midtjylland. Landingside 2.500 DKK · Basis 4.500 DKK · Standard 8.500 DKK · Skræddersyet fra 14.000 DKK. Levering på 2–10 dage.",
    url: "https://www.webhjerte.dk/services",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Webdesign priser i Horsens – fra 2.500 DKK | WebHjerte",
    description:
      "Klare pakker uden skjulte gebyrer. Landingside 2.500 · Basis 4.500 · Standard 8.500 · Skræddersyet fra 14.000 DKK.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/services",
  },
};

const packageLd = [
  { name: "Landingside", price: "2500", url: "/kontakt?pakke=landingside", description: "1 side, mobilvenlig, kontaktformular, basic SEO. Levering: 2 dage. Ændringer på sitet inkluderet i 30 dage." },
  { name: "Basis hjemmeside", price: "4500", url: "/kontakt?pakke=basis", description: "3–5 sider, mobilvenlig, kontaktformular, basic SEO. Levering: 5 dage. Ændringer på sitet inkluderet i 30 dage." },
  { name: "Standard hjemmeside", price: "8500", url: "/kontakt?pakke=standard", description: "Op til 8 sider, SEO, Google Analytics, booking og formularer. Levering: 10 dage. Ændringer på sitet inkluderet i 30 dage." },
  { name: "Lokal synlighed", price: "9500", url: "/kontakt?pakke=lokal-synlighed", description: "Standard-hjemmeside + Google Business Profile, lokal SEO, anmeldelses-flow og 3 måneders vedligehold Standard. Til håndværkere og lokale servicevirksomheder." },
  { name: "Skræddersyet løsning", price: "14000", url: "/kontakt?pakke=skraeddersyet", description: "Fuld tilpasning, integrationer, e-commerce og AI-funktioner. Fra 14.000 kr." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${SITE_URL}/services#webpage`,
      url: `${SITE_URL}/services`,
      name: "Webdesign & hjemmesider i Horsens – pakker og priser",
      inLanguage: "da-DK",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: orgRef,
      breadcrumb: { "@id": `${SITE_URL}/services#breadcrumb` },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services#service`,
      name: "Hjemmesider, webshops og SEO til små virksomheder",
      serviceType: "Webdesign og webudvikling",
      provider: orgRef,
      areaServed: [
        { "@type": "City", name: "Horsens" },
        { "@type": "AdministrativeArea", name: "Midtjylland" },
        { "@type": "Country", name: "Danmark" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Hjemmesidepakker",
        itemListElement: packageLd.map((p) => ({
          "@type": "Offer",
          url: `${SITE_URL}${p.url}`,
          priceCurrency: "DKK",
          priceSpecification: {
            "@type": "PriceSpecification",
            price: p.price,
            priceCurrency: "DKK",
            valueAddedTaxIncluded: true,
          },
          availability: "https://schema.org/InStock",
          itemOffered: { "@type": "Service", name: p.name, description: p.description },
        })),
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/services#vedligeholdelse`,
      name: "Vedligeholdelse og hosting af hjemmeside",
      serviceType: "Webvedligeholdelse",
      provider: orgRef,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Vedligeholdelsesabonnementer",
        itemListElement: supportPlans.map((p) => ({
          "@type": "Offer",
          name: `Vedligehold ${p.name}`,
          url: `${SITE_URL}/kontakt?pakke=vedligehold-${p.id}`,
          priceCurrency: "DKK",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(p.price),
            priceCurrency: "DKK",
            unitCode: "MON",
            valueAddedTaxIncluded: true,
          },
          itemOffered: { "@type": "Service", name: `Vedligehold ${p.name}`, description: p.features.join(", ") },
        })),
      },
    },
    { ...breadcrumbLd([{ name: "Forside", path: "/" }, { name: "Services", path: "/services" }]), "@id": `${SITE_URL}/services#breadcrumb` },
  ],
};

// Brancher og områder: kun synlige sider (se data/hidden.js). Ingen billeder – kun ærlige links.
const trades = visibleLinks([
  { href: "/hjemmeside-til-haandvaerkere", title: "Håndværkere", desc: "Overblikket: det, alle håndværkersider skal have." },
  { href: "/hjemmeside-til-vvs", title: "VVS", desc: "Akutte opkald og badeværelsesprojekter." },
  { href: "/hjemmeside-til-elektriker", title: "Elektrikere", desc: "Autorisation, tillid og elbil-ladere." },
  { href: "/hjemmeside-til-tomrer", title: "Tømrere", desc: "Vis projekterne, og få bedre opgaver." },
  { href: "/hjemmeside-til-restauranter", title: "Restauranter", desc: "Menu, booking og bestilling uden mellemled." },
  { href: "/hjemmeside-til-saloner", title: "Saloner", desc: "Booking, prisliste og billeder." },
]);

const aiLinks = visibleLinks([
  {
    href: "/ai-chatbot-til-hjemmeside",
    eyebrow: "Kundeservice 24/7",
    title: "AI-chatbot til hjemmesiden",
    desc: "Svarer på de samme spørgsmål igen og igen, booker tider og samler henvendelser – også uden for åbningstid.",
    cta: "Se AI-chatbotten",
  },
  {
    href: "/ai-seo",
    eyebrow: "Synlighed i AI-søgning",
    title: "AI SEO",
    desc: "Bliv nævnt, når kunder spørger ChatGPT, Perplexity og Google AI om det, du tilbyder.",
    cta: "Se AI SEO",
  },
]);

const areas = visibleLinks([
  { href: "/seo-horsens", title: "Horsens", desc: "Lokal SEO og hjemmesider i mit hjemmemarked." },
  { href: "/webbureau-aarhus", title: "Aarhus", desc: "Hjemmesider til fast pris til Aarhus-virksomheder." },
  { href: "/webbureau-vejle", title: "Vejle", desc: "Vejle og trekantsområdet – 25 min fra Horsens." },
  { href: "/webbureau-midtjylland", title: "Midtjylland", desc: "Silkeborg, Skanderborg, Randers og resten af regionen." },
]);

function LinkList({ title, items }) {
  return (
    <div>
      <p className="text-[13px] font-semibold text-[#8fd8f6] mb-4">{title}</p>
      <ul className="border-t border-white/10">
        {items.map((item, i) => (
          <FadeUp as="li" key={item.href} delay={i * 0.05}>
            <Link href={item.href} className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 py-5 border-b border-white/10">
              <span className="text-[12px] tabular-nums text-[#8a9696] w-6">{String(i + 1).padStart(2, "0")}</span>
              <span>
                <span className="block text-[clamp(18px,1.8vw,22px)] font-semibold text-white group-hover:text-[#00a8e8] transition-colors">{item.title}</span>
                <span className="block text-[14.5px] text-[#b4bdbd] mt-1 leading-snug">{item.desc}</span>
              </span>
              <ArrowIcon className="w-4 h-4 text-white/40 group-hover:text-[#00a8e8] group-hover:translate-x-1 transition-all" />
            </Link>
          </FadeUp>
        ))}
      </ul>
    </div>
  );
}

const faqs = [
  { q: "Er priserne inkl. moms?", a: "Ja. Alle priser på siden er inkl. moms, og du får et skriftligt tilbud med fast pris, før jeg går i gang." },
  { q: "Hvad er forskellen på Basis og Standard?", a: "Basis (4.500 kr) er 3–5 sider med kontaktformular, Google Maps og basic SEO – klar på ca. 5 dage. Standard (8.500 kr) er op til 8 sider med SEO, analytics, booking og formularer – klar på ca. 10 dage." },
  { q: "Er der løbende udgifter?", a: "Du betaler for domæne og hosting. Vedligeholdelse er valgfri: 249, 449 eller 799 kr/md uden binding, alt efter hvor meget hjælp du vil have." },
  { q: "Hvad hvis jeg ikke kan lide designet?", a: "Du ser første designudkast efter 48 timer. Passer det ikke, betaler du 0 kr for designet." },
  { q: "Hvad koster en webshop?", a: "Webshops er skræddersyede løsninger fra 14.000 kr inkl. moms. Prisen afhænger af antal produkter, betaling, fragt og integrationer." },
  { q: "Kan jeg få en hjemmeside billigere end 2.500 kr?", a: "Med en hjemmesidebygger kan du starte gratis, men så betaler du hver måned og bygger selv. Landingsiden til 2.500 kr er den billigste løsning, hvor jeg bygger siden for dig." },
];

const Services = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroService />
      <WhatWeOfferBlock />
      <PromiseBlock photo={photoFor("services", "work")} promise={promise} />
      <div id="priser" className="scroll-mt-[68px]">
        <PackagesBlock />
      </div>

      {/* AI – kort videre til de to AI-sider */}
      {aiLinks.length > 0 && (
        <section className="scene bg-[#1c1e1e]">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
            <SectionHead
              dark
              eyebrow="AI til din hjemmeside"
              lines={["Lad AI tage de gentagne opgaver", "– og gøre dig synlig i ChatGPT"]}
              className="mb-10"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {aiLinks.map((item, i) => (
                <FadeUp key={item.href} delay={i * 0.07} className="h-full">
                  <Link
                    href={item.href}
                    className="group h-full rounded-3xl p-6 sm:p-8 flex flex-col gap-4 border border-white/10 bg-white/[0.03] hover:border-[#00a8e8]/60 transition-colors"
                  >
                    <span className="text-[11px] uppercase tracking-[0.14em] text-[#8fd8f6]">{item.eyebrow}</span>
                    <span className="text-[clamp(20px,2vw,26px)] font-semibold text-white tracking-tight">{item.title}</span>
                    <span className="text-[15px] text-[#b4bdbd] leading-relaxed flex-1">{item.desc}</span>
                    <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#00a8e8]">
                      {item.cta}
                      <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      <SupportTariffsBlock />

      {/* Brancher og områder – samlet her, så alle sider kan findes og linkes */}
      {(trades.length > 0 || areas.length > 0) && (
        <section id="brancher" className="scene bg-[#1c1e1e] scroll-mt-[68px]">
          <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
            <SectionHead dark lines={["Hjemmesider til din branche", "– og dit område"]} />
            <div id="omraader" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 scroll-mt-[90px]">
              {trades.length > 0 && <LinkList title="Brancher" items={trades} />}
              {areas.length > 0 && <LinkList title="Områder" items={areas} />}
            </div>
          </div>
        </section>
      )}

      <FaqLd faqs={faqs} />
      <FaqSplit title={["Spørgsmål om", "priser og ydelser"]} faqs={faqs} />
      <FormToLead
        titleLine="Få en fast pris på din hjemmeside"
        description="Skriv kort, hvad du har brug for. Du får en fast pris inden for 24 timer – helt uforpligtende."
      />
    </>
  );
};

export default Services;
