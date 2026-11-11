import Link from "next/link";
import { FadeUp } from "../home/fx/Reveal";

// Pakke til håndværkere og lokale servicevirksomheder: ikke bare en hjemmeside, men lokal synlighed.
// Vises under pakkerne på /services og på branchesiderne.
const features = [
  "Standard-hjemmeside (op til 8 sider)",
  "Opsætning og optimering af Google Business Profile",
  "Lokal SEO: sider for dine ydelser og byer",
  "Anmeldelses-flow: link, QR-kode og SMS-skabelon",
  "Search Console og Analytics sat op",
  "3 måneders vedligehold Standard inkluderet",
];

export const NICHE_PACKAGE_PRICE = "9.500";

export default function NichePackage({ className = "bg-[#e4f0f7]", trade = "håndværkere og lokale servicevirksomheder" }) {
  return (
    <section className={`scene ${className}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <FadeUp className="relative overflow-hidden rounded-3xl bg-[#1c1e1e] border border-[#00a8e8]/40 text-white p-7 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14">
          <span
            aria-hidden
            className="pointer-events-none absolute -top-32 -right-32 w-[380px] h-[380px] rounded-full bg-[#00a8e8]/20 blur-[90px]"
          />
          <div className="relative">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-[#00a8e8]" />
              Pakke til {trade}
            </p>
            <h2 className="font-semibold tracking-tight leading-[1.1] text-[clamp(24px,3vw,36px)] max-w-[20ch]">
              Lokal synlighed – <span className="text-[#00a8e8]">flere opkald fra dit område</span>
            </h2>
            <p className="mt-5 text-[14px] sm:text-[15px] leading-[1.8] text-[#93a0a0] max-w-[52ch]">
              Kunderne vælger den håndværker, de finder først på Google og kan stole på. Derfor får du ikke bare en
              hjemmeside, men det hele: Google-profil, lokale sider og et system, der samler anmeldelser ind.
            </p>
            <div className="mt-7 flex items-baseline gap-1.5">
              <span className="text-[13px] text-[#7f8c8c]">Fra</span>
              <span className="text-[clamp(30px,3vw,40px)] font-semibold tracking-tight leading-none">{NICHE_PACKAGE_PRICE}</span>
              <span className="text-[13px] text-[#7f8c8c]">DKK</span>
            </div>
            <p className="mt-1.5 text-[11px] text-[#7f8c8c]">inkl. moms · levering ca. 10 dage</p>
            <Link
              href="/kontakt?pakke=lokal-synlighed"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-[#00a8e8] hover:bg-white hover:text-[#1c1e1e] transition-colors px-6 py-3 text-[13px] font-semibold"
            >
              Få et tilbud på Lokal synlighed
            </Link>
          </div>

          <ul className="relative flex flex-col gap-3.5 lg:pt-2">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 rounded-2xl bg-white/[0.04] border border-white/10 px-4 py-3.5">
                <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 mt-[1px] bg-[#00a8e8]/15 border border-[#00a8e8]/40">
                  <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden>
                    <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[13.5px] leading-snug text-[#c9d3d3]">{f}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
