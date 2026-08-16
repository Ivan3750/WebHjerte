import Image from "next/image";
import Link from "next/link";
import AnimatedInView from "../AnimatedInView";
import Ivan from "../../assets/Ivan.jpg"
const chips = ["Horsens-baseret", "Direkte kontakt", "Levering inden 14 dage"];

const AboutBlock = () => {
  return (
    <section className="bg-[#f7f6f6] border-t border-b border-[#e8e8e8] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[300px_1fr] gap-14 md:gap-16 items-center">

        <AnimatedInView as="div" className="w-full">
          <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-[#e0e0e0]">
            <Image src={Ivan} alt="Ivan - WebHjerte" fill className="object-cover object-center" />
          </div>
        </AnimatedInView>

        <div className="flex flex-col">
          <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#aaa] mb-4">
            Personen bag
          </AnimatedInView>

          <AnimatedInView as="h2" className="title text-[#1c1e1e] !leading-tight mb-5">
            Jeg hedder Ivan - manden bag WebHjerte
          </AnimatedInView>

          <AnimatedInView as="p" className="text-[14px] text-[#666] leading-[1.8] mb-7 max-w-lg">
            Ingen bureauer, ingen mellemled, ingen kedelige skabeloner. Bare
            mig, direkte dialog og en hjemmeside der rent faktisk virker for
            din forretning. Jeg har hjulpet lokale virksomheder i Horsens og
            Midtjylland med at gå fra usynlige til synlige online - og jeg
            tager mig personligt af hvert eneste projekt, fra første idé til
            lancering.
          </AnimatedInView>

          <AnimatedInView as="div" className="flex flex-wrap gap-2 mb-8">
            {chips.map((chip) => (
              <span
                key={chip}
                className="text-[11px] text-[#888] border border-[#e0e0e0] rounded-full px-3 py-1 bg-white"
              >
                {chip}
              </span>
            ))}
          </AnimatedInView>

          <AnimatedInView as="div">
            <Link
              href="/om-mig"
              className="text-[13px] text-[#1c1e1e] border-b border-[#1c1e1e] pb-px hover:text-[#00a8e8] hover:border-[#00a8e8] transition-colors inline-block"
            >
              Vil du vide mere om mig og min historie? →
            </Link>
          </AnimatedInView>
        </div>

      </div>
    </section>
  );
};

export default AboutBlock;