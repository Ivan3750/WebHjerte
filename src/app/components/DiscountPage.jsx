"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";
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
    const end = new Date("2025-05-31T23:59:59");

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
    { label: "Dag", value: timeLeft.days },
    { label: "Tim", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sek", value: timeLeft.seconds },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl bg-[#0e0e0e] rounded-3xl shadow-2xl p-5 md:p-10 text-center space-y-8 border-4 border-white/10 w-full">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#00aaff] uppercase tracking-wide">
          20% rabat til nye kunder!
        </h2>

        <p className="!text-white text">
           Er du ny hos os? Så har vi en gave til dig! <br /> Få {" "}
          <span className="font-bold text-[#F6D55C]">20% rabat</span> på din første hjemmeside
          – kun i maj måned.
        </p>

        {!expired ? (
          <div className="flex justify-center gap-[7px] flex-wrap">
          {timeBlocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-[#00aaff] !text-white px-2 py-2 md:px-3 md:py-3  rounded-2xl shadow-md text-center w-18 sm:w-20 md:w-24 lg:w-28 xl:w-32"
            >
              <div className="text-lg sm:text-xl font-bold">{block.value}</div>
              <div className="text-xs sm:text-sm uppercase">{block.label}</div>
            </motion.div>
          ))}
        </div>
        
        ) : (
          <div className="bg-red-500 text-white py-6 px-8 rounded-xl text-xl font-bold shadow-md">
            ❌ Tilbuddet er udløbet.
          </div>
        )}


        {!expired && (
          <Link
            href="/kontakt"
            className="flex items-center justify-center w-full"
          >
            <Button name="Kontakt os nu" />
          </Link>
        )}

        <p className="text-sm text-gray-400">
          *Tilbuddet gælder kun for nye kunder frem til 31. maj 2025.
        </p>
      </div>
    </section>
  );
};

export default DiscountPage;
