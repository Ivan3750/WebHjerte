import Link from "next/link";
import { FadeUp, RevealLines } from "../home/fx/Reveal";

/**
 * Fælles hero til indre sider i WebHjertes egen stil: mørk baggrund, blå Unbounded-overskrift,
 * grå eyebrow og (valgfrit) nøgletal nederst ligesom på forsiden.
 * Brødkrummer vises ikke visuelt – de ligger som struktureret data på siderne.
 */
export default function PageHero({
  // eslint-disable-next-line no-unused-vars
  breadcrumbs = [],
  eyebrow = null,
  titleLines,
  lead = null,
  actions = null,
  aside = null,
  facts = null,
  size = "lg",
}) {
  const titleSize =
    size === "lg" ? "!text-[clamp(30px,4vw,52px)]" : "!text-[clamp(28px,3.4vw,44px)]";
  return (
    <section className="relative bg-[#1c1e1e]">
      <div className="relative max-w-6xl mx-auto px-5 sm:px-10 lg:px-16 pt-20 sm:pt-24 pb-20 sm:pb-24">
        <div className={aside ? "grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-16 items-center" : ""}>
          <div className="flex flex-col items-start">
            {eyebrow && (
              <FadeUp as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#8a8a8a] mb-5">
                {eyebrow}
              </FadeUp>
            )}
            <RevealLines
              as="h1"
              lines={titleLines}
              className={`maintitle !leading-[1.12] ${titleSize} mb-6 max-w-[22ch]`}
            />
            {lead && (
              <FadeUp as="p" delay={0.15} className="text-[14px] sm:text-[15px] text-[#a0a0a0] leading-[1.85] max-w-[54ch] mb-8">
                {lead}
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
                    <p className="text-[11px] text-[#8a8a8a] mt-2">{label}</p>
                  </div>
                ))}
              </FadeUp>
            )}
          </div>
          {aside && <FadeUp delay={0.2}>{aside}</FadeUp>}
        </div>
      </div>
    </section>
  );
}

export function PrimaryLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 text-[13px] font-medium text-[#111313] bg-[#00a8e8] hover:opacity-90 rounded-full pl-6 pr-2 py-2 transition-opacity ${className}`}
    >
      {children}
      <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7" aria-hidden>
        <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" />
      </svg>
    </Link>
  );
}

export function GhostLink({ href, children, className = "", light = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center text-[13px] font-medium rounded-full px-6 py-[13px] border transition-colors ${
        light
          ? "text-[#1c1e1e] border-[#dcdada] hover:border-[#00a8e8] hover:text-[#00a8e8]"
          : "text-[#e0e0e0] border-[#3a3d3d] hover:border-[#5a5d5d]"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
