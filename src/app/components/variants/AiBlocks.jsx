"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "../ui/SectionHead";
import { FadeUp } from "../home/fx/Reveal";
import { ArrowBadge } from "../ui/ArrowIcon";
import { Panel, VisualChat, VisualBooking, VisualAiAnswer, VisualFlow, VisualHoursSaved, VisualCheckout, ICONS } from "../illustrations/Visuals";

const ease = [0.16, 1, 0.3, 1];

const Ico = ({ d, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={d} />
  </svg>
);

/* ───────────── 1. Chat-demo i hero: klik et spørgsmål og se svaret ───────────── */

const DEMO = [
  { q: "Hvad koster en ny terrasse?", a: "En terrasse i trykimprægneret træ koster typisk 1.200–1.600 kr pr. m² inkl. materialer. Vil du have en gratis besigtigelse?" },
  { q: "Kan I komme på torsdag?", a: "Torsdag kl. 8:00 og 13:00 er ledige. Skal jeg booke 13:00 til dig?" },
  { q: "Arbejder I også i Vejle?", a: "Ja – vi kører i hele Horsens, Vejle og Skanderborg uden ekstra kørselstillæg." },
];

export function AiChatDemo() {
  const [msgs, setMsgs] = useState([{ from: "bot", text: "Hej! Jeg er Hansen Tømrers assistent. Hvad kan jeg hjælpe med?" }]);
  const [typing, setTyping] = useState(false);
  const [asked, setAsked] = useState([]);
  const box = useRef(null);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);
  useEffect(() => {
    box.current?.scrollTo({ top: box.current.scrollHeight, behavior: "smooth" });
  }, [msgs, typing]);

  const ask = (item) => {
    if (typing) return;
    setAsked((a) => [...a, item.q]);
    setMsgs((m) => [...m, { from: "user", text: item.q }]);
    setTyping(true);
    timer.current = setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { from: "bot", text: item.a }]);
    }, 1100);
  };

  const left = DEMO.filter((d) => !asked.includes(d.q));

  return (
    <div className="rounded-3xl border border-white/10 bg-[#242828] overflow-hidden">
      <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
        <span className="relative w-9 h-9 rounded-full bg-[#00a8e8] text-[#10181a] flex items-center justify-center">
          <Ico d={ICONS.spark} />
          <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#00a8e8] border-2 border-[#242828]" />
        </span>
        <div className="leading-tight">
          <p className="text-[13px] font-semibold text-white">AI-assistent</p>
          <p className="text-[11px] text-[#8a9696]">Svarer med det samme · også kl. 22</p>
        </div>
        <span className="ml-auto text-[10px] uppercase tracking-[0.14em] text-[#00a8e8] border border-[#00a8e8]/30 rounded-full px-2.5 py-1">Prøv selv</span>
      </div>

      <div ref={box} className="h-[260px] overflow-y-auto px-5 py-4 flex flex-col gap-2.5" aria-live="polite">
        {msgs.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] leading-[1.55] ${
              m.from === "bot" ? "self-start rounded-bl-sm bg-white/[0.07] text-[#dfe6e6]" : "self-end rounded-br-sm bg-[#00a8e8] text-[#10181a]"
            }`}
          >
            {m.text}
          </motion.div>
        ))}
        {typing && (
          <div className="self-start flex gap-1 rounded-2xl rounded-bl-sm bg-white/[0.07] px-3.5 py-3">
            {[0, 1, 2].map((i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-[#8a9696] animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
            ))}
          </div>
        )}
      </div>

      <div className="px-5 pb-5 pt-1 flex flex-wrap gap-2 min-h-[52px]">
        {left.length ? (
          left.map((d) => (
            <button
              key={d.q}
              type="button"
              onClick={() => ask(d)}
              disabled={typing}
              className="text-[12px] text-white border border-white/15 hover:border-[#00a8e8] hover:text-[#00a8e8] disabled:opacity-50 rounded-full px-3.5 py-2 transition-colors"
            >
              {d.q}
            </button>
          ))
        ) : (
          <Link href="/kontakt" className="text-[12px] font-semibold text-[#10181a] bg-[#00a8e8] hover:bg-white rounded-full px-4 py-2 transition-colors">
            Vil du have sådan en? Få et tilbud
          </Link>
        )}
      </div>
      <p className="px-5 pb-4 text-[11px] text-[#6c7a7a]">Eksempel. Din egen assistent lærer dine priser, tider og område.</p>
    </div>
  );
}

/* ───────────── 2. Beregner: hvor meget tid kan du spare? ───────────── */

function Slider({ label, value, set, min, max, step = 1, unit }) {
  return (
    <label className="block">
      <span className="flex items-baseline justify-between mb-3">
        <span className="text-[14px] text-[#3a3d3d]">{label}</span>
        <span className="text-[18px] font-semibold text-[#1c1e1e] tabular-nums">
          {value}
          <span className="text-[12px] font-normal text-[#8a8a8a]"> {unit}</span>
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => set(+e.target.value)}
        className="w-full accent-[#00a8e8] cursor-pointer"
      />
    </label>
  );
}

export function AiSavings() {
  const [perDay, setPerDay] = useState(8);
  const [minutes, setMinutes] = useState(5);
  const [share, setShare] = useState(60);
  const hours = Math.round((perDay * minutes * (share / 100) * 21) / 60);
  const days = (hours / 7.4).toFixed(1).replace(".", ",");
  const max = Math.max(1, Math.round((40 * 15 * 0.8 * 21) / 60));

  return (
    <section className="scene bg-[#f7f6f6]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead
          eyebrow="Regn selv"
          lines={["Hvor meget tid", "kan AI spare dig?"]}
          lead="Skru på tallene. Beregneren viser, hvor mange timer om måneden du kan få tilbage, hvis AI klarer de gentagne spørgsmål."
          className="mb-10 sm:mb-14"
        />
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-4">
          <FadeUp className="rounded-3xl bg-white border border-[#e8e6e6] p-6 sm:p-9 flex flex-col gap-8">
            <Slider label="Henvendelser pr. dag (telefon, mail, sms)" value={perDay} set={setPerDay} min={1} max={40} unit="stk." />
            <Slider label="Minutter du bruger pr. henvendelse" value={minutes} set={setMinutes} min={2} max={15} unit="min." />
            <Slider label="Andel, AI kan svare på selv" value={share} set={setShare} min={30} max={80} step={5} unit="%" />
          </FadeUp>

          <FadeUp delay={0.1} className="relative overflow-hidden rounded-3xl bg-[#1c1e1e] p-6 sm:p-9 flex flex-col">
            <div aria-hidden className="grid-fade absolute inset-0 opacity-40" />
            <div className="relative">
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#7f8c8c] mb-3">Du sparer ca.</p>
              <p className="text-white font-semibold tracking-tight leading-none text-[clamp(56px,7vw,88px)] tabular-nums">
                {hours}
                <span className="text-[20px] font-normal text-[#8a9696]"> timer/md.</span>
              </p>
              <p className="mt-3 text-[15px] text-[#a6b1b1]">Det svarer til ca. {days} arbejdsdage hver måned.</p>
              <div className="mt-8 h-3 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full rounded-full bg-[#00a8e8]"
                  animate={{ width: `${Math.min(100, (hours / max) * 100)}%` }}
                  transition={{ duration: 0.5, ease }}
                />
              </div>
              <p className="mt-8 text-[12px] text-[#6c7a7a] leading-[1.7]">
                Et groft estimat med 21 arbejdsdage pr. måned. Den rigtige gevinst afhænger af dine spørgsmål – det finder vi ud af ved en gratis snak.
              </p>
              <Link
                href="/kontakt"
                className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[#00a8e8] pl-6 pr-2 py-2 text-[13px] font-semibold text-[#10181a] hover:bg-white transition-colors"
              >
                Få et konkret forslag
                <ArrowBadge size="sm" />
              </Link>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

/* ───────────── 3. En arbejdsdag – uden og med AI ───────────── */

const DAY = [
  { time: "07:30", icon: "phone", without: "Telefonen ringer, mens du står på en stige.", with: "Chatbotten svarer på prisen og booker en besigtigelse." },
  { time: "12:00", icon: "mail", without: "Frokosten går med at svare på mails.", with: "Du får et kort resumé af 4 nye henvendelser." },
  { time: "17:30", icon: "pencil", without: "Tilbud skrives om aftenen ved køkkenbordet.", with: "Et udkast til tilbuddet er klar – du retter og sender." },
  { time: "21:00", icon: "calendar", without: "En ny kunde skriver – og venter til i morgen.", with: "Kunden får svar med det samme og en tid i kalenderen." },
];

export function AiDayCompare() {
  const [mode, setMode] = useState("with");
  const on = mode === "with";
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-40" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10 sm:mb-14">
          <SectionHead dark eyebrow="En helt almindelig tirsdag" lines={["Din dag –", "uden og med AI"]} className="" />
          <div role="tablist" aria-label="Vælg dag" className="inline-flex self-start md:self-auto rounded-full bg-white/[0.06] border border-white/10 p-1">
            {[
              ["without", "Uden AI"],
              ["with", "Med AI"],
            ].map(([k, label]) => (
              <button
                key={k}
                role="tab"
                aria-selected={mode === k}
                onClick={() => setMode(k)}
                className={`relative rounded-full px-5 py-2.5 text-[13px] font-medium transition-colors ${mode === k ? "text-[#10181a]" : "text-[#a6b1b1] hover:text-white"}`}
              >
                {mode === k && (
                  <motion.span layoutId="day-pill" className={`absolute inset-0 rounded-full ${k === "with" ? "bg-[#00a8e8]" : "bg-[#00a8e8]"}`} transition={{ duration: 0.4, ease }} />
                )}
                <span className="relative">{label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute left-[27px] sm:left-[35px] top-2 bottom-2 w-px bg-white/10" />
          <div className="flex flex-col gap-3">
            {DAY.map((d, i) => (
              <FadeUp key={d.time} delay={i * 0.06}>
                <div className="relative flex items-center gap-4 sm:gap-6">
                  <span
                    className={`relative z-10 w-14 h-14 sm:w-[70px] sm:h-[70px] shrink-0 rounded-2xl flex flex-col items-center justify-center transition-colors duration-500 ${
                      on ? "bg-[#00a8e8] text-[#10181a]" : "bg-[#2a2d2d] text-[#00a8e8] border border-white/10"
                    }`}
                  >
                    <Ico d={ICONS[d.icon]} className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-[10px] sm:text-[11px] font-semibold tabular-nums mt-1">{d.time}</span>
                  </span>
                  <div className="flex-1 min-w-0 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 sm:px-7 sm:py-5 overflow-hidden">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.p
                        key={mode}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, delay: i * 0.04 }}
                        className={`text-[15px] sm:text-[17px] leading-[1.5] ${on ? "text-white" : "text-[#a6b1b1]"}`}
                      >
                        {on ? d.with : d.without}
                      </motion.p>
                    </AnimatePresence>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────── 4. AI til din branche ───────────── */

const TRADES = [
  {
    key: "haandvaerker",
    label: "Håndværker",
    href: "/hjemmeside-til-haandvaerkere",
    visual: <VisualChat a="Kan I skifte mit tag i maj?" b="Ja – skal jeg sende en tid til besigtigelse?" />,
    points: ["Svarer på priser og område, mens du arbejder", "Samler billeder og mål ind til tilbuddet", "Minder kunden om besigtigelsen dagen før"],
  },
  {
    key: "salon",
    label: "Salon & klinik",
    href: "/hjemmeside-til-saloner",
    visual: <VisualBooking />,
    points: ["Booker tider direkte i din kalender", "Sender sms-påmindelse, så færre udebliver", "Fylder aflyste tider op fra ventelisten"],
  },
  {
    key: "restaurant",
    label: "Restaurant",
    href: "/hjemmeside-til-restauranter",
    visual: <VisualChat a="Har I glutenfri retter?" b="Ja, 4 retter på menuen. Vil du reservere bord?" />,
    points: ["Svarer på menu, allergener og åbningstider", "Tager imod bordreservationer døgnet rundt", "Beder gæster om en anmeldelse efter besøget"],
  },
  {
    key: "webshop",
    label: "Webshop",
    href: "/webshop-hjemmeside",
    visual: <VisualCheckout />,
    points: ["Svarer på levering, retur og størrelser", "Foreslår varer, der passer til kurven", "Skriver udkast til produkttekster"],
  },
];

export function AiByTrade() {
  const [active, setActive] = useState(TRADES[0].key);
  const t = TRADES.find((x) => x.key === active);
  return (
    <section className="scene bg-[#f7f6f6]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead eyebrow="Til din branche" lines={["Sådan bruger", "andre som dig AI"]} className="mb-8 sm:mb-10" />
        <div role="tablist" aria-label="Vælg branche" className="flex flex-wrap gap-2 mb-6">
          {TRADES.map((x) => (
            <button
              key={x.key}
              role="tab"
              aria-selected={x.key === active}
              onClick={() => setActive(x.key)}
              className={`rounded-full border px-4 py-2.5 text-[13px] font-medium transition-colors ${
                x.key === active ? "bg-[#1c1e1e] border-[#1c1e1e] text-white" : "bg-white border-[#e4e2e2] text-[#3a3d3d] hover:border-[#00a8e8] hover:text-[#00a8e8]"
              }`}
            >
              {x.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={t.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease }}
            className="grid md:grid-cols-2 gap-4 rounded-3xl bg-white border border-[#e8e6e6] p-2.5"
          >
            <Panel h="h-[240px] sm:h-[300px]">{t.visual}</Panel>
            <div className="p-5 sm:p-8 flex flex-col">
              <p className="text-[20px] font-semibold text-[#1c1e1e] mb-5">{t.label}</p>
              <ul className="flex flex-col gap-4 mb-8">
                {t.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[15px] text-[#3f4242] leading-[1.6]">
                    <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-[#00a8e8]/15 text-[#00a8e8] flex items-center justify-center">
                      <Ico d={ICONS.check} className="w-3.5 h-3.5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Link href={t.href} className="group mt-auto inline-flex items-center gap-3 self-start text-[13px] font-medium text-[#1c1e1e] hover:text-[#00a8e8] transition-colors">
                Hjemmeside til {t.label.toLowerCase()}
                <ArrowBadge size="sm" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ───────────── 5. Tre måder at komme i gang ───────────── */

const STARTS = [
  {
    href: "/ai-seo",
    tag: "Lille start",
    title: "Bliv fundet i AI-søgning",
    price: "Fra 3.500 kr",
    text: "Tekster og opsætning, så ChatGPT og Google AI forstår og anbefaler dig.",
    visual: <VisualAiAnswer />,
  },
  {
    href: "/ai-chatbot-til-hjemmeside",
    tag: "Hurtigst i gang",
    title: "Chatbot på din nuværende side",
    price: "Fast tilbud på 24 timer",
    text: "Virker på WordPress, Shopify, Webflow og kode – du skal ikke have ny side.",
    visual: <VisualFlow />,
    popular: true,
  },
  {
    href: "/ai-automatisering-virksomhed",
    tag: "Fuld pakke",
    title: "Hjemmeside + AI + automatisering",
    price: "Fra 14.000 kr",
    text: "Ny side med chatbot, booking og opfølgning, der kører af sig selv.",
    visual: <VisualHoursSaved />,
  },
];

export function AiStart() {
  return (
    <section className="scene bg-[#e4f0f7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead eyebrow="Kom i gang" lines={["Tre måder at starte –", "alle med fast pris"]} lead="Priser er inkl. moms. Løbende udgifter til AI-værktøjer oplyses, før du siger ja." className="mb-10 sm:mb-14" />
        <div className="grid md:grid-cols-3 gap-4">
          {STARTS.map((s, i) => (
            <FadeUp key={s.href} delay={i * 0.07} className="h-full">
              <Link
                href={s.href}
                className={`group h-full flex flex-col rounded-3xl border transition-all duration-500 hover:-translate-y-1 ${
                  s.popular ? "bg-[#1c1e1e] border-[#00a8e8]/50" : "bg-white border-[#e8e6e6] hover:border-[#00a8e8]/50"
                }`}
              >
                <div className="m-2.5">
                  <Panel dark={s.popular} h="h-[170px]">
                    {s.visual}
                  </Panel>
                </div>
                <div className="px-5 sm:px-6 pt-3 pb-6 flex flex-col gap-2 flex-1">
                  <span className={`text-[10.5px] uppercase tracking-[0.14em] ${s.popular ? "text-[#00a8e8]" : "text-[#8a8a8a]"}`}>{s.tag}</span>
                  <p className={`text-[17px] font-semibold leading-snug ${s.popular ? "text-white" : "text-[#1c1e1e]"}`}>{s.title}</p>
                  <p className={`text-[13.5px] leading-[1.7] ${s.popular ? "text-[#a6b1b1]" : "text-[#5a5d5d]"}`}>{s.text}</p>
                  <div className="mt-auto pt-5 flex items-center justify-between">
                    <span className={`text-[15px] font-semibold ${s.popular ? "text-white" : "text-[#1c1e1e]"}`}>{s.price}</span>
                    <ArrowBadge size="sm" tone={s.popular ? "dark" : "light"} />
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
