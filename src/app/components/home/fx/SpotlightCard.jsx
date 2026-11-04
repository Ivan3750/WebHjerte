"use client";

import { useRef } from "react";

/**
 * Kort med "spotlight", der følger musen (Linear/Notion-agtigt).
 * Ren CSS-variabler → ingen re-renders.
 */
export default function SpotlightCard({ children, className = "", color = "0,168,232", dark = true }) {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`group relative overflow-hidden ${className}`}
      style={{ "--sc": color }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: `radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(${color},${dark ? 0.16 : 0.12}), transparent 60%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
