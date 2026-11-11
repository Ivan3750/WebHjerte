"use client";

import { motion } from "framer-motion";

/**
 * Små "produkt-UI"-illustrationer (browser, chat, kurv, kalender …) til kort og faner.
 * Alle er rene SVG/HTML + framer-motion og tilpasser sig lys/mørk flade via CSS-variabler.
 */
const ease = [0.16, 1, 0.3, 1];
const inView = { once: true, margin: "-40px" };

const THEMES = {
  light: { "--v-panel": "#f1f0ee", "--v-card": "#ffffff", "--v-line": "#e3e1e1", "--v-ink": "#1c1e1e", "--v-bar": "#e6e4e4", "--v-muted": "#8a8f8f" },
  dark: { "--v-panel": "#181a1a", "--v-card": "#2a2e2e", "--v-line": "#3a3f3f", "--v-ink": "#f2f5f5", "--v-bar": "#3a3f3f", "--v-muted": "#8a9696" },
};

/** Fælles ramme: fast højde, afrundet panel, indhold centreret og aldrig større end rammen. */
export function Panel({ children, dark = false, className = "", h = "h-[190px] sm:h-[210px]" }) {
  return (
    <div
      style={THEMES[dark ? "dark" : "light"]}
      className={`relative w-full ${h} rounded-2xl bg-[var(--v-panel)] overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}

const card = "bg-[var(--v-card)] border border-[var(--v-line)]";

export function VisualSite() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-5 py-4">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={inView}
        transition={{ duration: 0.9, ease }}
        className={`w-full max-w-[360px] rounded-xl ${card} shadow-[0_14px_40px_-18px_rgba(0,0,0,0.3)] overflow-hidden`}
      >
        <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-[var(--v-line)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--v-bar)]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--v-bar)]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--v-bar)]" />
          <span className="ml-2 h-2.5 flex-1 rounded bg-[var(--v-bar)]" />
        </div>
        <div className="p-2.5 grid grid-cols-[1.4fr_1fr] gap-2.5">
          <div>
            <div className="h-2 w-4/5 rounded bg-[var(--v-ink)] mb-1.5" />
            <div className="h-2 w-3/5 rounded bg-[var(--v-ink)] mb-2.5" />
            <div className="h-1.5 w-full rounded bg-[var(--v-bar)] mb-1" />
            <div className="h-1.5 w-4/5 rounded bg-[var(--v-bar)] mb-2.5" />
            <div className="h-4 w-14 rounded-full bg-[#00a8e8]" />
          </div>
          <div className="rounded-lg bg-[#00a8e8] min-h-[52px]" />
        </div>
        <div className="px-2.5 pb-2.5 grid grid-cols-3 gap-2">
          {["#00a8e8", "#3ddc97", "#8a8ff0"].map((c) => (
            <div key={c} className="h-5 rounded-md bg-[var(--v-panel)] flex items-center gap-1.5 px-1.5">
              <span className="w-2 h-2 rounded-sm shrink-0" style={{ background: c }} />
              <span className="h-1 flex-1 rounded bg-[var(--v-bar)]" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function VisualShop() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        viewport={inView}
        transition={{ duration: 0.8, ease }}
        className={`w-[140px] rounded-xl p-2.5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.35)] ${card}`}
      >
        <div className="h-14 rounded-lg bg-[#00a8e8]/20 mb-2" />
        <div className="h-1.5 w-3/4 rounded bg-[var(--v-bar)] mb-1.5" />
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[var(--v-ink)]">349 kr</span>
          <span className="text-[8px] text-white bg-[#00a8e8] rounded-full px-2 py-1">Køb</span>
        </div>
      </motion.div>
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={inView}
        transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 12 }}
        className="absolute top-5 right-[22%] w-6 h-6 rounded-full bg-[#3ddc97] text-white text-[10px] font-semibold flex items-center justify-center"
      >
        1
      </motion.span>
    </div>
  );
}

const bubble = "rounded-2xl px-3 py-2 text-[10.5px] leading-snug max-w-[85%]";

export function VisualChat({ a = "Har I tid på torsdag?", b = "Ja! Kl. 14:30 er ledig – skal jeg booke den?" }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 px-5">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={inView}
        transition={{ delay: 0.1, duration: 0.6, ease }}
        className={`self-start rounded-bl-sm text-[var(--v-ink)] ${bubble} ${card}`}
      >
        {a}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={inView}
        transition={{ delay: 0.7, duration: 0.6, ease }}
        className={`self-end rounded-br-sm bg-[#00a8e8] text-white ${bubble}`}
      >
        {b}
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={inView}
        transition={{ delay: 1.3 }}
        className={`self-start flex gap-1 rounded-2xl px-3 py-2.5 ${card}`}
      >
        {[0, 1, 2].map((i) => (
          <span key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--v-muted)] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
      </motion.div>
    </div>
  );
}

export function VisualDirectChat() {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2.5 px-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ duration: 0.6, ease }}
        className="flex items-center gap-2"
      >
        <span className="w-7 h-7 rounded-full bg-[#00a8e8] text-white text-[10px] font-semibold flex items-center justify-center shrink-0">IV</span>
        <span className={`rounded-2xl rounded-bl-sm ${bubble} ${card} text-[var(--v-ink)]`}>Hej! Jeg er Ivan – jeg bygger din side selv.</span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ delay: 0.5, duration: 0.6, ease }}
        className="self-end rounded-2xl rounded-br-sm bg-[#00a8e8] text-white px-3 py-2 text-[10.5px] max-w-[80%]"
      >
        Fedt – ingen mellemled?
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ delay: 1, duration: 0.6, ease }}
        className={`self-start ml-9 rounded-2xl rounded-bl-sm ${bubble} ${card} text-[var(--v-ink)]`}
      >
        Præcis – direkte til mig ✌️
      </motion.div>
    </div>
  );
}

export function VisualSeo() {
  const bars = [28, 36, 32, 48, 58, 72, 92];
  return (
    <div className="absolute inset-0 flex items-end justify-center gap-2 px-8 pb-6">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={inView}
          transition={{ delay: 0.1 + i * 0.07, duration: 0.8, ease }}
          style={{ height: `${h * 0.72}%`, transformOrigin: "bottom" }}
          className={`flex-1 max-w-[22px] rounded-t-md ${i === bars.length - 1 ? "bg-[#00a8e8]" : "bg-[var(--v-bar)]"}`}
        />
      ))}
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ delay: 1, duration: 0.6 }}
        className={`absolute top-4 right-5 text-[10px] font-medium text-[#00a8e8] rounded-full px-2.5 py-1 ${card}`}
      >
        ↗ Google
      </motion.span>
    </div>
  );
}

export function VisualUptime() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6">
      <div className="flex gap-[3px] w-full max-w-[220px]">
        {Array.from({ length: 28 }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scaleY: 0.3 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={inView}
            transition={{ delay: i * 0.02, duration: 0.4 }}
            className="h-7 flex-1 rounded-[3px] bg-[#3ddc97]"
          />
        ))}
      </div>
      <div className="flex items-center gap-2 text-[10.5px] text-[var(--v-muted)]">
        <span className="relative flex w-2 h-2">
          <span className="pulse-ring absolute inset-0 rounded-full text-[#3ddc97]" />
          <span className="relative w-2 h-2 rounded-full bg-[#3ddc97]" />
        </span>
        Overvåget hver dag
      </div>
    </div>
  );
}

export function VisualDesign() {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-5 px-6">
      <div className="flex -space-x-3">
        {["#00a8e8", "#1c1e1e", "#3ddc97", "#f0a63a"].map((c, i) => (
          <motion.span
            key={c}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={inView}
            transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 260, damping: 16 }}
            className="w-10 h-10 rounded-full border-2 border-[var(--v-card)]"
            style={{ background: c }}
          />
        ))}
      </div>
      <span className="text-[40px] leading-none font-semibold text-[var(--v-ink)] tracking-tight">Aa</span>
    </div>
  );
}

export function VisualTickets() {
  const rows = ["Ny tekst på forsiden", "Nyt billede i galleriet", "Opdateret åbningstid"];
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 px-5">
      {rows.map((r, i) => (
        <motion.div
          key={r}
          initial={{ opacity: 0, x: 14 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={{ delay: 0.12 * i, duration: 0.6, ease }}
          className={`flex items-center gap-2.5 rounded-xl px-3 py-2 ${card}`}
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={inView}
            transition={{ delay: 0.5 + 0.2 * i, type: "spring", stiffness: 300, damping: 14 }}
            className="w-4 h-4 rounded-full bg-[#3ddc97] flex items-center justify-center shrink-0"
          >
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
              <path d="M1.5 4l2 2 3-3" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.span>
          <span className="text-[10.5px] text-[var(--v-ink)] truncate">{r}</span>
          <span className="ml-auto text-[9px] text-[var(--v-muted)] shrink-0">Rettet</span>
        </motion.div>
      ))}
    </div>
  );
}

export function VisualPrice() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={inView}
        transition={{ duration: 0.8, ease }}
        className={`rounded-2xl px-5 py-4 text-center shadow-[0_18px_40px_-20px_rgba(0,0,0,0.35)] ${card}`}
      >
        <p className="text-[10px] uppercase tracking-[0.14em] text-[var(--v-muted)] mb-1.5">Fast pris</p>
        <p className="text-[28px] leading-none font-semibold text-[var(--v-ink)] tracking-tight">
          8.500 <span className="text-[12px] font-normal text-[var(--v-muted)]">kr</span>
        </p>
        <p className="mt-2 inline-flex items-center gap-1.5 text-[10px] text-[#1f9d6b]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc97]" /> ingen skjulte gebyrer
        </p>
      </motion.div>
    </div>
  );
}

export function VisualClock() {
  const R = 36;
  const C = 2 * Math.PI * R;
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-5">
      <div className="relative w-[96px] h-[96px]">
        <svg viewBox="0 0 90 90" className="w-full h-full -rotate-90" aria-hidden>
          <circle cx="45" cy="45" r={R} fill="none" stroke="var(--v-bar)" strokeWidth="8" />
          <motion.circle
            cx="45"
            cy="45"
            r={R}
            fill="none"
            stroke="#00a8e8"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={C}
            initial={{ strokeDashoffset: C }}
            whileInView={{ strokeDashoffset: C * 0.12 }}
            viewport={inView}
            transition={{ duration: 1.4, ease }}
          />
        </svg>
        <span className="absolute inset-0 flex flex-col items-center justify-center leading-none">
          <span className="text-[22px] font-semibold text-[var(--v-ink)]">48</span>
          <span className="text-[9px] uppercase tracking-[0.12em] text-[var(--v-muted)] mt-1">timer</span>
        </span>
      </div>
      <p className="text-[11px] leading-snug text-[var(--v-ink)] max-w-[88px]">
        Første udkast
        <span className="block text-[var(--v-muted)] mt-0.5">klar til godkendelse</span>
      </p>
    </div>
  );
}

export function VisualOwnership() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 px-5">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ duration: 0.7, ease }}
        className={`w-full max-w-[250px] flex items-center gap-2.5 rounded-xl px-3 py-2.5 ${card}`}
      >
        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" aria-hidden>
          <rect x="2" y="5" width="8" height="6" rx="1.5" stroke="#3ddc97" strokeWidth="1.2" />
          <path d="M4 5V3.5a2 2 0 014 0V5" stroke="#3ddc97" strokeWidth="1.2" />
        </svg>
        <span className="text-[11px] text-[var(--v-ink)] truncate">dinvirksomhed.dk</span>
        <span className="ml-auto text-[9px] text-[#1f9d6b] shrink-0">Dit domæne</span>
      </motion.div>
      <div className="flex gap-2">
        {["Din kode", "Ingen lock-in"].map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
            className={`text-[10px] rounded-full px-3 py-1.5 text-[var(--v-ink)] ${card}`}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export function VisualPhone() {
  return (
    <div className="absolute inset-0 flex items-end justify-center pt-5">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={inView}
        transition={{ duration: 0.9, ease }}
        className="w-[112px] rounded-t-[22px] border-[3px] border-b-0 border-[var(--v-ink)] bg-[var(--v-card)] px-2.5 pt-3 pb-4"
      >
        <div className="mx-auto w-8 h-1 rounded-full bg-[var(--v-ink)] mb-3" />
        <div className="h-2 w-4/5 rounded bg-[var(--v-ink)] mb-1.5" />
        <div className="h-2 w-3/5 rounded bg-[var(--v-ink)] mb-2.5" />
        <div className="h-12 rounded-lg bg-[#00a8e8] mb-2" />
        <div className="h-1.5 w-full rounded bg-[var(--v-bar)] mb-1" />
        <div className="h-1.5 w-2/3 rounded bg-[var(--v-bar)]" />
      </motion.div>
    </div>
  );
}

export function VisualBooking() {
  const days = Array.from({ length: 14 }, (_, i) => i + 1);
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-4 px-5">
      <div className={`rounded-xl p-2.5 ${card}`}>
        <div className="grid grid-cols-7 gap-1">
          {days.map((d) => (
            <span
              key={d}
              className={`w-[18px] h-[18px] rounded-md text-[8px] flex items-center justify-center ${
                d === 9 ? "bg-[#00a8e8] text-white font-semibold" : "text-[var(--v-muted)]"
              }`}
            >
              {d}
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        {["13:00", "14:30", "16:00"].map((t, i) => (
          <motion.span
            key={t}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
            transition={{ delay: 0.2 + i * 0.12 }}
            className={`text-[10px] rounded-lg px-3 py-1.5 text-center ${
              i === 1 ? "bg-[#00a8e8] text-white font-medium" : `${card} text-[var(--v-ink)]`
            }`}
          >
            {t}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export function VisualDashboard() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-5">
      <div className={`w-full max-w-[300px] rounded-xl p-3 ${card}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] text-[var(--v-muted)]">Besøgende</span>
          <span className="text-[10px] text-[#1f9d6b]">↗</span>
        </div>
        <svg viewBox="0 0 200 60" className="w-full h-[64px]" fill="none" aria-hidden>
          <motion.path
            d="M0 50 C 25 48, 35 38, 55 36 S 90 28, 110 22 S 150 12, 200 6"
            stroke="#00a8e8"
            strokeWidth="2.4"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={inView}
            transition={{ duration: 1.5, ease }}
          />
          <path d="M0 58H200" stroke="var(--v-line)" strokeWidth="1" />
        </svg>
        <div className="mt-2 flex gap-1.5">
          {["Google", "Direkte", "Sociale"].map((t) => (
            <span key={t} className="text-[9px] rounded-full px-2 py-1 bg-[var(--v-panel)] text-[var(--v-muted)]">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function VisualForm() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-5">
      <div className={`w-full max-w-[250px] rounded-xl p-3 flex flex-col gap-2 ${card}`}>
        <div className="h-5 rounded-md bg-[var(--v-panel)]" />
        <div className="h-5 rounded-md bg-[var(--v-panel)]" />
        <div className="h-9 rounded-md bg-[var(--v-panel)]" />
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={inView}
          transition={{ delay: 0.5, type: "spring", stiffness: 260, damping: 16 }}
          className="h-6 rounded-full bg-[#00a8e8] text-white text-[10px] font-semibold flex items-center justify-center"
        >
          Send besked
        </motion.div>
      </div>
    </div>
  );
}

export function VisualCode() {
  const lines = [
    ["#8a8ff0", 38], ["#3ddc97", 52], ["#f0a63a", 28], ["#00a8e8", 64], ["#8a8ff0", 44], ["#3ddc97", 30],
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center px-5">
      <div className={`w-full max-w-[280px] rounded-xl overflow-hidden ${card}`}>
        <div className="flex gap-1.5 px-3 py-2 border-b border-[var(--v-line)]">
          <span className="w-2 h-2 rounded-full bg-[#ff5f57]/80" />
          <span className="w-2 h-2 rounded-full bg-[#febc2e]/80" />
          <span className="w-2 h-2 rounded-full bg-[#28c840]/80" />
        </div>
        <div className="p-3 flex flex-col gap-1.5">
          {lines.map(([c, w], i) => (
            <motion.span
              key={i}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={inView}
              transition={{ delay: 0.08 * i, duration: 0.6, ease }}
              style={{ background: c, width: `${w}%`, transformOrigin: "left", marginLeft: i % 3 === 1 ? 14 : 0 }}
              className="h-1.5 rounded-full opacity-90"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ───────────── Flere illustrationer (AI, lokal, webshop, drift, redigering) ───────────── */

const Icon = ({ d, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={d} />
  </svg>
);

export const ICONS = {
  mail: "M3 6h18v12H3zM3 7l9 6 9-6",
  spark: "M12 3l1.8 4.6L18 9l-4.2 1.4L12 15l-1.8-4.6L6 9l4.2-1.4zM18.5 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z",
  calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  cart: "M3 4h2l2.4 11h11L21 8H6.2M9 20h.01M18 20h.01",
  card: "M3 6h18v12H3zM3 10h18M7 15h4",
  box: "M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  shield: "M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z",
  refresh: "M20 11a8 8 0 00-14.5-4.5L4 8M4 4v4h4M4 13a8 8 0 0014.5 4.5L20 16M20 20v-4h-4",
  bolt: "M13 3L5 13h6l-1 8 8-10h-6z",
  check: "M5 12.5l4.5 4.5L19 7",
  pencil: "M4 20h4L19 9l-4-4L4 16zM14 6l4 4",
  phone: "M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2C10 21 3 14 3 6a2 2 0 012-2z",
  star: "M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z",
};

/** Henvendelse → AI → kalender: tre trin med en prik, der løber igennem. */
export function VisualFlow({ steps = [["mail", "Ny besked"], ["spark", "AI svarer"], ["calendar", "Booket"]] }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-4">
      <div className="relative w-full max-w-[300px] flex items-start justify-between">
        <div className="absolute left-[16%] right-[16%] top-[22px] border-t border-dashed border-[var(--v-line)]" />
        <motion.span
          aria-hidden
          initial={{ left: "16%", opacity: 0 }}
          whileInView={{ left: ["16%", "84%"], opacity: [0, 1, 1, 0] }}
          viewport={inView}
          transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }}
          className="absolute top-[18px] w-2 h-2 -ml-1 rounded-full bg-[#00a8e8] shadow-[0_0_12px_2px_rgba(0,168,232,0.6)]"
        />
        {steps.map(([icon, label], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ delay: 0.1 + i * 0.15, duration: 0.7, ease }}
            className="relative flex flex-col items-center gap-2 w-1/3"
          >
            <span
              className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                i === 1 ? "bg-[#00a8e8] text-white" : i === steps.length - 1 ? "bg-[#3ddc97] text-white" : `${card} text-[var(--v-ink)]`
              }`}
            >
              <Icon d={ICONS[icon]} />
            </span>
            <span className="text-[10px] text-[var(--v-ink)] text-center leading-tight">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Et AI-svar, der anbefaler "din virksomhed" – til AI-synlighed/GEO. */
export function VisualAiAnswer({ q = "Bedste tømrer i Horsens?", name = "Din virksomhed" }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-center gap-2 px-5">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ duration: 0.6, ease }}
        className={`self-end rounded-2xl rounded-br-sm px-3 py-2 text-[10.5px] text-[var(--v-ink)] ${card}`}
      >
        {q}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ delay: 0.5, duration: 0.7, ease }}
        className={`rounded-2xl rounded-bl-sm p-3 ${card}`}
      >
        <p className="flex items-center gap-1.5 text-[9px] uppercase tracking-[0.12em] text-[var(--v-muted)] mb-2">
          <span className="text-[#00a8e8]">
            <Icon d={ICONS.spark} className="w-3 h-3" />
          </span>
          AI-svar
        </p>
        <div className="flex items-center gap-2 rounded-lg bg-[#00a8e8]/10 px-2 py-1.5 mb-1.5">
          <span className="w-4 h-4 rounded-md bg-[#00a8e8] text-white text-[8px] font-semibold flex items-center justify-center">1</span>
          <span className="text-[10.5px] font-semibold text-[var(--v-ink)]">{name}</span>
          <span className="ml-auto flex text-[#f0a63a]">
            {[0, 1, 2, 3, 4].map((i) => (
              <Icon key={i} d={ICONS.star} className="w-2.5 h-2.5" />
            ))}
          </span>
        </div>
        <div className="h-1.5 w-11/12 rounded bg-[var(--v-bar)] mb-1" />
        <div className="h-1.5 w-2/3 rounded bg-[var(--v-bar)]" />
      </motion.div>
    </div>
  );
}

/** Stiliseret kort over Midtjylland med en pulserende nål – til lokale sider. */
export function VisualMapPin({ main = "Horsens", others = [["Aarhus", 72, 22], ["Vejle", 30, 76], ["Silkeborg", 22, 26], ["Skanderborg", 58, 40]] }) {
  return (
    <div className="absolute inset-0">
      <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 w-full h-full" aria-hidden>
        <path d="M-10 150 C 60 120, 90 170, 150 140 S 250 110, 310 130" stroke="var(--v-line)" strokeWidth="1.5" fill="none" />
        <path d="M-10 60 C 70 80, 120 30, 190 55 S 270 40, 310 20" stroke="var(--v-line)" strokeWidth="1.5" fill="none" />
        <path d="M120 -10 C 110 60, 160 110, 140 210" stroke="var(--v-line)" strokeWidth="1.5" fill="none" strokeDasharray="4 4" />
      </svg>
      {others.map(([label, x, y], i) => (
        <motion.span
          key={label}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={inView}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
          className="absolute flex items-center gap-1 text-[9.5px] text-[var(--v-muted)]"
          style={{ left: `${x}%`, top: `${y}%` }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--v-muted)]" />
          {label}
        </motion.span>
      ))}
      <div className="absolute left-1/2 top-[56%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <span className="absolute top-[22px] w-16 h-16 -mt-8 rounded-full bg-[#00a8e8]/15 animate-ping" />
        <motion.span
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={inView}
          transition={{ type: "spring", stiffness: 260, damping: 14 }}
          className="relative text-[#00a8e8]"
        >
          <svg viewBox="0 0 24 24" className="w-9 h-9" fill="currentColor" aria-hidden>
            <path d="M12 22s-7.5-6.6-7.5-12.2a7.5 7.5 0 0115 0C19.5 15.4 12 22 12 22z" />
            <circle cx="12" cy="9.8" r="2.8" fill="#fff" />
          </svg>
        </motion.span>
        <span className={`relative mt-1 text-[10px] font-semibold rounded-full px-2.5 py-1 text-[var(--v-ink)] ${card}`}>{main}</span>
      </div>
    </div>
  );
}

/** Kurv → betaling → pakke sendt. */
export function VisualCheckout() {
  const steps = [
    ["cart", "Kurv", "2 varer"],
    ["card", "Betaling", "MobilePay"],
    ["box", "Sendt", "GLS · i morgen"],
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center px-4">
      <div className="flex items-center gap-1.5 w-full max-w-[320px]">
        {steps.map(([icon, label, sub], i) => (
          <div key={label} className="contents">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={inView}
              transition={{ delay: 0.15 + i * 0.25, duration: 0.7, ease }}
              className={`flex-1 rounded-xl p-2.5 ${card} ${i === 2 ? "!border-[#3ddc97]" : ""}`}
            >
              <span className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 ${i === 2 ? "bg-[#3ddc97] text-white" : "bg-[#00a8e8]/[0.12] text-[#00a8e8]"}`}>
                <Icon d={ICONS[icon]} className="w-3.5 h-3.5" />
              </span>
              <p className="text-[10.5px] font-semibold text-[var(--v-ink)] leading-tight">{label}</p>
              <p className="text-[9px] text-[var(--v-muted)] leading-tight mt-0.5">{sub}</p>
            </motion.div>
            {i < steps.length - 1 && <span className="text-[var(--v-muted)] text-[10px] shrink-0">›</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

/** Teksten på siden skifter, mens man skriver – "du kan selv rette". */
export function VisualEditor({ from = "Åbent 8–16", to = "Åbent 7–17" }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-5">
      <div className={`w-full max-w-[290px] rounded-xl overflow-hidden ${card} shadow-[0_14px_40px_-18px_rgba(0,0,0,0.3)]`}>
        <div className="flex items-center gap-2 px-3 py-1.5 border-b border-[var(--v-line)]">
          <span className="text-[#00a8e8]">
            <Icon d={ICONS.pencil} className="w-3 h-3" />
          </span>
          <span className="text-[9.5px] text-[var(--v-muted)]">Rediger side</span>
          <motion.span
            initial={{ backgroundColor: "rgba(0,168,232,1)" }}
            whileInView={{ backgroundColor: ["rgba(0,168,232,1)", "rgba(61,220,151,1)"] }}
            viewport={inView}
            transition={{ delay: 2.2, duration: 0.3 }}
            className="ml-auto text-[9px] text-white rounded-full px-2.5 py-0.5"
          >
            Gem
          </motion.span>
        </div>
        <div className="p-3">
          <div className="h-2 w-3/5 rounded bg-[var(--v-ink)] mb-2.5" />
          <div className="relative h-6 rounded-md border border-[#00a8e8] px-2 flex items-center overflow-hidden">
            <motion.span
              initial={{ opacity: 1 }}
              whileInView={{ opacity: [1, 1, 0] }}
              viewport={inView}
              transition={{ duration: 1.4, times: [0, 0.7, 1] }}
              className="absolute left-2 text-[10.5px] text-[var(--v-ink)]"
            >
              {from}
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: [0, 1] }}
              viewport={inView}
              transition={{ delay: 1.4, duration: 0.4 }}
              className="absolute left-2 text-[10.5px] text-[var(--v-ink)] font-medium"
            >
              {to}
              <span className="inline-block w-px h-3 bg-[#00a8e8] ml-0.5 align-middle animate-pulse" />
            </motion.span>
          </div>
          <div className="h-1.5 w-full rounded bg-[var(--v-bar)] mt-2.5 mb-1" />
          <div className="h-1.5 w-4/5 rounded bg-[var(--v-bar)]" />
          <motion.p
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={inView}
            transition={{ delay: 2.5, duration: 0.5 }}
            className="mt-2.5 flex items-center gap-1.5 text-[9.5px] text-[#1f9d6b]"
          >
            <Icon d={ICONS.check} className="w-3 h-3" /> Opdateret på siden
          </motion.p>
        </div>
      </div>
    </div>
  );
}

/** Månedlig driftsrapport: backup, opdateringer, hastighed. */
export function VisualReport() {
  const rows = [
    ["shield", "Sikkerhedstjek", "OK"],
    ["refresh", "Opdateringer", "12 stk."],
    ["box", "Backup", "30/30"],
    ["bolt", "Hastighed", "98"],
  ];
  return (
    <div className="absolute inset-0 flex items-center justify-center px-5">
      <div className={`w-full max-w-[260px] rounded-xl p-3 ${card}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-semibold text-[var(--v-ink)]">Rapport · november</span>
          <span className="text-[9px] text-[#1f9d6b] bg-[#3ddc97]/15 rounded-full px-2 py-0.5">Alt grønt</span>
        </div>
        {rows.map(([icon, label, val], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inView}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.5, ease }}
            className="flex items-center gap-2 py-1.5 border-t border-[var(--v-line)]"
          >
            <span className="text-[#3ddc97]">
              <Icon d={ICONS[icon]} className="w-3.5 h-3.5" />
            </span>
            <span className="text-[10px] text-[var(--v-ink)]">{label}</span>
            <span className="ml-auto text-[10px] tabular-nums text-[var(--v-muted)]">{val}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Ur-ikon med "timer sparet" – til automatisering. */
export function VisualHoursSaved({ hours = 6 }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center gap-4 px-5">
      <div className="flex items-end gap-1.5 h-[90px]">
        {[70, 62, 55, 40, 30, 22].map((h, i) => (
          <motion.span
            key={i}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={inView}
            transition={{ delay: 0.1 + i * 0.08, duration: 0.7, ease }}
            style={{ height: `${h}%`, transformOrigin: "bottom" }}
            className={`w-3.5 rounded-t-md ${i >= 3 ? "bg-[#3ddc97]" : "bg-[var(--v-bar)]"}`}
          />
        ))}
      </div>
      <div className="leading-none">
        <p className="text-[30px] font-semibold text-[var(--v-ink)] tracking-tight">
          {hours}
          <span className="text-[13px] font-normal text-[var(--v-muted)]"> t</span>
        </p>
        <p className="text-[10px] text-[var(--v-muted)] mt-1.5">sparet pr. uge</p>
      </div>
    </div>
  );
}
