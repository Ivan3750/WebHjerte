import SectionHead from "../ui/SectionHead";
import { FadeUp } from "./fx/Reveal";
import Gantt from "../charts/Gantt";

const phases = [
  { label: "Kontakt & afklaring", from: 0, to: 1, note: "Gratis samtale", tone: 0 },
  { label: "Første design", from: 1, to: 2, note: "Udkast inden 48 timer", tone: 1 },
  { label: "Feedback & justering", from: 2, to: 6, note: "Ret til det er rigtigt", tone: 2 },
  { label: "Udvikling & SEO", from: 3, to: 12, note: "Bygges, optimeres og testes", tone: 0 },
  { label: "Test & launch", from: 12, to: 14, note: "Live", tone: 3 },
];

export default function TimelineChart() {
  return (
    <section className="scene bg-[#e4f0f7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-20 sm:py-28">
        <SectionHead
          eyebrow="Tidsplan"
          lines={["Sådan ser dine", "14 dage ud"]}
          lead="Du ser det første design inden for 48 timer – derefter bygger vi videre, indtil din side går live. Hver fase er aftalt på forhånd."
          maxW="max-w-[16ch]"
        />
        <FadeUp>
          <div className="rounded-3xl bg-white border border-[#d6e6ee] p-5 sm:p-9">
            <Gantt
              phases={phases}
              days={14}
              theme="light"
              marks={[{ label: "48 timer", at: 2 }]}
              caption="Typisk forløb for en hjemmeside (illustration) – den konkrete tidsplan aftales, før vi går i gang. Den grønne streg markerer 48 timer."
            />
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
