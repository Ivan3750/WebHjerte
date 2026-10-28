import Link from "next/link";

const path = "/blog/hvad-koster-en-hjemmeside-2026";

export const metadata = {
  title: "Hvad koster en hjemmeside i 2026? | WebHjerte",
  description:
    "Hvad koster en hjemmeside i 2026? Se WebHjertes faste priser fra 2.500 kr, hvad der er inkluderet, og hvad der kan ændre prisen.",
  keywords: [
    "hvad koster en hjemmeside 2026",
    "hjemmeside pris 2026",
    "hvad koster en hjemmeside",
  ],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    title: "Hvad koster en hjemmeside i 2026?",
    description:
      "Faste priser fra 2.500 kr, hvad der er inkluderet, og hvad der kan ændre prisen.",
    url: `https://www.webhjerte.dk${path}`,
    type: "article",
    locale: "da_DK",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hvad koster en hjemmeside i 2026?",
  description:
    "Hvad koster en hjemmeside i 2026? Faste priser fra 2.500 kr, hvad der er inkluderet, og hvad der kan ændre prisen.",
  url: `https://www.webhjerte.dk${path}`,
  inLanguage: "da-DK",
  author: { "@type": "Person", name: "Ivan Kohan", url: "https://www.webhjerte.dk/om-mig" },
  publisher: { "@id": "https://www.webhjerte.dk/#organization" },
  mainEntityOfPage: `https://www.webhjerte.dk${path}`,
};

const packages = [
  { name: "Landingside", price: "2.500", text: "1 side til kampagner, annoncer eller én ydelse. Klar på ca. 5 dage." },
  { name: "Basis", price: "4.500", text: "3–5 sider med kontaktformular, Google Maps og basis-SEO. Klar på ca. 10 dage." },
  { name: "Standard", price: "7.500", text: "Op til 8 sider med SEO, analytics, booking og 30 dages support. Klar på ca. 18 dage." },
  { name: "Skræddersyet", price: "Fra 14.000", text: "Til større løsninger som webshop, kundeportal eller specialfunktioner. Aftales individuelt." },
];

export default function HvadKosterEnHjemmesidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="bg-[#111313] px-5 sm:px-10 lg:px-20 pt-20 pb-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a] mb-5">
            Guide · Priser
          </p>
          <h1 className="maintitle text-white !leading-tight mb-6 text-balance">
            Hvad koster en hjemmeside i 2026?
          </h1>
          <p className="text-[14px] text-[#a0a0a0] leading-[1.85] mb-12">
            Det korte svar: hos WebHjerte starter en hjemmeside på 2.500 kr. Prisen afhænger af,
            hvor mange sider du har brug for, og om der skal bygges særlige funktioner. Her er
            pakkerne, hvad de dækker, og hvad der kan ændre prisen.
          </p>

          <div className="flex flex-col gap-12 text-[14px] text-[#a0a0a0] leading-[1.9]">
            <section>
              <h2 className="title text-white !leading-tight !mb-4">Faste pakkepriser</h2>
              <p className="mb-6">
                Alle priser er faste og ekskl. moms. Du får et tilbud, før vi går i gang, så du
                ved det endelige beløb.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {packages.map((p) => (
                  <div key={p.name} className="rounded-2xl p-5 bg-[#1c1e1e] border border-[#2a2d2d]">
                    <p className="text-[14px] font-medium text-[#e0e0e0]">{p.name}</p>
                    <p className="text-[22px] font-medium text-white mt-2">
                      {p.price} <span className="text-[12px] text-[#5a5a5a]">DKK</span>
                    </p>
                    <p className="text-[12px] text-[#7a7a7a] mt-2 leading-relaxed">{p.text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="title text-white !leading-tight !mb-4">Hvad kan ændre prisen?</h2>
              <ul className="flex flex-col gap-2.5">
                <li>Antal sider, og hvor meget indhold der skal skrives eller oversættes.</li>
                <li>Booking, webshop, betalingsløsninger og andre funktioner ud over det aftalte omfang.</li>
                <li>Tredjepartstjenester og premium-værktøjer, som du selv betaler for.</li>
                <li>Om du vil have en WordPress-side, så du selv kan redigere den.</li>
              </ul>
            </section>

            <section>
              <h2 className="title text-white !leading-tight !mb-4">Efter lancering</h2>
              <p>
                Du får 30 dages support efter lancering i Standard-pakken. Derefter kan du vælge et
                vedligeholdelsesabonnement fra 195 til 395 kr. pr. måned, ekskl. moms.
              </p>
            </section>

            <section>
              <h2 className="title text-white !leading-tight !mb-4">Sådan kommer du i gang</h2>
              <p>
                Start med et gratis tilbud. Du får et første designudkast inden for 48 timer efter
                vores samtale, og betaler 0 kr for designet, hvis det ikke passer. Først når
                designet er godkendt, bygger jeg hjemmesiden.
              </p>
            </section>
          </div>

          <div className="mt-14 pt-8 border-t border-[#1e2020] flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-full bg-[#00a8e8] px-6 py-3 text-[13px] font-medium text-[#111313] transition-opacity hover:opacity-90"
            >
              Få et gratis tilbud
            </Link>
            <Link
              href="/hjemmeside-pris"
              className="inline-flex items-center rounded-full border border-[#3a3d3d] px-6 py-3 text-[13px] font-medium text-[#e0e0e0] transition-colors hover:border-[#5a5d5d]"
            >
              Se alle priser
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
