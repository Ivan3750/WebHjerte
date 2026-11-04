import Link from "next/link";
import SectionHead from "../../../components/ui/SectionHead";
import { FadeUp } from "../../../components/home/fx/Reveal";

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

// Én akse: omfang (antal sider / funktioner). Platform (WordPress/kode) er IKKE et valg her —
// det afklares med ét spørgsmål i formularen, se noten under kortene.
const packages = [
  {
    name: "Landingside",
    price: "2.500",
    popular: false,
    cta: "Kom i gang",
    href: "/kontakt?pakke=landingside",
    timing: "Levering: 5 dage",
    features: [
      "1 side (til kampagner/annoncer)",
      "Mobilvenlig",
      "Kontaktformular",
      "Basic SEO",
      "Support: e-mail i 14 dage",
    ],
  },
  {
    name: "Basis",
    price: "4.500",
    popular: false,
    cta: "Kom i gang",
    href: "/kontakt?pakke=basis",
    timing: "Levering: 10 dage",
    features: ["3–5 sider", "Mobilvenlig", "Basic SEO", "Kontaktformular", "Google Maps", "Support: e-mail i 14 dage"],
  },
  {
    name: "Standard",
    price: "7.500",
    popular: true,
    cta: "Kom i gang",
    href: "/kontakt?pakke=standard",
    timing: "Levering: 18 dage",
    features: [
      "Op til 8 sider",
      "SEO + Analytics (se hvor besøgende kommer fra)",
      "Automatisk gem af beskeder fra kontaktformular",
      "Booking & formularer",
      "30 dages support",
    ],
  },
  {
    name: "Skræddersyet",
    price: "14.000",
    prefix: "Fra",
    popular: false,
    cta: "Kontakt mig",
    href: "/kontakt?pakke=skraeddersyet",
    timing: "Aftales individuelt",
    features: [
      "Ubegrænset antal sider",
      "Webshop (e-commerce)",
      "Kundeportal / dashboard",
      "AI-funktioner (fx chatbot)",
      "Prioriteret support",
    ],
  },
];

const PackagesBlock = () => {
  return (
    <section className="scene bg-[#f7f6f6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-20 sm:pt-28 pb-10">
        <SectionHead
          eyebrow="Priser"
          lines={["Fast projektpris -", "ingen overraskelser"]}
          lead="Priserne er baseret på omfang — antal sider og funktioner. Alle priser er ekskl. moms. Hvilken teknologi vi bygger i (fx WordPress, hvis du selv vil redigere bagefter), afklarer vi ud fra dit behov, se noten nedenfor."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {packages.map(({ name, price, prefix, popular, cta, href, timing, features }, i) => (
            <FadeUp key={name} delay={i * 0.07} className="h-full">
              <div
                className={`relative h-full rounded-3xl p-6 sm:p-7 flex flex-col gap-6 border transition-transform duration-500 hover:-translate-y-1 ${
                  popular ? "bg-[#111313] border-[#00a8e8]/50 text-white" : "bg-white border-[#e8e6e6]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 min-h-[26px]">
                    <p className={`text-[15px] font-semibold ${popular ? "text-white" : "text-[#111313]"}`}>{name}</p>
                    {popular && (
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#00a8e8] text-white">
                        Mest valgt
                      </span>
                    )}
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-4">
                    {prefix && <span className={`text-[13px] ${popular ? "text-[#7f8c8c]" : "text-[#8a8a8a]"}`}>{prefix}</span>}
                    <span className={`text-[clamp(26px,2.4vw,32px)] font-semibold tracking-tight leading-none whitespace-nowrap ${popular ? "text-white" : "text-[#111313]"}`}>
                      {price}
                    </span>
                    <span className={`text-[13px] ${popular ? "text-[#7f8c8c]" : "text-[#8a8a8a]"}`}>DKK</span>
                  </div>
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
                      ? "bg-[#00a8e8] text-white hover:bg-white hover:text-[#0b0d0d]"
                      : "border border-[#dcdada] text-[#111313] hover:bg-[#111313] hover:text-white hover:border-[#111313]"
                  }`}
                >
                  {cta}
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-6 rounded-3xl p-6 sm:p-8 bg-white border border-dashed border-[#d8d6d6]">
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#00a8e8] mb-5">Hvilken teknologi bygger vi i?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-[13px] font-semibold text-[#111313] mb-1.5">Standard</p>
              <p className="text-[13px] text-[#6a6a6a] leading-relaxed">
                Skræddersyet kode. Bedst hastighed og sikkerhed. Dette får du, medmindre du vælger andet.
              </p>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#111313] mb-1.5">Vil du selv redigere siden?</p>
              <p className="text-[13px] text-[#6a6a6a] leading-relaxed">
                Så bygger vi i WordPress i stedet — til samme pris. Skriv det i beskeden.
              </p>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#111313] mb-1.5">Andet ønske eller i tvivl?</p>
              <p className="text-[13px] text-[#6a6a6a] leading-relaxed">
                Arbejder du med Shopify, Webflow m.fl., eller ved du ikke hvad der passer? Skriv det i beskeden — vi rådgiver gratis.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default PackagesBlock;
