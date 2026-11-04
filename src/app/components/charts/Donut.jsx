"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CAT, INK } from "./palette";

/**
 * Donut med altid synlig forklaring (legend) + tal pr. segment.
 * segments: [{ label, value }]  – farver tildeles i fast rækkefølge.
 */
export default function Donut({ segments, theme = "dark", caption, centerLabel = "i alt", centerValue, base }) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(null);
  const ink = INK[theme];
  const cols = CAT[theme];
  const total = segments.reduce((a, s) => a + s.value, 0) || 1;
  const R = 52;
  const C = 2 * Math.PI * R;
  const GAP = 3; // px-lignende mellemrum mellem segmenter (surface-gap)

  let acc = 0;
  const arcs = segments.map((s, i) => {
    const frac = s.value / total;
    const len = Math.max(frac * C - GAP, 1);
    const offset = -(acc * C);
    acc += frac;
    return { ...s, len, offset, color: cols[i % cols.length], pct: Math.round((s.value / (base ?? total)) * 100) };
  });

  const active = hover !== null ? arcs[hover] : null;

  return (
    <figure className="w-full">
      <div className="flex flex-col sm:flex-row items-center gap-7">
        <div className="relative w-[168px] h-[168px] shrink-0">
          <svg viewBox="0 0 140 140" className="w-full h-full -rotate-90" role="img" aria-label={caption || "Fordeling"}>
            <circle cx="70" cy="70" r={R} fill="none" stroke={ink.track} strokeWidth="16" />
            {arcs.map((a, i) => (
              <motion.circle
                key={a.label}
                cx="70"
                cy="70"
                r={R}
                fill="none"
                stroke={a.color}
                strokeWidth={hover === i ? 19 : 16}
                strokeLinecap="butt"
                strokeDasharray={`${a.len} ${C}`}
                strokeDashoffset={a.offset}
                initial={{ opacity: reduce ? 1 : 0, strokeDasharray: reduce ? `${a.len} ${C}` : `0 ${C}` }}
                whileInView={{ opacity: hover !== null && hover !== i ? 0.35 : 1, strokeDasharray: `${a.len} ${C}` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.12 * i, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(null)}
                style={{ cursor: "pointer", transition: "stroke-width .2s" }}
              />
            ))}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
            <span className="text-[28px] font-semibold tabular-nums leading-none" style={{ color: ink.primary }}>
              {active ? active.value : centerValue ?? total}
            </span>
            <span className="text-[10.5px] mt-1 max-w-[84px] leading-tight" style={{ color: ink.muted }}>
              {active ? active.label : centerLabel}
            </span>
          </div>
        </div>

        <ul className="flex flex-col gap-2.5 w-full">
          {arcs.map((a, i) => (
            <li
              key={a.label}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              className="flex items-center gap-3 text-[13px]"
              style={{ opacity: hover !== null && hover !== i ? 0.5 : 1, transition: "opacity .2s" }}
            >
              <span className="w-3 h-3 rounded-[4px] shrink-0" style={{ background: a.color }} />
              <span style={{ color: ink.secondary }}>{a.label}</span>
              <span className="ml-auto font-semibold tabular-nums" style={{ color: ink.primary }}>
                {a.value} <span className="font-normal text-[11px]" style={{ color: ink.muted }}>· {a.pct}%</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
      {caption && (
        <figcaption className="mt-5 text-[11.5px] leading-snug" style={{ color: ink.muted }}>
          {caption}
        </figcaption>
      )}
      <table className="sr-only">
        <caption>{caption || "Fordeling"}</caption>
        <tbody>
          {segments.map((s) => (
            <tr key={s.label}><th scope="row">{s.label}</th><td>{s.value}</td></tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
