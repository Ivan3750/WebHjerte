"use client";

import { useEffect, useState } from "react";

/**
 * Indholdsfortegnelse.
 * variant="sidebar"  – klistret i siden på lange artikler, markerer det afsnit man læser nu.
 * variant="overview" – nummereret overblik øverst på en tjenesteside.
 */
export default function TocNav({ items, title = "I denne guide", variant = "sidebar" }) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    if (variant !== "sidebar") return;
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -68% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [items, variant]);

  if (variant === "overview") {
    return (
      <nav aria-label={title}>
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a] mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-[#00a8e8]" />
          {title}
        </p>
        <ol className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {items.map((item, i) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group flex items-baseline gap-4 py-3.5 border-b border-[#e6e4e4] text-[14px] text-[#3a3d3d] hover:text-[#00a8e8]"
              >
                <span className="text-[12px] tabular-nums text-[#b5b3b3] group-hover:text-[#00a8e8] transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="leading-snug">{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
  }

  return (
    <nav aria-label={title}>
      <p className="text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a] mb-4">{title}</p>
      <ol className="relative border-l border-[#e2e0e0]">
        {items.map((item, i) => {
          const on = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={on ? "true" : undefined}
                className={`relative flex gap-3 pl-5 pr-2 py-2 text-[13px] leading-snug transition-colors ${
                  on ? "text-[#1c1e1e] font-medium" : "text-[#7a7d7d] hover:text-[#1c1e1e]"
                }`}
              >
                <span
                  aria-hidden
                  className={`absolute left-[-1px] top-0 h-full w-[2px] origin-center bg-[#00a8e8] transition-transform duration-300 ${
                    on ? "scale-y-100" : "scale-y-0"
                  }`}
                />
                <span className={`tabular-nums text-[11px] pt-px ${on ? "text-[#00a8e8]" : "text-[#b5b3b3]"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
