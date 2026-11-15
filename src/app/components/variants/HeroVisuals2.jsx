"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ICONS } from "../illustrations/Visuals";

/** Hero-illustrationer til klinik, køreskole, fitness, rengøring, værksted og rådgivere. */
const ease = [0.16, 1, 0.3, 1];
const Ico = ({ d, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={d} />
  </svg>
);
const Frame = ({ children, className = "", h = "h-[360px] sm:h-[440px]" }) => (
  <div className={`relative ${h} rounded-[28px] overflow-hidden ${className}`}>{children}</div>
);
const pop = (i, extra = {}) => ({ initial: { opacity: 0, y: 14, scale: 0.96 }, animate: { opacity: 1, y: 0, scale: 1 }, transition: { delay: 0.3 + i * 0.18, duration: 0.7, ease }, ...extra });

/* ───────── Klinik: kalender, hvor en tid bliver valgt ───────── */
export function HeroClinic() {
  const reduce = useReducedMotion();
  const cells = Array.from({ length: 15 }, (_, i) => i);
  return (
    <Frame className="bg-white border border-[#e4e2e2]">
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="w-full max-w-[330px]">
          <motion.div {...pop(0)} className="rounded-3xl border border-[#e4e2e2] bg-[#f7f6f6] p-5">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a8a8a]">Book tid</p>
            <p className="text-[17px] font-semibold text-[#1c1e1e] mt-1">Sportsfysioterapi</p>
            <div className="grid grid-cols-5 gap-1.5 mt-4">
              {cells.map((c) => {
                const sel = c === 7;
                const off = [1, 4, 9, 12].includes(c);
                return (
                  <motion.span
                    key={c}
                    animate={sel && !reduce ? { scale: [1, 1.12, 1] } : {}}
                    transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 1.2 }}
                    className={`h-9 rounded-xl text-[11px] flex items-center justify-center ${
                      sel ? "bg-[#00a8e8] text-white font-semibold" : off ? "bg-transparent text-[#c9c9c9] line-through" : "bg-white border border-[#e4e2e2] text-[#3a3a3a]"
                    }`}
                  >
                    {10 + c}
                  </motion.span>
                );
              })}
            </div>
          </motion.div>
          <motion.div {...pop(2)} className="mt-3 rounded-2xl bg-[#1c1e1e] text-white p-4 flex items-center gap-3">
            <span className="w-10 h-10 rounded-full bg-[#00a8e8] flex items-center justify-center shrink-0">
              <Ico d={ICONS.check} className="w-5 h-5" />
            </span>
            <span>
              <span className="block text-[13.5px] font-semibold">Tid booket · torsdag 10:00</span>
              <span className="block text-[11.5px] text-[#b4bdbd]">Bekræftelse sendt på SMS</span>
            </span>
          </motion.div>
        </div>
      </div>
      {[["Ingen henvisning nødvendig", "left-3 top-6 sm:left-6"], ["Første besøg: 45 min.", "right-3 bottom-8 sm:right-6"]].map(([t, pos], i) => (
        <motion.span
          key={t}
          {...pop(3 + i)}
          animate={reduce ? { opacity: 1, y: 0, scale: 1 } : { opacity: 1, scale: 1, y: [0, -6, 0] }}
          transition={{ opacity: { delay: 0.9 + i * 0.2 }, y: { duration: 3.4 + i, repeat: Infinity, ease: "easeInOut" } }}
          className={`absolute ${pos} rounded-full bg-[#00a8e8] text-white px-3.5 py-2 text-[11.5px] font-semibold`}
        >
          {t}
        </motion.span>
      ))}
    </Frame>
  );
}

/* ───────── Køreskole: vej med bil og milepæle ───────── */
export function HeroDrive() {
  const reduce = useReducedMotion();
  const marks = [
    ["Teori", "14%", "68%"],
    ["Manøvrebane", "40%", "24%"],
    ["Glatbane", "62%", "70%"],
    ["Køreprøve", "78%", "34%"],
  ];
  return (
    <Frame className="border border-white/10 bg-white/[0.03]">
      <svg viewBox="0 0 480 440" className="absolute inset-0 w-full h-full" preserveAspectRatio="none" aria-hidden>
        <path d="M-10 330 C 90 330, 120 150, 220 190 S 360 340, 490 120" fill="none" stroke="#2c3030" strokeWidth="64" strokeLinecap="round" />
        <motion.path
          d="M-10 330 C 90 330, 120 150, 220 190 S 360 340, 490 120"
          fill="none"
          stroke="#f7f6f6"
          strokeWidth="3"
          strokeDasharray="14 16"
          initial={{ strokeDashoffset: 0 }}
          animate={reduce ? {} : { strokeDashoffset: -60 }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
        />
      </svg>
      {marks.map(([t, x, y], i) => (
        <motion.span key={t} {...pop(i)} className="absolute -translate-x-1/2 flex flex-col items-center gap-1" style={{ left: x, top: y }}>
          <span className="rounded-full bg-[#00a8e8] text-white px-3 py-1.5 text-[11.5px] font-semibold whitespace-nowrap">{t}</span>
          <span className="w-0.5 h-3 bg-[#00a8e8]" />
        </motion.span>
      ))}
      <motion.div
        aria-hidden
        className="absolute left-[4%] bottom-[22%] w-14 h-8 rounded-xl bg-white flex items-center justify-center"
        animate={reduce ? {} : { x: [0, 180, 360], y: [0, -70, -170], rotate: [-8, 8, -28] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.6 }}
      >
        <span className="absolute left-1 top-1 bottom-1 w-4 rounded-md bg-[#00a8e8]" />
        <span className="text-[10px] font-bold text-[#1c1e1e] ml-4">L</span>
      </motion.div>
      <motion.div {...pop(4)} className="absolute left-4 top-4 sm:left-6 sm:top-6 rounded-2xl bg-white p-4 w-[200px]">
        <p className="text-[10.5px] uppercase tracking-[0.14em] text-[#8a8a8a]">Næste hold</p>
        <p className="text-[15px] font-semibold text-[#1c1e1e] mt-1">Teori · 4 pladser</p>
        <span className="mt-3 inline-block rounded-full bg-[#00a8e8] text-white text-[11.5px] font-semibold px-3.5 py-1.5">Skriv mig op →</span>
      </motion.div>
    </Frame>
  );
}

/* ───────── Fitness: puls, medlemskort og pladser ───────── */
export function HeroFitness() {
  const reduce = useReducedMotion();
  return (
    <Frame className="border border-white/10 bg-white/[0.03]">
      <div className="absolute inset-x-0 top-[26%]">
        <svg viewBox="0 0 480 120" className="w-full" aria-hidden>
          <motion.path
            d="M0 60 H120 L140 60 L160 20 L190 100 L215 40 L235 60 H480"
            fill="none"
            stroke="#00a8e8"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={reduce ? { duration: 0 } : { duration: 2.2, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }}
          />
        </svg>
      </div>
      <motion.div {...pop(0)} className="absolute left-5 bottom-6 w-[210px] rounded-3xl bg-white p-5">
        <p className="text-[10.5px] uppercase tracking-[0.14em] text-[#8a8a8a]">Medlemskab</p>
        <p className="text-[19px] font-semibold text-[#1c1e1e] mt-1">Alle hold</p>
        <p className="text-[12px] text-[#5f5f5f] mt-1">Ingen binding de første 30 dage</p>
        <span className="mt-4 inline-block rounded-full bg-[#1c1e1e] text-white text-[11.5px] font-semibold px-3.5 py-1.5">Vælg →</span>
      </motion.div>
      <motion.div {...pop(1)} className="absolute right-5 bottom-10 w-[190px] rounded-3xl bg-[#00a8e8] p-5 text-white">
        <p className="text-[10.5px] uppercase tracking-[0.14em] opacity-80">Prøvetime</p>
        <p className="text-[19px] font-semibold mt-1">Cross Training</p>
        <p className="text-[12px] mt-1 opacity-90">I dag 17:15 · 2 pladser</p>
        <div className="mt-4 h-1.5 rounded-full bg-white/30 overflow-hidden">
          <motion.span className="block h-full bg-white rounded-full" initial={{ width: "40%" }} animate={{ width: "86%" }} transition={{ duration: 1.6, delay: 0.6, ease }} />
        </div>
      </motion.div>
      <motion.span {...pop(2)} className="absolute left-5 top-5 rounded-full border border-white/20 text-white px-3.5 py-2 text-[11.5px]">
        Puls 142 · det går godt
      </motion.span>
    </Frame>
  );
}

/* ───────── Rengøring: før/efter, der glider ───────── */
export function HeroClean() {
  const reduce = useReducedMotion();
  return (
    <Frame className="bg-white border border-[#e4e2e2]">
      <div className="absolute inset-0 bg-[#d9dede]" />
      {/* skidt-prikker på "før"-siden */}
      <div aria-hidden className="absolute inset-0" style={{ backgroundImage: "radial-gradient(#b9c0c0 2px, transparent 2px)", backgroundSize: "28px 28px" }} />
      <motion.div
        className="absolute inset-y-0 left-0 bg-[#e4f0f7] overflow-hidden"
        initial={{ width: "20%" }}
        animate={reduce ? { width: "60%" } : { width: ["20%", "78%", "20%"] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 w-[480px] max-w-none" aria-hidden>
          <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[#d3e6ef]" />
          <div className="absolute left-[10%] top-[14%] w-[30%] h-[34%] rounded-2xl bg-white border-4 border-[#cfe9f5] grid grid-cols-2 grid-rows-2 gap-0.5 p-0.5">
            {[0, 1, 2, 3].map((k) => <span key={k} className="bg-[#e4f0f7] rounded-md" />)}
          </div>
          <div className="absolute left-[16%] bottom-[22%] w-[56%] h-[18%] rounded-2xl bg-[#00a8e8]/80" />
          <div className="absolute left-[20%] bottom-[36%] w-[48%] h-[12%] rounded-t-2xl bg-[#00a8e8]" />
          <div className="absolute right-[10%] top-[18%] w-[6%] h-[40%] rounded-full bg-[#cfe9f5]" />
        </div>
        <span className="absolute right-0 top-0 bottom-0 w-1 bg-[#00a8e8]" />
        <span className="absolute right-[-18px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#00a8e8] text-white flex items-center justify-center text-[14px]" aria-hidden>↔</span>
      </motion.div>
      {[["Før", "right-4 top-4", "bg-[#1c1e1e] text-white"], ["Efter", "left-4 top-4", "bg-white text-[#1c1e1e]"]].map(([t, pos, c]) => (
        <span key={t} className={`absolute ${pos} rounded-full px-3 py-1.5 text-[11.5px] font-semibold ${c}`}>{t}</span>
      ))}
      <motion.div {...pop(2)} className="absolute left-4 bottom-4 rounded-2xl bg-[#1c1e1e] text-white px-4 py-3">
        <p className="text-[10.5px] uppercase tracking-[0.14em] text-[#b4bdbd]">Overslag</p>
        <p className="text-[18px] font-semibold">120 m² · hver 14. dag</p>
      </motion.div>
      {[["16%", "70%"], ["30%", "56%"], ["14%", "42%"]].map(([x, y], i) => (
        <motion.span key={i} aria-hidden className="absolute text-[#00a8e8] text-[18px]" style={{ left: x, top: y }} animate={reduce ? {} : { scale: [0.6, 1.2, 0.6], opacity: [0.3, 1, 0.3] }} transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.6 }}>
          ✦
        </motion.span>
      ))}
    </Frame>
  );
}

/* ───────── Værksted: statusbræt og SMS ───────── */
export function HeroGarage() {
  const reduce = useReducedMotion();
  const rows = [
    ["Aflevering", true],
    ["Serviceeftersyn", true],
    ["Bremsetjek", true],
    ["Klar til afhentning", false],
  ];
  return (
    <Frame className="border border-white/10 bg-white/[0.03]">
      <motion.div {...pop(0)} className="absolute left-5 right-5 top-6 sm:left-8 sm:right-auto sm:w-[320px] rounded-3xl bg-white p-5">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[15px] font-semibold text-[#1c1e1e]">Din bil</p>
          <span className="rounded-full bg-[#e4f0f7] text-[#007fb5] text-[11px] font-semibold px-2.5 py-1">AB 12 345</span>
        </div>
        <ul className="flex flex-col gap-3">
          {rows.map(([t, done], i) => (
            <li key={t} className="flex items-center gap-3 text-[13.5px] text-[#2a2d2d]">
              <motion.span
                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${done ? "bg-[#00a8e8] text-white" : "border-2 border-[#00a8e8]"}`}
                animate={!done && !reduce ? { scale: [1, 1.25, 1] } : {}}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                {done && <Ico d={ICONS.check} className="w-3 h-3" />}
              </motion.span>
              <span className={done ? "" : "font-semibold"}>{t}</span>
            </li>
          ))}
        </ul>
      </motion.div>
      <motion.div {...pop(2)} className="absolute right-5 bottom-7 w-[230px] rounded-3xl rounded-br-md bg-[#00a8e8] text-white p-4">
        <p className="text-[10.5px] uppercase tracking-[0.14em] opacity-80">SMS · lige nu</p>
        <p className="text-[14px] font-semibold mt-1.5 leading-snug">Din bil er klar til afhentning. Vi har åbent til kl. 17.</p>
      </motion.div>
      <motion.span {...pop(3)} className="absolute left-5 bottom-6 rounded-full border border-white/20 text-white px-3.5 py-2 text-[11.5px] sm:left-8">
        Book tid i dag
      </motion.span>
    </Frame>
  );
}

/* ───────── Rådgivere: profilkort, speciale og kalender ───────── */
export function HeroAdvisor() {
  const reduce = useReducedMotion();
  return (
    <Frame className="bg-white border border-[#e4e2e2]">
      <div className="absolute inset-0 flex items-center justify-center p-5">
        <motion.div {...pop(0)} className="w-full max-w-[340px] rounded-3xl bg-[#f7f6f6] border border-[#e4e2e2] p-5">
          <div className="flex items-center gap-4">
            <span className="w-14 h-14 rounded-full bg-[#1c1e1e] text-white flex items-center justify-center text-[18px] font-semibold">AN</span>
            <span>
              <span className="block text-[16px] font-semibold text-[#1c1e1e]">Anne Nielsen</span>
              <span className="block text-[12.5px] text-[#5f5f5f]">Rådgiver for selvstændige</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Skat og moms", "Opstart", "Vækst"].map((t) => (
              <span key={t} className="rounded-full bg-white border border-[#e4e2e2] px-3 py-1 text-[11.5px] text-[#3a3a3a]">{t}</span>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-white border border-[#e4e2e2] p-3.5">
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#8a8a8a] mb-2.5">Første samtale · 20 min.</p>
            <div className="flex gap-2">
              {["Tirs 10:00", "Ons 13:30", "Tors 09:00"].map((t, i) => (
                <motion.span
                  key={t}
                  animate={i === 1 && !reduce ? { backgroundColor: ["#ffffff", "#00a8e8", "#ffffff"], color: ["#3a3a3a", "#ffffff", "#3a3a3a"] } : {}}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="flex-1 rounded-xl border border-[#e4e2e2] text-center py-2 text-[11px] text-[#3a3a3a]"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
      <motion.span {...pop(2)} className="absolute right-4 top-5 sm:right-6 rounded-full bg-[#00a8e8] text-white px-3.5 py-2 text-[11.5px] font-semibold">
        Svar inden for 1 hverdag
      </motion.span>
      <motion.span {...pop(3)} className="absolute left-4 bottom-5 sm:left-6 rounded-full bg-[#1c1e1e] text-white px-3.5 py-2 text-[11.5px] font-semibold">
        Uforpligtende
      </motion.span>
    </Frame>
  );
}
