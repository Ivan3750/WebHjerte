"use client";

import { useRef } from "react";
import { motion, useTransform } from "framer-motion";
import { ease, useScene, SceneFrame, Chip, RouteChip, WaterDefs, Clouds } from "./shared";

/* ═══════════════════════ Grenen ved Skagen ═══════════════════════
 * Jyllands nordligste spids: fyret, klitterne og to have, der mødes. Fyrets lys fejer hen over himlen.
 */
const W = 1200;
const H = 640;
const HZ = 360;
const STARS = Array.from({ length: 28 }, (_, i) => [((i * 97) % 1180) + 10, ((i * 53) % 260) + 10, i]);

export function SkagenScene() {
  const ref = useRef(null);
  const { reduce, shown, progress } = useScene(ref);
  const yDune = useTransform(progress, [0, 1], reduce ? [0, 0] : [18, -18]);
  const ySky = useTransform(progress, [0, 1], reduce ? [0, 0] : [-8, 8]);
  const LX = 330; // fyrets position
  const LTOP = 150;

  return (
    <SceneFrame sceneRef={ref}>
      <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" role="img" aria-label="Illustration af Grenen ved Skagen med fyret og to have, der mødes">
        <defs>
          <linearGradient id="sk-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#070f17" />
            <stop offset="65%" stopColor="#173447" />
            <stop offset="100%" stopColor="#5e93a8" />
          </linearGradient>
          <linearGradient id="sk-sea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2c6177" />
            <stop offset="100%" stopColor="#071219" />
          </linearGradient>
          <linearGradient id="sk-sand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#c9b487" />
            <stop offset="100%" stopColor="#8a7552" />
          </linearGradient>
          <linearGradient id="sk-tower" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#d8dfe2" />
            <stop offset="100%" stopColor="#8e9aa0" />
          </linearGradient>
          <linearGradient id="sk-beam" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#fff3c9" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#fff3c9" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="sk-lamp" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff3c9" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#ffd27a" stopOpacity="0" />
          </radialGradient>
          <WaterDefs id="sk" top={HZ} width={W} height={H} reduce={reduce} />
        </defs>

        <motion.g style={{ y: ySky }}>
          <rect y="-40" width={W} height={HZ + 60} fill="url(#sk-sky)" />
          {STARS.map(([x, y, i]) => (
            <motion.circle
              key={i} cx={x} cy={y} r={i % 5 === 0 ? 1.8 : 1.1} fill="#d6ecf5"
              animate={reduce ? undefined : { opacity: [0.15, 0.9, 0.15] }}
              transition={{ duration: 3 + (i % 5), repeat: Infinity, delay: (i % 7) * 0.5 }}
            />
          ))}
          <Clouds id="sk" reduce={reduce} items={[[760, 110, 220, 24, 80], [1080, 170, 180, 22, 70]]} />
        </motion.g>

        {/* Havene: Skagerrak og Kattegat – bølger fra hver sin side, der mødes ved spidsen */}
        <rect y={HZ} width={W} height={H - HZ} fill="url(#sk-sea)" />
        {Array.from({ length: 7 }, (_, i) => (
          <motion.path
            key={`l${i}`}
            d={`M${-200} ${HZ + 30 + i * 34} Q ${300} ${HZ + 10 + i * 30} ${980} ${HZ + 120 + i * 8}`}
            fill="none" stroke="#bfe6f5" strokeOpacity={0.28 - i * 0.025} strokeWidth="1.6"
            animate={reduce ? undefined : { x: [0, 50, 0] }}
            transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {Array.from({ length: 6 }, (_, i) => (
          <motion.path
            key={`r${i}`}
            d={`M${1400} ${HZ + 20 + i * 40} Q ${1000} ${HZ + 70 + i * 30} ${960} ${HZ + 130 + i * 6}`}
            fill="none" stroke="#bfe6f5" strokeOpacity={0.26 - i * 0.03} strokeWidth="1.6"
            animate={reduce ? undefined : { x: [0, -50, 0] }}
            transition={{ duration: 8 + i, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {/* Skum hvor havene mødes */}
        {!reduce &&
          Array.from({ length: 5 }, (_, i) => (
            <motion.ellipse
              key={i} cx={968} cy={HZ + 128} rx={10 + i * 14} ry={3 + i * 2} fill="none" stroke="#e9f7fc" strokeWidth="1.4"
              animate={{ opacity: [0, 0.7, 0], scale: [0.6, 1.3, 1.6] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
            />
          ))}

        {/* Sandodden og klitterne */}
        <motion.g style={{ y: yDune }}>
          <path d={`M-20 ${HZ + 60} C200 ${HZ + 40} 520 ${HZ + 70} 760 ${HZ + 104} C860 ${HZ + 118} 930 ${HZ + 126} 975 ${HZ + 130} C900 ${HZ + 150} 760 ${HZ + 170} 520 ${HZ + 200} C300 ${HZ + 228} 80 ${HZ + 250} -20 ${HZ + 262}Z`} fill="url(#sk-sand)" />
          <path d={`M-20 ${H} L-20 ${HZ + 150} C120 ${HZ + 100} 220 ${HZ + 110} 320 ${HZ + 140} C420 ${HZ + 170} 520 ${HZ + 160} 620 ${HZ + 190} C700 ${HZ + 215} 780 ${HZ + 230} 860 ${H} Z`} fill="#6f6343" />
          {/* Marehalm, der vajer */}
          {Array.from({ length: 22 }, (_, i) => {
            const x = 20 + i * 36;
            const y = HZ + 150 + Math.sin(i) * 14 + i * 2.4;
            return (
              <motion.path
                key={i}
                d={`M${x} ${y} q4 -24 -6 -40 M${x + 6} ${y} q2 -20 10 -34 M${x + 3} ${y} q0 -22 -1 -30`}
                fill="none" stroke="#a89a63" strokeWidth="1.6" strokeLinecap="round"
                animate={reduce ? undefined : { rotate: [-4, 4, -4] }}
                transition={{ duration: 3 + (i % 3), repeat: Infinity, ease: "easeInOut" }}
                style={{ originX: 0.5, originY: 1 }}
              />
            );
          })}

          {/* Fyret */}
          <motion.g
            initial={reduce ? false : { y: 80, opacity: 0 }}
            animate={shown ? { y: 0, opacity: 1 } : { y: 80, opacity: 0 }}
            transition={{ duration: 1.3, ease }}
          >
            <polygon points={`${LX - 34},${HZ + 120} ${LX - 20},${LTOP + 30} ${LX + 20},${LTOP + 30} ${LX + 34},${HZ + 120}`} fill="url(#sk-tower)" />
            {[0, 1, 2].map((i) => (
              <line key={i} x1={LX - 30 + i * 2} x2={LX + 30 - i * 2} y1={HZ + 40 - i * 70} y2={HZ + 40 - i * 70} stroke="#7a868c" strokeWidth="2" />
            ))}
            <rect x={LX - 26} y={LTOP + 22} width="52" height="10" fill="#5d686d" />
            <rect x={LX - 16} y={LTOP - 4} width="32" height="26" rx="3" fill="#1f2a30" />
            <circle cx={LX} cy={LTOP + 9} r="9" fill="#fff3c9" />
            <polygon points={`${LX - 18},${LTOP - 4} ${LX},${LTOP - 22} ${LX + 18},${LTOP - 4}`} fill="#2a363c" />
            <motion.circle
              cx={LX} cy={LTOP + 9} r="70" fill="url(#sk-lamp)"
              animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity }}
            />
            <rect x={LX - 60} y={HZ + 110} width="34" height="20" fill="#b9a98a" />
            <polygon points={`${LX - 64},${HZ + 110} ${LX - 43},${HZ + 96} ${LX - 22},${HZ + 110}`} fill="#7c3a2f" />
          </motion.g>
        </motion.g>

        {/* Fyrets lysstråle fejer rundt (smal når den peger mod os, bred når den peger ud) */}
        {!reduce && (
          <motion.g style={{ y: yDune }}>
            <motion.polygon
              points={`${LX},${LTOP + 9} ${LX + 900},${LTOP - 60} ${LX + 900},${LTOP + 80}`}
              fill="url(#sk-beam)"
              style={{ originX: 0, originY: 0.5 }}
              animate={{ scaleX: [1, 0.05, -1, 0.05, 1], opacity: [0.9, 0.2, 0.9, 0.2, 0.9] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </motion.g>
        )}
      </svg>
      <Chip shown={shown} kicker="Grenen · Skagen" title="Hvor to have mødes" className="right-4 sm:right-8 top-4 sm:top-8" />
      <RouteChip shown={shown} reduce={reduce} from="Skagen" to="Kolding" time="alt kan klares online" />
    </SceneFrame>
  );
}

/* ═══════════════════════ Vindmøller i Vestjylland ═══════════════════════ */
const GH = 675;
const FIELD = 470;
const TURBINES = [
  { x: 180, y: FIELD - 6, h: 260, sp: 6 },
  { x: 420, y: FIELD - 18, h: 200, sp: 7.5 },
  { x: 610, y: FIELD - 26, h: 160, sp: 5.5 },
  { x: 780, y: FIELD - 32, h: 130, sp: 8 },
  { x: 920, y: FIELD - 36, h: 110, sp: 6.5 },
  { x: 1050, y: FIELD - 40, h: 92, sp: 7 },
];

function Turbine({ x, y, h, sp, i, shown, reduce }) {
  const hub = [x, y - h];
  const blade = h * 0.55;
  return (
    <motion.g
      initial={reduce ? false : { opacity: 0, y: 30 }}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: 0.2 + i * 0.15, duration: 1, ease }}
    >
      <polygon points={`${x - h * 0.025},${y} ${x - h * 0.012},${hub[1]} ${x + h * 0.012},${hub[1]} ${x + h * 0.025},${y}`} fill="#e3eaed" />
      <g>
        {!reduce && (
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${hub[0]} ${hub[1]}`}
            to={`360 ${hub[0]} ${hub[1]}`}
            dur={`${sp}s`}
            repeatCount="indefinite"
          />
        )}
        {[0, 120, 240].map((a) => (
          <path
            key={a}
            d={`M${hub[0]} ${hub[1]} L${hub[0] - h * 0.02} ${hub[1] - blade * 0.2} L${hub[0]} ${hub[1] - blade} L${hub[0] + h * 0.025} ${hub[1] - blade * 0.25}Z`}
            fill="#f2f6f8"
            transform={`rotate(${a + i * 17} ${hub[0]} ${hub[1]})`}
          />
        ))}
      </g>
      <circle cx={hub[0]} cy={hub[1]} r={h * 0.022} fill="#c9d4d8" />
      <motion.circle
        cx={hub[0]} cy={hub[1] - 2} r={h * 0.012} fill="#ff5a5a"
        animate={reduce ? undefined : { opacity: [1, 0.15, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.3 }}
      />
    </motion.g>
  );
}

export function VindmoellerScene() {
  const ref = useRef(null);
  const { reduce, shown, progress } = useScene(ref);
  const yField = useTransform(progress, [0, 1], reduce ? [0, 0] : [12, -12]);
  return (
    <SceneFrame sceneRef={ref} aspect="aspect-[4/3] sm:aspect-[16/9]">
      <svg viewBox={`0 0 1200 ${GH}`} preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" role="img" aria-label="Illustration af vindmøller ved Vestkysten i Jylland">
        <defs>
          <linearGradient id="vm-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0f2230" />
            <stop offset="60%" stopColor="#3d6f88" />
            <stop offset="100%" stopColor="#a9d0de" />
          </linearGradient>
          <linearGradient id="vm-field" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3d5a3f" />
            <stop offset="100%" stopColor="#1a2a1d" />
          </linearGradient>
          <WaterDefs id="vm" top={FIELD} width={1200} height={GH} reduce={reduce} />
        </defs>
        <rect width="1200" height={FIELD} fill="url(#vm-sky)" />
        <Clouds id="vm" reduce={reduce} color="#e6f3f8" opacity={0.22} items={[[240, 130, 230, 30, 60], [700, 90, 260, 28, 75], [1080, 160, 200, 26, 65]]} />
        {/* Havet ude i horisonten */}
        <rect x="0" y={FIELD - 46} width="1200" height="20" fill="#4d8aa3" opacity="0.7" />
        <motion.g style={{ y: yField }}>
          <path d={`M0 ${FIELD - 30} C200 ${FIELD - 46} 400 ${FIELD - 40} 600 ${FIELD - 50} C800 ${FIELD - 58} 1000 ${FIELD - 50} 1200 ${FIELD - 56} L1200 ${GH} L0 ${GH}Z`} fill="url(#vm-field)" />
          {/* Markstriber */}
          {Array.from({ length: 9 }, (_, i) => (
            <path key={i} d={`M${-100 + i * 160} ${GH} L${560 + i * 40} ${FIELD - 46}`} stroke="#4d6b48" strokeOpacity="0.35" strokeWidth="2" />
          ))}
          {TURBINES.map((t, i) => (
            <Turbine key={i} {...t} i={i} shown={shown} reduce={reduce} />
          ))}
          {/* Et stråtækt hus og læhegn */}
          <rect x="70" y={FIELD + 40} width="90" height="34" fill="#e8e1d2" />
          <polygon points={`62,${FIELD + 40} 115,${FIELD + 8} 168,${FIELD + 40}`} fill="#6c5a3d" />
          <rect x="104" y={FIELD + 52} width="12" height="22" fill="#3a2f22" />
          {Array.from({ length: 10 }, (_, i) => (
            <circle key={i} cx={200 + i * 26} cy={FIELD + 52} r="16" fill="#223823" />
          ))}
        </motion.g>
      </svg>
      <Chip shown={shown} kicker="Vestjylland" title="Vindmøller ved kysten" className="left-4 sm:left-7 top-4 sm:top-7" delay={1.2} />
    </SceneFrame>
  );
}
