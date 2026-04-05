import Image from "next/image";
import Link from "next/link";
import AnimatedInView from "../AnimatedInView";

const chips = ["Horsens-baseret", "Direkte kontakt", "Levering inden 14 dage"];

const AboutBlock = () => {
  return (
    <section className="bg-[#f7f6f6] border-t border-b border-[#e8e8e8] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-14 md:gap-16 items-center">

        <AnimatedInView as="div" className="w-full">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#e0e0e0]">
            {/* Erstat med dit rigtige billede: */}
            {/* <Image src="/ivan.jpg" alt="Ivan — WebHjerte" fill className="object-cover object-top" /> */}

            <div className="absolute inset-0 flex items-center justify-center bg-[#d8dcdc]">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <circle cx="40" cy="32" r="18" fill="#c0c4c4" />
                <ellipse cx="40" cy="72" rx="28" ry="18" fill="#c0c4c4" />
              </svg>
            </div>
          </div>
        </AnimatedInView>

        <div className="flex flex-col">
          <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#aaa] mb-4">
            Personen bag
          </AnimatedInView>

          <AnimatedInView as="h2" className="maintitle text-[#1c1e1e] !leading-tight mb-5">
            Jeg hedder Ivan —{" "}
            <span className="text-[#00a8e8]">webudvikleren</span>{" "}
            bag WebHjerte
          </AnimatedInView>

          <AnimatedInView as="p" className="text-[14px] text-[#666] leading-[1.8] mb-7 max-w-lg">
            Jeg arbejder direkte med dig fra første samtale til lancering —
            ingen mellemled, ingen overraskelser. Jeg bygger enkle, hurtige
            hjemmesider til lokale virksomheder i Horsens og Midtjylland, der
            rent faktisk skaffer kunder.
          </AnimatedInView>

          <AnimatedInView as="div" className="flex flex-wrap gap-2 mb-8">
            {chips.map((chip) => (
              <span
                key={chip}
                className="text-[11px] text-[#888] border border-[#e0e0e0] rounded-full px-3 py-1 bg-white"
              >
                {chip}
              </span>
            ))}
          </AnimatedInView>

          <AnimatedInView as="div">
            <Link
              href="/om-os"
              className="text-[13px] text-[#1c1e1e] border-b border-[#1c1e1e] pb-px hover:text-[#00a8e8] hover:border-[#00a8e8] transition-colors inline-block"
            >
              Læs mere om mig →
            </Link>
          </AnimatedInView>
        </div>

      </div>
    </section>
  );
};

export default AboutBlock;
