import Link from "next/link";
import SectionHead from "../../../components/ui/SectionHead";
import { FadeUp } from "../../../components/home/fx/Reveal";
import { supportPlans, supportTerms } from "../../../data/supportPlans";

const Tick = ({ dark }) => (
  <span
    className={`w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-[1px] ${
      dark ? "bg-[#00a8e8]/15 border border-[#00a8e8]/40" : "bg-[#00a8e8]/10 border border-[#00a8e8]/30"
    }`}
  >
    <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden>
      <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

// Vedligeholdelsesabonnementer – samme kortdesign som pakkerne, men på mørk baggrund
const SupportTariffsBlock = () => {
  return (
    <section id="vedligeholdelse" className="scene bg-[#1c1e1e] scroll-mt-[80px]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <SectionHead
          dark
          eyebrow="Vedligeholdelse efter lancering"
          lines={["Din hjemmeside,", "passet hver måned"]}
          lead="De første 30 dage er support med i prisen. Derefter kan du vælge et abonnement, så hosting, opdateringer og små rettelser bare kører – uden binding."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {supportPlans.map(({ id, name, price, popular, tagline, features }, i) => (
            <FadeUp key={id} delay={i * 0.07} className="h-full">
              <div
                className={`relative h-full rounded-3xl p-6 sm:p-7 flex flex-col gap-6 border transition-transform duration-500 hover:-translate-y-1 ${
                  popular ? "bg-white border-white text-[#1c1e1e]" : "bg-white/[0.03] border-white/10 text-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 min-h-[26px]">
                    <p className="text-[15px] font-semibold">{name}</p>
                    {popular && (
                      <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-[#00a8e8] text-white">
                        Mest valgt
                      </span>
                    )}
                  </div>
                  <p className={`mt-1 text-[12.5px] ${popular ? "text-[#6a6a6a]" : "text-[#8795a0]"}`}>{tagline}</p>
                  <div className="flex items-baseline gap-1.5 mt-4">
                    <span className="text-[clamp(26px,2.4vw,32px)] font-semibold tracking-tight leading-none whitespace-nowrap">
                      {price}
                    </span>
                    <span className={`text-[13px] ${popular ? "text-[#8a8a8a]" : "text-[#7f8c8c]"}`}>DKK / md</span>
                  </div>
                  <p className={`mt-1.5 text-[11px] ${popular ? "text-[#8a8a8a]" : "text-[#7f8c8c]"}`}>inkl. moms</p>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Tick dark={!popular} />
                      <span className={`text-[13px] leading-snug ${popular ? "text-[#5a5a5a]" : "text-[#b4bebe]"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/kontakt?pakke=vedligehold-${id}`}
                  className={`w-full py-3 rounded-full text-[13px] font-semibold text-center transition-colors ${
                    popular
                      ? "bg-[#00a8e8] text-white hover:bg-[#1c1e1e]"
                      : "border border-white/15 text-white hover:bg-[#00a8e8] hover:border-[#00a8e8]"
                  }`}
                >
                  Vælg {name}
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-6 rounded-3xl border border-dashed border-white/15 p-6 sm:p-8">
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#00a8e8] mb-4">Vilkår</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2.5">
            {supportTerms.map((t) => (
              <li key={t} className="text-[13px] text-[#93a0a0] leading-relaxed flex gap-2.5">
                <span aria-hidden className="text-[#00a8e8]">·</span>
                {t}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
};

export default SupportTariffsBlock;
