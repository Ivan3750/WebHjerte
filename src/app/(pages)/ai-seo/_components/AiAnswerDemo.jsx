"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

/**
 * Hero-illustration: samme spørgsmål til en AI-assistent, med og uden AI-synlighed.
 * Virksomheden og svarene er opdigtede eksempler – AI-svar varierer og kan aldrig garanteres.
 */
const QUESTION = "Hvem er en god VVS’er i Horsens til et nyt badeværelse?";

const states = {
  without: {
    label: "Uden AI-synlighed",
    text: "Det kan jeg ikke pege på ud fra de oplysninger, jeg kan finde. Jeg anbefaler, at du sammenligner et par lokale VVS-firmaer på anmeldelser, pris og erfaring med badeværelser og beder om flere tilbud.",
    sources: [],
  },
  with: {
    label: "Med AI-synlighed",
    text: "Hansen VVS i Horsens (eksempel) er et lokalt firma, der laver badeværelser fra tilbud til færdig. De oplyser fast pris, tidsplan og eksempler på færdige badeværelser og har mange anmeldelser. Du kan bede om et tilbud direkte på deres hjemmeside.",
    sources: ["hansenvvs.dk", "Google Virksomhedsprofil"],
  },
};

export default function AiAnswerDemo() {
  const [mode, setMode] = useState("with");
  const reduce = useReducedMotion();
  const s = states[mode];

  return (
    <div className="rounded-3xl bg-[#242828] border border-white/10 overflow-hidden shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
      {/* kontakt */}
      <div className="p-2 border-b border-white/10">
        <div className="grid grid-cols-2 rounded-2xl bg-[#1c1e1e] p-1" role="tablist" aria-label="Vælg eksempel">
          {Object.entries(states).map(([k, v]) => (
            <button
              key={k}
              role="tab"
              aria-selected={mode === k}
              onClick={() => setMode(k)}
              className={`rounded-xl px-3 py-2.5 text-[13.5px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00a8e8] ${
                mode === k ? "bg-[#00a8e8] text-white" : "text-[#8a9696] hover:text-white"
              }`}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-7 flex flex-col gap-5 min-h-[400px]">
        <div className="self-end max-w-[85%] rounded-2xl rounded-br-md bg-[#00a8e8] px-4 py-3 text-[15px] text-white leading-snug">{QUESTION}</div>

        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="self-start max-w-[92%] flex gap-3"
          >
            <span aria-hidden className="mt-1 w-8 h-8 shrink-0 rounded-full bg-white/10 flex items-center justify-center text-[#00a8e8] text-[15px]">✦</span>
            <div>
              <p className="rounded-2xl rounded-tl-md bg-[#1c1e1e] border border-white/10 px-4 py-3.5 text-[15px] text-[#e6ecec] leading-[1.7]">{s.text}</p>
              {s.sources.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-3">
                  <span className="text-[12px] text-[#8a9696]">Kilder:</span>
                  {s.sources.map((x) => (
                    <span key={x} className="rounded-full bg-[#00a8e8]/15 text-[#8fd8f6] text-[12.5px] font-semibold px-3 py-1">{x}</span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <p className="mt-auto text-[12px] text-[#8a9696] leading-snug">Illustration med et opdigtet firma. AI-svar varierer, og ingen kan love at blive nævnt.</p>
      </div>
    </div>
  );
}
