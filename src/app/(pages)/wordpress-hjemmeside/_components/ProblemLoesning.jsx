"use client";
import AnimatedInView from "../../../components/ui/AnimatedInView";

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
        <div className="max-w-2xl mb-12 sm:mb-16">
          <AnimatedInView
            as="h2"
            className="text-[#1c1e1e] font-semibold tracking-tight !leading-[1.1] text-[clamp(24px,3.3vw,40px)] mb-4"
          >
            Genkender du en af disse?
          </AnimatedInView>
          <AnimatedInView as="p" className="text-[15px] text-[#6a6a6a] leading-[1.85]">
            Det er de tre ting, jeg oftest hører fra virksomheder, der kontakter mig – og sådan løser jeg dem.
          </AnimatedInView>
        </div>

        <div className="flex flex-col gap-5 sm:gap-6">
          {par.map((p, i) => (
            <AnimatedInView
              key={i}
              as="div"
              className="grid md:grid-cols-[1fr_auto_1fr] items-stretch gap-3 md:gap-5"
            >
              <div className="rounded-3xl bg-white border border-[#e8e6e6] p-6 sm:p-8 flex gap-4">
                <span
                  aria-hidden
                  className="mt-0.5 w-8 h-8 shrink-0 rounded-full border border-[#dcdada] flex items-center justify-center text-[#8a8a8a] text-[15px]"
                >
                  ×
                </span>
                <div>
                  <h3 className="text-[17px] sm:text-[18px] text-[#1c1e1e] font-semibold leading-snug mb-2">{p.problem}</h3>
                  <p className="readable text-[14.5px] text-[#6a6a6a] leading-[1.75]">{p.problemTekst}</p>
                </div>
              </div>

              <div aria-hidden className="flex md:flex-col items-center justify-center">
                <span className="relative flex w-11 h-11 rounded-full bg-[#00a8e8] items-center justify-center text-white shadow-[0_10px_30px_-10px_rgba(0,168,232,0.8)]">
                  <span className="pulse-ring absolute inset-0 rounded-full text-[#00a8e8]" />
                  <svg viewBox="0 0 16 16" fill="none" className="relative w-4 h-4 rotate-90 md:rotate-0">
                    <path d="M2.5 8h10.2M8.6 3.9L12.7 8l-4.1 4.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>

              <div className="rounded-3xl bg-[#1c1e1e] border border-[#00a8e8]/40 p-6 sm:p-8 flex gap-4 shadow-[0_24px_50px_-30px_rgba(0,100,150,0.6)]">
                <span
                  aria-hidden
                  className="mt-0.5 w-8 h-8 shrink-0 rounded-full bg-[#00a8e8] flex items-center justify-center text-white"
                >
                  <svg width="13" height="13" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6.4l2.3 2.3 4.7-5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-[17px] sm:text-[18px] text-white font-semibold leading-snug mb-2">{p.loesning}</h3>
                  <p className="readable text-[14.5px] text-[#b4bdbd] leading-[1.75]">{p.loesningTekst}</p>
                </div>
              </div>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
