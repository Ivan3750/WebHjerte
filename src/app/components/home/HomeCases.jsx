"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { projects } from "../../data/projects";
import { FadeUp, RevealLines } from "./fx/Reveal";

function Card({ p, i }) {
  return (
    <Link
      href={`/portefolje/${p.slug}`}
      className="group relative block w-[78vw] sm:w-[52vw] md:w-[40vw] lg:w-[34vw] max-w-[560px] shrink-0 snap-center"
    >
      <div className="relative aspect-[16/11] rounded-3xl overflow-hidden border border-white/10 bg-[#262a2a] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
        <Image
          src={p.heroImage}
          alt={p.title}
          fill
          sizes="(min-width: 1024px) 34vw, (min-width: 768px) 40vw, 78vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
        />
        <span className="absolute top-4 left-4 glass text-[10px] uppercase tracking-[0.14em] text-white rounded-full px-3 py-1">
          Case {String(i + 1).padStart(2, "0")}
        </span>
        <span className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white text-[#1c1e1e] flex items-center justify-center translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          ↗
        </span>
      </div>
      <div className="pt-4 px-1">
        <h3 className="text-[17px] font-semibold text-white leading-tight">{p.title}</h3>
        <p className="text-[13px] text-[#93a0a0] mt-1 leading-snug">{p.subtitle}</p>
      </div>
    </Link>
  );
}

export default function HomeCases() {
  const reduce = useReducedMotion();
  const sceneRef = useRef(null);
  const trackRef = useRef(null);
  const [dist, setDist] = useState(0);
  const [desktop, setDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const measure = () => {
      setDesktop(mq.matches);
      if (trackRef.current) {
        setDist(Math.max(0, trackRef.current.scrollWidth - window.innerWidth));
      }
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const pinned = desktop && !reduce && dist > 0;

  const { scrollYProgress } = useScroll({ target: sceneRef, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -dist]);
  const bar = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sceneRef}
      className="scene relative bg-[#1c1e1e]"
      style={pinned ? { height: `calc(100dvh - 68px + ${dist}px)` } : undefined}
    >
      <div
        className={pinned ? "sticky top-[68px] h-[calc(100dvh-68px)] flex flex-col justify-center overflow-hidden" : "py-16 sm:py-24"}
      >
        <div className="w-full max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 mb-8 sm:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div>
            <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#7a8787] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#00a8e8]" />
              Portefølje
            </FadeUp>
            <RevealLines
              lines={["Udvalgte cases"]}
              className="text-white font-semibold tracking-tight leading-[1.08] text-[clamp(26px,3.6vw,46px)] mb-3"
            />
            <FadeUp as="p" delay={0.15} className="text-[14px] text-[#93a0a0] leading-[1.8] max-w-xl">
              Fra lokale forretninger til større platforme – her er et udpluk af hjemmesider, vi har bygget fra bunden.
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <Link
              href="/portefolje"
              className="group inline-flex items-center gap-2 text-sm text-white border border-white/15 rounded-full px-5 py-2.5 hover:border-[#00a8e8] hover:text-[#00a8e8]"
            >
              Se alle projekter
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </FadeUp>
        </div>

        {/* Spor: scroll-drevet på desktop, swipe + snap på mobil */}
        <div className={pinned ? "overflow-visible" : "overflow-x-auto no-scrollbar snap-x snap-mandatory"}>
          <motion.div
            ref={trackRef}
            style={pinned ? { x } : undefined}
            className="flex gap-5 sm:gap-7 px-5 sm:px-10 lg:px-16 w-max"
          >
            {projects.map((p, i) => (
              <Card key={p.slug} p={p} i={i} />
            ))}
            <div className="w-[8vw] shrink-0" aria-hidden />
          </motion.div>
        </div>

        {pinned && (
          <div className="max-w-7xl w-full mx-auto px-5 sm:px-10 lg:px-16 mt-8">
            <div className="h-px bg-white/10 relative overflow-hidden rounded-full">
              <motion.div style={{ scaleX: bar }} className="absolute inset-0 origin-left bg-[#00a8e8]" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
