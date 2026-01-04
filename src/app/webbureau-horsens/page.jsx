import Button from "../../app/components/Button";
import Questions from "../../app/components/Questions";
import Link from "next/link";
import AnimatedInView from "../components/AnimatedInView";
export const metadata = {
  title: "Webbureau i Horsens – Hjemmesider til små virksomheder | WebHjerte",
  description:
    "Lokalt webbureau i Horsens. Webdesign, små firmaside og SEO-grundlag til små virksomheder i Midtjylland.",
};

export default function WebbureauHorsens() {
  return (
    <div>

      {/* HERO */}
      <section className="py-24 px-5">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedInView as="h1" className="maintitle mb-6">
            Webbureau i Horsens
          </AnimatedInView>

          <p className="subtitle max-w-2xl mx-auto mb-10">
            Professionelle hjemmesider til små virksomheder
            i Horsens og Midtjylland.
          </p>

          <Link href="/kontakt">
            <Button name="Kontakt lokalt webbureau" />
          </Link>
        </div>
      </section>

      {/* LOKAL INTRO */}
      <section className="bg-[#F7F6F6] py-24 px-5">
        <div className="max-w-5xl mx-auto space-y-6 text-[#444]">
          <h2 className="title">Lokalt webbureau i Horsens</h2>

          <p>
            <strong>WebHjerte</strong> er et lokalt webbureau i Horsens,
            der arbejder tæt sammen med små virksomheder
            i Midtjylland.
          </p>

          <p>
            Vi kender udfordringerne for lokale forretninger:
            begrænset tid, klare budgetter og behovet for en hjemmeside,
            der faktisk skaber henvendelser.
          </p>

          <p>
            Derfor leverer vi enkle, hurtige og professionelle hjemmesider
            uden bureau-kaos – med personlig kontakt og fuld gennemsigtighed.
          </p>
        </div>
      </section>

      {/* YDELSER */}
      <section className="py-24 px-5">
        <div className="max-w-6xl mx-auto">
          <h2 className="title mb-12 text-center">
            Webdesign & ydelser
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-[#444]">
            <div>
              <h3 className="blogtitle">Webdesign</h3>
              <p>
                Moderne, mobilvenlige hjemmesider med klar struktur
                og professionelt udtryk.
              </p>
            </div>

            <div>
              <h3 className="blogtitle">Landing pages</h3>
              <p>
                Fokus på konvertering – ideel til kampagner,
                services eller lokale søgninger.
              </p>
            </div>

            <div>
              <h3 className="blogtitle">Små firmaside</h3>
              <p>
                Komplet firmaside til små virksomheder,
                der vil fremstå troværdige online.
              </p>
            </div>

            <div>
              <h3 className="blogtitle">SEO-grundlag</h3>
              <p>
                Korrekt struktur, metadata og lokal SEO,
                så din side kan findes på Google.
              </p>
            </div>

            <div>
              <h3 className="blogtitle">Performance-optimering</h3>
              <p>
                Hurtige sider, der loader hurtigt
                og giver en bedre brugeroplevelse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCES */}
      <section className="bg-[#F7F6F6] py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="title mb-12 text-center">
            Sådan foregår samarbejdet
          </h2>

          <ol className="space-y-6 text-[#444] list-decimal list-inside">
            <li>
              <strong>Gratis samtale</strong> – vi taler om din virksomhed,
              dine mål og hvad du har brug for.
            </li>
            <li>
              <strong>Struktur & design</strong> – vi planlægger indhold
              og udtryk, så siden er nem at forstå.
            </li>
            <li>
              <strong>Udvikling</strong> – hjemmesiden bygges hurtigt
              og effektivt.
            </li>
            <li>
              <strong>Lancering & support</strong> – din side går live,
              og du får hjælp bagefter.
            </li>
          </ol>
        </div>
      </section>

      {/* CASES */}
      <section className="py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="title mb-8 text-center">
            Eksempler & resultater
          </h2>

          <p className="text text-center max-w-3xl mx-auto">
            Eksempel på lokal virksomhed i Horsens:
            Ny, enkel hjemmeside med tydelig struktur
            resulterede i flere henvendelser
            og bedre synlighed på Google inden for få uger.
          </p>
        </div>
      </section>

      {/* HVORFOR LOKALT */}
      <section className="bg-[#F7F6F6] py-24 px-5">
        <div className="max-w-5xl mx-auto">
          <h2 className="title mb-10 text-center">
            Hvorfor vælge et lokalt webbureau?
          </h2>

          <ul className="space-y-4 text-[#444]">
            <li>• Personlig kontakt – direkte med udvikleren</li>
            <li>• Hurtige svar og korte beslutningsveje</li>
            <li>• Ingen sælgere eller lange kontrakter</li>
            <li>• Forståelse for lokale virksomheder i Horsens</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <Questions />

      {/* FINAL CTA */}
      <section className="py-24 px-5 text-center">
        <h2 className="title mb-6">
          Klar til en professionel hjemmeside?
        </h2>

        <p className="subtitle mb-8">
          Få en gratis og uforpligtende vurdering.
        </p>

        <Link href="/kontakt">
          <Button name="Få gratis vurdering" />
        </Link>
      </section>

    </div>
  );
}
