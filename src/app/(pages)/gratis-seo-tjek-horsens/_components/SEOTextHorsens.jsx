import { RevealLines } from "../../../components/home/fx/Reveal";
import SectionBody, { slugify } from "../../../components/seo/ContentBlocks";

const sections = [
  {
    h2: "Gratis SEO- og web-tjek i Horsens",
    paragraphs: [
      "Med et gratis SEO- og web-tjek får du en gennemgang af din hjemmeside og dens synlighed på Google. Jeg ser på teknisk SEO, indhold, hastighed og brugeroplevelse, så du tydeligt kan se, hvor siden klarer sig godt – og hvor der er potentiale.",
      "Tjekket er målrettet virksomheder i Horsens og Midtjylland, der ønsker flere henvendelser, bedre placeringer og en hjemmeside, der får besøgende til at tage kontakt.",
    ],
    visual: "seo",
  },
  {
    h2: "Det indeholder analysen",
    paragraphs: [
      "Jeg vurderer din hjemmeside ud fra de forhold, Google selv lægger vægt på, og sammenligner med, hvordan konkurrenterne i dit område klarer sig.",
    ],
    bullets: [
      "Teknisk SEO: struktur, indeksering og fejl",
      "Hastighed og Core Web Vitals (LCP, INP og CLS)",
      "Titler, beskrivelser og overskrifter",
      "Mobilvisning, tilgængelighed og brugeroplevelse",
      "Hvor godt siden får besøgende til at tage kontakt",
    ],
  },
  {
    h2: "Hvorfor lokal SEO betyder så meget",
    paragraphs: [
      "Lokal SEO handler om at blive fundet af kunder, der søger efter dine ydelser i dit område. Når nogen søger på fx “webdesign Horsens” eller “tømrer Horsens”, prioriterer Google virksomheder med tydelig lokal relevans.",
    ],
    visual: "localpack",
    callout: {
      tone: "tip",
      text: "Google Virksomhedsprofilen er ofte den hurtigste gevinst: rigtig kategori, åbningstider, billeder og nye anmeldelser kan flytte dig i kortresultaterne.",
    },
  },
  {
    h2: "Typiske fejl, jeg finder",
    paragraphs: ["Mange virksomheder har flotte hjemmesider, men mister kunder på grund af fejl, man ikke umiddelbart ser:"],
    compare: {
      bad: {
        title: "Det ser jeg ofte",
        items: [
          "Manglende lokal optimering – byen står ingen steder",
          "Langsom indlæsning på mobil",
          "Uklare knapper og kontaktmuligheder",
          "Tekniske fejl, der forhindrer korrekt indeksering",
          "Tekster, der ikke svarer på det, kunderne søger efter",
        ],
      },
      good: {
        title: "Det får du med",
        items: [
          "En prioriteret liste over de vigtigste rettelser",
          "Konkrete forslag, du selv kan bruge",
          "Et ærligt svar på, hvad der giver mest effekt",
          "Svar inden for 24 timer",
        ],
      },
    },
  },
  {
    h2: "Hvem er tjekket relevant for?",
    paragraphs: [
      "Små og mellemstore virksomheder i Horsens og omegn – håndværkere, klinikker, konsulenter, webshops og lokale servicevirksomheder, der ønsker flere kunder via Google.",
      "Uanset om din hjemmeside er ny eller har nogle år på bagen, giver en gennemgang et klart billede af, hvad der skal til for at blive mere synlig.",
    ],
    cta: { href: "/seo-horsens", label: "Læs om SEO i Horsens" },
  },
];

const SEOTextHorsens = () => (
  <section className="scene bg-[#f7f6f6]">
    <div className="readable max-w-[760px] mx-auto px-5 sm:px-10 py-16 sm:py-24 flex flex-col gap-16 sm:gap-20">
      {sections.map((s, idx) => (
        <article key={s.h2} id={slugify(s.h2)} className="scroll-mt-28">
          <div className="mb-6">
            <p className="text-[12px] tabular-nums text-[#00a8e8] mb-3 flex items-center gap-3">
              {String(idx + 1).padStart(2, "0")}
              <span className="w-10 h-px bg-[#00a8e8]/40" />
            </p>
            <RevealLines
              as="h2"
              lines={[s.h2]}
              className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.2] text-[clamp(22px,2.6vw,30px)] max-w-[26ch]"
            />
          </div>
          <SectionBody section={s} idx={idx} visual={s.visual || null} />
        </article>
      ))}
    </div>
  </section>
);

export default SEOTextHorsens;
