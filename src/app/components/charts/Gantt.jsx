"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CAT, INK } from "./palette";

/**
 * Tidslinje (Gantt) over et forløb i dage. Fase-navne står direkte ved søjlen,
 * så identitet aldrig hviler på farve alene. Skjult tabel til skærmlæsere.
 * phases: [{ label, from, to, note, tone? (0-3 index i CAT) }]
 */
export default function Gantt({ phases, days = 14, theme = "light", caption, marks = [] }) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(null);
  const ink = INK[theme];
  const cols = CAT[theme];
  const ticks = Array.from({ length: days + 1 }, (_, i) => i).filter((d) => d % 2 === 0 || d === days);

  return (
    <figure className="w-full">
      <div className="overflow-x-auto no-scrollbar -mx-1 px-1">
        <div className="min-w-[560px] pr-4">
          {/* akse */}
          <div className="grid grid-cols-[150px_1fr] sm:grid-cols-[190px_1fr] gap-3 mb-2">
            <span />
            <div className="relative h-5">
              {ticks.map((d) => (
                <span
                  key={d}
                  className="absolute top-0 -translate-x-1/2 text-[10.5px] tabular-nums"
                  style={{ left: `${(d / days) * 100}%`, color: ink.muted }}
                >
                  {d === 0 ? "Dag 0" : d}
                </span>
              ))}
            </div>
          </div>

          <ul className="relative flex flex-col gap-2.5">
            {/* lodrette gitterlinjer */}
            <div aria-hidden className="absolute inset-0 grid grid-cols-[150px_1fr] sm:grid-cols-[190px_1fr] gap-3 pointer-events-none">
              <span />
              <div className="relative">
                {ticks.map((d) => (
                  <span key={d} className="absolute top-0 bottom-0 w-px" style={{ left: `${(d / days) * 100}%`, background: ink.grid }} />
                ))}
                {marks.map((m) => (
                  <span key={m.label} className="absolute top-0 bottom-0 w-px" style={{ left: `${(m.at / days) * 100}%`, background: cols[1] }} />
                ))}
              </div>
            </div>

            {phases.map((p, i) => {
              const left = (p.from / days) * 100;
              const width = Math.max(((p.to - p.from) / days) * 100, 3.5);
              const c = cols[p.tone ?? i % cols.length];
              const dim = hover !== null && hover !== i;
              return (
                <li
                  key={p.label}
                  tabIndex={0}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(i)}
                  onBlur={() => setHover(null)}
                  title={`${p.label}: dag ${p.from}–${p.to}${p.note ? " · " + p.note : ""}`}
                  className="relative grid grid-cols-[150px_1fr] sm:grid-cols-[190px_1fr] gap-3 items-center outline-none"
                  style={{ opacity: dim ? 0.45 : 1, transition: "opacity .25s" }}
                >
                  <span className="text-[12.5px] leading-tight" style={{ color: ink.primary }}>
                    {p.label}
                  </span>
                  <span className="relative h-9 block">
                    <motion.span
                      className="absolute top-1 bottom-1 rounded-full origin-left flex items-center px-3 overflow-hidden"
                      style={{ left: `${left}%`, width: `${width}%`, background: c }}
                      initial={{ scaleX: reduce ? 1 : 0, opacity: reduce ? 1 : 0.4 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.8, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {width > 24 && p.note && (
                        <span className="text-[10.5px] font-medium text-white whitespace-nowrap">{p.note}</span>
                      )}
                    </motion.span>
                    {width <= 24 && p.note && (
                      <span
                        className="absolute top-1/2 -translate-y-1/2 text-[10.5px] whitespace-nowrap"
                        style={
                          left + width > 70
                            ? { right: `calc(${100 - left}% + 8px)`, color: ink.secondary }
                            : { left: `calc(${left + width}% + 8px)`, color: ink.secondary }
                        }
                      >
                        {p.note}
                      </span>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {caption && (
        <figcaption className="mt-5 text-[11.5px] leading-snug" style={{ color: ink.muted }}>
          {caption}
        </figcaption>
      )}
      <table className="sr-only">
        <caption>{caption || "Tidslinje"}</caption>
        <thead>
          <tr><th>Fase</th><th>Fra dag</th><th>Til dag</th></tr>
        </thead>
        <tbody>
          {phases.map((p) => (
            <tr key={p.label}><th scope="row">{p.label}</th><td>{p.from}</td><td>{p.to}</td></tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
