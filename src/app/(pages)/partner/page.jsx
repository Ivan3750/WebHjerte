import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import SectionHead from "../../components/ui/SectionHead";
import FormToLead from "../../components/ui/FormToLead";
import Questions from "../../components/Questions";
import { FadeUp } from "../../components/home/fx/Reveal";
import SpotlightCard from "../../components/home/fx/SpotlightCard";
import { breadcrumbLd, orgRef, SITE_URL } from "../../lib/seo";

const url = `${SITE_URL}/partner`;

export const metadata = {
  title: "Partnerskab for bureauer og revisorer | WebHjerte",
  description:
    "Underleverandør til bureauer og designere – og 10 % i henvisningsprovision til revisorer og rådgivere. Alt foregår skriftligt og til fast pris.",
  alternates: { canonical: url },
  openGraph: {
    title: "Partnerskab med WebHjerte – for bureauer og revisorer",
    description: "Hurtig udvikler som underleverandør, og provision for at henvise kunder. Skriftligt, fast pris, ingen binding.",
    url,
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
};

const tracks = [
  {
    eyebrow: "Bureauer og designere",
    title: "En udvikler, der leverer til tiden",
    text: "Du har kunden og designet – jeg bygger det. Som underleverandør leverer jeg Next.js- eller WordPress-sider i dit navn, så du kan tage flere opgaver uden at ansætte.",
    points: [
      "Første udkast på 48 timer",
      "White label – din kunde ser kun dit bureau",
      "Fast pris pr. opgave, aftalt på forhånd",
      "Al kommunikation skriftligt (mail, Slack, Trello)",
      "NDA, hvis du ønsker det",
    ],
  },
  {
    eyebrow: "Revisorer og rådgivere",
    title: "10 % for hver kunde, du henviser",
    text: "Dine kunder spørger dig, når de starter op. Henviser du dem til mig, får de en hjemmeside til fast pris – og du får 10 % af projektprisen.",
    points: [
      "10 % af projektprisen inkl. moms",
      "Udbetales, når kunden har betalt",
      "Ingen kontrakt eller binding for dig",
      "Du får besked, når projektet er leveret",
      "Din kunde får samme faste pris som alle andre",
    ],
  },
];

const steps = [
  { n: "01", title: "Skriv til mig", text: "Fortæl kort, hvem du er, og hvordan du gerne vil samarbejde. Jeg svarer inden for 24 timer." },
  { n: "02", title: "Vi aftaler rammerne", text: "Pris, levering og kontaktform aftales skriftligt – én gang, så næste opgave bare kan sættes i gang." },
  { n: "03", title: "Første opgave", text: "Du sender en opgave eller en kunde. Du får løbende status og besked, når det er færdigt." },
];

const faqs = [
  {
    q: "Hvordan fungerer henvisningsprovisionen?",
    a: "Når en kunde, du har henvist, har betalt for sin hjemmeside, får du 10 % af projektprisen inkl. moms. Kunden nævner dit navn, eller du sender mig kontakten direkte. Provisionen gælder selve projektet, ikke løbende abonnementer.",
  },
  {
    q: "Ser min kunde, at du er underleverandør?",
    a: "Nej, ikke hvis du ikke ønsker det. Som underleverandør arbejder jeg i dit navn, og du har kontakten til kunden. Vi kan skrive en NDA, før vi starter.",
  },
  {
    q: "Hvilke opgaver tager du som underleverandør?",
    a: "Hjemmesider og landingssider i Next.js eller WordPress, webshops i WooCommerce og Shopify-opsætning. Du kan levere design i Figma, eller jeg kan designe ud fra din stil.",
  },
  {
    q: "Hvorfor foregår alt skriftligt?",
    a: "Det giver færre misforståelser: Aftaler, ændringer og priser står sort på hvidt, og du kan altid finde dem igen. Vi kan selvfølgelig tage et videomøde, hvis der er brug for det.",
  },
  {
    q: "Hvad koster det at blive partner?",
    a: "Ingenting. Der er ingen gebyrer, ingen binding og intet minimum af opgaver.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: "Partnerskab for bureauer og revisorer",
      inLanguage: "da-DK",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: orgRef,
    },
    breadcrumbLd([
      { name: "Forside", path: "/" },
      { name: "Partnerskab", path: "/partner" },
    ]),
  ],
};

export default function PartnerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        breadcrumbs={[{ label: "Forside", href: "/" }, { label: "Partnerskab" }]}
        eyebrow="Partnerskab"
        titleLines={["Samarbejd med WebHjerte –", "som bureau eller revisor"]}
        lead="Har du kunder, der skal bruge en hjemmeside? Enten bygger jeg den for dig som underleverandør, eller også henviser du kunden og får 10 % i provision. Alt aftales skriftligt og til fast pris."
        actions={
          <>
            <PrimaryLink href="#kontakt">Bliv partner</PrimaryLink>
            <GhostLink href="/portefolje">Se mine projekter</GhostLink>
          </>
        }
      />

      <section className="scene bg-[#f7f6f6]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
          <SectionHead eyebrow="To måder at samarbejde på" lines={["Vælg det, der passer", "til din forretning"]} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tracks.map((t, i) => (
              <FadeUp key={t.title} delay={i * 0.08} className="h-full">
                <div className={`h-full rounded-3xl p-7 sm:p-9 border ${i === 0 ? "bg-white border-[#e8e6e6]" : "bg-[#1c1e1e] border-[#00a8e8]/40 text-white"}`}>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-[#00a8e8] mb-3">{t.eyebrow}</p>
                  <h2 className={`text-[clamp(20px,2.2vw,28px)] font-semibold tracking-tight leading-tight mb-4 ${i === 0 ? "text-[#1c1e1e]" : "text-white"}`}>
                    {t.title}
                  </h2>
                  <p className={`text-[14px] leading-[1.8] mb-6 ${i === 0 ? "text-[#5f5f5f]" : "text-[#93a0a0]"}`}>{t.text}</p>
                  <ul className="flex flex-col gap-3">
                    {t.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-[1px] bg-[#00a8e8]/15 border border-[#00a8e8]/40">
                          <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden>
                            <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className={`text-[13.5px] leading-snug ${i === 0 ? "text-[#4a4a4a]" : "text-[#c9d3d3]"}`}>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="scene bg-[#1c1e1e]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
          <SectionHead dark eyebrow="Sådan fungerer det" lines={["Tre skridt –", "og så kører det"]} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.08} className="h-full">
                <SpotlightCard className="h-full rounded-3xl glass">
                  <div className="p-7 flex flex-col gap-3">
                    <span className="text-[12px] tabular-nums text-[#00a8e8]">{s.n}</span>
                    <p className="text-[17px] font-semibold text-white">{s.title}</p>
                    <p className="text-[13.5px] text-[#8795a0] leading-[1.75]">{s.text}</p>
                  </div>
                </SpotlightCard>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Questions faqs={faqs} />

      <div id="kontakt" className="scroll-mt-[68px]">
        <FormToLead
          eyebrow="Bliv partner"
          titleLine="Lad os tage en snak – på skrift"
          description="Skriv kort, om du er bureau, designer eller revisor, og hvordan du forestiller dig samarbejdet. Jeg svarer inden for 24 timer."
          defaultPakke="partnerskab"
        />
      </div>
    </>
  );
}
