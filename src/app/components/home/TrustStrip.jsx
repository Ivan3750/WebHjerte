const stack = [
  "Next.js",
  "React",
  "WordPress",
  "Shopify",
  "Tailwind CSS",
  "Supabase",
  "Google Analytics",
  "Teknisk SEO",
  "AI-integration",
  "GDPR-klar",
  "Mobil først",
  "Hurtig hosting",
];

const TrustStrip = () => {
  return (
    <section className="scene bg-[#1c1e1e] border-t border-white/[0.06] relative">
      {/* Marquee */}
      <div
        className="marquee relative overflow-hidden py-6"
        style={{
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
          maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        }}
        aria-label="Teknologier og metoder jeg bruger"
      >
        <div className="marquee-track flex items-center gap-10">
          {[...stack, ...stack].map((s, i) => (
            <span
              key={i}
              aria-hidden={i >= stack.length}
              className="flex items-center gap-10 text-[13px] uppercase tracking-[0.16em] text-[#7a8787] whitespace-nowrap"
            >
              {s}
              <span className="w-1 h-1 rounded-full bg-[#00a8e8]/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
