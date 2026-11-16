import SectionHead from "../../components/ui/SectionHead";
import FormToLead from "../../components/ui/FormToLead";
import { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import { FadeUp, RevealLines } from "../../components/home/fx/Reveal";
import { LandingLd, FaqSplit } from "../../components/landing/shared";
import ChatStudio from "./_components/ChatStudio";
import FlowRail from "./_components/FlowRail";
import { faqsWithoutPrices } from "../../lib/prices";
import ControlPanel from "./_components/ControlPanel";

const path = "/ai-chatbot-til-hjemmeside";
const wrap = "max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24";

export const metadata = {
  title: "AI-chatbot til hjemmeside: svar kunder 24/7 | WebHjerte",
  description:
    "AI-chatbot til hjemmeside eller webshop: svarer kunder, kvalificerer leads og booker tider – trænet på dine egne oplysninger. Fast pris.",
  keywords: ["AI chatbot hjemmeside", "chatbot til hjemmeside", "chatbot virksomhed", "chatbot webshop", "AI kundeservice", "AI booking"],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "AI-chatbot til hjemmeside: svar kunder 24/7 | WebHjerte",
    description: "En chatbot, der kender din virksomhed, svarer kunderne med det samme og sender dig henvendelserne.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const faqsAll = [
  {
    q: "Hvad koster en AI-chatbot til hjemmesiden?",
    a: "AI-funktioner indgår i skræddersyede løsninger fra 14.000 kr inkl. moms. En chatbot til en eksisterende hjemmeside aftales individuelt, og du får et fast tilbud inden for 24 timer.",
  },
  {
    q: "Kan chatbotten finde på forkerte svar?",
    a: "Det kan ske i sjældne tilfælde. Derfor begrænser jeg den til dine egne oplysninger, tester grundigt og sætter regler for, hvad den ikke må svare på. Kunder kan altid nå et menneske.",
  },
  {
    q: "Kan jeg selv rette i, hvad chatbotten ved?",
    a: "Ja. Jeg viser, hvordan du opdaterer viden, priser og svar, så chatbotten altid er aktuel.",
  },
  {
    q: "Er det GDPR-kompatibelt?",
    a: "Det kan det være, når det er sat korrekt op med information om AI, samtykke og opdateret privatlivspolitik. Jeg hjælper med opsætningen.",
  },
  {
    q: "Virker det på min eksisterende hjemmeside?",
    a: "I de fleste tilfælde ja – uanset om den er bygget i WordPress, WooCommerce, Shopify, Webflow eller kode. Jeg tilføjer chatbotten uden at bygge siden om.",
  },
  {
    q: "Kan jeg se, hvad kunderne spørger om?",
    a: "Ja. Samtalerne giver værdifuld viden om, hvad kunderne efterspørger, og bruges til at forbedre både svar og hjemmesidens indhold.",
  },
];
// Ingen kronebeløb på denne side (priser står under Services)
const faqs = faqsWithoutPrices(faqsAll);




export default function ChatbotPage() {
  return (
    <>
      <LandingLd
        path={path}
        name="AI-chatbot til hjemmeside"
        serviceType="AI-chatbot"
        price="14000"
        priceNote="AI-funktioner indgår i skræddersyede løsninger fra 14.000 kr (inkl. moms); chatbot til eksisterende hjemmeside aftales individuelt"
        description="AI-chatbot til hjemmeside eller webshop: svarer kunder, indsamler henvendelser og booker tider – trænet på dine egne oplysninger."
        faqs={faqs}
      />

      {/* 1. Hero: centreret overskrift og et levende eksempel i fuld bredde */}
      <section className="scene relative overflow-hidden bg-[#1c1e1e]">
        <div aria-hidden className="grid-fade absolute inset-0 opacity-60" />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-24">
          <div className="text-center flex flex-col items-center mb-12 sm:mb-16">
            <RevealLines
              as="h1"
              lines={["Chatbotten svarer dine kunder,", "mens du arbejder"]}
              className="maintitle !text-center !leading-[1.2] !text-[clamp(28px,3.4vw,46px)] mb-6 max-w-[28ch]"
            />
            <FadeUp as="p" delay={0.15} className="text-[16px] sm:text-[17px] text-[#b4bdbd] leading-[1.75] max-w-[60ch] mb-8">
              En AI-chatbot, der kender din virksomhed, svarer på kundernes spørgsmål med det samme, samler henvendelser og booker tider – også uden for åbningstid. Prøv den selv herunder.
            </FadeUp>
            <FadeUp delay={0.25} className="flex flex-wrap justify-center gap-3">
              <PrimaryLink href="/kontakt">Få et gratis forslag</PrimaryLink>
              <GhostLink href="/portefolje">Se eksempler</GhostLink>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <ChatStudio />
          </FadeUp>
        </div>
      </section>

      {/* 2. Fra spørgsmål til henvendelse */}
      <section className="scene bg-[#f7f6f6]">
        <div className={wrap}>
          <SectionHead
            lines={["Fra spørgsmål til", "henvendelse i din indbakke"]}
            maxW="max-w-[22ch]"
          />
          <FlowRail />
        </div>
      </section>

      {/* 3. Kontrol */}
      <section className="scene bg-[#eceeee]">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 items-center`}>
          <div>
            <RevealLines
              lines={["Du bestemmer,", "hvad den må"]}
              className="font-semibold tracking-tight leading-[1.1] text-[clamp(24px,2.6vw,34px)] text-[#1c1e1e] mb-6"
            />
            <FadeUp as="p" delay={0.1} className="text-[16px] text-[#4a4a4a] leading-[1.8] mb-4 max-w-[44ch]">
              Chatbotten oplyser tydeligt, at den er en AI. Du sætter grænserne, og du kan til enhver tid se samtalerne.
            </FadeUp>
            <FadeUp as="p" delay={0.16} className="text-[16px] text-[#4a4a4a] leading-[1.8] max-w-[44ch]">
              AI kan i sjældne tilfælde tage fejl. Derfor tester jeg grundigt, og kunder kan altid nå et menneske.
            </FadeUp>
          </div>
          <FadeUp>
            <ControlPanel />
          </FadeUp>
        </div>
      </section>

      <FaqSplit title={["Spørgsmål om", "AI-chatbots"]} faqs={faqs} />
      <FormToLead
        titleLine="Vil du have en chatbot, der kender din virksomhed?"
        description="Skriv kort, hvad kunderne oftest spørger om. Du får et fast forslag inden for 24 timer."
      />
    </>
  );
}
