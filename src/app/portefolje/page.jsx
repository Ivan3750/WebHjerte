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
    titleLine2: "rideundervisning og klubinformation",
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
    categories: ["Produktkatalog", "Webudvikling"],
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
       <section className="px-4">
    
    <AnimatedInView as="h1" className="maintitle text-center mt-[75px]">
    Se vores arbejde
    </AnimatedInView>
    <AnimatedInView as="h2" className="text-center text-lg">
    Vi hjælper virksomheder med at blive set, engageret og husket – med
    design der både er smukt og strategisk.    </AnimatedInView>
  </section>
      <section className="bg-white">
        {projects.map((project, index) => (
          <div className="flex flex-col  md:flex-row gap-[40px]">
            <div className="w-full mt-10 overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.titleLine1}
                width={700}
                height={500}
                className="rounded-2xl shadow-xl transition-transform duration-500 ease-in-out hover:scale-105 w-full h-auto object-cover"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-2 xl:gap-4 max-w-5xl mx-auto"
              key={index} >
              <div className="uppercase text-[14px] lg:text-[16px] text-[#5e5f5f] font-semibold tracking-widest">
                <p>
                  {project.categories.map((cat, i) => (
                    <span key={i} className="mr-4">
                      #{cat}
                    </span>
                  ))}
                </p>
              </div>

              <div className="text-3xl text-[20px] lg:text-[30px] font-semibold leading-tight text-primary text-[#5e5f5f]">
                <div className="overflow-hidden">
                  <div className="a-line">
                    <div>{project.titleLine1}</div>
                  </div>
                  {project.titleLine2 && (
                    <div className="a-line">
                      <div>{project.titleLine2}</div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex gap-4 flex-wrap text-sm mt-2 ">
                <span className="bg-[#272727] p-3 rounded-lg text-white">
                  {project.client}
                </span>
                {project.location && (
                  <span className="bg-[#272727] p-3  rounded-lg text-white flex items-center gap-2">
                    <img
                      src={project.locationIcon}
                      alt="Location"
                      className="w-5 h-5 rounded-2xl"
                    />
                    {project.location}
                  </span>
                )}
              </div>

              <div className="text-base  text-[#5e5f5f] text-muted max-w-2xl mt-4">
                <p>{project.description}</p>
              </div>

              {/* <div className="mt-6">
                <Link href={project.link}>
                  <Button name="Læs mere"></Button>
                </Link>
              </div> */}
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Portefojle;
