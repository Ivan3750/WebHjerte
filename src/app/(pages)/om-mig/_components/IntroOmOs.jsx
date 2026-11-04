import Image from "next/image";
import PageHero, { PrimaryLink, GhostLink } from "../../../components/ui/PageHero";
import { FadeUp } from "../../../components/home/fx/Reveal";
import Ivan from "../../../assets/Ivan.jpg";

const chips = ["Next.js · React", "Tailwind CSS", "SEO", "Horsens-baseret", "Siden 2026"];

const paragraphs = [
  "Jeg har altid været den, der skulle skille tingene ad for at forstå, hvordan de virker - og web har fanget mig, fordi det er en blanding af logik og kreativitet. Jeg kan lide, at et projekt starter som en ide på et stykke papir og ender som noget, rigtige mennesker bruger hver dag.",
  "Min baggrund er i webudvikling, hvor jeg har arbejdet med alt fra design til den tekniske opbygning bag kulisserne. Det betyder, at jeg ikke bare kan lave en flot forside - jeg forstår også, hvad der skal til, for at siden er hurtig, sikker og fungerer i mange år fremover.",
  "Det, jeg går allermest op i, er at forstå det menneske eller den virksomhed, jeg bygger for. Derfor starter jeg altid med spørgsmål, ikke skabeloner: Hvem er dine kunder? Hvad skal siden få dem til at gøre? Hvad kendetegner netop din virksomhed? Svarene former hele projektet.",
  "Jeg er ikke typen, der lover mere, end jeg kan holde. Siger jeg, at noget er klar tirsdag, er det klar tirsdag. Den slags pålidelighed betyder mere for mig end at imponere med buzzwords - det er det, kunder faktisk husker og anbefaler videre.",
];

function Portrait() {
  return (
    <div className="relative w-full max-w-[380px] mx-auto lg:mx-0 lg:ml-auto">
      <div className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-[#141818] border border-white/10">
        <Image
          src={Ivan}
          alt="Ivan Kohan – webudvikler bag WebHjerte i Horsens"
          fill
          priority
          sizes="(min-width: 1024px) 380px, 80vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-x-3 bottom-3 glass glass-solid rounded-2xl px-4 py-3 flex items-center gap-3">
          <span className="relative flex w-2.5 h-2.5">
            <span className="pulse-ring absolute inset-0 rounded-full text-[#3ddc97]" />
            <span className="relative w-2.5 h-2.5 rounded-full bg-[#3ddc97]" />
          </span>
          <span className="text-[12px] text-[#9aa5a5]">
            <span className="text-white font-medium">Ivan Kohan</span> · Horsens, DK
          </span>
        </div>
      </div>
    </div>
  );
}

export default function IntroOmOs() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ href: "/", label: "Forside" }, { label: "Om mig" }]}
        eyebrow="Om mig"
        titleLines={["Jeg hedder Ivan", <span key="s" className="text-[#00a8e8]">– webudvikler i Horsens</span>]}
        lead="Direkte kontakt med den person, der bygger din hjemmeside – fra første samtale til lancering."
        actions={
          <>
            <PrimaryLink href="/kontakt">Book gratis samtale</PrimaryLink>
            <GhostLink href="/portefolje">Se mine projekter</GhostLink>
          </>
        }
        aside={<Portrait />}
        size="md"
      />

      <section className="scene bg-[#eceeee]">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-20 sm:py-28 grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20">
          <div className="lg:sticky lg:top-28 self-start">
            <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#00a8e8]" />
              Min tilgang
            </FadeUp>
            <FadeUp as="h2" delay={0.05} className="text-[#1c1e1e] font-semibold tracking-tight leading-[1.15] text-[clamp(24px,3.2vw,40px)] mb-7 max-w-[16ch]">
              Spørgsmål først – skabeloner bagefter
            </FadeUp>
            <FadeUp delay={0.1} className="flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span key={chip} className="text-[12px] text-[#4a4a4a] border border-[#e4e2e2] bg-[#f7f6f6] rounded-full px-3.5 py-1.5">
                  {chip}
                </span>
              ))}
            </FadeUp>
          </div>

          <div className="flex flex-col gap-6">
            {paragraphs.map((p, i) => (
              <FadeUp key={i} as="p" delay={0.03 * i} className="text-[15px] sm:text-[16px] text-[#4a4a4a] leading-[1.9]">
                {p}
              </FadeUp>
            ))}
            <FadeUp className="rounded-3xl bg-[#1c1e1e] p-7 sm:p-9 mt-4">
              <span className="text-[#00a8e8] text-5xl leading-none font-serif block mb-1" aria-hidden>
                &ldquo;
              </span>
              <p className="text-[16px] sm:text-[18px] text-white leading-[1.6]">
                Jeg tager ikke ti projekter ind på en gang. Jeg tager de projekter, jeg reelt kan give min fulde opmærksomhed.
              </p>
              <p className="mt-5 text-[12px] text-[#7f8c8c]">— Ivan, WebHjerte</p>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
