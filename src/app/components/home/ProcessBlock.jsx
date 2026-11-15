import { FadeUp } from "./fx/Reveal";
import SectionHead from "../ui/SectionHead";

const steps = [
  {
    n: "01",
    color: "#00a8e8",
    title: "Kontakt",
    text: "Vi tager en uforpligtende snak — helt gratis. Du skal ikke beslutte dig for noget endnu, bare fortælle mig om din ide.",
  },
  {
    n: "02",
    color: "#3ddc97",
    title: "Afklaring",
    text: "Sammen lægger vi en plan: hvad du får, hvornår og til hvilken pris. Alt aftales skriftligt, så du ved præcis hvad du betaler for.",
  },
  {
    n: "03",
    color: "#f0a63a",
    title: "Design",
    text: "Jeg går i gang, og du får noget konkret at se hurtigt — ikke bare løfter. Du er med hele vejen, ikke kun til sidst.",
  },
  {
    n: "04",
    color: "#8a8ff0",
    title: "Feedback",
    text: "Ikke tilfreds med noget? Bare sig til. Vi justerer sammen, indtil det er helt rigtigt — uden ekstra regninger undervejs.",
  },
  {
    n: "05",
    color: "#e0678a",
    title: "Launch",
    text: "Din side går live — men samarbejdet stopper ikke der. Jeg er stadig kun en besked væk, hvis du får brug for hjælp.",
  },
];

export default function ProcessBlock() {
  return (
    <section className="scene bg-[#eceeee]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead eyebrow="Sådan foregår det" lines={["Fra første besked", "til live hjemmeside"]} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.05} className="h-full">
              <div className="h-full rounded-3xl bg-white border border-[#e8e6e6] p-6 flex flex-col gap-4">
                <span className="text-[34px] font-light leading-none tabular-nums" style={{ color: s.color }}>
                  {s.n}
                </span>
                <p className="text-[18px] font-semibold text-[#1c1e1e] leading-snug">{s.title}</p>
                <p className="text-[15px] text-[#4a4a4a] leading-[1.7]">{s.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
