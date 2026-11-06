import Link from "next/link";
import { FadeUp, RevealLines } from "../home/fx/Reveal";

/**
 * Fælles hero til indre sider: mørk, flad, med synlige brødkrummer.
 * titleLines kan indeholde JSX (fx <span className="text-[#00a8e8]">…</span>).
 */
export default function PageHero({
  breadcrumbs = [],
  eyebrow = null,
  titleLines,
  lead = null,
  actions = null,
  aside = null,
  size = "lg",
}) {
  const titleSize =
    size === "lg" ? "text-[clamp(26px,3.8vw,50px)]" : "text-[clamp(24px,3.2vw,42px)]";
  return (
    <section className="scene relative overflow-hidden bg-[#1c1e1e] border-b border-white/[0.06]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-60" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pt-6 sm:pt-8 pb-16 sm:pb-24">
        {breadcrumbs.length > 0 && (
          <nav aria-label="Brødkrummer" className="mb-10 sm:mb-14">
            <ol className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.12em] text-[#7a8787]">
              {breadcrumbs.map((b, i) => (
                <li key={b.label} className="flex items-center gap-2">
                  {b.href ? (
                    <Link href={b.href} className="hover:text-[#00a8e8] transition-colors py-1">
                      {b.label}
                    </Link>
                  ) : (
                    <span className="text-[#aeb9b9]" aria-current="page">
                      {b.label}
                    </span>
                  )}
                  {i < breadcrumbs.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className={aside ? "grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-16 items-center" : ""}>
          <div className="flex flex-col items-start">
            {eyebrow && (
              <FadeUp as="p" className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-5 flex items-center gap-3">
                <span className="w-8 h-px bg-[#00a8e8]" />
                {eyebrow}
              </FadeUp>
            )}
            <RevealLines
              as="h1"
              lines={titleLines}
              className={`text-white font-semibold tracking-tight leading-[1.08] ${titleSize} mb-6 max-w-[20ch]`}
            />
            {lead && (
              <FadeUp as="p" delay={0.15} className="text-[14px] sm:text-[15px] text-[#93a0a0] leading-[1.8] max-w-[54ch] mb-8">
                {lead}
              </FadeUp>
            )}
            {actions && (
              <FadeUp delay={0.25} className="flex flex-wrap items-center gap-3">
                {actions}
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
      className={`inline-flex items-center justify-center text-[13px] font-semibold text-white bg-[#00a8e8] hover:bg-white hover:text-[#1c1e1e] rounded-full px-6 py-3 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}

export function GhostLink({ href, children, className = "", light = false }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center text-[13px] font-medium rounded-full px-6 py-3 border transition-colors ${
        light
          ? "text-[#1c1e1e] border-[#dcdada] hover:border-[#00a8e8] hover:text-[#00a8e8]"
          : "text-white border-white/15 hover:border-white/40"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
