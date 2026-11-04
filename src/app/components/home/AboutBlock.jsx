import Image from "next/image";
import Link from "next/link";
import Ivan from "../../assets/Ivan.jpg";
import { FadeUp, RevealLines } from "./fx/Reveal";

const chips = ["Horsens-baseret", "Direkte kontakt", "Levering inden 14 dage"];

const quote = {
  text: "Vi kan varmt anbefale Ivan! Han arbejder professionelt og hurtigt, kommer med nyttige anbefalinger og har tålmodighed med vores kaotiske ideer. Nem og behagelig kommunikation.",
  name: "Vasyl",
  company: "VEKA Company",
};

const AboutBlock = () => {
  return (
    <section className="scene bg-white relative border-t border-[#eeecec]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-24 sm:py-32 grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 items-center">
        <FadeUp>
          <div className="relative w-full max-w-sm mx-auto lg:max-w-none aspect-[3/4] rounded-3xl overflow-hidden bg-[#e0e0e0] group">
            <Image
              src={Ivan}
              alt="Ivan - WebHjerte"
              fill
              sizes="(min-width: 1024px) 360px, 90vw"
              className="object-cover object-center transition-transform duration-[1400ms] group-hover:scale-105"
            />
            <div className="absolute inset-x-3 bottom-3 glass rounded-2xl px-4 py-3 flex items-center gap-3">
              <span className="relative flex w-2.5 h-2.5">
                <span className="pulse-ring absolute inset-0 rounded-full text-[#3ddc97]" />
                <span className="relative w-2.5 h-2.5 rounded-full bg-[#3ddc97]" />
              </span>
              <span className="text-[12px] text-white">Svarer inden for 24 timer</span>
            </div>
          </div>
        </FadeUp>

        <div className="flex flex-col">
          <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#8a8a8a] mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-[#00a8e8]" />
            Personen bag
          </FadeUp>

          <RevealLines
            lines={["Jeg hedder Ivan –", "manden bag WebHjerte"]}
            className="text-[#111313] font-semibold tracking-tight leading-[1.1] text-[clamp(26px,3.6vw,46px)] mb-6"
          />

          <FadeUp as="p" delay={0.1} className="text-[14px] sm:text-[15px] text-[#5f5f5f] leading-[1.85] mb-7 max-w-xl">
            Ingen bureauer, ingen mellemled, ingen kedelige skabeloner. Bare mig, direkte dialog og en hjemmeside der
            rent faktisk virker for din forretning. Jeg har hjulpet lokale virksomheder i Horsens og Midtjylland med at
            gå fra usynlige til synlige online - og jeg tager mig personligt af hvert eneste projekt, fra første ide til
            lancering.
          </FadeUp>

          <FadeUp delay={0.15} className="flex flex-wrap gap-2 mb-8">
            {chips.map((chip) => (
              <span key={chip} className="text-[11px] text-[#6a6a6a] border border-[#e4e2e2] rounded-full px-3.5 py-1.5 bg-[#f7f6f6]">
                {chip}
              </span>
            ))}
          </FadeUp>

          {/* Kundecitat */}
          <FadeUp delay={0.2}>
            <figure className="relative rounded-3xl bg-[#111313] p-6 sm:p-8 mb-8 overflow-hidden">
              <div aria-hidden className="aurora-blob w-56 h-56 bg-[#00a8e8] -top-20 -right-10 opacity-30" />
              <span className="relative text-[#00a8e8] text-5xl leading-none font-serif block mb-1">&ldquo;</span>
              <blockquote className="relative text-[14px] sm:text-[16px] text-white/90 leading-relaxed">
                {quote.text}
              </blockquote>
              <figcaption className="relative mt-5 flex items-center gap-3 text-[12px] text-[#8a9696]">
                <span className="w-8 h-8 rounded-full bg-[#00a8e8]/20 border border-[#00a8e8]/40 text-[#00a8e8] flex items-center justify-center text-[12px] font-semibold">
                  {quote.name[0]}
                </span>
                <span>
                  <span className="text-white/90 font-medium">{quote.name}</span> · {quote.company}
                </span>
              </figcaption>
            </figure>
          </FadeUp>

          <FadeUp delay={0.25}>
            <Link
              href="/om-mig"
              className="group inline-flex items-center gap-2 text-[13px] text-[#1c1e1e] border-b border-[#1c1e1e] pb-px hover:text-[#00a8e8] hover:border-[#00a8e8] transition-colors w-fit"
            >
              Vil du vide mere om mig og min historie?
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
};

export default AboutBlock;
