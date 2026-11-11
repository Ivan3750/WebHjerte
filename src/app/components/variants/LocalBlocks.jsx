"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import SectionHead from "../ui/SectionHead";
import { FadeUp } from "../home/fx/Reveal";
import { SkagenScene, VindmoellerScene } from "../seo/scenes/Jylland";
import { IsbjergetScene } from "../seo/scenes/Aarhus";
import { HorsensFjordScene } from "../seo/scenes/Horsens";
import { BridgeScene } from "../seo/CityScene";

const ease = [0.16, 1, 0.3, 1];

/** Et byscene-kort i fuld bredde med en kort tekst ved siden af. */
function SceneBand({ bg, dark = true, eyebrow, lines, lead, scene, chips }) {
  return (
    <section className="scene relative overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead dark={dark} eyebrow={eyebrow} lines={lines} lead={lead} className="mb-10" />
        <FadeUp>{scene}</FadeUp>
        {chips && (
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className={`rounded-full px-4 py-2 text-[13px] border ${dark ? "border-white/15 text-[#c7d0d0]" : "border-black/10 bg-white text-[#3a3d3d]"}`}>
                {c}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

/* ═════════ Jylland: fire regioner ═════════ */

const REGIONS = [
  { name: "Østjylland", cities: ["Horsens", "Aarhus", "Odder", "Skanderborg", "Ebeltoft", "Grenaa"], note: "Størst konkurrence om lokale søgninger.", scene: "skagen" },
  { name: "Midtjylland", cities: ["Silkeborg", "Viborg", "Herning", "Ikast", "Randers", "Skive"], note: "Mange mangler en moderne, mobilvenlig side.", scene: "vind" },
  { name: "Trekanten & Syd", cities: ["Vejle", "Fredericia", "Kolding", "Middelfart", "Esbjerg"], note: "Kunder på tværs af kommunegrænser.", scene: "skagen" },
  { name: "Vest & Nord", cities: ["Ringkøbing", "Holstebro", "Thisted", "Hjørring", "Aalborg", "Frederikshavn"], note: "Online samarbejde – ingen kørsel at betale for.", scene: "vind" },
];

export function JyllandRegions() {
  const [i, setI] = useState(0);
  const r = REGIONS[i];
  return (
    <section className="scene bg-[#eef6f2]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead eyebrow="Fra Skagen til Kolding" lines={["Vælg din del", "af Jylland"]} className="mb-8" />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {REGIONS.map((x, k) => (
            <button
              key={x.name}
              type="button"
              aria-pressed={k === i}
              onClick={() => setI(k)}
              className={`rounded-2xl px-4 py-3.5 text-left text-[14px] font-semibold transition-colors ${k === i ? "bg-[#1f7a56] text-white" : "bg-white text-[#24423a] border border-[#d3e6dc] hover:border-[#1f7a56]"}`}
            >
              {x.name}
              <span className={`block text-[11.5px] font-normal mt-0.5 ${k === i ? "text-white/75" : "text-[#6a8a80]"}`}>{x.cities.length} byer</span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div key={r.name} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease }}>
            <p className="text-[16px] text-[#24423a] mb-4">{r.note}</p>
            <div className="flex flex-wrap gap-2">
              {r.cities.map((c, k) => (
                <motion.span key={c} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: k * 0.05 }} className="rounded-full bg-white border border-[#d3e6dc] px-4 py-2 text-[13.5px] text-[#24423a]">
                  📍 {c}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export function JyllandScenes() {
  return (
    <SceneBand
      bg="#152026"
      eyebrow="Jylland"
      lines={["Fra fyrtårnet i Skagen", "til vindmøllerne mod vest"]}
      scene={
        <div className="grid gap-4">
          <SkagenScene />
          <VindmoellerScene />
        </div>
      }
    />
  );
}

/* ═════════ Aarhus: du klatrer i Google ═════════ */

const RIVALS = ["Salon Nord", "Klip & Co.", "Studio Hår", "Frisøren i C", "Salon Øst", "Hårhuset"];

export function AarhusRank() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-120px" });
  const [pos, setPos] = useState(6);
  useEffect(() => {
    if (!inView) return;
    if (pos <= 1) return;
    const t = setTimeout(() => setPos((p) => p - 1), 650);
    return () => clearTimeout(t);
  }, [inView, pos]);
  const list = [...RIVALS];
  list.splice(pos, 0, "you");
  return (
    <section ref={ref} className="scene bg-[#f1f3f8]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-16 items-center">
        <SectionHead
          eyebrow="Stor by, hård konkurrence"
          lines={["I Aarhus er det", "plads 2 eller", "ingen opkald"]}
          lead="Søger kunden “frisør Aarhus C”, er der hundredvis af svar. Siden skal være hurtigere, tydeligere og mere lokal end de andre."
          className=""
        />
        <div className="rounded-3xl bg-white border border-[#dfe3ec] p-4 sm:p-5">
          <div className="rounded-full bg-[#f1f3f8] px-4 py-2.5 text-[13px] text-[#5a6070] mb-4">🔍 frisør Aarhus C</div>
          <div className="flex flex-col gap-2">
            {list.map((n, k) =>
              n === "you" ? (
                <motion.div layout key="you" transition={{ duration: 0.5, ease }} className="rounded-2xl bg-[#1c1e1e] text-white px-4 py-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#00a8e8] text-[#10181a] text-[12px] font-semibold flex items-center justify-center">{k + 1}</span>
                  <span className="text-[14px] font-semibold">Din virksomhed</span>
                  <span className="ml-auto text-[11px] text-[#f0a63a]">★★★★★</span>
                </motion.div>
              ) : (
                <motion.div layout key={n} transition={{ duration: 0.5, ease }} className="rounded-2xl border border-[#eceff4] px-4 py-3 flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#f1f3f8] text-[#7a8090] text-[12px] flex items-center justify-center">{k + 1}</span>
                  <span className="text-[13.5px] text-[#5a6070]">{n}</span>
                </motion.div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AarhusScene() {
  return <SceneBand bg="#161a22" eyebrow="Aarhus Ø" lines={["Aarhus vokser ud", "mod vandet – og nettet"]} scene={<IsbjergetScene />} />;
}

/* ═════════ Vejle ═════════ */

export function VejleScene() {
  return (
    <SceneBand
      bg="#13202a"
      eyebrow="Vejle Fjord"
      lines={["25 minutter fra Horsens –", "over broen og ind til byen"]}
      scene={<BridgeScene />}
      chips={["Børkop", "Give", "Egtved", "Jelling", "Bredsten", "Fredericia", "Middelfart", "Kolding", "Christiansfeld"]}
    />
  );
}

/* ═════════ WordPress Horsens ═════════ */

export function HorsensScene() {
  return (
    <SceneBand
      bg="#14212a"
      eyebrow="Lokalt i Horsens"
      lines={["Din WordPress-udvikler", "sidder ved fjorden"]}
      lead="Brug for et møde? Jeg kan mødes i Horsens – resten klarer vi online."
      scene={<HorsensFjordScene />}
    />
  );
}
