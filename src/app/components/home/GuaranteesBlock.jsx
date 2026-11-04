import CountUp from "./fx/CountUp";
import { FadeUp, RevealLines } from "./fx/Reveal";
import SpotlightCard from "./fx/SpotlightCard";

const guarantees = [
  {
    stat: { to: 48, suffix: " t" },
    title: "Udkast inden for 48 timer",
    text: "Du ser det første design allerede 48 timer efter vores samtale. Intet bygges, før du har godkendt det.",
  },
  {
    stat: { to: 0, suffix: " kr" },
    title: "0 kr, hvis det ikke passer",
    text: "Er du ikke tilfreds med designet, betaler du 0 kr for det. Justeringer undervejs er en del af prisen.",
  },
  {
    stat: { text: "2–10 dage" },
    title: "Live på 2–10 dage",
    text: "Pakkerne leveres typisk på 2–10 dage. Den samlede tid afhænger af, hvor hurtigt du leverer tekster og billeder.",
  },
  {
    stat: { to: 100, suffix: " %" },
    title: "Domæne og kode er dine",
    text: "Domænet og koden tilhører dig fra start. Du er ikke bundet til os eller en bestemt platform.",
  },
];

const GuaranteesBlock = () => {
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#7a8787] mb-4 flex items-center gap-3">
          <span className="w-8 h-px bg-[#00a8e8]" />
          Dine garantier
        </FadeUp>
        <RevealLines
          lines={["Du løber ingen risiko,", "før du har sagt ja"]}
          className="text-white font-semibold tracking-tight leading-[1.1] text-[clamp(24px,3.4vw,42px)] mb-14 sm:mb-20"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {guarantees.map((g, i) => (
            <FadeUp key={g.title} delay={i * 0.09}>
              <SpotlightCard className="h-full rounded-3xl glass">
                <div className="p-6 sm:p-7 flex flex-col gap-5 h-full">
                  <p className="text-[clamp(28px,3vw,40px)] whitespace-nowrap font-semibold tracking-tight text-gradient-blue leading-none">
                    {g.stat.text ?? <CountUp to={g.stat.to} suffix={g.stat.suffix} />}
                  </p>
                  <div className="h-px w-full bg-white/10" />
                  <p className="text-[15px] font-medium text-[#eef2f2]">{g.title}</p>
                  <p className="text-[13px] text-[#8795a0] leading-[1.75]">{g.text}</p>
                </div>
              </SpotlightCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesBlock;
