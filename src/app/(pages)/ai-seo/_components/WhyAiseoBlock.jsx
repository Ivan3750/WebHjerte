"use client";

import AnimatedInView from "../../../components/ui/AnimatedInView";

const reasons = [
  {
    n: "01",
    color: "#00a8e8",
    title: "Data, ikke gæt",
    text: "AI SEO træffer beslutninger baseret på konkrete data om søgemønstrer og konkurrenter — ikke på generelle råd eller trends, der måske ikke gælder for din branche.",
  },
  {
    n: "02",
    color: "#f0a63a",
    title: "Hurtigere resultater",
    text: "I stedet for at bruge måneder på at finde ud af, hvad der virker, kan AI analysere mønstre på timer. Det betynder, at vi kan justere strategien løbende og få resultater hurtigere.",
  },
  {
    n: "03",
    color: "#8a8ff0",
    title: "Konkurrencefordel",
    text: "De fleste lokale virksomheder bruger stadig traditionel SEO eller ingen SEO overhoveded. Med AI SEO får du et forspring, der er svært for konkurrenterne at indhente.",
  },
  {
    n: "04",
    color: "#3ddc97",
    title: "Skalerbar indholdsproduktion",
    text: "AI hjælper os med at producere relevant indhold i et tempo, der ikke ville være muligt manuelt. Det betyder flere sider, flere søgeord og flere muligheder for at blive fundet.",
  },
];

export default function WhyAiseoBlock() {
  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Hvorfor AI SEO?
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-[#1a1a1a] !leading-tight !mb-14 max-w-[26ch]">
          Fordelene ved at kombinere AI med menneskelig ekspertise
        </AnimatedInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {reasons.map((r) => (
            <AnimatedInView
              key={r.n}
              as="div"
              className="rounded-2xl p-7 flex flex-col gap-4 bg-[#f7f6f6] border border-[#e8e8e8]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-medium flex-shrink-0"
                  style={{
                    backgroundColor: `${r.color}1a`,
                    color: r.color,
                  }}
                >
                  {r.n}
                </span>
                <h3 className="text-[14.5px] font-medium text-[#5a5a5a]">{r.title}</h3>
              </div>
              <p className="text-[13px] text-[#5a5a5a] leading-[1.75]">{r.text}</p>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
