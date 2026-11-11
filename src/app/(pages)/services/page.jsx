import { ArrowIcon } from "../../components/ui/ArrowIcon";
import Link from "next/link";
import HeroService from "./_components/HeroService";
import WhatWeOfferBlock from "./_components/WhatWeOfferBlock";
import Whyusblock from "./_components/Whyusblock";
import PackagesBlock from "./_components/PackagesBlock";
import Whatsincludedblock from "./_components/WhatsIncludedBlock";
import ProcessBlock from "../../components/home/ProcessBlock";
import AfterLaunchBlock from "./_components/AfterLaunchBlock";
import SupportTariffsBlock from "./_components/SupportTariffsBlock";
import Questions from "../../components/Questions";
import CtaSearchBlock from "../../components/ui/CTA";
import SectionHead from "../../components/ui/SectionHead";
import { FadeUp } from "../../components/home/fx/Reveal";
import SpotlightCard from "../../components/home/fx/SpotlightCard";
import { breadcrumbLd, orgRef, SITE_URL } from "../../lib/seo";

export const metadata = {
  title: "Hjemmesider, webshop, SEO & AI i Horsens – priser | WebHjerte",
  description:
    "Alle ydelser og faste priser: hjemmesider i WordPress, Shopify og kode, webshops, SEO og AI-integration (chatbot, automatisering). Fra 2.500 kr.",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "Priser på webdesign – klare pakker uden skjulte gebyrer | WebHjerte",
    description:
      "4 klare pakker til lokale virksomheder i Horsens og Midtjylland. Landingside 2.500 DKK · Basis 4.500 DKK · Standard 7.500 DKK · Skræddersyet fra 14.000 DKK. Levering på 2–10 dage.",
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
      "Klare pakker uden skjulte gebyrer. Landingside 2.500 · Basis 4.500 · Standard 7.500 · Skræddersyet fra 14.000 DKK.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/services",
  },
};

const packageLd = [
  { name: "Landingside", price: "2500", url: "/kontakt?pakke=landingside", description: "1 side, mobilvenlig, kontaktformular, basic SEO. Levering: 2 dage. Ændringer på sitet inkluderet i 30 dage." },
  { name: "Basis hjemmeside", price: "4500", url: "/kontakt?pakke=basis", description: "3–5 sider, mobilvenlig, kontaktformular, basic SEO. Levering: 5 dage. Ændringer på sitet inkluderet i 30 dage." },
  { name: "Standard hjemmeside", price: "7500", url: "/kontakt?pakke=standard", description: "Op til 8 sider, SEO, Google Analytics, booking og formularer. Levering: 10 dage. Ændringer på sitet inkluderet i 30 dage." },
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
    { ...breadcrumbLd([{ name: "Forside", path: "/" }, { name: "Services", path: "/services" }]), "@id": `${SITE_URL}/services#breadcrumb` },
  ],
};

const niches = [
  { href: "/hjemmeside-til-haandvaerkere", title: "Håndværkere", desc: "VVS, elektrikere, tømrere, malere og flere." },
  { href: "/hjemmeside-til-restauranter", title: "Restauranter", desc: "Menu, booking og online bestilling. Undgå Wolt-omkostninger." },
  { href: "/hjemmeside-til-saloner", title: "Saloner", desc: "Frisørsaloner, skønhedssaloner, barber og flere." },
  { href: "/hjemmeside-til-vvs", title: "VVS", desc: "Flere opkald og akutte henvendelser fra lokale kunder." },
  { href: "/hjemmeside-til-elektriker", title: "Elektrikere", desc: "Vis autorisationer, ydelser og få flere tilbudsforespørgsler." },
  { href: "/hjemmeside-til-tomrer", title: "Tømrere", desc: "Vis dine projekter og bliv fundet af private og erhverv." },
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
      <Whyusblock />
      <div id="priser" className="scroll-mt-[68px]">
        <PackagesBlock />
      </div>
      <Whatsincludedblock />
      <ProcessBlock />
      <AfterLaunchBlock />
      <SupportTariffsBlock />

      {/* Niche landing pages */}
      <section className="scene bg-[#eceeee] border-t border-[#eeecec]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
          <SectionHead eyebrow="Hjemmesider til din branche" lines={["Se hvad jeg kan lave", "for din virksomhed"]} className="mb-10 sm:mb-14" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {niches.map((item, i) => (
              <FadeUp key={item.href} delay={(i % 3) * 0.07}>
                <Link href={item.href} className="block h-full">
                  <SpotlightCard dark={false} className="h-full rounded-3xl bg-[#f7f6f6] border border-[#eeecec] hover:border-[#00a8e8]/40 transition-colors">
                    <div className="p-6 sm:p-7 flex flex-col gap-3 h-full">
                      <div className="flex items-center justify-between">
                        <p className="text-[16px] font-semibold text-[#1c1e1e] group-hover:text-[#00a8e8] transition-colors">{item.title}</p>
                        <ArrowIcon className="w-4 h-4 text-[#b0aeae] group-hover:text-[#00a8e8] group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-[13px] text-[#6a6a6a] leading-relaxed">{item.desc}</p>
                    </div>
                  </SpotlightCard>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Questions />
      <CtaSearchBlock />
    </>
  );
};

export default Services;
