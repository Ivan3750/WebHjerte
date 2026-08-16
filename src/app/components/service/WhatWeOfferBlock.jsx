"use client";

import { useState } from "react";
import AnimatedInView from "../AnimatedInView";

const services = [
  {
    name: "Webdesign",
    color: "#00a8e8",
    desc: "Skræddersyet design, der matcher din virksomhed — ikke en genkendelig skabelon.",
    items: ["Unikt design", "Mobil først", "Brand-tilpasset"],
  },
  {
    name: "Udvikling",
    color: "#3ddc97",
    desc: "Bygget med moderne teknologi for hastighed, stabilitet og lang holdbarhed.",
    items: ["Next.js / React", "Hurtig indlæsning", "Sikker hosting"],
  },
  {
    name: "SEO",
    color: "#f0a63a",
    desc: "Struktur og indhold, der giver dig bedre forudsætninger for at ranke på Google.",
    items: ["Teknisk SEO", "Lokal søgning", "Google Business"],
  },
  {
    name: "Integrationer",
    color: "#8a8ff0",
    desc: "Værktøjer du allerede bruger, koblet direkte på din nye hjemmeside.",
    items: ["CRM & booking", "Betaling", "Formularer & mail"],
  },
];

export default function WhatWeOfferBlock() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <p  className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Hvad tilbyder vi?
        </p>
        <h2  className="title text-white !leading-tight !mb-14 max-w-[24ch]">
          Alt din virksomhed behøver — samlet ét sted
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-4">
          {/* Left: clickable service list */}
          <div  className="flex flex-col gap-2">
            {services.map((s, i) => (
              <button
                key={s.name}
                onClick={() => setActive(i)}
                className={`group bg-[#f7f6f6] border-2 border-[#f7f6f6]]/10 text-[#5a5a5a]  rounded-2xl flex items-center justify-between gap-4 rounded-xl px-5 py-5 border text-left transition-colors `}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0 transition-opacity text-[#5a5a5a]"
                    style={{
                      backgroundColor: s.color,
                      opacity: active === i ? 1 : 0.35,
                    }}
                  />
                  <span
                    className={`text-[14px] font-medium transition-colors "text-[#5a5a5a]" `}
                  > 
                    {s.name}
                  </span>
                </div>
                 
              </button>
            ))}
          </div>

          {/* Right: expanded detail panel */}
          <div
            className="rounded-2xl p-8 sm:p-10 flex flex-col gap-6 bg-[#f7f6f6] border-2 border-[#f7f6f6]]/10 min-h-[280px]"
          >
            <div className="flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: current.color, boxShadow: `0 0 14px 2px ${current.color}66` }}
              />
              <p className="text-[18px] font-medium text-[#5a5a5a]">{current.name}</p>
            </div>

            <p className="text-[13.5px] text-[#7a7a7a] leading-[1.85] max-w-[46ch]">
              {current.desc}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto pt-2">
              {current.items.map((item) => (
                <span
                  key={item}
                  className="text-[11.5px] text-[#9a9a9a] border border-[#2a2d2d] rounded-full px-3.5 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}