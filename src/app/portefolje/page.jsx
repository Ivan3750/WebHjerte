import Image from "next/image";
import Link from "next/link";

import Pizzle from "../assets/cases/PizzleM.png"; // Сайт піцерії
import Hireon from "../assets/cases/HireonM.png"; // Сайт з пошуку роботи
import Workout from "../assets/cases/WorkOutM.png"; // Сайт для спортзалу
import ClubHorse from "../assets/cases/ClubHorseM.png"; // Сайт про школу з конями
import Monolit from "../assets/cases/Vzlom.png"; // Сайт з продажу дверей і сейфів
import WordSee from "../assets/cases/WorkOutM.png"; // Сайт з пошуку квартири
import Ukraine from "../assets/cases/UkraineW.png"; // Сайт про війну в Україні був розроблений безкоштовно
import Button from "../components/Button";
import AnimatedInView from "../components/AnimatedInView";

import Logo from "../../../public/W.png";

export const metadata = {
  title: "Om WebHjerte – Lokalt Webstudio i Horsens med Hjerte for Web",
  description:
    "Vi er et passioneret webstudio i Horsens, der hjælper små virksomheder i Danmark med moderne, brugervenlige og mobile hjemmesider – hurtigt og til en fair pris.",
  keywords:
    "webstudio, webudvikling, Horsens, små virksomheder, moderne hjemmesider, digitale løsninger, lokal webbureau, Danmark",
  robots: "index, follow",
  openGraph: {
    title: "Om WebHjerte – Lokalt Webstudio i Horsens med Hjerte for Web",
    description:
      "Mød holdet bag WebHjerte – vi brænder for at styrke små virksomheder med professionelle webløsninger.",
    url: "https://webhjerte.dk/om-os",
    image: Logo,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Om WebHjerte – Lokalt Webstudio i Horsens med Hjerte for Web",
    description:
      "Mød holdet bag WebHjerte – vi brænder for at styrke små virksomheder med professionelle webløsninger.",
    image: Logo,
  },
};


const projects = [
  {
    titleLine1: "Pizzaria website",
    titleLine2: "til lokal takeaway forretning",
    client: "Pizzaria",
    categories: ["Website design", "Development"],
    description: "Lækker hjemmeside til en moderne pizzaforretning",
    location: "Horsens",
    locationIcon: "https://flagcdn.com/w40/dk.webp",
    link: "#",
    image: Pizzle,
  },
  {
    titleLine1: "Hireon",
    titleLine2: "platform til jobopslag og søgning",
    client: "Hireon",
    categories: ["UX Design", "Webudvikling"],
    description: "Forbinder jobsøgere og virksomheder hurtigt og nemt",
    location: "Berlin",
    locationIcon: "https://flagcdn.com/w40/de.webp",
    link: "#",
    image: Hireon,
  },
  {
    titleLine1: "WorkOut",
    titleLine2: "fitness og træningsplaner",
    client: "WorkOut",
    categories: ["UI Design", "Webudvikling"],
    description: "Et rent og responsivt design til fitnessentusiaster",
    location: "Aarhus",
    locationIcon: "https://flagcdn.com/w40/dk.webp",
    link: "#",
    image: Workout,
  },
  {
    titleLine1: "Hesteklub",
    titleLine2: "hjemmeside og klubinformation",
    client: "Hesteklub",
    categories: ["Website design", "Webudvikling"],
    description: "Elegant hjemmeside for en rideklub",
    location: "Vejle",
    locationIcon: "https://flagcdn.com/w40/dk.webp",
    link: "#",
    image: ClubHorse,
  },
  {
    titleLine1: "Monolit",
    titleLine2: "salg af døre og pengeskabe",
    client: "Monolit",
    categories: ["Produktkatalog"],
    description: "Robust og stilfuld hjemmeside til sikkerhedsprodukter",
    location: "Aarhus",
    locationIcon: "https://flagcdn.com/w40/dk.webp",
    link: "#",
    image: Monolit,
  },
  /* {
    titleLine1: "WordSee",
    titleLine2: "lejlighedssøgningsplatform",
    client: "WordSee",
    categories: ["UX/UI", "Udvikling"],
    description: "Hurtig søgning og favoritter til boligmarkedet",
    location: "København",
    locationIcon: "https://flagcdn.com/w40/dk.webp",
    link: "#",
    image: WordSee,
  }, */
  {
    titleLine1: "Ukraine Hjælpeprojekt",
    titleLine2: "gratis website under krigen",
    client: "Ukraine",
    categories: ["Velgørenhed", "Webdesign"],
    description: "Projekt skabt for at støtte Ukraine med information og fakta",
    location: "Kyiv",
    locationIcon: "https://flagcdn.com/w40/ua.webp",
    link: "#",
    image: Ukraine,
  },
];

const Portefojle = () => {
  return (
    <>
      <section className="px-4 sm:px-6 md:px-10 lg:px-16">
        <AnimatedInView as="h1" className="maintitle text-center mt-16 sm:mt-20 text-3xl sm:text-4xl lg:text-5xl font-bold">
          Se vores arbejde
        </AnimatedInView>
        <AnimatedInView as="h2" className="text-center text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 text-white-600 max-w-2xl mx-auto">
          Vi hjælper virksomheder med at blive set, engageret og husket – med design der både er smukt og strategisk.
        </AnimatedInView>
      </section>

      <section className="bg-white py-10 sm:py-16">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-16 md:mb-20">
            <div className="w-full md:w-1/2 overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.titleLine1}
                width={700}
                height={500}
                className="rounded-2xl shadow-xl w-full h-auto object-cover transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>

            <div className="flex flex-col w-full md:w-1/2 gap-3 md:gap-5 max-w-2xl">
              <div className="uppercase text-xs sm:text-sm lg:text-base text-gray-500 font-semibold tracking-widest">
                {project.categories.map((cat, i) => (
                  <span key={i} className="mr-3 md:mr-4">
                    #{cat}
                  </span>
                ))}
              </div>

              <div className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-snug text-gray-700">
                <div className="overflow-hidden">
                  <div className="a-line">{project.titleLine1}</div>
                  {project.titleLine2 && <div className="a-line">{project.titleLine2}</div>}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 md:gap-4 mt-2">
                <span className="bg-gray-900 text-white px-3 py-1 rounded-lg text-sm sm:text-base">{project.client}</span>
                {project.location && (
                  <span className="bg-gray-900 text-white px-3 py-1 rounded-lg flex items-center gap-2 text-sm sm:text-base">
                    <img src={project.locationIcon} alt="Location" className="w-4 h-4 sm:w-5 sm:h-5 rounded-full" />
                    {project.location}
                  </span>
                )}
              </div>

              <p className="text-gray-600 text-sm sm:text-base mt-3">{project.description}</p>

              {/* <Link href={project.link}>
                <Button name="Læs mere" />
              </Link> */}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Portefojle;

