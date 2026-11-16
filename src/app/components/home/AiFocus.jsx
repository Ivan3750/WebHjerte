"use client";

import Link from "next/link";
import { FadeUp, RevealLines } from "./fx/Reveal";
import { ArrowBadge } from "../ui/ArrowIcon";
import { Panel, VisualChat, VisualFlow, VisualAiAnswer, VisualSeo } from "../illustrations/Visuals";
import { isHiddenHref } from "../../data/hidden";

// Illustrerede kort i samme stil som "Hvad kan jeg hjælpe med?" – billedet fortæller, teksten er kort.
const allCards = [
  {
    href: "/ai-chatbot-til-hjemmeside",
    title: "AI-chatbot, der svarer 24/7",
    text: "Svarer på dine priser og ydelser og booker tider – også når du sover.",
    visual: <VisualChat a="Hvad koster en ny tagrende?" b="Fra 4.900 kr inkl. montering. Vil du have et tilbud?" />,
  },
  {
    href: "/ai-automatisering-virksomhed",
    title: "Automatisering",
    text: "Bookinger, påmindelser og opfølgning kører af sig selv.",
    visual: <VisualFlow />,
  },
  {
    href: "/geo-ai-synlighed",
    title: "Bliv anbefalet af ChatGPT",
    text: "Så du bliver nævnt, når kunder spørger AI om hjælp.",
    visual: <VisualAiAnswer />,
  },
  {
    href: "/ai-seo",
    title: "AI SEO fra 3.500 kr",
    text: "Højere i Google og med i Googles AI-oversigter.",
    visual: <VisualSeo />,
  },
];

// Skjulte sider (se data/hidden.js) vises ikke
const cards = allCards.filter((c) => !isHiddenHref(c.href));

export default function AiFocus() {
  if (!cards.length) return null;
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-50" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <RevealLines
              lines={["Ikke bare en hjemmeside –", "AI, der arbejder for dig"]}
              className="text-white font-semibold tracking-tight leading-[1.1] text-[clamp(24px,2.6vw,34px)]"
            />
          </div>
          <FadeUp delay={0.15}>
            <Link
              href="/ai-seo"
              className="btn-primary"
            >
              Se AI SEO
            </Link>
          </FadeUp>
        </div>

        <div className={`grid grid-cols-1 sm:grid-cols-2 gap-4 ${cards.length > 2 ? "lg:grid-cols-4" : "lg:max-w-4xl"}`}>
          {cards.map((c, i) => (
            <FadeUp key={c.href} delay={i * 0.07} className="h-full">
              <Link
                href={c.href}
                className="group h-full flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="m-2.5">
                  <Panel dark h="h-[170px]">
                    {c.visual}
                  </Panel>
                </div>
                <div className="px-5 pt-3 pb-6 flex flex-col gap-2 flex-1">
                  <p className="text-[16px] font-semibold text-white leading-snug group-hover:text-[#00a8e8] transition-colors">{c.title}</p>
                  <p className="text-[15px] text-[#b4bdbd] leading-[1.7]">{c.text}</p>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
