"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { CAT, INK } from "./palette";

/**
 * Vandret søjlediagram (én serie, én akse). Rækkerne har direkte værdi-labels,
 * hover fremhæver rækken, og en skjult tabel giver skærmlæsere de samme data.
 * items: [{ label, value, display, note?, muted? }]  – muted = ingen søjle (fx "aftales")
 */
export default function HBars({ items, theme = "light", max, caption, unit = "", color }) {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(null);
  const ink = INK[theme];
  const fill = color || CAT[theme][0];
  const top = max ?? Math.max(...items.map((i) => i.value || 0));

  return (
    <figure className="w-full">
      <ul className="flex flex-col gap-3.5">
        {items.map((it, i) => {
          const pct = it.value ? Math.max(4, (it.value / top) * 100) : 0;
          const dim = hover !== null && hover !== i;
          return (
            <li
              key={it.label}
              onMouseEnter={() => setHover(i)}
              onMouseLeave={() => setHover(null)}
              onFocus={() => setHover(i)}
              onBlur={() => setHover(null)}
              tabIndex={0}
              title={`${it.label}: ${it.display}${unit}`}
              className="grid grid-cols-[minmax(84px,128px)_1fr_auto] items-center gap-3 outline-none rounded-lg focus-visible:ring-2 focus-visible:ring-[#00a8e8]/50"
              style={{ opacity: dim ? 0.45 : 1, transition: "opacity .25s" }}
            >
              <span className="text-[12.5px] leading-tight" style={{ color: ink.secondary }}>
                {it.label}
              </span>
              <span className="relative h-[14px] rounded-full" style={{ background: ink.track }}>
                {it.value ? (
                  <motion.span
                    className="absolute inset-y-0 left-0 rounded-full origin-left"
                    style={{ width: `${pct}%`, background: fill }}
                    initial={{ scaleX: reduce ? 1 : 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.9, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                  />
                ) : (
                  <span
                    className="absolute inset-y-0 left-0 right-0 rounded-full"
                    style={{ border: `1.5px dashed ${ink.grid}` }}
                  />
                )}
              </span>
              <span className="text-[13px] font-semibold tabular-nums min-w-[64px] text-right" style={{ color: ink.primary }}>
                {it.display}
                {unit && it.value ? <span className="font-normal text-[11px] ml-1" style={{ color: ink.muted }}>{unit}</span> : null}
              </span>
            </li>
          );
        })}
      </ul>
      {caption && (
        <figcaption className="mt-5 text-[11.5px] leading-snug" style={{ color: ink.muted }}>
          {caption}
        </figcaption>
      )}
      <table className="sr-only">
        <caption>{caption || "Data"}</caption>
        <tbody>
          {items.map((it) => (
            <tr key={it.label}>
              <th scope="row">{it.label}</th>
              <td>{it.display}{unit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
