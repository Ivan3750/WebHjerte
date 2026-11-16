"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { isHiddenHref } from "../../../data/hidden";

/**
 * Radar over Midtjylland med Horsens i midten. Ringene viser afstand (25/50/75 km), og byerne ligger
 * omtrent, hvor de ligger i virkeligheden (forenklet kort uden kystlinje). Klik på en by for køretid og samarbejde.
 */
const HOME = { lon: 9.85, lat: 55.86 };
const KM = 3.6; // px pr. km i viewBox
const CX = 320, CY = 300;
const proj = (lon, lat) => ({
  x: CX + (lon - HOME.lon) * 62.3 * KM,
  y: CY + (HOME.lat - lat) * 111 * KM,
});

const cities = [
  { id: "horsens", name: "Horsens", lon: 9.85, lat: 55.86, time: null, home: true },
  { id: "skanderborg", name: "Skanderborg", lon: 9.93, lat: 56.04, time: "ca. 25 min" },
  { id: "vejle", name: "Vejle", lon: 9.53, lat: 55.71, time: "ca. 25 min", href: "/webbureau-vejle" },
  { id: "fredericia", name: "Fredericia", lon: 9.75, lat: 55.57, time: "ca. 35 min" },
  { id: "silkeborg", name: "Silkeborg", lon: 9.55, lat: 56.17, time: "ca. 40 min" },
  { id: "aarhus", name: "Aarhus", lon: 10.21, lat: 56.16, time: "ca. 45 min", href: "/webbureau-aarhus" },
  { id: "kolding", name: "Kolding", lon: 9.47, lat: 55.49, time: "ca. 45 min" },
  { id: "randers", name: "Randers", lon: 10.04, lat: 56.46, time: "ca. 55 min" },
  { id: "viborg", name: "Viborg", lon: 9.4, lat: 56.45, time: "ca. 1 time" },
  { id: "herning", name: "Herning", lon: 8.97, lat: 56.14, time: "ca. 1 time 5 min" },
].map((c) => ({ ...c, ...proj(c.lon, c.lat) }));

export default function RegionRadar() {
  const reduce = useReducedMotion();
  const [id, setId] = useState("aarhus");
  const sel = cities.find((c) => c.id === id);
  const home = cities[0];
  const pageHref = sel.href && !isHiddenHref(sel.href) ? sel.href : null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-4 lg:gap-6 items-stretch">
      <div className="relative rounded-3xl bg-[#242828] border border-white/10 overflow-hidden">
        <div aria-hidden className="grid-fade absolute inset-0 opacity-40" />
        <svg viewBox="0 0 640 600" className="relative w-full h-auto" role="img" aria-label="Kort over Midtjylland med afstand fra Horsens">
          {/* afstandsringe */}
          {[25, 50, 75].map((km) => (
            <g key={km}>
              <circle cx={CX} cy={CY} r={km * KM} fill="none" stroke="#fff" strokeOpacity="0.1" strokeDasharray="3 7" />
              <text x={CX + km * KM * 0.707 + 6} y={CY + km * KM * 0.707 + 14} fill="#8a9696" fontSize="16">{km} km</text>
            </g>
          ))}
          {/* pulserende ring fra Horsens */}
          {!reduce && (
            <motion.circle
              cx={CX}
              cy={CY}
              fill="none"
              stroke="#00a8e8"
              strokeWidth="2"
              initial={{ r: 8, opacity: 0.7 }}
              animate={{ r: 270, opacity: 0 }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          {/* forbindelser */}
          {cities.slice(1).map((c) => (
            <line
              key={c.id}
              x1={home.x}
              y1={home.y}
              x2={c.x}
              y2={c.y}
              stroke="#00a8e8"
              strokeOpacity={c.id === id ? 0.9 : 0.18}
              strokeWidth={c.id === id ? 2 : 1}
              strokeDasharray={c.id === id ? "0" : "4 6"}
            />
          ))}
          {/* byer */}
          {cities.map((c) => {
            const active = c.id === id;
            const labelLeft = ["silkeborg", "herning", "viborg", "vejle", "kolding"].includes(c.id);
            return (
              <g
                key={c.id}
                role="button"
                tabIndex={0}
                aria-label={c.home ? "Horsens – mit hjemmemarked" : `${c.name}, ${c.time}`}
                aria-pressed={active}
                onClick={() => !c.home && setId(c.id)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && !c.home && setId(c.id)}
                style={{ cursor: c.home ? "default" : "pointer", outline: "none" }}
                className="focus-visible:[&>circle:first-child]:stroke-white"
              >
                <circle cx={c.x} cy={c.y} r="22" fill="transparent" />
                <circle
                  cx={c.x}
                  cy={c.y}
                  r={c.home ? 11 : active ? 9 : 6}
                  fill={c.home ? "#00a8e8" : active ? "#00a8e8" : "#1c1e1e"}
                  stroke={c.home ? "#fff" : "#00a8e8"}
                  strokeWidth={c.home ? 3 : 2}
                />
                <text
                  x={c.x + (labelLeft ? -18 : 18)}
                  y={c.y + 5}
                  textAnchor={labelLeft ? "end" : "start"}
                  fill={active || c.home ? "#fff" : "#b4bdbd"}
                  fontSize={c.home ? 24 : 20}
                  fontWeight={active || c.home ? 700 : 500}
                >
                  {c.name}
                </text>
              </g>
            );
          })}
        </svg>
        <p className="relative px-6 pb-5 -mt-2 text-[12px] text-[#8a9696]">Forenklet kort – byernes placering er omtrentlig.</p>
      </div>

      <div className="rounded-3xl bg-white border border-[#e8e6e6] p-7 sm:p-9 flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={sel.id}
            initial={{ opacity: 0, y: reduce ? 0 : 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col"
          >
            <p className="text-[13px] font-semibold text-[#00a8e8] mb-3">Fra Horsens til</p>
            <p className="text-[clamp(30px,3.4vw,44px)] font-semibold tracking-tight leading-none text-[#1c1e1e]">{sel.name}</p>
            <p className="mt-3 text-[17px] text-[#5f5f5f]">{sel.time}</p>
            <div className="mt-7 pt-7 border-t border-[#ececec] flex flex-col gap-4 text-[15px] text-[#4a4a4a] leading-[1.7]">
              <p>
                <span className="font-semibold text-[#1c1e1e]">Samarbejdet foregår online</span> – video, telefon og mail. Det er hurtigere, og de fleste kunder foretrækker det.
              </p>
              <p>
                <span className="font-semibold text-[#1c1e1e]">Jeg kommer gerne forbi</span>, når et fysisk møde giver værdi.
              </p>
            </div>
            {pageHref && (
              <Link href={pageHref} className="mt-7 text-[14px] font-semibold text-[#007aab] hover:text-[#00a8e8] transition-colors">
                Se siden om {sel.name} →
              </Link>
            )}
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Vælg by">
          {cities.slice(1).map((c) => (
            <button
              key={c.id}
              onClick={() => setId(c.id)}
              aria-pressed={c.id === id}
              className={`rounded-full px-3.5 py-1.5 text-[13px] font-semibold border transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00a8e8] ${
                c.id === id ? "bg-[#1c1e1e] text-white border-[#1c1e1e]" : "bg-white text-[#4a4a4a] border-[#d9d7d7] hover:border-[#1c1e1e]"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
