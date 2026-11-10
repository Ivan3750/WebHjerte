import { ArrowIcon } from "../ui/ArrowIcon";
import Link from "next/link";
import { FadeUp, RevealLines } from "./fx/Reveal";

const cards = [
  {
    href: "/ai-chatbot-til-hjemmeside",
    tag: "Kundeservice",
    title: "AI-chatbot, der svarer 24/7",
    text: "Trænet på dine egne priser og ydelser. Svarer, kvalificerer leads og booker tider – også når du sover.",
  },
  {
    href: "/ai-automatisering-virksomhed",
    tag: "Automatisering",
    title: "Spar timer hver uge",
    text: "Formularer, bookinger, påmindelser og opfølgning kører af sig selv, så du kan bruge tiden på kunderne.",
  },
  {
    href: "/geo-ai-synlighed",
    tag: "AI-synlighed",
    title: "Bliv nævnt i ChatGPT og Google AI",
    text: "Svar-først-indhold, struktureret data og llms.txt, så AI-assistenter forstår og anbefaler din virksomhed.",
  },
  {
    href: "/ai-seo",
    tag: "AI SEO",
    title: "AI-drevet SEO fra 3.500 kr",
    text: "Analyse, indhold og måling – så du rangerer i Google og dukker op i AI-oversigter.",
  },
];

const platforms = ["WordPress", "WooCommerce", "Shopify", "Webflow", "Wix", "Squarespace", "Next.js / React", "Skræddersyet kode"];

export default function AiFocus() {
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-50" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-[#00a8e8]" />
          AI i fokus
        </FadeUp>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-16 mb-12 items-end">
          <RevealLines
            lines={["Vi bygger ikke bare hjemmesider –", "vi implementerer AI i din virksomhed"]}
            className="text-white font-semibold tracking-tight leading-[1.1] text-[clamp(26px,3.8vw,48px)]"
          />
          <FadeUp as="p" delay={0.1} className="text-[14px] text-[#93a0a0] leading-[1.85]">
            AI er ikke kun for store virksomheder. Jeg sætter praktiske løsninger op, der svarer dine kunder, booker
            tider, automatiserer det kedelige og gør dig synlig, når folk spørger ChatGPT, Gemini og Google AI. Fast pris
            og svar inden for 24 timer.
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((c, i) => (
            <FadeUp key={c.href} delay={i * 0.07}>
              <Link
                href={c.href}
                className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] hover:border-[#00a8e8]/50 p-6 flex flex-col gap-3 transition-colors"
              >
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#00a8e8]">{c.tag}</span>
                <p className="text-[16px] font-medium text-white leading-snug">{c.title}</p>
                <p className="text-[13px] text-[#8795a0] leading-[1.75] flex-1">{c.text}</p>
                <span className="text-[12px] text-[#c7d0d0] group-hover:text-[#00a8e8] transition-colors">
                  Læs mere <ArrowIcon className="w-3.5 h-3.5 inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-14 pt-8 border-t border-white/10">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-4">Alle typer hjemmesider, alle platforme</p>
          <p className="text-[14px] text-[#93a0a0] leading-[1.85] max-w-3xl mb-6">
            Uanset om du vil have WordPress, en Shopify-webshop eller skræddersyet kode, bygger og optimerer jeg på den
            platform, der passer til dig – og kan tilføje AI til dem alle.
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {platforms.map((p) => (
              <span key={p} className="text-[12px] text-[#c7d0d0] border border-white/10 rounded-full px-4 py-1.5">
                {p}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/ai-loesninger" className="inline-flex items-center text-[13px] font-semibold text-[#1c1e1e] bg-[#00a8e8] hover:bg-white rounded-full px-6 py-3 transition-colors">
              Se AI-løsninger
            </Link>
            <Link href="/alle-typer-hjemmesider" className="inline-flex items-center text-[13px] font-medium text-white border border-white/15 hover:border-white/40 rounded-full px-6 py-3 transition-colors">
              Alle platforme
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
