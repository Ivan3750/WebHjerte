import FeedBackPeople from "../components/FeedBackPeople";
import SEO from "../components/seo/SEO";
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/Button";
import Questions from "../components/Questions";
import AnimatedInView from "../components/AnimatedInView";
import Logo from "../../../public/W.png";
import PackagesBlock from "../components/service/PackagesBlock";
export const metadata = {
  title: "Priser på Webdesign i Horsens – Pakker fra 4.500 DKK | WebHjerte",
  description: "Se vores priser på hjemmesider i Horsens. 3 klare pakker – Basis fra 4.500 DKK, Standard 8.500 DKK, Skræddersyet fra 14.000 DKK. Ingen skjulte gebyrer.",
  keywords: "webdesign priser horsens, hjemmeside pris horsens, billig webdesign midtjylland, hjemmeside pakker horsens, webudvikler pris",
  openGraph: {
    title: "Priser på Webdesign – Klare pakker uden skjulte gebyrer | WebHjerte",
    description: "3 klare pakker til lokale virksomheder i Horsens og Midtjylland. Basis 4.500 DKK · Standard 8.500 DKK · Skræddersyet fra 14.000 DKK. Levering på 14 dage.",
    url: "https://www.webhjerte.dk/services",
    siteName: "WebHjerte",
    locale: "da_DK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Webdesign priser i Horsens – fra 4.500 DKK | WebHjerte",
    description: "Klare pakker uden skjulte gebyrer. Basis 4.500 · Standard 8.500 · Skræddersyet fra 14.000 DKK.",
  },
  alternates: {
    canonical: "https://www.webhjerte.dk/services",
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Webdesign og hjemmesideudvikling",
      provider: {
        "@type": "LocalBusiness",
        name: "WebHjerte",
        url: "https://www.webhjerte.dk",
      },
      areaServed: ["Horsens", "Midtjylland", "Danmark"],
      offers: [
        {
          "@type": "Offer",
          name: "Basis hjemmeside",
          price: "4500",
          priceCurrency: "DKK",
          description: "3–5 sider, mobilvenlig, kontaktformular, basic SEO",
        },
        {
          "@type": "Offer",
          name: "Standard hjemmeside",
          price: "8500",
          priceCurrency: "DKK",
          description: "Op til 8 sider, CMS, SEO, Google Analytics, booking",
        },
        {
          "@type": "Offer",
          name: "Skræddersyet løsning",
          price: "14000",
          priceCurrency: "DKK",
          description: "Fuld tilpasning, integrationer, e-commerce, AI-funktioner",
        },
      ],
    }),
  },
};
const packages = [
  {
    name: "Basis",
    description:
      "En moderne hjemmeside med grundlæggende SEO og et professionelt udseende",
    price: "4.500 DKK",
    isPopular: false,
    features: [
      "3-5 sider",
      "Mobilvenlig tilpasning",
      "Basic SEO",
      "Kontaktformular",
      "Levering: 10 dage",
    ],
  },
  {
    name: "Standard",
    description:
      "En skræddersyet hjemmeside med avanceret design og ekstra funktioner for professionelt udseende",
    price: "7.500 DKK",
    isPopular: true,
    features: [
      "Flersidet hjemmeside (Op til 8 sider)",
      "SEO + Analytics",
      "Integration af CRM/betalingssystemer",
      "Booking / formularer",
      "Levering: 18 dage",
    ],
  },
  {
    name: "Skræddersyet",
    description:
      "En avanceret hjemmeside med tilpasset design og funktionalitet, inklusive branding",
    price: "Fra 14.000 DKK",
    isPopular: false,
    features: [
      "Fuld tilpasning",
      "Integrationer / AI",
      "E-commerce",
      "Platform / dashboard",
      "Aftales individuelt",
    ],
  }
];


const Services = () => {
  return (
    <>
{/*       <section>
  
        <AnimatedInView as="h1" className="maintitle text-center mt-[75px]">
        Vores services       </AnimatedInView>
        <AnimatedInView as="h2" className="text-center text-lg subtitle">
Vi tilbyder professionelt webdesign og hjemmesideudvikling til danske små virksomheder – inklusive responsive og mobilvenlige løsninger, SEO-optimering og brugervenligt design.        </AnimatedInView>
      </section>
      <section className="bg-[#F7F6F6]">
        <h2 className="title !my-3">Priser</h2>
        <div className="flex justify-between md:flex-row flex-col gap-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`${pkg.isPopular ? 'bg-[#0af]/[50%]' : 'bg-[#E9E9E9]'} p-6 rounded-2xl flex flex-col gap-3 justify-between max-[750px]:mx-20 max-[600px]:mx-5 max-[400px]:mx-0`}
              >
                
                <h3 className="title-price">{pkg.name}</h3>
                <p className="text !min-h-[90px]">{pkg.description}</p>
                <div className="flex flex-col gap-2 mt-4">
                  {pkg.features.map((feature, i) => (
                    <div
                      key={i}
                      className="text flex items-center gap-2 bg-white p-2 rounded-2xl"
                    >
                      <FaCircleCheck className="text-[20px]" /> {feature}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between mt-6 items-center flex-col">
                  <p className="price pb-4">{pkg.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text my-5">
            !Vores virksomhed tilbyder ikke domæner og hosting, men vi er
            eksperter i at hjælpe med opsætningen. Vi sikrer, at alt fungerer
            perfekt, så du kan fokusere på din forretning uden bekymringer.
          </p>
        </div>
      </section> */}
      <PackagesBlock/>
      <SEO></SEO>
    </>
  );
};

export default Services;
