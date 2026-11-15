"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import CountUp from "../home/fx/CountUp";
import { FadeUp } from "../home/fx/Reveal";

const ease = [0.16, 1, 0.3, 1];

/** 2. Byen i tal: store tal, der tæller op, og hvad de betyder for kundens side. */
export function CityStats({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((s, i) => (
        <FadeUp key={s.label} delay={i * 0.08} className="h-full">
          <div className="h-full rounded-3xl bg-white border border-[#e8e6e6] p-6 sm:p-7 flex flex-col gap-4">
            <p className="text-[clamp(34px,3.6vw,48px)] font-semibold leading-none tracking-tight text-[#00a8e8] whitespace-nowrap">
              {s.text ?? <CountUp to={s.to} suffix={s.suffix} />}
            </p>
            <p className="text-[16px] font-semibold text-[#1c1e1e] leading-snug">{s.label}</p>
            <div className="h-px bg-[#e8e6e6]" />
            <p className="text-[15px] text-[#4a4a4a] leading-[1.7]">{s.meaning}</p>
          </div>
        </FadeUp>
      ))}
    </div>
  );
}

/** 3. Bydele: vælg et kvarter og se, hvem der søger, og hvad siden skal sige. */
export function DistrictPicker({ items }) {
  const [active, setActive] = useState(0);
  const d = items[active];
  const reduce = useReducedMotion();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.4fr] gap-4 lg:gap-6">
      <div role="tablist" aria-label="Bydele" className="flex lg:flex-col gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 pb-1">
        {items.map((x, i) => {
          const on = i === active;
          return (
            <button
              key={x.name}
              type="button"
              role="tab"
              id={`district-tab-${i}`}
              aria-selected={on}
              aria-controls={`district-panel-${i}`}
              onClick={() => setActive(i)}
              className={`shrink-0 lg:shrink lg:w-full text-left rounded-2xl px-5 py-4 border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a8e8] ${
                on ? "bg-[#00a8e8] border-transparent text-white" : "bg-[#242828] border-white/10 text-[#d6dcdc] hover:bg-[#2c3030]"
              }`}
            >
              <span className="block text-[15px] font-semibold whitespace-nowrap lg:whitespace-normal">{x.name}</span>
              <span className={`hidden lg:block text-[13px] mt-0.5 ${on ? "text-white/85" : "text-[#8a9696]"}`}>{x.area}</span>
            </button>
          );
        })}
      </div>

      <motion.div
        key={d.name}
        role="tabpanel"
        id={`district-panel-${active}`}
        aria-labelledby={`district-tab-${active}`}
        initial={reduce ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease }}
        className="rounded-3xl bg-[#242828] border border-white/10 p-6 sm:p-9 flex flex-col gap-7"
      >
        <div>
          <h3 className="text-[clamp(22px,2.4vw,30px)] font-semibold text-white leading-tight tracking-tight">{d.name}</h3>
          <p className="text-[15px] text-[#8a9696] mt-1.5">{d.area}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-2xl bg-[#1c1e1e] border border-white/10 p-5">
            <p className="text-[14px] font-semibold text-white mb-2">Hvem søger her?</p>
            <p className="text-[15px] text-[#b4bdbd] leading-[1.7]">{d.who}</p>
          </div>
          <div className="rounded-2xl bg-[#1c1e1e] border border-white/10 p-5">
            <p className="text-[14px] font-semibold text-white mb-2">Det skal din side sige</p>
            <p className="text-[15px] text-[#b4bdbd] leading-[1.7]">{d.tip}</p>
          </div>
        </div>

        <p className="text-[15px] text-[#b4bdbd] leading-[1.7]">
          Typisk søgning i området: <span className="text-white font-medium">“{d.search}”</span>
        </p>
      </motion.div>
    </div>
  );
}

/** 6. Samarbejdet som en tidslinje, der tegner sig, når man scroller. */
export function CityTimeline({ steps }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      <div aria-hidden className="hidden lg:block absolute left-0 right-0 top-[22px] h-px bg-[#d8d6d6]" />
      <motion.div
        aria-hidden
        className="hidden lg:block absolute left-0 right-0 top-[22px] h-px bg-[#00a8e8] origin-left"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.6, ease }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <FadeUp key={s.title} delay={i * 0.1} className="h-full">
            <div className="relative h-full flex flex-col gap-4">
              <span className="relative z-10 w-11 h-11 rounded-full bg-[#00a8e8] text-white text-[14px] font-semibold flex items-center justify-center">{i + 1}</span>
              <div className="rounded-3xl bg-white border border-[#e8e6e6] p-6 flex-1 flex flex-col gap-2">
                <p className="text-[13px] font-medium text-[#00a8e8]">{s.when}</p>
                <p className="text-[18px] font-semibold text-[#1c1e1e] leading-snug">{s.title}</p>
                <p className="text-[15px] text-[#4a4a4a] leading-[1.7]">{s.text}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </div>
  );
}
