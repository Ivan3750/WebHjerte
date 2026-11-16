"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Realistiske forventninger som kurve med faser. Det er en illustration af forløbet – ikke en garanti.
 */
const phases = [
  { x: 0, label: "Måned 0–1", text: "Tjek og fundament" },
  { x: 38, label: "Måned 2–3", text: "Første bevægelse" },
  { x: 72, label: "Måned 4–6+", text: "Synlig vækst" },
];

export default function GrowthCurve() {
  const reduce = useReducedMotion();
  const w = 600, h = 260;
  const path = "M0,240 C70,236 110,230 170,214 S 260,170 320,138 S 450,60 600,22";
  return (
    <div>
      <svg viewBox={`-10 -10 ${w + 20} ${h + 30}`} className="w-full h-auto" role="img" aria-label="Illustration af et typisk SEO-forløb over seks måneder">
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={w} y1={h * g} y2={h * g} stroke="#1c1e1e" strokeOpacity="0.08" strokeDasharray="4 6" />
        ))}
        <line x1="0" x2={w} y1={h} y2={h} stroke="#1c1e1e" strokeOpacity="0.25" />
        {/* tonet område under kurven */}
        <motion.path
          d={`${path} L${w},${h} L0,${h} Z`}
          fill="#00a8e8"
          fillOpacity="0.1"
          initial={{ opacity: reduce ? 1 : 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        />
        <motion.path
          d={path}
          fill="none"
          stroke="#00a8e8"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
        {[{ x: 170, y: 214 }, { x: 320, y: 138 }, { x: 600, y: 22 }].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="7"
            fill="#fff"
            stroke="#00a8e8"
            strokeWidth="3"
            initial={{ scale: reduce ? 1 : 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 + i * 0.45, type: "spring", stiffness: 260, damping: 18 }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        ))}
      </svg>
      <div className="grid grid-cols-3 gap-3 mt-4">
        {phases.map((p) => (
          <div key={p.label}>
            <p className="text-[13px] font-semibold text-[#007aab]">{p.label}</p>
            <p className="text-[14px] text-[#1c1e1e] leading-snug mt-1">{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
