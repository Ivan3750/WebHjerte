import FeedBackPeople from "../components/FeedBackPeople";  
import SEO from "../components/SEO";
import { FaCircleCheck } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/Button";

export const metadata = {
  title: "Vores Services | WebHjerte",
  description: "Vi tilbyder skræddersyede webudviklingsløsninger, SEO-optimering, responsivt design og e-handelsplatforme.",
  keywords: "webudvikling, SEO, responsivt design, e-handel, UX/UI design, digital marketing",
  openGraph: {
    title: "Vores Services | WebHjerte",
    description: "Se vores professionelle webudviklings- og SEO-tjenester.",
    url: "https://webhjerte.dk/services",
    image: "/og-services.jpg",
  },
};



const packages = [
  {
    name: "Start",
    description: "En simpel og billig hjemmeside, der dækker de grundlæggende behov for din virksomhed",
    price: "500 - 3.000 DKK",
    features: [
      "Grundlæggende design",
      "1-3 sider",
      "Responsivt design",
      "SEO-optimering",
      "Kontaktformular"
    ]
  },
  {
    name: "Standard",
    description: "En moderne hjemmeside med grundlæggende SEO og et professionelt udseende",
    price: "4.000 - 8.000 DKK",
    features: [
      "3-5 sider",
      "Mobilvenlig tilpasning",
      "SEO-optimering",
      "Kontaktformular",
      "Google Analytics"

    ]
  },
  {
    name: "Professionel",
    description: "En skræddersyet hjemmeside med avanceret design og ekstra funktioner for professionelt udseende",
    price: "10.000 - 12.000 DKK",
    features: [
      "Flersidet hjemmeside (op til 7 sider)",
      "Komplet SEO-optimering",
      "Integration af CRM/betalingssystemer",
      "Admin-panel",
      "Google Analytics"
    ]
  },
  {
    name: "Avanceret",
    description: "En avanceret hjemmeside med tilpasset design og funktionalitet, inklusive branding",
    price: "12.000 - 25.000 DKK",
    features: [
      "Flersidet hjemmeside (op til 15 sider)",
      "Branding og tilpasset design",
      "Integration af CRM og betalingssystem",
      "Automatisering og specialfunktioner",
      "Google Analytics"

    ]
  },
  {
    name: "Premium",
    description: "En premium løsning med fuld tilpasning, avancerede funktioner og høj konverteringsrate",
    price: "20.000 - 40.000 DKK",
    features: [
      "Flersidet hjemmeside (op til 20 sider)",
      "Tilpasset design og UX-optimering",
      "Skalerbare funktioner og integrationer",
      "Avanceret SEO og marketingværktøjer",
      "Automatisering og specialfunktioner",
    ]
  },
  {
    name: "Support",
    description: "Løbende vedligeholdelse og support til din hjemmeside.",
    price: "200 - 1.200 DKK / måned",
    features: [
      "Regelmæssige opdateringer",
      "Sikkerhedstjek",
      "Backup af hjemmeside",
      "Teknisk support",
      "Indholdsopdateringer efter behov",
      "SEO-overvågning og optimering"
    ]
  }
];


const Services = () => {
  return (
    <>
      <section>
        <h2 className="maintitle text-center mt-[75px]">Hvad tilbyder vi?</h2>
        <p className="text-center">
          Professionel webdesign til danske småvirksomheder.
        </p>
      </section>
      <section className="bg-[#F7F6F6]">
        <h3 className="title !my-3">Web Udvikling</h3>
        <div className="flex justify-between md:flex-row flex-col gap-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {packages.map((pkg, index) => (
        <div key={index} className="bg-[#E9E9E9] p-6 rounded-2xl flex flex-col gap-3 justify-between">
          <h3 className="title-price">{pkg.name}</h3>
          <p className="text !min-h-[90px]">{pkg.description}</p>
          <div className="flex flex-col gap-2 mt-4">
            {pkg.features.map((feature, i) => (
              <div key={i} className="text flex items-center gap-2 bg-white p-2 rounded-2xl">
                <FaCircleCheck className="text-[20px]" /> {feature}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-6 items-center flex-col">
            <p className="price pb-4">{pkg.price}</p>
            <div className="flex justify-end w-full">
              <Button name="Bestil"></Button>
            </div>
          </div>
        </div>
      ))}
    </div>

        </div>

       <div>
          <p className="text my-5">!Vores virksomhed tilbyder ikke domæner og hosting, men vi er eksperter i at hjælpe med opsætningen. Vi sikrer, at alt fungerer perfekt, så du kan fokusere på din forretning uden bekymringer.</p>
        </div>
      </section>
      <FeedBackPeople />
    </>
  );
};

export default Services;
