import AnimatedInView from "../AnimatedInView";

export default function HistorieBlock() {
  return (
    <section className="bg-[#f7f6f6] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-4xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-6">
          Historien om WebHjerte
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-[#1a1a1a] !leading-tight !mb-10 max-w-[20ch]">
          WebHjerte er stadig ungt — og det er en fordel for dig
        </AnimatedInView>

        <AnimatedInView as="div" className="flex flex-col gap-6 max-w-[68ch]">
          <p className="text-[16px] text-[#2a2a2a] leading-[1.9] font-medium">
            WebHjerte blev grundlagt i 2026 med en enkel tanke: lokale
            virksomheder skal ikke vælge mellem en billig, ubrugelig
            hjemmeside og en dyr regning fra et bureau, de knap kan tale med.
            Der skal findes en mellemvej — og den mellemvej er WebHjerte.
          </p>

          <p className="text-[14.5px] text-[#7a7a7a] leading-[1.9]">
            Navnet er ikke tilfældigt. "Hjerte" står for den tilgang, jeg
            insisterer på: hver hjemmeside bygges med samme omtanke, uanset om
            kunden er en lille håndværkervirksomhed eller en webshop med
            hundredvis af produkter. Ingen kunder er for små til at fortjene
            en professionel løsning.
          </p>

          <p className="text-[14.5px] text-[#7a7a7a] leading-[1.9]">
            WebHjerte er bevidst bygget anderledes end et traditionelt
            bureau. Der er ingen lag af projektledere, account managers eller
            sælgere mellem dig og arbejdet — kun én person, der tager ansvar
            for hele processen, fra den første idé til siden er live og
            fungerer.
          </p>

          <p className="text-[14.5px] text-[#7a7a7a] leading-[1.9]">
            At WebHjerte stadig er ungt betyder ikke, at kvaliteten er lavere
            — tværtimod. Det betyder, at hver eneste kunde lige nu former,
            hvad WebHjerte bliver til. Din feedback, dine erfaringer og dit
            projekt er med til at bygge fundamentet for virksomheden - og det
            mærkes i den opmærksomhed, du får som en af de første kunder.
          </p>

          <p className="text-[14.5px] text-[#7a7a7a] leading-[1.9]">
            Målet med WebHjerte er ikke at blive det største bureau i
            Danmark. Målet er at blive det bedste valg for lokale
            virksomheder i Horsens og Midtjylland, der ønsker en hjemmeside,
            der rent faktisk virker - bygget af nogen, der reelt har tid til
            at forstå deres forretning.
          </p>
        </AnimatedInView>
      </div>
    </section>
  );
}