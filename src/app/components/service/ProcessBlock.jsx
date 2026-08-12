import AnimatedInView from "../AnimatedInView";

const steps = [
  {
    n: "01",
    title: "Kontakt",
    text: "Du booker en gratis, uforpligtende samtale — fortæl mig om din virksomhed og hvad du har brug for.",
  },
  {
    n: "02",
    title: "Afklaring",
    text: "Vi lægger rammerne sammen: sider, funktioner, tidsplan og pris. Ingen overraskelser undervejs.",
  },
  {
    n: "03",
    title: "Design",
    text: "Jeg bygger første udkast af din hjemmeside, tilpasset dit brand og din målgruppe.",
  },
  {
    n: "04",
    title: "Feedback",
    text: "Du gennemgår udkastet, og vi justerer sammen, indtil du er tilfreds.",
  },
  {
    n: "05",
    title: "Launch",
    text: "Siden går live, og du er klar til at tage imod kunder — med support fra mig efter behov.",
  },
];

export default function ProcessBlock() {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Sådan foregår det
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-white !leading-tight !mb-20 max-w-[22ch]">
          Fra første besked til live hjemmeside
        </AnimatedInView>

        <div className="relative flex flex-col">
          {/* continuous vertical line */}
          <span className="absolute left-[19px] sm:left-[27px] top-3 bottom-3 w-px bg-gradient-to-b from-[#2a2d2d] via-[#2a2d2d] to-transparent" />

          {steps.map((s, i) => (
            <AnimatedInView
              key={s.n}
              as="div"
              className={`relative flex gap-6 sm:gap-10 py-8 sm:py-10 ${
                i !== steps.length - 1 ? "border-b border-[#1e2020]" : ""
              }`}
            >
              {/* dot on the line */}
              <div className="relative z-10 flex-shrink-0 flex items-start pt-1">
                <span className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[#111313] border border-[#2a2d2d] flex items-center justify-center">
                  <span className="w-2 h-2 rounded-full bg-[#00a8e8] shadow-[0_0_12px_2px_rgba(0,168,232,0.5)]" />
                </span>
              </div>

              {/* content */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-[auto_1fr] gap-x-8 gap-y-2 items-baseline">
                <span className="hidden sm:block text-[64px] leading-none font-medium text-[#1c1e1e] select-none">
                  {s.n}
                </span>
                <div className="flex flex-col gap-2 max-w-[46ch]">
                  <div className="flex items-center gap-3">
                    <span className="sm:hidden text-[13px] text-[#5a5a5a] tracking-[0.08em]">
                      {s.n}
                    </span>
                    <p className="text-[18px] sm:text-[20px] font-medium text-[#e0e0e0]">
                      {s.title}
                    </p>
                  </div>
                  <p className="text-[13px] text-[#7a7a7a] leading-[1.8]">{s.text}</p>
                </div>
              </div>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}