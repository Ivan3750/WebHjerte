import Link from "next/link";
import PriceCalculator from "../../components/ui/PriceCalculator";
import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import FormToLead from "../../components/ui/FormToLead";
import PackagesBlock from "../services/_components/PackagesBlock";
import Whatsincludedblock from "../services/_components/WhatsIncludedBlock";
import SocialProof from "../../components/home/SocialProof";
import CasesCarousel from "../../components/home/CasesCarousel";

export const metadata = {
  title: "Hjemmeside pris 2026 – fast pris fra 2.500 kr | WebHjerte",
  description:
    "Hjemmeside priser inkl. moms: Landingside 2.500 kr, Basis 4.500 kr, Standard 7.500 kr, webshop fra 14.000 kr. Beregn din pris og få et fast tilbud.",
  keywords:
    "hjemmeside pris, hjemmeside priser, hjemmesidepriser, priser hjemmeside, hjemmeside tilbud, hjemmeside fast pris, beregn hjemmeside pris, webdesign pris",
  robots: "index, follow",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "Hjemmeside pris – faste priser fra 2.500 kr",
    description:
      "Gennemsigtige priser fra 2.500 DKK. Få et tilbud på 24 timer. Ingen skjulte gebyrer.",
    url: "https://www.webhjerte.dk/hjemmeside-pris",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Hjemmeside pris – faste priser fra 2.500 kr",
    description:
      "Gennemsigtige priser fra 2.500 DKK. Få et tilbud på 24 timer. Ingen skjulte gebyrer.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/hjemmeside-pris",
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.webhjerte.dk/hjemmeside-pris/#service",
  name: "Hjemmeside – pris og pakker",
  serviceType: "Webdesign og webudvikling",
  description:
    "Gennemsigtige priser på hjemmesider fra 2.500 DKK. Få et konkret tilbud inden for 24 timer – ingen skjulte gebyrer.",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://www.webhjerte.dk/#organization",
    name: "WebHjerte",
    url: "https://www.webhjerte.dk/",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Horsens",
    },
    {
      "@type": "AdministrativeArea",
      name: "Midtjylland",
    },
    {
      "@type": "Country",
      name: "Danmark",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hjemmeside pakker",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Landingside",
        priceCurrency: "DKK",
        price: "2500",
        priceSpecification: { "@type": "PriceSpecification", price: "2500", priceCurrency: "DKK", valueAddedTaxIncluded: true },
        availability: "https://schema.org/InStock",
        url: "https://www.webhjerte.dk/hjemmeside-pris",
      },
      {
        "@type": "Offer",
        name: "Basis hjemmeside",
        priceCurrency: "DKK",
        price: "4500",
        priceSpecification: { "@type": "PriceSpecification", price: "4500", priceCurrency: "DKK", valueAddedTaxIncluded: true },
        availability: "https://schema.org/InStock",
        url: "https://www.webhjerte.dk/hjemmeside-pris",
      },
      {
        "@type": "Offer",
        name: "Standard hjemmeside",
        priceCurrency: "DKK",
        price: "7500",
        priceSpecification: { "@type": "PriceSpecification", price: "7500", priceCurrency: "DKK", valueAddedTaxIncluded: true },
        availability: "https://schema.org/InStock",
        url: "https://www.webhjerte.dk/hjemmeside-pris",
      },
      {
        "@type": "Offer",
        name: "Skræddersyet løsning",
        priceCurrency: "DKK",
        price: "14000",
        priceSpecification: { "@type": "PriceSpecification", price: "14000", priceCurrency: "DKK", valueAddedTaxIncluded: true },
        availability: "https://schema.org/InStock",
        url: "https://www.webhjerte.dk/hjemmeside-pris",
      },

    ],
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "DKK",
    lowPrice: "2500",
    highPrice: "14000",
    offerCount: "4",
    url: "https://www.webhjerte.dk/hjemmeside-pris",
  },
};


const HjemmesidePris = () => {
  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <PageHero
        breadcrumbs={[{ label: "Forside", href: "/" }, { label: "Hjemmeside pris" }]}
        eyebrow="Priser"
        titleLines={["Hjemmeside priser –", "fast pris fra 2.500 kr"]}
        lead="Se faste priser fra 2.500 kr inkl. moms og find den pakke, der passer til din virksomhed – ingen skjulte gebyrer, ingen overraskelser."
        actions={
          <>
            <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
            <GhostLink href="#prisberegner">Beregn din pris</GhostLink>
          </>
        }
      />
      <PackagesBlock />
      <section className="bg-[#f7f6f6]">
        <div className="max-w-4xl mx-auto px-5 sm:px-10 py-16 sm:py-20">
          <PriceCalculator />
          <p className="mt-6 text-[13px] text-[#666] leading-[1.8]">
            Vil du sammenligne med freelancere, bureauer og hjemmesidebyggere? Læs{" "}
            <Link href="/blog/hvad-koster-en-hjemmeside-2026" className="text-[#007aab] underline underline-offset-4">
              hvad en hjemmeside koster i 2026
            </Link>
            .
          </p>
        </div>
      </section>
      <Whatsincludedblock />
      <CasesCarousel />
      <SocialProof />
      <FormToLead
        titleLine="Få et konkret tilbud på din hjemmeside"
        description="Fortæl os kort om dit projekt, og få en fast pris inden for 24 timer – helt uforpligtende."
      />
    </>
  );
};

export default HjemmesidePris;