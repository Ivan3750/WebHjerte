import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import ProblemLoesning from "./_components/ProblemLoesning";
import HvadGoerProfessionel from "./_components/HvadGoerProfessionel";
import { FaqSplit, FaqLd } from "../../components/landing/shared";
import FormToLead from "../../components/ui/FormToLead";
import CasesCarousel from "../../components/home/CasesCarousel";
import { SITE_URL, breadcrumbLd } from "../../lib/seo";
import { faqsWithoutPrices } from "../../lib/prices";
import { WpEditDemo } from "../../components/variants/WpBlocks";

const url = `${SITE_URL}/wordpress-hjemmeside`;

// Search Console: "professionel wordpress hjemmeside" (+ varianter) er sitets største søgeord, men siden lå på side 2–3.
export const metadata = {
  title: "Professionel WordPress-hjemmeside – fast pris fra 4.500 kr",
  description:
    "WordPress-hjemmeside til din virksomhed: unikt design, hurtig og SEO-klar – og du retter selv tekster og billeder. Fast pris fra 4.500 kr, design på 48 timer.",
  keywords: [
    "professionel wordpress hjemmeside",
    "professionel hjemmeside wordpress",
    "wordpress hjemmeside til virksomhed",
    "wordpress hjemmeside pris",
    "køb wordpress hjemmeside",
    "wordpress webbureau",
    "wordpress firma",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "Professionel WordPress-hjemmeside fra 4.500 kr",
    description:
      "Unikt design, hurtig, SEO-klar og nem at redigere selv. Fast pris og design på 48 timer.",
    url,
    type: "website",
    siteName: "WebHjerte",
    locale: "da_DK",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "Professionel WordPress-hjemmeside fra 4.500 kr",
    description: "Unikt design, hurtig, SEO-klar og nem at redigere selv. Fast pris.",
  },
  alternates: { canonical: url },
};

const faqsAll = [
  { q: "Hvad koster en professionel WordPress-hjemmeside?", a: "Hos WebHjerte koster en WordPress-hjemmeside med 3–5 sider 4.500 kr (Basis), og op til 8 sider med SEO, analytics og booking 8.500 kr (Standard). WooCommerce-webshops starter fra 14.000 kr. Alle priser er faste og inkl. moms." },
  { q: "Kan jeg selv redigere min WordPress-hjemmeside?", a: "Ja. Du får adgang til WordPress og en kort videogennemgang, så du selv kan rette tekster, billeder, priser og åbningstider – uden at ringe til en udvikler." },
  { q: "Hvor lang tid tager det at lave en WordPress-hjemmeside?", a: "Typisk 5–10 dage. Du ser et første designudkast inden for 48 timer, og betaler 0 kr for designet, hvis det ikke passer." },
  { q: "Hvad gør en WordPress-hjemmeside professionel?", a: "Et unikt design, hurtig indlæsning, korrekt SEO-opsætning, tydelige kontaktveje, sikkerhed og backup – og så få, velvalgte plugins, så siden ikke bliver langsom eller sårbar." },
  { q: "Kan I flytte eller forbedre min nuværende WordPress-side?", a: "Ja. Jeg kan redesigne, gøre en langsom WordPress-side hurtigere, rydde op i plugins eller flytte siden til ny hosting – uden at du mister dine placeringer på Google." },
  { q: "Hvad koster drift af en WordPress-hjemmeside?", a: "Domæne koster ca. 100–200 kr om året, og hosting typisk 50–300 kr om måneden. Vil du have opdateringer, backup og små rettelser, koster vedligeholdelse 249–799 kr om måneden. Det er frivilligt og kan opsiges løbende." },
  { q: "Arbejder du kun i Horsens?", a: "Nej. Jeg sidder i Horsens, men bygger WordPress-hjemmesider til virksomheder i hele Danmark. Alt kan klares online." },
];
// Ingen kronebeløb på denne side (priser står under Services)
const faqs = faqsWithoutPrices(faqsAll);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Professionel WordPress hjemmeside",
      serviceType: "WordPress-udvikling",
      url,
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Country", name: "Danmark" },
      offers: {
        "@type": "Offer",
        priceCurrency: "DKK",
        price: "4500",
        priceSpecification: { "@type": "PriceSpecification", price: "4500", priceCurrency: "DKK", valueAddedTaxIncluded: true },
        description: "Flersidet WordPress-hjemmeside fra 4.500 kr inkl. moms",
      },
    },
    breadcrumbLd([
      { name: "Forside", path: "/" },
      { name: "WordPress hjemmeside", path: "/wordpress-hjemmeside" },
    ]),
  ],
};


const WordpressHjemmeside = () => {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        breadcrumbs={[{ label: "Forside", href: "/" }, { label: "WordPress hjemmeside" }]}
        titleLines={["Professionel WordPress-hjemmeside", "til din virksomhed"]}
        lead="Unikt design, hurtig og klar til Google – og så nem, at du selv kan rette tekster og billeder. Første designudkast på 48 timer, 0 kr hvis det ikke passer."
        actions={
          <>
            <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
            <GhostLink href="/services#priser">Se priser</GhostLink>
          </>
        }
      />
      <ProblemLoesning />
      <WpEditDemo />
      <HvadGoerProfessionel />

      <CasesCarousel />
      <FaqLd faqs={faqs} />
      <FaqSplit title={["Spørgsmål om", "WordPress-hjemmesider"]} lead="Korte, ærlige svar – også om de løbende udgifter." faqs={faqs} />
      <FormToLead
        titleLine="Klar til din WordPress-hjemmeside?"
        description="Skriv til mig, og få et uforpligtende tilbud på din nye WordPress-side inden for 24 timer."
      />
    </>
  );
};

export default WordpressHjemmeside;
