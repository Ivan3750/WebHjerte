import Link from "next/link";
import { FadeUp, RevealLines } from "../home/fx/Reveal";

/**
 * Fælles hero til indre sider i WebHjertes egen stil: mørk baggrund, blå Unbounded-overskrift,
 * og (valgfrit) nøgletal nederst ligesom på forsiden. Små eyebrow-labels over overskrifter bruges ikke længere.
 * Brødkrummer vises ikke visuelt – de ligger som struktureret data på siderne.
 */
export default function PageHero({
  // eslint-disable-next-line no-unused-vars
  breadcrumbs = [],
  // eslint-disable-next-line no-unused-vars
  eyebrow = null,
  titleLines,
  lead = null,
  actions = null,
  aside = null,
  facts = null,
  meta = null,
  below = null,
  size = "lg",
}) {
  // Overskriften skal kunne læses i ét blik: moderat størrelse og luft mellem linjerne
  const titleSize = "!text-[clamp(28px,3.4vw,44px)]";
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-60" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-48 right-[-8%] w-[560px] h-[560px] rounded-full bg-[#00a8e8]/[0.09] blur-[120px]"
      />
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-24">
        <div className={aside ? "grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-16 items-center" : ""}>
          <div className="flex flex-col items-start">
            <RevealLines
              as="h1"
              lines={titleLines}
              className={`maintitle !text-left !leading-[1.2] ${titleSize} mb-6 ${aside ? "max-w-[28ch]" : "max-w-[40ch]"}`}
            />
            {lead && (
              <FadeUp as="p" delay={0.15} className="readable text-[16px] sm:text-[17px] text-[#b4bdbd] leading-[1.75] max-w-[64ch] mb-8">
                {lead}
              </FadeUp>
            )}
            {meta && (
              <FadeUp delay={0.2} className="flex flex-wrap items-center gap-x-5 gap-y-2 mb-8 text-[12px] text-[#8a9696]">
                {meta}
              </FadeUp>
            )}
            {actions && (
              <FadeUp delay={0.25} className="flex flex-wrap items-center gap-3">
                {actions}
              </FadeUp>
            )}
            {facts?.length > 0 && (
              <FadeUp delay={0.3} className="flex flex-wrap gap-x-10 gap-y-5 mt-12">
                {facts.map(({ num, label }) => (
                  <div key={label}>
                    <p className="text-[20px] sm:text-[22px] font-semibold text-white leading-none">{num}</p>
                    <p className="text-[12.5px] text-[#b4bdbd] mt-2">{label}</p>
                  </div>
                ))}
              </FadeUp>
            )}
          </div>
          {aside && <FadeUp delay={0.2}>{aside}</FadeUp>}
        </div>
        {below && (
          <FadeUp delay={0.15} className="mt-12 sm:mt-16">
            {below}
          </FadeUp>
        )}
      </div>
    </section>
  );
}

export function PrimaryLink({ href, children, className = "" }) {
  return (
    <Link href={href} className={`btn-primary ${className}`}>
      {children}
    </Link>
  );
}

export function GhostLink({ href, children, className = "", light = false }) {
  return (
    <Link href={href} className={`btn-ghost ${light ? "btn-ghost-light" : ""} ${className}`}>
      {children}
    </Link>
  );
}
