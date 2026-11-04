import SectionHead from "../../../components/ui/SectionHead";
import { FadeUp } from "../../../components/home/fx/Reveal";

const paragraphs = [
  `Navnet er ikke tilfældigt. "Hjerte" står for den tilgang, jeg insisterer på: hver hjemmeside bygges med samme omtanke, uanset om kunden er en lille håndværkervirksomhed eller en webshop med hundredvis af produkter. Ingen kunder er for små til at fortjene en professionel løsning.`,
  "WebHjerte er bevidst bygget anderledes end et traditionelt bureau. Der er ingen lag af projektledere, account managers eller sælgere mellem dig og arbejdet — kun en person, der tager ansvar for hele processen, fra den første ide til siden er live og fungerer.",
  "At WebHjerte stadig er ungt betyder ikke, at kvaliteten er lavere — tværtimod. Det betyder, at hver eneste kunde lige nu former, hvad WebHjerte bliver til. Din feedback, dine erfaringer og dit projekt er med til at bygge fundamentet for virksomheden - og det mærkes i den opmærksomhed, du får som en af de første kunder.",
  "Målet med WebHjerte er ikke at blive det største bureau i Danmark. Målet er at blive det bedste valg for lokale virksomheder i Horsens og Midtjylland, der ønsker en hjemmeside, der rent faktisk virker - bygget af nogen, der reelt har tid til at forstå deres forretning.",
];

export default function HistorieBlock() {
  return (
    <section className="scene bg-[#f7f6f6] border-t border-[#eeecec]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-20 sm:py-28">
        <SectionHead
          eyebrow="Historien om WebHjerte"
          lines={["WebHjerte er stadig ungt —", "og det er en fordel for dig"]}
          maxW="max-w-[24ch]"
        />
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
          <FadeUp as="p" className="text-[clamp(18px,2vw,24px)] text-[#1c1e1e] leading-[1.6] font-medium">
            WebHjerte blev grundlagt i 2026 med en enkel tanke: lokale virksomheder skal ikke vælge mellem en billig, ubrugelig
            hjemmeside og en dyr regning fra et bureau, de knap kan tale med. Der skal findes en mellemvej — og den mellemvej er
            WebHjerte.
          </FadeUp>
          <div className="flex flex-col gap-6">
            {paragraphs.map((p, i) => (
              <FadeUp key={i} as="p" delay={0.03 * i} className="text-[15px] text-[#5a5a5a] leading-[1.9]">
                {p}
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
