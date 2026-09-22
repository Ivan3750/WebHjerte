import Link from "next/link";
import AnimatedInView from "../../../components/ui/AnimatedInView";

const CheckIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path
      d="M1.5 4l2 2 3-3"
      stroke="#00a8e8"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Tick = () => (
  <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-[#1a2a30] border border-[#0a4a60]">
    <CheckIcon />
  </span>
);

const packages = [
  {
    name: "Bestillingsside",
    price: "4.500",
    monthly: "149",
    popular: false,
    cta: "Kom i gang",
    href: "/kontakt?pakke=bestillingsside",
    timing: "Levering: 10 dage",
    desc: "Til dig, der vil have det basale på plads: en pæn side med menukort og bestilling, uden ekstra marketing-funktioner.",
    features: [
      "Skræddersyet design til din pizzeria",
      "Digitalt menukort (redigér selv)",
      "Online bestilling",
      "MobilePay & kortbetaling",
      "Mobilvenlig",
      "0 kr i kommission pr. ordre",
    ],
  },
  {
    name: "Bestillingsside + Marketing",
    price: "7.500",
    monthly: "199",
    popular: true,
    cta: "Kom i gang",
    href: "/kontakt?pakke=bestillingsside-marketing",
    timing: "Levering: 14 dage",
    desc: "Til dig, der også vil findes på Google og få gengangere. Mest valgt af pizzeriaer, der tager bestillinger seriøst.",
    features: [
      "Alt i Bestillingsside",
      "Lokal SEO (findes på Google i Horsens)",
      "Google Business opsætning",
      "Rabatkoder & gentagne kunder",
      "Statistik over bestillinger",
      "0 kr i kommission pr. ordre",
    ],
  },
];

const savingsRows = [
  { label: "Gebyr hos Wolt/Just Eat", value: "Op til 30% pr. ordre" },
  { label: "Gebyr med egen side", value: "0 kr, altid" },
  { label: "Ekstra pr. måned", value: "149–199 kr, fast" },
  { label: "Break-even", value: "Typisk under 1.000 kr i omsætning" },
];

const PricingBlock = () => {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Priser
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-white !leading-tight !mb-[20px]">
          Fast pris — ingen kommission, nogensinde
        </AnimatedInView>
        <AnimatedInView as="p" className="text-[13px] text-[#777] max-w-xl !mb-10">
          Én engangspris for opsætning, og en lille fast månedlig pris for drift og
          support — uanset hvor mange bestillinger du får. Ingen procent af din omsætning
          går til nogen andre end dig.
        </AnimatedInView>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-stretch">
          {packages.map(({ name, price, monthly, popular, cta, href, timing, desc, features }) => (
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
                  <span className="text-[13px] text-[#5a5a5a]">DKK, engang</span>
                </div>
                <p className="text-[12px] text-[#5a5a5a] mt-1.5">
                  + {monthly} kr/md. drift & support
                </p>
              </div>

              <p className="text-[12.5px] text-[#8a8a8a] leading-relaxed">{desc}</p>

              <hr className="border-[#2a2d2d]" />
              <div className="flex flex-col gap-2.5">
                {features.map((f) => (
                  <div key={f} className="flex items-center gap-2.5">
                    <Tick />
                    <span className="text-[12px] text-[#777]">{f}</span>
                  </div>
                ))}
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-md inline-block w-fit bg-[#1a1d1d] text-[#5a5a5a] mt-auto">
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

          {/* Третя колонка: детальне пояснення економіки, заповнює простір і дає контекст */}
          <AnimatedInView
            as="div"
            className="rounded-2xl p-6 flex flex-col gap-5 bg-[#161818] border border-[#2a2d2d]"
          >
            <div>
              <p className="text-[15px] font-medium text-[#e0e0e0] mb-2">
                Hvorfor det betaler sig
              </p>
              <p className="text-[12.5px] text-[#8a8a8a] leading-relaxed">
                Den månedlige pris er lav, fordi du ikke længere afleverer en procentdel
                af hver ordre til en platform. Jo flere bestillinger, jo mere sparer du.
              </p>
            </div>

            <hr className="border-[#2a2d2d]" />

            <div className="flex flex-col gap-3">
              {savingsRows.map((row) => (
                <div key={row.label} className="flex justify-between items-start gap-3">
                  <span className="text-[12px] text-[#777]">{row.label}</span>
                  <span className="text-[12px] font-medium text-[#e0e0e0] text-right">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <hr className="border-[#2a2d2d]" />

            <div className="bg-[#00a8e8]/[0.06] rounded-xl border border-[#0af]/20 px-4 py-4 mt-auto">
              <p className="text-[12px] text-[#8a8a8a] leading-relaxed">
                Har du allerede en pizzeria med jævnlige bestillinger via Wolt eller Just
                Eat, tjener siden typisk sig selv ind på under en måned.
              </p>
            </div>
          </AnimatedInView>
        </div>

        <AnimatedInView
          as="div"
          className="mt-6 rounded-2xl p-6 sm:p-7 bg-[#161818] border border-dashed border-[#2a2d2d]"
        >
          <p className="text-[11px] uppercase tracking-[0.05em] text-[#0af] mb-4">
            Lige nu
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <p className="text-[12px] font-medium text-[#e0e0e0] mb-1">
                Gratis gennemgang af dine Wolt-udgifter
              </p>
              <p className="text-[12px] text-[#8a8a8a] leading-relaxed">
                Send mig et par måneders bestillingsstatistik, så regner jeg på, hvad du
                betaler i gebyrer i dag — helt uforpligtende.
              </p>
            </div>
            <div>
              <p className="text-[12px] font-medium text-[#e0e0e0] mb-1">
                Første måned uden driftspris
              </p>
              <p className="text-[12px] text-[#8a8a8a] leading-relaxed">
                Kom i gang nu, og betal først den månedlige pris fra måned nummer to.
              </p>
            </div>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
};

export default PricingBlock;