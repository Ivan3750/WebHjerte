"use client";

import AnimatedInView from "../../../components/ui/AnimatedInView";

const points = [
  {
    title: "Løbende optimering",
    text: "SEO er ikke en engangsopgave. Jeg følger løbende med i dine resultater og justerer strategien, når søgemønstre ændrer sig eller konkurrenterne bevæger sig.",
  },
  {
    title: "Månedlige rapporter",
    text: "Du får tydelige rapporter med konkrete tal — ikke grafer du ikke kan forstå. Du ved altid, hvor du står, og om det investerede giver afkast.",
  },
  {
    title: "Direkte kontakt",
    text: "Ingen supportkø, ingen mellemled. Har du et spørgsmål om dine resultater eller vil du justere strategien, taler du direkte med mig.",
  },
];

export default function AiseoAfterBlock() {
  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Efter lancering
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-[#1a1a1a] !leading-tight !mb-4 max-w-[22ch]">
          Jeg stopper ikke, når siden er optimeret
        </AnimatedInView>
        <AnimatedInView as="p" className="text-[13px] text-[#7a7a7a] leading-[1.85] max-w-[60ch] mb-14">
          SEO er en løbende proces. Jeg følger med, rapporterer og justerer — så
          du ved, at din investering fortsat giver resultater.
        </AnimatedInView>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {points.map((p) => (
            <AnimatedInView
              key={p.title}
              as="div"
              className="rounded-2xl p-7 flex flex-col gap-3 bg-[#f7f6f6] border-2 border-[#f7f6f6]/10"
            >
              <span className="w-2 h-2 rounded-full bg-[#00a8e8] flex-shrink-0" />
              <p className="text-[15px] font-medium text-[#5a5a5a]">{p.title}</p>
              <p className="text-[13px] text-[#7a7a7a] leading-[1.75]">{p.text}</p>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
