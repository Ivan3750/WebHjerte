import AnimatedInView from "../AnimatedInView";

export default function HistorieBlock() {
  return (
    <section className="bg-[#f7f6f6] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-4xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-6">
          Historien om WebHjerte
        </AnimatedInView>

        <AnimatedInView as="h2" className="title text-white !leading-tight !mb-10 max-w-[18ch]">
          WebHjerte er stadig ungt — og det er en fordel for dig
        </AnimatedInView>

        <AnimatedInView as="div" className="flex flex-col gap-6 max-w-[68ch]">
          <p className="text-[16px] text-[#2a2a2a] leading-[1.9] font-medium">
            Jeg hedder Ivan, og jeg står bag WebHjerte. Det er ikke et bureau
            med et team af ansatte — det er mig, som bygger hjemmesider til
            lokale virksomheder, fordi jeg brænder for det.
          </p>

          <p className="text-[14.5px] text-[#7a7a7a] leading-[1.9]">
            Jeg startede WebHjerte, fordi jeg gang på gang så det samme:
            virksomheder med hjemmesider, der enten var forældede, langsomme
            eller slet ikke fandtes. Ikke fordi de ikke fortjente bedre — men
            fordi de aldrig havde haft en enkel og overkommelig løsning.
          </p>

          <p className="text-[14.5px] text-[#7a7a7a] leading-[1.9]">
            Fordi jeg er nystartet, har du ikke at gøre med et stort bureau,
            hvor din sag ryger gennem flere hænder. Du har direkte adgang til
            mig — fra den første besked til siden er live. Det betyder hurtigere
            svar, tættere dialog og en løsning, der er skabt specifikt til din
            virksomhed.
          </p>

          <p className="text-[14.5px] text-[#7a7a7a] leading-[1.9]">
            Jeg er stadig i gang med at bygge WebHjerte op — men det er
            præcis derfor, du får min fulde opmærksomhed. Hver kunde tæller,
            og det mærker du i samarbejdet.
          </p>
        </AnimatedInView>
      </div>
    </section>
  );
}
