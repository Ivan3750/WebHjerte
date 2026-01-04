"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NewYearCampaign = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const end = new Date("2026-01-31T23:59:59");

    const updateTimer = () => {
      const now = new Date();
      const diff = end.getTime() - now.getTime();

      if (diff <= 0) {
        setExpired(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Dage", value: timeLeft.days },
    { label: "Timer", value: timeLeft.hours },
    { label: "Minutter", value: timeLeft.minutes },
    { label: "Sekunder", value: timeLeft.seconds },
  ];

  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20 bg-[#1c1e1e]">

        {/* Headline */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-widest text-[rgb(246_213_92)] mb-4">
            Nytårskampagne 2026
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
            En eksklusiv start på 2026<br />
            for mindre virksomheder
          </h2>
        </div>

        {/* Copy */}
        <p className="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-12">
          For at markere starten på 2026 tilbyder vi en tidsbegrænset
          <span className="text-white font-medium"> professionel rabat </span>
          til mindre virksomheder.
          <br />
          Brug promokoden{" "}
          <span className="text-[#0af] font-semibold">2026</span>{" "}
          og få{" "}
          <span className="text-[rgb(246_213_92)] font-semibold">
            15% rabat
          </span>{" "}
          på dit næste projekt.
        </p>

        {/* Countdown */}
        {!expired ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {timeBlocks.map((block, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl bg-[#0af] p-5 text-center"
              >
                <div className="text-3xl font-semibold text-[#1c1e1e]">
                  {block.value}
                </div>
                <div className="text-xs uppercase tracking-widest text-[#003344]">
                  {block.label}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center text-[rgb(246_213_92)] font-medium text-lg mb-10">
            Kampagnen er afsluttet.
          </div>
        )}

        {/* CTA */}
        {!expired && (
          <div className="text-center">
            <Link href="/kontakt">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center justify-center rounded-full
                bg-[rgb(246_213_92)] px-8 py-4 text-[#1c1e1e]
                font-semibold tracking-wide shadow-xl"
              >
                Kontakt os og brug kode 2026
              </motion.button>
            </Link>
          </div>
        )}

        {/* Footnote */}
        <p className="text-xs text-gray-500 text-center mt-10">
          *Gælder for mindre virksomheder. Kan ikke kombineres med andre tilbud.
          Kampagnen løber til 31. januar 2026.
        </p>
    </section>
  );
};

export default NewYearCampaign;
