"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "../ui/SectionHead";
import { FadeUp } from "../home/fx/Reveal";
import { ArrowBadge } from "../ui/ArrowIcon";
import { ICONS } from "../illustrations/Visuals";

const ease = [0.16, 1, 0.3, 1];
const Ico = ({ d, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={d} />
  </svg>
);

/* ═════════ Håndværkere ═════════ */

const Q3 = [
  { s: "1 sek.", q: "Hvad laver du?", a: "“Tømrer – tag, terrasser og vinduer”", icon: ICONS.pencil },
  { s: "2 sek.", q: "Arbejder du hos mig?", a: "“Horsens, Hedensted og Juelsminde”", icon: ICONS.pin },
  { s: "3 sek.", q: "Hvordan får jeg fat i dig?", a: "En stor knap: Ring nu", icon: ICONS.phone },
];

export function TradesThreeSeconds() {
  return (
    <section className="scene bg-[#fbf6ee]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead eyebrow="Tre sekunder" lines={["Kunden har tre spørgsmål –", "siden svarer på dem alle"]} className="mb-10 sm:mb-14" />
        <div className="relative grid md:grid-cols-3 gap-4">
          <div aria-hidden className="hidden md:block absolute left-0 right-0 top-[38px] h-1 rounded-full bg-[#f0a63a]/15 overflow-hidden">
            <motion.span className="block h-full bg-[#f0a63a]" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 3, ease: "linear" }} />
          </div>
          {Q3.map((q, i) => (
            <FadeUp key={q.q} delay={i * 0.9}>
              <div className="relative h-full rounded-3xl bg-white border border-[#f0e2cc] p-6 sm:p-7">
                <span className="relative z-10 inline-flex items-center gap-2 rounded-full bg-[#f0a63a] text-[#2a1d0a] text-[12px] font-semibold px-3 py-1.5 mb-6">
                  <Ico d={q.icon} className="w-3.5 h-3.5" /> {q.s}
                </span>
                <p className="text-[19px] font-semibold text-[#1c1e1e] mb-3">{q.q}</p>
                <p className="text-[14.5px] text-[#6b5a44] leading-[1.6]">{q.a}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const TRADES = [
  { href: "/hjemmeside-til-vvs", name: "VVS", note: "Akut-knap + tilbud", color: "#00a8e8", icon: "M12 3s6 6.5 6 11a6 6 0 01-12 0c0-4.5 6-11 6-11z" },
  { href: "/hjemmeside-til-elektriker", name: "Elektriker", note: "Tillid og elbil-ladere", color: "#f5c84c", icon: ICONS.bolt },
  { href: "/hjemmeside-til-tomrer", name: "Tømrer", note: "Projekter, der sælger", color: "#c98a4b", icon: "M3 20h18M5 20V10l7-6 7 6v10M9 20v-6h6v6" },
  { href: "/hjemmeside-til-saloner", name: "Salon", note: "Booking døgnet rundt", color: "#d4688a", icon: "M6 6a3 3 0 106 0 3 3 0 00-6 0zM6 18a3 3 0 106 0 3 3 0 00-6 0zM20 4L8.5 15.5M14.5 14.5L20 20" },
  { href: "/hjemmeside-til-restauranter", name: "Restaurant", note: "Menu og bordbooking", color: "#e8875b", icon: "M6 3v8a2 2 0 002 2v8M10 3v6M14 3c-1 2-1 6 0 8h2v10" },
];

export function TradesGrid() {
  return (
    <section className="scene relative overflow-hidden bg-[#1d1b18]">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead dark eyebrow="Find din branche" lines={["Hver branche har", "sin egen side"]} className="mb-10 sm:mb-14" />
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
          {TRADES.map((t, i) => (
            <FadeUp key={t.href} delay={i * 0.06} className="h-full">
              <Link href={t.href} className="group h-full flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-5 hover:-translate-y-1 transition-all duration-500" style={{ "--c": t.color }}>
                <span className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 text-[#10181a] transition-transform duration-500 group-hover:rotate-[-8deg] group-hover:scale-110" style={{ backgroundColor: t.color }}>
                  <Ico d={t.icon} className="w-5 h-5" />
                </span>
                <p className="text-[16px] font-semibold text-white">{t.name}</p>
                <p className="text-[12.5px] text-[#a69c8f] mt-1 mb-5">{t.note}</p>
                <span className="mt-auto">
                  <ArrowBadge size="sm" tone="dark" />
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════════ VVS: to kunder, to veje ═════════ */

const PATHS = {
  akut: {
    label: "Vand på gulvet",
    color: "#e0678a",
    steps: ["Googler “VVS akut Horsens” på mobilen", "Ser en rød knap: Ring nu", "Ét tryk – du har opkaldet"],
    time: "Under 30 sek.",
  },
  plan: {
    label: "Nyt badeværelse",
    color: "#00a8e8",
    steps: ["Kigger på dine badeværelser fra før/efter", "Læser, hvad opgaven omfatter", "Sender en kort formular med billeder"],
    time: "Over et par dage",
  },
};

export function VvsTwoPaths() {
  const [k, setK] = useState("akut");
  const p = PATHS[k];
  return (
    <section className="scene bg-[#eef6fa]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead eyebrow="To kunder" lines={["Hvem er du i dag?"]} lead="Vælg en kunde og se, hvilken vej siden fører dem." className="mb-8" />
        <div className="inline-flex rounded-full bg-white border border-[#d6e6ee] p-1 mb-8">
          {Object.entries(PATHS).map(([key, v]) => (
            <button
              key={key}
              type="button"
              onClick={() => setK(key)}
              aria-pressed={k === key}
              className="relative rounded-full px-5 py-2.5 text-[13px] font-medium"
              style={{ color: k === key ? "#fff" : "#3a4a52" }}
            >
              {k === key && <motion.span layoutId="vvs-pill" className="absolute inset-0 rounded-full" style={{ backgroundColor: v.color }} transition={{ duration: 0.4, ease }} />}
              <span className="relative">{v.label}</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={k} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35, ease }} className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3">
            {p.steps.map((s, i) => (
              <div key={s} className="contents">
                <div className="rounded-3xl bg-white border p-6" style={{ borderColor: `${p.color}55` }}>
                  <span className="w-8 h-8 rounded-full text-white text-[13px] font-semibold flex items-center justify-center mb-4" style={{ backgroundColor: p.color }}>
                    {i + 1}
                  </span>
                  <p className="text-[15.5px] text-[#1c1e1e] leading-[1.5]">{s}</p>
                </div>
                {i < 2 && (
                  <span className="hidden md:block text-[22px]" style={{ color: p.color }}>
                    →
                  </span>
                )}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        <p className="mt-6 text-[14px] text-[#4a5a62]">
          Tid fra søgning til kontakt: <strong style={{ color: p.color }}>{p.time}</strong>
        </p>
      </div>
    </section>
  );
}

/* ═════════ Elektriker: tillid + elbil-lader ═════════ */

const BADGES = [
  ["Autorisation", "Nummer og firma vist tydeligt", ICONS.shield],
  ["Forsikring", "Skrevet ud – ikke gemt væk", ICONS.check],
  ["Anmeldelser", "Rigtige navne og byer", ICONS.star],
  ["CVR og adresse", "Et rigtigt, lokalt firma", ICONS.pin],
];

export function ElTrust() {
  return (
    <section className="scene relative overflow-hidden bg-[#17191c]">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
        <SectionHead dark eyebrow="Tillid først" lines={["Ingen lukker en", "fremmed ind til", "eltavlen"]} lead="Før kunden ringer, tjekker de fire ting. Siden viser dem, før de når at lede." className="" />
        <div className="grid grid-cols-2 gap-3">
          {BADGES.map(([t, d, icon], i) => (
            <FadeUp key={t} delay={i * 0.12}>
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
                <motion.span
                  initial={{ scale: 0, rotate: -40 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 260, damping: 14 }}
                  className="w-11 h-11 rounded-2xl bg-[#f5c84c] text-[#17191c] flex items-center justify-center mb-5"
                >
                  <Ico d={icon} className="w-5 h-5" />
                </motion.span>
                <p className="text-[16px] font-semibold text-white">{t}</p>
                <p className="text-[13px] text-[#9aa3a8] mt-1 leading-[1.6]">{d}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const CHARGER_Q = ["Hvad koster det?", "Hvor lang tid tager det?", "Passer den til min bil?", "Skal der nyt i tavlen?"];

export function ElCharger() {
  return (
    <section className="scene bg-[#fffaf0]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24 grid md:grid-cols-[0.9fr_1.1fr] gap-10 items-center">
        <FadeUp>
          <div className="relative h-[320px] rounded-3xl bg-[#17191c] overflow-hidden flex items-center justify-center">
            <div className="relative w-[90px] h-[170px] rounded-[22px] bg-[#f4f4f2] border-4 border-[#2b2e33] flex flex-col items-center pt-5">
              <span className="w-10 h-10 rounded-full border-4 border-[#2b2e33] flex items-center justify-center text-[#f5c84c]">
                <Ico d={ICONS.bolt} className="w-5 h-5" />
              </span>
              <div className="mt-5 w-12 h-2 rounded-full bg-[#ddd] overflow-hidden">
                <motion.span className="block h-full bg-[#3ddc97]" animate={{ width: ["10%", "100%"] }} transition={{ duration: 3, repeat: Infinity }} />
              </div>
            </div>
            <svg viewBox="0 0 200 120" className="absolute bottom-0 left-0 w-[60%]" fill="none" aria-hidden>
              <path d="M200 30 C 120 30, 140 110, 40 100" stroke="#2b2e33" strokeWidth="8" strokeLinecap="round" />
            </svg>
          </div>
        </FadeUp>
        <div>
          <SectionHead eyebrow="Elbil-lader" lines={["Den side, der kan give", "flest nye projekter"]} lead="Kunderne har fire spørgsmål, før de ringer. Svar på dem på én side, så ringer de klar til et tilbud." className="mb-8" />
          <div className="flex flex-wrap gap-2">
            {CHARGER_Q.map((q, i) => (
              <motion.span
                key={q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.12 }}
                className="rounded-full bg-white border border-[#f0dfb0] px-4 py-2.5 text-[14px] text-[#3a3320]"
              >
                {q}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═════════ Tømrer: før/efter-skyder ═════════ */

function OldDeck() {
  return (
    <div className="absolute inset-0 bg-[#8d9a8a]">
      <div className="absolute inset-x-0 bottom-0 h-[45%]" style={{ background: "repeating-linear-gradient(90deg,#7a6f60 0 22px,#6a5f50 22px 25px)", filter: "saturate(0.4)" }} />
      {[18, 46, 72].map((x) => (
        <span key={x} className="absolute bottom-[40%] w-8 h-3 rounded bg-[#5b5244] rotate-12" style={{ left: `${x}%` }} />
      ))}
      <span className="absolute left-4 top-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/90 bg-black/30 rounded-full px-3 py-1">Før</span>
    </div>
  );
}
function NewDeck() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-[#bfe3f5] to-[#e9f4ec]">
      <div className="absolute inset-x-0 bottom-0 h-[45%]" style={{ background: "repeating-linear-gradient(90deg,#d39558 0 22px,#bf7f42 22px 24px)" }} />
      <div className="absolute bottom-[45%] inset-x-[8%] h-[3px] bg-[#8a5a2e]" />
      {[12, 30, 48, 66, 84].map((x) => (
        <span key={x} className="absolute bottom-[45%] w-[3px] h-14 bg-[#8a5a2e]" style={{ left: `${x}%` }} />
      ))}
      <span className="absolute right-[18%] bottom-[48%] w-14 h-10 rounded-t-full bg-[#3f8a5a]" />
      <span className="absolute right-4 top-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5a3a1a] bg-white/70 rounded-full px-3 py-1">Efter</span>
    </div>
  );
}

export function TomrerBeforeAfter() {
  const [pos, setPos] = useState(50);
  const box = useRef(null);
  const move = (clientX) => {
    const r = box.current.getBoundingClientRect();
    setPos(Math.max(4, Math.min(96, ((clientX - r.left) / r.width) * 100)));
  };
  return (
    <section className="scene bg-[#f4ede3]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead eyebrow="Før og efter" lines={["Kunden vil se,", "før de vælger"]} lead="Træk i skyderen. Sådan viser din side et projekt – det overbeviser mere end ti afsnit tekst." className="mb-10" />
        <div
          ref={box}
          className="relative h-[320px] sm:h-[420px] rounded-3xl overflow-hidden select-none cursor-ew-resize touch-none"
          onPointerDown={(e) => {
            e.currentTarget.setPointerCapture(e.pointerId);
            move(e.clientX);
          }}
          onPointerMove={(e) => e.buttons && move(e.clientX)}
        >
          <NewDeck />
          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
            <OldDeck />
          </div>
          <div className="absolute inset-y-0 w-1 bg-white -ml-0.5" style={{ left: `${pos}%` }}>
            <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center text-[#b8692e] text-[14px] font-semibold">⇆</span>
          </div>
          <input
            type="range"
            min={4}
            max={96}
            value={Math.round(pos)}
            onChange={(e) => setPos(+e.target.value)}
            aria-label="Sammenlign før og efter"
            className="sr-only"
          />
        </div>
        <div className="mt-5 flex flex-wrap gap-3 text-[13px] text-[#6b5a44]">
          {["Terrasse · 32 m²", "Lærk", "4 arbejdsdage", "Horsens"].map((t) => (
            <span key={t} className="rounded-full bg-white border border-[#e6d7c3] px-4 py-2">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════════ Restaurant: hvad koster platformene dig? ═════════ */

export function RestCommission() {
  const [orders, setOrders] = useState(300);
  const [avg, setAvg] = useState(250);
  const [pct, setPct] = useState(25);
  const month = Math.round((orders * avg * pct) / 100);
  const year = month * 12;
  const fmt = (n) => n.toLocaleString("da-DK");
  const Row = ({ label, value, set, min, max, step, unit }) => (
    <label className="block">
      <span className="flex justify-between mb-2 text-[14px] text-[#e9ddd3]">
        {label}
        <strong className="text-white tabular-nums">
          {fmt(value)} {unit}
        </strong>
      </span>
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => set(+e.target.value)} className="w-full accent-[#e8875b]" />
    </label>
  );
  return (
    <section className="scene relative overflow-hidden bg-[#2a221d]">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead dark eyebrow="Egen bestilling" lines={["Hvad betaler du", "platformene?"]} lead="Mange platforme tager op til ca. 30 % i kommission, afhængigt af aftalen. Skru på dine egne tal." className="mb-10" />
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="rounded-3xl bg-white/[0.05] border border-white/10 p-6 sm:p-8 flex flex-col gap-7">
            <Row label="Take away-ordrer pr. måned" value={orders} set={setOrders} min={50} max={1500} step={50} unit="stk." />
            <Row label="Gennemsnitlig ordre" value={avg} set={setAvg} min={100} max={600} step={10} unit="kr" />
            <Row label="Kommission" value={pct} set={setPct} min={10} max={30} step={1} unit="%" />
          </div>
          <div className="rounded-3xl bg-[#f7efe3] p-6 sm:p-8 flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#9a7b5f]">Kommission pr. år</p>
            <p className="text-[clamp(44px,6vw,72px)] font-semibold text-[#2a221d] tracking-tight leading-none mt-3 tabular-nums">{fmt(year)} kr</p>
            <p className="text-[14px] text-[#6b5a44] mt-3">≈ {fmt(month)} kr hver måned, der går til mellemled.</p>
            <p className="mt-auto pt-8 text-[13px] text-[#6b5a44] leading-[1.7]">
              Flytter du blot en del af de faste gæster til egen bestilling på hjemmesiden, beholder du marginen – og kontakten til gæsten.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═════════ Salon: byg din behandling ═════════ */

const SERVICES = [
  ["Klip", 450, 45],
  ["Farve", 650, 60],
  ["Vask & føn", 200, 20],
  ["Bryn & vipper", 290, 30],
  ["Kur", 180, 15],
];

export function SalonBuilder() {
  const [picked, setPicked] = useState(["Klip"]);
  const sel = SERVICES.filter(([n]) => picked.includes(n));
  const price = sel.reduce((a, [, p]) => a + p, 0);
  const mins = sel.reduce((a, [, , m]) => a + m, 0);
  return (
    <section className="scene bg-[#fbf2f4]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24 grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
        <div>
          <SectionHead eyebrow="Prisliste, der sælger" lines={["Kunden ser prisen", "og tiden – og booker"]} lead="Tryk på behandlingerne. Sådan kan din prisliste virke: pris og varighed med det samme, ingen telefon." className="mb-8" />
          <div className="flex flex-wrap gap-2">
            {SERVICES.map(([n, p]) => {
              const on = picked.includes(n);
              return (
                <button
                  key={n}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setPicked((s) => (on ? s.filter((x) => x !== n) : [...s, n]))}
                  className={`rounded-full border px-4 py-2.5 text-[13.5px] transition-colors ${on ? "bg-[#c9557d] border-[#c9557d] text-white" : "bg-white border-[#ecd3db] text-[#5a3a46] hover:border-[#c9557d]"}`}
                >
                  {n} · {p} kr
                </button>
              );
            })}
          </div>
        </div>
        <FadeUp>
          <div className="rounded-3xl bg-white border border-[#ecd3db] p-6 sm:p-8">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#c9557d] mb-4">Din booking</p>
            <div className="min-h-[120px] flex flex-col gap-2">
              <AnimatePresence>
                {sel.map(([n, p, m]) => (
                  <motion.p key={n} layout initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }} className="flex justify-between text-[14.5px] text-[#3a2a30]">
                    <span>
                      {n} <span className="text-[#a08a92] text-[12px]">· {m} min.</span>
                    </span>
                    <span>{p} kr</span>
                  </motion.p>
                ))}
              </AnimatePresence>
              {!sel.length && <p className="text-[14px] text-[#a08a92]">Vælg en behandling</p>}
            </div>
            <div className="mt-5 pt-5 border-t border-[#f0dfe4] flex items-end justify-between">
              <div>
                <p className="text-[12px] text-[#a08a92]">I alt · {mins} min.</p>
                <p className="text-[30px] font-semibold text-[#1c1e1e] tabular-nums leading-tight">{price.toLocaleString("da-DK")} kr</p>
              </div>
              <span className={`rounded-full px-5 py-2.5 text-[13px] font-semibold ${sel.length ? "bg-[#c9557d] text-white" : "bg-[#f0e4e8] text-[#b8a0a8]"}`}>Vælg tid →</span>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
