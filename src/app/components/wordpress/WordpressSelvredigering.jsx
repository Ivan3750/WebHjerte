import Link from "next/link";
import AnimatedInView from "../../utils/AnimatedInView";
import Button from "../../utils/Button";

const punkter = [
  {
    titel: "Skræddersyet design",
    tekst:
      "Vi bygger siden ud fra din virksomhed og dit indhold – ikke en standardskabelon, som ser ud som tusind andre WordPress-sider.",
    metrik: "Ikke en skabelon",
    icon: (
      <>
        <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <rect x="13" y="3" width="8" height="5" rx="1.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <rect x="13" y="10" width="8" height="11" rx="1.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <rect x="3" y="13" width="8" height="8" rx="1.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
      </>
    ),
  },
  {
    titel: "Sat op fra ende til anden",
    tekst:
      "Vi installerer, konfigurerer og indretter WordPress korrekt fra start – hosting, sikkerhed og struktur er på plads, før siden går i luften.",
    metrik: "Klar til brug fra dag ét",
    icon: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <path
          d="M8.5 12.3l2.2 2.2 4.8-5"
          stroke="#00a8e8"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  },
  {
    titel: "Gennemgang af redigering",
    tekst:
      "Når siden er klar, viser vi dig præcis, hvordan du selv retter tekst og skifter billeder ud – så du ikke sidder tilbage med spørgsmål.",
    metrik: "Du er klædt på fra start",
    icon: (
      <path
        d="M4 20l1-4L15 6l3 3L8 19l-4 1z"
        stroke="#00a8e8"
        strokeWidth="1.6"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    titel: "Support efter lancering",
    tekst:
      "Får du brug for hjælp til noget, der ligger ud over det, du selv kan klare, er vi der stadig – uden at det kræver en helt ny aftale.",
    metrik: "Vi forsvinder ikke",
    icon: (
      <>
        <circle cx="12" cy="12" r="8.5" stroke="#00a8e8" strokeWidth="1.6" fill="none" />
        <path
          d="M12 7.5v5l3.2 2"
          stroke="#00a8e8"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </>
    ),
  },
];

export default function WordpressHvadDuFaar() {
  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-14">
          <AnimatedInView
            as="p"
            className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4"
          >
            Din WordPress-løsning
          </AnimatedInView>
          <AnimatedInView as="h2" className="maintitle text-[#1a1a1a] !leading-tight mb-4">
            Sådan bygger vi din WordPress-side
          </AnimatedInView>
          <AnimatedInView as="p" className="text-[14px] text-[#7a7a7a] leading-[1.85]">
            Vi har bygget WordPress-sider i mange år og ved, hvor det ofte går
            galt: skæve skabeloner, langsomme temaer og ejere, der aldrig
            lærer at bruge deres egen side. Sådan gør vi det i stedet – fra
            første klik til den dag, siden går i luften.
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
            <Button name="Få en uforpligtende snak om din side" />
          </Link>
          <Link
            href="/portefolje"
            className="text-[13px] text-[#5a5a5a] border-b border-[#2a2d2d] pb-px hover:text-[#9a9a9a] hover:border-[#404040] transition-colors"
          >
            Se eksempler på WordPress-sider
          </Link>
        </AnimatedInView>
      </div>
    </section>
  );
}