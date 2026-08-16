import Link from "next/link";
import AnimatedInView from "../AnimatedInView";
import Button from "../Button";

const tiers = [
  { name: "Basis", price: "4.500", note: "Til de fleste virksomheder" },
  { name: "Standard", price: "7.500", note: "Mest valgt", popular: true },
  { name: "Skræddersyet", price: "14.000+", note: "Fuld tilpasning" },
];

export default function PriceTeaserBlock() {
  return (
    <section className="bg-[#f7f6f6] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto rounded-2xl border border-[#2a2d2d] bg-[#1c1e1e] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 p-8 sm:p-12 items-center">
          {/* Left: message */}
          <div className="flex flex-col">
            <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4">
              Hvad koster det?
            </AnimatedInView>
            <AnimatedInView as="h2" className="title text-white !leading-tight !mb-4 max-w-[20ch]">
              Fast pris. Ingen overraskelser.
            </AnimatedInView>
            <AnimatedInView as="p" className="text-[13px] text-[#7a7a7a] leading-[1.85] max-w-[48ch] mb-8">
              Du ved præcis, hvad projektet koster, før vi går i gang - ingen
              timeregning og ingen skjulte tillæg. Priserne starter ved 4.500 kr.
            </AnimatedInView>
            <AnimatedInView as="div">
              <Link href="/services">
                <Button name="Se priser & pakker" />
              </Link>
            </AnimatedInView>
          </div>

          {/* Right: price anchors */}
          <AnimatedInView as="div" className="flex sm:flex-row flex-col gap-3 lg:gap-4">
            {tiers.map((t) => (
              <Link
                href="/services"
                key={t.name}
                className={`group relative flex flex-col items-start gap-1 rounded-xl px-5 py-4 border transition-colors min-w-[150px] ${
                  t.popular
                    ? "border-[#0a4a60] bg-[#1a2a30]"
                    : "border-[#2a2d2d] bg-[#171919] hover:border-[#3a3d3d]"
                }`}
              >
                {t.popular && (
                  <span className="absolute -top-2.5 right-4 text-[9px] font-medium px-2 py-0.5 rounded-full bg-[#00a8e8] text-[#111313]">
                    Mest valgt
                  </span>
                )}
                <span className="text-[11px] text-[#5a5a5a]">{t.name}</span>
                <span className="text-[20px] font-medium text-[#e0e0e0] leading-none">
                  {t.price}
                  <span className="text-[11px] text-[#5a5a5a] font-normal ml-1">kr.</span>
                </span>
                <span className="text-[10.5px] text-[#5a5a5a] mt-1">{t.note}</span>
              </Link>
            ))}
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
}
