"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionHead from "../ui/SectionHead";
import { FadeUp } from "../home/fx/Reveal";
import { ICONS } from "../illustrations/Visuals";

const ease = [0.16, 1, 0.3, 1];
const Ico = ({ d, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={d} />
  </svg>
);

/* ───────────── Anatomien af en hjemmeside, der skaffer kunder ───────────── */

const SPOTS = [
  { title: "Klart budskab øverst", text: "Besøgende ved på 3 sekunder, hvad du laver, og hvor du arbejder.", x: "8%", y: "16%" },
  { title: "Ring-knap på mobilen", text: "Ét tryk, og kunden ringer. Ingen leder efter et nummer.", x: "70%", y: "16%" },
  { title: "Anmeldelser og cases", text: "Andres erfaringer skaber den tillid, der får folk til at vælge dig.", x: "3.5%", y: "52%" },
  { title: "Kort kontaktformular", text: "Tre felter – ikke ti. Flere udfylder den, når den er nem.", x: "60%", y: "56%" },
  { title: "Hurtig på mobil", text: "Siden indlæser hurtigt, så ingen giver op og går tilbage til Google.", x: "40%", y: "86%" },
];

function Mock({ active }) {
  const hi = (i) => (active === i ? "ring-2 ring-[#00a8e8] ring-offset-2 ring-offset-white" : "");
  return (
    <div className="relative rounded-2xl bg-white border border-[#e4e2e2] shadow-[0_30px_70px_-35px_rgba(28,30,30,0.35)] overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-[#eceaea]">
        <span className="w-2 h-2 rounded-full bg-[#e6e4e4]" />
        <span className="w-2 h-2 rounded-full bg-[#e6e4e4]" />
        <span className="w-2 h-2 rounded-full bg-[#e6e4e4]" />
        <span className="ml-3 flex-1 max-w-[240px] h-5 rounded-md bg-[#f1f0ee] text-[10px] text-[#8a8f8f] flex items-center px-2">hansen-toemrer.dk</span>
      </div>
      <div className="p-4 sm:p-6 grid grid-cols-[1.3fr_1fr] gap-4">
        <div className={`rounded-xl p-3 transition-all duration-300 ${hi(0)}`}>
          <p className="text-[14px] sm:text-[18px] font-semibold text-[#1c1e1e] leading-tight">Tømrer i Horsens</p>
          <p className="text-[10px] sm:text-[11px] text-[#6a6a6a] mt-1.5 leading-snug">Tag, terrasser og vinduer. Fast pris og svar samme dag.</p>
        </div>
        <div className={`rounded-xl p-3 flex items-start justify-end transition-all duration-300 ${hi(1)}`}>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#00a8e8] text-white text-[10px] sm:text-[11px] font-semibold px-3 py-1.5">
            <Ico d={ICONS.phone} className="w-3 h-3" /> Ring nu
          </span>
        </div>
        <div className={`rounded-xl p-3 bg-[#f7f6f6] transition-all duration-300 ${hi(2)}`}>
          <p className="flex gap-0.5 text-[#00a8e8] mb-1.5">
            {[0, 1, 2, 3, 4].map((i) => (
              <svg key={i} viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor" aria-hidden>
                <path d={ICONS.star} />
              </svg>
            ))}
          </p>
          <p className="text-[10px] text-[#3a3d3d] leading-snug">“Hurtigt, pænt og til den aftalte pris.”</p>
          <p className="text-[9px] text-[#8a8f8f] mt-1">– Mette, Horsens</p>
        </div>
        <div className={`rounded-xl p-3 bg-[#f7f6f6] flex flex-col gap-1.5 transition-all duration-300 ${hi(3)}`}>
          <span className="h-4 rounded bg-white border border-[#e8e6e6]" />
          <span className="h-4 rounded bg-white border border-[#e8e6e6]" />
          <span className="h-4 rounded-full bg-[#1c1e1e] text-white text-[8px] flex items-center justify-center">Send</span>
        </div>
        <div className={`col-span-2 rounded-xl p-3 flex items-center gap-3 transition-all duration-300 ${hi(4)}`}>
          <Ico d={ICONS.bolt} className="w-4 h-4 text-[#00a8e8]" />
          <span className="flex-1 h-2 rounded-full bg-[#eceaea] overflow-hidden">
            <motion.span
              className="block h-full bg-[#00a8e8]"
              initial={{ width: "0%" }}
              whileInView={{ width: "96%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease }}
            />
          </span>
          <span className="text-[10px] font-semibold text-[#00a8e8] tabular-nums">96/100</span>
        </div>
      </div>
      {SPOTS.map((s, i) => (
        <span
          key={s.title}
          aria-hidden
          className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full text-[11px] font-semibold flex items-center justify-center transition-all duration-300 ${
            active === i ? "bg-[#00a8e8] text-white scale-110 shadow-[0_0_0_6px_rgba(0,168,232,0.2)]" : "bg-[#1c1e1e] text-white"
          }`}
          style={{ left: s.x, top: s.y }}
        >
          {i + 1}
        </span>
      ))}
    </div>
  );
}

export function SiteAnatomy() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % SPOTS.length), 3200);
    return () => clearInterval(t);
  }, [paused]);

  return (
    <section className="scene bg-[#f7f6f6]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead
          eyebrow="Det får du"
          lines={["5 ting, der får besøgende", "til at blive kunder"]}
          lead="Det her er bygget ind i alle hjemmesider, jeg laver. Klik på punkterne og se, hvor de sidder."
          className="mb-10 sm:mb-14"
        />
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12 items-center" onMouseLeave={() => setPaused(false)}>
          <FadeUp>
            <Mock active={active} />
          </FadeUp>
          <ol className="flex flex-col gap-2">
            {SPOTS.map((s, i) => (
              <li key={s.title}>
                <button
                  type="button"
                  onClick={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                  onMouseEnter={() => {
                    setActive(i);
                    setPaused(true);
                  }}
                  aria-pressed={active === i}
                  className={`w-full text-left rounded-2xl border px-5 py-4 flex gap-4 transition-all duration-300 ${
                    active === i ? "bg-white border-[#00a8e8]/50 shadow-[0_18px_40px_-28px_rgba(0,168,232,0.4)]" : "bg-transparent border-transparent hover:bg-white/60"
                  }`}
                >
                  <span
                    className={`w-7 h-7 shrink-0 rounded-full text-[12px] font-semibold flex items-center justify-center transition-colors ${
                      active === i ? "bg-[#00a8e8] text-white" : "bg-[#e6e4e4] text-[#3a3d3d]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-[15.5px] font-semibold text-[#1c1e1e]">{s.title}</span>
                    <span
                      className={`block text-[14px] text-[#5a5d5d] leading-[1.6] overflow-hidden transition-all duration-500 ${
                        active === i ? "max-h-24 mt-1 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {s.text}
                    </span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Sidekort: hvilke sider skal du have? ───────────── */

const TREE = [
  { name: "Ydelser", note: "Én side pr. ydelse – så du rangerer på hver", icon: ICONS.box },
  { name: "Om os", note: "Ansigterne bag skaber tillid", icon: ICONS.star },
  { name: "Cases", note: "Billeder af det, du har lavet", icon: ICONS.check },
  { name: "Kontakt", note: "Telefon, mail, kort og formular", icon: ICONS.phone },
];

export function SiteTree() {
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-40" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead dark eyebrow="Opbygning" lines={["De fleste klarer sig", "med 3–8 sider"]} lead="Få gode sider slår mange tynde. Her er den opbygning, jeg oftest anbefaler." className="mb-12 sm:mb-16" />

        <div className="flex flex-col items-center">
          <FadeUp className="rounded-2xl bg-[#00a8e8] text-[#10181a] px-7 py-4 text-center">
            <p className="text-[16px] font-semibold">Forside</p>
            <p className="text-[12px] opacity-80">Hvem, hvad og hvor – på 3 sekunder</p>
          </FadeUp>
          <svg viewBox="0 0 800 60" preserveAspectRatio="none" className="hidden md:block w-full max-w-[880px] h-[60px]" aria-hidden>
            {[100, 300, 500, 700].map((x, i) => (
              <motion.path
                key={x}
                d={`M400 0 C 400 30, ${x} 30, ${x} 60`}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.5"
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1, ease }}
              />
            ))}
          </svg>
          <div className="md:hidden w-px h-8 bg-white/20" />
          <div className="w-full max-w-[920px] grid grid-cols-2 md:grid-cols-4 gap-3">
            {TREE.map((n, i) => (
              <FadeUp key={n.name} delay={0.3 + i * 0.08}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
                  <span className="w-9 h-9 rounded-xl bg-white/[0.08] text-[#00a8e8] flex items-center justify-center mb-3">
                    <Ico d={n.icon} />
                  </span>
                  <p className="text-[15px] font-semibold text-white mb-1">{n.name}</p>
                  <p className="text-[12.5px] text-[#93a0a0] leading-[1.6]">{n.note}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
