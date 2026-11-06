import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import FormToLead from "../../components/ui/FormToLead";
import PackagesBlock from "../services/_components/PackagesBlock";
import Whatsincludedblock from "../services/_components/WhatsIncludedBlock";
import SocialProof from "../../components/home/SocialProof";
import CasesCarousel from "../../components/home/CasesCarousel";

export const metadata = {
  title: "Hjemmeside pris 2026 – faste priser fra 2.500 kr | WebHjerte",
  description:
    "Hvad koster en hjemmeside? Landingside fra 2.500 kr, Basis fra 4.500 kr, Standard fra 7.500 kr. Fast pris, ingen skjulte gebyrer – tilbud inden 24 timer.",
  keywords:
    "hjemmeside pris, pris på hjemmeside, pris for en hjemmeside, hvad koster en hjemmeside, webdesign pris",
  robots: "index, follow",
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "Hjemmeside Pris – Se Priser hos WebHjerte",
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
    title: "Hjemmeside Pris – Se Priser hos WebHjerte",
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
        availability: "https://schema.org/InStock",
        url: "https://www.webhjerte.dk/hjemmeside-pris",
      },
      {
        "@type": "Offer",
        name: "Basis hjemmeside",
        priceCurrency: "DKK",
        price: "4500",
        availability: "https://schema.org/InStock",
        url: "https://www.webhjerte.dk/hjemmeside-pris",
      },
      {
        "@type": "Offer",
        name: "Standard hjemmeside",
        priceCurrency: "DKK",
        price: "7500",
        availability: "https://schema.org/InStock",
        url: "https://www.webhjerte.dk/hjemmeside-pris",
      },
      {
        "@type": "Offer",
        name: "Skræddersyet løsning",
        priceCurrency: "DKK",
        price: "14000",
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
        titleLines={["Hvad koster en", "hjemmeside?"]}
        lead="Se faste priser fra 2.500 kr og find den pakke, der passer til din virksomhed – ingen skjulte gebyrer, ingen overraskelser."
        actions={
          <>
            <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
            <GhostLink href="/hjemmeside-pris">Se priser</GhostLink>
          </>
        }
      />
      <PackagesBlock />
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