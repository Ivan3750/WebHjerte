"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionHead from "../ui/SectionHead";
import { FadeUp } from "../home/fx/Reveal";
import { ArrowBadge } from "../ui/ArrowIcon";
import { Panel, ICONS } from "../illustrations/Visuals";

const ease = [0.16, 1, 0.3, 1];
const inView = { once: true, margin: "-60px" };
const card = "bg-[var(--v-card)] border border-[var(--v-line)]";
const Ico = ({ d, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
    <path d={d} />
  </svg>
);

/* Små scener til kunderejsen */
function SceneGoogle() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-4">
      <div className={`w-full max-w-[230px] rounded-xl p-3 ${card}`}>
        <div className="h-5 rounded-full bg-[var(--v-panel)] px-2.5 flex items-center text-[9px] text-[var(--v-muted)] mb-2.5">keramik krus håndlavet</div>
        <p className="text-[10.5px] font-semibold text-[#00a8e8] leading-tight">Håndlavet krus – blå glasur</p>
        <p className="text-[9px] text-[#00a8e8] mt-0.5">dinbutik.dk</p>
        <p className="flex items-center gap-2 mt-1.5 text-[9px] text-[var(--v-muted)]">
          <span className="text-[var(--v-ink)] font-semibold">189 kr</span>· <span className="text-[#00a8e8]">På lager</span>
        </p>
      </div>
    </div>
  );
}
function SceneCart() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className={`w-[150px] rounded-xl p-2.5 ${card}`}>
        <div className="h-12 rounded-lg bg-[#00a8e8]/20 mb-2" />
        <div className="h-1.5 w-3/4 rounded bg-[var(--v-bar)] mb-2" />
        <motion.span
          initial={{ scale: 1 }}
          whileInView={{ scale: [1, 0.92, 1] }}
          viewport={inView}
          transition={{ delay: 0.8, duration: 0.35 }}
          className="block h-6 rounded-full bg-[#00a8e8] text-white text-[9px] font-semibold text-center leading-6"
        >
          Læg i kurv
        </motion.span>
      </div>
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={inView}
        transition={{ delay: 1.1, type: "spring", stiffness: 300, damping: 12 }}
        className="absolute top-6 right-[24%] w-6 h-6 rounded-full bg-[#00a8e8] text-white text-[10px] font-semibold flex items-center justify-center"
      >
        1
      </motion.span>
    </div>
  );
}
function ScenePay() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4">
      {[
        ["MobilePay", "#00a8e8"],
        ["Kort", "#1c1e1e"],
        ["Apple Pay", "#1c1e1e"],
      ].map(([m, c], i) => (
        <motion.div
          key={m}
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={inView}
          transition={{ delay: 0.15 + i * 0.12, duration: 0.5, ease }}
          className={`w-full max-w-[190px] flex items-center gap-2 rounded-lg px-3 py-2 ${card} ${i === 0 ? "!border-[#00a8e8]" : ""}`}
        >
          <span className="w-3 h-3 rounded-full border-2" style={{ borderColor: c, background: i === 0 ? c : "transparent" }} />
          <span className="text-[10.5px] text-[var(--v-ink)]">{m}</span>
        </motion.div>
      ))}
    </div>
  );
}
function SceneOrder() {
  return (
    <div className="absolute inset-0 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 16 }}
        className={`w-full max-w-[220px] rounded-2xl p-3 flex gap-2.5 items-start shadow-[0_18px_40px_-20px_rgba(28,30,30,0.35)] ${card}`}
      >
        <span className="w-8 h-8 rounded-lg bg-[#00a8e8] text-white flex items-center justify-center shrink-0">
          <Ico d={ICONS.box} />
        </span>
        <span className="leading-tight">
          <span className="block text-[10.5px] font-semibold text-[var(--v-ink)]">Ny ordre #1042</span>
          <span className="block text-[9.5px] text-[var(--v-muted)] mt-0.5">189 kr · betalt · klar til afsendelse</span>
        </span>
      </motion.div>
    </div>
  );
}

const JOURNEY = [
  { title: "Kunden finder varen", text: "Pris og lagerstatus vises direkte i Google.", scene: <SceneGoogle /> },
  { title: "Lægger i kurven", text: "Tydelige billeder, varianter og én klar knap.", scene: <SceneCart /> },
  { title: "Betaler, som kunden vil", text: "MobilePay, kort og Apple Pay – på få sekunder.", scene: <ScenePay /> },
  { title: "Du får ordren", text: "Besked på mobilen, og fragtlabel er klar.", scene: <SceneOrder /> },
];

export function ShopJourney() {
  return (
    <section className="scene bg-[#f7f6f6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead
          eyebrow="Fra søgning til salg"
          lines={["Sådan køber dine", "kunder i din webshop"]}
          lead="Hvert trin er bygget, så kunden ikke falder fra undervejs – og så du har mindst muligt arbejde."
          className="mb-10 sm:mb-14"
        />
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {JOURNEY.map((j, i) => (
            <FadeUp key={j.title} delay={i * 0.1} className="h-full">
              <div className="h-full rounded-3xl bg-white border border-[#e8e6e6] flex flex-col">
                <div className="m-2.5">
                  <Panel h="h-[160px]">{j.scene}</Panel>
                </div>
                <div className="px-5 pt-2 pb-6">
                  <p className="text-[11px] tabular-nums text-[#00a8e8] mb-2">Trin {i + 1}</p>
                  <p className="text-[16px] font-semibold text-[#1c1e1e] mb-1.5">{j.title}</p>
                  <p className="text-[13.5px] text-[#5a5d5d] leading-[1.65]">{j.text}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Platformvalg som visuelle målere ───────────── */

const PLATFORMS = [
  { name: "WooCommerce", fit: "Små og mellemstore shops", meters: [["Startpris", 2], ["Månedlige gebyrer", 1], ["Fleksibilitet", 4]], note: "Ingen platformsafgift – kræver vedligehold." },
  { name: "Shopify", fit: "Hurtig start, mange apps", meters: [["Startpris", 2], ["Månedlige gebyrer", 4], ["Fleksibilitet", 3]], note: "Abonnement og transaktionsgebyrer." },
  { name: "Skræddersyet", fit: "Bookinger, abonnementer, specielle behov", meters: [["Startpris", 4], ["Månedlige gebyrer", 1], ["Fleksibilitet", 5]], note: "Hurtigst og mest frihed." },
];

export function ShopPlatforms() {
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-40" />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead dark eyebrow="Hvilken platform?" lines={["Tre veje til en webshop –", "jeg anbefaler ærligt"]} className="mb-10 sm:mb-14" />
        <div className="grid md:grid-cols-3 gap-4">
          {PLATFORMS.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 sm:p-7 flex flex-col">
                <p className="text-[19px] font-semibold text-white">{p.name}</p>
                <p className="text-[13px] text-[#93a0a0] mt-1 mb-6">{p.fit}</p>
                <div className="flex flex-col gap-4 mb-6">
                  {p.meters.map(([label, v]) => (
                    <div key={label}>
                      <p className="flex justify-between text-[12px] text-[#a6b1b1] mb-1.5">{label}</p>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((n) => (
                          <motion.span
                            key={n}
                            initial={{ opacity: 0.2 }}
                            whileInView={{ opacity: 1 }}
                            viewport={inView}
                            transition={{ delay: 0.2 + n * 0.08 }}
                            className={`h-2 flex-1 rounded-full ${n <= v ? (label === "Fleksibilitet" ? "bg-[#00a8e8]" : "bg-[#00a8e8]") : "bg-white/10"}`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-auto text-[12.5px] text-[#7f8c8c] leading-[1.6]">{p.note}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Pris + hvad der indgår, som ikon-gitter ───────────── */

const INCLUDED = [
  [ICONS.box, "Produkter med varianter"],
  [ICONS.card, "MobilePay og kort"],
  [ICONS.cart, "Kurv og kasse"],
  [ICONS.refresh, "Lager og ordrer"],
  [ICONS.bolt, "SEO for produkter"],
  [ICONS.shield, "Handelsbetingelser og GDPR"],
];

export function ShopPrice() {
  return (
    <section className="scene bg-[#e4f0f7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-16 items-center">
        <FadeUp>
          <div className="rounded-3xl bg-[#1c1e1e] p-7 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#7f8c8c] mb-4">Webshop · fast pris</p>
            <p className="text-white font-semibold tracking-tight leading-none text-[clamp(44px,5vw,64px)]">
              <span className="text-[16px] font-normal text-[#8a9696] mr-2">fra</span>14.000<span className="text-[16px] font-normal text-[#8a9696]"> kr</span>
            </p>
            <p className="text-[14px] text-[#a6b1b1] mt-3">inkl. moms · typisk 2–4 uger</p>
            <Link
              href="/kontakt?pakke=webshop"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#00a8e8] pl-6 pr-2 py-2 text-[13px] font-semibold text-[#10181a] hover:bg-white transition-colors"
            >
              Få et tilbud på din webshop
              <ArrowBadge size="sm" />
            </Link>
          </div>
        </FadeUp>
        <div>
          <SectionHead eyebrow="Det er med" lines={["Alt, du skal bruge", "for at sælge fra dag ét"]} className="mb-8" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {INCLUDED.map(([icon, label], i) => (
              <FadeUp key={label} delay={i * 0.05}>
                <div className="h-full rounded-2xl bg-white border border-[#d8e6ee] p-4">
                  <span className="w-9 h-9 rounded-xl bg-[#00a8e8]/10 text-[#00a8e8] flex items-center justify-center mb-3">
                    <Ico d={icon} />
                  </span>
                  <p className="text-[13.5px] font-medium text-[#1c1e1e] leading-snug">{label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
