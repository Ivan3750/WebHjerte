import AnimatedInView from "../AnimatedInView";
const reasons = [
  {
    title: "Du taler direkte med udvikleren",
    text: "Du arbejder direkte sammen med Ivan gennem hele projektet. Det gør kommunikationen enkel, hurtig og personlig.",
  },
  {
    title: "Fast pris fra start",
    text: "Du får en klar pris, før arbejdet begynder. Ingen skjulte gebyrer og ingen uventede timer på fakturaen.",
  },
  {
    title: "Se resultatet hurtigt",
    text: "Du får et første udkast tidligt i processen, så du hurtigt kan se retningen og give feedback.",
  },
  {
    title: "Lavet til din virksomhed",
    text: "Din hjemmeside bliver bygget ud fra din virksomhed, dine kunder og dine mål — ikke ud fra en standardløsning.",
  },
];


const paragraphs = [
  {
    lead: "En god hjemmeside skal gøre en forskel.",
    text: "Din hjemmeside er ofte det første sted, en potentiel kunde møder din virksomhed. Derfor skal den ikke bare se godt ud — den skal skabe tillid, være nem at bruge og gøre det enkelt for kunden at tage kontakt.",
  },
  {
    lead: "Personlig kontakt gør processen enklere.",
    text: "Hos WebHjerte taler du direkte med udvikleren. Du slipper for at forklare dine ønsker videre gennem flere personer og får én fast kontakt gennem hele projektet.",
  },
  {
    lead: "Moderne teknologi er en del af standarden.",
    text: "Hjemmesiderne bygges med moderne teknologier med fokus på hastighed, stabilitet, mobilvenlighed og gode tekniske forudsætninger for synlighed på Google.",
  },
  {
    lead: "Din hjemmeside er din.",
    text: "Du får en løsning, du selv ejer. Ingen unødvendig binding til WebHjerte og ingen platform, der låser dig fast. Du kan altid vælge at fortsætte med WebHjerte eller gå videre på egen hånd.",
  },
];

export default function WhyUsBlock() {
  return (
    <section className="bg-[#f7f6f6] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Hvorfor WebHjerte?
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-white !leading-tight !mb-14 max-w-[20ch]">
          Fordi din virksomhed fortjener mere end et skabelon-website
        </AnimatedInView>

        {/* 4 core reasons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-20">
          {reasons.map((r) => (
            <AnimatedInView
              key={r.title}
              as="div"
              className="rounded-2xl p-7 flex flex-col gap-3 bg-[#1c1e1e] border border-[#2a2d2d]"
            >
              <span className="w-2 h-2 rounded-full bg-[#00a8e8] flex-shrink-0" />
              <p className="text-[15px] font-medium text-[#e0e0e0]">{r.title}</p>
              <p className="text-[13px] text-[#7a7a7a] leading-[1.75]">{r.text}</p>
            </AnimatedInView>
          ))}
        </div>

        {/* SEO-rich supporting copy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8 max-w-5xl">
          {paragraphs.map((p) => (
            <AnimatedInView key={p.lead} as="div" className="flex flex-col gap-2">
              <p className="text-[13px] text-[#e0e0e0] font-medium leading-[1.6]">
                {p.lead}
              </p>
              <p className="text-[13px] text-[#7a7a7a] leading-[1.85]">
                {p.text}
              </p>
            </AnimatedInView>
          ))}
        </div>
      </div>
    </section>
  );
}