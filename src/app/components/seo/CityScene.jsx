"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion, useAnimationFrame, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1];
const inView = { once: true, margin: "-60px" };

/* ═══════════════════════ Vejlefjordbroen i perspektiv ═══════════════════════
 * Broen er regnet ud i 3D og projiceret ind på billedet (kamera ved vandet, under broen),
 * så dæk, rækværk og piller bliver mindre mod forsvindingspunktet – som på et foto.
 */
const BW = 1200;
const BH = 640;
const F = 470; // brændvidde
const CX = 620;
const CY = 352; // horisont
const AX0 = -3.2;
const AZ0 = 2.6;
const ADX = 9.2;
const ADZ = 48;
const LEN = Math.hypot(ADX, ADZ);
const DIR = [ADX / LEN, ADZ / LEN];
const FAR = [-DIR[1], DIR[0]]; // væk fra kameraet, på tværs af broen
const Y_RAIL = -2.6;
const Y_TOP = -2.35;
const Y_BOT = -1.82;
const Y_WATER = 1.15;
const DECK_W = 1.35;
const S0 = (0.9 - AZ0) / ADZ; // start lige foran kameraet
const S1 = 1;

const axis = (s, off = 0) => [AX0 + s * ADX + off * FAR[0], AZ0 + s * ADZ + off * FAR[1]];
const proj = ([X, Z], Y) => [CX + (F * X) / Z, CY + (F * Y) / Z];
const pt = (p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;
const quad = (a, b, c, d) => [a, b, c, d].map(pt).join(" ");
const mirror = (Y) => 2 * Y_WATER - Y;

const nearA = axis(S0);
const nearB = axis(S1);
const farA = axis(S0, DECK_W);
const farB = axis(S1, DECK_W);

const deck = (m = (y) => y) => ({
  side: quad(proj(nearA, m(Y_TOP)), proj(nearB, m(Y_TOP)), proj(nearB, m(Y_BOT)), proj(nearA, m(Y_BOT))),
  rail: quad(proj(nearA, m(Y_RAIL)), proj(nearB, m(Y_RAIL)), proj(nearB, m(Y_TOP)), proj(nearA, m(Y_TOP))),
  under: quad(proj(nearA, m(Y_BOT)), proj(nearB, m(Y_BOT)), proj(farB, m(Y_BOT)), proj(farA, m(Y_BOT))),
});

const PIER_S = Array.from({ length: 14 }, (_, i) => 0.03 + i * 0.07);
const pier = (s, m = (y) => y) => {
  const c = axis(s, DECK_W / 2);
  const along = 0.17;
  const across = 0.27;
  const f0 = [c[0] - across * FAR[0] - along * DIR[0], c[1] - across * FAR[1] - along * DIR[1]];
  const f1 = [c[0] - across * FAR[0] + along * DIR[0], c[1] - across * FAR[1] + along * DIR[1]];
  const b0 = [c[0] + across * FAR[0] - along * DIR[0], c[1] + across * FAR[1] - along * DIR[1]];
  const top = proj(f0, m(Y_BOT));
  const bottom = proj(f0, m(Y_WATER));
  return {
    front: quad(proj(f0, m(Y_BOT)), proj(f1, m(Y_BOT)), proj(f1, m(Y_WATER)), proj(f0, m(Y_WATER))),
    side: quad(proj(b0, m(Y_BOT)), proj(f0, m(Y_BOT)), proj(f0, m(Y_WATER)), proj(b0, m(Y_WATER))),
    top: Math.min(top[1], bottom[1]),
    bottom: Math.max(top[1], bottom[1]),
    left: Math.min(proj(b0, Y_BOT)[0], proj(f0, Y_BOT)[0]) - 4,
    right: proj(f1, Y_BOT)[0] + 4,
  };
};

// Rækværkets stolper: jævnt fordelt på broen → tættere og tættere mod horisonten
const POSTS = Array.from({ length: 90 }, (_, i) => {
  const s = Math.max(S0 + 0.004, (i / 89) ** 1.15);
  const a = proj(axis(s), Y_RAIL);
  const b = proj(axis(s), Y_TOP);
  return `M${a[0].toFixed(1)} ${a[1].toFixed(1)}L${b[0].toFixed(1)} ${b[1].toFixed(1)}`;
}).join("");

const TREES =
  "M0 352 L0 338 C40 334 70 330 110 333 C150 336 170 326 215 328 C260 330 290 336 340 337 C400 338 430 341 470 344 L520 346 C600 345 660 340 720 336 C780 332 830 326 890 324 C950 322 1000 318 1060 316 C1110 314 1160 318 1200 321 L1200 352Z";

function Lights() {
  // Billygter, der kører hen over broen (opdateres direkte på DOM-noderne – ingen re-renders)
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const cars = [
    { speed: 0.055, off: 0, color: "#ffe2a8", lane: 0.25, dir: 1 },
    { speed: 0.045, off: 0.45, color: "#ff8a8a", lane: 0.85, dir: -1 },
    { speed: 0.06, off: 0.7, color: "#ffe2a8", lane: 0.3, dir: 1 },
    { speed: 0.04, off: 0.2, color: "#ff8a8a", lane: 0.9, dir: -1 },
  ];
  useAnimationFrame((t) => {
    cars.forEach((c, i) => {
      const el = refs[i].current;
      if (!el) return;
      let p = ((t / 1000) * c.speed + c.off) % 1;
      if (c.dir < 0) p = 1 - p;
      const s = S0 + 0.01 + p ** 1.6 * (S1 - S0 - 0.01);
      const [x, y] = proj(axis(s, c.lane), Y_RAIL - 0.12);
      const z = axis(s)[1];
      el.setAttribute("cx", x.toFixed(1));
      el.setAttribute("cy", y.toFixed(1));
      el.setAttribute("r", Math.max(0.8, 26 / z).toFixed(2));
      el.setAttribute("opacity", z > 40 ? "0.4" : "1");
    });
  });
  return (
    <g filter="url(#br-glow)">
      {cars.map((c, i) => (
        <circle key={i} ref={refs[i]} r="2" fill={c.color} />
      ))}
    </g>
  );
}

function BridgeGeometry({ reflected = false, build = true, shown = true }) {
  const m = reflected ? mirror : (y) => y;
  const d = deck(m);
  const piers = PIER_S.map((s) => pier(s, m));
  const reduce = useReducedMotion();
  const anim = build && !reduce && !reflected;
  return (
    <g>
      {piers.map((p, i) => (
        <g key={i}>
          {anim && (
            <clipPath id={`br-pc-${i}`}>
              <motion.rect
                x={p.left}
                width={p.right - p.left}
                initial={{ y: p.bottom, height: 0 }}
                animate={shown ? { y: p.top - 2, height: p.bottom - p.top + 4 } : { y: p.bottom, height: 0 }}
                transition={{ delay: 0.25 + i * 0.09, duration: 1.1, ease }}
              />
            </clipPath>
          )}
          <g clipPath={anim ? `url(#br-pc-${i})` : undefined}>
            <polygon points={p.side} fill="url(#br-pier-side)" />
            <polygon points={p.front} fill="url(#br-pier)" />
          </g>
        </g>
      ))}
      <g clipPath={anim ? "url(#br-deck-clip)" : undefined}>
        <polygon points={d.under} fill="url(#br-under)" />
        <polygon points={d.side} fill="url(#br-side)" />
        <polygon points={d.rail} fill="#dfe9ee" opacity="0.18" />
        {!reflected && <path d={POSTS} stroke="#e9f2f5" strokeWidth="1.2" opacity="0.75" />}
        <line
          x1={proj(nearA, m(Y_RAIL))[0]}
          y1={proj(nearA, m(Y_RAIL))[1]}
          x2={proj(nearB, m(Y_RAIL))[0]}
          y2={proj(nearB, m(Y_RAIL))[1]}
          stroke="#f4f9fb"
          strokeWidth="2"
        />
        <line
          x1={proj(nearA, m(Y_BOT))[0]}
          y1={proj(nearA, m(Y_BOT))[1]}
          x2={proj(nearB, m(Y_BOT))[0]}
          y2={proj(nearB, m(Y_BOT))[1]}
          stroke="#0f1d24"
          strokeWidth="3"
          opacity="0.6"
        />
      </g>
    </g>
  );
}

export function BridgeScene() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yBridge = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [18, -18]);
  const ySky = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-10, 10]);
  const yMirror = useTransform(yBridge, (v) => -v);
  const shown = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[4/3] sm:aspect-[16/9] lg:aspect-[15/7] shadow-[0_40px_100px_-40px_rgba(0,168,232,0.45)]"
    >
      <svg viewBox={`0 0 ${BW} ${BH}`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" role="img" aria-label="Illustration af Vejlefjordbroen over Vejle Fjord">
        <defs>
          <linearGradient id="br-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#081520" />
            <stop offset="55%" stopColor="#14394d" />
            <stop offset="100%" stopColor="#3f8aa6" />
          </linearGradient>
          <linearGradient id="br-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1d5068" />
            <stop offset="35%" stopColor="#0f2d3c" />
            <stop offset="100%" stopColor="#07141b" />
          </linearGradient>
          <linearGradient id="br-side" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#f2f7f9" />
            <stop offset="60%" stopColor="#c6d6dd" />
            <stop offset="100%" stopColor="#8aa6b3" />
          </linearGradient>
          <linearGradient id="br-under" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#3b525d" />
            <stop offset="100%" stopColor="#1c2f38" />
          </linearGradient>
          <linearGradient id="br-pier" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#e7eff2" />
            <stop offset="100%" stopColor="#a9bec7" />
          </linearGradient>
          <linearGradient id="br-pier-side" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6d8794" />
            <stop offset="100%" stopColor="#8fa8b3" />
          </linearGradient>
          <radialGradient id="br-sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#bfeaff" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#00a8e8" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="br-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="br-reflect-mask">
            <rect x="0" y={CY} width={BW} height={BH - CY} fill="url(#br-fade)" />
          </mask>
          <filter id="br-ripple" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.004 0.09" numOctaves="2" seed="3" result="n">
              {!reduce && <animate attributeName="baseFrequency" dur="14s" values="0.004 0.09;0.006 0.12;0.004 0.09" repeatCount="indefinite" />}
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="14" />
          </filter>
          <filter id="br-glow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="2.2" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="br-cloud">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          <clipPath id="br-deck-clip">
            <motion.rect
              x="-10"
              y="0"
              height={BH}
              initial={{ width: reduce ? BW + 20 : 0 }}
              animate={{ width: shown || reduce ? BW + 20 : 0 }}
              transition={{ duration: 2.2, delay: 0.3, ease }}
            />
          </clipPath>
        </defs>

        {/* Himmel, lys og skyer */}
        <motion.g style={{ y: ySky }}>
          <rect x="0" y="-40" width={BW} height={CY + 60} fill="url(#br-sky)" />
          <motion.circle
            cx="930" cy="250" r="190" fill="url(#br-sun)"
            animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          {[
            [180, 120, 170, 34, 60],
            [520, 70, 220, 30, 80],
            [880, 140, 190, 26, 70],
            [1100, 90, 160, 24, 90],
          ].map(([x, y, rx, ry, dur], i) => (
            <motion.ellipse
              key={i} cx={x} cy={y} rx={rx} ry={ry} fill="#9fc9db" opacity="0.16" filter="url(#br-cloud)"
              animate={reduce ? undefined : { x: [0, 60, 0] }}
              transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </motion.g>

        {/* Fjorden */}
        <rect x="0" y={CY} width={BW} height={BH - CY} fill="url(#br-water)" />

        {/* Kystlinje med skov og byen – inkl. Bølgens hvide tage langt væk */}
        <path d={TREES} fill="#0b2029" />
        <g opacity="0.9">
          {[[150, 331, 7], [162, 329, 9], [176, 330, 7], [189, 331, 6], [200, 332, 5]].map(([x, y, h], i) => (
            <path key={i} d={`M${x} ${y + h} L${x + 6} ${y} Q${x + 8} ${y - 1.5} ${x + 9.5} ${y + 1} L${x + 11} ${y + h}Z`} fill="#e9f2f5" />
          ))}
          {[[60, 334, 14, 6], [86, 331, 10, 9], [110, 335, 18, 5], [226, 336, 12, 5], [250, 337, 16, 4]].map(([x, y, w, h], i) => (
            <rect key={i} x={x} y={y} width={w} height={h} fill="#1d3a46" />
          ))}
        </g>
        <path d={TREES} fill="#0b2029" opacity="0.35" transform={`translate(0 ${2 * CY}) scale(1 -1)`} />

        {/* Spejling i vandet – med bølger */}
        <g mask="url(#br-reflect-mask)" filter="url(#br-ripple)">
          <motion.g
            style={{ y: yMirror }}
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: shown || reduce ? 1 : 0 }}
            transition={{ delay: 1.2, duration: 1.4 }}
          >
            <BridgeGeometry reflected />
          </motion.g>
        </g>

        {/* Lysstriber på vandet */}
        {!reduce &&
          [[200, 470, 120], [640, 420, 90], [900, 520, 160], [380, 560, 140], [1040, 450, 70]].map(([x, y, w], i) => (
            <motion.rect
              key={i} x={x} y={y} width={w} height="1.6" rx="1" fill="#bfeaff" opacity="0.25"
              animate={{ x: [0, -40, 0], opacity: [0.08, 0.32, 0.08] }}
              transition={{ duration: 6 + i * 1.4, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

        {/* Selve broen */}
        <motion.g style={{ y: yBridge }}>
          <BridgeGeometry shown={shown} />
          {!reduce && shown && <Lights />}
        </motion.g>
      </svg>

      {/* Mærkater */}
      <motion.div
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={inView}
        transition={{ delay: 1.6, duration: 0.8, ease }}
        className="absolute right-4 sm:right-8 top-4 sm:top-8 rounded-2xl glass px-4 py-3"
      >
        <p className="text-[10.5px] uppercase tracking-[0.16em] text-[#9fd8f0]">E45 · Vejle Fjord</p>
        <p className="text-[15px] sm:text-[17px] font-semibold text-white mt-1">Vejlefjordbroen</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={inView}
        transition={{ delay: 1.9, duration: 0.8, ease }}
        className="absolute left-3 right-3 sm:left-8 sm:right-auto sm:w-[420px] bottom-3 sm:bottom-8 rounded-2xl glass px-4 sm:px-5 py-3.5 flex items-center gap-3 sm:gap-4"
      >
        <span className="text-[13px] sm:text-[14px] font-semibold text-white whitespace-nowrap">Horsens</span>
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
        <span className="text-[13px] sm:text-[14px] font-semibold text-white whitespace-nowrap">Vejle</span>
        <span className="text-[12px] sm:text-[13px] text-[#00a8e8] whitespace-nowrap">ca. 25–30 min</span>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════ Bølgen ved Vejle Fjord ═══════════════════════
 * Fem bølgeformede boliger med glasfacader, hvide tage og lys i vinduerne – spejlet i vandet.
 */
const GW = 1200;
const GH = 675;
const BASE = 430;
const WATER = 458;
const SIZES = [
  [330, 300],
  [250, 232],
  [206, 192],
  [170, 160],
  [140, 134],
];
const BUILDINGS = (() => {
  let x = 120;
  return SIZES.map(([w, h], i) => {
    const b = { i, x0: x, w, h };
    x += w * 0.86;
    return b;
  });
})();
const wavePath = ({ x0, w, h }) =>
  `M${x0} ${BASE} L${x0 + 0.62 * w} ${BASE - 0.93 * h} C${x0 + 0.68 * w} ${BASE - 1.03 * h} ${x0 + 0.8 * w} ${BASE - 1.03 * h} ${x0 + 0.84 * w} ${BASE - 0.9 * h} C${x0 + 0.9 * w} ${BASE - 0.66 * h} ${x0 + 0.96 * w} ${BASE - 0.3 * h} ${x0 + w} ${BASE}`;
// Deterministisk "tilfældighed", så server og browser tegner samme vinduer
const rnd = (n) => {
  const v = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return v - Math.floor(v);
};

function Wave({ b, reflected, reduce, shown = true }) {
  const d = wavePath(b);
  const rows = Math.floor((b.h * 0.95) / 17);
  const cols = Math.floor(b.w / 21);
  const windows = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const k = b.i * 1000 + r * 40 + c;
      windows.push({ x: b.x0 + 6 + c * 21, y: BASE - 16 - r * 17, lit: rnd(k) > 0.62, tw: rnd(k + 7) > 0.85, k });
    }
  }
  const anim = !reduce && !reflected;
  return (
    <g>
      <clipPath id={`wv-${b.i}-${reflected ? "r" : "n"}`}>
        <path d={`${d}Z`} />
      </clipPath>
      {anim && (
        <clipPath id={`wv-rise-${b.i}`}>
          <motion.rect
            x={b.x0 - 30}
            width={b.w + 60}
            initial={{ y: BASE, height: 0 }}
            animate={shown ? { y: BASE - b.h - 40, height: b.h + 44 } : { y: BASE, height: 0 }}
            transition={{ delay: 0.2 + (4 - b.i) * 0.14, duration: 1.3, ease }}
          />
        </clipPath>
      )}
      <g clipPath={anim ? `url(#wv-rise-${b.i})` : undefined}>
        <path d={`${d}Z`} fill="url(#gw-glass)" />
        <g clipPath={`url(#wv-${b.i}-${reflected ? "r" : "n"})`}>
          {windows.map((w) =>
            anim && w.lit ? (
              <motion.rect
                key={w.k}
                x={w.x}
                y={w.y}
                width="15"
                height="10"
                rx="1"
                fill="#f6c983"
                initial={{ opacity: 0 }}
                animate={shown ? { opacity: w.tw ? [0, 0.95, 0.35, 0.95] : [0, 0.95] } : { opacity: 0 }}
                transition={{ delay: 1.2 + rnd(w.k + 3) * 1.8, duration: w.tw ? 6 + rnd(w.k) * 4 : 0.6, repeat: w.tw ? Infinity : 0 }}
              />
            ) : (
              <rect key={w.k} x={w.x} y={w.y} width="15" height="10" rx="1" fill={w.lit ? "#f6c983" : "#3c5a66"} opacity={w.lit ? 0.9 : 0.5} />
            )
          )}
          {Array.from({ length: rows }, (_, r) => (
            <line key={r} x1={b.x0} x2={b.x0 + b.w} y1={BASE - 4 - r * 17} y2={BASE - 4 - r * 17} stroke="#a9c3cc" strokeOpacity="0.35" strokeWidth="1.2" />
          ))}
        </g>
        {/* Det hvide tag: tyk bue over hele formen + lys kant langs skråningen */}
        <path d={d} fill="none" stroke="#eef4f6" strokeWidth={b.w * 0.05} strokeLinejoin="round" strokeLinecap="round" />
        <path d={d} fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.7" transform={`translate(${-b.w * 0.012} ${-b.w * 0.012})`} />
      </g>
    </g>
  );
}

export function BoelgenScene() {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yHill = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-12, 12]);
  const yHouses = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [10, -10]);
  const order = [...BUILDINGS].reverse(); // de små bagerst
  const shown = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[4/3] sm:aspect-[16/9]">
      <svg viewBox={`0 0 ${GW} ${GH}`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" role="img" aria-label="Illustration af Bølgen – de bølgeformede boliger ved Vejle Fjord">
        <defs>
          <linearGradient id="gw-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0e1c24" />
            <stop offset="60%" stopColor="#2b4a58" />
            <stop offset="100%" stopColor="#8fb1bf" />
          </linearGradient>
          <linearGradient id="gw-glass" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3f6b7a" />
            <stop offset="100%" stopColor="#1b3640" />
          </linearGradient>
          <linearGradient id="gw-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3a5d6b" />
            <stop offset="100%" stopColor="#0a171d" />
          </linearGradient>
          <linearGradient id="gw-fade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id="gw-mask">
            <rect x="0" y={WATER} width={GW} height={GH - WATER} fill="url(#gw-fade)" />
          </mask>
          <filter id="gw-ripple" x="-5%" y="-5%" width="110%" height="110%">
            <feTurbulence type="fractalNoise" baseFrequency="0.003 0.07" numOctaves="2" seed="8" result="n">
              {!reduce && <animate attributeName="baseFrequency" dur="12s" values="0.003 0.07;0.005 0.1;0.003 0.07" repeatCount="indefinite" />}
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="n" scale="16" />
          </filter>
          <filter id="gw-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <rect width={GW} height={WATER} fill="url(#gw-sky)" />
        <motion.path
          style={{ y: yHill }}
          d="M640 470 C700 330 760 280 860 250 C960 222 1050 214 1200 196 L1200 470Z"
          fill="#12242b"
        />
        <motion.path
          style={{ y: yHill }}
          d="M0 440 C60 400 120 392 180 400 L180 470 L0 470Z"
          fill="#18303a"
        />

        <rect x="0" y={WATER} width={GW} height={GH - WATER} fill="url(#gw-water)" />

        {/* Spejling */}
        <g mask="url(#gw-mask)" filter="url(#gw-ripple)">
          <g transform={`translate(0 ${BASE + WATER}) scale(1 -1)`} opacity="0.75">
            {order.map((b) => (
              <Wave key={b.i} b={b} reflected reduce={reduce} />
            ))}
          </g>
        </g>

        {/* Bygningerne */}
        <motion.g style={{ y: yHouses }}>
          {order.map((b) => (
            <Wave key={b.i} b={b} reduce={reduce} shown={shown} />
          ))}
          {/* Promenade og trappe ned til vandet */}
          <rect x="60" y={BASE} width={GW - 60} height={WATER - BASE} fill="#1a2a30" />
          <rect x="60" y={BASE} width={GW - 60} height="3" fill="#7d97a2" opacity="0.5" />
          <g filter="url(#gw-glow)">
            {Array.from({ length: 22 }, (_, i) => (
              <motion.circle
                key={i}
                cx={90 + i * 50}
                cy={BASE + 14}
                r="2.2"
                fill="#ffd28f"
                animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </g>
        </motion.g>
      </svg>
      <motion.div
        initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={inView}
        transition={{ delay: 1.4, duration: 0.8, ease }}
        className="absolute left-4 sm:left-7 top-4 sm:top-7 rounded-2xl glass px-4 py-3"
      >
        <p className="text-[10.5px] uppercase tracking-[0.16em] text-[#9fd8f0]">Vejle Havn</p>
        <p className="text-[15px] sm:text-[17px] font-semibold text-white mt-1">Bølgen</p>
      </motion.div>
    </div>
  );
}

/** Hero-illustration pr. by. Flere byer tilføjes her. */
export default function CityScene({ city }) {
  if (city === "vejle") return <BridgeScene />;
  return null;
}
