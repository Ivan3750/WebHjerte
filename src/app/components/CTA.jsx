"use client";
import AnimatedInView from "./AnimatedInView";

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
            Se hvor I bliver fundet i søgeresultater og AI-svar
          </h2>
        </AnimatedInView>

        <AnimatedInView>
          <p className="text-[13.5px] text-white/80 leading-[1.85] max-w-[52ch] mx-auto mb-10">
            Vi gennemgår, hvordan I står i dag, og hvor der er mulighed for at
            optimere. I får et tydeligt overblik og en klar anbefaling om,
            hvad næste skridt bør være.
          </p>
        </AnimatedInView>

        <AnimatedInView>
          <button className="group bg-white text-[#0af] text-[13px] font-medium uppercase tracking-[0.05em] rounded-full pl-6 pr-2 py-2 inline-flex items-center gap-3 hover:bg-[#f7f6f6] transition-colors">
            Få en gennemgang
            <span className="w-8 h-8 rounded-full bg-[#0af] text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
              →
            </span>
          </button>
        </AnimatedInView>
      </div>
    </section>
  );
}