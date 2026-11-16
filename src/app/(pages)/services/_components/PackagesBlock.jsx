import Link from "next/link";
import SectionHead from "../../../components/ui/SectionHead";
import { FadeUp } from "../../../components/home/fx/Reveal";
import { packages } from "../../../data/packages";
import { ArrowIcon } from "../../../components/ui/ArrowIcon";

const TechLink = ({ href, children }) => (
  <Link href={href} className="group mt-3 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#00a8e8] hover:text-[#0092cb]">
    {children}
    <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
  </Link>
);

const Tick = ({ dark }) => (
  <span
    className={`w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-[1px] ${
      dark ? "bg-[#00a8e8]/15" : "bg-[#00a8e8]/10"
    }`}
  >
    <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden>
      <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);


const PackagesBlock = () => {
  return (
    <section className="scene bg-[#1c1e1e]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-10">
        <SectionHead
          dark
          eyebrow="Priser"
          lines={["Fast projektpris -", "ingen overraskelser"]}
          lead="Priserne er baseret på omfang — antal sider og funktioner. Alle priser er inkl. moms. Hvilken teknologi vi bygger i (fx WordPress, hvis du selv vil redigere bagefter), afklarer vi ud fra dit behov, se noten nedenfor."
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {packages.map(({ name, price, prefix, popular, cta, href, timing, changes, features }, i) => (
            <FadeUp key={name} delay={i * 0.07} className="h-full">
              <div
                className={`relative h-full rounded-3xl p-6 sm:p-7 flex flex-col gap-6 border transition-transform duration-500 hover:-translate-y-1 ${
                  popular ? "bg-[#242828] border-[#00a8e8]/60 text-white" : "bg-white/[0.03] border-white/10 text-white"
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
                  <div className="flex items-baseline gap-1.5 mt-4">
                    {prefix && <span className={`text-[13px] text-[#8a9696]`}>{prefix}</span>}
                    <span className={`text-[clamp(24px,2.6vw,34px)] font-semibold tracking-tight leading-none whitespace-nowrap`}>
                      {price}
                    </span>
                    <span className={`text-[13px] text-[#8a9696]`}>DKK</span>
                  </div>
                  <p className={`mt-1.5 text-[11px] text-[#8a9696]`}>inkl. moms</p>
                  <span className={`mt-4 inline-block text-[11px] px-2.5 py-1 rounded-md bg-white/10 text-[#b4bdbd]`}>
                    {timing}
                  </span>
                </div>

                <ul className="flex flex-col gap-3 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Tick dark />
                      <span className={`text-[13px] leading-snug text-[#b4bdbd]`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className={`rounded-2xl px-4 py-3 bg-white/[0.07]`}>
                  <p className={`flex items-center gap-2 text-[10.5px] uppercase tracking-[0.1em] text-[#8a9696]`}>
                    <svg width="13" height="13" viewBox="0 0 20 20" fill="none" aria-hidden>
                      <path d="M4 16l1-4L14 3l3 3-9 9-4 1z" stroke="#00a8e8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Ændringer på sitet
                  </p>
                  <p className="mt-1 text-[13px] font-semibold">
                    {changes === "Efter aftale" ? changes : `Inkluderet i ${changes}`}
                  </p>
                </div>

                <Link
                  href={href}
                  className={`w-full ${popular ? "btn-primary" : "btn-ghost"}`}
                >
                  {cta}
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp className="mt-6 rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-white/10 grid grid-cols-1 md:grid-cols-[auto_1fr_1fr] gap-6 md:gap-10 items-start">
          <div className="flex items-center gap-3 md:self-center">
            <span className="w-11 h-11 rounded-2xl bg-[#00a8e8] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
                <path d="M4 16l1-4L14 3l3 3-9 9-4 1z" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <p className="text-[15px] font-semibold text-white">Ændringer på sitet</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#00a8e8] mb-1.5">I supportperioden</p>
            <p className="text-[15px] text-[#b4bdbd] leading-relaxed">
              Mindre rettelser og justeringer af tekster, billeder og indhold er med i prisen, så længe supporten løber.
            </p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.14em] text-[#00a8e8] mb-1.5">Bagefter</p>
            <p className="text-[15px] text-[#b4bdbd] leading-relaxed">
              Vedligeholdelsesabonnement fra <strong className="text-white">249 til 799 DKK pr. måned</strong> (inkl. moms) til opdateringer, rettelser og mindre ændringer.
            </p>
          </div>
        </FadeUp>

        <FadeUp className="mt-6 rounded-3xl p-6 sm:p-8 bg-white/[0.03] border border-dashed border-white/15">
          <p className="text-[11px] uppercase tracking-[0.14em] text-[#00a8e8] mb-5">Hvilken teknologi bygger vi i?</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <p className="text-[13px] font-semibold text-white mb-1.5">Standard</p>
              <p className="text-[15px] text-[#b4bdbd] leading-relaxed">
                Skræddersyet kode. Bedst hastighed og sikkerhed. Dette får du, medmindre du vælger andet.
              </p>
              <TechLink href="/skraeddersyede-hjemmesider">Om skræddersyede hjemmesider</TechLink>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-white mb-1.5">Vil du selv redigere siden?</p>
              <p className="text-[15px] text-[#b4bdbd] leading-relaxed">
                Så bygger vi i WordPress i stedet — til samme pris. Skriv det i beskeden.
              </p>
              <TechLink href="/wordpress-hjemmeside">Om WordPress-hjemmesider</TechLink>
            </div>
            <div>
              <p className="text-[13px] font-semibold text-white mb-1.5">Andet ønske eller i tvivl?</p>
              <p className="text-[15px] text-[#b4bdbd] leading-relaxed">
                Arbejder du med Shopify, Webflow m.fl., eller ved du ikke hvad der passer? Skriv det i beskeden — vi rådgiver gratis.
              </p>
              <TechLink href="/kontakt">Spørg uforpligtende</TechLink>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default PackagesBlock;
