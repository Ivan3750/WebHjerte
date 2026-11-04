import SectionHead from "../../../components/ui/SectionHead";
import { FadeUp } from "../../../components/home/fx/Reveal";
import SpotlightCard from "../../../components/home/fx/SpotlightCard";
import { Panel, VisualDirectChat, VisualPrice, VisualClock, VisualPhone } from "../../../components/illustrations/Visuals";

const reasons = [
  {
    n: "01",
    Visual: VisualDirectChat,
    color: "#00a8e8",
    title: "Du taler direkte med udvikleren",
    text: "Ingen sælgere, projektledere eller juniorer mellem dig og arbejdet. Du taler med mig, Ivan, gennem hele projektet — så intet går tabt i oversættelsen, og beslutninger tages med det samme.",
  },
  {
    n: "02",
    Visual: VisualPrice,
    color: "#3ddc97",
    title: "Fast pris fra start",
    text: "Store bureauer har dyre kontorer, sælgere og administration, som du ender med at betale for. Hos mig går pengene til dit projekt — du får en fair, fast pris uden skjulte gebyrer.",
  },
  {
    n: "03",
    Visual: VisualClock,
    color: "#f0a63a",
    title: "Se resultatet hurtigt",
    text: "Uden lange interne godkendelsesprocesser kan jeg gå i gang med det samme. Du får et konkret udkast tidligt, i stedet for at vente uger på det første møde med et bureau.",
  },
  {
    n: "04",
    Visual: VisualPhone,
    color: "#8a8ff0",
    title: "Dit projekt er ikke bare et nummer",
    text: "Hos et stort bureau er du en ud af mange kunder. Hos mig er hvert projekt personligt — mit navn og mit ry står på det, så jeg går op i, at det bliver gjort ordentligt.",
  },
];

const paragraphs = [
  {
    lead: "Hvorfor vælge en lokal webudvikler i Horsens frem for et stort bureau?",
    text: "Et stort bureau kan lyde tryggere på papiret — men i praksis betyder det ofte flere led, længere svartider og en pris, der også dækker deres overhead. Hos WebHjerte betaler du for arbejdet, ikke for administration.",
  },
  {
    lead: "Lille betyder ikke uerfaren.",
    text: "Jeg har bevidst valgt at arbejde alene, fordi det giver mig fuld kontrol over kvaliteten. Hvert projekt får min fulde opmærksomhed fra start til slut — ikke delt mellem ti andre kunder på samme tid.",
  },
  {
    lead: "Din succes er min bedste markedsføring.",
    text: "Jeg har ikke et stort marketingbudget til at tiltrække kunder — jeg er afhængig af, at du bliver tilfreds og anbefaler mig videre. Det betyder, at jeg lægger endnu mere i hvert eneste projekt.",
  },
  {
    lead: "Du får fleksibilitet, du ikke får andre steder.",
    text: "Ingen lange kontrakter, ingen bureaukrati. Har du brug for en hurtig ændring eller et akut spørgsmål, får du et svar direkte fra mig — ikke en supportkø, du skal vente på.",
  },
];

export default function WhyUsBlock() {
  return (
    <section className="scene bg-[#1c1e1e] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead
          dark
          eyebrow="Hvorfor WebHjerte?"
          lines={["Ikke det største bureau —", "men det bedste valg for", "din virksomhed"]}
          maxW="max-w-[26ch]"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16 sm:mb-24">
          {reasons.map((r, i) => (
            <FadeUp key={r.title} delay={(i % 2) * 0.08}>
              <SpotlightCard className="h-full rounded-3xl glass" color="0,168,232">
                <div className="p-4 sm:p-5 flex flex-col gap-5 h-full">
                  <Panel dark h="h-[170px]"><r.Visual /></Panel>
                  <div className="px-2 sm:px-3 pb-3 flex flex-col gap-3">
                  <span className="text-[34px] font-light leading-none tabular-nums" style={{ color: r.color }}>
                    {r.n}
                  </span>
                  <h3 className="text-[17px] font-semibold text-white leading-snug">{r.title}</h3>
                  <p className="text-[13.5px] text-[#8795a0] leading-[1.8]">{r.text}</p>
                  </div>
                </div>
              </SpotlightCard>
            </FadeUp>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-10 border-t border-white/10 pt-12">
          {paragraphs.map((p, i) => (
            <FadeUp key={p.lead} delay={(i % 2) * 0.08} className="flex flex-col gap-2.5">
              <h3 className="text-[15px] text-white font-medium leading-[1.5]">{p.lead}</h3>
              <p className="text-[13.5px] text-[#8795a0] leading-[1.85]">{p.text}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
