import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import SectionHead from "../../components/ui/SectionHead";
import FormToLead from "../../components/ui/FormToLead";
import { LandingLd, FaqSplit } from "../../components/landing/shared";
import { OfferBlock, PromiseBlock } from "../../components/seo/ServiceLayout";
import { offer, promise } from "../../data/content/offer";
import { photoFor } from "../../data/photos";
import RegionRadar from "./_components/RegionRadar";
import { faqsWithoutPrices } from "../../lib/prices";
import SiteTree from "./_components/SiteTree";
import CityServices from "../../components/city/CityServices";

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

const faqsAll = [
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
// Ingen kronebeløb på denne side (priser står under Services)
const faqs = faqsWithoutPrices(faqsAll);



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
            <GhostLink href="/portefolje">Se eksempler</GhostLink>
          </>
        }
        below={<RegionRadar />}
      />

      <OfferBlock offer={offer["webbureau-midtjylland"]} />
      <PromiseBlock photo={photoFor("webbureau-midtjylland", "work")} promise={promise} />

      <CityServices city="Midtjylland" dark />

      {/* 4. SEO i regionen */}
      <section className="scene bg-[#f7f6f6]">
        <div className={wrap}>
          <SectionHead
            lines={["SEO i Midtjylland:", "en side pr. ydelse og område"]}
            maxW="max-w-[26ch]"
          />
          <SiteTree />
        </div>
      </section>

      <FaqSplit dark title={["Spørgsmål fra virksomheder", "uden for Horsens"]} faqs={faqs} />
      <FormToLead
        titleLine="Driver du virksomhed i Midtjylland?"
        description="Skriv kort, hvad du har brug for. Du får en fast pris og et første designudkast inden for 48 timer – passer det ikke, betaler du 0 kr."
      />
    </>
  );
}
