"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import SectionHead from "../ui/SectionHead";
import { FadeUp } from "../home/fx/Reveal";
import { ArrowBadge } from "../ui/ArrowIcon";
import { ICONS } from "../illustrations/Visuals";

const ease = [0.16, 1, 0.3, 1];
const Ico = ({ d, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={d} />
  </svg>
);

/* ═════════ Alle platforme: find din platform på 3 spørgsmål ═════════ */

const QUESTIONS = [
  { key: "shop", q: "Skal du sælge varer online?" },
  { key: "edit", q: "Vil du selv rette tekster og billeder?" },
  { key: "special", q: "Har du særlige behov – booking, portal, integrationer?" },
];

function recommend(a) {
  if (a.special) return { name: "Skræddersyet kode", why: "Fuld frihed og højeste hastighed – bygget præcis til dine behov.", color: "#8a8ff0", href: "/skraeddersyede-hjemmesider" };
  if (a.shop && a.edit) return { name: "Shopify", why: "Hurtig, driftssikker butik, som du selv styrer.", color: "#5e8e3e", href: "/shopify-hjemmeside" };
  if (a.shop) return { name: "WooCommerce", why: "Webshop i WordPress uden platformsafgift.", color: "#7f54b3", href: "/webshop-hjemmeside" };
  if (a.edit) return { name: "WordPress", why: "Nem at redigere selv og stærk til indhold og SEO.", color: "#2271b1", href: "/wordpress-hjemmeside" };
  return { name: "Next.js", why: "Lynhurtig side uden plugins at vedligeholde.", color: "#111", href: "/skraeddersyede-hjemmesider" };
}

export function PlatformQuiz() {
  const [a, setA] = useState({ shop: false, edit: true, special: false });
  const r = recommend(a);
  return (
    <section className="scene bg-[#f2f2fb]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead eyebrow="Find din platform" lines={["Tre spørgsmål –", "ét ærligt svar"]} className="mb-10" />
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-4">
          <div className="flex flex-col gap-3">
            {QUESTIONS.map(({ key, q }) => (
              <div key={key} className="rounded-3xl bg-white border border-[#e2e2f2] p-5 flex items-center justify-between gap-4">
                <p className="text-[15px] text-[#1c1e1e]">{q}</p>
                <div className="flex rounded-full bg-[#f2f2fb] p-1 shrink-0">
                  {[
                    [true, "Ja"],
                    [false, "Nej"],
                  ].map(([v, l]) => (
                    <button
                      key={l}
                      type="button"
                      aria-pressed={a[key] === v}
                      onClick={() => setA((s) => ({ ...s, [key]: v }))}
                      className={`rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors ${a[key] === v ? "bg-[#1c1e1e] text-white" : "text-[#5a5d70]"}`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={r.name} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35, ease }} className="rounded-3xl p-7 sm:p-9 text-white flex flex-col" style={{ backgroundColor: r.color }}>
              <p className="text-[11px] uppercase tracking-[0.16em] opacity-75">Mit bud</p>
              <p className="text-[clamp(30px,4vw,44px)] font-semibold tracking-tight mt-2">{r.name}</p>
              <p className="text-[15px] opacity-90 mt-2 leading-[1.6]">{r.why}</p>
              <Link href={r.href} className="group mt-auto pt-8 inline-flex items-center gap-3 text-[13px] font-semibold">
                Læs mere
                <ArrowBadge size="sm" tone="dark" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ═════════ Shopify: det laver jeg + Shopify vs WooCommerce ═════════ */

const SHOPIFY_TASKS = [
  [ICONS.box, "Butik, produkter og lager"],
  [ICONS.pencil, "Tema tilpasset dit brand"],
  [ICONS.card, "Betaling, fragt og moms"],
  [ICONS.bolt, "SEO og hurtig indlæsning"],
  [ICONS.refresh, "Flytning fra Woo eller Wix"],
  [ICONS.spark, "Apps og integrationer"],
];

export function ShopifyTasks() {
  return (
    <section className="scene bg-[#f2faf5]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead eyebrow="Det laver jeg i Shopify" lines={["Fra tom butik til", "første ordre"]} className="mb-10" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {SHOPIFY_TASKS.map(([icon, t], i) => (
            <FadeUp key={t} delay={i * 0.06}>
              <div className="h-full rounded-3xl bg-white border border-[#d5ecdf] p-5 sm:p-6 flex items-center gap-4">
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-[#1f9d6b] text-white flex items-center justify-center">
                  <Ico d={icon} className="w-5 h-5" />
                </span>
                <p className="text-[15px] font-medium text-[#1c1e1e] leading-snug">{t}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const VS = [
  ["Opstart", "Hurtig", "Kræver hosting og opsætning"],
  ["Drift og sikkerhed", "Shopify klarer det", "Din eller min opgave"],
  ["Omkostninger", "Abonnement + gebyrer", "Hosting, plugins, gebyrer"],
  ["Fleksibilitet", "Høj via apps", "Meget høj, fuld kontrol"],
];

export function ShopifyVsWoo() {
  const [side, setSide] = useState(0);
  return (
    <section className="scene relative overflow-hidden bg-[#13241b]">
      <div className="relative max-w-5xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead dark eyebrow="Shopify vs WooCommerce" lines={["Tryk og sammenlign"]} className="mb-8" />
        <div className="inline-flex rounded-full bg-white/[0.06] border border-white/10 p-1 mb-6">
          {["Shopify", "WooCommerce"].map((n, i) => (
            <button key={n} type="button" aria-pressed={side === i} onClick={() => setSide(i)} className="relative rounded-full px-5 py-2.5 text-[13px] font-medium" style={{ color: side === i ? "#10181a" : "#b9c9bf" }}>
              {side === i && <motion.span layoutId="vs-pill" className="absolute inset-0 rounded-full" style={{ backgroundColor: i ? "#b59cf0" : "#3ddc97" }} />}
              <span className="relative">{n}</span>
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          {VS.map((row, k) => (
            <div key={row[0]} className="grid grid-cols-[1fr_1.4fr] gap-3 rounded-2xl bg-white/[0.04] border border-white/10 px-5 py-4">
              <span className="text-[13.5px] text-[#9fb3a8]">{row[0]}</span>
              <AnimatePresence mode="wait">
                <motion.span key={side} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25, delay: k * 0.04 }} className="text-[15px] font-medium text-white">
                  {row[side + 1]}
                </motion.span>
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════════ AI-synlighed: før (10 links) vs nu (ét svar) ═════════ */

export function GeoCompare() {
  return (
    <section className="scene bg-[#f3f2fb]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead eyebrow="Søgning har ændret sig" lines={["Før: ti links.", "Nu: ét svar."]} lead="Når AI giver ét svar, er det kun de virksomheder, der bliver nævnt, som får kunden." className="mb-10" />
        <div className="grid md:grid-cols-2 gap-4">
          <FadeUp className="rounded-3xl bg-white border border-[#e2e1f0] p-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a8a9a] mb-4">Google før</p>
            <div className="flex flex-col gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="opacity-70">
                  <div className="h-2.5 rounded bg-[#1a5fb4]/60 mb-1.5" style={{ width: `${70 - i * 6}%` }} />
                  <div className="h-2 rounded bg-[#e6e6ee] w-11/12" />
                </div>
              ))}
            </div>
            <p className="mt-5 text-[13.5px] text-[#5a5d70]">Kunden klikker, sammenligner og vælger selv.</p>
          </FadeUp>
          <FadeUp delay={0.15} className="rounded-3xl bg-[#1e1c2a] p-6 text-white">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#8a8ff0] mb-4">AI nu</p>
            <div className="rounded-2xl bg-white/[0.06] p-4 text-[14.5px] leading-[1.7] text-[#d9d8e8]">
              Jeg vil anbefale <mark className="bg-[#8a8ff0]/30 text-white rounded px-1">én virksomhed</mark>, fordi de har klare priser, gode anmeldelser og svarer hurtigt.
            </div>
            <p className="mt-5 text-[13.5px] text-[#b8b6cc]">AI vælger for kunden. Er du ikke nævnt, findes du ikke.</p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

const GEO_STEPS = ["Kundernes spørgsmål", "Tekster, der svarer", "Data AI kan læse", "Teknisk fundament", "Troværdighed", "Måling"];

export function GeoSteps() {
  return (
    <section className="scene relative overflow-hidden bg-[#16141f]">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead dark eyebrow="Metoden" lines={["Seks trin til at", "blive nævnt"]} className="mb-12" />
        <div className="relative grid grid-cols-2 md:grid-cols-6 gap-3">
          <div aria-hidden className="hidden md:block absolute left-[8%] right-[8%] top-7 h-0.5 bg-white/10">
            <motion.span className="block h-full bg-[#8a8ff0]" initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ duration: 2, ease }} />
          </div>
          {GEO_STEPS.map((s, i) => (
            <FadeUp key={s} delay={i * 0.12} className="relative flex flex-col items-center text-center">
              <span className="w-14 h-14 rounded-2xl bg-[#8a8ff0] text-[#16141f] text-[18px] font-semibold flex items-center justify-center mb-4">{i + 1}</span>
              <p className="text-[13.5px] text-[#d9d8e8] leading-snug">{s}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═════════ AI-chatbot: samtale → lead i din indbakke ═════════ */

export function ChatbotLead() {
  const fields = [
    ["Navn", "Karin Holm"],
    ["Telefon", "+45 •• •• •• ••"],
    ["Opgave", "Rens af tagrender, parcelhus"],
    ["By", "Brædstrup"],
    ["Hvornår", "Inden for 2 uger"],
  ];
  return (
    <section className="scene bg-[#eef6fa]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead eyebrow="Fra samtale til opgave" lines={["Chatten slutter –", "et færdigt lead lander hos dig"]} className="mb-10" />
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">
          <FadeUp className="rounded-3xl bg-white border border-[#d6e6ee] p-5 flex flex-col gap-2">
            {["Hvad koster rens af tagrender?", "Typisk 1.200–1.800 kr. Hvor bor du?", "Brædstrup – gerne snart", "Det dækker vi. Må jeg få dit nummer?"].map((t, i) => (
              <p key={t} className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[13px] ${i % 2 ? "self-start bg-[#f1f4f6] text-[#1c1e1e]" : "self-end bg-[#00a8e8] text-white"}`}>
                {t}
              </p>
            ))}
          </FadeUp>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mx-auto w-12 h-12 rounded-full bg-[#00a8e8] text-white flex items-center justify-center rotate-90 md:rotate-0"
          >
            <Ico d="M5 12h14M13 6l6 6-6 6" />
          </motion.span>
          <FadeUp delay={0.3} className="rounded-3xl bg-[#1c1e1e] p-6 text-white">
            <p className="flex items-center gap-2 text-[12px] text-[#3ddc97] mb-4">
              <Ico d={ICONS.mail} className="w-4 h-4" /> Nyt lead · 21:47
            </p>
            {fields.map(([k, v], i) => (
              <motion.p
                key={k}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.12 }}
                className="flex justify-between gap-4 py-2 border-t border-white/10 text-[13.5px]"
              >
                <span className="text-[#8a9696]">{k}</span>
                <span className="text-right">{v}</span>
              </motion.p>
            ))}
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
