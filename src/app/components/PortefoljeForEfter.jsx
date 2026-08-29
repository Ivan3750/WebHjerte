"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import AnimatedInView from "../utils/AnimatedInView";
import Button from "../utils/Button";

// Skift til jeres rigtige case-billeder:
/*  import CaseFoer from "../assets/old.png";
 */// import CaseEfter from "../../assets/case-efter.jpg";

const punkter = [
  {
    label: "Hastighed",
    tekst: "Siden loader på under 1-2 sekunder – ingen ventetid, ingen tabte besøgende.",
  },
  {
    label: "Mobilvenlig",
    tekst: "Bygget til skærmen folk faktisk bruger – de fleste besøger fra mobilen.",
  },
  {
    label: "SEO-fundament",
    tekst: "Struktur og kode, der gør det muligt at findes på Google – ikke kun se pæn ud.",
  },
  {
    label: "Moderne design",
    tekst: "Et look, der matcher, hvor seriøs din virksomhed er – ikke en skabelon fra 2015.",
  },
];

export default function PortefoljeForEfter() {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50); // % fra venstre
  const [dragging, setDragging] = useState(false);

  const updatePosition = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const handlePointerDown = (e) => {
    setDragging(true);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!dragging) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = () => setDragging(false);

  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <AnimatedInView
            as="p"
            className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4"
          >
            Resultater
          </AnimatedInView>
          <AnimatedInView
            as="h2"
            className="maintitle text-[#1a1a1a] !leading-tight mb-4"
          >
            Sådan ser en professionel hjemmeside ud
          </AnimatedInView>
          <AnimatedInView as="p" className="text-[14px] text-[#7a7a7a] leading-[1.85]">
            Uanset om du starter helt forfra, eller om den nuværende side
            trænger til et løft – målet er det samme: en hjemmeside, der ser
            seriøs ud, virker hurtigt, og gør det let for kunder at vælge dig.
            Træk i midten og se forskellen.
          </AnimatedInView>
        </div>

        {/* Før/efter-slider */}
        <div  className="mb-14">
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#2a2d2d] select-none cursor-ew-resize bg-[#1c1e1e]"
          >
            {/* EFTER (bagved, fuld bredde) */}
            <div className="absolute inset-0">
              {/* <Image src={CaseEfter} alt="Efter redesign" fill className="object-cover" /> */}
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#1c1e1e] to-[#111313]">
                <span className="text-[12px] uppercase tracking-[0.1em] text-[#e0e0e0]">
                  Efter
                </span>
              </div>
              <span className="absolute top-4 right-4 text-[11px] uppercase tracking-[0.1em] text-[#e0e0e0] bg-[#111313]/80 border border-[#2a2d2d] rounded-full px-3 py-1">
                Efter
              </span>
            </div>

            {/* FØR (klippes til position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
{/*               <Image src={CaseFoer} alt="Før redesign" fill className="object-cover" />
 */}              <div
                className="h-full flex items-center justify-center bg-[#e8e7e5]"
                style={{ width: containerRef.current?.getBoundingClientRect().width || "100%" }}
              >
                <span className="text-[12px] uppercase tracking-[0.1em] text-[#7a7a7a]">
                  Før
                </span>
              </div>
              <span className="absolute top-4 left-4 text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] bg-white/80 border border-[#2a2d2d] rounded-full px-3 py-1">
                Før
              </span>
            </div>

            {/* Håndtag */}
            <div
              className="absolute top-0 bottom-0 w-px bg-[#00a8e8]"
              style={{ left: `${position}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#00a8e8] flex items-center justify-center shadow-lg">
                <span className="w-3 h-3 border-l-2 border-r-2 border-white" />
              </div>
            </div>
          </div>
          <p className="text-[12px] text-[#5a5a5a] mt-3">
            Eksempel på et redesign – samme virksomhed, nyt fundament.
          </p>
        </div>
</div>
    </section>
  );
}
