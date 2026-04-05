import AnimatedInView from "../AnimatedInView";

const steps = [
  {
    timing: "Dag 1",
    name: "Gratis samtale",
    desc: "Vi snakker om din virksomhed, dine mål og hvad du har brug for. Ingen forpligtelse.",
  },
  {
    timing: "Dag 3–5",
    name: "Design & godkendelse",
    desc: "Du ser et første udkast og godkender retningen - inden vi begynder at bygge.",
  },
  {
    timing: "Dag 6–14",
    name: "Udvikling",
    desc: "Vi bygger din side hurtigt og effektivt. Du får løbende opdateringer undervejs.",
  },
  {
    timing: "Efter lancering",
    name: "Lancering & support",
    desc: "Din side går live - og vi er stadig tilgængelige hvis du har spørgsmål eller ændringer.",
  },
];

const ProcessBlock = () => {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#aaa] mb-3">
          Sådan arbejder vi
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-[#1c1e1e] !leading-tight mb-12">
          Fra ide til livesite inden for 14 dage
        </AnimatedInView>

        <div className="relative">
          <div className="hidden sm:block absolute top-[9px] left-[calc(12.5%+10px)] right-[calc(12.5%+10px)] h-px bg-[#e0e0e0]" />

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 sm:gap-0">
            {steps.map(({ timing, name, desc }, i) => (
              <AnimatedInView
                key={i}
                as="div"
                className="flex flex-col sm:pr-8 relative"
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <div className="w-[18px] h-[18px] rounded-full bg-white border-[1.5px] border-[#00a8e8] flex items-center justify-center shrink-0 z-10">
                    <span className="w-[6px] h-[6px] rounded-full bg-[#00a8e8] block" />
                  </div>
                  <span className="sm:hidden text-[13px] font-medium text-[#1c1e1e]">{name}</span>
                </div>

                <p className="text-[11px] text-[#00a8e8] font-medium mb-1">{timing}</p>
                <p className="hidden sm:block text-[15px] font-medium text-[#1c1e1e] mb-2">{name}</p>
                <p className="text-[12px] text-[#888] leading-relaxed">{desc}</p>
              </AnimatedInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessBlock;
