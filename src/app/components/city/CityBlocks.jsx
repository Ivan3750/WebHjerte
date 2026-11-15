"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FadeUp } from "../home/fx/Reveal";

const ease = [0.16, 1, 0.3, 1];
const fmt = (n) => n.toLocaleString("da-DK");
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

/* ───────────── 3. Google-simulator ───────────── */
const RANK = [6, 5, 4, 2, 1]; // plads ved 0–4 forbedringer (illustration)
const selectCls =
  "w-full bg-[#1c1e1e] text-[15px] text-white border border-white/10 rounded-xl px-4 py-3.5 outline-none focus-visible:ring-2 focus-visible:ring-[#00a8e8]/40";

export function SerpSimulator({ branches, districts, improvements, cityName }) {
  const reduce = useReducedMotion();
  const [branch, setBranch] = useState(branches[0]);
  const [district, setDistrict] = useState(districts[0]);
  const [on, setOn] = useState({});
  const count = improvements.filter((i) => on[i.key]).length;
  const rank = RANK[count] ?? 6;
  const query = `${branch} ${district}`;

  const competitors = ["A", "B", "C", "D", "E"].map((l) => ({
    id: `c${l}`,
    title: `${cap(branch)} ${cityName} – Konkurrent ${l}`,
    url: `konkurrent-${l.toLowerCase()}.dk`,
    snippet: `${cap(branch)} i ${district}. Kontakt os for mere information om vores ydelser og priser.`,
  }));
  const you = {
    id: "you",
    title: on.district ? `${cap(branch)} ${district} – Din Virksomhed` : "Velkommen | Din Virksomhed",
    url: "dinvirksomhed.dk",
    snippet: on.action
      ? `Se prisen med det samme og ring med ét tryk. ${cap(branch)} i ${district} – svar samme dag.`
      : `Velkommen til vores hjemmeside. Læs mere om os og vores ydelser.`,
    you: true,
  };
  const rows = [];
  let ci = 0;
  for (let p = 1; p <= 6; p++) rows.push(p === rank ? you : competitors[ci++]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr] gap-4 lg:gap-6">
      {/* Styring */}
      <div className="rounded-3xl bg-[#242828] border border-white/10 p-6 sm:p-8 flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="block text-[13px] text-[#8a9696] mb-2">Din branche</span>
            <select value={branch} onChange={(e) => setBranch(e.target.value)} className={selectCls}>
              {branches.map((b) => (
                <option key={b} value={b}>{cap(b)}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="block text-[13px] text-[#8a9696] mb-2">Din bydel</span>
            <select value={district} onChange={(e) => setDistrict(e.target.value)} className={selectCls}>
              {districts.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </label>
        </div>

        <div>
          <p className="text-[15px] font-semibold text-white mb-3">Slå forbedringer til</p>
          <div className="flex flex-col gap-2.5">
            {improvements.map((imp) => {
              const active = !!on[imp.key];
              return (
                <button
                  key={imp.key}
                  type="button"
                  role="switch"
                  aria-checked={active}
                  onClick={() => setOn((o) => ({ ...o, [imp.key]: !o[imp.key] }))}
                  className={`text-left rounded-2xl border px-4 py-3.5 flex items-start gap-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00a8e8] ${
                    active ? "bg-[#00a8e8]/15 border-transparent" : "bg-[#1c1e1e] border-white/10 hover:bg-[#262a2a]"
                  }`}
                >
                  <span className={`mt-1 shrink-0 w-10 h-6 rounded-full relative transition-colors ${active ? "bg-[#00a8e8]" : "bg-[#3a4040]"}`}>
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${active ? "left-5" : "left-1"}`} />
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold text-white">{imp.title}</span>
                    <span className="block text-[13.5px] text-[#8a9696] leading-snug mt-0.5">{imp.text}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Resultat */}
      <div className="rounded-3xl bg-white border border-[#e8e6e6] overflow-hidden flex flex-col">
        <div className="px-5 sm:px-7 py-4 border-b border-[#e8e6e6] flex items-center gap-4">
          <div className="flex-1 min-w-0 rounded-full bg-[#f1f0f0] px-5 py-2.5 text-[15px] text-[#1c1e1e] truncate">{query}</div>
          <div className="shrink-0 text-right">
            <p className="text-[12px] text-[#7a7a7a] leading-none">Din placering</p>
            <p className="text-[26px] font-semibold text-[#00a8e8] leading-none mt-1 tabular-nums">#{rank}</p>
          </div>
        </div>

        <div className="p-3 sm:p-5 flex flex-col gap-2 flex-1">
          {rows.map((r, i) => (
            <motion.div
              key={r.id}
              layout={!reduce}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={`rounded-2xl px-4 py-3.5 flex gap-4 ${r.you ? "bg-[#00a8e8]/10" : ""}`}
            >
              <span className={`mt-0.5 shrink-0 w-6 text-[14px] font-semibold tabular-nums ${r.you ? "text-[#00a8e8]" : "text-[#9a9a9a]"}`}>{i + 1}</span>
              <div className="min-w-0">
                <p className="text-[12.5px] text-[#6a6a6a] truncate">{r.url}</p>
                <p className={`text-[16px] leading-snug ${r.you ? "font-semibold text-[#1c1e1e]" : "text-[#1a5fb4]"}`}>{r.title}</p>
                <p className="text-[14px] text-[#4a4a4a] leading-[1.55] mt-0.5">{r.snippet}</p>
                {r.you && (on.reviews || on.speed) && (
                  <p className="text-[13px] text-[#4a4a4a] mt-1.5">
                    {on.reviews && <span className="mr-4"><span className="text-[#e0a000]">★★★★★</span> 4,9 · anmeldelser (eksempel)</span>}
                    {on.speed && <span>Indlæses på under 1 sek.</span>}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="px-5 sm:px-7 pb-5 text-[12.5px] text-[#7a7a7a] leading-snug">
          Illustration af, hvordan forbedringerne typisk virker sammen – ikke en garanti for en bestemt placering.
        </p>
      </div>
    </div>
  );
}

/* ───────────── 6. Hjemtjent-beregner ───────────── */
const PACKS = [
  { name: "Landingside", price: 2500 },
  { name: "Basis", price: 4500 },
  { name: "Standard", price: 8500 },
  { name: "Skræddersyet", price: 14000, from: true },
];

export function BreakEven() {
  const [value, setValue] = useState(3000);
  const [perMonth, setPerMonth] = useState(1);
  const [pack, setPack] = useState(1);
  const p = PACKS[pack];
  const customers = Math.max(1, Math.ceil(p.price / value));
  const months = Math.max(1, Math.ceil(customers / perMonth));
  const yearRevenue = value * perMonth * 12;
  const share = Math.min(100, Math.round((p.price / yearRevenue) * 100));

  const slider = "w-full accent-[#00a8e8]";
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 lg:gap-6">
      <div className="rounded-3xl bg-white border border-[#e8e6e6] p-6 sm:p-9 flex flex-col gap-8">
        <div>
          <div className="flex items-baseline justify-between gap-4 mb-3">
            <label htmlFor="be-value" className="text-[15px] font-semibold text-[#1c1e1e]">Hvad er en ny kunde værd for dig?</label>
            <span className="text-[22px] font-semibold text-[#00a8e8] tabular-nums whitespace-nowrap">{fmt(value)} kr</span>
          </div>
          <input id="be-value" type="range" min={500} max={30000} step={500} value={value} onChange={(e) => setValue(+e.target.value)} className={slider} />
        </div>

        <div>
          <div className="flex items-baseline justify-between gap-4 mb-3">
            <label htmlFor="be-month" className="text-[15px] font-semibold text-[#1c1e1e]">Nye kunder om måneden fra siden</label>
            <span className="text-[22px] font-semibold text-[#00a8e8] tabular-nums">{perMonth}</span>
          </div>
          <input id="be-month" type="range" min={1} max={10} step={1} value={perMonth} onChange={(e) => setPerMonth(+e.target.value)} className={slider} />
        </div>

        <div>
          <p className="text-[15px] font-semibold text-[#1c1e1e] mb-3">Pakke</p>
          <div className="grid grid-cols-2 gap-2.5">
            {PACKS.map((x, i) => (
              <button
                key={x.name}
                type="button"
                aria-pressed={pack === i}
                onClick={() => setPack(i)}
                className={`rounded-2xl px-4 py-3 text-left border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00a8e8] ${
                  pack === i ? "bg-[#00a8e8] border-transparent text-white" : "bg-[#f7f6f6] border-[#e8e6e6] text-[#1c1e1e] hover:bg-[#efeeee]"
                }`}
              >
                <span className="block text-[14px] font-semibold">{x.name}</span>
                <span className={`block text-[13px] ${pack === i ? "text-white/90" : "text-[#6a6a6a]"}`}>{x.from ? "fra " : ""}{fmt(x.price)} kr</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div aria-live="polite" className="rounded-3xl bg-[#1c1e1e] p-6 sm:p-9 flex flex-col justify-between gap-8">
        <div>
          <p className="text-[14px] text-[#8a9696]">Siden har betalt sig hjem efter</p>
          <p className="text-[clamp(48px,6vw,76px)] font-semibold leading-none tracking-tight text-white mt-3 tabular-nums">
            {customers} <span className="text-[22px] font-normal text-[#b4bdbd]">{customers === 1 ? "ny kunde" : "nye kunder"}</span>
          </p>
          <p className="text-[16px] text-[#b4bdbd] mt-4 leading-snug">
            Med {perMonth} ny kunde{perMonth > 1 ? "r" : ""} om måneden er det ca. <span className="text-white font-semibold">{months} {months === 1 ? "måned" : "måneder"}</span>.
          </p>
        </div>

        <div>
          <div className="flex h-4 w-full overflow-hidden rounded-full bg-[#00a8e8]" role="img" aria-label={`Siden udgør ${share} procent af første års omsætning fra nye kunder`}>
            <motion.div className="h-full bg-white/90" initial={false} animate={{ width: `${share}%` }} transition={{ type: "spring", stiffness: 140, damping: 22 }} />
          </div>
          <p className="text-[14px] text-[#b4bdbd] mt-3 leading-[1.65]">
            Første år giver de nye kunder ca. <span className="text-white font-semibold">{fmt(yearRevenue)} kr</span>. Siden koster {fmt(p.price)} kr – det er{" "}
            <span className="text-white font-semibold">{share} %</span> af det.
          </p>
          <p className="text-[12.5px] text-[#8a9696] mt-3 leading-snug">Regneeksempel – ikke en garanti for et bestemt antal kunder.</p>
        </div>
      </div>
    </div>
  );
}

/* ───────────── 8. Forløb som zig-zag ───────────── */
export function ZigZag({ steps }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      <div aria-hidden className="absolute left-5 lg:left-1/2 top-2 bottom-2 w-px bg-[#d8d6d6] lg:-translate-x-1/2" />
      <motion.div
        aria-hidden
        className="absolute left-5 lg:left-1/2 top-2 bottom-2 w-px bg-[#00a8e8] origin-top lg:-translate-x-1/2"
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 2, ease }}
      />
      <div className="flex flex-col gap-8 lg:gap-12">
        {steps.map((s, i) => {
          const right = i % 2 === 1;
          return (
            <motion.div
              key={s.title}
              className="relative grid grid-cols-1 lg:grid-cols-2 lg:gap-24 pl-14 lg:pl-0"
              initial={reduce ? false : { opacity: 0, x: right ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, ease }}
            >
              <span className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 top-4 w-10 h-10 rounded-full bg-[#00a8e8] text-white text-[14px] font-semibold flex items-center justify-center z-10">{i + 1}</span>
              <div className={`rounded-3xl bg-white border border-[#e8e6e6] p-6 sm:p-8 ${right ? "lg:col-start-2" : "lg:col-start-1"}`}>
                <p className="text-[13px] font-semibold text-[#00a8e8] mb-1.5">{s.when}</p>
                <p className="text-[clamp(20px,2vw,24px)] font-semibold text-[#1c1e1e] leading-snug mb-2">{s.title}</p>
                <p className="text-[15px] text-[#4a4a4a] leading-[1.7]">{s.text}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
