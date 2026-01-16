import FeedBackPeople from "../components/FeedBackPeople";
import SEO from "../components/SEO";
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/Button";
import Questions from "../components/Questions";
import AnimatedInView from "../components/AnimatedInView";
import Logo from "../../../public/W.png";

export const metadata = {
  title: "Skræddersyede Hjemmesider og SEO | WebHjerte",
  description:
    "Vi skaber professionelle hjemmesider, e-handelsløsninger og SEO-optimering for små virksomheder i Danmark.",
  keywords:
    "webudvikling, SEO, responsivt design, e-handel, UX/UI design, digital marketing",
  robots: "index, follow",
  openGraph: {
    title: "Skræddersyede Hjemmesider og SEO | WebHjerte",
    description: "Se vores professionelle webudviklings- og SEO-tjenester.",
    url: "https://webhjerte.dk/services",
    image: Logo,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skræddersyede Hjemmesider og SEO | WebHjerte",
    description: "Se vores professionelle webudviklings- og SEO-tjenester.",
    image: Logo,
  },
};
const packages = [
  {
    name: "Start",
    description:
      "En enkel og prisvenlig hjemmeside, der dækker de grundlæggende behov for din virksomhed",
    price: "500 - 2.000 DKK",
    features: [
      "Grundlæggende design",
      "1-3 sider",
      "Responsivt design",
      "SEO-optimering",
      "Kontaktformular",
    ],
  },
  {
    name: "Standard",
    description:
      "En moderne hjemmeside med grundlæggende SEO og et professionelt udseende",
    price: "3.500 - 6.500 DKK",
    features: [
      "3-5 sider",
      "Mobilvenlig tilpasning",
      "SEO-optimering",
      "Kontaktformular",
      "Google Analytics",
    ],
  },
  {
    name: "Professionel",
    description:
      "En skræddersyet hjemmeside med avanceret design og ekstra funktioner for professionelt udseende",
    price: "7.500 - 11.500 DKK",
    features: [
      "Flersidet hjemmeside (op til 7 sider)",
      "Komplet SEO-optimering",
      "Integration af CRM/betalingssystemer",
      "Admin-panel",
      "Google Analytics",
    ],
  },
  {
    name: "Avanceret",
    description:
      "En avanceret hjemmeside med tilpasset design og funktionalitet, inklusive branding",
    price: "10.000 - 17.500 DKK",
    features: [
      "Flersidet hjemmeside (op til 15 sider)",
      "Branding og tilpasset design",
      "Integration af CRM og betalingssystem",
      "Automatisering og specialfunktioner",
      "Google Analytics",
    ],
  },
  {
    name: "Premium",
    description:
      "En premium løsning med fuld tilpasning, avancerede funktioner og høj konverteringsrate – skræddersyet til din virksomhed",
    price: "18.000 - 28.000 DKK",
    features: [
      "Flersidet hjemmeside (op til 20 sider)",
      "Tilpasset design og UX-optimering",
      "Skalerbare funktioner og integrationer",
      "Avanceret SEO og marketingværktøjer",
      "Automatisering og specialfunktioner",
    ],
  },
  {
    name: "Support",
    description: "Løbende vedligeholdelse og support til din hjemmeside.",
    price: "250 - 750 DKK / måned",
    features: [
      "Regelmæssige opdateringer",
      "Sikkerhedstjek",
      "Backup af hjemmeside",
      "Teknisk support",
      "Indholdsopdateringer efter behov",
      "SEO-overvågning og optimering",
    ],
  },
];


const Services = () => {
  return (
    <>
      <section>
  
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
                className="bg-[#E9E9E9] p-6 rounded-2xl flex flex-col gap-3 justify-between max-[750px]:mx-20 max-[600px]:mx-5 max-[400px]:mx-0"
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
      </section>
      <SEO></SEO>
      <FeedBackPeople />
    </>
  );
};

export default Services;
