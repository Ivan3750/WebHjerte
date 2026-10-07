import Link from "next/link";
import HeroService from "./_components/HeroService";
import WhatWeOfferBlock from "./_components/WhatWeOfferBlock";
import Whyusblock from "./_components/Whyusblock";
import PackagesBlock from "./_components/PackagesBlock";
import Whatsincludedblock from "./_components/WhatsIncludedBlock";
import ProcessBlock from "../../components/home/ProcessBlock";
import AfterLaunchBlock from "./_components/AfterLaunchBlock";
import Questions from "../../components/Questions";
import CtaSearchBlock from "../../components/ui/CTA";

export const metadata = {
  title: "Webdesign & hjemmesider i Horsens – services og pakker | WebHjerte",
  description:
    "Webdesign, hjemmesider og SEO til virksomheder i Horsens. Se mine services og 4 klare pakker. 4 klare pakker – Landingside fra 2.500 DKK, Basis 4.500 DKK, Standard 7.500 DKK, Skræddersyet fra 14.000 DKK. Ingen skjulte gebyrer.",
  openGraph: {
    title: "Priser på webdesign – klare pakker uden skjulte gebyrer | WebHjerte",
    description:
      "4 klare pakker til lokale virksomheder i Horsens og Midtjylland. Landingside 2.500 DKK · Basis 4.500 DKK · Standard 7.500 DKK · Skræddersyet fra 14.000 DKK. Levering på 14 dage.",
    url: "https://www.webhjerte.dk/services",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign priser i Horsens – fra 2.500 DKK | WebHjerte",
    description:
      "Klare pakker uden skjulte gebyrer. Landingside 2.500 · Basis 4.500 · Standard 7.500 · Skræddersyet fra 14.000 DKK.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/services",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "WebHjerte",
  url: "https://www.webhjerte.dk",
  telephone: "+45 42 76 05 77",
  email: "hej@webhjerte.dk",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Horsens",
    addressCountry: "DK",
  },
  areaServed: [
    { "@type": "City", name: "Horsens" },
    { "@type": "AdministrativeArea", name: "Midtjylland" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Hjemmesidepakker",
    itemListElement: [
      {
        "@type": "Offer",
        price: "2500",
        priceCurrency: "DKK",
        itemOffered: {
          "@type": "Service",
          name: "Landingside",
          description: "1 side, mobilvenlig, kontaktformular, basic SEO",
        },
      },
      {
        "@type": "Offer",
        price: "4500",
        priceCurrency: "DKK",
        itemOffered: {
          "@type": "Service",
          name: "Basis hjemmeside",
          description: "3–5 sider, mobilvenlig, kontaktformular, basic SEO",
        },
      },
      {
        "@type": "Offer",
        price: "7500",
        priceCurrency: "DKK",
        itemOffered: {
          "@type": "Service",
          name: "Standard hjemmeside",
          description: "Op til 8 sider, CMS, SEO, Google Analytics, booking",
        },
      },
      {
        "@type": "Offer",
        price: "14000",
        priceCurrency: "DKK",
        itemOffered: {
          "@type": "Service",
          name: "Skræddersyet løsning",
          description: "Fuld tilpasning, integrationer, e-commerce, AI-funktioner",
        },
      },
    ],
  },
};

const Services = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroService />
      <WhatWeOfferBlock />
      <Whyusblock />
      <div id="priser" className="scroll-mt-20">
        <PackagesBlock />
      </div>
      <Whatsincludedblock />
      <ProcessBlock />
      <AfterLaunchBlock />

      {/* Niche landing pages */}
      <section className="bg-white px-5 sm:px-10 lg:px-20 py-16 border-t border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
            Hjemmesider til din branche
          </p>
          <h2 className="title text-[#1a1a1a] !leading-tight !mb-8">
            Se hvad jeg kan lave for din virksomhed
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                href: "/hjemmeside-til-haandvaerkere",
                title: "Håndværkere",
                desc: "VVS, elektrikere, tømrere, malere og flere.",
              },
              {
                href: "/hjemmeside-til-restauranter",
                title: "Restauranter",
                desc: "Menu, booking og online bestilling. Undgå Wolt-omkostninger.",
              },
              {
                href: "/hjemmeside-til-saloner",
                title: "Saloner",
                desc: "Frisørsaloner, skønhedssaloner, barber og flere.",
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

      <Questions />
      <CtaSearchBlock />
    </>
  );
};

export default Services;
