import SectionHead from "../../../components/ui/SectionHead";
import { FadeUp } from "../../../components/home/fx/Reveal";
import HBars from "../../../components/charts/HBars";

const delivery = [
  { label: "Landingside", value: 2, display: "2" },
  { label: "Basis", value: 5, display: "5" },
  { label: "Standard", value: 10, display: "10" },
  { label: "Skræddersyet", value: 0, display: "Aftales" },
];

const price = [
  { label: "Landingside", value: 2500, display: "2.500" },
  { label: "Basis", value: 4500, display: "4.500" },
  { label: "Standard", value: 7500, display: "7.500" },
  { label: "Skræddersyet", value: 14000, display: "Fra 14.000" },
];

const changes = [
  { label: "Landingside", value: 14, display: "14" },
  { label: "Basis", value: 14, display: "14" },
  { label: "Standard", value: 30, display: "30" },
  { label: "Skræddersyet", value: 0, display: "Efter aftale" },
];

const charts = [
  { title: "Levering", unit: "dage", data: delivery, max: 14, caption: "Typisk leveringstid pr. pakke." },
  { title: "Pris", unit: "", data: price, max: 14000, caption: "Priser i DKK, ekskl. moms." },
  { title: "Ændringer på sitet", unit: "dage", data: changes, max: 30, caption: "Inkluderet i supportperioden." },
];

export default function PriceTimeCharts() {
  return (
    <section className="scene bg-[#e4f0f7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pb-20 sm:pb-28">
        <SectionHead
          eyebrow="Overblik"
          lines={["Pris, tid og ændringer", "side om side"]}
          lead="Sammenlign pakkerne på de tre ting, de fleste spørger om: hvad det koster, hvor hurtigt det er klar, og hvor længe du kan få ændringer på sitet."
          className="mb-10 sm:mb-12"
          maxW="max-w-[22ch]"
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {charts.map((c, i) => (
            <FadeUp key={c.title} delay={i * 0.08}>
              <div className="h-full rounded-3xl bg-white border border-[#d6e6ee] p-6 sm:p-7 flex flex-col gap-6">
                <p className="text-[15px] font-semibold text-[#1c1e1e]">{c.title}</p>
                <HBars items={c.data} max={c.max} unit={c.unit} theme="light" caption={c.caption} />
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
