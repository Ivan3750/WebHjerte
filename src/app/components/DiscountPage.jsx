"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

const DiscountPage = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const end = new Date("2025-04-30T23:59:59");

    const updateTimer = () => {
      const now = new Date();
      const diff = end - now;

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

  return (
    <section className="min-h-screen  flex items-center justify-center px-4 py-10">
      <div className="max-w-4xl bg-[] rounded-3xl shadow-2xl p-10 text-center space-y-6 border-4 border-white-30 ">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#00aaff] uppercase tracking-wide">
          15% rabat til nye kunder!
        </h2>

        <p className="text !text-white">
          🌟 Er du ny hos os? Så har vi en gave til dig!  
          Få <span className="font-bold">15% rabat</span> på din første hjemmeside – kun i april måned.
        </p>

        {!expired ? (
          <div className="bg-[#00aaff] !text-white py-6 px-8 rounded-3xl text-xl font-bold shadow-md border-2 border-white-90 ">
            ⏳ Tilbuddet udløber om:{" "}
            {`${timeLeft.days}d ${timeLeft.hours}t ${timeLeft.minutes}m ${timeLeft.seconds}s`}
          </div>
        ) : (
          <div className="bg-red-500 text-white py-6 px-8 rounded-xl text-xl font-bold shadow-md">
            ❌ Tilbuddet er udløbet.
          </div>
        )}

        <p className="text !text-white">
          Vi designer moderne, hurtige og SEO-optimerede hjemmesider – skræddersyet til dig som ny kunde.
        </p>

        {!expired && (
          <Link href="/kontakt" className="flex items-center justify-center w-full">
          <Button
            name=" Kontakt os nu"
            >
           
          </Button>
            </Link>
        )}

        <p className="text-sm text-gray-500">
          *Tilbuddet gælder kun for nye kunder frem til 30. april 2025.
        </p>
      </div>
    </section>
  );
};

export default DiscountPage;
