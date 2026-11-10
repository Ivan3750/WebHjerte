"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import {
  Panel,
  VisualSite,
  VisualSeo,
  VisualPhone,
  VisualBooking,
  VisualChat,
  VisualDashboard,
  VisualPrice,
  VisualClock,
  VisualForm,
  VisualCode,
  VisualUptime,
  VisualOwnership,
} from "../illustrations/Visuals";
import { BoelgenScene, BridgeScene } from "./CityScene";

const ease = [0.16, 1, 0.3, 1];
const inView = { once: true, margin: "-60px" };
const card = "bg-[var(--v-card)] border border-[var(--v-line)]";

/* ───────────── Nye illustrationer til artikel-layoutet ───────────── */

/** Fra søgning til opkald: tre trin forbundet af en linje, hvor en prik løber hen over. */
function VFunnel() {
  const reduce = useReducedMotion();
  const nodes = [
    { label: "Søger", sub: "“tømrer Horsens”", icon: <path d="M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM16 16l5 5" /> },
    { label: "Din side", sub: "ydelser · område · billeder", icon: <path d="M3 5h18v14H3zM3 9h18M7 7h.01M10 7h.01" /> },
    { label: "Opkald", sub: "ét tryk på mobilen", icon: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2C10 21 3 14 3 6a2 2 0 012-2z" /> },
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-10">
      <div className="relative w-full max-w-[560px] flex items-center justify-between">
        <div className="absolute left-[8%] right-[8%] top-[30px] h-px border-t border-dashed border-[var(--v-line)]" />
        <motion.span
          aria-hidden
          initial={{ left: "8%", opacity: 0 }}
          whileInView={reduce ? { opacity: 1 } : { left: ["8%", "92%"], opacity: [0, 1, 1, 0] }}
          viewport={inView}
          transition={{ duration: 2.6, repeat: reduce ? 0 : Infinity, repeatDelay: 0.8, ease: "easeInOut" }}
          className="absolute top-[26px] w-2.5 h-2.5 -ml-1 rounded-full bg-[#00a8e8] shadow-[0_0_14px_3px_rgba(0,168,232,0.6)]"
        />
        {nodes.map((n, i) => (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={inView}
            transition={{ delay: 0.15 + i * 0.18, duration: 0.8, ease }}
            className="relative flex flex-col items-center text-center w-[30%]"
          >
            <span className={`w-[60px] h-[60px] rounded-2xl flex items-center justify-center ${card} ${i === 2 ? "!bg-[#00a8e8] !border-[#00a8e8] text-[#10181a]" : "text-[var(--v-ink)]"}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                {n.icon}
              </svg>
            </span>
            <span className="mt-3 text-[13px] font-semibold text-[var(--v-ink)]">{n.label}</span>
            <span className="mt-1 text-[10.5px] leading-snug text-[var(--v-muted)]">{n.sub}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Googles kortresultater: pin der lander, og tre virksomheder, hvor din står øverst. */
function VLocalPack() {
  const rows = [
    { n: "Din virksomhed", r: "4,9", t: "Åbent nu", me: true },
    { n: "Konkurrent A", r: "4,6", t: "Lukker 17:00" },
    { n: "Konkurrent B", r: "4,3", t: "Åbner i morgen" },
  ];
  return (
    <div className="absolute inset-0 grid grid-cols-[1fr_1.15fr] gap-3 p-4 sm:p-6">
      <div className="relative rounded-xl overflow-hidden border border-[var(--v-line)] bg-[var(--v-card)]">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            backgroundImage:
              "linear-gradient(var(--v-line) 1px, transparent 1px), linear-gradient(90deg, var(--v-line) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 160" preserveAspectRatio="none" aria-hidden>
          <path d="M-10 120 C 40 90, 70 130, 120 80 S 190 60, 220 40" stroke="var(--v-line)" strokeWidth="6" fill="none" />
        </svg>
        <motion.span
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={inView}
          transition={{ delay: 0.4, type: "spring", stiffness: 180, damping: 12 }}
          className="absolute left-[46%] top-[34%]"
        >
          <span className="block w-6 h-6 rounded-full rounded-bl-none -rotate-45 bg-[#00a8e8] shadow-[0_8px_18px_-4px_rgba(0,168,232,0.8)]" />
        </motion.span>
        <span className="absolute left-[34%] top-[62%] w-3 h-3 rounded-full bg-[var(--v-bar)]" />
        <span className="absolute left-[68%] top-[58%] w-3 h-3 rounded-full bg-[var(--v-bar)]" />
      </div>
      <div className="flex flex-col gap-2 justify-center">
        {rows.map((r, i) => (
          <motion.div
            key={r.n}
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
            transition={{ delay: 0.15 + i * 0.14, duration: 0.7, ease }}
            className={`rounded-xl px-3 py-2.5 flex items-center justify-between ${card} ${r.me ? "!border-[#00a8e8]" : ""}`}
          >
            <span>
              <span className={`block text-[11.5px] font-semibold ${r.me ? "text-[#00a8e8]" : "text-[var(--v-ink)]"}`}>{r.n}</span>
              <span className="block text-[10px] text-[var(--v-muted)] mt-0.5">{r.t}</span>
            </span>
            <span className="text-[11px] font-medium text-[var(--v-ink)] flex items-center gap-1">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="#f0a63a" aria-hidden>
                <path d="M12 2l3 7 7 .6-5.3 4.7 1.7 7.2L12 17.8 5.6 21.5l1.7-7.2L2 9.6 9 9z" />
              </svg>
              {r.r}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Søgefelt, der skriver forskellige søgninger – og viser forslag under. */
export function VSearchTyping({ queries = ["webbureau", "hjemmeside pris", "hjemmeside til håndværker"] }) {
  const reduce = useReducedMotion();
  const [qi, setQi] = useState(0);
  const [n, setN] = useState(reduce ? queries[0].length : 0);
  useEffect(() => {
    if (reduce) return;
    const q = queries[qi];
    const t = setTimeout(
      () => {
        if (n < q.length) setN(n + 1);
        else setTimeout(() => { setQi((qi + 1) % queries.length); setN(0); }, 1500);
      },
      n < q.length ? 85 : 0
    );
    return () => clearTimeout(t);
  }, [n, qi, queries, reduce]);
  const q = queries[qi];
  return (
    <div className="absolute inset-0 flex items-center justify-center px-5">
      <div className="w-full max-w-[460px]">
        <div className={`rounded-full ${card} px-4 py-3 flex items-center gap-3 shadow-[0_14px_40px_-18px_rgba(0,0,0,0.4)]`}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--v-muted)" strokeWidth="2" strokeLinecap="round" aria-hidden>
            <path d="M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15zM16 16l5 5" />
          </svg>
          <span className="text-[13px] text-[var(--v-ink)] min-h-[18px]">
            {q.slice(0, n)}
            <span className="inline-block w-[1.5px] h-[15px] align-middle ml-px bg-[#00a8e8] animate-pulse" />
          </span>
        </div>
        <div className={`mt-2 rounded-2xl ${card} p-2 text-[11.5px] text-[var(--v-muted)]`}>
          {[q, `${q} pris`, `${q} anbefalinger`].map((s, i) => (
            <motion.div
              key={`${qi}-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: n > 2 ? 1 : 0 }}
              transition={{ delay: i * 0.12 }}
              className="px-3 py-1.5 rounded-lg flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-[var(--v-bar)]" />
              {s}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/** Hurtig vs. langsom side – to bjælker, der løber. Intet tal, kun princippet. */
function VSpeed() {
  const rows = [
    { l: "Langsom side", w: "92%", c: "#e0678a", t: "Besøgende går" },
    { l: "Hurtig side", w: "26%", c: "#3ddc97", t: "Besøgende bliver" },
  ];
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-5 px-6 sm:px-14">
      {rows.map((r, i) => (
        <div key={r.l}>
          <div className="flex items-center justify-between text-[11.5px] mb-2">
            <span className="font-medium text-[var(--v-ink)]">{r.l}</span>
            <span className="text-[var(--v-muted)]">{r.t}</span>
          </div>
          <div className="h-3 rounded-full bg-[var(--v-bar)] overflow-hidden">
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: r.w }}
              viewport={inView}
              transition={{ delay: 0.2 + i * 0.3, duration: 1.4, ease }}
              className="block h-full rounded-full"
              style={{ background: r.c }}
            />
          </div>
        </div>
      ))}
      <p className="text-[10.5px] text-[var(--v-muted)]">Princip: jo længere en side er om at åbne, jo flere forlader den.</p>
    </div>
  );
}

const MAP = {
  funnel: { el: <VFunnel />, caption: "Sådan bliver en søgning til et opkald" },
  localpack: { el: <VLocalPack />, caption: "Sådan ser Googles kortresultater ud – din virksomhed øverst" },
  speed: { el: <VSpeed />, caption: "Hastighed afgør, om kunden bliver" },
  site: { el: <VisualSite />, caption: "En side, hvor ydelse og handling står øverst" },
  seo: { el: <VisualSeo />, caption: "Synlighed bygges op over tid" },
  phone: { el: <VisualPhone />, caption: "Mobilen er der, hvor de fleste kunder starter" },
  booking: { el: <VisualBooking />, caption: "Booking, der kan bruges uden at ringe" },
  chat: { el: <VisualChat />, caption: "Svar til kunderne – også uden for åbningstid" },
  dashboard: { el: <VisualDashboard />, caption: "Mål, hvad der giver henvendelser" },
  price: { el: <VisualPrice />, caption: "Fast pris aftales på forhånd" },
  clock: { el: <VisualClock />, caption: "Fra første samtale til live side" },
  form: { el: <VisualForm />, caption: "En kort formular giver flere henvendelser" },
  code: { el: <VisualCode />, caption: "Ren kode giver hurtige sider" },
  uptime: { el: <VisualUptime />, caption: "Drift og sikkerhed i orden" },
  ownership: { el: <VisualOwnership />, caption: "Domæne og kode tilhører dig" },
};

/** Parallax: panelet glider let op/ned, mens man scroller forbi. */
function Parallax({ children }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [16, -16]);
  return (
    <div ref={ref} className="absolute inset-0">
      <motion.div style={{ y }} className="absolute inset-0">
        {children}
      </motion.div>
    </div>
  );
}

/**
 * Illustration i artikel-layoutet: mørk flade med blå glød, kort billedtekst og parallax.
 * `name` er en nøgle fra MAP. `dark` kan slås fra.
 */
const SCENES = {
  boelgen: { el: <BoelgenScene />, caption: "Bølgen – de bølgeformede boliger ved Vejle Fjord" },
  bridge: { el: <BridgeScene />, caption: "Vejlefjordbroen over Vejle Fjord" },
};

export default function ArticleVisual({ name, caption, queries, dark = true }) {
  if (SCENES[name]) {
    return (
      <figure className="my-10 -mx-1 sm:mx-0">
        {SCENES[name].el}
        <figcaption className="mt-3.5 text-[13px] text-[#6a6d6d] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8]" />
          {caption || SCENES[name].caption}
        </figcaption>
      </figure>
    );
  }
  const entry = MAP[name];
  if (!entry && name !== "search-typing") return null;
  const el = name === "search-typing" ? <VSearchTyping queries={queries} /> : entry.el;
  const cap = caption || entry?.caption;
  return (
    <figure className="my-10">
      <div className="relative">
        <div aria-hidden className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[#00a8e8]/[0.07] blur-2xl" />
        <Panel dark={dark} h="h-[260px] sm:h-[310px]" className="!rounded-3xl border border-white/10">
          <div aria-hidden className="grid-fade absolute inset-0 opacity-50" />
          <Parallax>{el}</Parallax>
        </Panel>
      </div>
      {cap && (
        <figcaption className="mt-3.5 text-[13px] text-[#6a6d6d] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8]" />
          {cap}
        </figcaption>
      )}
    </figure>
  );
}
