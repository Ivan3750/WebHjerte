import Link from "next/link";
import AnimatedInView from "../../components/ui/AnimatedInView";
import Questions from "../../components/Questions";
import CtaSearchBlock from "../../components/ui/CTA";
import ProcessBlock from "../../components/home/ProcessBlock";

export const metadata = {
  title: "Hjemmeside til restauranter i Horsens | WebHjerte",
  description:
    "Få en hjemmeside til din restaurant i Horsens. Menu, booking, online bestilling. Fast pris fra 2.500 kr, levering på 14 dage.",
  alternates: {
    canonical: "https://www.webhjerte.dk/hjemmeside-til-restauranter",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WebHjerte",
  url: "https://www.webhjerte.dk/hjemmeside-til-restauranter",
  description:
    "Hjemmesider til restauranter og cafeer i Horsens og Midtjylland. Menu, booking, online bestilling.",
  areaServed: [
    { "@type": "City", name: "Horsens" },
    { "@type": "AdministrativeArea", name: "Midtjylland" },
  ],
  telephone: "+45 42 76 05 77",
  priceRange: "$$",
};

const faqs = [
  {
    q: "Hvad koster en hjemmeside til min restaurant?",
    a: "Mine pakker starter fra 2.500 kr for en landingside, 4.500 kr for Basis (3-5 sider) og 7.500 kr for Standard (op til 8 sider). Du ser alle priser på /services.",
  },
  {
    q: "Kan kunder bestille online?",
    a: "Ja, jeg kan bygge en bestillingsfunktion direkte på din side, så kunder kan bestille uden at ringe. Du undgår Wolt-omkostninger på op til 30%.",
  },
  {
    q: "Hvornår er hjemmesiden klar?",
    a: "En landingside er klar på 5 dage, Basis på 10 dage og Standard på 18 dage. Du ser altid et første udkast inden for 48 timer.",
  },
  {
    q: "Kan jeg selv opdatere menuen?",
    a: "Ja, hvis du vælger WordPress kan du selv redigere menu og tekster. Ellers kan jeg opdatere det for dig til en fast månedlig pris.",
  },
];

export default function RestauranterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 pt-24 pb-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedInView
            as="p"
            className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a] mb-5"
          >
            Til restauranter & cafeer
          </AnimatedInView>
          <AnimatedInView
            as="h1"
            className="maintitle text-white !leading-tight mb-6 max-w-[20ch]"
          >
            Hjemmeside til restauranter i Horsens
          </AnimatedInView>
          <AnimatedInView
            as="p"
            className="text-[14px] text-[#a0a0a0] leading-[1.85] max-w-[52ch] mb-8"
          >
            Menu, booking og online bestilling — få kunder til at bestille
            direkte fra din side i stedet for gennem Wolt med 30% i gebyr.
            Fast pris, levering på 14 dage.
          </AnimatedInView>
          <AnimatedInView as="div" className="flex flex-wrap gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center rounded-full bg-[#00a8e8] px-6 py-3 text-[13px] font-medium text-[#111313] transition-opacity hover:opacity-90"
            >
              Få et gratis tilbud
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center rounded-full border border-[#3a3d3d] px-6 py-3 text-[13px] font-medium text-[#e0e0e0] transition-colors hover:border-[#5a5d5d]"
            >
              Se priser
            </Link>
          </AnimatedInView>
        </div>
      </section>

      {/* Wolt argument */}
      <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-[#e8e8e8] bg-[#f7f6f6] p-8 sm:p-10">
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
              Undgå Wolt-omkostninger
            </p>
            <h2 className="title text-[#1a1a1a] !leading-tight !mb-4 max-w-[24ch]">
              Wolt tager op til 30% af hver bestilling
            </h2>
            <p className="text-[14px] text-[#5a5a5a] leading-[1.85] max-w-[60ch] mb-6">
              Hvis du sælger 10.000 kr om måneden gennem Wolt, betaler du op til
              3.000 kr i gebyr. Med din egen hjemmeside med online bestilling
              beholder du hele beløbet — og kunderne finder dig direkte på Google.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl bg-white border border-[#e8e8e8] p-5">
                <p className="text-[28px] font-medium text-[#1a1a1a]">30%</p>
                <p className="text-[12px] text-[#5a5a5a]">Wolt-omkostning pr. bestilling</p>
              </div>
              <div className="rounded-xl bg-white border border-[#e8e8e8] p-5">
                <p className="text-[28px] font-medium text-[#1a1a1a]">3.000 kr</p>
                <p className="text-[12px] text-[#5a5a5a]">Tabt pr. måned ved 10.000 kr i salg</p>
              </div>
              <div className="rounded-xl bg-white border border-[#e8e8e8] p-5">
                <p className="text-[28px] font-medium text-[#1a1a1a]">0 kr</p>
                <p className="text-[12px] text-[#5a5a5a]">Gebyr på din egen hjemmeside</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessBlock />

      {/* Other industries */}
      <section className="bg-white px-5 sm:px-10 lg:px-20 py-16 border-t border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
            Også for din branche
          </p>
          <h2 className="title text-[#1a1a1a] !leading-tight !mb-8">
            Se hvad jeg kan lave for andre virksomheder
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                href: "/hjemmeside-til-haandvaerkere",
                title: "Håndværkere",
                desc: "VVS, elektrikere, tømrere, malere og flere. Få en hjemmeside, der får kunder til at ringe.",
              },
              {
                href: "/hjemmeside-til-saloner",
                title: "Saloner",
                desc: "Frisørsaloner, skønhedssaloner, barber og flere. Få kunder til at booke direkte.",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl p-6 flex flex-col gap-3 bg-[#f7f6f6] border border-[#e8e8e8] hover:border-[#00a8e8]/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <p className="text-[15px] font-medium text-[#5a5a5a] group-hover:text-[#00a8e8] transition-colors">
                    {item.title}
                  </p>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-[#5a5a5a] group-hover:text-[#00a8e8] group-hover:translate-x-0.5 transition-all"
                  >
                    <path
                      d="M3 8h10M9 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="text-[13px] text-[#6a6a6a] leading-relaxed">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Questions faqs={faqs} />
      <CtaSearchBlock />
    </>
  );
}
