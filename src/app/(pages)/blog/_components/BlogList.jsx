"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PostCard } from "../../../components/seo/RelatedCards";

/** Artikeloversigt med filter på emne. Første artikel vises stort, når "Alle" er valgt. */
export default function BlogList({ posts }) {
  const cats = useMemo(() => ["Alle", ...Array.from(new Set(posts.map((p) => p.category)))], [posts]);
  const [cat, setCat] = useState("Alle");
  const list = cat === "Alle" ? posts : posts.filter((p) => p.category === cat);
  const [first, ...rest] = list;
  const featured = cat === "Alle";

  return (
    <>
      <div role="tablist" aria-label="Filtrér efter emne" className="flex flex-wrap gap-2 mb-8 sm:mb-10">
        {cats.map((c) => {
          const on = c === cat;
          const count = c === "Alle" ? posts.length : posts.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              role="tab"
              aria-selected={on}
              onClick={() => setCat(c)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-medium transition-colors ${
                on ? "bg-[#1c1e1e] border-[#1c1e1e] text-white" : "bg-white border-[#e4e2e2] text-[#3a3d3d] hover:border-[#00a8e8] hover:text-[#00a8e8]"
              }`}
            >
              {c}
              <span className={`text-[11px] tabular-nums ${on ? "text-[#00a8e8]" : "text-[#9a9a9a]"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={cat}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {featured && first && (
            <div className="mb-4">
              <PostCard featured {...first} tag={first.category} index={0} />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(featured ? rest : list).map((post, i) => (
              <PostCard key={post.href} {...post} tag={post.category} index={featured ? i + 1 : i} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
