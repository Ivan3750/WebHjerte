import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import SectionHead from "../../components/ui/SectionHead";
import BureauCompare from "../../components/ui/BureauCompare";
import PriceStrip from "../../components/ui/PriceStrip";
import FormToLead from "../../components/ui/FormToLead";
import { FadeUp, RevealLines } from "../../components/home/fx/Reveal";
import { LandingLd, FaqSplit, MoreLinks } from "../../components/landing/shared";
import { visibleLinks } from "../../data/hidden";
import RegionRadar from "./_components/RegionRadar";
import Receipt from "./_components/Receipt";
import DayStrip from "./_components/DayStrip";
import SiteTree from "./_components/SiteTree";

const path = "/webbureau-midtjylland";
const wrap = "max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24";

export const metadata = {
  title: "Webbureau i Midtjylland – hjemmeside fra 2.500 kr",
  description:
    "Hjemmesider i WordPress eller kode til virksomheder i Aarhus, Silkeborg, Vejle og hele Midtjylland. Fast pris fra 2.500 kr og direkte kontakt med udvikleren.",
  keywords: ["webbureau Midtjylland", "webbureau Jylland", "webbureau i Jylland", "webbureau Østjylland", "hjemmeside Midtjylland"],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "Webbureau i Midtjylland | WebHjerte",
    description: "Hjemmesider og SEO til virksomheder i hele Midtjylland. Fast pris fra 2.500 kr og direkte kontakt med udvikleren.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Arbejder I kun med virksomheder i Horsens?",
    a: "Nej. Jeg er baseret i Horsens, men arbejder med virksomheder i hele Midtjylland og resten af Danmark. Samarbejdet foregår online via video, telefon og mail, så afstand er ikke en hindring.",
  },
  {
    q: "Hvad koster en hjemmeside fra et webbureau i Midtjylland?",
    a: "Hos WebHjerte starter priserne fra 2.500 kr for en landingside, 4.500 kr for Basis og 8.500 kr for Standard. Skræddersyede løsninger starter fra 14.000 kr. Alle priser er faste og aftales på forhånd.",
  },
  {
    q: "Kan I møde mig fysisk, hvis jeg bor uden for Horsens?",
    a: "I mange tilfælde kan jeg komme ud til jer i Midtjylland, hvis et fysisk møde giver mest værdi. Ellers klarer vi det hele online, hvilket de fleste kunder foretrækker, fordi det er hurtigere.",
  },
  {
    q: "Hvorfor vælge et lille webbureau frem for et stort?",
    a: "Du får direkte kontakt med den, der bygger din hjemmeside, hurtigere svar og lavere priser, fordi du ikke betaler for projektledere og overhead. Til gengæld er jeg ikke det rette valg til meget store enterprise-projekter.",
  },
];

const compareRows = [
  { topic: "Kontakt", agency: "Via projektleder eller account manager.", me: "Direkte med udvikleren." },
  { topic: "Pris", agency: "Ofte timebaseret, højere startpris.", me: "Fast pris fra 2.500 kr." },
  { topic: "Svartid", agency: "Varierer.", me: "Inden for 24 timer." },
  { topic: "Tidsplan", agency: "Uger til måneder.", me: "2–10 dage." },
  { topic: "Bedst til", agency: "Store organisationer og komplekse projekter.", me: "Små og mellemstore virksomheder." },
];

const more = visibleLinks([
  { href: "/seo-horsens", title: "SEO Horsens", desc: "Lokal SEO og teknisk optimering." },
  { href: "/webbureau-aarhus", title: "Webbureau Aarhus", desc: "Hjemmesider til Aarhus-virksomheder." },
  { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Pakker og priser uden skjulte gebyrer." },
  { href: "/portefolje", title: "Portefølje", desc: "Se eksempler på færdige hjemmesider." },
]);

export default function WebbureauMidtjyllandPage() {
  return (
    <>
      <LandingLd
        path={path}
        name="Webbureau Midtjylland"
        serviceType="Webbureau"
        description="Hjemmesider og SEO til virksomheder i hele Midtjylland: Aarhus, Silkeborg, Vejle, Skanderborg, Randers, Viborg og Herning."
        faqs={faqs}
      />

      {/* 1. Hero – kort med radar lige under overskriften */}
      <PageHero
        titleLines={["Webbureau i Midtjylland –", "hjemmesider til fast pris"]}
        lead="WebHjerte er et lille webbureau fra Horsens. Jeg bygger hurtige hjemmesider til virksomheder i hele Midtjylland – med direkte kontakt til den, der bygger siden, og levering på 2–10 dage."
        actions={
          <>
            <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
            <GhostLink href="/hjemmeside-pris">Se priserne</GhostLink>
          </>
        }
        below={<RegionRadar />}
      />

      {/* 2. Kvittering */}
      <section className="scene bg-[#f7f6f6]">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[1fr_0.9fr] gap-14 lg:gap-24 items-center`}>
          <div>
            <RevealLines
              lines={["Du ved, hvad det koster,", "før vi går i gang"]}
              className="font-semibold tracking-tight leading-[1.1] text-[clamp(24px,2.6vw,34px)] text-[#1c1e1e] mb-6 max-w-[22ch]"
            />
            <FadeUp as="p" delay={0.1} className="text-[16px] text-[#4a4a4a] leading-[1.8] mb-4 max-w-[48ch]">
              Mange større bureauer er bygget til store budgetter og lange forløb. Jeg har valgt det modsatte: enkle processer, klare priser og hurtig levering.
            </FadeUp>
            <FadeUp as="p" delay={0.16} className="text-[16px] text-[#4a4a4a] leading-[1.8] max-w-[48ch]">
              Du ved, hvad det koster, hvornår det er klar, og hvem du skal ringe til, hvis du har et spørgsmål.
            </FadeUp>
          </div>
          <Receipt />
        </div>
      </section>

      {/* 3. Sammenligning */}
      <section className="scene bg-[#1c1e1e]">
        <div className={wrap}>
          <SectionHead dark lines={["Lokalt og lille –", "eller stort bureau?"]} lead="Begge dele har deres plads. Her er forskellen, så du kan vælge det, der passer til dit projekt." />
          <BureauCompare rows={compareRows} agencyLabel="Stort bureau" meLabel="WebHjerte (lokalt, lille)" />
        </div>
      </section>

      {/* 4. SEO i regionen */}
      <section className="scene bg-[#f7f6f6]">
        <div className={wrap}>
          <SectionHead
            lines={["SEO i Midtjylland:", "en side pr. ydelse og område"]}
            lead="Mange virksomheder betjener kunder i flere byer. Derfor bygger jeg med både et lokalt og et regionalt perspektiv. Det giver bedre synlighed end én enkelt generel forside."
            maxW="max-w-[26ch]"
          />
          <SiteTree />
        </div>
      </section>

      {/* 5. Dagsstribe */}
      <section className="scene bg-[#1c1e1e]">
        <div className={wrap}>
          <SectionHead dark lines={["Fra første samtale", "til live på 2–10 dage"]} lead="Første designudkast er klar efter 48 timer. Intet bygges, før du har godkendt det." />
          <DayStrip />
        </div>
      </section>

      <PriceStrip />

      <FaqSplit dark title={["Spørgsmål fra virksomheder", "uden for Horsens"]} faqs={faqs} />
      <MoreLinks links={more} />
      <FormToLead
        titleLine="Driver du virksomhed i Midtjylland?"
        description="Skriv kort, hvad du har brug for. Du får en fast pris og et første designudkast inden for 48 timer – passer det ikke, betaler du 0 kr."
      />
    </>
  );
}
