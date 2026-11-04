import Link from "next/link";
import SectionHead from "../../../components/ui/SectionHead";
import { FadeUp } from "../../../components/home/fx/Reveal";
import SpotlightCard from "../../../components/home/fx/SpotlightCard";

const reasons = [
  { number: "01", title: "Svar samme dag", text: "Skriver du en besked, får du svar samme dag - ikke om tre dage. Du skal aldrig sidde og vente på at høre, om dit projekt overhovedet rykker sig." },
  { number: "02", title: "Du ved altid, hvor projektet står", text: "Ingen lange stilheder frem til deadline. Du får løbende status undervejs, så du altid kan følge med i, hvad der sker, og hvad der er næste skridt." },
  { number: "03", title: "Udkast inden for 48 timer", text: "Du behøver ikke vente uger på at se noget konkret. Du godkender retningen tidligt - så bygger jeg ikke noget, du ikke er glad for." },
  { number: "04", title: "Live på 14 dage", text: "Fra samtale til lanceret hjemmeside - ikke måneder. En klar tidsplan sat fra start, som holdes." },
  { number: "05", title: "Ret til, det er rigtigt", text: "Er du ikke tilfreds med et udkast, justerer vi det - så mange gange, det tager. Det er en del af prisen, ikke en ekstraregning per ændring." },
  { number: "06", title: "Jeg er der stadig bagefter", text: "30 dages support er inkluderet, når siden går live. Opstår der spørgsmål eller småfejl, retter jeg dem - uden at du skal betale for hver besked." },
];

export default function WhyEasyToWorkWithMe() {
  return (
    <section className="scene bg-[#1c1e1e]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-20 sm:py-28">
        <SectionHead
          dark
          eyebrow="Sådan foregår samarbejdet"
          lines={["Simpelt, hurtigt og", "til at forstå"]}
          lead="Du har nok prøvet at vente ugevis på svar eller miste overblikket over, hvor et projekt egentlig står. Sådan foregår det ikke her."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((r, i) => (
            <FadeUp key={r.number} delay={(i % 3) * 0.07}>
              <SpotlightCard className="h-full rounded-3xl glass">
                <div className="p-7 flex flex-col gap-4 h-full">
                  <span className="text-[12px] text-[#00a8e8] font-medium tracking-[0.08em]">{r.number}</span>
                  <h3 className="text-[16px] text-white font-semibold leading-snug">{r.title}</h3>
                  <p className="text-[13.5px] text-[#8795a0] leading-[1.8]">{r.text}</p>
                </div>
              </SpotlightCard>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-16 pt-10 border-t border-white/10">
          <div>
            <p className="text-[16px] text-white font-medium mb-1">Klar til at se, hvor let det kan være?</p>
            <p className="text-[13px] text-[#7f8c8c]">Første samtale er gratis og uforpligtende.</p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex justify-center text-[14px] font-semibold text-white bg-[#00a8e8] hover:bg-white hover:text-[#1c1e1e] rounded-full px-8 py-3.5 transition-colors"
          >
            Book gratis samtale
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
