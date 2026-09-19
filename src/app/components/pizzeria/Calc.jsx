"use client";

import { useState } from "react";

export default function Calc() {
  const [revenue, setRevenue] = useState(30000);
  const [feePercent, setFeePercent] = useState(30);

  const monthlyFee = Math.round((revenue * feePercent) / 100);
  const yearlyFee = monthlyFee * 12;
  const monthlyKept = revenue - monthlyFee;

  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Hvad koster det dig?
        </p>
        <h2 className="title text-[#1a1a1a] !leading-tight !mb-4 max-w-[28ch]">
          Wolt og Just Eat tager en stor del af din omsætning
        </h2>
        <p className="text-[14px] text-[#5a5a5a] leading-[1.85] max-w-[60ch] mb-14">
          Hver gang en kunde bestiller gennem en platform, betaler du op til
          30% i gebyr. Prøv selv at regne på, hvor meget det koster din
          pizzeria pr. måned og pr. år.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-4">
          {/* Left: inputs */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-[#f7f6f6] border-2 border-[#f7f6f6] px-5 py-5">
              <label className="text-[13px] font-medium text-[#5a5a5a] block mb-3">
                Din omsætning via bestillingsplatforme (kr/måned)
              </label>
              <input
                type="range"
                min={5000}
                max={100000}
                step={1000}
                value={revenue}
                onChange={(e) => setRevenue(Number(e.target.value))}
                className="w-full accent-[#00a8e8]"
              />
              <p className="text-[18px] font-medium text-[#1a1a1a] mt-2">
                {revenue.toLocaleString("da-DK")} kr
              </p>
            </div>

            <div className="rounded-2xl bg-[#f7f6f6] border-2 border-[#f7f6f6] px-5 py-5">
              <label className="text-[13px] font-medium text-[#5a5a5a] block mb-3">
                Gebyr fra platform
              </label>
              <div className="flex gap-2">
                {[15, 20, 30].map((p) => (
                  <button
                    key={p}
                    type="button"
                    onClick={() => setFeePercent(p)}
                    className={`flex-1 rounded-xl py-2 text-[13px] font-medium border-2 transition-colors ${
                      feePercent === p
                        ? "bg-[#00a8e8] border-[#00a8e8] text-white"
                        : "bg-white border-[#e8e8e8] text-[#5a5a5a] hover:bg-[#f0f0f0]"
                    }`}
                  >
                    {p}%
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: result */}
          <div className="rounded-2xl p-8 sm:p-10 flex flex-col gap-6 bg-[#f7f6f6] border-2 border-[#e8e8e8]">
            <div className="flex items-center gap-3">
              <span
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: "#e0678a", boxShadow: "0 0 14px 2px #e0678a66" }}
              />
              <h3 className="text-[18px] font-medium text-[#5a5a5a]">
                Det koster gebyret dig
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl border border-[#e8e8e8] px-5 py-5">
                <p className="text-[12px] text-[#8a8a8a] mb-1">Pr. måned</p>
                <p className="text-[22px] font-medium text-[#e0678a]">
                  -{monthlyFee.toLocaleString("da-DK")} kr
                </p>
              </div>
              <div className="bg-white rounded-xl border border-[#e8e8e8] px-5 py-5">
                <p className="text-[12px] text-[#8a8a8a] mb-1">Pr. år</p>
                <p className="text-[22px] font-medium text-[#e0678a]">
                  -{yearlyFee.toLocaleString("da-DK")} kr
                </p>
              </div>
            </div>

            <div className="bg-[#00a8e8]/[0.08] rounded-xl border-2 border-[#00a8e8]/30 px-5 py-5">
              <p className="text-[12px] text-[#5a5a5a] mb-1">
                Med din egen hjemmeside beholder du i stedet
              </p>
              <p className="text-[24px] font-medium text-[#00a8e8]">
                {monthlyKept.toLocaleString("da-DK")} kr / måned
              </p>
            </div>

            <p className="text-[13px] text-[#8a8a8a] leading-[1.7]">
              Med din egen bestillingsside betaler du ingen kommission pr.
              ordre — kun en fast, lav pris.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}