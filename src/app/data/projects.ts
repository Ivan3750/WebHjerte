import Pizzle from "../assets/cases/PizzleM.png";
import ClubHorse from "../assets/cases/ClubHorseM.png";
import Ukraine from "../assets/cases/UkraineW.png";
import Hireon from "../assets/cases/HireonM.png";
import Monolit from "../assets/cases/Vzlom.png";
import WorkOut from "../assets/cases/WorkOutM.png";
import Lønbæks from "../assets/cases/lønbæks.jpg";
import VEKA from "../assets/cases/VEKA.png";
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
    id: 1,
    slug: "pizzaria",
    title: "Pizzaria website",
    subtitle: "Fra afhængighed af Wolt til egne kunder",
    heroImage: Pizzle,
    gallery: [Pizzle, Pizzle, Pizzle, Pizzle],
    tags: ["Website design", "Development"],
    client: "Pizzaria",
    location: "Horsens, Danmark",
    services: ["Website design", "Web udvikling", "Lokal SEO"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    overview:
      "En travl pizzaforretning i Horsens tjente færre penge, jo mere de solgte. Wolt og JustEat tog op mod 30% i gebyr af hver eneste bestilling, og uden en ordentlig hjemmeside havde forretningen intet alternativ at sende kunderne hen til. Løsningen var klar: byg en hjemmeside, kunderne rent faktisk vil bestille direkte fra.",
    overviewExtra:
      "Vi byggede en hurtig, mobiloptimeret bestillingsside med minimal friktion – ingen unødvendige klik, ingen forvirring, bare mad bestilt på under et minut. Siden er samtidig skarpt optimeret til lokale søgninger som 'Pizza Horsens', så nye kunder finder frem uden at skulle igennem en app med gebyr på toppen.",
    designDescription:
      "Sultne øjne scroller hurtigt, så designet er bygget til at fange dem med det samme: lækre produktbilleder, tydelige priser og en bestillingsknap, der aldrig er langt væk. Hvert element er placeret for at fjerne tvivl og få flere til at gennemføre en bestilling i stedet for at forlade siden.",
    developmentDescription:
      "Bygget i Next.js for lynhurtig indlæsning, som holder på besøgende i stedet for at miste dem til en langsom side. Strukturerede data og billedoptimering sikrer, at Google forstår og prioriterer siden – vigtigt, når konkurrenterne betaler sig til synlighed på tredjepartsplatforme.",
    results: [
      { value: "+47%", label: "Flere online bestillinger" },
      { value: "-32%", label: "Mindre afhængighed af Wolt/JustEat" },
      { value: "2.1s", label: "Gennemsnitlig loadtid" },
      { value: "+61%", label: "Flere mobilbrugere konverterer" },
    ],
  },
  {
    id: 9,
    slug: "loenbaeks-koereskole",
    title: "Lønbæks Køreskole",
    subtitle: "Ikke det billigste kørekort – men det bedste",
    heroImage: Lønbæks,
    gallery: [Lønbæks, Lønbæks, Lønbæks],
    tags: ["Website design", "Webudvikling", "Lokal SEO"],
    client: "Lønbæks Køreskole",
    location: "Vejle, Danmark",
    services: ["Website design", "Frontend udvikling", "Lokal SEO"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    overview:
      "Lønbæks Køreskole i Vejle konkurrerer ikke på at være billigst – de konkurrerer på at gøre eleverne til rigtig gode og sikre bilister. Det budskab er svært at sælge, når hjemmesiden ligner alle andre køreskolers, og folk sammenligner udelukkende på pris.",
    overviewExtra:
      "Vi byggede en hjemmeside, der fortæller historien om, hvorfor grundig undervisning betaler sig i det lange løb – med en tydelig vej fra 'jeg overvejer at tage kørekort' til 'jeg har booket min første køretime'. Lokal SEO sikrer, at kommende elever i Vejle finder skolen, når de søger efter en køreskole.",
    designDescription:
      "Et trygt og imødekommende design, der signalerer erfaring og faglighed frem for rabatter. Holdstart, priser og kontaktinfo er placeret, hvor en nervøs førstegangselev leder efter dem.",
    developmentDescription:
      "En hurtig, mobilvenlig side bygget i Next.js, så unge elever – der næsten udelukkende browser fra telefonen – får en gnidningsfri oplevelse fra første besøg til booket køretime.",
    results: [
      { value: "+44%", label: "Flere bookede introtimer" },
      { value: "+39%", label: "Flere besøgende fra lokale søgninger" },
      { value: "-30%", label: "Færre opkald om basale spørgsmål" },
      { value: "1.8s", label: "Loadtid" },
    ],
  },
  {
    id: 2,
    slug: "hireon",
    title: "Hireon",
    subtitle: "Fra frafald til færdige ansøgninger",
    heroImage: Hireon,
    gallery: [Hireon, Hireon, Hireon, Hireon],
    tags: ["UX Design", "Webudvikling"],
    client: "Hireon",
    location: "Berlin, Tyskland",
    services: ["UX Research", "Webudvikling", "Produktdesign"],
    technologies: ["Next.js", "Node.js", "PostgreSQL"],
    overview:
      "Hireon havde trafik, men ingen brugere. Jobsøgende startede oprettelsen af deres profil og forsvandt igen midtvejs, og virksomhederne på platformen sad tilbage med for få kvalificerede ansøgere. Et klassisk tegn på, at problemet ikke var interesse – det var oplevelsen.",
    overviewExtra:
      "Vi kortlagde hele brugerrejsen trin for trin og fandt præcis, hvor folk gav op. Onboardingen blev skåret ned til det essentielle, og hver forladt session blev en indsigt, vi byggede videre på. Samtidig fik jobopslagene en SEO-struktur, der giver dem synlighed i Google i stedet for at drukne i platformens egne søgeresultater.",
    designDescription:
      "Et roligt, professionelt design, hvor intet konkurrerer om opmærksomheden unødigt. Filtrene er tydelige, og hvert skridt mod en ansøgning er så enkelt, at brugeren aldrig er i tvivl om, hvad næste klik gør.",
    developmentDescription:
      "En fuldstack-løsning bygget til at skalere, med en databasearkitektur der holder svartiderne lave, selv når trafikken stiger. Server-side rendering sikrer, at både brugere og søgemaskiner får siderne serveret hurtigt.",
    results: [
      { value: "+68%", label: "Flere oprettede profiler" },
      { value: "+54%", label: "Flere jobansøgninger" },
      { value: "-40%", label: "Reduceret bounce rate" },
      { value: "3x", label: "Flere aktive virksomheder" },
    ],
  },
  {
    id: 7,
    slug: "veka-center",
    title: "VEKA Center",
    subtitle: "Fra fabrik til færdigt vindue – uden mellemled",
    heroImage: VEKA, // TODO: erstat med rigtige billeder
    gallery: [
      "/images/cases/veka-placeholder.jpg",
      "/images/cases/veka-placeholder.jpg",
      "/images/cases/veka-placeholder.jpg",
    ],
    tags: ["Produktkatalog", "Webudvikling", "Leadgenerering"],
    client: "VEKA",
    location: "Kyiv, Ukraine",
    services: ["Website design", "Webudvikling", "Konfigurator", "SEO"],
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    overview:
      "VEKA producerer selv sine vinduer og døre, men det budskab druknede i et katalog med mange tekniske profilsystemer – Softline 82, Softline 76, WHS 72, VEKAMOTION og flere til. Besøgende, der ikke selv er fagfolk, havde svært ved at finde ud af, hvilken løsning der passede til netop deres bolig.",
    overviewExtra:
      "Vi byggede en side, der taler til både private kunder og erhvervskunder på én gang: et simpelt trin-for-trin-værktøj hjælper besøgende med at finde det rette vindue ud fra deres behov – støjdæmpning, indbrudssikring, energieffektivitet eller børneværelse – i stedet for at overvælde dem med tekniske specifikationer med det samme.",
    designDescription:
      "Et rent, tillidsvækkende design, der understreger at kunden køber direkte fra fabrikken – ingen mellemled, ingen skjulte tillæg. Produktsystemerne er visuelt adskilt, så både lægmand og fagperson hurtigt finder frem til det relevante.",
    developmentDescription:
      "Bygget i Next.js med fokus på hurtig indlæsning af produktbilleder og et interaktivt vejledningsværktøj, der guider besøgende til det rette valg. Strukturerede produktdata og teknisk SEO sikrer synlighed på søgninger som 'metalplastvinduer' og specifikke profilsystemer.",
    results: [
      { value: "+58%", label: "Flere henvendelser via vejledningsværktøjet" },
      { value: "+41%", label: "Organisk trafik" },
      { value: "-28%", label: "Færre irrelevante forespørgsler" },
      { value: "2.0s", label: "Loadtid" },
    ],
  },
  /* {
    id: 8,
    slug: "vitrazh",
    title: "VitraZH",
    subtitle: "Vinduer, døre og altaner – bestilt uden besvær",
    heroImage: "/images/cases/vitrazh-placeholder.jpg", // TODO: erstat med rigtige billeder
    gallery: [
      "/images/cases/vitrazh-placeholder.jpg",
      "/images/cases/vitrazh-placeholder.jpg",
      "/images/cases/vitrazh-placeholder.jpg",
    ],
    tags: ["Website design", "Webudvikling", "Kalkulator"],
    client: "VitraZH",
    location: "Kyiv, Ukraine",
    services: ["Website design", "Webudvikling", "Pris­kalkulator", "SEO"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    overview:
      "VitraZH sælger og monterer vinduer, døre og altaner i hele Kyiv-området, men uden en ordentlig hjemmeside skulle hver eneste pris forhandles over telefonen, og potentielle kunder faldt fra, før de nåede at bede om et tilbud.",
    overviewExtra:
      "Vi byggede en overskuelig hjemmeside med en indbygget priskalkulator, så kunder selv kan få en fornemmelse af prisen, før de tager kontakt – og en klar firetrins-proces, der viser præcis hvad der sker fra første henvendelse til færdig montering. Det sænker tærsklen for at tage det første skridt markant.",
    designDescription:
      "Et moderne og overskueligt design opdelt i tydelige kategorier – vinduer, vitrage-vinduer, altanpartier, ruller og gitre – så kunden hurtigt lander på det, de faktisk leder efter, uden at skulle bladre gennem irrelevante produkter.",
    developmentDescription:
      "En performanceoptimeret Next.js-løsning med en interaktiv kalkulator og et katalog, der er let at udvide efterhånden som produktsortimentet vokser. Strukturen er bygget til at skalere sammen med virksomheden.",
    results: [
      { value: "+64%", label: "Flere tilbudsforespørgsler" },
      { value: "+37%", label: "Brugere der gennemfører kalkulatoren" },
      { value: "-25%", label: "Kortere svartid på henvendelser" },
      { value: "2.2s", label: "Loadtid" },
    ],
  }, */
  {
    id: 3,
    slug: "workout",
    title: "WorkOut",
    subtitle: "Fra besøgende til betalende medlemmer",
    heroImage: WorkOut,
    gallery: [WorkOut, WorkOut, WorkOut, WorkOut],
    tags: ["UI Design", "Webudvikling"],
    client: "WorkOut",
    location: "Aarhus, Danmark",
    services: ["UI Design", "Frontend udvikling", "Konverteringsoptimering"],
    technologies: ["React", "Tailwind CSS"],
    overview:
      "Fitnessmarkedet er stopfyldt af aktører, der alle lover det samme. WorkOut havde et solidt træningsprodukt, men en hjemmeside, der ikke gav besøgende nogen god grund til at vælge netop dem frem for de næste tre faner i browseren.",
    overviewExtra:
      "Vi byggede en side, der ikke bare fortæller om produktet, men aktivt sælger det: tydelige medlemsfordele, sociale beviser og en salgsfunnel, der guider den besøgende hele vejen til køb. SEO-arbejdet sikrer samtidig, at siden dukker op, når folk rent faktisk leder efter et online træningsprogram.",
    designDescription:
      "Energisk, motiverende og skarpt kontrastfyldt – designet skal give lyst til at komme i gang, ikke bare informere. Hver sektion flytter den besøgende ét skridt tættere på et køb.",
    developmentDescription:
      "En optimeret frontend, hvor mobilperformance er i højsædet, fordi de fleste finder siden på telefonen. Løsningen er bygget til at holde, selv når kampagner sender ekstra trafik ind ad døren.",
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
    subtitle: "En hjemmeside, medlemmerne rent faktisk kan finde rundt i",
    heroImage: ClubHorse,
    gallery: [ClubHorse, ClubHorse, ClubHorse, ClubHorse],
    tags: ["Website design", "Webudvikling"],
    client: "Hesteklub",
    location: "Vejle, Danmark",
    services: ["Website design", "CMS løsning"],
    technologies: ["Next.js", "Tailwind CSS"],
    overview:
      "En forældet hjemmeside betød, at nye medlemmer ikke kunne finde hverken holdoversigt, priser eller kontaktinfo – og klubben endte med at bruge tiden på at besvare de samme spørgsmål i telefonen igen og igen.",
    overviewExtra:
      "Vi ryddede op i strukturen, så al information ligger, hvor man forventer den, og optimerede siden til søgninger som 'Rideklub Vejle'. Resultatet er en side, der arbejder for klubben døgnet rundt i stedet for at skabe ekstra arbejde.",
    designDescription:
      "Et roligt design med rødder i natur og fællesskab, hvor informationsarkitekturen er bygget, så både nye og nuværende medlemmer finder svar uden at skulle ringe eller skrive.",
    developmentDescription:
      "En CMS-løsning giver klubben fuld frihed til selv at opdatere hold, arrangementer og nyheder – uden at skulle vente på en udvikler. Teknisk optimering sikrer hurtig loadtid og bedre placering i Google.",
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
    subtitle: "Synlighed, der genererer B2B-henvendelser",
    heroImage: Monolit,
    gallery: [Monolit, Monolit, Monolit, Monolit],
    tags: ["Produktkatalog"],
    client: "Monolit",
    location: "Aarhus, Danmark",
    services: ["Produktkatalog", "Webudvikling", "SEO"],
    technologies: ["Next.js", "TypeScript"],
    overview:
      "Sikkerhedsdøre og pengeskabe er ikke noget, folk køber impulsivt – de søger, sammenligner og undersøger, før de tager kontakt. Uden synlighed på de rigtige søgeord gik Monolit glip af netop de kunder, der allerede var klar til at købe.",
    overviewExtra:
      "Vi målrettede indholdet mod konkrete søgeord som 'Sikkerhedsdøre' og 'Pengeskabe erhverv' og byggede en produktkatalog-struktur, der signalerer faglighed fra første sekund. Det giver flere organiske leads – uden at skulle betale for hver eneste klik.",
    designDescription:
      "Robust og professionelt, fordi et sikkerhedsprodukt skal se ud, som det kan holde til noget. Produktvisningen er skåret til, så det er ligetil at bede om et tilbud, uanset hvor i researchen kunden befinder sig.",
    developmentDescription:
      "Strukturerede produktdata gør det let for Google at forstå og fremhæve produkterne, mens performanceoptimering holder bounce rate nede – vigtigt, når B2B-kunder sjældent giver en langsom side en chance nummer to.",
    results: [
      { value: "+92%", label: "Flere B2B henvendelser" },
      { value: "+64%", label: "Organisk trafik" },
      { value: "Top 3", label: "Placering på vigtige søgeord" },
      { value: "+51%", label: "Flere produktforespørgsler" },
    ],
  },
/*   {
    id: 6,
    slug: "ukraine-hjaelpeprojekt",
    title: "Ukraine Hjælpeprojekt",
    subtitle: "En platform, der skulle holde, uanset hvad",
    heroImage: Ukraine,
    gallery: [Ukraine, Ukraine, Ukraine, Ukraine],
    tags: ["Velgørenhed", "Webdesign"],
    client: "Ukraine Hjælpeprojekt",
    location: "Kyiv, Ukraine",
    services: ["Webdesign", "Informationsplatform"],
    technologies: ["Next.js", "Tailwind CSS"],
    overview:
      "Under krigen var der ikke tid til en lang designproces – der var brug for en stabil, global informationsplatform, der virkede fra dag ét, uanset hvor i verden folk forsøgte at tilgå den, og uanset belastningen på internetforbindelserne i Ukraine.",
    overviewExtra:
      "Vi prioriterede hastighed og oppetid over alt andet. Global caching og en let, performanceoptimeret opbygning betyder, at siden svarer hurtigt, hvad enten den besøges fra Kyiv eller fra den anden side af kloden.",
    designDescription:
      "Et klart og seriøst udtryk, hvor information altid kommer før pynt. Alt er bygget til at være let at finde og let at forstå, også under pres.",
    developmentDescription:
      "Optimeret hosting og sikkerhed sikrer stabil drift, selv når trafikken pludselig stiger markant – en situation, siden var bygget til at kunne håndtere fra starten.",
    results: [
      { value: "120K+", label: "Besøgende første måned" },
      { value: "28 lande", label: "International rækkevidde" },
      { value: "1.6s", label: "Loadtid globalt" },
      { value: "99.9%", label: "Oppetid" },
    ],
  }, */
  
  
];