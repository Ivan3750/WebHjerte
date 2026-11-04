"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FadeUp, RevealLines } from "./fx/Reveal";
import SpotlightCard from "./fx/SpotlightCard";

const ease = [0.16, 1, 0.3, 1];
const inView = { once: true, margin: "-60px" };

/* ───────────── Små UI-visuals til hvert kort ───────────── */

function VisualSite() {
  return (
    <div className="relative h-full flex items-end justify-center px-6 pt-6 overflow-hidden">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={inView}
        transition={{ duration: 0.9, ease }}
        className="w-full max-w-md rounded-t-xl border border-b-0 border-[#e3e1e1] bg-white shadow-[0_-10px_40px_-12px_rgba(0,0,0,0.12)] transition-transform duration-700 group-hover:-translate-y-2"
      >
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#eee]">
          <span className="w-2 h-2 rounded-full bg-[#e5e3e3]" />
          <span className="w-2 h-2 rounded-full bg-[#e5e3e3]" />
          <span className="w-2 h-2 rounded-full bg-[#e5e3e3]" />
          <span className="ml-2 h-3 flex-1 rounded bg-[#f3f2f2]" />
        </div>
        <div className="p-3 grid grid-cols-[1.4fr_1fr] gap-3">
          <div>
            <div className="h-2.5 w-4/5 rounded bg-[#1c1e1e] mb-1.5" />
            <div className="h-2.5 w-3/5 rounded bg-[#1c1e1e] mb-3" />
            <div className="h-1.5 w-full rounded bg-[#e8e6e6] mb-1" />
            <div className="h-1.5 w-4/5 rounded bg-[#e8e6e6] mb-3" />
            <div className="h-5 w-16 rounded-full bg-[#00a8e8]" />
          </div>
          <div className="rounded-lg bg-gradient-to-br from-[#00a8e8] to-[#3b82f6] h-full min-h-[70px]" />
        </div>
      </motion.div>
    </div>
  );
}

function VisualShop() {
  return (
    <div className="relative h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20, rotate: -4 }}
        whileInView={{ opacity: 1, y: 0, rotate: -3 }}
        viewport={inView}
        transition={{ duration: 0.8, ease }}
        className="w-[150px] rounded-xl bg-white border border-[#e3e1e1] p-2.5 shadow-[0_18px_40px_-18px_rgba(0,0,0,0.25)] transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-1"
      >
        <div className="h-16 rounded-lg bg-gradient-to-br from-[#e9f7fd] to-[#cdeefb] mb-2" />
        <div className="h-1.5 w-3/4 rounded bg-[#d9d7d7] mb-1.5" />
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#1c1e1e]">349 kr</span>
          <span className="text-[8px] text-white bg-[#00a8e8] rounded-full px-2 py-1">Køb</span>
        </div>
      </motion.div>
      <motion.span
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={inView}
        transition={{ delay: 0.7, type: "spring", stiffness: 300, damping: 12 }}
        className="absolute top-5 right-8 w-6 h-6 rounded-full bg-[#3ddc97] text-white text-[10px] font-semibold flex items-center justify-center"
      >
        1
      </motion.span>
    </div>
  );
}

function VisualAI() {
  return (
    <div className="h-full flex flex-col justify-center gap-2 px-6">
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={inView}
        transition={{ delay: 0.1, duration: 0.6, ease }}
        className="self-start max-w-[85%] rounded-2xl rounded-bl-sm bg-white border border-[#e3e1e1] px-3 py-2 text-[10px] text-[#4a4a4a]"
      >
        Har I tid på torsdag?
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={inView}
        transition={{ delay: 0.7, duration: 0.6, ease }}
        className="self-end max-w-[88%] rounded-2xl rounded-br-sm bg-[#00a8e8] px-3 py-2 text-[10px] text-white"
      >
        Ja! Kl. 14:30 er ledig – skal jeg booke den?
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={inView}
        transition={{ delay: 1.3 }}
        className="self-start flex gap-1 rounded-2xl bg-white border border-[#e3e1e1] px-3 py-2.5"
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-[#b8b6b6] animate-bounce"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function VisualSeo() {
  const bars = [28, 36, 32, 48, 58, 72, 92];
  return (
    <div className="h-full flex items-end justify-center gap-2 px-8 pb-6 relative">
      {bars.map((h, i) => (
        <motion.span
          key={i}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={inView}
          transition={{ delay: 0.1 + i * 0.07, duration: 0.8, ease }}
          style={{ height: `${h}%`, transformOrigin: "bottom" }}
          className={`flex-1 max-w-[22px] rounded-t-md ${
            i === bars.length - 1 ? "bg-[#00a8e8]" : "bg-[#dcdada]"
          }`}
        />
      ))}
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={inView}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute top-4 right-6 text-[10px] font-medium text-[#00a8e8] bg-white border border-[#00a8e8]/30 rounded-full px-2.5 py-1"
      >
        ↗ Google
      </motion.span>
    </div>
  );
}

function VisualSupport() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-3 px-6">
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
      <div className="flex items-center gap-2 text-[10px] text-[#5a5a5a]">
        <span className="relative flex w-2 h-2">
          <span className="pulse-ring absolute inset-0 rounded-full text-[#3ddc97]" />
          <span className="relative w-2 h-2 rounded-full bg-[#3ddc97]" />
        </span>
        Overvåget hver dag
      </div>
    </div>
  );
}

function VisualDesign() {
  return (
    <div className="h-full flex items-center justify-center gap-5 px-6">
      <div className="flex -space-x-3">
        {["#00a8e8", "#1c1e1e", "#3ddc97", "#f0a63a"].map((c, i) => (
          <motion.span
            key={c}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={inView}
            transition={{ delay: 0.1 + i * 0.1, type: "spring", stiffness: 260, damping: 16 }}
            className="w-11 h-11 rounded-full border-2 border-white shadow-sm transition-transform duration-300 group-hover:translate-y-[-4px]"
            style={{ background: c }}
          />
        ))}
      </div>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={inView}
        transition={{ delay: 0.6 }}
        className="text-[44px] leading-none font-semibold text-[#1c1e1e] tracking-tight"
      >
        Aa
      </motion.span>
    </div>
  );
}

const services = [
  {
    name: "Hjemmeside",
    span: "md:col-span-4",
    visual: <VisualSite />,
    desc: "Taber du kunder, fordi din hjemmeside ser gammeldags ud eller slet ikke findes? Jeg bygger en hjemmeside, der får dig til at se professionel ud fra sekund et - og konverterer besøgende til kunder.",
  },
  {
    name: "AI-integration",
    span: "md:col-span-2",
    visual: <VisualAI />,
    desc: "Forestil dig at aldrig gå glip af en kunde igen. Med AI der svarer, booker og hjælper automatisk, sparer du timer hver uge - og dine kunder får svar med det samme, 24/7.",
  },
  {
    name: "Webshop",
    span: "md:col-span-2",
    visual: <VisualShop />,
    desc: "Klar til at sælge døgnet rundt - også mens du sover? Jeg bygger en webshop, der er nem at bruge for dine kunder og nem at administrere for dig. Ingen tekniske hovedpiner.",
  },
  {
    name: "SEO-optimering",
    span: "md:col-span-2",
    visual: <VisualSeo />,
    desc: "Den flotteste hjemmeside er værdiløs, hvis ingen finder den. Jeg optimerer din side, så du rangerer højere på Google og får flere kunder - helt organisk, uden dyre annoncer.",
  },
  {
    name: "Vedligeholdelse & support",
    span: "md:col-span-2",
    visual: <VisualSupport />,
    desc: "Ingen stress, hvis noget går ned. Jeg holder øje med din side hver dag - sikkerhed, opdateringer og drift - så du altid kan fokusere 100% på din forretning.",
  },
  {
    name: "Design & branding",
    span: "md:col-span-6",
    wide: true,
    visual: <VisualDesign />,
    desc: "Første indtryk tæller. Jeg skaber et design, der får din virksomhed til at se seriøs, troværdig og unik ud - så kunderne vælger dig frem for konkurrenten.",
  },
];

const TilbydeSection = () => {
  return (
    <section className="scene bg-[#f7f6f6] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-24 sm:py-32">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#00a8e8]" />
              Ydelser
            </FadeUp>
            <RevealLines
              lines={["Hvad kan jeg", "hjælpe med?"]}
              className="text-[#111313] font-semibold tracking-tight leading-[1.08] text-[clamp(28px,4.2vw,56px)]"
            />
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm text-[#1c1e1e] border border-[#dcdada] bg-white rounded-full px-5 py-2.5 hover:border-[#00a8e8] hover:text-[#00a8e8]"
            >
              Se alle priser
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {services.map(({ name, desc, visual, span, wide }, idx) => (
            <FadeUp key={name} delay={(idx % 3) * 0.08} className={span}>
              <SpotlightCard
                dark={false}
                className="h-full rounded-3xl bg-white border border-[#e8e6e6] hover:border-[#cfe9f5] transition-colors duration-500"
              >
                <div className={`flex flex-col h-full ${wide ? "md:flex-row md:items-center" : ""}`}>
                  <div
                    className={`m-2.5 rounded-2xl bg-[#f4f3f3] h-[190px] sm:h-[210px] ${
                      wide ? "md:w-[44%] md:shrink-0" : ""
                    }`}
                  >
                    {visual}
                  </div>
                  <div className="p-5 sm:p-6 flex flex-col gap-2">
                    <p className="text-[16px] font-semibold text-[#111313]">{name}</p>
                    <p className="text-[13px] text-[#6a6a6a] leading-[1.75]">{desc}</p>
                  </div>
                </div>
              </SpotlightCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TilbydeSection;
