"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { FadeUp } from "../../../components/home/fx/Reveal";

const hostOf = (url = "") => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
const isPortrait = (img) => typeof img === "object" && img?.height > img?.width;

/**
 * "Mærk siden": store enheder, der følger med, når man scroller – så en kunde kan se
 * og føle stemningen i et færdigt site i stedet for at læse om det.
 * Computer/mobil kan skiftes, og skærmbilledet panorerer langsomt ned ad siden.
 */
export default function ProjectShowcase({ project }) {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const phone = (project.gallery || []).find(isPortrait);
  const heroSize = typeof project.heroImage === "object" ? project.heroImage : null;
  const [view, setView] = useState("desktop");
  const showPhone = view === "mobil" && phone;

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Billedet vises i sin rigtige form og glider op bag en lidt lavere ramme – så intet beskæres i siderne
  const FRAME = 0.8; // rammen er 80 % af billedets højde
  const pan = useTransform(scrollYProgress, [0.1, 0.9], ["0%", `${-(1 - FRAME) * 100}%`]);
  const phonePan = useTransform(scrollYProgress, [0.1, 0.9], ["0%", `${-(1 - 0.78) * 100}%`]);
  const lift = useTransform(scrollYProgress, [0, 1], [30, -50]);

  // Blød 3D-tilt efter musen
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });
  const rotY = useTransform(sx, (v) => v * 5);
  const rotX = useTransform(sy, (v) => v * -4);
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

  const chips = (project.services || []).slice(0, 3);
  const chipPos = ["left-[-2%] top-[18%]", "right-[-2%] top-[34%]", "left-[6%] bottom-[8%]"];

  return (
    <section ref={ref} className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-40" />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[760px] h-[480px] rounded-full bg-[#00a8e8]/[0.12] blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <FadeUp as="h2" className="text-white font-semibold tracking-tight leading-[1.15] text-[clamp(24px,3.2vw,40px)] max-w-[20ch]">
            Mærk, hvordan siden føles i brug
          </FadeUp>

          {phone && (
            <FadeUp delay={0.1}>
              <div role="tablist" aria-label="Vælg enhed" className="inline-flex rounded-full border border-white/15 p-1 bg-white/[0.04]">
                {[
                  ["desktop", "Computer"],
                  ["mobil", "Mobil"],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    role="tab"
                    aria-selected={view === id}
                    onClick={() => setView(id)}
                    className={`px-5 py-2 rounded-full text-[13px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#00a8e8] ${
                      view === id ? "bg-[#00a8e8] text-white" : "text-[#b4bebe] hover:text-white"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </FadeUp>
          )}
        </div>

        <div onPointerMove={onMove} onPointerLeave={onLeave} className="relative" style={{ perspective: 1600 }}>
          <motion.div
            style={reduce ? undefined : { rotateY: rotY, rotateX: rotX, y: lift }}
            className="relative mx-auto [transform-style:preserve-3d]"
          >
            {!showPhone ? (
              <motion.div
                key="desktop"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto max-w-5xl rounded-2xl overflow-hidden border border-white/15 bg-[#0e1111] shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)]"
              >
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#121616]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]/80" />
                  <div className="ml-3 flex-1 max-w-sm h-6 rounded-md bg-white/[0.06] flex items-center px-3">
                    <span className="text-[11px] text-[#8a9696] truncate">{project.site ? hostOf(project.site) : "din-virksomhed.dk"}</span>
                  </div>
                </div>
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: heroSize ? `${heroSize.width} / ${heroSize.height * FRAME}` : "16 / 8" }}
                >
                  <motion.div style={reduce ? undefined : { y: pan }}>
                    <Image
                      src={project.heroImage}
                      alt={`${project.title} på computer`}
                      {...(heroSize ? {} : { width: 1600, height: 1000 })}
                      sizes="(min-width: 1024px) 1000px, 100vw"
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="mobil"
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative mx-auto w-[min(300px,72vw)] rounded-[38px] border-[7px] border-[#2a2f2f] bg-[#0e1111] overflow-hidden shadow-[0_50px_100px_-40px_rgba(0,0,0,0.9)]"
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 z-10 w-20 h-5 rounded-full bg-[#2a2f2f]" aria-hidden />
                <div className="relative overflow-hidden" style={{ aspectRatio: `${phone.width} / ${phone.height * 0.78}` }}>
                  <motion.div style={reduce ? undefined : { y: phonePan }}>
                    <Image src={phone} alt={`${project.title} på mobil`} sizes="300px" className="w-full h-auto" />
                  </motion.div>
                </div>
              </motion.div>
            )}

            {/* Små glas-chips med det, jeg leverede – de svæver lidt foran skærmen */}
            {chips.map((c, i) => (
              <motion.span
                key={c}
                style={reduce ? undefined : { translateZ: 60 + i * 20 }}
                className={`absolute hidden lg:inline-flex items-center gap-2 glass glass-solid rounded-full px-4 py-2 text-[12.5px] text-white ${i % 2 ? "float-y-2" : "float-y"} ${chipPos[i]}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#3ddc97]" />
                {c}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 sm:mt-24 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { n: "01", title: "Design & brugeroplevelse", text: project.designDescription },
            { n: "02", title: "Fra idé til færdigt produkt", text: project.developmentDescription },
          ].map((b, i) => (
            <FadeUp key={b.n} delay={i * 0.08}>
              <div className="h-full rounded-3xl glass p-7 sm:p-9 flex flex-col gap-3">
                <span className="text-[36px] font-light leading-none tabular-nums text-[#00a8e8]">{b.n}</span>
                <h3 className="text-[20px] sm:text-[22px] font-semibold text-white leading-tight tracking-tight">{b.title}</h3>
                <p className="readable text-[14.5px] text-[#a6b1b1] leading-[1.8]">{b.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
