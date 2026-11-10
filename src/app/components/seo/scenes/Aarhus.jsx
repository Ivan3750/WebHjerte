"use client";

import { useRef } from "react";
import { motion, useTransform, useAnimationFrame } from "framer-motion";
import { ease, rnd, useScene, SceneFrame, Chip, RouteChip, WaterDefs, Clouds, Lit } from "./shared";

/* ═══════════════════════ ARoS med regnbuepanoramaet ═══════════════════════ */
const W = 1200;
const H = 640;
const GROUND = 500;

// Byens silhuet i baggrunden
const SKY_LINE = Array.from({ length: 26 }, (_, i) => {
  const w = 34 + rnd(i) * 40;
  const h = 60 + rnd(i + 50) * 130;
  return { x: i * 48 - 10, w, h, k: i };
});

// Regnbuepanoramaet: et rundt glasbånd på taget, set lidt nedefra
const RC = { x: 760, y: 262, rx: 182, ry: 24, band: 26 };
const SEG = 36;
const ringSeg = (i) => {
  const a0 = (i / SEG) * Math.PI * 2;
  const a1 = ((i + 1) / SEG) * Math.PI * 2;
  const p = (a, dy) => [RC.x + RC.rx * Math.cos(a), RC.y + RC.ry * Math.sin(a) + dy];
  const [x0, y0] = p(a0, 0);
  const [x1, y1] = p(a1, 0);
  const [x2, y2] = p(a1, -RC.band);
  const [x3, y3] = p(a0, -RC.band);
  const front = Math.sin((a0 + a1) / 2) > 0;
  return { d: `M${x0} ${y0} L${x1} ${y1} L${x2} ${y2} L${x3} ${y3}Z`, front, a: (a0 + a1) / 2 };
};
const RING = Array.from({ length: SEG }, (_, i) => ({ ...ringSeg(i), i }));

function Rainbow({ shown, reduce }) {
  const refs = useRef([]);
  useAnimationFrame((t) => {
    if (reduce) return;
    const off = (t / 90) % 360;
    RING.forEach((s, i) => {
      const el = refs.current[i];
      if (el) el.setAttribute("fill", `hsl(${((s.a / (Math.PI * 2)) * 360 + off) % 360} 85% ${s.front ? 62 : 48}%)`);
    });
  });
  const ordered = [...RING].sort((a, b) => Number(a.front) - Number(b.front)); // bagside først
  return (
    <g>
      {ordered.map((s) => (
        <motion.path
          key={s.i}
          ref={(el) => (refs.current[s.i] = el)}
          d={s.d}
          fill={`hsl(${(s.a / (Math.PI * 2)) * 360} 85% ${s.front ? 62 : 48}%)`}
          stroke="#0b1220"
          strokeWidth="0.6"
          initial={{ opacity: 0 }}
          animate={shown ? { opacity: s.front ? 0.92 : 0.45 } : { opacity: 0 }}
          transition={{ delay: 0.9 + (s.i / SEG) * 1.2, duration: 0.5 }}
        />
      ))}
      {/* Søjler, der bærer ringen */}
      {RING.filter((s) => s.front && s.i % 3 === 0).map((s) => {
        const x = RC.x + RC.rx * Math.cos(s.a);
        const y = RC.y + RC.ry * Math.sin(s.a);
        return <line key={`p${s.i}`} x1={x} y1={y} x2={x} y2={300} stroke="#0d1424" strokeWidth="2" opacity="0.8" />;
      })}
    </g>
  );
}

export function ArosScene() {
  const ref = useRef(null);
  const { reduce, shown, progress } = useScene(ref);
  const yCity = useTransform(progress, [0, 1], reduce ? [0, 0] : [-10, 10]);
  const yAros = useTransform(progress, [0, 1], reduce ? [0, 0] : [16, -16]);

  return (
    <SceneFrame sceneRef={ref}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" role="img" aria-label="Illustration af ARoS i Aarhus med regnbuepanoramaet på taget">
        <defs>
          <linearGradient id="ar-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a1020" />
            <stop offset="55%" stopColor="#23284f" />
            <stop offset="100%" stopColor="#a35a74" />
          </linearGradient>
          <linearGradient id="ar-brick" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9a4a37" />
            <stop offset="100%" stopColor="#5b2a20" />
          </linearGradient>
          <linearGradient id="ar-side" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#4c231b" />
            <stop offset="100%" stopColor="#3a1a14" />
          </linearGradient>
          <radialGradient id="ar-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff8ad1" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#7aa8ff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#00a8e8" stopOpacity="0" />
          </radialGradient>
          <WaterDefs id="ar" top={GROUND} width={W} height={H} reduce={reduce} />
        </defs>

        <rect width={W} height={GROUND} fill="url(#ar-sky)" />
        <Clouds id="ar" reduce={reduce} color="#c9a8d8" opacity={0.12} items={[[200, 110, 190, 30, 70], [620, 70, 230, 26, 90], [1020, 140, 180, 28, 80]]} />

        {/* Glorie fra regnbuen */}
        <motion.ellipse
          cx={RC.x} cy={RC.y - 10} rx="330" ry="150" fill="url(#ar-halo)"
          initial={{ opacity: 0 }}
          animate={shown ? { opacity: reduce ? 1 : [0.6, 1, 0.6] } : { opacity: 0 }}
          transition={{ duration: 6, repeat: reduce ? 0 : Infinity, ease: "easeInOut", delay: 1 }}
        />

        {/* Byens silhuet */}
        <motion.g style={{ y: yCity }}>
          {SKY_LINE.map((b) => (
            <g key={b.k}>
              <rect x={b.x} y={GROUND - b.h} width={b.w} height={b.h} fill="#151b31" />
              {Array.from({ length: Math.floor(b.h / 22) }, (_, r) =>
                Array.from({ length: Math.floor(b.w / 14) }, (_, c) => {
                  const k = b.k * 500 + r * 20 + c;
                  return rnd(k) > 0.8 ? (
                    <Lit key={k} k={k} x={b.x + 5 + c * 14} y={GROUND - b.h + 8 + r * 22} w="6" h="8" shown={shown} reduce={reduce} base={0.7} />
                  ) : null;
                })
              )}
            </g>
          ))}
          {/* Rådhustårnet */}
          <rect x="250" y="190" width="46" height={GROUND - 190} fill="#1d2440" />
          <rect x="246" y="186" width="54" height="10" fill="#26304f" />
          <line x1="273" y1="186" x2="273" y2="160" stroke="#26304f" strokeWidth="3" />
          <circle cx="273" cy="222" r="12" fill="#f3e3b5" opacity="0.85" />
          <line x1="273" y1="222" x2="273" y2="214" stroke="#1d2440" strokeWidth="2" />
          <line x1="273" y1="222" x2="279" y2="222" stroke="#1d2440" strokeWidth="2" />
        </motion.g>

        {/* ARoS */}
        <motion.g style={{ y: yAros }}>
          <motion.g
            initial={{ y: 60, opacity: 0 }}
            animate={shown ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }}
            transition={{ duration: 1.3, ease }}
          >
            <polygon points={`940,300 1000,318 1000,${GROUND} 940,${GROUND}`} fill="url(#ar-side)" />
            <rect x="580" y="300" width="360" height={GROUND - 300} fill="url(#ar-brick)" />
            {Array.from({ length: 9 }, (_, i) => (
              <line key={i} x1="580" x2="940" y1={316 + i * 20} y2={316 + i * 20} stroke="#3e1b14" strokeOpacity="0.35" />
            ))}
            <rect x="730" y="410" width="60" height="90" fill="#1a0f0c" />
            <rect x="736" y="416" width="48" height="84" fill="#f6c983" opacity="0.25" />
            <text x="604" y="336" fontSize="22" fontWeight="700" fill="#f2d9c8" opacity="0.85" letterSpacing="2">ARoS</text>
          </motion.g>
          <Rainbow shown={shown} reduce={reduce} />
        </motion.g>

        {/* Pladsen og vandspejl */}
        <rect x="0" y={GROUND} width={W} height={H - GROUND} fill="#0b1020" />
        <g mask="url(#ar-mask)" filter="url(#ar-ripple)" opacity="0.5">
          <g transform={`translate(0 ${2 * GROUND}) scale(1 -1)`}>
            <rect x="580" y="300" width="360" height={GROUND - 300} fill="url(#ar-brick)" />
            <ellipse cx={RC.x} cy={RC.y - 12} rx={RC.rx} ry={RC.ry + 8} fill="url(#ar-halo)" />
          </g>
        </g>
      </svg>
      <Chip shown={shown} kicker="Aarhus · Your rainbow panorama" title="ARoS" className="right-4 sm:right-8 top-4 sm:top-8" />
      <RouteChip shown={shown} reduce={reduce} from="Horsens" to="Aarhus" time="ca. 45 min" />
    </SceneFrame>
  );
}

/* ═══════════════════════ Isbjerget på Aarhus Ø ═══════════════════════ */
const BASE = 430;
const WATER = 456;
const ICE = [
  { x0: 90, w: 250, h: 260, pk: [0.45, 1, 0.62, 0.7, 0.86, 0.9, 1, 0.48] },
  { x0: 330, w: 230, h: 230, pk: [0.5, 0.78, 0.4, 1, 0.7, 0.62, 1, 0.42] },
  { x0: 555, w: 260, h: 290, pk: [0.4, 0.92, 0.55, 0.66, 0.75, 1, 1, 0.5] },
  { x0: 805, w: 220, h: 220, pk: [0.55, 1, 0.45, 0.7, 0.8, 0.85, 1, 0.38] },
  { x0: 1015, w: 200, h: 180, pk: [0.45, 0.9, 0.6, 0.6, 0.85, 1, 1, 0.5] },
];
const icePts = ({ x0, w, h, pk }) => {
  const [y0, a, xa, b, xb, c, , y1] = pk;
  return [
    [x0, BASE],
    [x0, BASE - y0 * h],
    [x0 + xa * w * 0.45, BASE - a * h],
    [x0 + xa * w * 0.85, BASE - b * h],
    [x0 + xb * w, BASE - c * h],
    [x0 + w, BASE - y1 * h],
    [x0 + w, BASE],
  ];
};

function Iceberg({ b, i, shown, reduce, reflected }) {
  const pts = icePts(b);
  const poly = pts.map((p) => p.join(",")).join(" ");
  const clipId = `ice-${i}-${reflected ? "r" : "n"}`;
  return (
    <motion.g
      initial={reflected || reduce ? false : { y: 80, opacity: 0 }}
      animate={reflected || reduce ? undefined : shown ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
      transition={{ delay: 0.15 + i * 0.15, duration: 1.2, ease }}
    >
      <clipPath id={clipId}>
        <polygon points={poly} />
      </clipPath>
      <polygon points={poly} fill="url(#is-white)" />
      <g clipPath={`url(#${clipId})`}>
        {/* Blå altanbånd på skrå */}
        {Array.from({ length: 14 }, (_, r) => (
          <line key={r} x1={b.x0 - 40} y1={BASE - r * 22} x2={b.x0 + b.w + 40} y2={BASE - r * 22 - 46} stroke="#2f9fd8" strokeWidth="7" opacity="0.55" />
        ))}
        {Array.from({ length: 10 }, (_, r) =>
          Array.from({ length: Math.floor(b.w / 26) }, (_, c) => {
            const k = i * 900 + r * 30 + c;
            return rnd(k) > 0.7 ? (
              <Lit key={k} k={k} x={b.x0 + 8 + c * 26} y={BASE - 30 - r * 24} w="12" h="9" shown={shown || reflected} reduce={reduce || reflected} base={0.85} />
            ) : null;
          })
        )}
        {/* Lysglimt, der glider hen over glasset */}
        {!reduce && !reflected && (
          <motion.rect
            x={b.x0 - 120} y={BASE - b.h - 20} width="60" height={b.h + 40} fill="#ffffff" opacity="0.18"
            transform={`skewX(-20)`}
            animate={{ x: [b.x0 - 200, b.x0 + b.w + 200] }}
            transition={{ duration: 5, repeat: Infinity, repeatDelay: 4 + i, ease: "easeInOut", delay: 2 + i * 0.6 }}
          />
        )}
      </g>
      <polyline points={pts.slice(1, -1).map((p) => p.join(",")).join(" ")} fill="none" stroke="#ffffff" strokeWidth="3" strokeLinejoin="round" />
    </motion.g>
  );
}

export function IsbjergetScene() {
  const ref = useRef(null);
  const { reduce, shown, progress } = useScene(ref);
  const yB = useTransform(progress, [0, 1], reduce ? [0, 0] : [10, -10]);
  return (
    <SceneFrame sceneRef={ref} aspect="aspect-[4/3] sm:aspect-[16/9]">
      <svg viewBox="0 0 1200 675" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" role="img" aria-label="Illustration af Isbjerget på Aarhus Ø">
        <defs>
          <linearGradient id="is-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0c1a26" />
            <stop offset="65%" stopColor="#24526b" />
            <stop offset="100%" stopColor="#9cc7d8" />
          </linearGradient>
          <linearGradient id="is-white" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#f4f8fa" />
            <stop offset="100%" stopColor="#b9cbd3" />
          </linearGradient>
          <linearGradient id="is-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2e6178" />
            <stop offset="100%" stopColor="#08151c" />
          </linearGradient>
          <WaterDefs id="is" top={WATER} width={1200} height={675} reduce={reduce} scale={16} />
        </defs>
        <rect width="1200" height={WATER} fill="url(#is-sky)" />
        <Clouds id="is" reduce={reduce} items={[[260, 120, 200, 30, 70], [800, 90, 240, 26, 85]]} />
        <rect x="0" y={WATER} width="1200" height={675 - WATER} fill="url(#is-water)" />
        <g mask="url(#is-mask)" filter="url(#is-ripple)">
          <g transform={`translate(0 ${BASE + WATER}) scale(1 -1)`} opacity="0.7">
            {ICE.map((b, i) => (
              <Iceberg key={i} b={b} i={i} reflected reduce={reduce} shown={shown} />
            ))}
          </g>
        </g>
        <motion.g style={{ y: yB }}>
          {[...ICE].reverse().map((b) => {
            const i = ICE.indexOf(b);
            return <Iceberg key={i} b={b} i={i} reduce={reduce} shown={shown} />;
          })}
          <rect x="0" y={BASE} width="1200" height={WATER - BASE} fill="#16252c" />
          <g filter="url(#is-glow)">
            {Array.from({ length: 24 }, (_, i) => (
              <motion.circle
                key={i} cx={30 + i * 50} cy={BASE + 13} r="2.2" fill="#ffd28f"
                animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.2 }}
              />
            ))}
          </g>
        </motion.g>
      </svg>
      <Chip shown={shown} kicker="Aarhus Ø" title="Isbjerget" className="left-4 sm:left-7 top-4 sm:top-7" delay={1.2} />
    </SceneFrame>
  );
}
