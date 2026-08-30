import Link from "next/link";
import AnimatedInView from "../../utils/AnimatedInView";

const CheckIcon = ({ light }) => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path
      d="M1.5 4l2 2 3-3"
      stroke={light ? "#00a8e8" : "#00a8e8"}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Tick = ({ popular }) => (
  <span
    className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-[#1a2a30] border border-[#0a4a60]`}
  >
    <CheckIcon />
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
    features: [
      "3–5 sider",
      "Mobilvenlig",
      "Basic SEO",
      "Kontaktformular",
      "Google Maps",
      "Support: e-mail i 14 dage",
    ],
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
    price: "Fra 14.000",
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
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Priser
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-white !leading-tight !mb-[20px]">
          Fast projektpris - ingen overraskelser
        </AnimatedInView>
        <AnimatedInView as="p" className="text-[13px] text-[#777] max-w-xl !mb-10">
          Priserne er baseret på omfang — antal sider og funktioner. Hvilken teknologi vi
          bygger i (fx WordPress, hvis du selv vil redigere bagefter), afklarer vi ud fra dit
          behov, se noten nedenfor.
        </AnimatedInView>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-start">
          {packages.map(({ name, price, popular, cta, href, timing, features }) => (
            <AnimatedInView
              key={name}
              as="div"
              className={`rounded-2xl p-6 flex flex-col gap-5 bg-[#1c1e1e] border ${
                popular ? "border-[#0af]/40" : "border-[#2a2d2d]"
              }`}
            >
              <div>
                <div className="flex flex-row justify-between">
                  <p className="text-[15px] font-medium text-[#e0e0e0]">{name}</p>
                  {popular && (
                    <span className="inline-block text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#0af]/10 text-[#0af] mb-2">
                      Mest valgt
                    </span>
                  )}
                </div>
                <div className="flex items-baseline gap-1.5 mt-3">
                  <span className="text-[28px] font-medium leading-none text-white">{price}</span>
                  <span className="text-[13px] text-[#5a5a5a]">DKK</span>
                </div>
              </div>
              <hr className="border-[#2a2d2d]" />
              <div className="flex flex-col gap-2.5">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <Tick />
                    <span className="text-[12px] text-[#777]">{f}</span>
                  </div>
                ))}
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-md inline-block w-fit bg-[#1a1d1d] text-[#5a5a5a]">
                {timing}
              </span>
              <Link
                href={href}
                className="w-full py-2.5 rounded-xl text-[13px] font-medium text-center transition-opacity border border-[#2a2d2d] hover:bg-[#00a8e8] text-white hover:opacity-85"
              >
                {cta}
              </Link>
            </AnimatedInView>
          ))}
        </div>

        {/* Én note løser ALLE platform-spørgsmål på én gang: WordPress vs. custom,
            hvad med en anden platform, hvad med noget midt imellem osv. */}
        <AnimatedInView
          as="div"
          className="mt-6 rounded-2xl p-6 sm:p-7 bg-[#161818] border border-dashed border-[#2a2d2d]"
        >
          <p className="text-[11px] uppercase tracking-[0.05em] text-[#0af] mb-4">
            Hvilken teknologi bygger vi i?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <p className="text-[12px] font-medium text-[#e0e0e0] mb-1">Standard</p>
              <p className="text-[12px] text-[#8a8a8a] leading-relaxed">
                Skræddersyet kode. Bedst hastighed og sikkerhed. Dette får du, medmindre du
                vælger andet.
              </p>
            </div>
            <div>
              <p className="text-[12px] font-medium text-[#e0e0e0] mb-1">
                Vil du selv redigere siden?
              </p>
              <p className="text-[12px] text-[#8a8a8a] leading-relaxed">
                Så bygger vi i WordPress i stedet — til samme pris. Skriv det i beskeden.
              </p>
            </div>
            <div>
              <p className="text-[12px] font-medium text-[#e0e0e0] mb-1">
                Andet ønske eller i tvivl?
              </p>
              <p className="text-[12px] text-[#8a8a8a] leading-relaxed">
                Arbejder du med Shopify, Webflow m.fl., eller ved du ikke hvad der passer?
                Skriv det i beskeden — vi rådgiver gratis.
              </p>
            </div>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
};

export default PackagesBlock;