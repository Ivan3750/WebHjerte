import PageHero, { PrimaryLink, GhostLink } from "../../components/ui/PageHero";
import SectionHead from "../../components/ui/SectionHead";
import FormToLead from "../../components/ui/FormToLead";
import { FadeUp, RevealLines } from "../../components/home/fx/Reveal";
import { LandingLd, FaqSplit, CtaBand } from "../../components/landing/shared";
import LocalPack from "./_components/LocalPack";
import SeoWorkbench from "./_components/SeoWorkbench";
import SnippetDiff from "./_components/SnippetDiff";
import GrowthCurve from "./_components/GrowthCurve";

const path = "/seo-horsens";
const wrap = "max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24";

export const metadata = {
  title: "SEO i Horsens – lokal SEO og gratis SEO-tjek | WebHjerte",
  description:
    "Bliv fundet af kunder i Horsens: lokal SEO, Google Virksomhedsprofil, teknisk optimering og AI-synlighed. Start med et gratis SEO-tjek af din hjemmeside.",
  keywords: ["SEO Horsens", "SEO bureau Horsens", "lokal SEO Horsens", "horsens SEO", "søgemaskineoptimering Horsens"],
  alternates: { canonical: `https://www.webhjerte.dk${path}` },
  openGraph: {
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "WebHjerte – webbureau i Horsens" }],
    title: "SEO i Horsens – bliv fundet af lokale kunder | WebHjerte",
    description: "Lokal SEO og teknisk optimering til virksomheder i Horsens. Start med et gratis SEO-tjek.",
    url: `https://www.webhjerte.dk${path}`,
    type: "website",
  },
};

const faqs = [
  {
    q: "Hvad er SEO, og hvorfor har min virksomhed brug for det?",
    a: "SEO (søgemaskineoptimering) er arbejdet med at gøre din hjemmeside lettere at finde, når potentielle kunder søger på Google. Søger folk efter fx 'tømrer Horsens' eller 'frisør Horsens', er det de virksomheder, der er synlige i søgeresultaterne, som får henvendelserne.",
  },
  {
    q: "Kan I love mig en førsteplads på Google?",
    a: "Nej, og vær skeptisk over for alle, der gør det. Google bestemmer selv placeringerne. Det jeg kan gøre, er at sørge for, at din hjemmeside er teknisk i orden, har det rigtige indhold og er optimeret til lokale søgninger – så du har de bedste forudsætninger for at stige.",
  },
  {
    q: "Hvor lang tid går der, før SEO virker?",
    a: "Typisk begynder man at se bevægelse efter 2-3 måneder, og mere markante resultater kommer efter 6 måneder eller mere, afhængigt af konkurrencen og hvor din side starter fra.",
  },
  {
    q: "Hvad koster et SEO-tjek?",
    a: "Det første SEO- og web-tjek er gratis og uforpligtende. Du får et overblik over, hvad der virker, og hvad der bør rettes – uden binding.",
  },
  {
    q: "Skal jeg have en ny hjemmeside for at få gavn af SEO?",
    a: "Ikke nødvendigvis. Mange hjemmesider kan forbedres markant med de rigtige tekniske rettelser og nyt indhold. Er hjemmesiden derimod meget langsom eller forældet, kan en ny hjemmeside med SEO bygget ind være den hurtigste vej.",
  },
  {
    q: "Hvad er lokal SEO?",
    a: "Lokal SEO er søgemaskineoptimering til søgninger, hvor kunden leder efter noget i nærheden – “VVS Horsens”, “frisør Horsens”. Google viser typisk et kort med tre virksomheder og derefter de almindelige resultater. De vigtigste faktorer er relevans, afstand og prominens (hvor kendt og anmeldt du er).",
  },
];

const principles = [
  { k: "Relevans", t: "Passer din side til det, kunden søger? Det afgøres af dine ydelsessider, titler og tekst – og det kan jeg ændre." },
  { k: "Afstand", t: "Hvor tæt er du på kunden? Det kan ingen ændre, men en korrekt adresse og serviceområde sikrer, at Google forstår det." },
  { k: "Prominens", t: "Hvor kendt og anmeldt er du? Anmeldelser, en komplet Google-profil og konsistente oplysninger bygger tilliden." },
];


export default function SeoHorsensPage() {
  return (
    <>
      <LandingLd
        path={path}
        name="SEO Horsens"
        serviceType="Søgemaskineoptimering"
        description="Lokal SEO, teknisk optimering og AI-synlighed til virksomheder i Horsens. Start med et gratis SEO-tjek."
        faqs={faqs}
      />

      {/* 1. Hero med Googles lokale resultat */}
      <PageHero
        titleLines={["SEO i Horsens –", "bliv fundet af kunder,", "der søger efter dig"]}
        lead="Lokal SEO og teknisk optimering til virksomheder i Horsens. Jeg gør din side hurtig, korrekt opsat og relevant for de søgninger, dine kunder faktisk foretager – og starter med et gratis SEO-tjek."
        actions={
          <>
            <PrimaryLink href="/gratis-seo-tjek-horsens">Få et gratis SEO-tjek</PrimaryLink>
            <GhostLink href="#vaerksted">Se hvordan jeg arbejder</GhostLink>
          </>
        }
        aside={<LocalPack />}
      />

      {/* 2. Redaktionel: tallet 3 og de tre faktorer */}
      <section className="scene bg-[#f7f6f6]">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-24 items-center`}>
          <FadeUp>
            <p className="text-[clamp(120px,22vw,260px)] font-semibold leading-[0.85] tracking-tighter text-[#00a8e8]">3</p>
            <p className="mt-6 text-[clamp(22px,2.6vw,32px)] font-semibold leading-[1.2] tracking-tight text-[#1c1e1e] max-w-[18ch]">
              virksomheder får kortet. Resten ser kunden aldrig.
            </p>
            <p className="mt-5 text-[15px] text-[#5f5f5f] leading-[1.8] max-w-[44ch]">
              De fleste kunder til en lokal virksomhed starter med en søgning. Er du ikke blandt de første, vælger de en anden. Jeg fokuserer på søgninger, der fører til henvendelser – ikke på tomme besøgstal.
            </p>
          </FadeUp>
          <div className="border-t border-[#1c1e1e]/15">
            {principles.map((p, i) => (
              <FadeUp key={p.k} delay={i * 0.08} className="grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-10 py-7 border-b border-[#1c1e1e]/15">
                <span className="text-[13px] font-semibold text-[#00a8e8] tabular-nums pt-1.5">0{i + 1}</span>
                <div>
                  <p className="text-[clamp(22px,2.4vw,30px)] font-semibold text-[#1c1e1e] tracking-tight leading-none mb-3">{p.k}</p>
                  <p className="text-[15.5px] text-[#4a4a4a] leading-[1.75] max-w-[48ch]">{p.t}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Værkstedet – faner */}
      <section id="vaerksted" className="scene bg-[#1c1e1e] scroll-mt-20">
        <div className={wrap}>
          <SectionHead dark lines={["Fire ting, der flytter", "din placering"]} />
          <SeoWorkbench />
        </div>
      </section>

      {/* 4. Før/efter i Google */}
      <section className="scene bg-[#eceeee]">
        <div className={wrap}>
          <SectionHead lines={["De typiske fejl –", "og hvordan de ser ud i Google"]} maxW="max-w-[26ch]" />
          <SnippetDiff />
        </div>
      </section>

      {/* 5. Gratis tjek */}
      <CtaBand
        title={["Ikke sikker på, hvor", "du står i dag?"]}
        text="Du får en gratis gennemgang af hastighed, mobilvenlighed, tekniske fejl og synlighed – og et konkret billede af, hvad der bør prioriteres først."
        href="/gratis-seo-tjek-horsens"
        label="Start det gratis SEO-tjek"
        secondary={{ href: "/blog/seo-tjekliste-lokale-virksomheder", label: "Gå tjeklisten igennem" }}
      />

      {/* 6. Realistiske forventninger */}
      <section className="scene bg-[#e4f0f7]">
        <div className={`${wrap} grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-center`}>
          <div>
            <RevealLines lines={["Realistiske", "forventninger"]} className="font-semibold tracking-tight leading-[1.1] text-[clamp(24px,2.6vw,34px)] text-[#1c1e1e] mb-6" />
            <FadeUp as="p" delay={0.1} className="text-[16px] text-[#3a3a3a] leading-[1.8] mb-4 max-w-[46ch]">
              SEO er ikke en knap, man trykker på. Ingen kan love en bestemt placering på en bestemt dato.
            </FadeUp>
            <FadeUp as="p" delay={0.16} className="text-[16px] text-[#3a3a3a] leading-[1.8] max-w-[46ch]">
              Til gengæld kan en teknisk sund side med klare ydelsessider og en opdateret Google-profil typisk blive mere synlig over 2–6 måneder. Jeg fortæller dig ærligt, hvilke søgninger der er realistiske, og hvilke der kræver mere tid.
            </FadeUp>
          </div>
          <FadeUp className="rounded-3xl bg-white border border-[#d6e4ec] p-6 sm:p-9">
            <GrowthCurve />
            <p className="text-[12.5px] text-[#7a7a7a] mt-5">Illustration af et typisk forløb – ikke en garanti.</p>
          </FadeUp>
        </div>
      </section>

      {/* 7. FAQ */}
      <FaqSplit dark title={["Det, folk spørger om", "før de starter"]} faqs={faqs} />


      <FormToLead
        titleLine="Vil du ses af flere lokale kunder?"
        description="Skriv kort om din virksomhed og din nuværende hjemmeside – jeg svarer inden for 24 timer med en ærlig vurdering."
      />
    </>
  );
}
