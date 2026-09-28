"use client";

import AnimatedInView from "../../../components/ui/AnimatedInView";

const points = [
  {
    title: "Hvad er AI SEO?",
    text: "AI SEO er en tilgang til søgemaskineoptimering, hvor vi bruger kunstig intelligens til at analysere mængder af data — hvad folk søger efter, hvordan Google forstår indhold, og hvilke sider der rang højest. I stedet for at gætte, ved vi præcis, hvad der virker i din branche.",
  },
  {
    title: "Hvorfor virker det?",
    text: "Google bliver smartere for hver dag. AI hjælper os med at forstå og følge med i disse ændringer i stedet for at jage efter dem. Vi kan analysere konkurrenter, finde huller i deres strategi og bygge indhold, der overgår dem — alt baseret på data, ikke på mavefornemmelser.",
  },
  {
    title: "Hvordan er det anderledes end almindelig SEO?",
    text: "Traditionel SEO er ofte baseret på generelle råd og trial-and-error. AI SEO gør os i stand til at træffe beslutninger baseret på konkrete mønstre i søgedata. Det betyder hurtigere resultater, færre fejl og en strategi, der tilpasses din specifikke virksomhed og kunder.",
  },
];

export default function WhatIsAiSeoBlock() {
  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Hvad er AI SEO?
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-[#1a1a1a] !leading-tight !mb-14 max-w-[26ch]">
          Når data og ekspertise mødes
        </AnimatedInView>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {points.map((p) => (
            <AnimatedInView
              key={p.title}
              as="div"
              className="rounded-2xl p-7 flex flex-col gap-4 bg-[#f7f6f6] border border-[#e8e8e8]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00a8e8] flex-shrink-0" />
              <h3 className="text-[15px] font-medium text-[#5a5a5a]">{p.title}</h3>
              <p className="text-[13px] text-[#5a5a5a] leading-[1.85]">{p.text}</p>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
