 import SEO from "./_components/SEO";
import SEOTextHorsens from "./_components/SEOTextHorsens";
import LocalTrust from "./_components/LocalTrust";
import Questions from "../../components/Questions.jsx";
import AnimatedInView from "../../components/ui/AnimatedInView";

export const metadata = {
  title: "Gratis SEO- og web-tjek i Horsens | WebHjerte",
  description:
    "Få et gratis SEO- og web-tjek i Horsens. Vi analyserer din hjemmeside for synlighed, hastighed og konvertering – uden binding.",
  keywords:
    "gratis seo tjek horsens, web tjek horsens, seo analyse horsens, hjemmeside analyse horsens, seo horsens, seo midtjylland",
  robots: "index, follow",
  openGraph: {
    title: "Gratis SEO- og web-tjek i Horsens | WebHjerte",
    description:
      "Professionelt og gratis SEO- og web-tjek for virksomheder i Horsens.",
    url: "https://webhjerte.dk/gratis-seo-tjek-horsens",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gratis SEO- og web-tjek i Horsens",
    description:
      "Få et gratis SEO- og web-tjek af din hjemmeside i Horsens.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.webhjerte.dk/gratis-seo-tjek-horsens/#service",
  name: "Gratis SEO- og web-tjek i Horsens",
  serviceType: "SEO-analyse og webtjek",
  description:
    "Gratis SEO- og web-tjek for virksomheder i Horsens. Vi analyserer din hjemmeside for synlighed, hastighed og konvertering – uden binding.",
  provider: {
    "@type": "ProfessionalService",
    "@id": "https://www.webhjerte.dk/#organization",
    name: "WebHjerte",
    url: "https://www.webhjerte.dk/",
    founder: {
      "@type": "Person",
      name: "Ivan Kohan",
    },
    sameAs: ["https://www.linkedin.com/company/webhjerte"],
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
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Virksomheder i Horsens og omegn",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "DKK",
    availability: "https://schema.org/InStock",
    url: "https://www.webhjerte.dk/gratis-seo-tjek-horsens",
    description: "Gratis og uforpligtende SEO- og webtjek",
  },
  url: "https://www.webhjerte.dk/gratis-seo-tjek-horsens",
};

const GratisSeoTjekHorsens = () => {
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
          Gratis SEO- og web-tjek i Horsens
        </AnimatedInView>
        <AnimatedInView as="h2" className="text-center text-lg max-w-2xl mx-auto mt-4">
          Få en professionel gennemgang af din hjemmeside og se, hvordan du kan
          få flere kunder fra Google – helt gratis og uden binding.
        </AnimatedInView>
      </section>

    

      <SEO />
    <LocalTrust></LocalTrust>
       <SEOTextHorsens></SEOTextHorsens>
      <Questions />
    </>
  );
};

export default GratisSeoTjekHorsens;
