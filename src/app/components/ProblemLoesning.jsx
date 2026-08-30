"use client";
import AnimatedInView from "../utils/AnimatedInView";

const par = [
 {
  problem: "Uden hjemmeside er du usynlig, når det tæller",
  problemTekst:
    "Kunden googler, sammenligner og vælger – alt sammen før du overhovedet ved, de var interesserede.",
  loesning: "Til stede, når kunden leder efter dig",
  loesningTekst:
    "En hjemmeside klar på under 3 uger, så du ikke går glip af de kunder, der allerede er klar til at vælge dig.",
},
  {
    problem: "Gammeldags design skader troværdigheden",
    problemTekst:
      "En forældet hjemmeside sender ét signal: at virksomheden bag heller ikke følger med tiden.",
    loesning: "Moderne design, der skaber tillid fra sekund et",
    loesningTekst:
      "Et rent, nutidigt udtryk, der får besøgende til at tænke 'dem kan jeg stole på' – med det samme.",
  },
  {
    problem: "Bureauer er dyre og langsomme",
    problemTekst:
      "Store bureauer betyder projektledere, ventetid og en regning, der ikke matcher en simpel opgave.",
    loesning: "Direkte kontakt med udvikleren, ingen mellemled",
    loesningTekst:
      "Du taler med den, der rent faktisk bygger siden – hurtigere svar, hurtigere beslutninger, hurtigere lancering.",
  },
];

export default function ProblemLoesning() {
  return (
    <section className="bg-[#f7f6f4] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-16">
          <AnimatedInView
            as="p"
            className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4"
          >
            Før og efter
          </AnimatedInView>
          <AnimatedInView
            as="h2"
            className="maintitle text-[#1a1a1a] !leading-tight mb-4"
          >
            Genkender du en af disse?
          </AnimatedInView>
          <AnimatedInView as="p" className="text-[14px] text-[#7a7a7a] leading-[1.85]">
            Uden en hjemmeside – eller med en forældet en – går der værdi tabt
            hver eneste dag. Hold musen over kortet for at se, hvordan vi
            vender det om.
          </AnimatedInView>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {par.map((p, i) => (
            <AnimatedInView key={i} as="div" className="group [perspective:1400px]">
              <div className="relative h-[340px] w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 rounded-2xl border border-[#2a2d2d] bg-[#1c1e1e] p-8 flex flex-col justify-between [backface-visibility:hidden]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a]">
                      Problemet
                    </span>
                    <span className="w-7 h-7 rounded-full border border-[#3a3d3d] flex items-center justify-center text-[#8a8a8a] text-[13px]">
                      ×
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[19px] text-white leading-snug mb-3">
                      {p.problem}
                    </h3>
                    <p className="text-[13px] text-[#9a9a9a] leading-[1.8]">
                      {p.problemTekst}
                    </p>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a]">
                    Hold musen her →
                  </span>
                </div>
                <div className="absolute inset-0 rounded-2xl border border-[#00a8e8]/30 bg-white p-8 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-[0.1em] text-[#00a8e8]">
                      Løsningen
                    </span>
                    <span className="w-7 h-7 rounded-full bg-[#00a8e8] flex items-center justify-center text-white text-[13px]">
                      ✓
                    </span>
                  </div>
                  <div>
                    <h3 className="text-[19px] text-[#1a1a1a] leading-snug mb-3">
                      {p.loesning}
                    </h3>
                    <p className="text-[13px] text-[#5a5a5a] leading-[1.8]">
                      {p.loesningTekst}
                    </p>
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.1em] text-[#7a7a7a]">
                    Sådan gør vi det muligt
                  </span>
                </div>
              </div>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
