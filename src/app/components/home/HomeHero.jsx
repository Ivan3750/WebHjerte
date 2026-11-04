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

const facts = [
  { num: "Fra 2.500 kr", label: "Fast pris" },
  { num: "Ca. 14 dage", label: "Leveringstid" },
  { num: "1 person", label: "Du taler direkte med mig" },
];

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
        className="relative rounded-xl overflow-hidden border border-white/10 p-4 sm:p-5"
        style={{
          background:
            "radial-gradient(120% 120% at 100% 0%, rgba(0,168,232,0.45), transparent 55%), linear-gradient(180deg,#14191a,#101313)",
        }}
      >
        <div className="h-3 w-3/4 rounded bg-white/85 mb-2" />
        <div className="h-3 w-1/2 rounded bg-white/85 mb-4" />
        <div className="h-1.5 w-5/6 rounded bg-white/25 mb-1.5" />
        <div className="h-1.5 w-2/3 rounded bg-white/25 mb-5" />
        <div className="flex gap-2">
          <span className="h-6 w-20 rounded-full bg-[#00a8e8]" />
          <span className="h-6 w-16 rounded-full border border-white/20" />
        </div>
        <div className="absolute inset-0 shimmer opacity-60 pointer-events-none" />
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
      <defs>
        <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#00a8e8" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#00a8e8" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d="M0 48 C 20 46, 28 40, 44 38 S 72 30, 88 24 S 120 14, 160 6 L160 56 L0 56 Z"
        fill="url(#spark-fill)"
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
  const yC = useTransform(scrollYProgress, [0, 1], [0, -240]);
  const yD = useTransform(scrollYProgress, [0, 1], [0, -110]);

  // Tekst glider op og toner ud
  const textY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);

  const rm = (v) => (reduce ? 0 : v);

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="scene relative isolate overflow-hidden bg-[#0b0d0d] min-h-[calc(100dvh-68px)] flex items-center"
    >
      {/* Aurora + grid */}
      <motion.div aria-hidden style={{ scale: glowScale }} className="absolute inset-0 -z-10">
        <div className="aurora-blob w-[520px] h-[520px] bg-[#00a8e8] -top-40 right-[-8%]" />
        <div className="aurora-blob b2 w-[420px] h-[420px] bg-[#2563eb] bottom-[-18%] left-[-6%] opacity-40" />
        <div className="aurora-blob b3 w-[320px] h-[320px] bg-[#3ddc97] top-[30%] left-[38%] opacity-[0.14]" />
      </motion.div>
      <div aria-hidden className="grid-fade absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-40 -z-10 bg-gradient-to-t from-[#0b0d0d] to-transparent"
      />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-12 md:py-14 grid md:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
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
            className="text-white font-semibold tracking-tight text-balance leading-[1.08] text-[clamp(26px,3.1vw,44px)] mb-5"
          >
            Webbureau i Horsens
            <span className="text-gradient-blue block mt-1">
              – hjemmesider med fast pris, live på 14 dage
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-[#93a0a0] text-[14px] sm:text-[15px] leading-[1.8] max-w-lg mb-6"
          >
            WebHjerte er dit lokale webbureau i Horsens. Jeg bygger enkle, hurtige hjemmesider
            til virksomheder i Horsens, Midtjylland og resten af Danmark. Du taler direkte med mig,
            ikke med et mellemled. Jeg bruger AI til at gå hurtigere, så du betaler for resultatet,
            ikke for timer.
          </motion.p>

          <motion.div
            variants={item}
            className="glass inline-flex items-center gap-3 rounded-2xl px-4 py-3 mb-6 w-fit max-w-full"
          >
            <span className="w-8 h-8 rounded-xl bg-[#00a8e8]/15 border border-[#00a8e8]/30 flex items-center justify-center shrink-0">
              <CheckIcon />
            </span>
            <span className="text-[12px] text-[#c0c8c8] leading-snug">
              <span className="text-[#00a8e8] font-medium">Første design i 48 timer.</span>{" "}
              Ikke tilfreds? Du betaler 0 kr for designet.
            </span>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-5 flex-wrap">
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

          <motion.div
            variants={item}
            className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 pt-6 border-t border-white/10"
          >
            {facts.map(({ num, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span className="text-[13px] sm:text-xl font-medium text-white whitespace-nowrap">{num}</span>
                <span className="text-[11px] sm:text-xs text-[#6f7c7c] leading-snug">{label}</span>
              </div>
            ))}
          </motion.div>
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
            <div className="absolute -inset-6 rounded-[2rem] bg-[#00a8e8]/20 blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-[#0e1111] shadow-[0_40px_100px_-30px_rgba(0,168,232,0.45)]">
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

            {/* A – Første udkast */}
            <motion.div
              style={reduce ? undefined : { y: yA, translateZ: 70 }}
              className="absolute -left-3 sm:-left-12 top-[30%] z-10"
            >
              <div className="float-y glass glass-solid rounded-2xl px-4 py-3 flex items-center gap-3 w-[190px]">
                <span className="w-9 h-9 rounded-xl bg-[#00a8e8]/15 border border-[#00a8e8]/30 flex items-center justify-center shrink-0">
                  <CheckIcon />
                </span>
                <div>
                  <p className="text-[10px] text-[#8a9696] leading-none mb-1.5">Første udkast</p>
                  <p className="text-[15px] font-medium text-white leading-none">48 timer</p>
                </div>
              </div>
            </motion.div>

            {/* B – SEO */}
            <motion.div
              style={reduce ? undefined : { y: yB, translateZ: 100 }}
              className="absolute -right-3 sm:-right-10 top-[-9%] z-10 hidden sm:block"
            >
              <div className="float-y-2 glass glass-solid rounded-2xl p-3.5 w-[220px]">
                <div className="flex items-center justify-between gap-3 mb-1 whitespace-nowrap">
                  <p className="text-[10px] text-[#8a9696]">SEO bygget ind</p>
                  <span className="text-[10px] text-[#3ddc97]">↗ fra dag ét</span>
                </div>
                <Sparkline />
              </div>
            </motion.div>

            {/* C – Progress */}
            <motion.div
              style={reduce ? undefined : { y: yC, translateZ: 90 }}
              className="absolute -left-2 sm:-left-12 bottom-[-12%] z-10"
            >
              <div className="float-y-2 glass glass-solid rounded-2xl p-3.5 w-[210px]">
                <div className="flex items-center justify-between mb-2.5">
                  <p className="text-[10px] text-[#8a9696]">Dit projekt</p>
                  <p className="text-[10px] text-[#00a8e8]">Dag 14 · Live</p>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#00a8e8] to-[#3ddc97]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 1.2, duration: 2.6, ease }}
                  />
                </div>
                <div className="flex justify-between mt-2 text-[9px] text-[#6f7c7c]">
                  <span>Design</span>
                  <span>Byg</span>
                  <span>Launch</span>
                </div>
              </div>
            </motion.div>

            {/* D – Pris */}
            <motion.div
              style={reduce ? undefined : { y: yD, translateZ: 60 }}
              className="absolute -right-2 sm:-right-8 bottom-[-4%] z-10"
            >
              <div className="float-y glass glass-solid rounded-2xl px-4 py-3 w-[150px]">
                <p className="text-[10px] text-[#8a9696] mb-1.5">Fast pris</p>
                <p className="text-[17px] font-semibold text-white leading-none">
                  2.500 <span className="text-[11px] font-normal text-[#8a9696]">kr</span>
                </p>
                <p className="text-[9px] text-[#6f7c7c] mt-1.5">ingen skjulte gebyrer</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
