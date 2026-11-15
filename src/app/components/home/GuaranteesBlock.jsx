"use client";

import { motion, useReducedMotion } from "framer-motion";
import CountUp from "./fx/CountUp";
import { FadeUp, RevealLines } from "./fx/Reveal";
import { PrimaryLink } from "../ui/PageHero";

const guarantees = [
  {
    stat: { to: 48, suffix: " t" },
    title: "Udkast inden for 48 timer",
    text: "Du ser det første design allerede 48 timer efter vores samtale. Intet bygges, før du har godkendt det.",
  },
  {
    stat: { to: 0, suffix: " kr" },
    title: "0 kr, hvis det ikke passer",
    text: "Er du ikke tilfreds med designet, betaler du 0 kr for det. Justeringer undervejs er en del af prisen.",
  },
  {
    stat: { text: "2–10 dage" },
    title: "Live på 2–10 dage",
    text: "Pakkerne leveres typisk på 2–10 dage. Den samlede tid afhænger af, hvor hurtigt du leverer tekster og billeder.",
  },
  {
    stat: { to: 100, suffix: " %" },
    title: "Domæne og kode er dine",
    text: "Domænet og koden tilhører dig fra start. Du er ikke bundet til os eller en bestemt platform.",
  },
];

/**
 * Garantierne som en rejse: fire trin på en linje, der tegner sig selv, når man scroller.
 * Man kan se, hvornår man først skal betale – og at alt før det er uden risiko.
 */
const GuaranteesBlock = () => {
  const reduce = useReducedMotion();
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="pointer-events-none absolute -bottom-40 -left-24 w-[520px] h-[520px] rounded-full bg-[#00a8e8]/[0.08] blur-[120px]" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-12 lg:gap-16">
        <div className="lg:sticky lg:top-28 self-start">
          <RevealLines
            lines={["Du løber ingen risiko,", "før du har sagt ja"]}
            className="text-white font-semibold tracking-tight leading-[1.15] text-[clamp(24px,2.6vw,34px)] mb-6"
          />
          <FadeUp as="p" delay={0.1} className="readable text-[16px] text-[#b4bdbd] leading-[1.75] max-w-[44ch] mb-8">
            Først ser du designet. Først når du kan lide det, går vi videre – og siden er din fra første dag.
          </FadeUp>
          <FadeUp delay={0.18}>
            <PrimaryLink href="/kontakt">Få et gratis tilbud</PrimaryLink>
          </FadeUp>
        </div>

        <ol className="relative flex flex-col gap-5 pl-12 sm:pl-14">
          {/* Linjen */}
          <span aria-hidden className="absolute left-[19px] sm:left-[23px] top-3 bottom-3 w-px bg-white/10" />
          <motion.span
            aria-hidden
            className="absolute left-[19px] sm:left-[23px] top-3 bottom-3 w-px origin-top bg-[#00a8e8]"
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          />

          {guarantees.map((g, i) => (
            <motion.li
              key={g.title}
              className="relative"
              initial={reduce ? false : { opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <span
                aria-hidden
                className="absolute -left-12 sm:-left-14 top-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#1c1e1e] border border-white/10 flex items-center justify-center text-[13px] font-semibold text-[#00a8e8]"
              >
                {i + 1}
              </span>
              <div className="rounded-3xl glass p-5 sm:p-7 grid grid-cols-1 sm:grid-cols-[190px_1fr] gap-3 sm:gap-6 items-center">
                <p className="text-[clamp(24px,2.6vw,34px)] whitespace-nowrap font-semibold tracking-tight text-gradient-blue leading-none">
                  {g.stat.text ?? <CountUp to={g.stat.to} suffix={g.stat.suffix} />}
                </p>
                <div>
                  <p className="text-[16px] font-semibold text-white mb-1.5">{g.title}</p>
                  <p className="readable text-[15px] text-[#b4bdbd] leading-[1.7]">{g.text}</p>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default GuaranteesBlock;
