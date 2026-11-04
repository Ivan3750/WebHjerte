"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "../../../components/home/fx/Reveal";

const FILTERS = ["Alle", "Design", "Udvikling", "SEO"];

const categoriesOf = (p) => {
  const t = [...p.tags, ...p.services].join(" ").toLowerCase();
  const c = [];
  if (/design|ux|ui/.test(t)) c.push("Design");
  if (/udvikling|development|frontend|cms/.test(t)) c.push("Udvikling");
  if (/seo/.test(t)) c.push("SEO");
  return c;
};

export default function PortfolioGrid({ projects }) {
  const [filter, setFilter] = useState("Alle");
  const items = projects.map((p) => ({ ...p, cats: categoriesOf(p) }));

  return (
    <section className="scene bg-[#f7f6f6]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-14 sm:py-20">
        <div
          role="group"
          aria-label="Filtrér projekter"
          className="flex gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 sm:mx-0 sm:px-0 mb-10 sm:mb-14"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`shrink-0 text-[13px] rounded-full px-5 py-2.5 border transition-colors ${
                filter === f
                  ? "bg-[#111313] border-[#111313] text-white"
                  : "bg-white border-[#e4e2e2] text-[#4a4a4a] hover:border-[#00a8e8] hover:text-[#00a8e8]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-12 sm:gap-y-16">
          {items.map((p, i) => {
            const visible = filter === "Alle" || p.cats.includes(filter);
            return (
              <li key={p.slug} className={visible ? "" : "hidden"}>
                <FadeUp delay={(i % 2) * 0.08}>
                  <article className="group">
                    <Link
                      href={`/portefolje/${p.slug}`}
                      aria-label={`Se projektet ${p.title}`}
                      className="relative block overflow-hidden rounded-3xl border border-[#e8e6e6] bg-[#111313] aspect-[16/11]"
                    >
                      <Image
                        src={p.heroImage}
                        alt={`${p.title} – ${p.subtitle}`}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        loading={i < 2 ? "eager" : "lazy"}
                        className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
                      />
                      <span className="absolute top-4 left-4 glass glass-solid text-[10px] uppercase tracking-[0.14em] text-white rounded-full px-3 py-1">
                        Case {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        aria-hidden
                        className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white text-[#111313] flex items-center justify-center translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 max-md:opacity-100 max-md:translate-y-0"
                      >
                        ↗
                      </span>
                    </Link>

                    <div className="pt-5 px-1 flex flex-col gap-3">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((tag) => (
                          <span key={tag} className="text-[10px] uppercase tracking-[0.1em] text-[#5a5a5a] border border-[#e0dede] rounded-full px-2.5 py-1 bg-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-[20px] sm:text-[22px] font-semibold text-[#111313] leading-tight tracking-tight">
                        {p.title}
                        <span className="block text-[15px] sm:text-[16px] font-normal text-[#8a8a8a] mt-1">{p.subtitle}</span>
                      </h2>
                      <p className="text-[13.5px] text-[#6a6a6a] leading-[1.75] line-clamp-3">{p.overview}</p>
                      <Link
                        href={`/portefolje/${p.slug}`}
                        className="group/l inline-flex items-center gap-2 text-[13px] font-medium text-[#111313] hover:text-[#00a8e8] w-fit py-1 transition-colors"
                      >
                        Se projekt
                        <span className="transition-transform duration-300 group-hover/l:translate-x-1" aria-hidden>→</span>
                      </Link>
                    </div>
                  </article>
                </FadeUp>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
