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

        <ol className="border-t border-[#e8e6e6]">
          {steps.map((s, i) => (
            <li key={s.n}>
              <FadeUp delay={i * 0.04}>
                <div className="group grid grid-cols-[56px_1fr] sm:grid-cols-[110px_220px_1fr] items-baseline gap-x-4 sm:gap-x-8 gap-y-2 py-7 sm:py-9 border-b border-[#e8e6e6] transition-colors hover:bg-[#f7f6f6] px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-xl">
                  <span className="text-[34px] sm:text-[54px] font-light leading-none tabular-nums text-[#d6d4d4] transition-colors duration-300 group-hover:text-[#00a8e8]">
                    {s.n}
                  </span>
                  <p className="text-[17px] sm:text-[19px] font-semibold text-[#1c1e1e] flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: s.color }} />
                    {s.title}
                  </p>
                  <p className="col-start-2 sm:col-start-auto text-[14px] sm:text-[15px] text-[#6a6a6a] leading-[1.7] max-w-xl">
                    {s.text}
                  </p>
                </div>
              </FadeUp>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
