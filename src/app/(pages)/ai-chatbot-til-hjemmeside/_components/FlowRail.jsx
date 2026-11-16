"use client";

import { motion, useReducedMotion } from "framer-motion";

/** Tre stationer og en prik, der løber fra spørgsmål til svar til dig. */
const nodes = [
  { t: "Kunden spørger", d: "Midt om natten, i weekenden eller mens du er på arbejde.", tone: "light" },
  { t: "Chatbotten svarer", d: "Ud fra dine priser, ydelser og åbningstider – og stiller opfølgende spørgsmål.", tone: "blue" },
  { t: "Du får henvendelsen", d: "På mail, med navn, behov og kontaktinfo. Svære sager overdrages til dig.", tone: "dark" },
];

function Rail({ vertical }) {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className={`relative ${vertical ? "w-px h-10 mx-auto md:hidden" : "hidden md:block h-px w-16 lg:w-28 self-center"} bg-[#1c1e1e]/20`}>
      {!reduce && (
        <motion.span
          className={`absolute w-2.5 h-2.5 rounded-full bg-[#00a8e8] ${vertical ? "left-1/2 -translate-x-1/2" : "top-1/2 -translate-y-1/2"}`}
          animate={vertical ? { top: ["0%", "100%"] } : { left: ["0%", "100%"] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
    </div>
  );
}

export default function FlowRail() {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-stretch gap-0">
      {nodes.map((n, i) => (
        <div key={n.t} className="contents">
          <div
            className={`flex-1 rounded-3xl p-7 sm:p-8 ${
              n.tone === "blue" ? "bg-[#00a8e8] text-white" : n.tone === "dark" ? "bg-[#1c1e1e] text-white" : "bg-white border border-[#e8e6e6] text-[#1c1e1e]"
            }`}
          >
            <p className={`text-[13px] font-semibold tabular-nums mb-5 ${n.tone === "light" ? "text-[#00a8e8]" : "text-white/80"}`}>0{i + 1}</p>
            <p className="text-[clamp(20px,2vw,24px)] font-semibold tracking-tight leading-tight mb-3">{n.t}</p>
            <p className={`text-[15px] leading-[1.7] ${n.tone === "light" ? "text-[#4a4a4a]" : "text-white/85"}`}>{n.d}</p>
          </div>
          {i < nodes.length - 1 && (
            <>
              <Rail />
              <Rail vertical />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
