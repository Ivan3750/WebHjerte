import AnimatedInView from "../../utils/AnimatedInView";

const reasons = [
  {
    n: "01",
    color: "#00a8e8",
    title: "Du taler direkte med udvikleren",
    text: "Ingen sælgere, projektledere eller juniorer mellem dig og arbejdet. Du taler med mig, Ivan, gennem hele projektet — så intet går tabt i oversættelsen, og beslutninger tages med det samme.",
  },
  {
    n: "02",
    color: "#3ddc97",
    title: "Fast pris fra start",
    text: "Store bureauer har dyre kontorer, sælgere og administration, som du ender med at betale for. Hos mig går pengene til dit projekt — du får en fair, fast pris uden skjulte gebyrer.",
  },
  {
    n: "03",
    color: "#f0a63a",
    title: "Se resultatet hurtigt",
    text: "Uden lange interne godkendelsesprocesser kan jeg gå i gang med det samme. Du får et konkret udkast tidligt, i stedet for at vente uger på det første møde med et bureau.",
  },
  {
    n: "04",
    color: "#8a8ff0",
    title: "Dit projekt er ikke bare et nummer",
    text: "Hos et stort bureau er du en ud af mange kunder. Hos mig er hvert projekt personligt — mit navn og mit ry står på det, så jeg går op i, at det bliver gjort ordentligt.",
  },
];

const paragraphs = [
  {
    lead: "Hvorfor ikke bare vælge et stort bureau?",
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
    <section className="bg-[#f7f6f6] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Hvorfor WebHjerte?
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-[#1a1a1a] !leading-tight !mb-14 max-w-[26ch]">
          Ikke det største bureau — men det bedste valg for din virksomhed
        </AnimatedInView>

        {/* 4 core reasons — uniform cards, color as a soft icon tint */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-20">
          {reasons.map((r) => (
            <AnimatedInView
              key={r.title}
              as="div"
              className="rounded-2xl p-7 flex flex-col gap-4 bg-[#1c1e1e] border border-[#2a2d2d] transition-colors hover:border-[#3a3d3d]"
            >
              <div className="flex items-center gap-3">
                <span
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-medium flex-shrink-0"
                  style={{
                    backgroundColor: `${r.color}1a`,
                    color: r.color,
                  }}
                >
                  {r.n}
                </span>
                <p className="text-[14.5px] font-medium text-[#e0e0e0]">{r.title}</p>
              </div>
              <p className="text-[13px] text-[#7a7a7a] leading-[1.75]">{r.text}</p>
            </AnimatedInView>
          ))}
        </div>

        {/* SEO-rich supporting copy — clean, aligned grid, easy to scan */}
        <div className="rounded-2xl border border-[#2a2d2d] bg-[#1c1e1e] p-8 sm:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-9">
            {paragraphs.map((p) => (
              <AnimatedInView key={p.lead} as="div" className="flex flex-col gap-2">
                <p className="text-[13.5px] text-[#e0e0e0] font-medium leading-[1.6]">
                  {p.lead}
                </p>
                <p className="text-[13px] text-[#7a7a7a] leading-[1.85]">
                  {p.text}
                </p>
              </AnimatedInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}