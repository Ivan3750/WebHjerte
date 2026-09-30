"use client";

import AnimatedInView from "../../../components/ui/AnimatedInView";

const steps = [
  {
    n: "01",
    color: "#00a8e8",
    title: "Analyse",
    text: "Jeg bruger AI til at analysere din branche, konkurrenter og de søgeord, dine kunder faktisk bruger. Jeg finder ud af, hvor du står lige nu, og hvor der er potentiale.",
  },
  {
    n: "02",
    color: "#f0a63a",
    title: "Strategi",
    text: "Baseret på analysen laver vi en klar plan: hvilke søgeord vi skal efterstræve, hvilket indhold der skal produceres, og hvordan vi teknisk optimerer din hjemmeside.",
  },
  {
    n: "03",
    color: "#8a8ff0",
    title: "Optimering",
    text: "Jeg optimerer dit eksisterende indhold og producerer nyt, der er skrevet til både Google og dine kunder. AI hjælper mig med at finde de rigtige ord og formuleringer.",
  },
  {
    n: "04",
    color: "#3ddc97",
    title: "Måling",
    text: "Du får månedlige rapporter med konkrete tal: din position på søgeord, trafik og hvor mange kunder der kontakter dig. Du ser, om det virker — ikke bare en lovning.",
  },
];

export default function HowItWorksBlock() {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Sådan fungerer det
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-white !leading-tight !mb-14 max-w-[26ch]">
          Fra analyse til resultater i fire trin
        </AnimatedInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {steps.map((s) => (
            <AnimatedInView
              key={s.n}
              as="div"
              className="rounded-2xl p-7 flex flex-col gap-4 bg-[#1c1e1e] border border-[#2a2d2d]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-medium flex-shrink-0"
                  style={{
                    backgroundColor: `${s.color}1a`,
                    color: s.color,
                  }}
                >
                  {s.n}
                </span>
                <h3 className="text-[14.5px] font-medium text-[#e0e0e0]">{s.title}</h3>
              </div>
              <p className="text-[13px] text-[#7a7a7a] leading-[1.75]">{s.text}</p>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}
