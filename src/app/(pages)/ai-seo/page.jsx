import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import SectionHead from "../../components/ui/SectionHead";
import FormToLead from "../../components/ui/FormToLead";
import { FadeUp } from "../../components/home/fx/Reveal";
import { LandingLd, FaqSplit, CtaBand, MoreLinks } from "../../components/landing/shared";
import { visibleLinks } from "../../data/hidden";
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

const steps = [
  { n: "01", t: "Analyse", d: "Jeg finder ud af, hvad dine kunder spørger Google og AI om – og hvor du står lige nu." },
  { n: "02", t: "Indhold", d: "Dine ydelsessider og svar omskrives, så de besvarer spørgsmålene klart. Alt gennemgås af et menneske." },
  { n: "03", t: "Struktur", d: "Struktureret data, FAQ og ens virksomhedsoplysninger gør det nemt for maskiner at forstå dig." },
  { n: "04", t: "Måling", d: "Du får tal på placeringer, trafik og henvendelser, og jeg justerer løbende." },
];

const more = visibleLinks([
  { href: "/seo-horsens", title: "SEO Horsens", desc: "Lokal SEO og teknisk optimering." },
  { href: "/blog/saadan-bliver-du-nevnt-af-chatgpt-og-google-ai", title: "Guide: nævnt af ChatGPT", desc: "Sådan gør du det trin for trin." },
  { href: "/ai-chatbot-til-hjemmeside", title: "AI-chatbot", desc: "Svar kunderne, mens du arbejder." },
  { href: "/gratis-seo-tjek-horsens", title: "Gratis SEO-tjek", desc: "Få en gennemgang af din side." },
]);

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
            lead="Traditionel SEO handler om at ligge højt på listen. AI-synlighed handler om at blive en del af selve svaret. Er du ikke blandt de kilder, AI stoler på, eksisterer du ikke i det svar – uanset hvor flot din hjemmeside er."
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
            lead="AI læser dit indhold som tekst og relationer, ikke kun som søgeord. Derfor belønner den klarhed, konsistens og dokumenterede fakta. Prøv selv."
          />
          <SignalMeter />
        </div>
      </section>

      {/* 4. Forløb */}
      <section className="scene bg-[#eceeee]">
        <div className={wrap}>
          <SectionHead lines={["Fra analyse til målbare", "tal i fire trin"]} maxW="max-w-[24ch]" />
          <ol className="grid grid-cols-1 md:grid-cols-4 relative">
            <span aria-hidden className="hidden md:block absolute left-0 right-0 top-[7px] h-px bg-[#1c1e1e]/20" />
            {steps.map((s, i) => (
              <FadeUp as="li" key={s.n} delay={i * 0.08} className="relative pt-0 md:pt-10 pb-10 md:pb-0 md:pr-8 pl-8 md:pl-0 border-l md:border-l-0 border-[#1c1e1e]/20">
                <span aria-hidden className="absolute -left-[7px] md:left-0 top-0 w-3.5 h-3.5 rounded-full bg-[#00a8e8] ring-4 ring-[#eceeee]" />
                <p className="text-[13px] font-semibold text-[#007aab] tabular-nums mb-2">{s.n}</p>
                <p className="text-[22px] font-semibold tracking-tight text-[#1c1e1e] mb-3">{s.t}</p>
                <p className="text-[15px] text-[#4a4a4a] leading-[1.75] max-w-[30ch]">{s.d}</p>
              </FadeUp>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Priser som tabel */}
      <section id="priser" className="scene bg-[#e4f0f7] scroll-mt-20">
        <div className={wrap}>
          <SectionHead lines={["Tre pakker –", "fast pris, ingen binding"]} lead="Det første SEO- og web-tjek er gratis. Alle priser er inkl. moms." />
          <PricingMatrix />
        </div>
      </section>

      <CtaBand
        title={["Hvor synlig er du,", "når kunden spørger AI?"]}
        text="Start med et gratis tjek af din side. Du får et ærligt billede af, hvad der virker, og hvad der bør rettes først."
        href="/gratis-seo-tjek-horsens"
        label="Få et gratis tjek"
      />

      <FaqSplit dark title={["Ærlige svar om", "AI SEO"]} lead="Også om det, jeg ikke kan love." faqs={faqs} />
      <MoreLinks links={more} />
      <FormToLead
        titleLine="Klar til at blive fundet af AI?"
        description="Skriv kort om din virksomhed og din hjemmeside. Jeg svarer inden for 24 timer – gratis og uforpligtende."
      />
    </>
  );
}
