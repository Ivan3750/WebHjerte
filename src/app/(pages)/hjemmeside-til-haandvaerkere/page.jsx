import Link from "next/link";
import AnimatedInView from "../../components/ui/AnimatedInView";
import Questions from "../../components/Questions";
import CtaSearchBlock from "../../components/ui/CTA";
import ProcessBlock from "../../components/home/ProcessBlock";

export const metadata = {
  title: "Hjemmeside til håndværkere i Horsens | WebHjerte",
  description:
    "Få en professionel hjemmeside til dit håndværkerfirma i Horsens. Fast pris fra 2.500 kr, levering på 14 dage. VVS, elektrikere, tømrere og flere.",
  alternates: {
    canonical: "https://www.webhjerte.dk/hjemmeside-til-haandvaerkere",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WebHjerte",
  url: "https://www.webhjerte.dk/hjemmeside-til-haandvaerkere",
  description:
    "Hjemmesider til håndværkere i Horsens og Midtjylland. VVS, elektrikere, tømrere, malere og flere.",
  areaServed: [
    { "@type": "City", name: "Horsens" },
    { "@type": "AdministrativeArea", name: "Midtjylland" },
  ],
  telephone: "+45 42 76 05 77",
  priceRange: "$$",
};

const packages = [
  {
    name: "Landingside",
    price: "2.500",
    timing: "Levering: 5 dage",
    features: [
      "1 side med dine ydelser",
      "Mobilvenlig",
      "Kontaktformular",
      "Google Maps",
      "Basic SEO",
    ],
  },
  {
    name: "Basis",
    price: "4.500",
    timing: "Levering: 10 dage",
    features: [
      "3–5 sider",
      "Mobilvenlig",
      "Basic SEO",
      "Kontaktformular",
      "Google Maps",
      "Galleri af arbejde",
    ],
  },
  {
    name: "Standard",
    price: "7.500",
    timing: "Levering: 18 dage",
    features: [
      "Op til 8 sider",
      "SEO + Analytics",
      "Booking & formularer",
      "30 dages support",
      "Galleri + anmeldelser",
    ],
  },
];

const faqs = [
  {
    q: "Hvad koster en hjemmeside til min håndværkervirksomhed?",
    a: "Mine pakker starter fra 2.500 kr for en landingside, 4.500 kr for Basis (3-5 sider) og 7.500 kr for Standard (op til 8 sider). Du ser alle priser på /services.",
  },
  {
    q: "Hvornår er hjemmesiden klar?",
    a: "En landingside er klar på 5 dage, Basis på 10 dage og Standard på 18 dage. Du ser altid et første udkast inden for 48 timer.",
  },
  {
    q: "Kan jeg selv opdatere siden?",
    a: "Ja, hvis du vælger WordPress kan du selv redigere tekster og billeder. Ellers kan jeg opdatere det for dig til en fast månedlig pris.",
  },
  {
    q: "Får jeg kunder fra Google?",
    a: "Jeg optimerer din side til lokale søgninger som 'VVS Horsens' eller 'elektriker Horsens', så kunder i dit område finder dig.",
  },
];

export default function HaandvaerkerePage() {
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
            Til håndværkere
          </AnimatedInView>
          <AnimatedInView
            as="h1"
            className="maintitle text-white !leading-tight mb-6 max-w-[20ch]"
          >
            Hjemmeside til håndværkere i Horsens
          </AnimatedInView>
          <AnimatedInView
            as="p"
            className="text-[14px] text-[#a0a0a0] leading-[1.85] max-w-[52ch] mb-8"
          >
            VVS, elektrikere, tømrere, malere og andre håndværkere — få en
            hjemmeside, der får kunder til at ringe til dig. Fast pris, levering
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

      {/* Packages */}
      <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <AnimatedInView
            as="p"
            className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3"
          >
            Priser
          </AnimatedInView>
          <AnimatedInView
            as="h2"
            className="title text-[#1a1a1a] !leading-tight !mb-10"
          >
            Fast pris — ingen overraskelser
          </AnimatedInView>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {packages.map((pkg) => (
              <AnimatedInView
                key={pkg.name}
                as="div"
                className="rounded-2xl p-6 flex flex-col gap-5 bg-[#f7f6f6] border border-[#e8e8e8]"
              >
                <div>
                  <p className="text-[15px] font-medium text-[#5a5a5a]">{pkg.name}</p>
                  <div className="flex items-baseline gap-1.5 mt-3">
                    <span className="text-[28px] font-medium leading-none text-[#1a1a1a]">
                      {pkg.price}
                    </span>
                    <span className="text-[13px] text-[#5a5a5a]">DKK</span>
                  </div>
                </div>
                <hr className="border-[#e8e8e8]" />
                <div className="flex flex-col gap-2.5">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5">
                      <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-[#1a2a30] border border-[#0a4a60]">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-[12px] text-[#5a5a5a]">{f}</span>
                    </div>
                  ))}
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-md inline-block w-fit bg-[#e8e8e8] text-[#5a5a5a]">
                  {pkg.timing}
                </span>
                <Link
                  href="/kontakt"
                  className="w-full py-2.5 rounded-xl text-[13px] font-medium text-center transition-opacity border border-[#2a2d2d] hover:bg-[#00a8e8] text-[#1a1a1a] hover:opacity-85"
                >
                  Kom i gang
                </Link>
              </AnimatedInView>
            ))}
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
                href: "/hjemmeside-til-restauranter",
                title: "Restauranter",
                desc: "Menu, booking og online bestilling. Undgå Wolt-omkostninger på op til 30%.",
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
