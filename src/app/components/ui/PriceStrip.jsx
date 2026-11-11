import Link from "next/link";
import SectionHead from "./SectionHead";
import { FadeUp } from "../home/fx/Reveal";
import { packages } from "../../data/packages";

// Kort prisoverblik på indholdssiderne: kunden ser prisen med det samme, ikke efter en lang guide.
export default function PriceStrip({ title = ["Faste priser –", "ingen overraskelser"] }) {
  return (
    <section className="scene bg-[#e4f0f7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead
          eyebrow="Priser"
          lines={title}
          lead="Du får en fast pris, før vi går i gang. Alle priser er inkl. moms, og første designudkast er klar på 48 timer."
          className="mb-10 sm:mb-12"
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {packages.map(({ name, price, prefix, popular, href, timing, features }, i) => (
            <FadeUp key={name} delay={i * 0.06} className="h-full">
              <Link
                href={href}
                className={`group h-full rounded-3xl p-5 sm:p-6 flex flex-col gap-3 border transition-transform duration-500 hover:-translate-y-1 ${
                  popular ? "bg-[#1c1e1e] border-[#00a8e8]/50 text-white" : "bg-white border-[#e8e6e6] text-[#1c1e1e]"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[14px] font-semibold">{name}</p>
                  {popular && <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#00a8e8] text-white">Mest valgt</span>}
                </div>
                <p className="flex items-baseline gap-1.5">
                  {prefix && <span className={`text-[12px] ${popular ? "text-[#7f8c8c]" : "text-[#8a8a8a]"}`}>{prefix}</span>}
                  <span className="text-[clamp(22px,2.2vw,28px)] font-semibold tracking-tight leading-none">{price}</span>
                  <span className={`text-[12px] ${popular ? "text-[#7f8c8c]" : "text-[#8a8a8a]"}`}>kr</span>
                </p>
                <p className={`text-[12.5px] leading-snug ${popular ? "text-[#b4bebe]" : "text-[#5a5a5a]"}`}>{features[0]}</p>
                <p className={`mt-auto text-[11px] ${popular ? "text-[#7f8c8c]" : "text-[#8a8a8a]"}`}>{timing} · inkl. moms</p>
              </Link>
            </FadeUp>
          ))}
        </div>
        <FadeUp className="mt-6">
          <Link href="/hjemmeside-pris" className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#1c1e1e] border-b border-[#1c1e1e]/30 hover:border-[#00a8e8] hover:text-[#007aab] transition-colors">
            Se alle pakker og beregn din pris →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
