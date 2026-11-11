"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHead from "../ui/SectionHead";
import { FadeUp } from "../home/fx/Reveal";
import { Panel, VisualReport, ICONS } from "../illustrations/Visuals";

const Ico = ({ d, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={d} />
  </svg>
);

/** Status-kort til hero: siden er oppe, backup taget, alt opdateret. */
export function CareStatus() {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#242828] p-2.5">
      <Panel dark h="h-[260px]">
        <VisualReport />
      </Panel>
      <div className="grid grid-cols-3 gap-2 p-2.5 pt-4">
        {[
          ["Overvågning", "Døgnet rundt"],
          ["Backup", "Dagligt"],
          ["Binding", "Ingen"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-white/[0.04] px-3 py-2.5">
            <p className="text-[10.5px] text-[#7f8c8c]">{k}</p>
            <p className="text-[14px] font-semibold text-white">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ───────────── En måned med din hjemmeside ───────────── */

const KINDS = {
  backup: { label: "Backup", color: "#00a8e8", icon: ICONS.box, text: "Hver nat tages en kopi af hele siden. Går noget galt, er den tilbage på minutter." },
  update: { label: "Opdateringer", color: "#1c1e1e", icon: ICONS.refresh, text: "System og plugins opdateres løbende – og testes, så intet går i stykker." },
  fix: { label: "Dine rettelser", color: "#8a9696", icon: ICONS.pencil, text: "Nye priser, billeder eller åbningstider? Send en mail, så retter jeg det (Standard og Pro)." },
  report: { label: "Rapport", color: "#0a5a7a", icon: ICONS.star, text: "Sidst på måneden får du en kort status over, hvad der er lavet (Standard og Pro)." },
};

const dayKinds = (d) => {
  const k = ["backup"];
  if (d % 7 === 2) k.push("update");
  if (d === 11 || d === 19) k.push("fix");
  if (d === 30) k.push("report");
  return k;
};

export function CareMonth() {
  const [focus, setFocus] = useState("update");
  const f = KINDS[focus];
  return (
    <section className="scene bg-[#f7f6f6]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead
          eyebrow="Mens du passer din forretning"
          lines={["Det sker der med din", "hjemmeside på en måned"]}
          lead="Vælg en type opgave og se, hvornår den bliver gjort."
          className="mb-10 sm:mb-14"
        />
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-4">
          <FadeUp className="rounded-3xl bg-white border border-[#e8e6e6] p-4 sm:p-7">
            <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
              {["Ma", "Ti", "On", "To", "Fr", "Lø", "Sø"].map((d) => (
                <span key={d} className="text-center text-[10.5px] uppercase tracking-[0.1em] text-[#9a9a9a] pb-1">
                  {d}
                </span>
              ))}
              {Array.from({ length: 30 }, (_, i) => i + 1).map((d) => {
                const kinds = dayKinds(d);
                const hit = kinds.includes(focus);
                return (
                  <motion.div
                    key={d}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: d * 0.015, duration: 0.3 }}
                    className="aspect-square rounded-lg sm:rounded-xl border flex flex-col items-center justify-center gap-1 transition-colors duration-300"
                    style={{
                      borderColor: hit ? f.color : "#eceaea",
                      backgroundColor: hit ? `${f.color}1f` : "#fbfbfb",
                    }}
                  >
                    <span className={`text-[10px] sm:text-[12px] tabular-nums ${hit ? "text-[#1c1e1e] font-semibold" : "text-[#9a9a9a]"}`}>{d}</span>
                    <span className="flex gap-0.5">
                      {kinds.map((k) => (
                        <span key={k} className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full" style={{ backgroundColor: KINDS[k].color }} />
                      ))}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </FadeUp>

          <div className="flex flex-col gap-2">
            {Object.entries(KINDS).map(([key, k]) => {
              const on = key === focus;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setFocus(key)}
                  onMouseEnter={() => setFocus(key)}
                  aria-pressed={on}
                  className={`text-left rounded-2xl border px-5 py-4 flex gap-4 transition-all duration-300 ${
                    on ? "bg-white border-transparent shadow-[0_18px_40px_-28px_rgba(28,30,30,0.35)]" : "bg-transparent border-[#e4e2e2] hover:bg-white/60"
                  }`}
                  style={on ? { boxShadow: `inset 0 0 0 1.5px ${k.color}` } : undefined}
                >
                  <span className="w-9 h-9 shrink-0 rounded-xl flex items-center justify-center text-white" style={{ backgroundColor: k.color }}>
                    <Ico d={k.icon} />
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold text-[#1c1e1e]">{k.label}</span>
                    <span className={`block text-[13.5px] text-[#5a5d5d] leading-[1.6] overflow-hidden transition-all duration-500 ${on ? "max-h-24 mt-1 opacity-100" : "max-h-0 opacity-0"}`}>
                      {k.text}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── Hvad koster det om året – visuelt ───────────── */

const COSTS = [
  { label: "Domæne", value: "100–200 kr/år", w: 8, color: "#93a0a0" },
  { label: "Hosting", value: "0–500 kr/md", w: 22, color: "#0a5a7a" },
  { label: "Vedligehold hos mig", value: "249–799 kr/md · hosting med", w: 70, color: "#00a8e8" },
];

export function CareCosts() {
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-40" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead dark eyebrow="Løbende udgifter" lines={["Det koster en hjemmeside", "at holde kørende"]} lead="Vejledende priser. I dit tilbud ser du kun de poster, der gælder for dig." className="mb-10 sm:mb-14" />
        <div className="flex h-5 rounded-full overflow-hidden mb-8">
          {COSTS.map((c, i) => (
            <motion.span
              key={c.label}
              initial={{ width: 0 }}
              whileInView={{ width: `${c.w}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{ backgroundColor: c.color }}
              className="h-full"
            />
          ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          {COSTS.map((c) => (
            <FadeUp key={c.label}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <p className="flex items-center gap-2 text-[13px] text-[#a6b1b1] mb-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                  {c.label}
                </p>
                <p className="text-[17px] font-semibold text-white">{c.value}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
