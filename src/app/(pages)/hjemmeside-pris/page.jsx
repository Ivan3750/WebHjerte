import AnimatedInView from "../../components/ui/AnimatedInView";
import FormToLead from "../../components/ui/FormToLead";
import PackagesBlock from "../services/_components/PackagesBlock";
import Whatsincludedblock from "../services/_components/WhatsIncludedBlock";
import SocialProof from "../../components/home/SocialProof";
import CasesCarousel from "../../components/home/CasesCarousel";

export const metadata = {
  title: "Hjemmeside Pris – Se Priser hos WebHjerte",
  description:
    "Hvad koster en hjemmeside? Se gennemsigtige priser fra 4.500 DKK. Få et konkret tilbud inden for 24 timer – ingen skjulte gebyrer.",
  keywords:
    "hjemmeside pris, pris på hjemmeside, pris for en hjemmeside, hvad koster en hjemmeside, webdesign pris",
  robots: "index, follow",
  openGraph: {
    title: "Hjemmeside Pris – Se Priser hos WebHjerte",
    description:
      "Gennemsigtige priser fra 4.500 DKK. Få et tilbud på 24 timer. Ingen skjulte gebyrer.",
    url: "https://www.webhjerte.dk/hjemmeside-pris",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hjemmeside Pris – Se Priser hos WebHjerte",
    description:
      "Gennemsigtige priser fra 4.500 DKK. Få et tilbud på 24 timer. Ingen skjulte gebyrer.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/services",
  },
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.webhjerte.dk/hjemmeside-pris/#service",
  name: "Hjemmeside – pris og pakker",
  serviceType: "Webdesign og webudvikling",
  description:
    "Gennemsigtige priser på hjemmesider fra 4.500 DKK. Få et konkret tilbud inden for 24 timer – ingen skjulte gebyrer.",
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
        name: "Basis hjemmeside",
        priceCurrency: "DKK",
        price: "4500",
        availability: "https://schema.org/InStock",
        url: "https://www.webhjerte.dk/hjemmeside-pris",
      },

    ],
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "DKK",
    lowPrice: "4500",
    offerCount: "1", 
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
      <section className="mt-[75px]">
        <AnimatedInView as="h1" className="maintitle text-center">
          Hvad koster en hjemmeside?
        </AnimatedInView>
        <AnimatedInView
          as="h2"
          className="subtitle text-center mt-5 text-balance"
        >
          Se gennemsigtige priser fra 4.500 DKK, og find den pakke, der
          passer til din virksomhed – ingen skjulte gebyrer, ingen
          overraskelser.
        </AnimatedInView>
      </section>
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