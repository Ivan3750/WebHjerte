"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];
const inView = { once: true, margin: "-40px" };

/* ───────────────────── Vejle: fjorden, broen og byen ───────────────────── */

// Dæk-højde langs en let bue (maks. 20 px i midten), så piller og biler følger broen.
const deckY = (x) => {
  if (x <= 180 || x >= 420) return 262;
  const t = (x - 180) / 240;
  return 262 - 80 * t * (1 - t);
};
const PIERS = Array.from({ length: 10 }, (_, i) => 30 + i * 60);
const wavePath = (y, amp) => {
  let d = `M-60 ${y}`;
  for (let x = -60; x < 720; x += 60) d += ` q15 ${-amp} 30 0 t30 0`;
  return d;
};
const STARS = [[40, 40], [110, 90], [180, 30], [250, 70], [330, 28], [520, 52], [575, 100], [90, 140], [300, 120], [560, 160]];
const HOUSES = [
  [14, 318, 22, 20], [40, 310, 18, 28], [62, 322, 26, 16], [92, 306, 20, 32], [116, 316, 24, 22], [144, 324, 18, 14],
];

function VejleScene() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const far = useTransform(scrollY, [0, 700], reduce ? [0, 0] : [0, -10]);
  const mid = useTransform(scrollY, [0, 700], reduce ? [0, 0] : [0, -22]);
  const near = useTransform(scrollY, [0, 700], reduce ? [0, 0] : [0, -36]);
  const carTimes = [0, 0.03, 0.3, 0.5, 0.7, 0.97, 1];

  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0b1316] via-[#102128] to-[#0b1a20] aspect-[600/470] shadow-[0_30px_80px_-30px_rgba(0,168,232,0.35)]">
      <svg viewBox="0 0 600 470" className="absolute inset-0 w-full h-full" role="img" aria-label="Illustration af Vejle: byen ved fjorden og Vejlefjordbroen">
        <defs>
          <radialGradient id="vj-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00a8e8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#00a8e8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="vj-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f2f3b" />
            <stop offset="100%" stopColor="#0a1920" />
          </linearGradient>
        </defs>

        {/* Himmel: glød og stjerner */}
        <motion.circle
          cx="430" cy="118" r="120" fill="url(#vj-glow)"
          animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "430px 118px" }}
        />
        <circle cx="430" cy="118" r="26" fill="#bfe8f8" opacity="0.9" />
        {STARS.map(([x, y], i) => (
          <motion.circle
            key={i} cx={x} cy={y} r="1.4" fill="#cfe9f5"
            animate={reduce ? undefined : { opacity: [0.15, 0.9, 0.15] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.4 }}
          />
        ))}

        {/* Bakker i tre lag (parallax) */}
        <motion.g style={{ y: far }}>
          <path d="M0 250 C60 210 120 200 190 226 S320 190 400 214 S540 200 600 224 V330 H0Z" fill="#1b3640" />
        </motion.g>
        <motion.g style={{ y: mid }}>
          <path d="M0 280 C70 246 130 250 200 262 S330 238 420 258 S560 246 600 262 V340 H0Z" fill="#21444f" />
        </motion.g>

        {/* Fjorden */}
        <rect x="0" y="300" width="600" height="170" fill="url(#vj-water)" />
        {[330, 362, 396, 432].map((y, i) => (
          <motion.path
            key={y} d={wavePath(y, 4 + i)} fill="none" stroke="#00a8e8" strokeOpacity={0.28 - i * 0.04} strokeWidth="1.4"
            animate={reduce ? undefined : { x: [0, i % 2 ? 60 : -60] }}
            transition={{ duration: 9 + i * 2, repeat: Infinity, ease: "linear" }}
          />
        ))}

        {/* Vejlefjordbroen: dæk tegnes, piller vokser, biler kører */}
        {PIERS.map((x, i) => {
          const y0 = deckY(x) + 3;
          return (
            <motion.rect
              key={x} x={x - 2.5} y={y0} width="5" height={344 - y0} rx="1.5" fill="#6fa9bd"
              initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={inView}
              transition={{ delay: 0.5 + i * 0.07, duration: 0.7, ease }}
              style={{ transformOrigin: `${x}px ${y0}px` }}
            />
          );
        })}
        {PIERS.map((x, i) => (
          <motion.rect
            key={`r${x}`} x={x - 2.5} y={346} width="5" height={Math.min(60, 470 - 346)} rx="2" fill="#6fa9bd" opacity="0.12"
            initial={{ opacity: 0 }} whileInView={{ opacity: 0.12 }} viewport={inView} transition={{ delay: 1 + i * 0.05 }}
          />
        ))}
        <motion.path
          d="M-4 262 L180 262 Q300 222 420 262 L604 262"
          fill="none" stroke="#e6f4fa" strokeWidth="6" strokeLinecap="round"
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={inView}
          transition={{ duration: 1.6, ease }}
        />
        {!reduce && (
          <>
            <motion.rect
              width="9" height="4" rx="2" fill="#f0a63a"
              animate={{ x: [-20, 0, 180, 300, 420, 600, 620], y: [254, 254, 254, 234, 254, 254, 254] }}
              transition={{ duration: 9, repeat: Infinity, ease: "linear", times: carTimes }}
            />
            <motion.rect
              width="9" height="4" rx="2" fill="#e0678a"
              animate={{ x: [620, 600, 420, 300, 180, 0, -20], y: [254, 254, 254, 234, 254, 254, 254] }}
              transition={{ duration: 11, repeat: Infinity, ease: "linear", times: carTimes, delay: 2 }}
            />
            <motion.rect
              width="9" height="4" rx="2" fill="#bfe8f8"
              animate={{ x: [-20, 0, 180, 300, 420, 600, 620], y: [254, 254, 254, 234, 254, 254, 254] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear", times: carTimes, delay: 5 }}
            />
          </>
        )}

        {/* Byen på bakken */}
        <motion.g style={{ y: near }}>
          <path d="M-10 346 C40 296 110 296 190 340 V380 H-10Z" fill="#2a525e" />
          {HOUSES.map(([x, y, w, h], i) => (
            <g key={i}>
              <rect x={x} y={y} width={w} height={h} fill="#0f2229" />
              <path d={`M${x - 2} ${y} L${x + w / 2} ${y - 7} L${x + w + 2} ${y}Z`} fill="#0b1a20" />
              <motion.rect
                x={x + w / 2 - 2} y={y + 6} width="4" height="5" rx="1" fill="#f0a63a"
                animate={reduce ? undefined : { opacity: [0.35, 1, 0.5, 1] }}
                transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.6 }}
              />
            </g>
          ))}
        </motion.g>
      </svg>

      {/* Mærkater oven på illustrationen */}
      <motion.div
        initial={{ opacity: 0, y: -14 }} whileInView={{ opacity: 1, y: 0 }} viewport={inView}
        transition={{ delay: 1.1, duration: 0.8, ease }}
        className="absolute left-[4%] top-[59%] flex items-center gap-2 rounded-full bg-[#00a8e8] text-[#10181a] text-[11px] sm:text-[12px] font-semibold pl-3 pr-3.5 py-1.5 shadow-[0_10px_26px_-8px_rgba(0,168,232,0.8)]"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#10181a]" /> Vejle
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={inView} transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute right-[4%] top-[40%] text-[10px] sm:text-[11px] text-[#bfe8f8]/80 rounded-full border border-white/15 bg-black/20 backdrop-blur px-3 py-1"
      >
        E45 · Vejlefjordbroen
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={inView}
        transition={{ delay: 1.4, duration: 0.8, ease }}
        className="absolute left-3 right-3 sm:left-5 sm:right-5 bottom-3 sm:bottom-5 rounded-2xl glass px-4 py-3 flex items-center gap-3 sm:gap-4"
      >
        <span className="text-[12px] sm:text-[13px] font-semibold text-white whitespace-nowrap">Horsens</span>
        <span className="relative flex-1 h-px border-t border-dashed border-white/25">
          {!reduce && (
            <motion.span
              aria-hidden
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-[4px] w-2 h-2 -ml-1 rounded-full bg-[#00a8e8] shadow-[0_0_10px_2px_rgba(0,168,232,0.7)]"
            />
          )}
        </span>
        <span className="text-[12px] sm:text-[13px] font-semibold text-white whitespace-nowrap">Vejle</span>
        <span className="text-[11px] sm:text-[12px] text-[#00a8e8] whitespace-nowrap">ca. 25–30 min</span>
      </motion.div>
    </div>
  );
}

/* ───────────────────── Skematisk kort: Vejle og nabobyerne ───────────────────── */

const NODES = [
  { id: "Horsens", x: 487, y: 34, big: true, note: "WebHjerte" },
  { id: "Hedensted", x: 347, y: 94 },
  { id: "Vejle", x: 197, y: 135, big: true, hero: true },
  { id: "Jelling", x: 95, y: 108 },
  { id: "Børkop", x: 291, y: 182 },
  { id: "Fredericia", x: 393, y: 229 },
  { id: "Middelfart", x: 375, y: 270 },
  { id: "Kolding", x: 132, y: 283 },
];
const LINKS = [
  ["Horsens", "Hedensted", true], ["Hedensted", "Vejle", true], ["Vejle", "Børkop"], ["Børkop", "Fredericia"],
  ["Fredericia", "Middelfart"], ["Vejle", "Kolding"], ["Vejle", "Jelling"],
];
const at = (id) => NODES.find((n) => n.id === id);

export function TrekantMap() {
  const reduce = useReducedMotion();
  return (
    <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
      <svg viewBox="0 0 600 320" className="w-full h-full" role="img" aria-label="Skematisk kort: Horsens, Vejle, Fredericia, Kolding og omegn">
        {LINKS.map(([a, b, main], i) => {
          const A = at(a), B = at(b);
          return (
            <motion.line
              key={a + b} x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              stroke={main ? "#00a8e8" : "#5d7a85"} strokeWidth={main ? 2 : 1.4} strokeDasharray={main ? "0" : "4 5"} strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={inView}
              transition={{ delay: 0.3 + i * 0.18, duration: 0.9, ease }}
            />
          );
        })}
        {NODES.map((n, i) => (
          <g key={n.id}>
            {n.hero && !reduce && (
              <motion.circle
                cx={n.x} cy={n.y} r="10" fill="none" stroke="#00a8e8" strokeWidth="1.5"
                animate={{ r: [10, 34], opacity: [0.7, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              />
            )}
            <motion.circle
              cx={n.x} cy={n.y} r={n.big ? 8 : 5} fill={n.hero ? "#00a8e8" : n.big ? "#3ddc97" : "#2a3a40"} stroke={n.hero ? "#bfe8f8" : "#5d7a85"} strokeWidth="1.5"
              initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={inView}
              transition={{ delay: 0.2 + i * 0.12, type: "spring", stiffness: 220, damping: 14 }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <motion.text
              x={n.x + (n.id === "Jelling" || n.id === "Kolding" ? -12 : 13)} y={n.y + 4}
              textAnchor={n.id === "Jelling" || n.id === "Kolding" ? "end" : "start"}
              fontSize={n.big ? 14 : 11.5} fontWeight={n.big ? 600 : 400} fill={n.big ? "#f2f5f5" : "#8fa5ad"}
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={inView} transition={{ delay: 0.5 + i * 0.12 }}
            >
              {n.id}
            </motion.text>
            {n.note && (
              <text x={n.x + 13} y={n.y + 19} fontSize="10" fill="#00a8e8">
                {n.note}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}

/** Hero-illustration pr. by. Flere byer tilføjes her. */
export default function CityScene({ city }) {
  if (city === "vejle") return <VejleScene />;
  return null;
}
