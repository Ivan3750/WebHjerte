"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Pizzle from "../../assets/cases/PizzleM.png";
import Hireon from "../../assets/cases/HireonM.png";
import Workout from "../../assets/cases/WorkOutM.png";
import ClubHorse from "../../assets/cases/ClubHorseM.png";
import Monolit from "../../assets/cases/Vzlom.png";
import Ukraine from "../../assets/cases/UkraineW.png";

const projects = [
  {
    titleLine1: "Pizzaria website",
    titleLine2: "til lokal takeaway forretning",
    description: "Lækker hjemmeside til en moderne pizzaforretning",
    image: Pizzle,
  },
  {
    titleLine1: "Hireon",
    titleLine2: "platform til jobopslag og søgning",
    description: "Forbinder jobsøgere og virksomheder hurtigt og nemt",
    image: Hireon,
  },
  {
    titleLine1: "WorkOut",
    titleLine2: "fitness og træningsplaner",
    description: "Et rent og responsivt design til fitnessentusiaster",
    image: Workout,
  },
  {
    titleLine1: "Hesteklub",
    titleLine2: "hjemmeside og klubinformation",
    description: "Elegant hjemmeside for en rideklub",
    image: ClubHorse,
  },
  {
    titleLine1: "Monolit",
    titleLine2: "salg af døre og pengeskabe",
    description: "Robust og stilfuld hjemmeside til sikkerhedsprodukter",
    image: Monolit,
  },
  {
    titleLine1: "Ukraine Hjælpeprojekt",
    titleLine2: "gratis website under krigen",
    description: "Projekt skabt for at støtte Ukraine med information og fakta",
    image: Ukraine,
  },
];

export default function CasesCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((p) => (p + 1) % projects.length),
      6000
    );
    return () => clearInterval(timer);
  }, []);

  const prev = () =>
    setCurrent((p) => (p === 0 ? projects.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p + 1) % projects.length);

  return (
    <section className="relative py-24 px-6 sm:px-12 lg:px-20">
      <h2 className="text-4xl sm:text-5xl font-semibold text-center mb-16 tracking-tight">
        Udvalgte cases
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
              <Image
                src={projects[current].image}
                alt={projects[current].titleLine1}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-6 max-w-xl">
              <span className="inline-flex w-fit items-center rounded-full bg-[rgba(246,213,92,0.15)] px-4 py-1 text-sm font-semibold tracking-wide text-[rgb(246_213_92)]">
                Premium projekt
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                {projects[current].titleLine1}
                <br />
                <span className="text-gray-500 font-normal">
                  {projects[current].titleLine2}
                </span>
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {projects[current].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-between">
          <button
            onClick={prev}
            className="pointer-events-auto ml-2 rounded-full bg-[#0af] p-3 text-white shadow-xl transition hover:scale-110 hover:bg-[#0099dd]"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="pointer-events-auto mr-2 rounded-full bg-[#0af] p-3 text-white shadow-xl transition hover:scale-110 hover:bg-[#0099dd]"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-10 flex justify-center gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === i
                  ? "w-8 bg-[#0af]"
                  : "w-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
