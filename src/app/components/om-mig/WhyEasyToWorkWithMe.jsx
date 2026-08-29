import AnimatedInView from "../../utils/AnimatedInView";
import Link from "next/link";
import Button from "../../utils/Button";

const reasons = [
  {
    number: "01",
    title: "Svar samme dag",
    text: "Skriver du en besked, får du svar samme dag - ikke om tre dage. Du skal aldrig sidde og vente på at høre, om dit projekt overhovedet rykker sig.",
  },
  {
    number: "02",
    title: "Du ved altid, hvor projektet står",
    text: "Ingen lange stilheder frem til deadline. Du får løbende status undervejs, så du altid kan følge med i, hvad der sker, og hvad der er næste skridt.",
  },
  {
    number: "03",
    title: "Udkast inden for 48 timer",
    text: "Du behøver ikke vente uger på at se noget konkret. Du godkender retningen tidligt - så bygger jeg ikke noget, du ikke er glad for.",
  },
  {
    number: "04",
    title: "Live på 14 dage",
    text: "Fra samtale til lanceret hjemmeside - ikke måneder. En klar tidsplan sat fra start, som holdes.",
  },
  {
    number: "05",
    title: "Ret til, det er rigtigt",
    text: "Er du ikke tilfreds med et udkast, justerer vi det - så mange gange, det tager. Det er en del af prisen, ikke en ekstraregning per ændring.",
  },
  {
    number: "06",
    title: "Jeg er der stadig bagefter",
    text: "30 dages support er inkluderet, når siden går live. Opstår der spørgsmål eller småfejl, retter jeg dem - uden at du skal betale for hver besked.",
  },
];

export default function WhyEasyToWorkWithMe() {
  return (
    <section className="bg-[#0e0f0f] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16">
          <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4">
            Sådan foregår samarbejdet
          </AnimatedInView>
          <AnimatedInView as="h2" className="maintitle text-white !leading-tight mb-4">
            Simpelt, hurtigt og til at forstå
          </AnimatedInView>
          <AnimatedInView as="p" className="text-[14px] text-[#7a7a7a] leading-[1.85]">
            Du har nok prøvet at vente ugevis på svar eller miste overblikket over,
            hvor et projekt egentlig står. Sådan foregår det ikke her.
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
              Klar til at se, hvor let det kan være?
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