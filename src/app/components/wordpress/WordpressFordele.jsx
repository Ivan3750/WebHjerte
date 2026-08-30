"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Smile, MousePointer2, Rocket } from "lucide-react";
import AnimatedInView from "../../utils/AnimatedInView";

// Skift til jeres rigtige billeder:
// import FotoSkaerm from "../assets/wp/skaerm.jpg";
// import FotoLaptop from "../assets/wp/laptop.jpg";
// import FotoMoede from "../assets/wp/moede.jpg";
// import FotoTablet from "../assets/wp/tablet.jpg";

const FloatBadge = ({ children, className, delay = 0 }) => (
  <motion.span
    animate={{ y: [0, -6, 0] }}
    transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute w-11 h-11 rounded-full bg-[#111313] border border-[#2a2d2d] flex items-center justify-center text-[#00a8e8] shadow-lg ${className}`}
  >
    {children}
  </motion.span>
);

const Foto = ({ label, className }) => (
  <div
    className={`rounded-2xl overflow-hidden bg-gradient-to-br from-[#e8e7e5] to-[#d8d7d5] flex items-center justify-center ${className}`}
  >
    <span className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a]">
      {label}
    </span>
  </div>
);

export default function WordpressFordele() {
  const rowRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });
  const yUp = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yDown = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  const rowRef2 = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: rowRef2,
    offset: ["start end", "end start"],
  });
  const yUp2 = useTransform(scrollYProgress2, [0, 1], [40, -40]);
  const yDown2 = useTransform(scrollYProgress2, [0, 1], [-40, 40]);

  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView
          as="p"
          className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4"
        >
          Godt at vide
        </AnimatedInView>
        <AnimatedInView
          as="h2"
          className="maintitle text-[#1a1a1a] !leading-tight mb-16 max-w-2xl"
        >
          Det du bør vide om en WordPress-hjemmeside
        </AnimatedInView>

        <div
          ref={rowRef}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-24"
        >
          <AnimatedInView as="div">
            <h3 className="text-[24px] sm:text-[28px] text-[#1a1a1a] leading-tight mb-4">
              Din hjemmeside – din ejendom
            </h3>
            <p className="text-[14px] text-[#7a7a7a] leading-[1.85] mb-4">
              Modsat lukkede side-byggere ejer du selv koden, indholdet og
              databasen. Siden kan til enhver tid flyttes til en anden
              hosting, uden at du er bundet til os eller en bestemt platform.
            </p>
            <p className="text-[14px] text-[#7a7a7a] leading-[1.85]">
              Ingen skjulte månedlige platformsgebyrer – kun den hosting, du
              selv vælger.
            </p>
          </AnimatedInView>

          <div className="relative h-[420px]">
            <motion.div style={{ y: yUp }} className="absolute top-0 left-0 w-[62%]">
              <Foto label="Foto: skærmarbejde" className="aspect-[4/5]" />
              <FloatBadge className="-bottom-5 -right-5" delay={0}>
                <Smile size={18} />
              </FloatBadge>
            </motion.div>
            <motion.div
              style={{ y: yDown }}
              className="absolute bottom-0 right-0 w-[55%]"
            >
              <Foto label="Foto: bærbar" className="aspect-[5/4]" />
            </motion.div>
          </div>
        </div>

        <div
          ref={rowRef2}
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
        >
          <div className="relative h-[420px] order-2 md:order-1">
            <motion.div
              style={{ y: yDown2 }}
              className="absolute top-0 left-0 w-[68%]"
            >
              <Foto label="Foto: samarbejde" className="aspect-[4/5]" />
              <FloatBadge className="-top-5 -left-5" delay={0.6}>
                <MousePointer2 size={18} />
              </FloatBadge>
            </motion.div>
            <motion.div
              style={{ y: yUp2 }}
              className="absolute bottom-0 right-0 w-[48%]"
            >
              <Foto label="Foto: noter" className="aspect-square" />
              <FloatBadge className="-bottom-5 -left-5" delay={1.2}>
                <Rocket size={18} />
              </FloatBadge>
            </motion.div>
          </div>

          <AnimatedInView as="div" className="order-1 md:order-2">
            <h3 className="text-[24px] sm:text-[28px] text-[#1a1a1a] leading-tight mb-4">
              Åben kildekode, uendelige muligheder
            </h3>
            <p className="text-[14px] text-[#7a7a7a] leading-[1.85] mb-4">
              WordPress driver godt og vel 4 ud af 10 hjemmesider på nettet. Det
              betyder et enormt økosystem af plugins, som gør det muligt at
              tilføje webshop, booking eller medlemsområde senere hen – uden
              at siden skal bygges om fra bunden.
            </p>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#f2f6f8] px-4 py-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-[#00a8e8]" />
              <span className="text-[12px] text-[#5a5a5a]">
                Bruges af millioner af virksomheder verden over
              </span>
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
}
