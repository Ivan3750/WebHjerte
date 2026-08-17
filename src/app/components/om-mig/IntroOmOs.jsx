import Image from "next/image";
import Link from "next/link";
import AnimatedInView from "../AnimatedInView";
import Button from "../Button";
import Ivan from "../../assets/Ivan.jpg"

const chips = [
  "Next.js · React",
  "Tailwind CSS",
  "SEO",
  "Horsens-baseret",
  "Siden 2026",
];

const paragraphs = [
  "Jeg har altid været den, der skulle skille tingene ad for at forstå, hvordan de virker - og web har fanget mig, fordi det er en blanding af logik og kreativitet. Jeg kan lide, at et projekt starter som en idé på et stykke papir og ender som noget, rigtige mennesker bruger hver dag.",
  "Min baggrund er i webudvikling, hvor jeg har arbejdet med alt fra design til den tekniske opbygning bag kulisserne. Det betyder, at jeg ikke bare kan lave en flot forside - jeg forstår også, hvad der skal til, for at siden er hurtig, sikker og fungerer i mange år fremover.",
  "Det, jeg går allermest op i, er at forstå det menneske eller den virksomhed, jeg bygger for. Derfor starter jeg altid med spørgsmål, ikke skabeloner: Hvem er dine kunder? Hvad skal siden få dem til at gøre? Hvad kendetegner netop din virksomhed? Svarene former hele projektet.",
  "Jeg er ikke typen, der lover mere, end jeg kan holde. Siger jeg, at noget er klar tirsdag, er det klar tirsdag. Den slags pålidelighed betyder mere for mig end at imponere med buzzwords - det er det, kunder faktisk husker og anbefaler videre.",
];

export default function IntroOmOs() {
  return (
    <>
      <section className="bg-[#f7f6f6] px-5 sm:px-10 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[320px_1fr] gap-16 items-start">
          <AnimatedInView as="div" className="relative">
            <div className="relative w-full aspect-[3/4] bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl overflow-hidden">
              {/* Skift til dit rigtige billede: */}
              <Image src={Ivan} alt="Ivan – WebHjerte" fill className="object-cover object-су" />
               
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2.5 px-4 py-3 bg-[#111313] border-t border-[#2a2d2d] rounded-b-2xl">
              <span className="w-2 h-2 rounded-full bg-[#00a8e8] flex-shrink-0" />
              <span className="text-[12px] text-[#6a6a6a]">
                <span className="text-[#e0e0e0] font-medium">Ivan Kohan</span>{" "}
                · Horsens, DK
              </span>
            </div>
          </AnimatedInView>

          <div className="flex flex-col pt-1">
            <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4">
              Om mig
            </AnimatedInView>
            <AnimatedInView as="h1" className="maintitle text-[#1a1a1a] !leading-tight mb-2">
              Jeg hedder Ivan
            </AnimatedInView>
            <AnimatedInView as="p" className="text-[13px] text-[#5a5a5a] mb-8">
              Webudvikler · WebHjerte · Horsens
            </AnimatedInView>

            <div className="w-8 h-px bg-[#2a2d2d] mb-8" />

            <AnimatedInView as="div" className="flex flex-col gap-5 mb-8">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-[14px] text-[#7a7a7a] leading-[1.85]">
                  {p}
                </p>
              ))}
            </AnimatedInView>

            <AnimatedInView
              as="div"
              className="border-l-2 border-[#00a8e8] pl-4 mb-8"
            >
              <p className="text-[14px] text-[#5a5a5a] italic leading-[1.7]">
                &quot;Jeg tager ikke ti projekter ind på én gang. Jeg tager de projekter,
                jeg reelt kan give min fulde opmærksomhed.&quot;
              </p>
            </AnimatedInView>

            <AnimatedInView as="div" className="flex flex-wrap gap-2 mb-8">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="text-[11px] text-[#5a5a5a] border border-[#2a2d2d] rounded-full px-3 py-1"
                >
                  {chip}
                </span>
              ))}
            </AnimatedInView>

            <AnimatedInView as="div" className="flex items-center gap-5 flex-wrap">
              <Link href="/kontakt">
                <Button name="Book gratis samtale" />
              </Link>
              <Link
                href="/portefolje"
                className="text-[13px] text-[#5a5a5a] border-b border-[#2a2d2d] pb-px hover:text-[#9a9a9a] hover:border-[#404040] transition-colors"
              >
                Se mine projekter
              </Link>
            </AnimatedInView>
          </div>
        </div>
      </section>
    </>
  );
}