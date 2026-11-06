"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import Button from "../ui/Button";

const ease = [0.16, 1, 0.3, 1];

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

/* ───────────── Mini-hjemmeside inde i browser-mockuppen ───────────── */
function MiniSite() {
  const pop = (i) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.9 + i * 0.12, duration: 0.7, ease },
  });
  return (
    <div className="p-4 sm:p-5 flex flex-col gap-3 bg-[#0e1111]">
      <motion.div {...pop(0)} className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-md bg-[#00a8e8]" />
          <span className="h-2 w-12 rounded bg-white/20" />
        </div>
        <div className="flex gap-2">
          <span className="h-1.5 w-8 rounded bg-white/15" />
          <span className="h-1.5 w-8 rounded bg-white/15" />
          <span className="h-1.5 w-8 rounded bg-white/15" />
        </div>
      </motion.div>

      <motion.div
        {...pop(1)}
        className="relative rounded-xl overflow-hidden border border-white/10 p-4 sm:p-5 border-l-2 border-l-[#00a8e8]"
        style={{ background: "#12181a" }}
      >
        <div className="h-3 w-3/4 rounded bg-white/85 mb-2" />
        <div className="h-3 w-1/2 rounded bg-white/85 mb-4" />
        <div className="h-1.5 w-5/6 rounded bg-white/25 mb-1.5" />
        <div className="h-1.5 w-2/3 rounded bg-white/25 mb-5" />
        <div className="flex gap-2">
          <span className="h-6 w-20 rounded-full bg-[#00a8e8]" />
          <span className="h-6 w-16 rounded-full border border-white/20" />
        </div>
      </motion.div>

      <div className="grid grid-cols-3 gap-2.5">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            {...pop(2 + i)}
            className="rounded-lg border border-white/10 bg-white/[0.03] p-2.5"
          >
            <span
              className="block w-5 h-5 rounded-md mb-2"
              style={{ background: ["#00a8e8", "#3ddc97", "#8a8ff0"][i], opacity: 0.85 }}
            />
            <span className="block h-1.5 w-10/12 rounded bg-white/30 mb-1.5" />
            <span className="block h-1.5 w-7/12 rounded bg-white/15" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ───────────── Flydende glas-widgets ───────────── */
function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M3 8.5l3.2 3L13 4.5" stroke="#00a8e8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 160 56" className="w-full h-14" fill="none" aria-hidden>
      <motion.path
        d="M0 48 C 20 46, 28 40, 44 38 S 72 30, 88 24 S 120 14, 160 6 L160 56 L0 56 Z"
        fill="#00a8e8" fillOpacity="0.12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
      />
      <motion.path
        d="M0 48 C 20 46, 28 40, 44 38 S 72 30, 88 24 S 120 14, 160 6"
        stroke="#00a8e8"
        strokeWidth="2.2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ delay: 1.4, duration: 1.6, ease }}
      />
      <motion.circle
        cx="160"
        cy="6"
        r="3.5"
        fill="#00a8e8"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2.9, duration: 0.4 }}
      />
    </svg>
  );
}

export default function HomeHero() {
  const reduce = useReducedMotion();
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Mus → blød 3D-tilt
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 90, damping: 18 });
  const smy = useSpring(my, { stiffness: 90, damping: 18 });

  const onMove = (e) => {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 2);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 2);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  // Scroll → mockuppen retter sig op, zoomer og "løfter" sig
  const scrollRotY = useTransform(scrollYProgress, [0, 0.7], [-9, 3]);
  const scrollRotX = useTransform(scrollYProgress, [0, 0.7], [5, -2]);
  const rotY = useTransform([scrollRotY, smx], ([a, b]) => a + b * 6);
  const rotX = useTransform([scrollRotX, smy], ([a, b]) => a - b * 5);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.1]);
  const mockY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  // Widgets bevæger sig med forskellig hastighed → dybde
  const yA = useTransform(scrollYProgress, [0, 1], [0, -170]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yD = useTransform(scrollYProgress, [0, 1], [0, -110]);

  // Tekst glider op og toner ud
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);

  const rm = (v) => (reduce ? 0 : v);

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="scene relative isolate overflow-hidden bg-[#1c1e1e] min-h-[calc(100dvh-68px)] flex items-center"
    >
      <div aria-hidden className="grid-fade absolute inset-0 -z-10 opacity-70" />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-12 md:py-16 grid md:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center">
        {/* ─────────── Tekst ─────────── */}
        <motion.div
          style={reduce ? undefined : { y: textY, opacity: textOpacity }}
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.11, delayChildren: 0.1 }}
          className="flex flex-col"
        >
          <motion.div
            variants={item}
            className="glass inline-flex items-center gap-2.5 rounded-full pl-2.5 pr-4 py-1.5 text-[11px] text-[#c4cccc] w-fit mb-6"
          >
            <span className="relative flex w-2 h-2">
              <span className="pulse-ring absolute inset-0 rounded-full text-[#3ddc97]" />
              <span className="relative w-2 h-2 rounded-full bg-[#3ddc97]" />
            </span>
            Horsens &amp; Midtjylland · Tager nye projekter
          </motion.div>

          <motion.h1
            variants={item}
            className="text-white font-semibold tracking-tight leading-[1.1] mb-5"
          >
            <span className="block text-[clamp(28px,3.6vw,50px)]">Webbureau i Horsens</span>
            <span className="block mt-3 text-[clamp(15px,1.7vw,22px)] font-medium text-[#00a8e8] leading-snug text-balance">
              – hjemmesider og AI-løsninger til fast pris, live på 2–10 dage
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[#93a0a0] text-[14px] sm:text-[15px] leading-[1.75] max-w-md mb-8"
          >
            Hjemmesider på WordPress, Shopify eller skræddersyet kode – og AI, der svarer kunder,
            booker tider og gør dig synlig i ChatGPT. Du taler direkte med mig, ikke et mellemled.
          </motion.p>

          <motion.div variants={item} className="flex items-center gap-5 flex-wrap mb-6">
            <Link href="/services">
              <Button name="Se priser" />
            </Link>
            <Link
              href="/kontakt"
              className="group inline-flex items-center gap-2 text-sm text-[#d6dcdc] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00a8e8]"
            >
              Skriv til mig
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>

          <motion.p variants={item} className="flex items-start gap-2 text-[12px] text-[#7f8c8c] leading-snug">
            <span className="mt-0.5 shrink-0"><CheckIcon /></span>
            Første design i 48 timer – ikke tilfreds, betaler du 0 kr for det.
          </motion.p>
        </motion.div>

        {/* ─────────── Mockup + glas-widgets ─────────── */}
        <div className="relative" style={{ perspective: 1400 }} aria-hidden>
          <motion.div
            style={reduce ? undefined : { rotateY: rotY, rotateX: rotX, scale, y: mockY }}
            initial={{ opacity: 0, y: 60, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.35, ease }}
            className="relative mx-auto w-full max-w-[480px] [transform-style:preserve-3d]"
          >
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0e1111] shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#121616]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
                <div className="ml-3 flex-1 h-6 rounded-md bg-white/[0.06] flex items-center gap-1.5 px-2.5">
                  <svg width="9" height="9" viewBox="0 0 12 12" fill="none">
                    <rect x="2" y="5" width="8" height="6" rx="1.5" stroke="#3ddc97" strokeWidth="1.3" />
                    <path d="M4 5V3.5a2 2 0 014 0V5" stroke="#3ddc97" strokeWidth="1.3" />
                  </svg>
                  <span className="text-[10px] text-[#8a9696]">dinvirksomhed.dk</span>
                </div>
              </div>
              <MiniSite />
            </div>

            {/* Widgets – kun på store skærme, uden for browser-indholdet */}
            <motion.div
              style={reduce ? undefined : { y: yA, translateZ: 70 }}
              className="absolute -left-10 top-[22%] z-10 hidden lg:block"
            >
              <div className="float-y glass glass-solid rounded-2xl px-4 py-3 flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#00a8e8]/15 border border-[#00a8e8]/30 flex items-center justify-center shrink-0">
                  <CheckIcon />
                </span>
                <div className="whitespace-nowrap">
                  <p className="text-[10px] text-[#8a9696] leading-none mb-1.5">Første udkast</p>
                  <p className="text-[15px] font-medium text-white leading-none">48 timer</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              style={reduce ? undefined : { y: yB, translateZ: 100 }}
              className="absolute -right-8 -top-10 z-10 hidden lg:block"
            >
              <div className="float-y-2 glass glass-solid rounded-2xl p-3.5 w-[190px]">
                <div className="flex items-center justify-between gap-3 mb-1 whitespace-nowrap">
                  <p className="text-[10px] text-[#8a9696]">SEO bygget ind</p>
                  <span className="text-[10px] text-[#3ddc97]">↗</span>
                </div>
                <Sparkline />
              </div>
            </motion.div>

            <motion.div
              style={reduce ? undefined : { y: yD, translateZ: 60 }}
              className="absolute -right-10 -bottom-8 z-10 hidden lg:block"
            >
              <div className="float-y glass glass-solid rounded-2xl px-4 py-3 whitespace-nowrap">
                <p className="text-[10px] text-[#8a9696] mb-1.5">Fast pris</p>
                <p className="text-[17px] font-semibold text-white leading-none">
                  Fra 2.500 <span className="text-[11px] font-normal text-[#8a9696]">kr</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
