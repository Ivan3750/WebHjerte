import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "../../../components/home/fx/Reveal";

const ACCENTS = ["#00a8e8", "#1f9d6b", "#c47a0a", "#6a6fd0"];

/**
 * Klassisk skiftevis layout (billede venstre/højre) – med nyt look:
 * store numre, rammer, tags og tydelige "Se projekt"-handlinger.
 */
export default function PortfolioRows({ projects }) {
  return (
    <section className="scene bg-[#f7f6f6]" aria-label="Udvalgte projekter">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-12 sm:py-16 flex flex-col gap-14 sm:gap-20">
        {projects.map((p, i) => {
          const flip = i % 2 === 1;
          const accent = ACCENTS[i % ACCENTS.length];
          return (
            <FadeUp key={p.slug}>
              <article className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center">
                <Link
                  href={`/portefolje/${p.slug}`}
                  aria-label={`Se projektet ${p.title}`}
                  className={`group relative block ${flip ? "md:order-2" : ""}`}
                >
                  <span
                    aria-hidden
                    className="absolute -inset-2 sm:-inset-3 rounded-[28px] sm:rounded-[34px] border border-[#dcdedf] transition-colors duration-500 group-hover:border-[#00a8e8]/60"
                  />
                  <div className="relative overflow-hidden rounded-[22px] sm:rounded-[28px] bg-[#1c1e1e] aspect-[16/11]">
                    <Image
                      src={p.heroImage}
                      alt={`${p.title} – ${p.subtitle}`}
                      fill
                      sizes="(min-width: 1024px) 560px, (min-width: 768px) 45vw, 100vw"
                      loading={i < 2 ? "eager" : "lazy"}
                      className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                    />
                    <span className="absolute top-3 left-3 sm:top-4 sm:left-4 rounded-full bg-[#1c1e1e]/85 backdrop-blur px-3 py-1.5 text-[10.5px] uppercase tracking-[0.14em] text-white">
                      Case {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      aria-hidden
                      className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-11 h-11 rounded-full bg-white text-[#1c1e1e] flex items-center justify-center transition-transform duration-500 group-hover:rotate-[-45deg] group-hover:scale-110"
                    >
                      →
                    </span>
                  </div>
                </Link>

                <div className={`flex flex-col gap-4 ${flip ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-4">
                    <span className="text-[clamp(40px,5vw,68px)] leading-none font-light tabular-nums" style={{ color: accent }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-[#dcdedf]" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-[10.5px] uppercase tracking-[0.1em] text-[#4a4f4f] border border-[#d6d8d9] bg-white rounded-full px-3 py-1.5">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-[clamp(22px,2.6vw,34px)] font-semibold text-[#1c1e1e] leading-[1.12] tracking-tight">
                    {p.title}
                    <span className="block mt-2 text-[clamp(14px,1.4vw,17px)] font-normal leading-snug text-[#6a6f6f]">{p.subtitle}</span>
                  </h2>

                  <p className="text-[14px] text-[#5a5f5f] leading-[1.8] line-clamp-4 max-w-[54ch]">{p.overview}</p>

                  <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                    {p.services.slice(0, 4).map((s) => (
                      <li key={s} className="flex items-center gap-2 text-[12.5px] text-[#3a3f3f]">
                        <span className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 bg-[#00a8e8]/12 border border-[#00a8e8]/30">
                          <svg width="8" height="8" viewBox="0 0 8 8" fill="none" aria-hidden>
                            <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/portefolje/${p.slug}`}
                    className="group/l mt-2 inline-flex items-center gap-2 w-fit text-[13px] font-semibold text-white bg-[#1c1e1e] hover:bg-[#00a8e8] rounded-full px-6 py-3 transition-colors"
                  >
                    Se projekt
                    <span className="transition-transform duration-300 group-hover/l:translate-x-1" aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
