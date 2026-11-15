"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * "Typisk bureau" mod "WebHjerte": rækker der glider ind, flueben der popper op,
 * og (valgfrit) søjler, der vokser, så forskellen kan mærkes og ikke kun læses.
 * Tallene for bureauer er vejledende markedspriser og -tider (samme som på WordPress-siden).
 */

const ease = [0.16, 1, 0.3, 1];

const rows = [
  {
    topic: "Hvem du taler med",
    agency: "Sælger → projektleder → udvikler. Beskeder går tabt undervejs.",
    me: "Direkte med mig – den, der bygger din side.",
  },
  {
    topic: "Prisen",
    agency: "Du betaler også for kontor, sælgere og administration.",
    me: "Fast pris, aftalt før vi går i gang. Ingen skjulte gebyrer.",
  },
  {
    topic: "Første udkast",
    agency: "Du venter uger på det første møde og det første forslag.",
    me: "Designudkast inden for 48 timer – passer det ikke, betaler du 0 kr.",
  },
  {
    topic: "Når noget skal rettes",
    agency: "Supportkø, tickets og ekstra regning pr. ændring.",
    me: "Du skriver til mig og får svar samme dag. 30 dages support er med.",
  },
  {
    topic: "Dit projekt",
    agency: "Du er én kunde ud af mange – og et ticketnummer.",
    me: "Mit navn står på det. Jeg tager kun projekter, jeg kan nå.",
  },
];

const race = [
  { label: "Pris", agency: { text: "20.000–60.000 kr", w: 100 }, me: { text: "Fra 4.500 kr", w: 16 } },
  { label: "Tid til live hjemmeside", agency: { text: "4–12 uger", w: 100 }, me: { text: "5–10 dage", w: 14 } },
  { label: "Første designudkast", agency: { text: "Uger", w: 70 }, me: { text: "48 timer", w: 8 } },
];

const Check = ({ delay = 0 }) => {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden
      className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-[#00a8e8] flex items-center justify-center"
      initial={reduce ? false : { scale: 0, rotate: -40 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 380, damping: 16, delay }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path d="M2.5 6.4l2.3 2.3 4.7-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.span>
  );
};

const Cross = () => (
  <span aria-hidden className="mt-0.5 w-6 h-6 shrink-0 rounded-full border border-white/15 flex items-center justify-center">
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M2 2l6 6M8 2L2 8" stroke="#8a9696" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  </span>
);

function Bar({ w, text, tone, delay }) {
  const reduce = useReducedMotion();
  const me = tone === "me";
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-9 flex-1 rounded-full bg-white/[0.05] overflow-hidden">
        <motion.div
          className={`absolute inset-y-0 left-0 rounded-full ${me ? "bg-[#00a8e8]" : "bg-[#3a4040]"}`}
          initial={reduce ? { width: `${w}%` } : { width: "0%" }}
          whileInView={{ width: `${w}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.3, delay, ease }}
        />
      </div>
      <span className={`w-[165px] shrink-0 text-[13px] ${me ? "text-white font-semibold" : "text-[#8a9696]"}`}>{text}</span>
    </div>
  );
}

export default function BureauCompare({ showRace = false, rows: rowsProp, agencyLabel = "Typisk bureau", meLabel = "WebHjerte – Ivan" }) {
  const list = rowsProp || rows;
  return (
    <div className="flex flex-col gap-10 sm:gap-14">
      {showRace && (
        <div className="rounded-3xl border border-white/10 bg-[#242828] p-6 sm:p-9">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-8 text-[12.5px] text-[#b4bdbd]">
            <span className="inline-flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#3a4040]" /> Typisk bureau
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#00a8e8]" /> WebHjerte
            </span>
          </div>
          <div className="flex flex-col gap-8">
            {race.map((r, i) => (
              <div key={r.label}>
                <p className="text-[14px] text-white font-medium mb-3">{r.label}</p>
                <div className="flex flex-col gap-2">
                  <Bar w={r.agency.w} text={r.agency.text} tone="agency" delay={i * 0.12} />
                  <Bar w={r.me.w} text={r.me.text} tone="me" delay={i * 0.12 + 0.25} />
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[11.5px] text-[#8a9696] leading-relaxed">
            Bureau-tal er vejledende markedspriser og -tider – ikke et tilbud fra et bestemt bureau.
          </p>
        </div>
      )}

      <div>
        <div className="hidden md:grid grid-cols-[0.8fr_1fr_1.15fr] gap-4 mb-3 px-1">
          <span />
          <span className="text-[13px] text-[#8a9696] px-5">{agencyLabel}</span>
          <span className="text-[13px] text-[#00a8e8] font-medium px-5">{meLabel}</span>
        </div>

        <div className="flex flex-col gap-3">
          {list.map((r, i) => (
            <motion.div
              key={r.topic}
              className="grid grid-cols-1 md:grid-cols-[0.8fr_1fr_1.15fr] gap-3 md:gap-4 items-stretch"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease }}
            >
              <h3 className="text-[15px] text-white font-semibold leading-snug md:self-center px-1 md:px-0">{r.topic}</h3>
              <div className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <Cross />
                <p className="text-[15px] text-[#8a9696] leading-[1.7]">{r.agency}</p>
              </div>
              <div className="flex gap-3 rounded-2xl bg-[#00a8e8]/[0.09] px-5 py-4">
                <Check delay={0.25 + i * 0.06} />
                <p className="text-[15px] text-white leading-[1.7]">{r.me}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
