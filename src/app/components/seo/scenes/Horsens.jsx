"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { ease, rnd, useScene, SceneFrame, Chip, WaterDefs, Clouds, Lit } from "./shared";

/* ═══════════════════════ Fængslet i Horsens ═══════════════════════
 * Det gamle statsfængsel i gule mursten – i dag museum og kulturhus. Projektørlys fejer over himlen.
 */
const W = 1200;
const H = 640;
const GROUND = 520;

const WINGS = [
  { x: 120, y: 330, w: 380, rows: 4 },
  { x: 700, y: 330, w: 380, rows: 4 },
];

function Windows({ x, y, w, rows, k0, shown, reduce }) {
  const cols = Math.floor(w / 30);
  const out = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const k = k0 + r * 40 + c;
      const wx = x + 12 + c * 30;
      const wy = y + 22 + r * 44;
      out.push(
        <g key={k}>
          <path d={`M${wx} ${wy + 24} V${wy + 6} A7 7 0 0 1 ${wx + 14} ${wy + 6} V${wy + 24}Z`} fill="#3a2c1c" />
          {rnd(k) > 0.68 && (
            <Lit k={k} x={wx + 1.5} y={wy + 4} w="11" h="19" rx="5" shown={shown} reduce={reduce} base={0.75} />
          )}
          {/* Tremmer */}
          <line x1={wx + 5} x2={wx + 5} y1={wy + 2} y2={wy + 24} stroke="#2a1f14" strokeWidth="1.2" />
          <line x1={wx + 9} x2={wx + 9} y1={wy + 2} y2={wy + 24} stroke="#2a1f14" strokeWidth="1.2" />
        </g>
      );
    }
  }
  return <g>{out}</g>;
}

export function FaengsletScene() {
  const ref = useRef(null);
  const { reduce, shown, progress } = useScene(ref);
  const yB = useTransform(progress, [0, 1], reduce ? [0, 0] : [16, -16]);
  const ySky = useTransform(progress, [0, 1], reduce ? [0, 0] : [-10, 10]);

  return (
    <SceneFrame sceneRef={ref}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" role="img" aria-label="Illustration af Fængslet i Horsens">
        <defs>
          <linearGradient id="fg-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0a1219" />
            <stop offset="60%" stopColor="#1a3442" />
            <stop offset="100%" stopColor="#4f7d8c" />
          </linearGradient>
          <linearGradient id="fg-brick" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#e1c27e" />
            <stop offset="100%" stopColor="#a9884d" />
          </linearGradient>
          <linearGradient id="fg-roof" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3c4a50" />
            <stop offset="100%" stopColor="#273136" />
          </linearGradient>
          <linearGradient id="fg-beam" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#dff4ff" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#dff4ff" stopOpacity="0" />
          </linearGradient>
          <WaterDefs id="fg" top={GROUND} width={W} height={H} reduce={reduce} />
        </defs>

        <motion.g style={{ y: ySky }}>
          <rect y="-40" width={W} height={GROUND + 60} fill="url(#fg-sky)" />
          <Clouds id="fg" reduce={reduce} items={[[220, 120, 200, 30, 70], [700, 80, 240, 26, 90], [1060, 150, 170, 26, 80]]} />
          {/* Projektørlys, der fejer */}
          {!reduce && (
            <>
              <polygon points="600,200 540,-360 660,-360" fill="url(#fg-beam)">
                <animateTransform attributeName="transform" type="rotate" values="-38 600 200;38 600 200;-38 600 200" dur="12s" repeatCount="indefinite" />
              </polygon>
              <polygon points="600,200 555,-300 645,-300" fill="url(#fg-beam)">
                <animateTransform attributeName="transform" type="rotate" values="30 600 200;-30 600 200;30 600 200" dur="15s" repeatCount="indefinite" />
              </polygon>
            </>
          )}
        </motion.g>

        <motion.g style={{ y: yB }}>
          <motion.g
            initial={reduce ? false : { y: 70, opacity: 0 }}
            animate={shown ? { y: 0, opacity: 1 } : { y: 70, opacity: 0 }}
            transition={{ duration: 1.3, ease }}
          >
            {/* Fløje */}
            {WINGS.map((wg, i) => (
              <g key={i}>
                <polygon points={`${wg.x - 10},${wg.y} ${wg.x + 20},${wg.y - 46} ${wg.x + wg.w - 20},${wg.y - 46} ${wg.x + wg.w + 10},${wg.y}`} fill="url(#fg-roof)" />
                <rect x={wg.x} y={wg.y} width={wg.w} height={GROUND - wg.y} fill="url(#fg-brick)" />
                {Array.from({ length: 9 }, (_, r) => (
                  <line key={r} x1={wg.x} x2={wg.x + wg.w} y1={wg.y + 18 + r * 20} y2={wg.y + 18 + r * 20} stroke="#8d6f3c" strokeOpacity="0.25" />
                ))}
                <Windows x={wg.x} y={wg.y} w={wg.w} rows={wg.rows} k0={i * 1000} shown={shown} reduce={reduce} />
                {/* Skorstene */}
                <rect x={wg.x + 60} y={wg.y - 70} width="16" height="30" fill="#7d6236" />
                <rect x={wg.x + wg.w - 80} y={wg.y - 70} width="16" height="30" fill="#7d6236" />
              </g>
            ))}

            {/* Midterbygningen med gavl og tårn */}
            <polygon points="490,280 600,196 710,280" fill="url(#fg-roof)" />
            <rect x="490" y="280" width="220" height={GROUND - 280} fill="url(#fg-brick)" />
            <polygon points="500,280 600,206 700,280" fill="#d8b874" />
            <circle cx="600" cy="252" r="16" fill="#3a2c1c" />
            <Lit k={77} x={588} y={240} w={24} h={24} rx={12} shown={shown} reduce={reduce} color="#f9dca0" base={0.85} />
            <rect x="584" y="150" width="32" height="50" fill="#c6a663" />
            <polygon points="578,150 600,118 622,150" fill="#3c4a50" />
            <line x1="600" y1="118" x2="600" y2="100" stroke="#3c4a50" strokeWidth="3" />
            <Windows x={490} y={280} w={220} rows={4} k0={5000} shown={shown} reduce={reduce} />

            {/* Muren og porten */}
            <rect x="0" y={GROUND - 60} width={W} height="60" fill="#b18f53" />
            <rect x="0" y={GROUND - 64} width={W} height="6" fill="#8d6f3c" />
            <path d={`M560 ${GROUND} V${GROUND - 40} A40 40 0 0 1 640 ${GROUND - 40} V${GROUND}Z`} fill="#20160d" />
            <path d={`M568 ${GROUND} V${GROUND - 40} A32 32 0 0 1 632 ${GROUND - 40} V${GROUND}Z`} fill="#f6c983" opacity="0.2" />
            {Array.from({ length: 8 }, (_, i) => (
              <line key={i} x1={574 + i * 8} x2={574 + i * 8} y1={GROUND - 66} y2={GROUND} stroke="#20160d" strokeWidth="2" />
            ))}
          </motion.g>
          {/* Træer foran muren */}
          {[[60, 46], [150, 38], [1040, 44], [1130, 36], [330, 30], [870, 32]].map(([x, r], i) => (
            <motion.g
              key={i}
              animate={reduce ? undefined : { rotate: [0, 1.4, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut" }}
              style={{ originX: 0.5, originY: 1 }}
            >
              <rect x={x - 3} y={GROUND - r - 10} width="6" height={r + 10} fill="#1a2a24" />
              <circle cx={x} cy={GROUND - r - 14} r={r} fill="#16302a" />
              <circle cx={x - r * 0.4} cy={GROUND - r - 4} r={r * 0.7} fill="#1b3a32" />
            </motion.g>
          ))}
        </motion.g>

        <rect y={GROUND} width={W} height={H - GROUND} fill="#0e171b" />
        <g mask="url(#fg-mask)" filter="url(#fg-ripple)" opacity="0.45">
          <g transform={`translate(0 ${2 * GROUND}) scale(1 -1)`}>
            <rect x="0" y={GROUND - 60} width={W} height="60" fill="#b18f53" />
          </g>
        </g>
      </svg>
      <Chip shown={shown} kicker="Horsens" title="Fængslet" className="right-4 sm:right-8 top-4 sm:top-8" />
      <Chip shown={shown} kicker="WebHjerte" title="Her sidder jeg" className="left-4 sm:left-8 bottom-4 sm:bottom-8" delay={1.8} />
    </SceneFrame>
  );
}

/* ═══════════════════════ Horsens Fjord ═══════════════════════ */
const HZ = 380;

function Boat({ x, y, s, i, reduce }) {
  return (
    <motion.g
      animate={reduce ? undefined : { y: [0, -4, 0], rotate: [-1.5, 1.5, -1.5] }}
      transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
      style={{ originX: 0.5, originY: 1 }}
    >
      <motion.g
        animate={reduce ? undefined : { x: [0, 40 * (i % 2 ? -1 : 1), 0] }}
        transition={{ duration: 30 + i * 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d={`M${x - 34 * s} ${y} L${x + 34 * s} ${y} L${x + 24 * s} ${y + 10 * s} L${x - 26 * s} ${y + 10 * s}Z`} fill="#e9f2f5" />
        <line x1={x} y1={y} x2={x} y2={y - 70 * s} stroke="#e9f2f5" strokeWidth={2 * s} />
        <path d={`M${x + 2 * s} ${y - 68 * s} L${x + 2 * s} ${y - 6 * s} L${x + 40 * s} ${y - 6 * s}Z`} fill="#f4f8fa" />
        <path d={`M${x - 3 * s} ${y - 60 * s} L${x - 3 * s} ${y - 8 * s} L${x - 28 * s} ${y - 8 * s}Z`} fill={i % 2 ? "#00a8e8" : "#cfe3ea"} />
      </motion.g>
    </motion.g>
  );
}

export function HorsensFjordScene() {
  const ref = useRef(null);
  const { reduce, shown, progress } = useScene(ref);
  const yHill = useTransform(progress, [0, 1], reduce ? [0, 0] : [-10, 10]);
  return (
    <SceneFrame sceneRef={ref} aspect="aspect-[4/3] sm:aspect-[16/9]">
      <svg viewBox="0 0 1200 675" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" role="img" aria-label="Illustration af Horsens Fjord med sejlbåde">
        <defs>
          <linearGradient id="hf-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#13202b" />
            <stop offset="60%" stopColor="#5d6f88" />
            <stop offset="100%" stopColor="#f0b98a" />
          </linearGradient>
          <linearGradient id="hf-water" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#6d7f94" />
            <stop offset="30%" stopColor="#2a4252" />
            <stop offset="100%" stopColor="#0b1820" />
          </linearGradient>
          <radialGradient id="hf-sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffe2b0" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#ffb070" stopOpacity="0" />
          </radialGradient>
          <WaterDefs id="hf" top={HZ} width={1200} height={675} reduce={reduce} />
        </defs>
        <rect width="1200" height={HZ} fill="url(#hf-sky)" />
        <motion.circle
          cx="840" cy={HZ - 10} r="150" fill="url(#hf-sun)"
          initial={{ cy: HZ + 60 }} animate={shown ? { cy: HZ - 20 } : { cy: HZ + 60 }}
          transition={{ duration: 3, ease }}
        />
        <circle cx="840" cy={HZ - 14} r="26" fill="#fff1d6" opacity="0.9" />
        <Clouds id="hf" reduce={reduce} color="#f3c9a8" opacity={0.18} items={[[300, 140, 220, 26, 80], [760, 100, 240, 22, 95]]} />
        <motion.g style={{ y: yHill }}>
          <path d={`M0 ${HZ} L0 330 C120 310 240 318 360 332 C440 342 520 350 600 356 L600 ${HZ}Z`} fill="#1b2d36" />
          <path d={`M640 ${HZ} C760 362 900 350 1040 346 C1110 344 1160 350 1200 356 L1200 ${HZ}Z`} fill="#22363f" />
          {[[60, 318], [90, 314], [118, 316], [150, 320], [186, 322], [220, 320]].map(([x, y], i) => (
            <g key={i}>
              <rect x={x} y={y} width="22" height={HZ - y} fill="#142229" />
              <Lit k={i + 300} x={x + 8} y={y + 8} w="6" h="6" shown={shown} reduce={reduce} base={0.8} />
            </g>
          ))}
        </motion.g>
        <rect y={HZ} width="1200" height={675 - HZ} fill="url(#hf-water)" />
        {/* Solens stribe i vandet */}
        {Array.from({ length: 9 }, (_, i) => (
          <motion.rect
            key={i} x={800 - i * 6} y={HZ + 10 + i * 26} width={80 + i * 12} height="3" rx="1.5" fill="#ffd6a0"
            animate={reduce ? undefined : { opacity: [0.15, 0.55, 0.15], x: [800 - i * 6, 790 - i * 6, 800 - i * 6] }}
            transition={{ duration: 3 + (i % 3), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
        <g>
          <Boat x={330} y={HZ + 70} s={1.25} i={0} reduce={reduce} />
          <Boat x={620} y={HZ + 40} s={0.85} i={1} reduce={reduce} />
          <Boat x={1000} y={HZ + 110} s={1.5} i={2} reduce={reduce} />
        </g>
        {/* Måger */}
        {!reduce &&
          [[200, 160], [260, 190], [900, 210]].map(([x, y], i) => (
            <motion.path
              key={i}
              d={`M${x} ${y} q8 -8 16 0 q8 -8 16 0`}
              fill="none" stroke="#1b2a33" strokeWidth="2" strokeLinecap="round"
              animate={{ x: [0, 200, 400], y: [0, -20, 0] }}
              transition={{ duration: 24 + i * 6, repeat: Infinity, ease: "linear" }}
            />
          ))}
      </svg>
      <Chip shown={shown} kicker="Horsens" title="Horsens Fjord" className="left-4 sm:left-7 top-4 sm:top-7" delay={1.2} />
    </SceneFrame>
  );
}
