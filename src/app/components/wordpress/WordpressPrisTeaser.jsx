import Link from "next/link";
import AnimatedInView from "../../utils/AnimatedInView";
import Button from "../../utils/Button";

const highlights = [
  "Ingen overraskelser på fakturaen",
  "Prisen matcher det, du ser her",
  "Du vælger niveauet – ikke os",
];

const linjer = [
  { navn: "WordPress-opsætning", vaerdi: "Inkluderet" },
  { navn: "Design tilpasset dig", vaerdi: "Inkluderet" },
  { navn: "Oplæring i at redigere selv", vaerdi: "Inkluderet" },
  { navn: "Skjulte gebyrer", vaerdi: "Findes ikke", struck: true },
];

export default function WordpressPrisKvittering() {
  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Tekst-side */}
        <div>
          <AnimatedInView
            as="p"
            className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4"
          >
            Hvad koster det
          </AnimatedInView>
          <AnimatedInView as="h2" className="maintitle text-[#1a1a1a] !leading-tight mb-4">
            Se prisen, før du beslutter dig
          </AnimatedInView>
          <AnimatedInView as="p" className="text-[14px] text-[#7a7a7a] leading-[1.85] mb-8">
            Ingen tilbudsformular, ingen &quot;ring for pris&quot;. Det, der står på
            prissiden, er det, du betaler – lige til at regne på, før du
            skriver til os.
          </AnimatedInView>

          <ul className="space-y-3.5 mb-10">
            {highlights.map((h) => (
              <AnimatedInView as="li" key={h} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a8e8] flex-shrink-0" />
                <span className="text-[13px] text-[#5a5a5a]">{h}</span>
              </AnimatedInView>
            ))}
          </ul>

          <AnimatedInView as="div" className="flex items-center gap-5 flex-wrap">
            <Link href="/priser">
              <Button name="Se priser" />
            </Link>
            <Link
              href="/kontakt"
              className="text-[13px] text-[#5a5a5a] border-b border-[#2a2d2d] pb-px hover:text-[#9a9a9a] hover:border-[#404040] transition-colors"
            >
              Få hjælp til at vælge niveau
            </Link>
          </AnimatedInView>
        </div>

        {/* Visuel side: "kvittering" */}
        <AnimatedInView as="div" className="flex justify-center">
          <div
            className="w-full max-w-[340px] bg-[#f7f6f6] shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)] px-7 pt-8 pb-6"
            style={{
              clipPath:
                "polygon(0% 0%,100% 0%,100% 96%,94% 100%,88% 96%,82% 100%,76% 96%,70% 100%,64% 96%,58% 100%,52% 96%,46% 100%,40% 96%,34% 100%,28% 96%,22% 100%,16% 96%,10% 100%,4% 96%,0% 100%)",
            }}
          >
            <div className="text-center mb-6">
              <p className="text-[13px] font-medium tracking-[0.08em] uppercase text-[#1a1a1a]">
                WebHjerte
              </p>
              <p className="text-[11px] text-[#8a8a8a] mt-1">
                Din WordPress-hjemmeside
              </p>
            </div>

            <div className="border-t border-dashed border-[#c9c9c9] pt-5 space-y-3 font-mono">
              {linjer.map((l) => (
                <div key={l.navn} className="flex items-center justify-between gap-4">
                  <span className="text-[12px] text-[#5a5a5a]">{l.navn}</span>
                  <span
                    className={
                      "text-[12px] " +
                      (l.struck
                        ? "line-through text-[#b5b5b5]"
                        : "text-[#00a8e8]")
                    }
                  >
                    {l.vaerdi}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-dashed border-[#c9c9c9] mt-5 pt-5 flex items-center justify-between">
              <span className="text-[13px] font-medium text-[#1a1a1a] font-mono">
                Din pris
              </span>
              <Link
                href="/priser"
                className="text-[12px] text-[#00a8e8] font-mono hover:opacity-70 transition-opacity"
              >
                Se beløb →
              </Link>
            </div>

            <p className="text-center text-[10px] text-[#8a8a8a] mt-6 font-mono">
              * uden småt skrevet
            </p>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}