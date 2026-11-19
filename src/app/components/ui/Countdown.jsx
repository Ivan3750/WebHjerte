"use client";
import { useEffect, useState } from "react";
import { BLACK_FRIDAY } from "../../data/campaign";

const end = () => new Date(BLACK_FRIDAY.endsAt).getTime();

/** Resterende tid til kampagnen slutter. null før første client-render (undgår hydreringsfejl). */
export function useCountdown() {
  const [left, setLeft] = useState(null);
  useEffect(() => {
    const tick = () => setLeft(Math.max(0, end() - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  if (left === null) return null;
  const s = Math.floor(left / 1000);
  return { done: left <= 0, days: Math.floor(s / 86400), hours: Math.floor((s % 86400) / 3600), minutes: Math.floor((s % 3600) / 60), seconds: s % 60 };
}

const pad = (n) => String(n).padStart(2, "0");

/** Stort nedtællingsur med fire bokse. */
export default function Countdown({ className = "" }) {
  const t = useCountdown();
  const items = t
    ? [[t.days, "dage"], [t.hours, "timer"], [t.minutes, "min"], [t.seconds, "sek"]]
    : [["--", "dage"], ["--", "timer"], ["--", "min"], ["--", "sek"]];
  if (t?.done) return null;
  return (
    <div className={className} role="timer" aria-label="Tid til Black Friday-tilbuddet slutter">
      <p className="text-[12.5px] font-semibold uppercase tracking-widest text-[#00a8e8] mb-3">Tilbuddet slutter om</p>
      <div className="flex gap-2.5 sm:gap-3">
        {items.map(([v, label]) => (
          <div key={label} className="min-w-[64px] sm:min-w-[78px] rounded-2xl bg-white/[0.06] border border-white/10 px-3 py-3 sm:py-4 text-center">
            <p className="text-[26px] sm:text-[34px] font-semibold text-white leading-none tabular-nums">{typeof v === "number" ? pad(v) : v}</p>
            <p className="text-[11.5px] text-[#8a9696] mt-2">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
