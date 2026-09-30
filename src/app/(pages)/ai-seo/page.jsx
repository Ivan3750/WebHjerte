import HeroAiseo from "./_components/HeroAiseo";
import WhatIsAiSeoBlock from "./_components/WhatIsAiSeoBlock";
import HowItWorksBlock from "./_components/HowItWorksBlock";
import WhyAiseoBlock from "./_components/WhyAiseoBlock";
import AiseoPackagesBlock from "./_components/AiseoPackagesBlock";
import WhatsIncludedAiseoBlock from "./_components/WhatsIncludedAiseoBlock";
import AiseoAfterBlock from "./_components/AiseoAfterBlock";
import Questions from "../../components/Questions";
import CtaSearchBlock from "../../components/ui/CTA";

export const metadata = {
  title: "AI SEO i Horsens – få mere synlighed med AI | WebHjerte",
  description:
    "AI SEO hjælper din virksomhed med at dukke op, når kunder søger efter det, du tilbyder. Jeg optimerer din hjemmeside og indhold med AI-værktøjer — så du får flere kunder uden at betale for annoncer.",
  openGraph: {
    title: "AI SEO – få din virksomhed fundet på Google | WebHjerte",
    description:
      "AI SEO til små virksomheder i Horsens og Midtjylland. Få mere synlighed på Google med AI-drevet indholdsoptimering og teknisk SEO.",
    url: "https://www.webhjerte.dk/ai-seo",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO i Horsens – få mere synlighed med AI | WebHjerte",
    description:
      "AI SEO til lokale virksomheder. Få flere kunder på Google med AI-drevet optimering.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/ai-seo",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WebHjerte – AI SEO",
  url: "https://www.webhjerte.dk/ai-seo",
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
    name: "AI SEO pakker",
    itemListElement: [
      {
        "@type": "Offer",
        price: "3500",
        priceCurrency: "DKK",
        itemOffered: {
          "@type": "Service",
          name: "AI SEO – Basis",
          description: "Nøgleordsanalyse, indholdsoptimering, teknisk SEO, 10 indholdselementer",
        },
      },
      {
        "@type": "Offer",
        price: "6500",
        priceCurrency: "DKK",
        itemOffered: {
          "@type": "Service",
          name: "AI SEO – Standard",
          description: "Alt i Basis + konkurrentanalyse, 20 indholdselementer, månedlig rapportering",
        },
      },
      {
        "@type": "Offer",
        price: "12000",
        priceCurrency: "DKK",
        itemOffered: {
          "@type": "Service",
          name: "AI SEO – Skræddersyet",
          description: "Komplett AI SEO-strategi, løbende indholdsproduktion, konverteringsoptimering",
        },
      },
    ],
  },
};

const faqs = [
  {
    q: "Hvad er AI SEO egentlig?",
    a: "AI SEO betyder, at jeg bruger kunstig intelligens til at analysere søgemønstrer, forstå hvad dine kunder søger efter, og optimere din hjemmeside derefter. Det er stadig mennesker, der bestemmer strategien — men AI hjælper mig med at arbejde hurtigere og mere præcist.",
  },
  {
    q: "Får jeg resultater med AI SEO?",
    a: "Ja. Kombinationen af AI-analyse og erfaren SEO-viden giver hurtigere og mere målrettede resultator end traditionel SEO alene. De fleste kunder ser forbedringer i synlighed og organisk trafik inden for 2-3 måneder.",
  },
  {
    q: "Er AI SEO bare skrevet af en robot?",
    a: "Nej. AI er et værktøj, ikke en erstatning for menneskelig ekspertise. Jeg bruger AI til analyser og forslag, men alt indhold gennemgås og tilpasses, før det publiceres — så det altid matcher din virksomheds stemme og kundernes behov.",
  },
  {
    q: "Hvor meget koster AI SEO?",
    a: "Jeg tilbyder tre pakker: Basis fra 3.500 DKK, Standard fra 6.500 DKK og Skræddersyet fra 12.000 DKK. Prisen afhænger af din branche, konkurrence og hvor meget indhold der skal produceres.",
  },
  {
    q: "Hvordan ved jeg om det virker?",
    a: "Du får månedlige rapporter med konkrete tal: din position på relevante søgeord, hvor meget organisk trafik du får, og hvor mange kunder der kontakter dig gennem siden. Du ser resultatet — ikke bare en glad mundtlighed.",
  },
];

const Aiseo = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroAiseo />
      <WhatIsAiSeoBlock />
      <HowItWorksBlock />
      <WhyAiseoBlock />
      <div id="priser" className="scroll-mt-20">
        <AiseoPackagesBlock />
      </div>
      <WhatsIncludedAiseoBlock />
      <AiseoAfterBlock />
      <Questions faqs={faqs} />
      <CtaSearchBlock />
    </>
  );
};

export default Aiseo;
