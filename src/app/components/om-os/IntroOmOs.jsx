import Image from "next/image";
import Link from "next/link";
import AnimatedInView from "../AnimatedInView";
import Button from "../Button";


const chips = [
  "Next.js · React",
  "Tailwind CSS",
  "SEO",
  "Horsens-baseret",
  "Siden 2025",
];

const paragraphs = [
  "Jeg startede WebHjerte i 2025 fordi jeg så for mange lokale virksomheder med dårlige eller slet ingen hjemmesider - og vidste at jeg kunne hjælpe.",
  "Jeg arbejder direkte med dig fra første samtale til lancering. Ingen projektledere, ingen mellemled. Du ved altid hvem du taler med og hvad der sker.",
  "Jeg er ikke et stort bureau. Det er meningen. Små virksomheder fortjener den samme opmærksomhed som store kunder - og det er præcis hvad du får her.",
];

export default function IntroOmOs() {
  return (
    <>
      <section className="bg-[#f7f6f6] px-5 sm:px-10 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[320px_1fr] gap-16 items-start">

          <AnimatedInView as="div" className="relative">
            <div className="relative w-full aspect-[3/4] bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl overflow-hidden">
              {/* Skift til dit rigtige billede: */}
              {/* <Image src="/ivan.jpg" alt="Ivan – WebHjerte" fill className="object-cover object-top" /> */}

              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <circle cx="40" cy="32" r="18" fill="#2a2d2d" />
                  <ellipse cx="40" cy="72" rx="28" ry="18" fill="#2a2d2d" />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-center gap-2.5 px-4 py-3 bg-[#111313] border-t border-[#2a2d2d] rounded-b-2xl">
              <span className="w-2 h-2 rounded-full bg-[#00a8e8] flex-shrink-0" />
              <span className="text-[12px] text-[#6a6a6a]">
                <span className="text-[#e0e0e0] font-medium">Ivan</span>{" "}
                · Horsens, DK
              </span>
            </div>
          </AnimatedInView>

          <div className="flex flex-col pt-1">
            <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4">
              Om mig
            </AnimatedInView>

            <AnimatedInView as="h1" className="maintitle text-white !leading-tight mb-2">
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
                Se mine projekter →
              </Link>
            </AnimatedInView>
          </div>

        </div>
      </section>
    </>
  );
}
