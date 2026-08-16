import AnimatedInView from "../AnimatedInView";
import Link from "next/link";
import Button from "../Button";

const reasons = [
  {
    number: "01",
    title: "Du taler kun med mig",
    text: "Ingen projektledere, ingen account managers, ingen mellemled. Fra første besked til lancering er det mig, du skriver med.",
  },
  {
    number: "02",
    title: "Fast pris, ingen overraskelser",
    text: "Du ved præcis hvad projektet koster, før vi går i gang. Ingen timeregning, ingen skjulte tillæg på fakturaen.",
  },
  {
    number: "03",
    title: "Udkast inden for 48 timer",
    text: "Du behøver ikke vente uger på at se noget konkret. Du godkender retningen tidligt - så bygger jeg ikke noget du ikke er glad for.",
  },
  {
    number: "04",
    title: "Live på 14 dage",
    text: "Fra samtale til lanceret hjemmeside - ikke måneder. Du får løbende opdateringer undervejs, ikke stilhed indtil deadline.",
  },
  {
    number: "05",
    title: "Justeringer er inkluderet",
    text: "Er du ikke tilfreds med et udkast, retter vi det til - indtil du er. Det er en del af prisen, ikke en ekstraregning.",
  },
  {
    number: "06",
    title: "30 dages support efter lancering",
    text: "Jeg forsvinder ikke når siden går live. Du har en måned gratis support, og herefter en fast aftale hvis du ønsker det.",
  },
];

export default function WhyEasyToWorkWithMe() {
  return (
    <section className="bg-[#0e0f0f] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16">
          <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4">
            Derfor er det nemt
          </AnimatedInView>
          <AnimatedInView as="h2" className="maintitle text-white !leading-tight mb-4">
            Ingen bureau-bøvl. Bare en direkte proces.
          </AnimatedInView>
          <AnimatedInView as="p" className="text-[14px] text-[#7a7a7a] leading-[1.85]">
            Du har nok prøvet at bestille noget hos et bureau og aldrig helt vide,
            hvem der sad med din sag. Sådan er det ikke her.
          </AnimatedInView>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#2a2d2d] border border-[#2a2d2d] rounded-2xl overflow-hidden">
          {reasons.map((reason) => (
            <AnimatedInView
              key={reason.number}
              as="div"
              className="bg-[#111313] p-8 flex flex-col gap-4 hover:bg-[#161818] transition-colors"
            >
              <span className="text-[12px] text-[#00a8e8] font-medium tracking-[0.05em]">
                {reason.number}
              </span>
              <h3 className="text-[15px] text-white font-medium">
                {reason.title}
              </h3>
              <p className="text-[13px] text-[#7a7a7a] leading-[1.75]">
                {reason.text}
              </p>
            </AnimatedInView>
          ))}
        </div>

        <AnimatedInView
          as="div"
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-16 pt-10 border-t border-[#2a2d2d]"
        >
          <div>
            <p className="text-[14px] text-[#e0e0e0] mb-1">
              Klar til at slippe for bureau-bøvlet?
            </p>
            <p className="text-[13px] text-[#5a5a5a]">
              Første samtale er gratis og uforpligtende.
            </p>
          </div>
          <Link href="/kontakt">
            <Button name="Book gratis samtale" />
          </Link>
        </AnimatedInView>
      </div>
    </section>
  );
}