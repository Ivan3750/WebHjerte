"use client";
import { useEffect, useState } from "react";
import { FadeUp, RevealLines } from "./fx/Reveal";
import { PrimaryLink } from "../ui/PageHero";
import { BLACK_FRIDAY, isBlackFridayLive } from "../../data/campaign";

export default function BlackFridaySection() {
  const [live, setLive] = useState(isBlackFridayLive());
  useEffect(() => setLive(isBlackFridayLive()), []);
  if (!live) return null;

  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e] border-y border-white/10">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-14 sm:py-20 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-16 items-center">
        <div className="text-[#00a8e8] font-semibold leading-none tracking-tight text-[clamp(72px,12vw,140px)]">
          -{BLACK_FRIDAY.discount}%
        </div>
        <div>
          <p className="text-[13px] font-semibold uppercase tracking-widest text-[#00a8e8] mb-3">Black Friday</p>
          <RevealLines
            lines={[`${BLACK_FRIDAY.discount}% rabat på alle ydelser`]}
            className="text-white font-semibold tracking-tight leading-[1.15] text-[clamp(24px,2.6vw,34px)] mb-4"
          />
          <FadeUp as="p" delay={0.1} className="text-[15px] text-[#b4bdbd] leading-[1.8] max-w-xl mb-7">
            Hjemmesider, webshops, SEO og vedligeholdelse – få {BLACK_FRIDAY.discount}% rabat, hvis du siger ja til og med{" "}
            {BLACK_FRIDAY.endLabel}. Du ser stadig første design på 48 timer og betaler 0 kr, hvis det ikke passer.
          </FadeUp>
          <FadeUp delay={0.18}>
            <PrimaryLink href={BLACK_FRIDAY.href}>Få dit tilbud med rabat</PrimaryLink>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
