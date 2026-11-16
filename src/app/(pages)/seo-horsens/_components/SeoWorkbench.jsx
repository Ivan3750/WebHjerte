"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * "Værkstedet": fire faner, som i Search Console. Hver fane har sin egen tegning,
 * så man kan se forskellen på teknik, lokalt, indhold og måling – ikke kun læse den.
 */

const Check = () => (
  <span className="mt-[3px] w-[18px] h-[18px] shrink-0 rounded-full bg-[#00a8e8]/15 flex items-center justify-center">
    <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden>
      <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

/* ── Tegning 1: hastighed før/efter ── */
function VisSpeed() {
  const bars = [
    { l: "Før", w: "92%", c: "#8a9696" },
    { l: "Efter", w: "28%", c: "#00a8e8" },
  ];
  return (
    <div className="flex flex-col gap-6 h-full justify-center">
      <p className="text-[13px] font-semibold text-[#b4bdbd]">Tid til siden vises på mobil (eksempel)</p>
      {bars.map((b, i) => (
        <div key={b.l}>
          <div className="flex justify-between text-[13px] mb-2">
            <span className="text-white font-semibold">{b.l}</span>
            <span className="text-[#8a9696]">{i === 0 ? "langsom" : "hurtig"}</span>
          </div>
          <div className="h-3 rounded-full bg-white/10 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: b.w }}
              transition={{ duration: 1, delay: 0.15 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full"
              style={{ background: b.c }}
            />
          </div>
        </div>
      ))}
      <div className="grid grid-cols-3 gap-3 pt-2">
        {["Billeder", "Kode", "Cache"].map((t) => (
          <div key={t} className="rounded-xl bg-white/5 border border-white/10 px-3 py-3 text-center text-[12.5px] text-[#b4bdbd]">{t}</div>
        ))}
      </div>
    </div>
  );
}

/* ── Tegning 2: Google Virksomhedsprofil ── */
function VisProfile() {
  return (
    <div className="rounded-2xl bg-white p-5 text-[#1c1e1e] h-full flex flex-col justify-center">
      <p className="text-[12px] font-semibold text-[#00a8e8] mb-2">Google Virksomhedsprofil</p>
      <p className="text-[20px] font-semibold leading-tight">Din virksomhed</p>
      <p className="text-[13px] text-[#5f5f5f] mt-1"><span className="text-[#e0a000]">★★★★★</span> 4,9 · Elektriker i Horsens</p>
      <div className="grid grid-cols-2 gap-2 mt-4 text-[12.5px]">
        {["Ring", "Rutevejledning", "Hjemmeside", "Anmeldelser"].map((b) => (
          <span key={b} className="rounded-full border border-[#d9d7d7] px-3 py-2 text-center font-semibold text-[#1a5fb4]">{b}</span>
        ))}
      </div>
      <dl className="mt-4 text-[12.5px] text-[#4a4a4a] grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5">
        <dt className="text-[#8a8a8a]">Adresse</dt><dd>Samme som på hjemmesiden</dd>
        <dt className="text-[#8a8a8a]">Telefon</dt><dd>Samme som på hjemmesiden</dd>
        <dt className="text-[#8a8a8a]">Åbent</dt><dd>Hverdage 7–16</dd>
      </dl>
    </div>
  );
}

/* ── Tegning 3: søgning → side ── */
function VisMap() {
  const pairs = [
    ["elektriker horsens", "Forsiden"],
    ["ladestander montering", "/ladestander"],
    ["nyt el-tavle pris", "/el-tavle"],
    ["el-installatør akut", "/akut-hjaelp"],
  ];
  return (
    <div className="flex flex-col gap-2.5 justify-center h-full">
      <p className="text-[13px] font-semibold text-[#b4bdbd] mb-1">Hver søgning får sin egen side (eksempel)</p>
      {pairs.map(([q, p], i) => (
        <motion.div
          key={q}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 + i * 0.09, duration: 0.5 }}
          className="grid grid-cols-[1fr_auto_1fr] items-center gap-3"
        >
          <span className="rounded-xl bg-white/5 border border-white/10 px-3 py-2.5 text-[13px] text-white truncate">{q}</span>
          <span aria-hidden className="text-[#00a8e8]">→</span>
          <span className="rounded-xl bg-[#00a8e8]/15 px-3 py-2.5 text-[13px] text-[#8fd8f6] font-semibold truncate">{p}</span>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Tegning 4: kurve i Search Console-stil ── */
function VisChart() {
  const pts = [8, 10, 9, 14, 18, 17, 25, 31, 38, 46];
  const w = 320, h = 140;
  const max = 50;
  const d = pts.map((v, i) => `${i ? "L" : "M"}${(i / (pts.length - 1)) * w},${h - (v / max) * h}`).join(" ");
  return (
    <div className="flex flex-col gap-4 justify-center h-full">
      <div className="grid grid-cols-3 gap-3">
        {[["Klik", "↑"], ["Visninger", "↑"], ["Placering", "↑"]].map(([l, a]) => (
          <div key={l} className="rounded-xl bg-white/5 border border-white/10 px-3 py-3">
            <p className="text-[12px] text-[#8a9696]">{l}</p>
            <p className="text-[18px] font-semibold text-[#00a8e8] leading-none mt-1.5">{a}</p>
          </div>
        ))}
      </div>
      <svg viewBox={`-6 -8 ${w + 12} ${h + 16}`} className="w-full" role="img" aria-label="Eksempel på stigende kurve">
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={w} y1={h * g} y2={h * g} stroke="#ffffff" strokeOpacity="0.08" />
        ))}
        <motion.path
          d={d}
          fill="none"
          stroke="#00a8e8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <p className="text-[12px] text-[#8a9696]">Illustration – ikke et løfte om en bestemt udvikling.</p>
    </div>
  );
}

const tabs = [
  {
    key: "teknik",
    label: "Teknik",
    title: "Siden skal være hurtig og uden fejl",
    text: "Google og kunderne giver op over for en langsom side. Først sørger jeg for, at fundamentet er i orden.",
    items: [
      "Hastighed på mobil: billeder, kode og caching",
      "Mobilvisning, der virker med tommelfingeren",
      "Sitemap og indeksering, så Google kan finde alle sider",
      "Ingen døde links eller fejlsider",
    ],
    visual: <VisSpeed />,
  },
  {
    key: "lokalt",
    label: "Lokalt",
    title: "Vær med på kortet, når kunden søger i nærheden",
    text: "Lokale søgninger afgøres af Google Virksomhedsprofilen og af, at dine oplysninger er ens overalt.",
    items: [
      "Verificeret og komplet Google Virksomhedsprofil",
      "Rigtige kategorier, åbningstider og billeder",
      "Samme navn, adresse og telefon overalt",
      "Anmeldelser, der bliver bedt om – og besvaret",
    ],
    visual: <VisProfile />,
  },
  {
    key: "indhold",
    label: "Indhold",
    title: "En side pr. ydelse – ikke én side til alt",
    text: "Én forside kan ikke rangere på alle dine ydelser. Hver ydelse får en side, der svarer på præcis den søgning.",
    items: [
      "Søgeordsanalyse tilpasset din branche og dit område",
      "Titler, overskrifter og interne links, der passer til søgningen",
      "Ydelsessider og serviceområder",
      "Tekst, der besvarer kundens spørgsmål",
    ],
    visual: <VisMap />,
  },
  {
    key: "maaling",
    label: "Måling",
    title: "Du ser, hvad der virker",
    text: "Jeg følger Google Search Console og justerer løbende, så indsatsen går til det, der giver henvendelser.",
    items: [
      "Opsætning af Search Console og måling",
      "Opfølgning på placeringer og klik",
      "Rettelser på de sider, der næsten er på første side",
      "Ærlig status, også når noget ikke virker",
    ],
    visual: <VisChart />,
  },
];

export default function SeoWorkbench() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const t = tabs[active];

  return (
    <div className="rounded-3xl bg-[#242828] border border-white/10 overflow-hidden">
      {/* Fanebjælke */}
      <div role="tablist" aria-label="SEO-arbejdet" className="flex overflow-x-auto border-b border-white/10 bg-[#1f2222]">
        {tabs.map((x, i) => (
          <button
            key={x.key}
            role="tab"
            aria-selected={i === active}
            aria-controls={`seo-panel-${x.key}`}
            id={`seo-tab-${x.key}`}
            onClick={() => setActive(i)}
            className={`relative shrink-0 px-6 sm:px-8 py-4 text-[14px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00a8e8] ${
              i === active ? "text-white" : "text-[#8a9696] hover:text-white"
            }`}
          >
            {x.label}
            {i === active && <motion.span layoutId="seo-tab-underline" className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#00a8e8]" />}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`seo-panel-${t.key}`}
        aria-labelledby={`seo-tab-${t.key}`}
        className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-14 p-6 sm:p-10 min-h-[420px]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={t.key + "-text"}
            initial={{ opacity: 0, y: reduce ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            <h3 className="text-[clamp(22px,2.4vw,30px)] font-semibold text-white leading-[1.15] tracking-tight mb-4 max-w-[22ch]">{t.title}</h3>
            <p className="text-[15.5px] text-[#b4bdbd] leading-[1.75] mb-7 max-w-[52ch]">{t.text}</p>
            <ul className="flex flex-col gap-3.5">
              {t.items.map((it) => (
                <li key={it} className="flex gap-3 text-[15px] text-white leading-snug">
                  <Check />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <motion.div
            key={t.key + "-vis"}
            initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="rounded-2xl bg-[#1c1e1e] border border-white/10 p-6 sm:p-7 min-h-[300px]"
          >
            {t.visual}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
