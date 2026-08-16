import AnimatedInView from "./AnimatedInView";

const steps = [
  {
    n: "01",
    color: "#00a8e8",
    title: "Kontakt",
    text: "Du booker en gratis, uforpligtende samtale — vi finder ud af om det giver mening at arbejde sammen.",
  },
  {
    n: "02",
    color: "#3ddc97",
    title: "Afklaring",
    text: "Vi lægger rammerne sammen: hvilke sider du har brug for, tidsplan og en fast pris — inden vi går i gang.",
  },
  {
    n: "03",
    color: "#f0a63a",
    title: "Design",
    text: "Jeg bygger det første udkast, tilpasset dit brand og din målgruppe — du ser noget konkret hurtigt.",
  },
  {
    n: "04",
    color: "#8a8ff0",
    title: "Feedback",
    text: "Vi justerer sammen indtil det føles rigtigt. Ændringer undervejs er inkluderet, ikke en ekstraregning.",
  },
  {
    n: "05",
    color: "#e0678a",
    title: "Launch",
    text: "Siden går live, og jeg er stadig tilgængelig bagefter — hvis der er spørgsmål eller justeringer.",
  },
];

export default function ProcessBlock() {
  return (
    <section className="bg-[#f7f6f6]">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a] mb-3">
          Sådan foregår det
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-[#111313] !leading-tight !mb-16 max-w-[24ch]">
          Fra første besked til live hjemmeside
        </AnimatedInView>

        <div className="border-t border-[#e0dede]">
          {steps.map((s) => (
            <AnimatedInView key={s.n} as="div" className="group">
              <div className="flex items-start sm:items-center gap-6 sm:gap-12 py-9 sm:py-11 border-b border-[#e0dede] transition-colors duration-300">
                <span
                  className="text-[44px] sm:text-[64px] font-light leading-none tabular-nums flex-shrink-0 w-[70px] sm:w-[96px] transition-colors duration-300"
                  style={{ color: "#d8d6d6" }}
                >
                  {s.n}
                </span>

                <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-10">
                  <p className="text-[17px] sm:text-[19px] font-medium text-[#111313] sm:w-[180px] flex-shrink-0 flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: s.color }}
                    />
                    {s.title}
                  </p>
                  <p className="text-[14px] sm:text-[15px] text-[#6a6a6a] leading-[1.7] max-w-lg">
                    {s.text}
                  </p>
                </div>
              </div>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}