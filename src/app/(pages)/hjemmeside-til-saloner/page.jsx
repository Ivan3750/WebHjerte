import Link from "next/link";
import AnimatedInView from "../../components/ui/AnimatedInView";
import Questions from "../../components/Questions";
import CtaSearchBlock from "../../components/ui/CTA";
import ProcessBlock from "../../components/home/ProcessBlock";

export const metadata = {
  title: "Hjemmeside til saloner i Horsens | WebHjerte",
  description:
    "Få en hjemmeside til din salon i Horsens. Booking, priser, galleri. Fast pris fra 2.500 kr, levering på 14 dage.",
  alternates: {
    canonical: "https://www.webhjerte.dk/hjemmeside-til-saloner",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WebHjerte",
  url: "https://www.webhjerte.dk/hjemmeside-til-saloner",
  description:
    "Hjemmesider til frisørsaloner, skønhedssaloner, barber og andre saloner i Horsens og Midtjylland.",
  areaServed: [
    { "@type": "City", name: "Horsens" },
    { "@type": "AdministrativeArea", name: "Midtjylland" },
  ],
  telephone: "+45 42 76 05 77",
  priceRange: "$$",
};

const faqs = [
  {
    q: "Hvad koster en hjemmeside til min salon?",
    a: "Mine pakker starter fra 2.500 kr for en landingside, 4.500 kr for Basis (3-5 sider) og 7.500 kr for Standard (op til 8 sider). Du ser alle priser på /services.",
  },
  {
    q: "Kan kunder booke tider online?",
    a: "Ja, jeg kan bygge en bookingfunktion direkte på din side, så kunder kan booke tider uden at ringe.",
  },
  {
    q: "Hvornår er hjemmesiden klar?",
    a: "En landingside er klar på 5 dage, Basis på 10 dage og Standard på 18 dage. Du ser altid et første udkast inden for 48 timer.",
  },
  {
    q: "Kan jeg selv opdatere galleriet?",
    a: "Ja, hvis du vælger WordPress kan du selv tilføje billeder og tekster. Ellers kan jeg opdatere det for dig til en fast månedlig pris.",
  },
];

export default function SalonerPage() {
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
            Til saloner
          </AnimatedInView>
          <AnimatedInView
            as="h1"
            className="maintitle text-white !leading-tight mb-6 max-w-[20ch]"
          >
            Hjemmeside til saloner i Horsens
          </AnimatedInView>
          <AnimatedInView
            as="p"
            className="text-[14px] text-[#a0a0a0] leading-[1.85] max-w-[52ch] mb-8"
          >
            Frisørsaloner, skønhedssaloner, barber og andre — få en
            hjemmeside, der får kunder til at booke direkte. Fast pris, levering
            på 14 dage.
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
                href: "/hjemmeside-til-restauranter",
                title: "Restauranter",
                desc: "Menu, booking og online bestilling. Undgå Wolt-omkostninger på op til 30%.",
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
