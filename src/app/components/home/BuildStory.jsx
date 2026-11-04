"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";

const steps = [
  {
    n: "01",
    color: "#00a8e8",
    title: "Kontakt",
    text: "Vi tager en uforpligtende snak — helt gratis. Du skal ikke beslutte dig for noget endnu, bare fortælle mig om din ide.",
  },
  {
    n: "02",
    color: "#3ddc97",
    title: "Afklaring",
    text: "Sammen lægger vi en plan: hvad du får, hvornår og til hvilken pris. Alt aftales skriftligt, så du ved præcis hvad du betaler for.",
  },
  {
    n: "03",
    color: "#f0a63a",
    title: "Design",
    text: "Jeg går i gang, og du får noget konkret at se hurtigt — ikke bare løfter. Du er med hele vejen, ikke kun til sidst.",
  },
  {
    n: "04",
    color: "#8a8ff0",
    title: "Feedback",
    text: "Ikke tilfreds med noget? Bare sig til. Vi justerer sammen, indtil det er helt rigtigt — uden ekstra regninger undervejs.",
  },
  {
    n: "05",
    color: "#e0678a",
    title: "Launch",
    text: "Din side går live — men samarbejdet stopper ikke der. Jeg er stadig kun en besked væk, hvis du får brug for hjælp.",
  },
];

/* ───────── Tre versioner af samme side: skitse → design → færdigt indhold ───────── */

function Wire() {
  const box = "border border-dashed border-white/25 rounded-lg";
  const bar = "rounded bg-white/10";
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className={`${box} w-8 h-5`} />
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className={`${bar} h-1.5 w-9`} />
          ))}
        </div>
      </div>
      <div className={`${box} relative flex-1 min-h-0 p-4`}>
        <svg className="absolute inset-0 w-full h-full opacity-20" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="100%" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="1" />
        </svg>
        <div className={`${bar} h-3 w-2/3 mb-2`} />
        <div className={`${bar} h-3 w-1/2`} />
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {[0, 1, 2].map((i) => (
          <div key={i} className={`${box} h-14`} />
        ))}
      </div>
    </div>
  );
}

function Design() {
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="w-5 h-5 rounded-md bg-[#00a8e8]" />
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div key={i} className="rounded bg-white/25 h-1.5 w-9" />
          ))}
        </div>
      </div>
      <div
        className="relative flex-1 min-h-0 rounded-lg border border-white/10 p-4 overflow-hidden"
        style={{
          background:
            "radial-gradient(120% 140% at 100% 0%, rgba(0,168,232,0.55), transparent 55%), linear-gradient(180deg,#14191a,#0f1212)",
        }}
      >
        <div className="h-3 w-2/3 rounded bg-white/90 mb-2" />
        <div className="h-3 w-1/2 rounded bg-white/90 mb-4" />
        <div className="h-1.5 w-3/4 rounded bg-white/30 mb-1.5" />
        <div className="h-1.5 w-1/2 rounded bg-white/30 mb-4" />
        <div className="h-5 w-20 rounded-full bg-[#00a8e8]" />
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {["#00a8e8", "#3ddc97", "#8a8ff0"].map((c) => (
          <div key={c} className="h-14 rounded-lg border border-white/10 bg-white/[0.04] p-2">
            <span className="block w-4 h-4 rounded-md mb-2" style={{ background: c }} />
            <span className="block h-1 w-9/12 rounded bg-white/30" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Content() {
  const cards = [
    { c: "#00a8e8", t: "Hurtig", d: "Under 1 sek." },
    { c: "#3ddc97", t: "Mobilvenlig", d: "På alle skærme" },
    { c: "#8a8ff0", t: "SEO-klar", d: "Fundet på Google" },
  ];
  return (
    <div className="absolute inset-0 p-4 sm:p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-1.5">
          <span className="w-5 h-5 rounded-md bg-[#00a8e8]" />
          <span className="text-[10px] font-semibold text-white">Dit Firma</span>
        </span>
        <div className="hidden sm:flex gap-3 text-[9px] text-[#9aa7a7]">
          <span>Ydelser</span>
          <span>Om os</span>
          <span>Kontakt</span>
        </div>
      </div>
      <div
        className="relative flex-1 min-h-0 rounded-lg border border-white/10 p-4 overflow-hidden flex flex-col justify-center"
        style={{
          background:
            "radial-gradient(120% 140% at 100% 0%, rgba(0,168,232,0.6), transparent 55%), linear-gradient(180deg,#151b1c,#0f1212)",
        }}
      >
        <p className="text-[clamp(11px,1.4vw,15px)] font-semibold text-white leading-tight mb-1.5">
          Din virksomhed,
          <br />
          set fra sin bedste side.
        </p>
        <p className="text-[9px] text-[#a9b6b6] mb-3 max-w-[80%]">
          Flere henvendelser fra lokale kunder – hver dag.
        </p>
        <span className="inline-flex w-fit text-[9px] font-medium text-white bg-[#00a8e8] rounded-full px-3 py-1.5">
          Book et møde →
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2.5">
        {cards.map((k) => (
          <div key={k.t} className="h-14 rounded-lg border border-white/10 bg-white/[0.04] p-2">
            <span className="block w-4 h-4 rounded-md mb-1.5" style={{ background: k.c }} />
            <span className="block text-[9px] font-medium text-white leading-none mb-1">{k.t}</span>
            <span className="block text-[8px] text-[#8a9696] leading-none">{k.d}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Mockup({ progress, reduce }) {
  // Lag crossfader med scroll
  const wireO = useTransform(progress, [0.1, 0.26], [1, 0]);
  const designO = useTransform(progress, [0.1, 0.26, 0.5, 0.62], [0, 1, 1, 0]);
  const contentO = useTransform(progress, [0.5, 0.62], [0, 1]);
  const wireBlur = useTransform(progress, [0.1, 0.26], ["blur(0px)", "blur(6px)"]);

  // Feedback-bobler
  const bubbleO = useTransform(progress, [0.6, 0.66, 0.74, 0.78], [0, 1, 1, 0]);
  const fixedO = useTransform(progress, [0.76, 0.82], [0, 1]);
  const bubbleY = useTransform(progress, [0.6, 0.66], [12, 0]);

  // Launch
  const liveO = useTransform(progress, [0.84, 0.92], [0, 1]);
  const liveS = useTransform(progress, [0.84, 0.92], [0.7, 1]);
  const glow = useTransform(progress, [0.8, 1], [0.15, 0.6]);
  const urlLive = useTransform(progress, [0.84, 0.92], [0, 1]);

  // Mockuppen drejer sig svagt gennem hele historien
  const rotY = useTransform(progress, [0, 0.5, 1], [-10, 4, -3]);
  const rotX = useTransform(progress, [0, 0.5, 1], [6, 0, 3]);

  return (
    <div style={{ perspective: 1400 }} className="w-full">
      <motion.div
        style={reduce ? undefined : { rotateY: rotY, rotateX: rotX }}
        className="relative mx-auto w-full max-w-[560px]"
      >
        <motion.div
          aria-hidden
          style={{ opacity: glow }}
          className="absolute -inset-8 rounded-[2.5rem] bg-[#00a8e8]/30 blur-3xl"
        />
        <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0e1111] shadow-[0_50px_120px_-40px_rgba(0,168,232,0.5)]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#121616]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
            <div className="ml-3 flex-1 h-6 rounded-md bg-white/[0.06] flex items-center justify-between px-2.5 relative overflow-hidden">
              <span className="text-[10px] text-[#8a9696]">dinvirksomhed.dk</span>
              <motion.span
                style={{ opacity: urlLive }}
                className="text-[9px] font-medium text-[#3ddc97] flex items-center gap-1"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc97]" /> Live
              </motion.span>
            </div>
          </div>

          <div className="relative aspect-[16/11]">
            <motion.div style={{ opacity: wireO, filter: reduce ? undefined : wireBlur }} className="absolute inset-0">
              <Wire />
            </motion.div>
            <motion.div style={{ opacity: designO }} className="absolute inset-0">
              <Design />
            </motion.div>
            <motion.div style={{ opacity: contentO }} className="absolute inset-0">
              <Content />
            </motion.div>

            {/* Feedback */}
            <motion.div
              style={{ opacity: bubbleO, y: bubbleY }}
              className="absolute left-[8%] top-[58%] glass rounded-xl rounded-tl-sm px-3 py-2 flex items-center gap-2 z-10"
            >
              <span className="w-5 h-5 rounded-full bg-[#8a8ff0] text-[9px] font-semibold text-white flex items-center justify-center">
                K
              </span>
              <span className="text-[10px] text-white whitespace-nowrap">Kan knappen være lidt større?</span>
            </motion.div>
            <motion.div
              style={{ opacity: fixedO }}
              className="absolute left-[8%] top-[58%] glass rounded-xl rounded-tl-sm px-3 py-2 flex items-center gap-2 z-10"
            >
              <span className="w-5 h-5 rounded-full bg-[#3ddc97]/20 border border-[#3ddc97]/40 flex items-center justify-center">
                <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8.5l3.2 3L13 4.5" stroke="#3ddc97" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-[10px] text-white whitespace-nowrap">Rettet – ser det godt ud?</span>
            </motion.div>

            {/* Launch */}
            <motion.div
              style={{ opacity: liveO, scale: liveS }}
              className="absolute right-3 bottom-3 sm:right-5 sm:bottom-5 z-10"
            >
              <div className="glass rounded-2xl px-4 py-3 flex items-center gap-3">
                <span className="relative flex w-3 h-3">
                  <span className="pulse-ring absolute inset-0 rounded-full text-[#3ddc97]" />
                  <span className="relative w-3 h-3 rounded-full bg-[#3ddc97]" />
                </span>
                <div>
                  <p className="text-[12px] font-semibold text-white leading-none mb-1">Din side er live 🎉</p>
                  <p className="text-[9px] text-[#8a9696] leading-none">Dag 14 · alt kører</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function BuildStory() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length)));
    setActive((prev) => (prev === i ? prev : i));
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="scene relative bg-[#0b0d0d] h-[440vh]">
      <div className="sticky top-[68px] h-[calc(100dvh-68px)] overflow-hidden">
        {/* baggrund */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(700px circle at 75% 45%, ${steps[active].color}22, transparent 60%)`,
              transition: "background 0.8s",
            }}
          />
          <div className="grid-fade absolute inset-0 opacity-60" />
        </div>

        <div className="relative h-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 grid md:grid-cols-[1fr_1.1fr] gap-4 md:gap-14 items-center content-center md:content-stretch py-4 md:py-10">
          {/* Mockup (øverst på mobil) */}
          <div className="md:order-2 flex items-center justify-center">
            <div className="w-full max-w-[250px] sm:max-w-[420px] md:max-w-none">
              <Mockup progress={scrollYProgress} reduce={reduce} />
            </div>
          </div>

          {/* Tekst */}
          <div className="md:order-1 flex flex-col justify-center min-h-0">
            <p className="hidden md:flex text-[11px] uppercase tracking-[0.18em] text-[#5b6868] mb-3 items-center gap-3">
              <span className="w-8 h-px bg-[#00a8e8]" />
              Sådan foregår det
            </p>
            <h2 className="text-white font-semibold tracking-tight leading-[1.12] text-[clamp(18px,3vw,40px)] mb-3 md:mb-9 max-w-[22ch]">
              Fra første besked til live hjemmeside
            </h2>

            <div className="relative pl-6">
              {/* lodret progress */}
              <div className="absolute left-0 top-1 bottom-1 w-px bg-white/10" />
              <motion.div
                style={{ scaleY: lineScale }}
                className="absolute left-0 top-1 bottom-1 w-px origin-top bg-gradient-to-b from-[#00a8e8] to-[#3ddc97]"
              />

              <ol className="flex flex-col">
                {steps.map((s, i) => {
                  const on = i === active;
                  return (
                    <li key={s.n} className="relative">
                      <span
                        className="absolute -left-[28.5px] top-[9px] w-[7px] h-[7px] rounded-full transition-all duration-500"
                        style={{
                          background: i <= active ? s.color : "#2a3030",
                          boxShadow: on ? `0 0 0 5px ${s.color}33` : "none",
                        }}
                      />
                      <div className="flex items-baseline gap-3 py-1.5">
                        <span
                          className="text-[11px] tabular-nums transition-colors duration-500"
                          style={{ color: on ? s.color : "#3b4545" }}
                        >
                          {s.n}
                        </span>
                        <span
                          className={`font-medium transition-all duration-500 ${
                            on ? "text-white text-[18px] sm:text-[22px]" : "text-[#4b5757] text-[14px] sm:text-[15px]"
                          }`}
                        >
                          {s.title}
                        </span>
                      </div>
                      <div
                        className={`grid transition-all duration-500 ease-out ${
                          on ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-[13px] sm:text-[14px] text-[#93a0a0] leading-[1.75] max-w-md pb-3 pl-8">
                            {s.text}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
