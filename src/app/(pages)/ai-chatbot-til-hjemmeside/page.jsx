import Link from "next/link";
import SectionHead from "../../components/ui/SectionHead";
import FormToLead from "../../components/ui/FormToLead";
import { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import { FadeUp, RevealLines } from "../../components/home/fx/Reveal";
import { LandingLd, FaqSplit, MoreLinks } from "../../components/landing/shared";
import { visibleLinks } from "../../data/hidden";
import ChatStudio from "./_components/ChatStudio";
import FlowRail from "./_components/FlowRail";
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

const faqs = [
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

const steps = [
  { t: "Du samler oplysningerne", d: "Priser, ydelser, åbningstider, levering og de spørgsmål, du får igen og igen. Jeg hjælper dig med at finde dem." },
  { t: "Jeg træner og sætter regler", d: "Chatbotten får kun dine oplysninger – og klare grænser for, hvad den ikke må svare på." },
  { t: "Vi tester på rigtige spørgsmål", d: "Jeg afprøver typiske spørgsmål, mærkelige spørgsmål og dem, den skal overdrage til dig." },
  { t: "Den går live", d: "Med oplysning om AI og opdateret privatlivspolitik. Du lærer at opdatere viden og læse samtalerne." },
];

const platforms = ["WordPress", "WooCommerce", "Shopify", "Webflow", "Next.js"];

const more = visibleLinks([
  { href: "/ai-seo", title: "AI SEO", desc: "Bliv nævnt i ChatGPT og Google AI." },
  { href: "/alle-typer-hjemmesider", title: "Alle typer hjemmesider", desc: "Se platformene chatbotten kan sættes på." },
  { href: "/shopify-hjemmeside", title: "Shopify-hjemmeside", desc: "Webshop med AI." },
  { href: "/hjemmeside-pris", title: "Hjemmeside pris", desc: "Pakker og priser." },
]);

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
        <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full bg-[#00a8e8]/[0.1] blur-[130px]" />
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
              <GhostLink href="#pris">Se prisen</GhostLink>
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
            lead="Besøgende, der ellers forlader siden, bliver fanget. Du modtager henvendelser med relevant information i stedet for tomme beskeder."
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

      {/* 4. Forløb */}
      <section className="scene bg-[#1c1e1e]">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24`}>
          <div className="lg:sticky lg:top-28 self-start">
            <RevealLines lines={["Live på få dage,", "når oplysningerne er samlet"]} className="font-semibold tracking-tight leading-[1.1] text-[clamp(24px,2.6vw,34px)] text-white max-w-[20ch]" />
            <FadeUp as="p" delay={0.1} className="mt-5 text-[15px] text-[#b4bdbd] leading-[1.8] max-w-[40ch]">
              Chatbotten kan sættes på hjemmesider i:
            </FadeUp>
            <FadeUp delay={0.15} className="mt-4 flex flex-wrap gap-2">
              {platforms.map((x) => (
                <span key={x} className="rounded-full border border-white/20 px-3.5 py-1.5 text-[13px] font-semibold text-white">{x}</span>
              ))}
            </FadeUp>
            <FadeUp delay={0.2}>
              <Link href="/alle-typer-hjemmesider" className="inline-block mt-5 text-[13.5px] font-semibold text-[#8fd8f6] hover:text-white transition-colors">Se platforme →</Link>
            </FadeUp>
          </div>
          <ol className="relative border-l border-white/15 ml-3">
            {steps.map((s, i) => (
              <FadeUp as="li" key={s.t} delay={i * 0.07} className="relative pl-8 sm:pl-12 pb-12 last:pb-0">
                <span aria-hidden className="absolute -left-[15px] top-0 w-[30px] h-[30px] rounded-full bg-[#1c1e1e] border-2 border-[#00a8e8] flex items-center justify-center text-[12px] font-semibold text-[#00a8e8] tabular-nums">{i + 1}</span>
                <p className="text-[clamp(20px,2.2vw,26px)] font-semibold tracking-tight text-white leading-tight mb-2">{s.t}</p>
                <p className="text-[15.5px] text-[#b4bdbd] leading-[1.75] max-w-[52ch]">{s.d}</p>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Pris */}
      <section id="pris" className="scene bg-[#e4f0f7] scroll-mt-20">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 items-center`}>
          <FadeUp>
            <p className="text-[13px] font-semibold text-[#007aab] mb-3">Pris</p>
            <p className="text-[clamp(52px,8vw,104px)] font-semibold tracking-tighter leading-none text-[#1c1e1e]">
              <span className="text-[0.32em] font-semibold text-[#5f5f5f] mr-3 tracking-normal align-middle">fra</span>14.000<span className="text-[0.32em] text-[#5f5f5f] ml-2 tracking-normal">kr</span>
            </p>
            <p className="mt-3 text-[14px] text-[#5f5f5f]">inkl. moms – når chatbotten indgår i en skræddersyet løsning</p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[17px] text-[#1c1e1e] leading-[1.75] mb-4 max-w-[46ch] font-medium">
              En chatbot til en eksisterende hjemmeside aftales individuelt efter, hvor meget den skal kunne.
            </p>
            <p className="text-[15.5px] text-[#4a4a4a] leading-[1.8] mb-8 max-w-[46ch]">
              Du får et fast tilbud inden for 24 timer – uden binding. De fleste chatbots kan sættes op på få dage, når dine oplysninger er samlet.
            </p>
            <PrimaryLink href="/kontakt">Få et gratis forslag</PrimaryLink>
          </FadeUp>
        </div>
      </section>

      <FaqSplit title={["Spørgsmål om", "AI-chatbots"]} lead="Også om det, der kan gå galt." faqs={faqs} />
      <MoreLinks links={more} />
      <FormToLead
        titleLine="Vil du have en chatbot, der kender din virksomhed?"
        description="Skriv kort, hvad kunderne oftest spørger om. Du får et fast forslag inden for 24 timer."
      />
    </>
  );
}
