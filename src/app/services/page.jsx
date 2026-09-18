import HeroService from "../components/service/HeroService";
import WhatWeOfferBlock from "../components/service/WhatWeOfferBlock";
import Whyusblock from "../components/service/Whyusblock";
import PackagesBlock from "../components/service/PackagesBlock";
import Whatsincludedblock from "../components/service/WhatsIncludedBlock";
import ProcessBlock from "../components/home/ProcessBlock";
import AfterLaunchBlock from "../components/service/AfterLaunchBlock";
import SEO from "../components/seo/SEO";
import Questions from "../components/Questions";
import CtaSearchBlock from "../components/CTA";

 

export const metadata = {
  title: "Hjemmeside pris i Horsens – fra 4.500 DKK | WebHjerte",
  description:
    "Se mine priser på hjemmesider i Horsens. 3 klare pakker – Basis fra 4.500 DKK, Standard 7.500 DKK, Skræddersyet fra 14.000 DKK. Ingen skjulte gebyrer.",
  openGraph: {
    title: "Priser på webdesign – klare pakker uden skjulte gebyrer | WebHjerte",
    description:
      "3 klare pakker til lokale virksomheder i Horsens og Midtjylland. Basis 4.500 DKK · Standard 7.500 DKK · Skræddersyet fra 14.000 DKK. Levering på 14 dage.",
    url: "https://www.webhjerte.dk/services",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
    // images: [{ url: "https://www.webhjerte.dk/og-services.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign priser i Horsens – fra 4.500 DKK | WebHjerte",
    description:
      "Klare pakker uden skjulte gebyrer. Basis 4.500 · Standard 7.500 · Skræddersyet fra 14.000 DKK.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/services",
  },
};
 
 
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WebHjerte",
  url: "https://www.webhjerte.dk",
   telephone: "+45 42 76 05 77",
   email: "hej@webhjerte.dk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Horsens",
    addressCountry: "DK",
  },
  areaServed: [
    { "@type": "City", name: "Horsens" },
    { "@type": "AdministrativeArea", name: "Midtjylland" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hjemmesidepakker",
    itemListElement: [
      {
        "@type": "Offer",
        price: "4500",
        priceCurrency: "DKK",
        itemOffered: {
          "@type": "Service",
          name: "Basis hjemmeside",
          description: "3–5 sider, mobilvenlig, kontaktformular, basic SEO",
        },
      },
      {
        "@type": "Offer",
        price: "7500",
        priceCurrency: "DKK",
        itemOffered: {
          "@type": "Service",
          name: "Standard hjemmeside",
          description: "Op til 8 sider, CMS, SEO, Google Analytics, booking",
        },
      },
      {
        "@type": "Offer",
        price: "14000",
        priceCurrency: "DKK",
        itemOffered: {
          "@type": "Service",
          name: "Skræddersyet løsning",
          description: "Fuld tilpasning, integrationer, e-commerce, AI-funktioner",
        },
      },
    ],
  },
};
 
const packages = [
  {
    name: "Basis",
    description:
      "En moderne hjemmeside med grundlæggende SEO og et professionelt udseende",
    price: "4.500 DKK",
    isPopular: false,
    features: [
      "3-5 sider",
      "Mobilvenlig tilpasning",
      "Basic SEO",
      "Kontaktformular",
      "Levering: 10 dage",
    ],
  },
  {
    name: "Standard",
    description:
      "En skræddersyet hjemmeside med avanceret design og ekstra funktioner for professionelt udseende",
    price: "7.500 DKK",
    isPopular: true,
    features: [
      "Flersidet hjemmeside (Op til 8 sider)",
      "SEO + Analytics",
      "Integration af CRM/betalingssystemer",
      "Booking / formularer",
      "Levering: 18 dage",
    ],
  },
  {
    name: "Skræddersyet",
    description:
      "En avanceret hjemmeside med tilpasset design og funktionalitet, inklusive branding",
    price: "Fra 14.000 DKK",
    isPopular: false,
    features: [
      "Fuld tilpasning",
      "Integrationer / AI",
      "E-commerce",
      "Platform / dashboard",
      "Aftales individuelt",
    ],
  },
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
 <div id="priser" className="scroll-mt-20">
        <PackagesBlock />
      </div>      <Whatsincludedblock />
      <ProcessBlock></ProcessBlock>
      <AfterLaunchBlock />
      <SEO></SEO>
      <Questions />
      <CtaSearchBlock />
    </>
  );
};

export default Services;
