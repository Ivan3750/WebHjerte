import Donut from "../../../components/charts/Donut";
import HBars from "../../../components/charts/HBars";
import { FadeUp } from "../../../components/home/fx/Reveal";
import CountUp from "../../../components/home/fx/CountUp";
import SectionHead from "../../../components/ui/SectionHead";

const focusOf = (p) => {
  const t = [...p.tags, ...p.services].join(" ").toLowerCase();
  return {
    design: /design|ux|ui|brand/.test(t),
    dev: /udvikling|development|frontend|cms|konfigurator|kalkulator/.test(t),
    seo: /seo/.test(t),
  };
};

/** Alle tal beregnes ud fra projektdata – ingen opdigtede målinger. */
export default function PortfolioStats({ projects }) {
  const techCount = new Map();
  projects.forEach((p) => p.technologies.forEach((t) => techCount.set(t, (techCount.get(t) || 0) + 1)));
  const techs = [...techCount.entries()].sort((a, b) => b[1] - a[1]);
  const topTech = techs.slice(0, 6).map(([label, value]) => ({ label, value, display: String(value) }));

  const f = projects.map(focusOf);
  const segments = [
    { label: "Design", value: f.filter((x) => x.design).length },
    { label: "Udvikling", value: f.filter((x) => x.dev).length },
    { label: "SEO", value: f.filter((x) => x.seo).length },
    { label: "Produkt & platform", value: projects.filter((p) => /katalog|platform|portal|kalkulator|konfigurator/i.test([...p.tags, ...p.services].join(" "))).length },
  ].filter((s) => s.value > 0);

  const services = new Set(projects.flatMap((p) => p.services)).size;
  const kpis = [
    { n: projects.length, label: "projekter vist her" },
    { n: techCount.size, label: "teknologier i brug" },
    { n: services, label: "forskellige ydelser leveret" },
  ];

  return (
    <section className="scene bg-[#e4f0f7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead
          eyebrow="Overblik"
          lines={["Det, vi har bygget –", "i tal"]}
          lead="Tallene er talt direkte ud fra projekterne nedenfor: hvilke teknologier der bruges, og hvad vi typisk leverer."
          maxW="max-w-[20ch]"
          className="mb-10 sm:mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.1fr_1.1fr] gap-4">
          <FadeUp>
            <div className="h-full rounded-3xl bg-white border border-[#d6e6ee] p-6 sm:p-7 grid grid-cols-3 lg:grid-cols-1 gap-4 content-start">
              {kpis.map((k) => (
                <div key={k.label} className="lg:py-4 lg:border-b lg:border-[#e3ecf0] last:border-0">
                  <p className="text-[clamp(32px,4vw,52px)] font-semibold tracking-tight leading-none text-[#1c1e1e]">
                    <CountUp to={k.n} />
                  </p>
                  <p className="text-[12px] text-[#5a5f5f] mt-2 leading-snug">{k.label}</p>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <div className="h-full rounded-3xl bg-white border border-[#d6e6ee] p-6 sm:p-7 flex flex-col gap-6">
              <p className="text-[15px] font-semibold text-[#1c1e1e]">Mest brugte teknologier</p>
              <HBars items={topTech} theme="light" unit="projekter" caption="Antal projekter, hvor teknologien er brugt." />
            </div>
          </FadeUp>

          <FadeUp delay={0.16}>
            <div className="h-full rounded-3xl bg-white border border-[#d6e6ee] p-6 sm:p-7 flex flex-col gap-6">
              <p className="text-[15px] font-semibold text-[#1c1e1e]">Hvad projekterne indeholder</p>
              <Donut segments={segments} theme="light" centerLabel="projekter" centerValue={projects.length} base={projects.length} caption="Et projekt kan høre under flere områder, derfor summerer procenterne over 100." />
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
