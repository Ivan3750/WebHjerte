"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "../ui/SectionHead";
import { FadeUp } from "../home/fx/Reveal";
import { ICONS } from "../illustrations/Visuals";

/** Interaktive blokke til klinik, køreskole, fitness, rengøring, værksted og rådgivere. */
const ease = [0.16, 1, 0.3, 1];
const Ico = ({ d, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={d} />
  </svg>
);
const wrap = "max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24";
const fmt = (n) => Math.round(n).toLocaleString("da-DK");

/* ═════════ Klinik: book en tid ═════════ */

const TREATMENTS = [
  { id: "first", name: "Første konsultation", min: 45, note: "Samtale, undersøgelse og en plan" },
  { id: "sport", name: "Sportsskade", min: 30, note: "Målrettet behandling af en akut skade" },
  { id: "rehab", name: "Genoptræning", min: 60, note: "Øvelser og opfølgning med din behandler" },
];
const DAYS = [
  { d: "Man", n: 17, taken: [0, 2] },
  { d: "Tirs", n: 18, taken: [1] },
  { d: "Ons", n: 19, taken: [0, 1, 3] },
  { d: "Tors", n: 20, taken: [] },
  { d: "Fre", n: 21, taken: [2, 3] },
];
const SLOTS = ["08:30", "10:00", "13:15", "15:30"];

export function ClinicBooking() {
  const [t, setT] = useState("first");
  const [day, setDay] = useState(3);
  const [slot, setSlot] = useState(1);
  const tr = TREATMENTS.find((x) => x.id === t);
  const d = DAYS[day];
  const pick = (i) => {
    setDay(i);
    if (DAYS[i].taken.includes(slot)) setSlot(SLOTS.findIndex((_, k) => !DAYS[i].taken.includes(k)));
  };
  return (
    <section className="scene bg-[#f7f6f6]">
      <div className={`${wrap} grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-14 items-center`}>
        <div>
          <SectionHead
            eyebrow="Book en tid"
            lines={["Patienten booker på", "under et minut"]}
            lead="Prøv selv: vælg behandling, dag og tid. Sådan kan booking se ud på din klinikside – ingen telefon, ingen ventetid."
            className="mb-8"
          />
          <p className="text-[12px] uppercase tracking-[0.14em] text-[#8a8a8a] mb-3">1. Behandling</p>
          <div className="flex flex-col gap-2 mb-7">
            {TREATMENTS.map((x) => (
              <button
                key={x.id}
                type="button"
                aria-pressed={t === x.id}
                onClick={() => setT(x.id)}
                className={`text-left rounded-2xl border px-4 py-3.5 transition-colors ${t === x.id ? "bg-white border-[#00a8e8]" : "bg-white/60 border-[#e4e2e2] hover:bg-white"}`}
              >
                <span className="flex justify-between gap-3 text-[15px] font-semibold text-[#1c1e1e]">
                  {x.name}
                  <span className="text-[12px] font-medium text-[#8a8a8a]">{x.min} min.</span>
                </span>
                <span className="block text-[13px] text-[#5f5f5f] mt-0.5">{x.note}</span>
              </button>
            ))}
          </div>
          <p className="text-[12px] uppercase tracking-[0.14em] text-[#8a8a8a] mb-3">2. Dag</p>
          <div className="flex flex-wrap gap-2 mb-7">
            {DAYS.map((x, i) => (
              <button
                key={x.d}
                type="button"
                aria-pressed={day === i}
                onClick={() => pick(i)}
                className={`rounded-2xl border px-4 py-2.5 text-center min-w-[64px] transition-colors ${day === i ? "bg-[#00a8e8] border-transparent text-white" : "bg-white border-[#e4e2e2] text-[#3a3a3a]"}`}
              >
                <span className="block text-[11px] opacity-80">{x.d}</span>
                <span className="block text-[17px] font-semibold leading-tight">{x.n}.</span>
              </button>
            ))}
          </div>
          <p className="text-[12px] uppercase tracking-[0.14em] text-[#8a8a8a] mb-3">3. Tid</p>
          <div className="flex flex-wrap gap-2">
            {SLOTS.map((s, i) => {
              const off = d.taken.includes(i);
              return (
                <button
                  key={s}
                  type="button"
                  disabled={off}
                  aria-pressed={slot === i && !off}
                  onClick={() => setSlot(i)}
                  className={`rounded-full border px-4 py-2 text-[13.5px] transition-colors ${
                    off ? "bg-transparent border-[#e4e2e2] text-[#b8b8b8] line-through" : slot === i ? "bg-[#1c1e1e] border-transparent text-white" : "bg-white border-[#e4e2e2] text-[#3a3a3a]"
                  }`}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </div>

        <FadeUp>
          <div className="rounded-[28px] bg-[#1c1e1e] p-6 sm:p-8 text-white relative overflow-hidden">
            <span aria-hidden className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[#00a8e8]/20 blur-[80px]" />
            <div className="relative">
              <span className="w-12 h-12 rounded-full bg-[#00a8e8] flex items-center justify-center mb-6">
                <Ico d={ICONS.check} className="w-5 h-5" />
              </span>
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#00a8e8] mb-2">Din tid er booket</p>
              <AnimatePresence mode="wait">
                <motion.div key={`${t}-${day}-${slot}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease }}>
                  <p className="text-[24px] font-semibold tracking-tight leading-tight">{tr.name}</p>
                  <p className="text-[15px] text-[#b4bdbd] mt-2">
                    {d.d}dag d. {d.n}. · kl. {SLOTS[slot] ?? "–"} · {tr.min} min.
                  </p>
                </motion.div>
              </AnimatePresence>
              <ul className="mt-7 pt-6 border-t border-white/10 flex flex-col gap-3 text-[14px] text-[#c9d3d3]">
                {["Bekræftelse og påmindelse på SMS", "Adresse og parkering i mailen", "Mulighed for at flytte tiden selv"].map((x) => (
                  <li key={x} className="flex gap-3 items-start">
                    <span className="mt-[3px] w-4 h-4 rounded-full bg-[#00a8e8]/15 flex items-center justify-center shrink-0">
                      <Ico d={ICONS.check} className="w-2.5 h-2.5 text-[#00a8e8]" />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═════════ Køreskole: vejen til kørekortet ═════════ */

const ROAD = [
  { t: "Tilmelding", icon: ICONS.pencil, ask: "Kan jeg starte nu? Hvad skal jeg medbringe?", say: "En kort tilmelding med kategori og ønsket hold. Du får svar, og eleven får et konkret næste skridt." },
  { t: "Teori", icon: ICONS.calendar, ask: "Hvornår starter næste hold, og hvor foregår det?", say: "Næste hold med dato, tid og sted. Ledige pladser vises, så eleven kan beslutte sig med det samme." },
  { t: "Manøvrebane", icon: ICONS.pin, ask: "Hvad sker der, og hvor skal jeg være?", say: "Et kort afsnit om forløbet, tid og sted – så eleven ikke skal ringe og spørge." },
  { t: "Kørsel", icon: ICONS.refresh, ask: "Hvem er min instruktør, og hvor mange timer går der?", say: "Instruktører med billede, og en realistisk forventning til forløbet – uden at lyve om tiden." },
  { t: "Køreprøve", icon: ICONS.star, ask: "Er jeg klar? Hvad nu hvis jeg dumper?", say: "Ærlige svar og et tilbud om en ny tid. Det er det, der giver anbefalinger, når det går galt – og når det går godt." },
];

export function DriveRoadmap() {
  const [i, setI] = useState(1);
  const s = ROAD[i];
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-30" />
      <div className={`relative ${wrap}`}>
        <SectionHead
          dark
          eyebrow="Vejen til kørekortet"
          lines={["Eleven ser slutmålet –", "og næste skridt"]}
          lead="Tryk på et trin. Til venstre ser du, hvad eleven (eller forælderen) spørger om. Til højre ser du, hvad din side svarer."
          className="mb-10 sm:mb-14"
        />
        <div className="relative mb-10">
          <div aria-hidden className="absolute left-[10%] right-[10%] top-6 h-[3px] rounded-full bg-white/10" />
          <motion.div
            aria-hidden
            className="absolute left-[10%] top-6 h-[3px] rounded-full bg-[#00a8e8]"
            animate={{ width: `${(i / (ROAD.length - 1)) * 80}%` }}
            transition={{ duration: 0.6, ease }}
          />
          <div className="relative grid grid-cols-5 gap-1">
            {ROAD.map((r, k) => (
              <button key={r.t} type="button" aria-pressed={k === i} onClick={() => setI(k)} className="flex flex-col items-center gap-3 group">
                <span
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-colors duration-300 ${
                    k <= i ? "bg-[#00a8e8] border-[#00a8e8] text-white" : "bg-[#1c1e1e] border-white/15 text-[#8a9696] group-hover:border-white/40"
                  } ${k === i ? "scale-110" : ""}`}
                >
                  <Ico d={r.icon} className="w-5 h-5" />
                </span>
                <span className={`text-[11.5px] sm:text-[13px] text-center leading-tight ${k === i ? "text-white font-semibold" : "text-[#8a9696]"}`}>{r.t}</span>
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35, ease }} className="grid md:grid-cols-2 gap-4">
            <div className="rounded-3xl bg-white/[0.05] border border-white/10 p-6 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a9696] mb-4">Eleven spørger</p>
              <p className="text-[19px] sm:text-[21px] font-semibold text-white leading-snug">“{s.ask}”</p>
            </div>
            <div className="rounded-3xl bg-[#f7f6f6] p-6 sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#00a8e8] mb-4">Din side svarer</p>
              <p className="text-[15.5px] text-[#2a2d2d] leading-[1.75]">{s.say}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ═════════ Fitness: ugens holdplan ═════════ */

const WEEK = {
  Man: [["06:30", "Morgenstyrke", "Alle niveauer", 4], ["17:15", "Cross Training", "Øvede", 2], ["19:00", "Yoga flow", "Alle niveauer", 9]],
  Tirs: [["07:00", "Spinning", "Alle niveauer", 6], ["16:30", "Mobilitet", "Begyndere", 11], ["18:30", "HIIT 45", "Øvede", 1]],
  Ons: [["06:30", "Morgenstyrke", "Alle niveauer", 7], ["17:30", "Boksetræning", "Alle niveauer", 5], ["19:15", "Yin yoga", "Begyndere", 12]],
  Tors: [["07:00", "Spinning", "Alle niveauer", 3], ["17:15", "Cross Training", "Øvede", 0], ["18:45", "Core & ryg", "Begyndere", 8]],
  Fre: [["06:30", "HIIT 45", "Øvede", 5], ["12:00", "Frokostpuls", "Alle niveauer", 10]],
  Lør: [["09:30", "Familietræning", "Alle niveauer", 14], ["11:00", "Yoga flow", "Alle niveauer", 6]],
};
const SPOTS = 15;

export function FitnessWeek() {
  const [day, setDay] = useState("Man");
  const [booked, setBooked] = useState(null);
  return (
    <section className="scene bg-[#f7f6f6]">
      <div className={wrap}>
        <SectionHead
          eyebrow="Ugens holdplan"
          lines={["Holdplan, der kan læses", "– og bookes – på mobilen"]}
          lead="Vælg en dag og tryk på et hold. Det er sådan en prøvetime kan bookes på din side, uden at oprette konto."
          className="mb-8"
        />
        <div className="flex flex-wrap gap-2 mb-6" role="tablist" aria-label="Ugedag">
          {Object.keys(WEEK).map((d) => (
            <button
              key={d}
              type="button"
              role="tab"
              aria-selected={day === d}
              onClick={() => setDay(d)}
              className={`rounded-full border px-5 py-2.5 text-[13.5px] font-medium transition-colors ${day === d ? "bg-[#1c1e1e] border-transparent text-white" : "bg-white border-[#e4e2e2] text-[#3a3a3a] hover:border-[#c9c9c9]"}`}
            >
              {d}
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.ul key={day} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, ease }} className="grid gap-3">
            {WEEK[day].map(([time, name, level, left]) => {
              const id = `${day}-${time}`;
              const full = left === 0;
              const on = booked === id;
              return (
                <li key={id} className="rounded-3xl bg-white border border-[#e4e2e2] p-4 sm:p-5 grid sm:grid-cols-[88px_1fr_200px_160px] gap-3 sm:gap-6 items-center">
                  <span className="text-[22px] font-semibold text-[#1c1e1e] tabular-nums">{time}</span>
                  <span>
                    <span className="block text-[16px] font-semibold text-[#1c1e1e]">{name}</span>
                    <span className="block text-[13px] text-[#5f5f5f]">{level}</span>
                  </span>
                  <span>
                    <span className="block h-1.5 rounded-full bg-[#eceaea] overflow-hidden">
                      <span className="block h-full rounded-full bg-[#00a8e8]" style={{ width: `${((SPOTS - left) / SPOTS) * 100}%` }} />
                    </span>
                    <span className="block text-[12px] text-[#5f5f5f] mt-1.5">{full ? "Fuldt – skriv dig på venteliste" : `${left} ${left === 1 ? "plads" : "pladser"} tilbage`}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => setBooked(on ? null : id)}
                    aria-pressed={on}
                    className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition-colors ${
                      on ? "bg-[#1c1e1e] text-white" : full ? "bg-[#f1efef] text-[#6a6a6a]" : "bg-[#00a8e8] text-white hover:brightness-95"
                    }`}
                  >
                    {on ? "Booket ✓" : full ? "Venteliste" : "Book prøvetime"}
                  </button>
                </li>
              );
            })}
          </motion.ul>
        </AnimatePresence>
        <p className="mt-5 text-[12.5px] text-[#8a8a8a]">Eksempel med fiktive hold. På din side vises dine egne hold, og du ændrer dem selv.</p>
      </div>
    </section>
  );
}

/* ═════════ Rengøring: prisberegner ═════════ */

const FREQ = [
  { id: "once", label: "Én gang", f: 1.25 },
  { id: "bi", label: "Hver 14. dag", f: 1 },
  { id: "week", label: "Hver uge", f: 0.9 },
];
const ADDONS = [
  { id: "win", label: "Vinduer", p: 280 },
  { id: "oven", label: "Ovn og emhætte", p: 220 },
  { id: "fridge", label: "Køleskab", p: 160 },
];
const RATE = 330; // kr pr. time (eksempel)

export function CleanQuote() {
  const [m2, setM2] = useState(100);
  const [fq, setFq] = useState("bi");
  const [add, setAdd] = useState([]);
  const f = FREQ.find((x) => x.id === fq);
  const hours = Math.max(1.5, m2 / 35);
  const base = hours * RATE * f.f;
  const extra = ADDONS.filter((a) => add.includes(a.id)).reduce((s, a) => s + a.p, 0);
  const low = base + extra;
  const high = low * 1.15;
  return (
    <section className="scene relative overflow-hidden bg-[#242828]">
      <div className={`${wrap} grid lg:grid-cols-2 gap-5`}>
        <div className="lg:col-span-2">
          <SectionHead
            dark
            eyebrow="Prisberegner"
            lines={["Kunden får et overslag", "på 30 sekunder"]}
            lead="Skru på tallene. En beregner på din side giver kunden en pris at forholde sig til – og dig henvendelser, der allerede ved, hvad det koster."
            className="mb-5"
          />
        </div>
        <div className="rounded-3xl bg-white/[0.05] border border-white/10 p-6 sm:p-8 flex flex-col gap-8">
          <div>
            <div className="flex justify-between items-baseline mb-3">
              <label htmlFor="m2" className="text-[14px] text-[#c9d3d3]">Boligens størrelse</label>
              <span className="text-[22px] font-semibold text-white tabular-nums">{m2} m²</span>
            </div>
            <input id="m2" type="range" min={40} max={250} step={5} value={m2} onChange={(e) => setM2(+e.target.value)} className="w-full accent-[#00a8e8]" />
          </div>
          <div>
            <p className="text-[14px] text-[#c9d3d3] mb-3">Hvor ofte?</p>
            <div className="flex flex-wrap gap-2">
              {FREQ.map((x) => (
                <button
                  key={x.id}
                  type="button"
                  aria-pressed={fq === x.id}
                  onClick={() => setFq(x.id)}
                  className={`rounded-full border px-4 py-2.5 text-[13.5px] transition-colors ${fq === x.id ? "bg-[#00a8e8] border-transparent text-white" : "bg-transparent border-white/15 text-[#c9d3d3] hover:border-white/40"}`}
                >
                  {x.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[14px] text-[#c9d3d3] mb-3">Tilvalg</p>
            <div className="flex flex-wrap gap-2">
              {ADDONS.map((a) => {
                const on = add.includes(a.id);
                return (
                  <button
                    key={a.id}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setAdd((s) => (on ? s.filter((x) => x !== a.id) : [...s, a.id]))}
                    className={`rounded-full border px-4 py-2.5 text-[13.5px] transition-colors ${on ? "bg-white text-[#1c1e1e] border-transparent" : "bg-transparent border-white/15 text-[#c9d3d3] hover:border-white/40"}`}
                  >
                    {on ? "✓ " : "+ "}
                    {a.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="rounded-3xl bg-[#f7f6f6] p-6 sm:p-8 flex flex-col">
          <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a8a8a]">Overslag {fq === "once" ? "for rengøringen" : "pr. gang"}</p>
          <p className="text-[clamp(36px,5vw,58px)] font-semibold text-[#1c1e1e] tracking-tight leading-none mt-3 tabular-nums">
            {fmt(low)}–{fmt(high)} kr
          </p>
          <p className="text-[14px] text-[#5a5a5a] mt-3">Ca. {hours.toFixed(1).replace(".", ",")} timer for {m2} m².</p>
          <p className="mt-auto pt-8 text-[13.5px] text-[#5a5a5a] leading-[1.7]">
            Eksempel med fiktive priser. På din side bruger beregneren dine egne timepriser, og kunden sender forespørgslen direkte til dig.
          </p>
          <span className="mt-5 inline-flex self-start rounded-full bg-[#00a8e8] text-white px-5 py-2.5 text-[13px] font-semibold">Send forespørgsel →</span>
        </div>
      </div>
    </section>
  );
}

/* ═════════ Værksted: fra symptom til tid ═════════ */

const SYMPTOMS = [
  { s: "Lyd fra bremserne", svc: "Bremsetjek", urgency: "Book snart", tone: "warn", text: "Vi måler klodser og skiver og siger til, hvad der skal skiftes – før du får et større problem." },
  { s: "Lampe i instrumentbrættet", svc: "Fejlkodeudlæsning", urgency: "Book i denne uge", tone: "mid", text: "Vi læser fejlkoden og forklarer, hvad lampen betyder, og om bilen kan køre videre." },
  { s: "Syn skal fornyes", svc: "Syn med forhåndstjek", urgency: "Kan planlægges", tone: "ok", text: "Vi tjekker de punkter, der oftest giver anmærkning, før bilen kører til syn." },
  { s: "Dækskift til vinter", svc: "Dækskift og dækhotel", urgency: "Kan planlægges", tone: "ok", text: "Skift på dagen, med afbalancering og trykkontrol. Dækhotel, hvis du ikke vil have dem i garagen." },
  { s: "Bilen starter dårligt", svc: "Batteri og start", urgency: "Book snart", tone: "warn", text: "Vi tester batteri og generator, så du ikke står stille på den første kolde morgen." },
  { s: "Service-lampen lyser", svc: "Serviceeftersyn", urgency: "Kan planlægges", tone: "ok", text: "Eftersyn efter producentens program, så garantien bevares. Du får et overblik over, hvad der blev lavet." },
];
const TONE = { warn: "bg-[#1c1e1e] text-white", mid: "bg-[#00a8e8] text-white", ok: "bg-white text-[#1c1e1e] border border-[#e4e2e2]" };

export function CarSymptoms() {
  const [i, setI] = useState(0);
  const x = SYMPTOMS[i];
  return (
    <section className="scene bg-[#e4f0f7]">
      <div className={`${wrap} grid lg:grid-cols-2 gap-10 lg:gap-14`}>
        <div>
          <SectionHead
            eyebrow="Fra symptom til tid"
            lines={["Bilejeren siger det", "på sin måde"]}
            lead="Siden oversætter et problem til en service. Vælg et symptom og se, hvad der står på siden – og hvordan kunden kommer videre."
            className="mb-8"
          />
          <div className="flex flex-col gap-2">
            {SYMPTOMS.map((y, k) => (
              <button
                key={y.s}
                type="button"
                aria-pressed={k === i}
                onClick={() => setI(k)}
                className={`flex items-center justify-between gap-3 text-left rounded-2xl border px-4 py-3.5 text-[15px] transition-colors ${k === i ? "bg-white border-[#00a8e8] text-[#1c1e1e] font-semibold" : "bg-white/60 border-transparent text-[#3a3a3a] hover:bg-white"}`}
              >
                {y.s}
                <Ico d="M9 6l6 6-6 6" className={`w-4 h-4 shrink-0 ${k === i ? "text-[#00a8e8]" : "text-[#b4bdbd]"}`} />
              </button>
            ))}
          </div>
        </div>
        <FadeUp className="lg:sticky lg:top-28 self-start">
          <AnimatePresence mode="wait">
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease }} className="rounded-[28px] bg-white border border-[#e4e2e2] p-6 sm:p-8">
              <span className={`inline-block rounded-full px-3 py-1.5 text-[11.5px] font-semibold mb-5 ${TONE[x.tone]}`}>{x.urgency}</span>
              <p className="text-[12px] uppercase tracking-[0.16em] text-[#8a8a8a]">Service på siden</p>
              <p className="text-[26px] font-semibold text-[#1c1e1e] tracking-tight leading-tight mt-1.5 mb-4">{x.svc}</p>
              <p className="text-[15.5px] text-[#4a4a4a] leading-[1.75] mb-7">{x.text}</p>
              <span className="inline-flex rounded-full bg-[#00a8e8] text-white px-5 py-2.5 text-[13px] font-semibold">Book tid til {x.svc.toLowerCase()} →</span>
            </motion.div>
          </AnimatePresence>
        </FadeUp>
      </div>
    </section>
  );
}

/* ═════════ Rådgivere: tre indgange ═════════ */

const SEGMENTS = [
  {
    id: "private",
    label: "Privat",
    h: "Hjælp til dig, der skal tage en stor beslutning",
    pts: ["Ingen jargon – kun klare svar", "Fast pris, før vi går i gang", "Første samtale er uforpligtende"],
    cta: "Book en gratis samtale",
  },
  {
    id: "self",
    label: "Selvstændig",
    h: "Så du kan koncentrere dig om at drive din forretning",
    pts: ["Overblik over det, der skal gøres – og hvornår", "Fast kontaktperson, der kender din forretning", "Svar inden for én hverdag"],
    cta: "Book en kort samtale",
  },
  {
    id: "company",
    label: "Virksomhed",
    h: "Sparring og løsninger til virksomheder i vækst",
    pts: ["Et forløb med klare mål og tidsplan", "Aftaler, der kan skaleres med jer", "Referencer fra jeres branche"],
    cta: "Bed om et oplæg",
  },
];

export function AdvisorSegments() {
  const [k, setK] = useState("self");
  const s = SEGMENTS.find((x) => x.id === k);
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-30" />
      <div className={`relative ${wrap}`}>
        <SectionHead
          dark
          eyebrow="Tre indgange"
          lines={["Samme rådgiver –", "forskellig besked"]}
          lead="Hver målgruppe får sin egen indgang med sin egen tekst. Vælg en, og se, hvordan siden taler til dem."
          className="mb-8"
        />
        <div className="inline-flex rounded-full bg-white/[0.06] border border-white/10 p-1 mb-8">
          {SEGMENTS.map((x) => (
            <button key={x.id} type="button" aria-pressed={k === x.id} onClick={() => setK(x.id)} className="relative rounded-full px-5 py-2.5 text-[13.5px] font-medium" style={{ color: k === x.id ? "#ffffff" : "#b4bdbd" }}>
              {k === x.id && <motion.span layoutId="adv-pill" className="absolute inset-0 rounded-full bg-[#00a8e8]" transition={{ duration: 0.4, ease }} />}
              <span className="relative">{x.label}</span>
            </button>
          ))}
        </div>
        <div className="rounded-[28px] overflow-hidden bg-white max-w-3xl">
          <div className="flex items-center gap-1.5 px-5 py-3 bg-[#f1efef] border-b border-[#e4e2e2]" aria-hidden>
            <span className="w-2.5 h-2.5 rounded-full bg-[#d6d4d4]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#d6d4d4]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#d6d4d4]" />
            <span className="ml-4 flex-1 rounded-full bg-white px-4 py-1 text-[11.5px] text-[#8a8a8a]">dinraadgiver.dk/{s.id === "private" ? "privat" : s.id === "self" ? "selvstaendig" : "virksomhed"}</span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={k} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3, ease }} className="p-6 sm:p-10">
              <p className="text-[clamp(22px,2.6vw,30px)] font-semibold text-[#1c1e1e] tracking-tight leading-[1.15] max-w-[24ch]">{s.h}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {s.pts.map((p) => (
                  <li key={p} className="flex gap-3 items-start text-[15.5px] text-[#3a3a3a]">
                    <span className="mt-[3px] w-[18px] h-[18px] rounded-full bg-[#00a8e8]/15 flex items-center justify-center shrink-0">
                      <Ico d={ICONS.check} className="w-2.5 h-2.5 text-[#00a8e8]" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <span className="mt-8 inline-flex rounded-full bg-[#00a8e8] text-white px-5 py-2.5 text-[13px] font-semibold">{s.cta} →</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
