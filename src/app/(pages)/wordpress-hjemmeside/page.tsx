import Link from "next/link";
import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import ProblemLoesning from "./_components/ProblemLoesning";
import HvadGoerProfessionel from "./_components/HvadGoerProfessionel";
import FormToLead from "../../components/ui/FormToLead";
import CasesCarousel from "../../components/home/CasesCarousel";
import Questions from "../../components/Questions";
import PackagesBlock from "../services/_components/PackagesBlock";
import QuickLeadForm from "../../components/ui/QuickLeadForm";
import { SITE_URL, breadcrumbLd } from "../../lib/seo";
import { DataTable } from "../../components/seo/ContentBlocks";

const url = `${SITE_URL}/wordpress-hjemmeside`;

// Search Console: "professionel wordpress hjemmeside" (+ varianter) er sitets største søgeord, men siden lå på side 2–3.
export const metadata = {
  title: "WordPress-hjemmeside fra 4.500 kr – fast pris | WebHjerte",
  description:
    "Få en professionel WordPress-hjemmeside til din virksomhed: unikt design, hurtig, SEO-klar og nem at redigere selv. Fast pris fra 4.500 kr, design på 48 timer.",
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

const included = [
  "Unikt design efter dit brand – ikke et standardtema med dit logo på",
  "Responsiv på mobil, tablet og computer",
  "Hurtig indlæsning: optimerede billeder, caching og få, gennemtestede plugins",
  "SEO-opsætning: titler, beskrivelser, sitemap, struktureret data og Google Search Console",
  "Kontaktformular, Google Maps og klik-for-at-ringe",
  "Sikkerhed: SSL, backup, spambeskyttelse og opdateringer ved lancering",
  "Kort videogennemgang, så du selv kan rette tekster, billeder og priser",
  "Du ejer domæne, hjemmeside og indhold fra dag ét",
];

const comparison = {
  head: ["", "WebHjerte", "Typisk bureau", "Gør det selv"],
  rows: [
    ["Pris", "Fra 4.500 kr (fast)", "20.000–60.000 kr", "Gratis tema + din tid"],
    ["Levering", "5–10 dage", "4–12 uger", "Uvist"],
    ["Design", "Skræddersyet", "Skræddersyet", "Standardtema"],
    ["Kontakt", "Direkte med udvikleren", "Via projektleder", "Ingen"],
    ["SEO og hastighed", "Inkluderet", "Ofte tillæg", "Op til dig"],
  ],
};

const faqs = [
  { q: "Hvad koster en professionel WordPress-hjemmeside?", a: "Hos WebHjerte koster en WordPress-hjemmeside med 3–5 sider 4.500 kr (Basis), og op til 8 sider med SEO, analytics og booking 8.500 kr (Standard). WooCommerce-webshops starter fra 14.000 kr. Alle priser er faste." },
  { q: "Kan jeg selv redigere min WordPress-hjemmeside?", a: "Ja. Du får adgang til WordPress og en kort videogennemgang, så du selv kan rette tekster, billeder, priser og åbningstider – uden at ringe til en udvikler." },
  { q: "Hvor lang tid tager det at lave en WordPress-hjemmeside?", a: "Typisk 5–10 dage. Du ser et første designudkast inden for 48 timer, og betaler 0 kr for designet, hvis det ikke passer." },
  { q: "Hvad gør en WordPress-hjemmeside professionel?", a: "Et unikt design, hurtig indlæsning, korrekt SEO-opsætning, tydelige kontaktveje, sikkerhed og backup – og så få, velvalgte plugins, så siden ikke bliver langsom eller sårbar." },
  { q: "Kan I flytte eller forbedre min nuværende WordPress-side?", a: "Ja. Jeg kan redesigne, gøre en langsom WordPress-side hurtigere, rydde op i plugins eller flytte siden til ny hosting – uden at du mister dine placeringer på Google." },
  { q: "Hvad koster drift af en WordPress-hjemmeside?", a: "Domæne koster ca. 100–200 kr om året, og hosting typisk 50–300 kr om måneden. Vil du have opdateringer, backup og små rettelser, koster vedligeholdelse 249–799 kr om måneden. Det er frivilligt og kan opsiges løbende." },
  { q: "Arbejder du kun i Horsens?", a: "Nej. Jeg sidder i Horsens, men bygger WordPress-hjemmesider til virksomheder i hele Danmark. Alt kan klares online." },
];

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
        description: "Flersidet WordPress-hjemmeside fra 4.500 kr",
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
        eyebrow="WordPress · fast pris"
        titleLines={["Professionel WordPress hjemmeside", "til din virksomhed – fra 4.500 kr"]}
        lead="Unikt design, hurtig og klar til Google – og så nem, at du selv kan rette tekster og billeder. Første designudkast på 48 timer, 0 kr hvis det ikke passer."
        actions={
          <>
            <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
            <GhostLink href="/blog/hvad-koster-en-hjemmeside-2026#prisberegner">Beregn pris</GhostLink>
          </>
        }
        aside={
          <div className="rounded-3xl border border-white/10 bg-[#242828] p-6 sm:p-8">
            <QuickLeadForm />
          </div>
        }
      />
      <ProblemLoesning />
      <HvadGoerProfessionel />

      <section className="bg-[#f7f6f6]">
        <div className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-[#1c1e1e] font-semibold tracking-tight text-[clamp(22px,2.6vw,30px)] leading-[1.2] mb-6">
              Det får du i din WordPress-hjemmeside
            </h2>
            <ul className="flex flex-col gap-2.5">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-[14px] text-[#555] leading-[1.75]">
                  <span className="mt-[9px] w-1.5 h-1.5 rounded-full bg-[#00a8e8] flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[#1c1e1e] font-semibold tracking-tight text-[clamp(22px,2.6vw,30px)] leading-[1.2] mb-6">
              WordPress-hjemmeside: pris og leveringstid
            </h2>
            <DataTable table={comparison} />
            <p className="mt-4 text-[13px] text-[#666] leading-[1.8]">
              Bureau-priser er vejledende markedspriser. Se{" "}
              <Link href="/blog/hvad-koster-en-hjemmeside-2026" className="text-[#007aab] underline underline-offset-4">hvad en hjemmeside koster i 2026</Link>{" "}
              eller læs om <Link href="/blog/wordpress-eller-skraeddersyet" className="text-[#007aab] underline underline-offset-4">WordPress eller skræddersyet kode</Link>.
            </p>
          </div>
        </div>
      </section>

      <CasesCarousel />
      <PackagesBlock />
      <FormToLead
        titleLine="Klar til din WordPress-hjemmeside?"
        description="Skriv til mig, og få et uforpligtende tilbud på din nye WordPress-side inden for 24 timer."
      />
      <Questions faqs={faqs} />
    </>
  );
};

export default WordpressHjemmeside;
