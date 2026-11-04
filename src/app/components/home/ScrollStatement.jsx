"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Ord markeret med `hl` får blå accent, når de "tændes".
const words = [
  { t: "Jeg" }, { t: "bygger" }, { t: "hjemmesider," }, { t: "der" }, { t: "får" },
  { t: "din" }, { t: "virksomhed" }, { t: "til" }, { t: "at" }, { t: "se" },
  { t: "professionel", hl: true }, { t: "ud" }, { t: "–" }, { t: "og" },
  { t: "som" }, { t: "faktisk" }, { t: "giver" }, { t: "dig" },
  { t: "nye", hl: true }, { t: "kunder.", hl: true },
  { t: "Fast" }, { t: "pris." }, { t: "Ingen" }, { t: "mellemled." },
  { t: "Ingen" }, { t: "overraskelser." },
];

function Word({ w, i, total, progress, reduce }) {
  const start = (i / total) * 0.8;
  const end = start + 0.8 / total + 0.06;
  const opacity = useTransform(progress, [start, end], [0.14, 1]);
  const y = useTransform(progress, [start, end], [8, 0]);
  return (
    <motion.span
      style={reduce ? undefined : { opacity, y }}
      className={`inline-block mr-[0.28em] ${w.hl ? "text-gradient-blue" : "text-white"}`}
    >
      {w.t}
    </motion.span>
  );
}

export default function ScrollStatement() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });

  return (
    <section ref={ref} className="scene bg-[#1c1e1e] relative">
      <div className="max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 py-28 sm:py-40">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#7a8787] mb-8 flex items-center gap-3">
          <span className="w-8 h-px bg-[#00a8e8]" />
          Sådan tænker jeg
        </p>
        <p className="text-[clamp(22px,3.6vw,46px)] font-medium leading-[1.3] tracking-tight">
          {words.map((w, i) => (
            <Word key={i} w={w} i={i} total={words.length} progress={scrollYProgress} reduce={reduce} />
          ))}
        </p>
      </div>
    </section>
  );
}
