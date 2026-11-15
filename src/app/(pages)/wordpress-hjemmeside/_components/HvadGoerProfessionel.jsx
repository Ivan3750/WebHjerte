"use client";

import Link from "next/link";

import AnimatedInView from "../../../components/ui/AnimatedInView";
import Button from "../../../components/ui/Button";

const punkter = [
  {
    titel: "Hastighed",
    tekst:
      "En side, der loader på under 1-2 sekunder. De fleste besøgende forlader siden, hvis den er langsom – og Google straffer det også i søgeresultaterne.",
    metrik: "< 1,5 sek. indlæsning",
    icon: (
      <path
        d="M13 3L4 14h6l-1 9 9-11h-6l1-9z"
        stroke="#00a8e8"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    titel: "Mobilvenlig",
    tekst:
      "Over halvdelen af dine besøgende sidder på mobilen. Siden er bygget til at fungere lige så godt der som på en computerskærm – ikke bare skaleret ned.",
    metrik: "100 % responsiv",
    icon: (
      <>
        <rect
          x="7"
          y="2"
          width="10"
          height="20"
          rx="2"
          stroke="#00a8e8"
          strokeWidth="1.6"
          fill="none"
        />
        <line x1="10" y1="18" x2="14" y2="18" stroke="#00a8e8" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    titel: "SEO-fundament",
    tekst:
      "Struktureret kode, korrekte overskrifter og teknisk opsætning, der gør det muligt at blive fundet på Google – ikke kun en side, der ser pæn ud.",
    metrik: "Klar til at blive fundet",
    icon: (
      <>
        <circle cx="10" cy="10" r="6.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <line x1="19" y1="19" x2="14.8" y2="14.8" stroke="#00a8e8" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    titel: "Moderne design",
    tekst:
      "Et look, der matcher, hvor seriøs din virksomhed er. Skræddersyet til dig og dine kunder – ikke en genkendelig skabelon fra en byggeplatform.",
    metrik: "Skræddersyet, ikke skabelon",
    icon: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <rect x="13" y="3" width="8" height="5" rx="1.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <rect x="13" y="10" width="8" height="11" rx="1.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
      </>
    ),
  },
];

export default function HvadGoerProfessionel() {
  return (
    <section className="bg-[#eceeee] px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.4fr] gap-10 lg:gap-20">
        <div className="lg:sticky lg:top-28 self-start">
          <AnimatedInView as="h2" className="text-[#1c1e1e] font-semibold tracking-tight !leading-[1.1] text-[clamp(24px,2.6vw,34px)] mb-5">
            Det, der gør en hjemmeside professionel
          </AnimatedInView>
          <AnimatedInView as="p" className="text-[15px] text-[#6a6a6a] leading-[1.85] max-w-[40ch]">
            Et flot design er kun halvdelen af historien. Det, der afgør om en
            side reelt virker for din forretning, foregår under overfladen.
          </AnimatedInView>
          <AnimatedInView as="div" className="flex items-center gap-5 flex-wrap mt-9">
            <Link href="/kontakt">
              <Button name="Få en gratis vurdering" />
            </Link>
            <Link
              href="/portefolje"
              className="text-[13px] text-[#4a4a4a] border-b border-[#bdbfbf] pb-px hover:text-[#00a8e8] transition-colors"
            >
              Se mine projekter
            </Link>
          </AnimatedInView>
        </div>

        <ol className="flex flex-col gap-4">
          {punkter.map((p, i) => (
            <AnimatedInView
              key={p.titel}
              as="li"
              className="group grid grid-cols-[auto_1fr] gap-5 sm:gap-7 rounded-3xl bg-white border border-[#e4e2e2] p-5 sm:p-7"
            >
              <div className="flex flex-col items-center gap-3">
                <span className="w-12 h-12 rounded-2xl bg-[#00a8e8]/10 flex items-center justify-center">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    {p.icon}
                  </svg>
                </span>
                <span className="text-[12px] tabular-nums text-[#a0a3a3]">0{i + 1}</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                  <h3 className="text-[17px] sm:text-[18px] font-semibold text-[#1c1e1e]">{p.titel}</h3>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#1c1e1e] text-white text-[11.5px] px-3 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8]" />
                    {p.metrik}
                  </span>
                </div>
                <p className="readable text-[15px] text-[#5a5a5a] leading-[1.75]">{p.tekst}</p>
              </div>
            </AnimatedInView>
          ))}
        </ol>
      </div>
    </section>
  );
}
