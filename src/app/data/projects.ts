import Pizzle from "../assets/cases/PizzleM.png";
import ClubHorse from "../assets/cases/ClubHorseM.png";
import Ukraine from "../assets/cases/UkraineW.png";
import Hireon from "../assets/cases/HireonM.png";
import Monolit from "../assets/cases/Vzlom.png";
import WorkOut from "../assets/cases/WorkOutM.png";
import {StaticImageData} from "next/image";
export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  heroImage: StaticImageData | string;
  tags: string[];
  client: string;
  location: string;
  services: string[];
  technologies: string[];
  overview: string;
  overviewExtra: string;
  designDescription: string;
  developmentDescription: string;
};

export const projects: Project[] = [
  {
    slug: "pizzaria",
    title: "Pizzaria website",
    subtitle: "Til lokal takeaway forretning",
    heroImage: Pizzle,
    tags: ["Website design", "Development"],
    client: "Pizzaria",
    location: "Horsens, Danmark",
    services: ["Website design", "Frontend udvikling"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    overview:
      "Formålet var at skabe en moderne og indbydende hjemmeside til en lokal pizzaforretning med fokus på takeaway og online bestilling.",
    overviewExtra:
      "Hjemmesiden skulle være mobiloptimeret, hurtig og konverteringsoptimeret for at øge online bestillinger og synlighed lokalt.",
    designDescription:
      "Designet er varmt og appetitligt med store produktbilleder, tydelige call-to-actions og nem navigation. Fokus på brugervenlig menu og hurtig bestillingsflow.",
    developmentDescription:
      "Udviklet med Next.js for høj performance og SEO. Implementeret responsivt layout samt optimeret billeder og struktur for hurtig indlæsning.",
  },

  {
    slug: "hireon",
    title: "Hireon",
    subtitle: "Platform til jobopslag og søgning",
    heroImage: Hireon,
    tags: ["UX Design", "Webudvikling"],
    client: "Hireon",
    location: "Berlin, Tyskland",
    services: ["UX Research", "Webudvikling", "Produktdesign"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    overview:
      "Hireon er en platform der forbinder jobsøgere og virksomheder gennem en intuitiv og effektiv jobportal.",
    overviewExtra:
      "Projektet fokuserede på enkel onboarding, hurtig søgning og tydelig præsentation af jobopslag for at maksimere engagement.",
    designDescription:
      "Minimalistisk og professionelt design med fokus på læsbarhed og struktur. UI designet med tydelige filtre og søgefunktion.",
    developmentDescription:
      "Bygget som en fullstack løsning med autentificering, databaseintegration og optimeret server-side rendering for bedre performance.",
  },

  {
    slug: "workout",
    title: "WorkOut",
    subtitle: "Fitness og træningsplaner",
    heroImage: WorkOut,
    tags: ["UI Design", "Webudvikling"],
    client: "WorkOut",
    location: "Aarhus, Danmark",
    services: ["UI Design", "Frontend udvikling"],
    technologies: ["React", "Tailwind CSS"],
    overview:
      "WorkOut platformen tilbyder skræddersyede træningsprogrammer og fitnessvejledning online.",
    overviewExtra:
      "Målet var at skabe et inspirerende og motiverende digitalt univers for fitnessentusiaster.",
    designDescription:
      "Rent og energisk design med fokus på store billeder, tydelig typografi og stærke farvekontraster.",
    developmentDescription:
      "Responsiv frontend løsning med fokus på performance og brugervenlig navigation mellem træningsprogrammer.",
  },

  {
    slug: "hesteklub",
    title: "Hesteklub",
    subtitle: "Hjemmeside og klubinformation",
    heroImage: ClubHorse,
    tags: ["Website design", "Webudvikling"],
    client: "Hesteklub",
    location: "Vejle, Danmark",
    services: ["Website design", "CMS løsning"],
    technologies: ["Next.js", "Tailwind CSS"],
    overview:
      "En elegant og informativ hjemmeside til en rideklub med fokus på medlemmer og arrangementer.",
    overviewExtra:
      "Siden skulle være nem at opdatere og give medlemmer adgang til vigtig information.",
    designDescription:
      "Naturligt og roligt design inspireret af hestesport. Brug af bløde farver og klassisk typografi.",
    developmentDescription:
      "Implementeret med fokus på brugervenlig CMS-struktur og mobilvenlig visning.",
  },

  {
    slug: "monolit",
    title: "Monolit",
    subtitle: "Salg af døre og pengeskabe",
    heroImage: Monolit,
    tags: ["Produktkatalog"],
    client: "Monolit",
    location: "Aarhus, Danmark",
    services: ["Produktkatalog", "Webudvikling"],
    technologies: ["Next.js", "TypeScript"],
    overview:
      "Monolit sælger sikkerhedsprodukter som døre og pengeskabe og havde behov for en professionel online præsentation.",
    overviewExtra:
      "Fokus på produktpræsentation, tekniske specifikationer og troværdighed.",
    designDescription:
      "Robust og industrielt inspireret design med stærk typografi og struktureret produktvisning.",
    developmentDescription:
      "Udviklet med fokus på SEO og strukturerede produktdata for bedre synlighed i søgemaskiner.",
  },

  {
    slug: "ukraine-hjaelpeprojekt",
    title: "Ukraine Hjælpeprojekt",
    subtitle: "Gratis website under krigen",
    heroImage: Ukraine,
    tags: ["Velgørenhed", "Webdesign"],
    client: "Ukraine Hjælpeprojekt",
    location: "Kyiv, Ukraine",
    services: ["Webdesign", "Informationsplatform"],
    technologies: ["Next.js", "Tailwind CSS"],
    overview:
      "Et velgørenhedsprojekt skabt for at dele verificeret information og støtte Ukraine under krigen.",
    overviewExtra:
      "Siden blev udviklet gratis og fokuserede på hurtig lancering og global tilgængelighed.",
    designDescription:
      "Stærkt og seriøst design med fokus på klar kommunikation og tydelig informationsstruktur.",
    developmentDescription:
      "Optimeret for høj performance og international adgang med fokus på stabilitet og hurtig indlæsning.",
  },
];