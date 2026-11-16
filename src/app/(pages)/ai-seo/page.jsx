import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import SectionHead from "../../components/ui/SectionHead";
import FormToLead from "../../components/ui/FormToLead";
import { LandingLd, FaqSplit, CtaBand } from "../../components/landing/shared";
import AiAnswerDemo from "./_components/AiAnswerDemo";
import SearchShift from "./_components/SearchShift";
import SignalMeter from "./_components/SignalMeter";
import PricingMatrix from "./_components/PricingMatrix";

const path = "/ai-seo";
const wrap = "max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24";

export const metadata = {
  title: "AI SEO – bliv fundet i Google og ChatGPT, fra 3.500 kr",
  description:
    "AI SEO til lokale virksomheder: analyse, indhold og struktureret data, så du rangerer i Google og nævnes i ChatGPT og Google AI. Pakker fra 3.500 kr.",
  keywords: ["AI SEO", "AI synlighed", "GEO", "ChatGPT synlighed", "Google AI Overviews", "AI SEO Horsens"],
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "AI SEO – få din virksomhed fundet på Google | WebHjerte",
    description: "AI SEO til små virksomheder i Horsens og Midtjylland. Bliv fundet i Google og nævnt i AI-svar.",
    url: "https://www.webhjerte.dk/ai-seo",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    images: ["/opengraph-image"],
    card: "summary_large_image",
    title: "AI SEO i Horsens – få mere synlighed med AI | WebHjerte",
    description: "AI SEO til lokale virksomheder. Bliv fundet i Google og nævnt af AI-assistenter.",
  },
  alternates: { canonical: "https://www.webhjerte.dk/ai-seo" },
};

const faqs = [
  {
    q: "Hvad er AI SEO egentlig?",
    a: "AI SEO har to dele: at bruge AI som værktøj til at analysere søgemønstre og skrive bedre indhold – og at gøre din hjemmeside nem for AI-assistenter som ChatGPT, Gemini og Googles AI-oversigter at forstå, citere og stole på. Det er stadig mennesker, der bestemmer strategien.",
  },
  {
    q: "Kan I garantere, at ChatGPT nævner min virksomhed?",
    a: "Nej. AI-svar varierer fra gang til gang, og ingen kan love at blive nævnt. Det, jeg kan gøre, er at skabe de bedste forudsætninger: klare svar, struktureret data, ens oplysninger overalt og en teknisk ren side.",
  },
  {
    q: "Er AI SEO bare skrevet af en robot?",
    a: "Nej. AI er et værktøj, ikke en erstatning for menneskelig ekspertise. Jeg bruger AI til analyser og forslag, men alt indhold gennemgås og tilpasses, før det publiceres – så det matcher din virksomheds stemme og kundernes behov.",
  },
  {
    q: "Hvor lang tid går der, før jeg ser noget?",
    a: "Typisk begynder man at se bevægelse efter 2–3 måneder. Det afhænger af konkurrencen og hvor din side starter fra. Jeg lover ikke bestemte placeringer, men viser dig tal hver måned.",
  },
  {
    q: "Hvad koster AI SEO?",
    a: "Der er tre pakker: Basis fra 3.500 kr, Standard fra 6.500 kr og Skræddersyet fra 12.000 kr – alle inkl. moms. Prisen afhænger af din branche, konkurrence og hvor meget indhold der skal produceres.",
  },
  {
    q: "Hvordan ved jeg, om det virker?",
    a: "Med Standard og Skræddersyet får du månedlige rapporter: din position på relevante søgeord, den organiske trafik og hvor mange der kontakter dig. Du ser tal – ikke bare løfter.",
  },
];



export default function AiSeoPage() {
  return (
    <>
      <LandingLd
        path={path}
        name="AI SEO"
        serviceType="AI SEO"
        price="3500"
        priceNote="AI SEO-pakker fra 3.500 kr (inkl. moms)"
        description="AI SEO til lokale virksomheder: bliv fundet i Google og nævnt i ChatGPT og Googles AI-oversigter. Pakker fra 3.500 kr."
        faqs={faqs}
      />

      {/* 1. Hero med AI-svar-demo */}
      <PageHero
        titleLines={["Bliv nævnt, når kunderne", "spørger ChatGPT og Google AI"]}
        lead="Flere finder en lokal virksomhed ved at stille et spørgsmål til en AI-assistent. Jeg gør din hjemmeside nem at forstå, nem at citere og nem at stole på – for både Google, ChatGPT, Gemini og Perplexity. Faste priser fra 3.500 kr inkl. moms."
        actions={
          <>
            <PrimaryLink href="#priser">Se pakkerne</PrimaryLink>
            <GhostLink href="/gratis-seo-tjek-horsens">Gratis SEO-tjek</GhostLink>
          </>
        }
        aside={<AiAnswerDemo />}
      />

      {/* 2. Fra liste til svar */}
      <section className="scene bg-[#f7f6f6]">
        <div className={wrap}>
          <SectionHead
            lines={["Kunden får ét svar –", "ikke ti links"]}
            maxW="max-w-[22ch]"
          />
          <SearchShift />
        </div>
      </section>

      {/* 3. Signalmåler */}
      <section className="scene bg-[#1c1e1e]">
        <div className={wrap}>
          <SectionHead
            dark
            lines={["Hvad AI kigger efter", "– slå signalerne til"]}
          />
          <SignalMeter />
        </div>
      </section>

      {/* 5. Priser som tabel */}
      <section id="priser" className="scene bg-[#e4f0f7] scroll-mt-20">
        <div className={wrap}>
          <SectionHead lines={["Tre pakker –", "fast pris, ingen binding"]} />
          <PricingMatrix />
        </div>
      </section>

      <CtaBand
        title={["Hvor synlig er du,", "når kunden spørger AI?"]}
        text="Start med et gratis tjek af din side. Du får et ærligt billede af, hvad der virker, og hvad der bør rettes først."
        href="/gratis-seo-tjek-horsens"
        label="Få et gratis tjek"
      />

      <FaqSplit dark title={["Ærlige svar om", "AI SEO"]} faqs={faqs} />
      <FormToLead
        titleLine="Klar til at blive fundet af AI?"
        description="Skriv kort om din virksomhed og din hjemmeside. Jeg svarer inden for 24 timer – gratis og uforpligtende."
      />
    </>
  );
}
