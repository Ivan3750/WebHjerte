"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Seks signaler, som AI-assistenter og Google læser. Slå dem til, og se hvor stærk en kilde siden bliver.
 * Det er en illustration af princippet – ikke et mål for en bestemt placering eller et bestemt AI-svar.
 */
const signals = [
  { k: "svar", t: "Klare svar på kundernes spørgsmål", d: "FAQ og overskrifter formuleret som spørgsmål" },
  { k: "schema", t: "Struktureret data", d: "Så maskiner forstår, hvem du er, og hvad du tilbyder" },
  { k: "nap", t: "Ens navn, adresse og telefon overalt", d: "På hjemmesiden, i kataloger og på Google" },
  { k: "gbp", t: "Komplet Google Virksomhedsprofil", d: "Kategorier, åbningstider, billeder og anmeldelser" },
  { k: "speed", t: "Hurtig og teknisk ren side", d: "Ingen fejl, der får crawlere til at give op" },
  { k: "omtale", t: "Omtale og anmeldelser andre steder", d: "Så andre bekræfter det, du selv skriver" },
];

const labels = ["Svær at citere", "Svær at citere", "Delvist synlig", "Delvist synlig", "God kilde", "God kilde", "Stærk kilde"];

export default function SignalMeter() {
  const [on, setOn] = useState({ nap: true });
  const count = signals.filter((s) => on[s.k]).length;
  const R = 78;
  const C = 2 * Math.PI * R;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-4 lg:gap-6">
      <div className="rounded-3xl bg-[#242828] border border-white/10 divide-y divide-white/10 overflow-hidden">
        {signals.map((s) => {
          const active = !!on[s.k];
          return (
            <button
              key={s.k}
              type="button"
              role="switch"
              aria-checked={active}
              onClick={() => setOn((o) => ({ ...o, [s.k]: !o[s.k] }))}
              className={`w-full text-left px-5 sm:px-7 py-5 flex items-center gap-5 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#00a8e8] ${
                active ? "bg-[#00a8e8]/10" : "hover:bg-white/[0.03]"
              }`}
            >
              <span className={`shrink-0 w-11 h-6 rounded-full relative transition-colors ${active ? "bg-[#00a8e8]" : "bg-[#3a4040]"}`}>
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${active ? "left-6" : "left-1"}`} />
              </span>
              <span>
                <span className="block text-[16px] font-semibold text-white leading-snug">{s.t}</span>
                <span className="block text-[13.5px] text-[#8a9696] mt-0.5 leading-snug">{s.d}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="rounded-3xl bg-white border border-[#e8e6e6] p-7 sm:p-9 flex flex-col items-center justify-center text-center lg:sticky lg:top-28 self-start">
        <div className="relative w-[200px] h-[200px]">
          <svg viewBox="0 0 200 200" className="w-full h-full -rotate-90" aria-hidden>
            <circle cx="100" cy="100" r={R} fill="none" stroke="#eceeee" strokeWidth="16" />
            <motion.circle
              cx="100"
              cy="100"
              r={R}
              fill="none"
              stroke="#00a8e8"
              strokeWidth="16"
              strokeLinecap="round"
              strokeDasharray={C}
              animate={{ strokeDashoffset: C - (count / signals.length) * C }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-[44px] font-semibold leading-none text-[#1c1e1e] tabular-nums">{count}<span className="text-[#9a9a9a] text-[24px]">/6</span></span>
            <span className="text-[12px] text-[#7a7a7a] mt-1">signaler</span>
          </div>
        </div>
        <p aria-live="polite" className="mt-6 text-[22px] font-semibold tracking-tight text-[#1c1e1e]">{labels[count]}</p>
        <p className="mt-3 text-[13px] text-[#7a7a7a] leading-snug max-w-[28ch]">Illustration af princippet – ikke en måling af din side eller en garanti.</p>
      </div>
    </div>
  );
}
