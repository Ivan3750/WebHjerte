"use client";

import { useEffect } from "react";
import Link from "next/link";

// Vises i stedet for Next.js' tomme "Application error", hvis noget går galt i browseren.
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="relative overflow-hidden bg-[#1c1e1e]">
      <div className="relative max-w-3xl mx-auto px-5 sm:px-10 py-28 sm:py-40 text-center">
        <h1 className="text-white font-semibold tracking-tight leading-[1.1] text-[clamp(26px,4vw,48px)] mb-5">
          Ups – noget gik galt
        </h1>
        <p className="text-[15px] text-[#b4bdbd] leading-[1.8] max-w-[48ch] mx-auto mb-9">
          Siden kunne ikke vises lige nu. Prøv igen – bruger du en oversættelse i browseren, kan det hjælpe at slå den fra.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button type="button" onClick={() => reset()} className="btn-primary">
            Prøv igen
          </button>
          <Link href="/" className="btn-ghost">
            Til forsiden
          </Link>
        </div>
      </div>
    </section>
  );
}
