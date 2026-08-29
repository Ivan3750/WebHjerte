import AnimatedInView from "../../utils/AnimatedInView";

const points = [
  {
    title: "Support",
    text: "Du er ikke alene, når siden går live. Du har direkte adgang til mig, hvis noget skal rettes eller ændres.",
  },
  {
    title: "Ejerskab",
    text: "Hjemmesiden er din. Ingen bindende abonnementer og ingen lock-in til en platform, du ikke kan forlade.",
  },
  {
    title: "Fremtidige ændringer",
    text: "Din virksomhed udvikler sig - det skal din hjemmeside også kunne. Nye sider, tekster eller funktioner tilføjes løbende, når du har brug for det.",
  },
];

export default function AfterLaunchBlock() {
  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Efter lancering
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-white !leading-tight !mb-4 max-w-[22ch]">
          Vores samarbejde stopper ikke, når siden går live
        </AnimatedInView>
        <AnimatedInView as="p" className="text-[13px] text-[#7a7a7a] leading-[1.85] max-w-[60ch] mb-14">
          Når siden er live, kan du stadig få hjælp til ændringer, opdateringer og nye funktioner, når din virksomhed vokser.
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
