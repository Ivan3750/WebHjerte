"use client";

import { motion, useScroll, useReducedMotion, useInView } from "framer-motion";

export const ease = [0.16, 1, 0.3, 1];

/** Deterministisk "tilfældighed", så server og browser tegner det samme. */
export const rnd = (n) => {
  const v = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return v - Math.floor(v);
};

/** Fælles bevægelse for en scene: reduceret bevægelse, om den er synlig, og scroll-fremgang til parallax. */
export function useScene(ref) {
  const reduce = useReducedMotion();
  const shown = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return { reduce, shown: shown || reduce, progress: scrollYProgress };
}

/** Ramme: afrundet, mørk kant og blå glød – samme ramme for alle byer. */
export function SceneFrame({ sceneRef, aspect = "aspect-[4/3] sm:aspect-[16/9] lg:aspect-[15/7]", children }) {
  return (
    <div
      ref={sceneRef}
      className={`relative overflow-hidden rounded-3xl border border-white/10 ${aspect} shadow-[0_40px_100px_-40px_rgba(0,168,232,0.45)]`}
    >
      {children}
    </div>
  );
}

/** Lille glas-mærkat med overlinje og navn. */
export function Chip({ kicker, title, className = "", delay = 1.4, shown = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ delay, duration: 0.8, ease }}
      className={`absolute rounded-2xl glass px-4 py-3 ${className}`}
    >
      {kicker && <p className="text-[10.5px] uppercase tracking-[0.16em] text-[#9fd8f0]">{kicker}</p>}
      <p className="text-[15px] sm:text-[17px] font-semibold text-white mt-1">{title}</p>
    </motion.div>
  );
}

/** Rute-mærkat: "Horsens ---•--- Aarhus · ca. 45 min" med en prik, der kører. */
export function RouteChip({ from, to, time, shown = true, reduce = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ delay: 1.8, duration: 0.8, ease }}
      className="absolute left-3 right-3 sm:left-8 sm:right-auto sm:w-[440px] bottom-3 sm:bottom-8 rounded-2xl glass px-4 sm:px-5 py-3.5 flex items-center gap-3 sm:gap-4"
    >
      <span className="text-[13px] sm:text-[14px] font-semibold text-white whitespace-nowrap">{from}</span>
      <span className="relative flex-1 h-px border-t border-dashed border-white/30">
        {!reduce && (
          <motion.span
            aria-hidden
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[4px] w-2 h-2 -ml-1 rounded-full bg-[#00a8e8] shadow-[0_0_10px_2px_rgba(0,168,232,0.7)]"
          />
        )}
      </span>
      <span className="text-[13px] sm:text-[14px] font-semibold text-white whitespace-nowrap">{to}</span>
      <span className="text-[12px] sm:text-[13px] text-[#00a8e8] whitespace-nowrap">{time}</span>
    </motion.div>
  );
}

/** Filtre til spejling i vand (bølgende forvrængning + blød fade) og glød. */
export function WaterDefs({ id, top, width, height, reduce, scale = 14 }) {
  return (
    <>
      <linearGradient id={`${id}-fade`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </linearGradient>
      <mask id={`${id}-mask`}>
        <rect x="0" y={top} width={width} height={height - top} fill={`url(#${id}-fade)`} />
      </mask>
      <filter id={`${id}-ripple`} x="-5%" y="-5%" width="110%" height="110%">
        <feTurbulence type="fractalNoise" baseFrequency="0.004 0.08" numOctaves="2" seed="5" result="n">
          {!reduce && <animate attributeName="baseFrequency" dur="13s" values="0.004 0.08;0.006 0.11;0.004 0.08" repeatCount="indefinite" />}
        </feTurbulence>
        <feDisplacementMap in="SourceGraphic" in2="n" scale={scale} />
      </filter>
      <filter id={`${id}-glow`} x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="3" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id={`${id}-blur`}>
        <feGaussianBlur stdDeviation="14" />
      </filter>
    </>
  );
}

/** Skyer, der driver langsomt. */
export function Clouds({ id, items, reduce, color = "#9fc9db", opacity = 0.16 }) {
  return items.map(([x, y, rx, ry, dur], i) => (
    <motion.ellipse
      key={i}
      cx={x}
      cy={y}
      rx={rx}
      ry={ry}
      fill={color}
      opacity={opacity}
      filter={`url(#${id}-blur)`}
      animate={reduce ? undefined : { x: [0, 60, 0] }}
      transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
    />
  ));
}

/** Et vindue, der tænder (og evt. blinker), når scenen er synlig. */
export function Lit({ x, y, w, h, k, shown, reduce, color = "#f6c983", base = 0.9, rx = 1 }) {
  const twinkle = rnd(k + 7) > 0.82;
  if (reduce) return <rect x={x} y={y} width={w} height={h} rx={rx} fill={color} opacity={base} />;
  return (
    <motion.rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={rx}
      fill={color}
      initial={{ opacity: 0 }}
      animate={shown ? { opacity: twinkle ? [0, base, base * 0.35, base] : [0, base] } : { opacity: 0 }}
      transition={{ delay: 1 + rnd(k + 3) * 1.8, duration: twinkle ? 6 + rnd(k) * 4 : 0.6, repeat: twinkle ? Infinity : 0 }}
    />
  );
}
