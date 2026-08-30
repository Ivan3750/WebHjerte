"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../../data/projects";

export default function CasesCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % projects.length),
      12000
    );
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((p) => (p === 0 ? projects.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p + 1) % projects.length);

  return (
    <section className="bg-white px-4 sm:px-10 lg:px-20 py-12 sm:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-8 sm:mb-14">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3 sm:mb-4">
            Portefølje
          </p>
          <h2 className="maintitle text-[#1a1a1a] !leading-tight mb-3 sm:mb-4 text-[26px] sm:text-[34px]">
            Udvalgte cases
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#7a7a7a] leading-[1.7] sm:leading-[1.85]">
            Fra lokale forretninger til større platforme – her er et udpluk af
            hjemmesider, vi har bygget fra bunden.
          </p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="grid md:grid-cols-2 gap-6 sm:gap-10 items-center"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] rounded-xl sm:rounded-2xl overflow-hidden border border-[#2a2d2d] bg-[#1c1e1e]">
                <Image
                  src={projects[current].heroImage}
                  alt={projects[current].title}
                  fill
                  className="object-cover"
                  priority
                />
                <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-[#e0e0e0] bg-[#111313]/80 border border-[#2a2d2d] rounded-full px-2.5 sm:px-3 py-1">
                  Case {String(current + 1).padStart(2, "0")}
                </span>

                {/* Arrows overlaid on image (mobile) */}
                <div className="absolute inset-0 flex items-center justify-between px-2 md:hidden">
                  <button
                    onClick={prev}
                    aria-label="Forrige case"
                    className="w-9 h-9 rounded-full bg-white/90 backdrop-blur border border-[#2a2d2d] flex items-center justify-center text-[#1a1a1a] shadow-sm transition hover:bg-[#00a8e8] hover:border-[#00a8e8] hover:text-white"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Næste case"
                    className="w-9 h-9 rounded-full bg-white/90 backdrop-blur border border-[#2a2d2d] flex items-center justify-center text-[#1a1a1a] shadow-sm transition hover:bg-[#00a8e8] hover:border-[#00a8e8] hover:text-white"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Text */}
              <div className="flex flex-col gap-3 sm:gap-5 max-w-xl">
                <span className="inline-flex w-fit items-center rounded-full border border-[#00a8e8]/30 px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] uppercase tracking-[0.1em] text-[#00a8e8]">
                  Live projekt
                </span>

                <h3 className="text-[22px] sm:text-[26px] md:text-[30px] text-[#1a1a1a] leading-tight">
                  {projects[current].title}
                  <br />
                  <span className="text-[#7a7a7a] text-[15px] sm:text-[18px] md:text-[20px]">
                    {projects[current].subtitle}
                  </span>
                </h3>

                <p className="text-[13px] sm:text-[14px] text-[#5a5a5a] leading-[1.7] sm:leading-[1.85]">
                  {projects[current].overview}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Arrows for desktop/tablet (outside the card) */}
          <div className="pointer-events-none absolute inset-y-0 -inset-x-2 sm:-inset-x-6 hidden md:flex items-center justify-between">
            <button
              onClick={prev}
              aria-label="Forrige case"
              className="pointer-events-auto w-10 h-10 rounded-full bg-white border border-[#2a2d2d] flex items-center justify-center text-[#1a1a1a] shadow-sm transition hover:bg-[#00a8e8] hover:border-[#00a8e8] hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={next}
              aria-label="Næste case"
              className="pointer-events-auto w-10 h-10 rounded-full bg-white border border-[#2a2d2d] flex items-center justify-center text-[#1a1a1a] shadow-sm transition hover:bg-[#00a8e8] hover:border-[#00a8e8] hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-6 sm:mt-10 flex justify-center gap-2 sm:gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Vis case ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === i
                  ? "w-8 bg-[#00a8e8]"
                  : "w-2 bg-[#d8d7d5] hover:bg-[#b8b7b5]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}