"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Hver case får sin egen flade accent-/flade-farve (ingen gradienter)
const SURFACES = [
  { bg: "#f7f6f6", accent: "#00a8e8", ink: "#1c1e1e" },
  { bg: "#e4f0f7", accent: "#0088c4", ink: "#1c1e1e" },
  { bg: "#262a2a", accent: "#00a8e8", ink: "#ffffff", dark: true },
  { bg: "#eceeee", accent: "#1f9d6b", ink: "#1c1e1e" },
];

function Case({ p, i, total }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [desktop, setDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const on = () => setDesktop(mq.matches);
    on();
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  const stack = desktop && !reduce;
  const sf = SURFACES[i % SURFACES.length];
  const flip = i % 2 === 1;

  // li = hele den sticky strækning; progress 0→1 mens næste kort glider over dette
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const last = i === total - 1;
  const scale = useTransform(scrollYProgress, [0, 1], [1, last ? 1 : 0.93]);
  const dim = useTransform(scrollYProgress, [0.35, 1], [0, last ? 0 : 0.55]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-3%", "5%"]);

  const muted = sf.dark ? "#a9b5b5" : "#5a5f5f";
  const line = sf.dark ? "rgba(255,255,255,0.12)" : "rgba(28,30,30,0.12)";

  return (
    <li ref={ref} className="md:pb-[14vh]">
      <motion.article
        style={stack ? { scale, background: sf.bg, top: 88 + i * 12, borderColor: line } : { background: sf.bg, borderColor: line, ...(desktop ? { top: 88 + i * 12 } : {}) }}
        className="md:sticky origin-top rounded-[28px] sm:rounded-[36px] overflow-hidden border"
        aria-labelledby={`case-${p.slug}`}
      >
        <motion.div
          aria-hidden
          style={stack ? { opacity: dim } : { opacity: 0 }}
          className="pointer-events-none absolute inset-0 z-20 bg-[#1c1e1e]"
        />
        <div
          className={`grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 md:gap-12 p-5 sm:p-8 md:p-10 lg:p-12 items-center`}
          style={{ color: sf.ink }}
        >
          {/* Tekst */}
          <div className={`flex flex-col gap-5 ${flip ? "md:order-2" : ""}`}>
            <div className="flex items-center gap-4">
              <span className="text-[clamp(44px,6vw,84px)] leading-none font-light tabular-nums" style={{ color: sf.accent }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="h-px flex-1" style={{ background: line }} />
              <span className="text-[11px] uppercase tracking-[0.16em]" style={{ color: muted }}>
                {p.client}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10.5px] uppercase tracking-[0.1em] rounded-full px-3 py-1.5 border"
                  style={{ borderColor: line, color: muted }}
                >
                  {t}
                </span>
              ))}
            </div>

            <h2 id={`case-${p.slug}`} className="font-semibold tracking-tight leading-[1.08] text-[clamp(26px,3.2vw,42px)]">
              {p.title}
              <span className="block mt-2 text-[clamp(15px,1.5vw,19px)] font-normal leading-snug" style={{ color: sf.accent }}>
                {p.subtitle}
              </span>
            </h2>

            <p className="text-[14px] leading-[1.8] line-clamp-5 md:line-clamp-6 max-w-[52ch]" style={{ color: muted }}>
              {p.overview}
            </p>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 pt-5 border-t" style={{ borderColor: line }}>
              <div>
                <dt className="text-[10.5px] uppercase tracking-[0.14em] mb-1.5" style={{ color: muted }}>
                  Leveret
                </dt>
                <dd className="text-[13px] font-medium leading-snug">{p.services.slice(0, 3).join(" · ")}</dd>
              </div>
              <div>
                <dt className="text-[10.5px] uppercase tracking-[0.14em] mb-1.5" style={{ color: muted }}>
                  Teknologi
                </dt>
                <dd className="text-[13px] font-medium leading-snug">{p.technologies.join(" · ")}</dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Link
                href={`/portefolje/${p.slug}`}
                className="group inline-flex items-center gap-2 text-[13px] font-semibold rounded-full px-6 py-3 transition-colors"
                style={{ background: sf.dark ? "#00a8e8" : "#1c1e1e", color: "#fff" }}
              >
                Se hele casen
                <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </Link>
              {p.site && (
                <a
                  href={p.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-medium underline underline-offset-4 decoration-1 hover:opacity-70 transition-opacity py-2"
                >
                  Besøg live site ↗
                </a>
              )}
            </div>
          </div>

          {/* Billede med parallax */}
          <Link
            href={`/portefolje/${p.slug}`}
            aria-label={`Se casen ${p.title}`}
            className={`group relative block rounded-[22px] overflow-hidden aspect-[16/11] bg-[#1c1e1e] ${flip ? "md:order-1" : ""}`}
          >
            <motion.div style={reduce ? undefined : { y: imgY, scale: 1.12 }} className="absolute inset-0">
              <Image
                src={p.heroImage}
                alt={`${p.title} – ${p.subtitle}`}
                fill
                sizes="(min-width: 1024px) 560px, (min-width: 768px) 46vw, 100vw"
                loading={i < 2 ? "eager" : "lazy"}
                className="object-cover"
              />
            </motion.div>
            {p.site && (
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#1c1e1e]/85 backdrop-blur px-3.5 py-1.5 text-[11px] text-white">
                <span className="relative flex w-2 h-2">
                  <span className="pulse-ring absolute inset-0 rounded-full text-[#3ddc97]" />
                  <span className="relative w-2 h-2 rounded-full bg-[#3ddc97]" />
                </span>
                Live
              </span>
            )}
            <span
              aria-hidden
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white text-[#1c1e1e] flex items-center justify-center text-[18px] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-45deg]"
            >
              →
            </span>
          </Link>
        </div>
      </motion.article>
    </li>
  );
}

export default function PortfolioShowcase({ projects }) {
  return (
    <section className="scene bg-[#1c1e1e]" aria-label="Udvalgte projekter">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-4 pb-20 sm:pb-28">
        <ol className="flex flex-col gap-6 md:gap-0">
          {projects.map((p, i) => (
            <Case key={p.slug} p={p} i={i} total={projects.length} />
          ))}
        </ol>
      </div>
    </section>
  );
}
