"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ICONS } from "../illustrations/Visuals";

/** Store hero-illustrationer – én pr. side, i hver sin farve og stemning. */
const ease = [0.16, 1, 0.3, 1];
const Ico = ({ d, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={d} />
  </svg>
);
const Frame = ({ children, className = "", style, h = "h-[360px] sm:h-[440px]" }) => (
  <div className={`relative ${h} rounded-[28px] overflow-hidden ${className}`} style={style}>
    {children}
  </div>
);

/* ───────── Håndværkere: telefonen ringer, værktøjer svæver rundt ───────── */
export function HeroTrades() {
  const reduce = useReducedMotion();
  const tools = [
    ["VVS", "#00a8e8", "8%", "18%"],
    ["El", "#00a8e8", "74%", "12%"],
    ["Tømrer", "#00a8e8", "4%", "66%"],
    ["Maler", "#00a8e8", "76%", "62%"],
    ["Murer", "#00a8e8", "60%", "86%"],
  ];
  return (
    <Frame className="border border-white/10 bg-white/[0.03]">
      {tools.map(([t, c, x, y], i) => (
        <motion.span
          key={t}
          className="absolute rounded-full px-3.5 py-2 text-[12px] font-semibold text-[#10181a]"
          style={{ left: x, top: y, backgroundColor: c }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={reduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1, y: [0, -8, 0] }}
          transition={{ opacity: { delay: 0.4 + i * 0.1 }, scale: { delay: 0.4 + i * 0.1 }, y: { duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut" } }}
        >
          {t}
        </motion.span>
      ))}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute w-[170px] h-[170px] rounded-full border-2 border-[#00a8e8]"
            animate={reduce ? {} : { scale: [0.8, 1.8], opacity: [0.5, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.8 }}
          />
        ))}
        <div className="relative w-[190px] rounded-[30px] border-[3px] border-[#3a3a3a] bg-[#1c1e1e] p-4 pt-6 text-center shadow-2xl">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#93a0a0]">Indgående opkald</p>
          <p className="text-[17px] font-semibold text-white mt-3">Ny kunde</p>
          <p className="text-[11.5px] text-[#b4bebe] mt-1">Hedensted · fandt dig på Google</p>
          <div className="flex justify-center gap-6 mt-7 mb-1">
            <span className="w-11 h-11 rounded-full bg-[#3a3a3a] flex items-center justify-center text-white rotate-[135deg]">
              <Ico d={ICONS.phone} />
            </span>
            <motion.span
              animate={reduce ? {} : { rotate: [0, -14, 14, -10, 10, 0] }}
              transition={{ duration: 0.9, repeat: Infinity, repeatDelay: 0.8 }}
              className="w-11 h-11 rounded-full bg-[#00a8e8] flex items-center justify-center text-white"
            >
              <Ico d={ICONS.phone} />
            </motion.span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ───────── VVS: rør med dryp + mobil med akut-knap og tilbudsknap ───────── */
export function HeroVvs() {
  const reduce = useReducedMotion();
  return (
    <Frame className="bg-white border border-[#e4f0f7]">
      <svg viewBox="0 0 200 440" className="absolute left-0 top-0 h-full w-[38%]" fill="none" aria-hidden>
        <path d="M-10 80 H90 Q120 80 120 110 V220" stroke="#dfe6e6" strokeWidth="22" strokeLinecap="round" />
        <path d="M-10 80 H90 Q120 80 120 110 V220" stroke="#e4f0f7" strokeWidth="12" strokeLinecap="round" />
        <rect x="104" y="214" width="32" height="16" rx="4" fill="#a6b1b1" />
      </svg>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="absolute w-3 h-4 rounded-full rounded-t-[60%] bg-[#00a8e8]"
          style={{ left: "calc(38% * 0.6 - 6px)", top: 240 }}
          animate={reduce ? {} : { y: [0, 160], opacity: [1, 0], scale: [0.6, 1] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.47, ease: "easeIn" }}
        />
      ))}
      <motion.span
        className="absolute bottom-6 rounded-[50%] bg-[#00a8e8]/20"
        style={{ left: "6%", width: "26%", height: 18 }}
        animate={reduce ? {} : { scaleX: [0.8, 1.1, 0.8] }}
        transition={{ duration: 2.8, repeat: Infinity }}
      />
      <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[210px] rounded-[30px] border-[3px] border-[#1c1e1e] bg-white p-3.5 pt-5 shadow-[0_30px_60px_-30px_rgba(0,168,232,0.5)]">
        <p className="text-[13px] font-semibold text-[#1c1e1e]">Hansen VVS</p>
        <p className="text-[10px] text-[#6a6a6a] mb-4">Horsens · Hedensted · Juelsminde</p>
        <motion.div
          animate={reduce ? {} : { boxShadow: ["0 0 0 0 rgba(0,168,232,0.6)", "0 0 0 12px rgba(0,168,232,0)"] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="rounded-2xl bg-[#00a8e8] text-white px-3 py-3 mb-2.5"
        >
          <p className="text-[12.5px] font-semibold flex items-center gap-2">
            <Ico d={ICONS.phone} className="w-3.5 h-3.5" /> Akut hjælp
          </p>
          <p className="text-[10px] opacity-90 mt-0.5">Vandskade? Ring – også i weekenden</p>
        </motion.div>
        <div className="rounded-2xl border border-[#e4f0f7] px-3 py-3">
          <p className="text-[12.5px] font-semibold text-[#1c1e1e]">Nyt badeværelse?</p>
          <p className="text-[10px] text-[#6a6a6a] mt-0.5">Få et tilbud på 24 timer →</p>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[9.5px] text-[#00a8e8]">
          <Ico d={ICONS.shield} className="w-3 h-3" /> Autoriseret VVS-installatør
        </div>
      </div>
    </Frame>
  );
}

/* ───────── Elektriker: strømmen løber gennem kredsløbet og tænder pæren ───────── */
export function HeroEl() {
  const reduce = useReducedMotion();
  const paths = ["M0 90 H120 V170 H260", "M0 250 H90 V200 H260", "M0 330 H160 V230 H260"];
  return (
    <Frame className="border border-white/10 bg-[#1c1e1e]">
      <svg viewBox="0 0 520 440" className="absolute inset-0 w-full h-full" fill="none" aria-hidden>
        {paths.map((d, i) => (
          <g key={d}>
            <path d={d} stroke="rgba(255,255,255,0.08)" strokeWidth="3" />
            <motion.path
              d={d}
              stroke="#00a8e8"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.3, delay: 0.3 + i * 0.25, ease }}
            />
            {!reduce && (
              <motion.path
                d={d}
                stroke="#f1f0ee"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray="10 600"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -600 }}
                transition={{ duration: 2.2, repeat: Infinity, delay: 1.6 + i * 0.4, ease: "linear" }}
              />
            )}
          </g>
        ))}
        <path d="M260 160 V260" stroke="#00a8e8" strokeWidth="3" />
        <path d="M260 210 H300" stroke="#00a8e8" strokeWidth="3" />
      </svg>
      <div className="absolute left-[58%] top-1/2 -translate-y-1/2 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0.2 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute -top-10 w-44 h-44 rounded-full bg-[#00a8e8]/30 blur-2xl"
        />
        <svg viewBox="0 0 80 110" className="relative w-24 h-32" aria-hidden>
          <motion.path
            d="M40 6a30 30 0 00-18 54c4 3 6 8 6 13v6h24v-6c0-5 2-10 6-13A30 30 0 0040 6z"
            initial={{ fill: "#2a2d2d" }}
            animate={{ fill: "#00a8e8" }}
            transition={{ delay: 1.6, duration: 0.5 }}
            stroke="#00a8e8"
            strokeWidth="2.5"
          />
          <rect x="28" y="84" width="24" height="8" rx="2" fill="#6a6a6a" />
          <rect x="31" y="95" width="18" height="7" rx="2" fill="#6a6a6a" />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6, ease }}
        className="absolute right-5 top-5 rounded-2xl bg-[#242828] border border-white/10 px-4 py-3"
      >
        <p className="flex items-center gap-2 text-[12px] font-semibold text-white">
          <span className="w-5 h-5 rounded-full bg-[#00a8e8] text-[#10181a] flex items-center justify-center">
            <Ico d={ICONS.check} className="w-3 h-3" />
          </span>
          Autoriseret elinstallatør
        </p>
        <p className="text-[10.5px] text-[#93a0a0] mt-1 pl-7">Vist tydeligt på forsiden</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.3, duration: 0.6, ease }}
        className="absolute right-5 bottom-5 rounded-2xl bg-[#00a8e8] text-[#1c1e1e] px-4 py-3"
      >
        <p className="text-[12px] font-semibold flex items-center gap-2">
          <Ico d={ICONS.bolt} className="w-3.5 h-3.5" /> Elbil-lader
        </p>
        <p className="text-[10.5px] mt-0.5 opacity-80">Egen side · flest nye projekter</p>
      </motion.div>
    </Frame>
  );
}

/* ───────── Tømrer: tegning af et hus, der tegner sig selv, og et færdigt projekt ───────── */
export function HeroTomrer() {
  return (
    <Frame className="bg-[#00a8e8]">
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />
      <svg viewBox="0 0 400 300" className="absolute left-[6%] top-[10%] w-[80%] h-[70%]" fill="none" aria-hidden>
        {[
          "M60 260 V140 L200 50 L340 140 V260 Z",
          "M100 260 V180 H160 V260",
          "M220 170 H300 V220 H220 Z",
          "M260 170 V220 M220 195 H300",
          "M20 260 H380",
        ].map((d, i) => (
          <motion.path
            key={d}
            d={d}
            stroke="#e4f0f7"
            strokeWidth="2.2"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.4, delay: 0.2 + i * 0.3, ease }}
          />
        ))}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}>
          <path d="M60 282 H340 M60 276 V288 M340 276 V288" stroke="#00a8e8" strokeWidth="1.4" />
          <text x="200" y="298" fill="#00a8e8" fontSize="11" textAnchor="middle" fontFamily="monospace">
            8.400 mm
          </text>
        </motion.g>
      </svg>
      <motion.div
        initial={{ opacity: 0, y: 30, rotate: 6 }}
        animate={{ opacity: 1, y: 0, rotate: 4 }}
        transition={{ delay: 1.6, duration: 0.9, ease }}
        className="absolute right-[6%] bottom-[8%] w-[46%] max-w-[220px] rounded-2xl bg-white p-2.5 shadow-2xl"
      >
        <div className="h-24 rounded-xl overflow-hidden" style={{ background: "repeating-linear-gradient(90deg,#e4f0f7 0 18px,#cfe9f5 18px 20px)" }} />
        <p className="text-[12px] font-semibold text-[#1c1e1e] mt-2">Ny terrasse · Horsens</p>
        <p className="text-[10px] text-[#6a6a6a]">32 m² · lærk · 4 dage</p>
      </motion.div>
    </Frame>
  );
}

/* ───────── Restaurant: menukort og bordbooking ───────── */
export function HeroRestaurant() {
  const [people, setPeople] = useState(2);
  const [time, setTime] = useState("19:00");
  const [done, setDone] = useState(false);
  const menu = [
    ["Røget laks", "på rugbrød", "95"],
    ["Stegt flæsk", "med persillesovs", "165"],
    ["Hjemmelavet is", "med bær", "65"],
  ];
  return (
    <Frame h="h-[520px] sm:h-[440px]" className="bg-[#242828] border border-white/10">
      <div className="absolute left-[6%] top-[5%] sm:top-[8%] w-[80%] sm:w-[54%] rounded-2xl bg-[#f1f0ee] p-5 shadow-2xl -rotate-2">
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#8a8a8a]">Menu</p>
        <p className="text-center text-[17px] font-semibold text-[#242828] mb-4" style={{ fontFamily: "Georgia, serif" }}>
          Aftenkort
        </p>
        {menu.map(([n, s, p]) => (
          <div key={n} className="flex items-end gap-2 mb-3">
            <div className="min-w-0">
              <p className="text-[12.5px] font-semibold text-[#242828] leading-tight" style={{ fontFamily: "Georgia, serif" }}>
                {n}
              </p>
              <p className="text-[10px] text-[#6a6a6a]">{s}</p>
            </div>
            <span className="flex-1 border-b border-dotted border-[#a6b1b1] mb-1" />
            <span className="text-[12px] font-semibold text-[#242828]">{p}</span>
          </div>
        ))}
        <p className="mt-3 flex gap-1.5">
          {["Glutenfri", "Vegansk"].map((t) => (
            <span key={t} className="text-[9px] rounded-full bg-[#00a8e8]/15 text-[#00a8e8] px-2 py-0.5">
              {t}
            </span>
          ))}
        </p>
      </div>
      <div className="absolute right-[5%] bottom-[5%] sm:bottom-[7%] w-[70%] sm:w-[50%] max-w-[240px] rounded-2xl bg-white p-4 shadow-2xl">
        {done ? (
          <div className="text-center py-6">
            <span className="mx-auto w-10 h-10 rounded-full bg-[#00a8e8] text-white flex items-center justify-center mb-2">
              <Ico d={ICONS.check} />
            </span>
            <p className="text-[13px] font-semibold text-[#1c1e1e]">Bord til {people} kl. {time}</p>
            <button type="button" onClick={() => setDone(false)} className="text-[11px] text-[#00a8e8] mt-1">
              Prøv igen
            </button>
          </div>
        ) : (
          <>
            <p className="text-[13px] font-semibold text-[#1c1e1e] mb-2.5">Book bord</p>
            <p className="text-[10px] text-[#8a8a8a] mb-1">Antal</p>
            <div className="flex gap-1.5 mb-2.5">
              {[2, 4, 6].map((n) => (
                <button key={n} type="button" onClick={() => setPeople(n)} className={`flex-1 rounded-lg py-1.5 text-[11px] ${people === n ? "bg-[#00a8e8] text-white" : "bg-[#f1f0ee] text-[#3a3a3a]"}`}>
                  {n}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-[#8a8a8a] mb-1">Tid i aften</p>
            <div className="flex gap-1.5 mb-3">
              {["17:30", "19:00", "20:30"].map((t) => (
                <button key={t} type="button" onClick={() => setTime(t)} className={`flex-1 rounded-lg py-1.5 text-[11px] ${time === t ? "bg-[#00a8e8] text-white" : "bg-[#f1f0ee] text-[#3a3a3a]"}`}>
                  {t}
                </button>
              ))}
            </div>
            <button type="button" onClick={() => setDone(true)} className="w-full rounded-full bg-[#242828] text-white text-[11.5px] font-semibold py-2">
              Bekræft
            </button>
          </>
        )}
      </div>
    </Frame>
  );
}

/* ───────── Salon: booking på mobilen, der fylder kalenderen ───────── */
export function HeroSalon() {
  const reduce = useReducedMotion();
  const slots = ["09:00", "10:30", "12:00", "13:30", "15:00", "16:30"];
  const [taken, setTaken] = useState([1, 4]);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setTaken((s) => (s.length >= 5 ? [1] : [...s, [0, 2, 3, 5].find((x) => !s.includes(x))])), 1400);
    return () => clearInterval(t);
  }, [reduce]);
  return (
    <Frame className="bg-white border border-[#e4e2e2]">
      <div className="absolute left-[5%] top-[8%] w-[40%] min-w-[150px] rounded-2xl bg-[#f7f6f6] p-3.5">
        <p className="text-[10px] uppercase tracking-[0.16em] text-[#00a8e8] mb-3">Prisliste</p>
        {[
          ["Dameklip", "450"],
          ["Herreklip", "320"],
          ["Farve + klip", "1.050"],
          ["Bryn & vipper", "290"],
        ].map(([n, p]) => (
          <p key={n} className="flex justify-between text-[12px] text-[#2a2d2d] py-1.5 border-b border-[#e8e6e6] last:border-0">
            <span>{n}</span>
            <span className="font-semibold">{p} kr</span>
          </p>
        ))}
      </div>
      <div className="absolute right-[4%] top-1/2 -translate-y-1/2 w-[180px] rounded-[30px] border-[3px] border-[#2a2d2d] bg-white p-3.5 pt-5 shadow-[0_30px_60px_-30px_rgba(0,168,232,0.5)]">
        <p className="text-[12.5px] font-semibold text-[#1c1e1e]">Vælg tid · torsdag</p>
        <div className="grid grid-cols-2 gap-1.5 mt-3">
          {slots.map((s, i) => {
            const on = taken.includes(i);
            return (
              <motion.span
                key={s}
                layout
                className={`rounded-lg py-2 text-center text-[11px] transition-colors duration-500 ${on ? "bg-[#00a8e8] text-white" : "bg-[#f1f0ee] text-[#5a5a5a]"}`}
              >
                {on ? "Booket" : s}
              </motion.span>
            );
          })}
        </div>
        <p className="mt-3 text-[10px] text-[#00a8e8] flex items-center gap-1.5">
          <Ico d={ICONS.check} className="w-3 h-3" /> SMS-påmindelse dagen før
        </p>
      </div>
      <motion.div
        animate={reduce ? {} : { y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute left-[6%] bottom-[8%] rounded-2xl bg-[#00a8e8] text-white px-4 py-3 shadow-xl"
      >
        <p className="text-[18px] font-semibold leading-none">{taken.length}/6</p>
        <p className="text-[10px] opacity-90 mt-1">tider booket online</p>
      </motion.div>
    </Frame>
  );
}

/* ───────── Jylland: kort med byer, der tænder én efter én ───────── */
const JUTLAND = "M214 18 L232 40 L226 70 L246 96 L240 128 L262 150 L290 160 L282 186 L250 190 L236 214 L222 238 L214 262 L196 280 L186 304 L178 330 L172 360 L160 392 L70 392 L58 360 L52 330 L62 300 L50 268 L42 232 L46 196 L40 160 L54 130 L74 104 L104 96 L132 82 L160 60 L188 40 Z";
const CITIES = [
  ["Skagen", 214, 30],
  ["Aalborg", 168, 84],
  ["Viborg", 128, 168],
  ["Herning", 96, 222],
  ["Aarhus", 236, 206],
  ["Silkeborg", 160, 214],
  ["Vejle", 176, 294],
  ["Kolding", 170, 330],
  ["Esbjerg", 66, 330],
];

export function HeroJylland() {
  return (
    <Frame className="border border-white/10 bg-[#1c1e1e]">
      <svg viewBox="0 0 330 410" className="absolute inset-0 m-auto h-[92%] w-auto" fill="none" aria-hidden>
        <motion.path
          d={JUTLAND}
          stroke="#00a8e8"
          strokeWidth="2"
          strokeLinejoin="round"
          fill="rgba(0,168,232,0.07)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease }}
        />
        {CITIES.map(([n, x, y], i) => (
          <motion.g key={n} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 + i * 0.15 }}>
            <circle cx={x} cy={y} r="3.5" fill="#e4e2e2" />
            <text x={x + 7} y={y + 4} fontSize="10" fill="#a6b1b1">
              {n}
            </text>
          </motion.g>
        ))}
        <motion.g initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.8, type: "spring" }} style={{ transformOrigin: "205px 262px" }}>
          <circle cx="205" cy="262" r="16" fill="#00a8e8" opacity="0.25" />
          <circle cx="205" cy="262" r="6" fill="#00a8e8" />
          <text x="186" y="252" fontSize="12" fontWeight="600" fill="#ffffff" textAnchor="end">
            Horsens
          </text>
        </motion.g>
      </svg>
      <div className="absolute right-4 top-4 rounded-2xl bg-white/[0.06] border border-white/10 px-4 py-3">
        <p className="text-[10px] uppercase tracking-[0.16em] text-[#00a8e8]">Online samarbejde</p>
        <p className="text-[13px] font-semibold text-white mt-1">Skagen → Kolding · 0 kr kørsel</p>
      </div>
    </Frame>
  );
}

/* ───────── Vejle: rute fra Horsens + trekantsområdet ───────── */
export function HeroVejle() {
  const pts = { Horsens: [250, 70], Vejle: [170, 170], Fredericia: [250, 280], Kolding: [110, 300] };
  return (
    <Frame className="bg-white border border-[#e4f0f7]">
      <svg viewBox="0 0 360 380" className="absolute inset-0 w-full h-full" fill="none" aria-hidden>
        <path d="M-10 150 C 80 140, 120 175, 170 170 S 300 200, 380 190" stroke="#e4f0f7" strokeWidth="26" strokeLinecap="round" />
        <motion.path
          d="M250 70 C 230 120, 200 140, 170 170"
          stroke="#00a8e8"
          strokeWidth="3"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
        />
        <motion.path
          d="M170 170 L250 280 L110 300 Z"
          stroke="#00a8e8"
          strokeWidth="2.5"
          fill="rgba(0,168,232,0.1)"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 1.4, ease }}
        />
        {Object.entries(pts).map(([n, [x, y]], i) => (
          <motion.g key={n} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 + i * 0.4 }}>
            <circle cx={x} cy={y} r={n === "Vejle" ? 8 : 5} fill={n === "Horsens" ? "#00a8e8" : n === "Vejle" ? "#1c1e1e" : "#00a8e8"} />
            <text x={x + 12} y={y + 4} fontSize="13" fontWeight="600" fill="#1c1e1e">
              {n}
            </text>
          </motion.g>
        ))}
      </svg>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute left-5 top-5 rounded-2xl bg-[#00a8e8] text-white px-4 py-2.5"
      >
        <p className="text-[10px] uppercase tracking-[0.14em] opacity-80">Horsens → Vejle</p>
        <p className="text-[15px] font-semibold">25 min.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.6 }}
        className="absolute right-5 bottom-5 rounded-2xl bg-[#f1f0ee] border border-[#c7d0d0] px-4 py-2.5"
      >
        <p className="text-[10px] uppercase tracking-[0.14em] text-[#00a8e8]">Trekantsområdet</p>
        <p className="text-[12.5px] font-semibold text-[#1c1e1e]">Én side · tre byer</p>
      </motion.div>
    </Frame>
  );
}

/* ───────── WordPress Horsens: WordPress-panelet med lokale detaljer ───────── */
export function HeroWpHorsens() {
  const items = ["Sider", "Indlæg", "Medier", "Ydelser", "Indstillinger"];
  return (
    <Frame className="bg-white border border-[#e4f0f7] shadow-[0_30px_70px_-40px_rgba(28,30,30,0.35)]">
      <div className="absolute inset-y-0 left-0 w-[30%] bg-[#242828] p-4">
        <span className="w-8 h-8 rounded-full border-2 border-white/70 text-white/80 text-[13px] font-serif flex items-center justify-center mb-5">W</span>
        {items.map((it, i) => (
          <p key={it} className={`text-[11.5px] py-2 px-2 rounded-md ${i === 3 ? "bg-[#00a8e8] text-white" : "text-[#c7d0d0]"}`}>
            {it}
          </p>
        ))}
      </div>
      <div className="absolute inset-y-0 right-0 w-[70%] p-5 bg-[#f7f6f6]">
        <p className="text-[14px] font-semibold text-[#242828] mb-3">Rediger: Ydelser</p>
        <div className="rounded-xl bg-white border border-[#e4e2e2] p-3.5 mb-3">
          <p className="text-[10px] text-[#8a9696] mb-1">Overskrift</p>
          <p className="text-[13px] font-semibold text-[#242828]">Malerarbejde i Horsens og omegn</p>
        </div>
        <div className="rounded-xl bg-white border border-[#00a8e8] p-3.5 mb-3">
          <p className="text-[10px] text-[#8a9696] mb-1">Pris fra</p>
          <TypeLoop words={["149 kr/m²", "159 kr/m²"]} />
        </div>
        <div className="grid grid-cols-3 gap-2 mb-4">
          {["#e4f0f7", "#cfe9f5", "#e8e6e6"].map((c) => (
            <span key={c} className="h-14 rounded-lg" style={{ backgroundColor: c }} />
          ))}
        </div>
        <span className="inline-block rounded-md bg-[#00a8e8] text-white text-[11px] font-semibold px-4 py-2">Opdater</span>
      </div>
      <div className="absolute right-4 top-4 rounded-full bg-[#242828] text-white text-[10px] px-3 py-1.5">📍 Horsens</div>
    </Frame>
  );
}

function TypeLoop({ words }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((x) => (x + 1) % words.length), 2200);
    return () => clearInterval(t);
  }, [reduce, words.length]);
  return (
    <p className="text-[13px] text-[#242828]">
      {words[i]}
      <span className="inline-block w-px h-3.5 bg-[#00a8e8] ml-0.5 align-middle animate-pulse" />
    </p>
  );
}

/* ───────── Alle platforme: platforme i kredsløb om "din side" ───────── */
export function HeroOrbit() {
  const reduce = useReducedMotion();
  const ring = [
    ["WordPress", "#00a8e8"],
    ["Shopify", "#00a8e8"],
    ["Webflow", "#00a8e8"],
    ["Next.js", "#1c1e1e"],
    ["WooCommerce", "#00a8e8"],
    ["Wix", "#00a8e8"],
    ["Squarespace", "#1c1e1e"],
    ["React", "#00a8e8"],
  ];
  return (
    <Frame h="h-[340px] sm:h-[460px]">
      <div className="absolute inset-0 flex items-center justify-center scale-[0.68] sm:scale-100">
        {[300, 420].map((s) => (
          <span key={s} className="absolute rounded-full border border-dashed border-white/15" style={{ width: s, height: s }} />
        ))}
        <motion.div
          className="absolute w-[360px] h-[360px]"
          animate={reduce ? {} : { rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {ring.map(([n, c], i) => {
            const a = (i / ring.length) * Math.PI * 2;
            const r = i % 2 ? 210 : 150;
            return (
              <motion.span
                key={n}
                className="absolute left-1/2 top-1/2 -ml-[46px] -mt-[16px] w-[92px] h-[32px] rounded-full bg-white text-[11.5px] font-semibold flex items-center justify-center shadow-lg"
                style={{ x: Math.round(Math.cos(a) * r), y: Math.round(Math.sin(a) * r), color: c }}
                animate={reduce ? {} : { rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                {n}
              </motion.span>
            );
          })}
        </motion.div>
        <div className="relative w-36 h-36 rounded-full bg-[#00a8e8] flex flex-col items-center justify-center text-[#10181a] shadow-[0_0_80px_rgba(0,168,232,0.5)]">
          <p className="text-[11px] uppercase tracking-[0.14em] opacity-70">Din</p>
          <p className="text-[18px] font-semibold">hjemmeside</p>
          <p className="text-[10px] mt-1 opacity-80">+ AI på dem alle</p>
        </div>
      </div>
    </Frame>
  );
}

/* ───────── Shopify: salgsoverblik med ordrer, der tikker ind ───────── */
export function HeroShopify() {
  const reduce = useReducedMotion();
  const [orders, setOrders] = useState(12);
  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setOrders((o) => (o >= 19 ? 12 : o + 1)), 2000);
    return () => clearInterval(t);
  }, [reduce]);
  const bars = [30, 42, 38, 55, 48, 66, 74, 62, 80, 92];
  return (
    <Frame className="bg-white border border-[#e4e2e2] shadow-[0_30px_70px_-40px_rgba(58,58,58,0.45)]">
      <div className="p-5 sm:p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-5">
          <p className="text-[13px] font-semibold text-[#1c1e1e]">I dag</p>
          <span className="text-[10.5px] rounded-full bg-[#eeecec] text-[#00a8e8] px-2.5 py-1">● Live</span>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="rounded-xl bg-[#f7f6f6] p-3.5">
            <p className="text-[10.5px] text-[#6a6a6a]">Ordrer</p>
            <p className="text-[26px] font-semibold text-[#1c1e1e] tabular-nums leading-tight">{orders}</p>
          </div>
          <div className="rounded-xl bg-[#f7f6f6] p-3.5">
            <p className="text-[10.5px] text-[#6a6a6a]">Omsætning</p>
            <p className="text-[26px] font-semibold text-[#1c1e1e] tabular-nums leading-tight">{(orders * 365).toLocaleString("da-DK")} kr</p>
          </div>
        </div>
        <div className="flex-1 flex items-end gap-1.5">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.7, ease }}
              style={{ height: `${h}%`, transformOrigin: "bottom" }}
              className={`flex-1 rounded-t-md ${i === bars.length - 1 ? "bg-[#00a8e8]" : "bg-[#e4e2e2]"}`}
            />
          ))}
        </div>
      </div>
      <motion.div
        key={orders}
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
        className="absolute left-6 top-[44%] rounded-xl bg-[#1c1e1e] text-white px-3.5 py-2.5 shadow-xl"
      >
        <p className="text-[11px] font-semibold">🛍 Ny ordre #{1030 + orders}</p>
        <p className="text-[10px] text-[#a6b1b1]">MobilePay · klar til afsendelse</p>
      </motion.div>
    </Frame>
  );
}

/* ───────── AI-synlighed: et AI-svar, der skrives og anbefaler dig ───────── */
const ANSWER =
  "Et godt bud er Din Virksomhed i Horsens. De har faste priser, svarer inden for 24 timer og har mange gode anmeldelser fra lokale kunder.";

export function HeroGeo() {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? ANSWER.length : 0);
  useEffect(() => {
    if (reduce) return;
    let i = 0;
    let t;
    const run = () => {
      if (i < ANSWER.length) {
        i += 2;
        setN(Math.min(i, ANSWER.length));
        t = setTimeout(run, 28);
      } else {
        t = setTimeout(() => {
          i = 0;
          setN(0);
          t = setTimeout(run, 600);
        }, 3800);
      }
    };
    t = setTimeout(run, 900);
    return () => clearTimeout(t);
  }, [reduce]);
  const shown = ANSWER.slice(0, n);
  const name = "Din Virksomhed";
  const k = shown.indexOf(name);
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#1c1e1e] p-5 sm:p-7 text-left">
      <div className="flex justify-end mb-5">
        <p className="max-w-[80%] rounded-2xl rounded-br-sm bg-white/[0.08] px-4 py-3 text-[14px] text-[#e8e6e6]">
          Hvem kan du anbefale til en ny hjemmeside i Horsens?
        </p>
      </div>
      <div className="flex gap-3">
        <span className="w-9 h-9 shrink-0 rounded-full bg-[#00a8e8] text-[#1c1e1e] flex items-center justify-center">
          <Ico d={ICONS.spark} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#e4e2e2] min-h-[84px]">
            {k >= 0 ? (
              <>
                {shown.slice(0, k)}
                <mark className="bg-[#00a8e8]/25 text-white rounded px-1">{shown.slice(k, k + name.length)}</mark>
                {shown.slice(k + name.length)}
              </>
            ) : (
              shown
            )}
            {n < ANSWER.length && <span className="inline-block w-2 h-4 bg-[#00a8e8] ml-0.5 align-middle animate-pulse" />}
          </p>
          <motion.div
            className="flex flex-wrap gap-2 mt-4"
            animate={{ opacity: n >= ANSWER.length ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          >
            {["dinvirksomhed.dk", "Google Virksomhedsprofil", "Anmeldelser"].map((s, i) => (
              <span key={s} className="text-[11px] rounded-full border border-[#00a8e8]/40 text-[#e4e2e2] px-3 py-1">
                [{i + 1}] {s}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ───────── AI-chatbot: hjemmeside med chat, der ender i et lead ───────── */
const CONVO = [
  ["user", "Hej, hvad koster det at få renset tagrender?"],
  ["bot", "Typisk 1.200–1.800 kr for et parcelhus. Hvor bor du?"],
  ["user", "Brædstrup"],
  ["bot", "Det dækker vi 👍 Må jeg få dit nummer, så ringer Lars i morgen?"],
];

export function HeroChatbot() {
  const reduce = useReducedMotion();
  const [step, setStep] = useState(reduce ? CONVO.length + 1 : 0);
  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setStep((s) => (s > CONVO.length ? 0 : s + 1)), step > CONVO.length ? 3500 : 1300);
    return () => clearTimeout(t);
  }, [step, reduce]);
  return (
    <Frame className="bg-[#f1f0ee]">
      <div className="absolute inset-4 rounded-2xl bg-white border border-[#e4f0f7] overflow-hidden">
        <div className="flex gap-1.5 px-3 py-2 border-b border-[#f1f0ee]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="w-2 h-2 rounded-full bg-[#e8e6e6]" />
          ))}
        </div>
        <div className="p-4 opacity-50">
          <div className="h-3 w-1/2 rounded bg-[#1c1e1e] mb-2" />
          <div className="h-2 w-2/3 rounded bg-[#e4e2e2] mb-1.5" />
          <div className="h-2 w-1/2 rounded bg-[#e4e2e2] mb-4" />
          <div className="h-20 w-[45%] rounded-xl bg-[#cfe9f5]" />
        </div>
      </div>
      <div className="absolute right-6 bottom-6 w-[78%] max-w-[300px] rounded-2xl bg-white shadow-[0_24px_60px_-20px_rgba(42,45,45,0.45)] border border-[#e4f0f7] overflow-hidden">
        <div className="bg-[#00a8e8] text-white px-4 py-2.5 flex items-center gap-2">
          <Ico d={ICONS.spark} className="w-3.5 h-3.5" />
          <span className="text-[12px] font-semibold">Spørg os – svar med det samme</span>
        </div>
        <div className="p-3 flex flex-col gap-1.5 min-h-[190px]">
          {CONVO.slice(0, step).map(([who, t], i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`max-w-[88%] rounded-xl px-3 py-2 text-[11px] leading-snug ${who === "bot" ? "self-start bg-[#f7f6f6] text-[#1c1e1e]" : "self-end bg-[#00a8e8] text-white"}`}
            >
              {t}
            </motion.p>
          ))}
          {step > CONVO.length && (
            <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-center mt-1 text-[10.5px] rounded-full bg-[#f1f0ee] text-[#00a8e8] px-3 py-1.5">
              ✉ Nyt lead sendt til din mail
            </motion.p>
          )}
        </div>
      </div>
    </Frame>
  );
}
