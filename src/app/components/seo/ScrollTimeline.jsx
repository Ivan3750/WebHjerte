"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useSpring, useMotionValueEvent, useReducedMotion } from "framer-motion";

const COLORS = ["#00a8e8", "#3ddc97", "#f0a63a", "#8a8ff0", "#e0678a", "#00a8e8"];
const stripNum = (t) => t.replace(/^\d+\.\s*/, "");

/**
 * Trin, der "tegnes" ned ad siden, mens man scroller: linjen vokser, og hvert trin tænder, når man når det.
 * Bruges i en mørk flade, så det ligner forsidens scroll-scener.
 */
export default function ScrollTimeline({ items }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const grow = useSpring(scrollYProgress, { stiffness: 110, damping: 28, restDelta: 0.001 });
  const [active, setActive] = useState(reduce ? items.length : 0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!reduce) setActive(Math.min(items.length, Math.floor(v * items.length + 0.35)));
  });

  return (
    <ol ref={ref} className="relative">
      <span aria-hidden className="absolute left-[19px] top-4 bottom-4 w-px bg-white/10" />
      <motion.span
        aria-hidden
        style={{ scaleY: reduce ? 1 : grow, transformOrigin: "top" }}
        className="absolute left-[19px] top-4 bottom-4 w-px bg-gradient-to-b from-[#00a8e8] to-[#3ddc97]"
      />
      {items.map((step, i) => {
        const on = i < active;
        return (
          <li key={step.title} className="relative flex gap-5 sm:gap-6 py-5">
            <span
              className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-[12px] tabular-nums font-medium border transition-all duration-500 ${
                on ? "bg-[#00a8e8] border-[#00a8e8] text-[#10181a] scale-100 shadow-[0_0_24px_-4px_rgba(0,168,232,0.7)]" : "bg-[#1c1e1e] border-white/15 text-white/50 scale-95"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className={`min-w-0 pt-1.5 transition-opacity duration-500 ${on ? "opacity-100" : "opacity-45"}`}>
              <p className="text-[16px] font-semibold text-white mb-1.5 flex items-center gap-3">
                {stripNum(step.title)}
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
              </p>
              <p className="text-[14.5px] leading-[1.8] text-[#a3b2b2]">{step.text}</p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
