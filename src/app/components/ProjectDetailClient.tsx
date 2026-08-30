"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedInView from "../utils/AnimatedInView";
import type { Project, Stat } from "../data/projects";

const Check = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path
      d="M1.5 4l2 2 3-3"
      stroke="#00a8e8"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function parseStat(value: string) {
  const match = value.match(/^([^0-9+-]*)([+-]?)(\d+(?:[.,]\d+)?)(.*)$/);
  if (!match) return { prefix: "", sign: "", number: null, suffix: value, decimals: 0 };
  const [, prefix, sign, numberStr, suffix] = match;
  return {
    prefix,
    sign,
    number: parseFloat(numberStr.replace(",", ".")),
    suffix,
    decimals: numberStr.includes(".") || numberStr.includes(",") ? 1 : 0,
  };
}

function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);
  const { prefix, sign, number, suffix, decimals } = parseStat(stat.value);

  const startCount = () => {
    if (started || number === null) return;
    setStarted(true);
    const duration = 1100;
    const from = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - from) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(number * eased);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return (
    <motion.div
      onViewportEnter={startCount}
      viewport={{ once: true, margin: "-40px" }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-2xl border border-[#ececea] bg-white p-6 text-center"
    >
      <p className="text-[28px] sm:text-[32px] font-medium text-[#1a1a1a] leading-none">
        {prefix}
        {sign}
        {number !== null ? display.toFixed(decimals) : stat.value}
        {number !== null ? suffix : ""}
      </p>
      <p className="text-[12px] text-[#7a7a7a] mt-3 leading-snug">{stat.label}</p>
    </motion.div>
  );
}

function PhotoFrame({
  src,
  alt,
  label,
  priority,
}: {
  src: Project["heroImage"];
  alt: string;
  label: string;
  priority?: boolean;
}) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-[#2a2d2d] bg-[#1c1e1e] group">
      <Image
        src={src}
        alt={alt}
        width={1400}
        height={900}
        priority={priority}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
      />
      <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.1em] text-[#e0e0e0] bg-[#111313]/80 border border-[#2a2d2d] rounded-full px-3 py-1">
        {label}
      </span>
    </div>
  );
}

function ProcessMarker({ number }: { number: string }) {
  return (
    <motion.span
      initial={{ scale: 0.7, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-9 h-9 rounded-full border border-[#00a8e8]/30 bg-[#f2f6f8] text-[#00a8e8] text-[12px] font-medium flex items-center justify-center flex-shrink-0"
    >
      {number}
    </motion.span>
  );
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="min-h-screen bg-white text-[#1a1a1a]">
      <section className="pt-10 sm:pt-8 px-5 sm:px-10 lg:px-20 max-w-6xl mx-auto">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.1em] text-[#7a7a7a]">
          <Link href="/" className="hover:text-[#00a8e8] transition-colors">
            Forside
          </Link>
          <span>/</span>
          <Link href="/projects" className="hover:text-[#00a8e8] transition-colors">
            Portefølje
          </Link>
          <span>/</span>
          <span className="text-[#1a1a1a]">{project.title}</span>
        </nav>
      </section>

      <section className="px-5 sm:px-10 lg:px-20 max-w-6xl mx-auto pt-2 pb-2">
        <div className="flex flex-wrap gap-2.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] uppercase tracking-[0.08em] px-3.5 py-1.5 rounded-full border border-[#00a8e8]/30 text-[#00a8e8]"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-10 lg:px-20 max-w-6xl mx-auto pb-10">
        <AnimatedInView as="h1" className="maintitle text-[#1a1a1a] !leading-tight">
          {project.title}
          <br />
          <span className="text-[#7a7a7a] font-normal">{project.subtitle}</span>
        </AnimatedInView>
      </section>

      <section className="px-5 sm:px-10 lg:px-20 max-w-6xl mx-auto pb-16">
        <AnimatedInView as="div">
          <PhotoFrame
            src={project.heroImage}
            alt={project.title}
            label={project.client}
            priority
          />
        </AnimatedInView>
      </section>

      <section className="px-5 sm:px-10 lg:px-20 max-w-6xl mx-auto pb-20">
        <div className="rounded-2xl border border-[#ececea] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#ececea]">
          <div className="p-6 sm:p-7">
            <p className="text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-2">
              Kunde
            </p>
            <p className="text-[14px] font-medium text-[#1a1a1a]">
              {project.client} — {project.location}
            </p>
          </div>

          <div className="p-6 sm:p-7">
            <p className="text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-3">
              Services
            </p>
            <div className="flex flex-col gap-2">
              {project.services.map((service) => (
                <div key={service} className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-[#f2f6f8] border border-[#00a8e8]/30">
                    <Check />
                  </span>
                  <span className="text-[13px] text-[#5a5a5a]">{service}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 sm:p-7">
            <p className="text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-3">
              Teknologier
            </p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[12px] px-3 py-1 rounded-full bg-[#f5f4f2] text-[#5a5a5a]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-10 lg:px-20 max-w-6xl mx-auto pb-20">
        <AnimatedInView
          as="p"
          className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4"
        >
          Om projektet
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-[#1a1a1a] !leading-tight mb-6 max-w-2xl">
          {project.client}: udfordringen bag projektet
        </AnimatedInView>
        <div className="max-w-3xl space-y-5">
          <AnimatedInView as="p" className="text-[14px] text-[#5a5a5a] leading-[1.85]">
            {project.overview}
          </AnimatedInView>
          <AnimatedInView as="p" className="text-[14px] text-[#5a5a5a] leading-[1.85]">
            {project.overviewExtra}
          </AnimatedInView>
        </div>
      </section>

      <section className="px-5 sm:px-10 lg:px-20 max-w-6xl mx-auto pb-16">
        <div className="relative pl-14 sm:pl-16">
          <div className="absolute left-[17px] sm:left-[19px] top-2 bottom-2 w-px bg-[#ececea]" />

          <div className="relative mb-16">
            <div className="absolute -left-14 sm:-left-16 top-0">
              <ProcessMarker number="01" />
            </div>
            <AnimatedInView
              as="p"
              className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3"
            >
              UX/UI Design
            </AnimatedInView>
            <AnimatedInView as="h3" className="text-[22px] sm:text-[26px] text-[#1a1a1a] leading-tight mb-4">
              Design &amp; brugeroplevelse
            </AnimatedInView>
            <AnimatedInView as="p" className="text-[14px] text-[#5a5a5a] leading-[1.85] max-w-2xl">
              {project.designDescription}
            </AnimatedInView>
          </div>

          <div className="relative">
            <div className="absolute -left-14 sm:-left-16 top-0">
              <ProcessMarker number="02" />
            </div>
            <AnimatedInView
              as="p"
              className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3"
            >
              Udvikling
            </AnimatedInView>
            <AnimatedInView as="h3" className="text-[22px] sm:text-[26px] text-[#1a1a1a] leading-tight mb-4">
              Fra idé til færdigt produkt
            </AnimatedInView>
            <AnimatedInView as="p" className="text-[14px] text-[#5a5a5a] leading-[1.85] max-w-2xl mb-6">
              {project.developmentDescription}
            </AnimatedInView>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-[12px] px-3.5 py-1.5 rounded-xl bg-[#f5f4f2] text-[#5a5a5a]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 sm:px-10 lg:px-20 max-w-6xl mx-auto pb-20">
        <div className="relative pl-14 sm:pl-16">
          <div className="absolute -left-14 sm:-left-16 top-0">
            <ProcessMarker number="03" />
          </div>
          <AnimatedInView
            as="p"
            className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3"
          >
            Resultater
          </AnimatedInView>
          <AnimatedInView as="h3" className="text-[22px] sm:text-[26px] text-[#1a1a1a] leading-tight mb-8">
            Tallene bag projektet
          </AnimatedInView>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.results.map((stat, i) => (
              <StatCard key={stat.label} stat={stat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {project.gallery.length > 1 && (
        <section className="px-5 sm:px-10 lg:px-20 max-w-6xl mx-auto pb-24">
          <AnimatedInView
            as="p"
            className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-8"
          >
            Flere skærmbilleder
          </AnimatedInView>
        {/*   <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {project.gallery.slice(0, 4).map((image, index) => (
              <AnimatedInView as="div" key={index}>
                <PhotoFrame
                  src={image}
                  alt={`${project.title} skærmbillede ${index + 1}`}
                  label={`0${index + 1}`}
                />
              </AnimatedInView>
            ))}
          </div> */}
        </section>
      )}

      <section className="px-5 sm:px-10 lg:px-20 max-w-6xl mx-auto pb-24">
        <AnimatedInView
          as="div"
          className="relative overflow-hidden rounded-2xl border border-[#2a2d2d] bg-[#111313] p-10 sm:p-14 text-center"
        >
          <motion.div
            animate={{ opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[420px] h-[420px] rounded-full bg-[#00a8e8] blur-[110px]"
          />
          <div className="relative">
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4">
              Dit projekt kunne være det næste
            </p>
            <h2 className="title text-white !leading-tight mb-4 max-w-xl mx-auto">
              Har du et lignende projekt i tankerne?
            </h2>
            <p className="text-[14px] text-[#9a9a9a] max-w-md mx-auto mb-8">
              Vi hjælper dig med at skabe en hjemmeside, der konverterer
              besøgende til kunder.
            </p>
            <Link
              href="/kontakt"
              className="inline-block rounded-xl bg-[#00a8e8] text-white px-7 py-3 text-[13px] font-medium hover:opacity-85 transition-opacity"
            >
              Kontakt os
            </Link>
          </div>
        </AnimatedInView>
      </section>
    </div>
  );
}
