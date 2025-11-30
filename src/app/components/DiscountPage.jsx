"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const DiscountPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const end = new Date("2025-12-31T23:59:59");

    const updateTimer = () => {
      const now = new Date();
      const diff = end.getTime() - now.getTime();

      if (diff <= 0) {
        setExpired(true);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeBlocks = [
    { label: "Dage", value: timeLeft.days },
    { label: "Timer", value: timeLeft.hours },
    { label: "Min.", value: timeLeft.minutes },
    { label: "Sek.", value: timeLeft.seconds },
  ];

  return (
    <section className="relative isolate overflow-hidden  py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-4xl mx-auto rounded-3xl shadow-2xl border border-white/10 p-8 sm:p-10 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 tracking-tight leading-snug">
          🎉 20% rabat til nye kunder!
        </h2>

        <p className="text-gray-300 text-lg sm:text-xl mb-8">
          Er du ny hos os? Så har vi en gave til dig! <br />
          Få <span className="text-yellow-400 font-bold">20% rabat</span> på din
          første hjemmeside – kun i november måned.
        </p>

        {!expired ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {timeBlocks.map((block, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#00aaff]/90 backdrop-blur-lg text-white py-4 rounded-xl shadow-lg"
              >
                <div className="text-2xl font-bold">{block.value}</div>
                <div className="text-sm font-medium uppercase tracking-wider">
                  {block.label}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-red-600 text-white py-5 px-8 rounded-xl text-xl font-bold shadow-md mb-8">
            ❌ Tilbuddet er udløbet.
          </div>
        )}

        {!expired && (
          <Link href="/kontakt">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-6 py-3 rounded-full bg-[#00aaff] hover:bg-[#0099dd] text-white font-semibold text-lg shadow-xl transition duration-300"
            >
              Kontakt os nu
            </motion.button>
          </Link>
        )}

        <p className="text-xs text-gray-500 mt-6">
          *Tilbuddet gælder kun for nye kunder frem til 31. december 2025.
        </p>
      </div>

      
    </section>
  );
};

export default DiscountPage;
