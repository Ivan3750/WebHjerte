"use client";
import AnimatedInView from "../../utils/AnimatedInView";
import Button from "../../utils/Button";

const par = [
  {
    problem: "Din nuværende hjemmeside konverterer ikke",
    problemTekst:
      "Besøgende lander på siden, kigger sig omkring – og forsvinder igen uden at tage kontakt.",
    loesning: "En side bygget til at skabe kunder",
    loesningTekst:
      "Tydelige call-to-actions og et flow, der guider besøgende hele vejen fra første klik til henvendelse.",
  },
  {
    problem: "Bureauer koster dyrt for selv små ændringer",
    problemTekst:
      "Hver rettelse går gennem en supportkø, og regningen vokser, selv når opgaven er lille.",
    loesning: "Et system, du selv kan styre",
    loesningTekst:
      "WordPress giver dig friheden til selv at rette tekst og billeder – vi er klar, når opgaven kræver mere.",
  },
  {
    problem: "Du har hverken tid eller lyst til at bygge selv",
    problemTekst:
      "Mellem drift og kunder er der ikke timer tilbage til at lære et byggeværktøj og designe fra bunden.",
    loesning: "Vi bygger den – fra ide til lancering",
    loesningTekst:
      "Design, tekst og teknik klares af os. Du får en professionel hjemmeside uden at bruge din egen tid på den.",
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
            Før vi taler om design og funktioner, lad os tale om det, der
            faktisk holder dig vågen om natten. Hold musen over kortet for at
            se, hvordan vi vender det om.
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
