import AnimatedInView from "../../components/ui/AnimatedInView";
 
import Calc from "./_components/Calc";
import SolutionBlock from "./_components/SolutionBlock";
import HowItWorksBlock from "./_components/HowItWorksBlock";
import PricingBlock from "./_components/PricingBlock";
 import CtaSearchBlock from "../../components/ui/CTA";


 

export const metadata = {
  title: "Hjemmeside til Pizzeria i Horsens – Flere Direkte Bestillinger",

  description:
    "Få en professionel hjemmeside til dit pizzeria i Horsens med online bestilling, mobilvenligt design og fokus på flere direkte kunder. Se mulighederne.",

  alternates: {
    canonical:
      "https://www.webhjerte.dk/hjemmeside-til-pizzeria-horsens",
  },

  openGraph: {
    title: "Hjemmeside til Pizzeria i Horsens – Flere Direkte Bestillinger",

    description:
      "Professionel hjemmeside til pizzeriaer i Horsens med online bestilling og fokus på flere direkte kunder.",

    url: "https://www.webhjerte.dk/hjemmeside-til-pizzeria-horsens",

    siteName: "WebHjerte",

    locale: "da_DK",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Hjemmeside til Pizzeria i Horsens – Flere Direkte Bestillinger",

    description:
      "Professionel hjemmeside til pizzeriaer i Horsens med online bestilling og fokus på flere direkte kunder.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id":
        "https://www.webhjerte.dk/hjemmeside-til-pizzeria-horsens#webpage",

      url: "https://www.webhjerte.dk/hjemmeside-til-pizzeria-horsens",

      name: "Hjemmeside til Pizzeria i Horsens – Flere Direkte Bestillinger",

      description:
        "Få en professionel hjemmeside til dit pizzeria i Horsens med online bestilling, mobilvenligt design og fokus på flere direkte kunder.",

      isPartOf: {
        "@id": "https://www.webhjerte.dk/#website",
      },

      about: {
        "@id":
          "https://www.webhjerte.dk/hjemmeside-til-pizzeria-horsens#service",
      },

      breadcrumb: {
        "@id":
          "https://www.webhjerte.dk/hjemmeside-til-pizzeria-horsens#breadcrumb",
      },
    },

    {
      "@type": "Service",

      "@id":
        "https://www.webhjerte.dk/hjemmeside-til-pizzeria-horsens#service",

      name: "Hjemmeside til pizzeria",

      description:
        "Professionel hjemmesideudvikling til pizzeriaer i Horsens med fokus på online bestilling, mobilvenligt design og flere direkte kunder.",

      serviceType: "Hjemmeside til pizzeria",

      provider: {
        "@type": "Organization",

        "@id": "https://www.webhjerte.dk/#organization",

        name: "WebHjerte",

        url: "https://www.webhjerte.dk/",
      },

      areaServed: {
        "@type": "City",

        name: "Horsens",

        address: {
          "@type": "PostalAddress",

          addressLocality: "Horsens",

          addressCountry: "DK",
        },
      },

      url: "https://www.webhjerte.dk/hjemmeside-til-pizzeria-horsens",
    },

    {
      "@type": "BreadcrumbList",

      "@id":
        "https://www.webhjerte.dk/hjemmeside-til-pizzeria-horsens#breadcrumb",

      itemListElement: [
        {
          "@type": "ListItem",

          position: 1,

          name: "Forside",

          item: "https://www.webhjerte.dk/",
        },

        {
          "@type": "ListItem",

          position: 2,

          name: "Hjemmeside til pizzeria",

          item:
            "https://www.webhjerte.dk/hjemmeside-til-pizzeria-horsens",
        },
      ],
    },
  ],
};
 
const TilPizzeriaHorsens = () => {
  return (
    <>
     <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
     <section className="mt-[75px] flex flex-col items-center">
  <AnimatedInView as="h1" className="maintitle text-center text-balance">
    Din egen bestillingsside –{" "}
    <span className="text-white">uden 30% i gebyr til Wolt</span>
  </AnimatedInView>

  <AnimatedInView
    as="h2"
    className="subtitle text-center mt-5 text-balance max-w-[720px]"
  >
    En hurtig, mobilvenlig hjemmeside til din pizzeria i Horsens – med online
    bestilling og betaling direkte til dig. Ingen kommission pr. ordre.
  </AnimatedInView>

  <AnimatedInView className="flex flex-col items-center mt-8 gap-3">
    <button className="button">
      Få et gratis tilbud
      <svg
        className="icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
    <p className="text opacity-80">
      Svar inden 24 timer · Ingen binding · Fast pris
    </p>
  </AnimatedInView>
</section>
       
      <Calc />
      <SolutionBlock/>
      <HowItWorksBlock/>
      <PricingBlock/>
            <CtaSearchBlock></CtaSearchBlock>

    </>
  );
};

export default TilPizzeriaHorsens;