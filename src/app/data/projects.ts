import Pizzle from "../assets/cases/PizzleM.png";
import ClubHorse from "../assets/cases/ClubHorseM.png";
import Ukraine from "../assets/cases/UkraineW.png";
import Hireon from "../assets/cases/HireonM.png";
import Monolit from "../assets/cases/Vzlom.png";
import WorkOut from "../assets/cases/WorkOutM.png";
import { StaticImageData } from "next/image";

export type Stat = {
  value: string;
  label: string;
};

export type Project = {
  id: number,
  slug: string;
  title: string;
  subtitle: string;
  heroImage: StaticImageData | string;
  gallery: (StaticImageData | string)[];
  tags: string[];
  client: string;
  location: string;
  services: string[];
  technologies: string[];
  overview: string;
  overviewExtra: string;
  designDescription: string;
  developmentDescription: string;
  results: Stat[];
};
export const projects: Project[] = [
  {
    id:1,
    slug: "pizzaria",
    title: "Pizzaria website",
    subtitle: "Til lokal takeaway forretning",
    heroImage: Pizzle,
    gallery: [Pizzle, Pizzle, Pizzle, Pizzle],
    tags: ["Website design", "Development"],
    client: "Pizzaria",
    location: "Horsens, Danmark",
    services: ["Website design", "Frontend udvikling"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    overview:
      "Den lokale pizzaforretning i Horsens oplevede stigende konkurrence og høje gebyrer fra tredjepartsplatforme som Wolt og JustEat. Selvom efterspørgslen var høj, mistede virksomheden en stor del af fortjenesten på provisioner. Målet var at øge direkte online bestillinger via egen hjemmeside og skabe en stærkere lokal tilstedeværelse i Google.",
    overviewExtra:
      "Vi udviklede en konverteringsoptimeret og mobilvenlig hjemmeside med fokus på hurtig bestilling, tydelige call-to-actions og lokal SEO. Siden er optimeret til søgninger som 'Pizza Horsens' og 'Takeaway Horsens', hvilket skaber mere organisk trafik og flere direkte kunder uden mellemled.",
    designDescription:
      "Designet er udviklet med fokus på appetitvækkende produktbilleder, tydelige priser og et simpelt checkout-flow. Hver sektion er strategisk opbygget for at reducere friktion og øge konverteringsraten, så besøgende hurtigere bliver til betalende kunder.",
    developmentDescription:
      "Bygget med Next.js for maksimal performance og teknisk SEO. Vi implementerede strukturerede data, billedoptimering og hurtig server rendering for at sikre bedre placeringer i søgemaskiner og lavere bounce rate.",
    results: [
      { value: "+47%", label: "Flere online bestillinger" },
      { value: "-32%", label: "Mindre afhængighed af Wolt/JustEat" },
      { value: "2.1s", label: "Gennemsnitlig loadtid" },
      { value: "+61%", label: "Flere mobilbrugere konverterer" },
    ],
  },
  {
    id: 2,
    slug: "hireon",
    title: "Hireon",
    subtitle: "Platform til jobopslag og søgning",
    heroImage: Hireon,
    gallery: [Hireon, Hireon, Hireon, Hireon],
    tags: ["UX Design", "Webudvikling"],
    client: "Hireon",
    location: "Berlin, Tyskland",
    services: ["UX Research", "Webudvikling", "Produktdesign"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    overview:
      "Hireon havde en eksisterende platform, men lav brugeraktivitet og få oprettede profiler. Virksomheder modtog for få kvalificerede ansøgninger, og mange brugere forlod siden under onboarding-processen.",
    overviewExtra:
      "Vi analyserede hele brugerrejsen og redesignede onboarding-flowet for at reducere friktion og øge registreringer. Samtidig optimerede vi SEO-strukturen, så jobopslag rangerer højere i Google og genererer mere organisk trafik.",
    designDescription:
      "Minimalistisk og professionelt design med fokus på læsbarhed og tydelige filtre. UI’et er struktureret til at guide brugeren effektivt fra søgning til ansøgning, hvilket øger konverteringsraten.",
    developmentDescription:
      "Fullstack løsning med optimeret databasearkitektur og server-side rendering. Performanceforbedringer sikrer hurtig indlæsning og bedre brugeroplevelse på både desktop og mobil.",
    results: [
      { value: "+68%", label: "Flere oprettede profiler" },
      { value: "+54%", label: "Flere jobansøgninger" },
      { value: "-40%", label: "Reduceret bounce rate" },
      { value: "3x", label: "Flere aktive virksomheder" },
    ],
  },
  {
    id: 3,
    slug: "workout",
    title: "WorkOut",
    subtitle: "Fitness og træningsplaner",
    heroImage: WorkOut,
    gallery: [WorkOut, WorkOut, WorkOut, WorkOut],
    tags: ["UI Design", "Webudvikling"],
    client: "WorkOut",
    location: "Aarhus, Danmark",
    services: ["UI Design", "Frontend udvikling"],
    technologies: ["React", "Tailwind CSS"],
    overview:
      "WorkOut ønskede at øge salget af online træningsprogrammer i et konkurrencepræget fitnessmarked. Udfordringen var at differentiere brandet og øge konverteringen fra besøgende til betalende medlemmer.",
    overviewExtra:
      "Vi udviklede en salgsfokuseret struktur med klare medlemsfordele, sociale beviser og strategiske call-to-actions. SEO-optimering sikrer synlighed på søgninger relateret til online træningsprogrammer og fitness coaching.",
    designDescription:
      "Energisk og motiverende design med stærke kontraster og tydelig typografi. Layoutet guider brugeren gennem en salgsfunnel, der øger sandsynligheden for køb.",
    developmentDescription:
      "Optimeret frontend med fokus på mobil performance og hurtig navigation. Løsningen sikrer stabil drift og skalerbarhed ved stigende trafik.",
    results: [
      { value: "+73%", label: "Flere solgte medlemskaber" },
      { value: "+58%", label: "Flere gentagne køb" },
      { value: "2.4x", label: "Forbedret konverteringsrate" },
      { value: "+49%", label: "Mere organisk trafik" },
    ],
  },
  {
    id: 4,
    slug: "hesteklub",
    title: "Hesteklub",
    subtitle: "Hjemmeside og klubinformation",
    heroImage: ClubHorse,
    gallery: [ClubHorse, ClubHorse, ClubHorse, ClubHorse],
    tags: ["Website design", "Webudvikling"],
    client: "Hesteklub",
    location: "Vejle, Danmark",
    services: ["Website design", "CMS løsning"],
    technologies: ["Next.js", "Tailwind CSS"],
    overview:
      "Hesteklubben havde en forældet hjemmeside uden klar struktur, hvilket gjorde det svært for nye medlemmer at finde relevant information.",
    overviewExtra:
      "Vi skabte en SEO-optimeret og mobilvenlig hjemmeside, der rangerer på søgninger som 'Rideklub Vejle'. Fokus var at øge medlemsoptag og reducere administrative henvendelser.",
    designDescription:
      "Roligt og troværdigt design inspireret af natur og fællesskab. Informationsarkitekturen er opbygget for at gøre det nemt at finde hold, arrangementer og medlemsinformation.",
    developmentDescription:
      "CMS-løsning giver klubben mulighed for selv at opdatere indhold. Teknisk optimering sikrer hurtig loadtid og bedre synlighed i Google.",
    results: [
      { value: "+35%", label: "Flere nye medlemmer" },
      { value: "+82%", label: "Flere sidevisninger" },
      { value: "-45%", label: "Færre supporthenvendelser" },
      { value: "1.9s", label: "Loadtid" },
    ],
  },
  {
    id: 5,
    slug: "monolit",
    title: "Monolit",
    subtitle: "Salg af døre og pengeskabe",
    heroImage: Monolit,
    gallery: [Monolit, Monolit, Monolit, Monolit],
    tags: ["Produktkatalog"],
    client: "Monolit",
    location: "Aarhus, Danmark",
    services: ["Produktkatalog", "Webudvikling"],
    technologies: ["Next.js", "TypeScript"],
    overview:
      "Monolit ønskede flere kvalificerede B2B henvendelser og bedre synlighed på Google inden for sikkerhedsprodukter som døre og pengeskabe.",
    overviewExtra:
      "Vi implementerede SEO-strategi målrettet søgeord som 'Sikkerhedsdøre' og 'Pengeskabe erhverv', hvilket skaber flere organiske leads og højere troværdighed.",
    designDescription:
      "Robust og professionelt design der signalerer sikkerhed, kvalitet og ekspertise. Produktvisningen er struktureret for at gøre det nemt at anmode om tilbud.",
    developmentDescription:
      "Strukturerede produktdata og teknisk SEO forbedrer placeringer i søgemaskiner. Performanceoptimering sikrer hurtig indlæsning og lav bounce rate.",
    results: [
      { value: "+92%", label: "Flere B2B henvendelser" },
      { value: "+64%", label: "Organisk trafik" },
      { value: "Top 3", label: "Placering på vigtige søgeord" },
      { value: "+51%", label: "Flere produktforespørgsler" },
    ],
  },
  {
    id: 6,
    slug: "ukraine-hjaelpeprojekt",
    title: "Ukraine Hjælpeprojekt",
    subtitle: "Gratis website under krigen",
    heroImage: Ukraine,
    gallery: [Ukraine, Ukraine, Ukraine, Ukraine],
    tags: ["Velgørenhed", "Webdesign"],
    client: "Ukraine Hjælpeprojekt",
    location: "Kyiv, Ukraine",
    services: ["Webdesign", "Informationsplatform"],
    technologies: ["Next.js", "Tailwind CSS"],
    overview:
      "Projektet havde behov for hurtig lancering af en stabil og global informationsplatform under krigen. Høj performance og tilgængelighed var afgørende.",
    overviewExtra:
      "Vi udviklede en optimeret løsning med global caching og performanceforbedringer for at sikre stabil adgang fra hele verden.",
    designDescription:
      "Klar og seriøs visuel identitet med fokus på troværdighed og let tilgængelig information.",
    developmentDescription:
      "Optimeret hosting, performance og sikkerhed sikrer stabil drift selv under høj trafikbelastning.",
    results: [
      { value: "120K+", label: "Besøgende første måned" },
      { value: "28 lande", label: "International rækkevidde" },
      { value: "1.6s", label: "Loadtid globalt" },
      { value: "99.9%", label: "Oppetid" },
    ],
  },
];