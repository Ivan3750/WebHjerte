import SectionHead from "../../../components/ui/SectionHead";
import { FadeUp } from "../../../components/home/fx/Reveal";
import SpotlightCard from "../../../components/home/fx/SpotlightCard";

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
    <section className="scene bg-[#1c1e1e]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-20 sm:pt-28 pb-10">
        <SectionHead
          dark
          eyebrow="Efter lancering"
          lines={["Vores samarbejde stopper", "ikke, når siden går live"]}
          lead="Når siden er live, kan du stadig få hjælp til ændringer, opdateringer og nye funktioner, når din virksomhed vokser."
          maxW="max-w-[24ch]"
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {points.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.08}>
              <SpotlightCard className="h-full rounded-3xl glass">
                <div className="p-7 flex flex-col gap-3 h-full">
                  <span className="w-2 h-2 rounded-full bg-[#00a8e8]" />
                  <p className="text-[16px] font-semibold text-white">{p.title}</p>
                  <p className="text-[13.5px] text-[#8795a0] leading-[1.75]">{p.text}</p>
                </div>
              </SpotlightCard>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
