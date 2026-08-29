import Link from "next/link";
import AnimatedInView from "../../utils/AnimatedInView";
import Button from "../../utils/Button";

const punkter = [
  {
    titel: "Hastighed",
    tekst:
      "En side, der loader på under 1-2 sekunder. De fleste besøgende forlader siden, hvis den er langsom – og Google straffer det også i søgeresultaterne.",
    metrik: "< 1,5 sek. indlæsning",
    icon: (
      <path
        d="M13 3L4 14h6l-1 9 9-11h-6l1-9z"
        stroke="#00a8e8"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    titel: "Mobilvenlig",
    tekst:
      "Over halvdelen af dine besøgende sidder på mobilen. Siden er bygget til at fungere lige så godt der som på en computerskærm – ikke bare skaleret ned.",
    metrik: "100 % responsiv",
    icon: (
      <>
        <rect
          x="7"
          y="2"
          width="10"
          height="20"
          rx="2"
          stroke="#00a8e8"
          strokeWidth="1.6"
          fill="none"
        />
        <line x1="10" y1="18" x2="14" y2="18" stroke="#00a8e8" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    titel: "SEO-fundament",
    tekst:
      "Struktureret kode, korrekte overskrifter og teknisk opsætning, der gør det muligt at blive fundet på Google – ikke kun en side, der ser pæn ud.",
    metrik: "Klar til at blive fundet",
    icon: (
      <>
        <circle cx="10" cy="10" r="6.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <line x1="19" y1="19" x2="14.8" y2="14.8" stroke="#00a8e8" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    titel: "Moderne design",
    tekst:
      "Et look, der matcher, hvor seriøs din virksomhed er. Skræddersyet til dig og dine kunder – ikke en genkendelig skabelon fra en byggeplatform.",
    metrik: "Skræddersyet, ikke skabelon",
    icon: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <rect x="13" y="3" width="8" height="5" rx="1.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <rect x="13" y="10" width="8" height="11" rx="1.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
      </>
    ),
  },
];

export default function HvadGoerProfessionel() {
  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <AnimatedInView
            as="p"
            className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4"
          >
            Hvad du får
          </AnimatedInView>
          <AnimatedInView as="h2" className="maintitle text-[#1a1a1a] !leading-tight mb-4">
            Det, der gør en hjemmeside professionel
          </AnimatedInView>
          <AnimatedInView as="p" className="text-[14px] text-[#7a7a7a] leading-[1.85]">
            Et flot design er kun halvdelen af historien. Det, der afgør om en
            side reelt virker for din forretning, foregår under overfladen.
          </AnimatedInView>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
          {punkter.map((p) => (
            <AnimatedInView
              key={p.titel}
              as="div"
              className="group bg-[#f7f6f6] border-2 border-[#f7f6f6]/10 rounded-2xl p-6 flex flex-col gap-4 transition-colors"
            >
              <div className="w-10 h-10 bg-[#5e5f5f]/10 rounded-xl flex items-center justify-center shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  {p.icon}
                </svg>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <p className="text-[15px] font-medium text-[#5a5a5a]">{p.titel}</p>
                <p className="text-[13px] text-[#6a6a6a] leading-relaxed">
                  {p.tekst}
                </p>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8] flex-shrink-0" />
                <span className="text-[12px] text-[#5a5a5a]">{p.metrik}</span>
              </div>
            </AnimatedInView>
          ))}
        </div>

        <AnimatedInView as="div" className="flex items-center gap-5 flex-wrap mt-14">
          <Link href="/kontakt">
            <Button name="Få en gratis vurdering" />
          </Link>
          <Link
            href="/portefolje"
            className="text-[13px] text-[#5a5a5a] border-b border-[#2a2d2d] pb-px hover:text-[#9a9a9a] hover:border-[#404040] transition-colors"
          >
            Se mine projekter
          </Link>
        </AnimatedInView>
      </div>
    </section>
  );
}