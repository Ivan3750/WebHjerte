import Link from "next/link";
import SectionHead from "../../../components/ui/SectionHead";
import { FadeUp } from "../../../components/home/fx/Reveal";

// Samme kortdesign som hjemmeside-pakkerne på /services, så priserne ser ens ud på hele sitet
const Tick = ({ dark }) => (
  <span
    className={`w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-[1px] ${
      dark ? "bg-[#00a8e8]/15 border border-[#00a8e8]/40" : "bg-[#00a8e8]/10 border border-[#00a8e8]/30"
    }`}
  >
    <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden>
      <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const packages = [
  {
    name: "Basis",
    price: "3.500",
    popular: false,
    cta: "Kom i gang",
    href: "/kontakt?pakke=ai-seo-basis",
    timing: "Levering: 14 dage",
    features: [
      "Nøgleordsanalyse",
      "Indholdsoptimering (10 elementer)",
      "Teknisk SEO-grundlag",
      "Google Business Profile",
      "30 dages support",
    ],
  },
  {
    name: "Standard",
    price: "6.500",
    popular: true,
    cta: "Kom i gang",
    href: "/kontakt?pakke=ai-seo-standard",
    timing: "Levering: 21 dage",
    features: [
      "Alt i Basis",
      "Konkurrentanalyse",
      "Indholdsoptimering (20 elementer)",
      "Månedlig rapportering",
      "30 dages support",
    ],
  },
  {
    name: "Skræddersyet",
    price: "12.000",
    prefix: "Fra",
    popular: false,
    cta: "Kontakt mig",
    href: "/kontakt?pakke=ai-seo-skraeddersyet",
    timing: "Aftales individuelt",
    features: [
      "Komplet AI SEO-strategi",
      "Løbende indholdsproduktion",
      "Konverteringsoptimering",
      "Prioriteret support",
      "Månedligt strategimøde",
    ],
  },
];

const AiseoPackagesBlock = () => {
  return (
    <section className="scene bg-[#e4f0f7]">
      <div className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead
          eyebrow="Priser"
          lines={["Fast pris -", "ingen overraskelser"]}
          lead="Priserne afhænger af din branche, konkurrencen og hvor meget indhold der skal produceres. Vælg den pakke, der passer til dit behov. Alle priser er inkl. moms."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
          {packages.map(({ name, price, prefix, popular, cta, href, timing, features }, i) => (
            <FadeUp key={name} delay={i * 0.07} className="h-full">
              <div
                className={`relative h-full rounded-3xl p-6 sm:p-7 flex flex-col gap-6 border transition-transform duration-500 hover:-translate-y-1 ${
                  popular ? "bg-[#1c1e1e] border-[#00a8e8]/50 text-white" : "bg-white border-[#e8e6e6]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 min-h-[26px]">
                    <p className={`text-[15px] font-semibold ${popular ? "text-white" : "text-[#1c1e1e]"}`}>{name}</p>
                    {popular && (
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#00a8e8] text-white">
                        Mest valgt
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-4">
                    {prefix && <span className={`text-[13px] ${popular ? "text-[#7f8c8c]" : "text-[#8a8a8a]"}`}>{prefix}</span>}
                    <span className={`text-[clamp(26px,2.4vw,32px)] font-semibold tracking-tight leading-none whitespace-nowrap ${popular ? "text-white" : "text-[#1c1e1e]"}`}>
                      {price}
                    </span>
                    <span className={`text-[13px] ${popular ? "text-[#7f8c8c]" : "text-[#8a8a8a]"}`}>DKK</span>
                  </div>
                  <p className={`mt-1.5 text-[11px] ${popular ? "text-[#7f8c8c]" : "text-[#8a8a8a]"}`}>inkl. moms</p>
                  <span className={`mt-4 inline-block text-[11px] px-2.5 py-1 rounded-md ${popular ? "bg-white/10 text-[#b4bebe]" : "bg-[#f3f2f2] text-[#6a6a6a]"}`}>
                    {timing}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Tick dark={popular} />
                      <span className={`text-[13px] leading-snug ${popular ? "text-[#b4bebe]" : "text-[#5a5a5a]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={href}
                  className={`w-full py-3 rounded-full text-[13px] font-semibold text-center transition-colors ${
                    popular
                      ? "bg-[#00a8e8] text-white hover:bg-white hover:text-[#1c1e1e]"
                      : "border border-[#dcdada] text-[#1c1e1e] hover:bg-[#1c1e1e] hover:text-white hover:border-[#1c1e1e]"
                  }`}
                >
                  {cta}
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiseoPackagesBlock;
