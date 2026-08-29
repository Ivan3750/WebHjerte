"use client";
import AnimatedInView from "../utils/AnimatedInView";
import Button from "../utils/Button";
export default function CtaSearchBlock() {
  return (
    <section className="bg-[#0af] px-5 sm:px-10 lg:px-20 py-20">
      <div className=" px-8 sm:px-14 py-16 text-center">
        <AnimatedInView>
          <p className="text-[11px] uppercase tracking-[0.1em] text-white/70 mb-3">
            webhjerte.dk
          </p>
        </AnimatedInView>

        <AnimatedInView>
          <h2 className="title !text-white !leading-tight !mb-6 max-w-[22ch] mx-auto">
            Klar til at få en hjemmeside, der rent faktisk virker?
          </h2>
        </AnimatedInView>

        <AnimatedInView>
          <p className="text-[13.5px] text-white/80 leading-[1.85] max-w-[52ch] mx-auto mb-10">
            Uanset om du mangler en ny hjemmeside, en webshop eller bare vil
            have flere kunder online — så lad os tage en snak. Det er gratis,
            uforpligtende, og du får svar indefor 24 timer.
          </p>
        </AnimatedInView>

        <AnimatedInView>
          <button className="group bg-white text-[#0af] text-[13px] font-medium uppercase tracking-[0.05em] rounded-full pl-6 pr-2 py-2 inline-flex items-center gap-3 hover:bg-[#f7f6f6] transition-colors">
            Lad os komme i gang
            <span className="w-8 h-8 rounded-full bg-[#0af] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </button>
         </AnimatedInView>
      </div>
    </section>
  );
}