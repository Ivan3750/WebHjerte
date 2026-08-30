import Link from "next/link";
import AnimatedInView from "../../utils/AnimatedInView";

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

const inkluderet = [
  "Skræddersyet WordPress-design",
  "100% mobilvenligt (responsive)",
  "SEO-basis (struktur, meta, hastighed)",
  "Kontaktformular med spamfilter",
  "Hjælp til domæne og hosting",
  "Billedoptimering til hurtig loadtid",
  "Cookie- og GDPR-banner",
  "Opsætning af Google Analytics",
  "1 runde af revisioner efter levering",
  "Guide til at redigere siden selv",
];

const kodePakker = [
  { name: "Basis", price: "4.500" },
  { name: "Standard", price: "7.500" },
  { name: "Skræddersyet", price: "14.000" },
];

const HvadFaarDu = () => {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView
          as="p"
          className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3"
        >
          WordPress-pakke
        </AnimatedInView>
        <AnimatedInView
          as="h2"
          className="title text-white !leading-tight !mb-[16px]"
        >
          Det får du med
        </AnimatedInView>
        <AnimatedInView
          as="p"
          className="text-[14px] text-[#777] max-w-xl mb-10"
        >
          Én fast pris, ét fast fundament – ingen skjulte tillæg eller
          overraskelser undervejs.
        </AnimatedInView>

        <AnimatedInView
          as="div"
          className="rounded-2xl p-7 sm:p-8 bg-[#1c1e1e] border border-[#2a2d2d] mb-10 flex flex-col lg:flex-row gap-8 lg:gap-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 flex-1">
            {inkluderet.map((f) => (
              <div key={f} className="flex items-center gap-2.5">
                <Tick />
                <span className="text-[13px] text-[#c9c9c9]">{f}</span>
              </div>
            ))}
          </div>

          <div className="lg:w-[220px] lg:border-l lg:border-[#2a2d2d] lg:pl-10 flex flex-col justify-between gap-5">
            <div>
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-2">
                Fast pris
              </p>
              <div className="flex items-baseline gap-1.5">
                <span className="text-[34px] font-medium leading-none text-white">
                  3.500
                </span>
                <span className="text-[13px] text-[#5a5a5a]">DKK</span>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-md inline-block w-fit bg-[#1a1d1d] text-[#5a5a5a] mt-3">
                Levering: 7 dage
              </span>
            </div>
            <Link
              href="/kontakt?pakke=wordpress"
              className="w-full py-2.5 rounded-xl text-[13px] font-medium text-center transition-opacity border border-[#2a2d2d] hover:bg-[#00a8e8] hover:border-[#00a8e8] text-white hover:opacity-85"
            >
              Kom i gang
            </Link>
          </div>
        </AnimatedInView>

        <AnimatedInView
          as="div"
          className="rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 bg-[#161818] border border-dashed border-[#2a2d2d]"
        >
          <div className="flex-1">
            <p className="text-[14px] font-medium text-[#e0e0e0] mb-1.5">
              Har projektet brug for mere end WordPress?
            </p>
            <p className="text-[12px] text-[#777] max-w-md mb-3">
              Vi skriver også skræddersyet kode, når en færdig platform ikke
              slår til, fra simple løsninger til fulde webapplikationer.
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5">
              {kodePakker.map((p) => (
                <span key={p.name} className="text-[12px] text-[#777]">
                  <span className="text-[#c9c9c9]">{p.name}</span> fra{" "}
                  <span className="text-white">{p.price} DKK</span>
                </span>
              ))}
            </div>
          </div>
          <Link
            href="/services"
            className="flex-shrink-0 px-5 py-2.5 rounded-xl text-[13px] font-medium text-center transition-opacity border border-[#2a2d2d] hover:bg-[#00a8e8] hover:border-[#00a8e8] text-white hover:opacity-85"
          >
            Se andre løsninger
          </Link>
        </AnimatedInView>
      </div>
    </section>
  );
};

export default HvadFaarDu;