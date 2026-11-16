"use client";

import { useState } from "react";

/** En "indstillinger"-skærm, som man kender den fra Shopify og Notion: du bestemmer, hvad chatbotten må. */
const settings = [
  { k: "ai", t: "Oplys tydeligt, at det er en AI", d: "Altid slået til – besøgende skal vide, hvem de taler med.", locked: true, on: true },
  { k: "priser", t: "Må oplyse priser", d: "Svarer ud fra din prisliste – og kun den.", on: true },
  { k: "book", t: "Må booke tider og samle forespørgsler", d: "Navn, kontaktinfo og behov sendes til din mail.", on: true },
  { k: "hand", t: "Overdrag til dig ved klager og akutte sager", d: "Chatbotten løser ikke det, et menneske bør tage.", on: true },
  { k: "sprog", t: "Svar også på engelsk og andre sprog", d: "Til turister og internationale kunder.", on: false },
];
const never = ["Juridiske råd", "Rabatter uden for din prisliste", "Svar på det, den ikke ved"];

function Toggle({ on, locked }) {
  return (
    <span className={`shrink-0 w-11 h-6 rounded-full relative transition-colors ${on ? "bg-[#00a8e8]" : "bg-[#cfcdcd]"} ${locked ? "opacity-60" : ""}`}>
      <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-all ${on ? "left-6" : "left-1"}`} />
    </span>
  );
}

export default function ControlPanel() {
  const [state, setState] = useState(() => Object.fromEntries(settings.map((s) => [s.k, s.on])));
  return (
    <div className="rounded-3xl bg-white border border-[#e8e6e6] shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)] overflow-hidden">
      <div className="px-6 sm:px-8 py-5 border-b border-[#ececec] flex items-center justify-between">
        <p className="text-[16px] font-semibold text-[#1c1e1e]">Indstillinger for chatbotten</p>
        <span className="text-[12px] text-[#8a8a8a]">Eksempel</span>
      </div>
      <ul className="divide-y divide-[#ececec]">
        {settings.map((s) => (
          <li key={s.k}>
            <button
              type="button"
              role="switch"
              aria-checked={state[s.k]}
              disabled={s.locked}
              onClick={() => setState((x) => ({ ...x, [s.k]: !x[s.k] }))}
              className="w-full text-left px-6 sm:px-8 py-5 flex items-center gap-5 hover:bg-[#fafafa] disabled:hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#00a8e8]"
            >
              <span className="flex-1">
                <span className="block text-[15.5px] font-semibold text-[#1c1e1e] leading-snug">{s.t}</span>
                <span className="block text-[13.5px] text-[#6a6a6a] mt-0.5 leading-snug">{s.d}</span>
              </span>
              <Toggle on={state[s.k]} locked={s.locked} />
            </button>
          </li>
        ))}
      </ul>
      <div className="px-6 sm:px-8 py-5 bg-[#f7f6f6] border-t border-[#ececec]">
        <p className="text-[13px] font-semibold text-[#5f5f5f] mb-3">Den må ikke svare på</p>
        <div className="flex flex-wrap gap-2">
          {never.map((n) => (
            <span key={n} className="rounded-full bg-white border border-[#e0dede] px-3 py-1.5 text-[12.5px] text-[#4a4a4a]"><span aria-hidden className="text-[#b3261e] mr-1.5">✕</span>{n}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
