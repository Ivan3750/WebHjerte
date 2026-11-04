import Image from "next/image";
import Ivan from "../../assets/Ivan.jpg";

const details = [
  { label: "Kontakt", value: "Ivan Kohan" },
  { label: "CVR", value: "46485823" },
  { label: "Adresse", value: "Horsens, Midtjylland" },
  { label: "Telefon", value: "+45 42 76 05 77", href: "tel:+4542760577" },
];

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
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-8">
        <div className="glass rounded-2xl px-5 sm:px-7 py-5 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">
          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[#2a2d2d] ring-2 ring-[#00a8e8]/40">
              <Image
                src={Ivan}
                alt="Ivan Kohan, WebHjerte"
                fill
                sizes="48px"
                className="object-cover object-center"
              />
            </div>
            <p className="text-[13px] text-[#9aa5a5] leading-snug">
              Dit webbureau i Horsens.
              <br />
              <span className="text-white/90">Du taler direkte med mig.</span>
            </p>
          </div>

          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4 flex-1">
            {details.map(({ label, value, href }) => (
              <div key={label} className="flex flex-col gap-1">
                <dt className="text-[10px] uppercase tracking-[0.1em] text-[#617070]">{label}</dt>
                <dd className="text-[13px] text-[#e6eaea]">
                  {href ? (
                    <a href={href} className="hover:text-[#00a8e8] transition-colors">
                      {value}
                    </a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Marquee */}
      <div
        className="marquee relative overflow-hidden border-t border-white/[0.06] py-5"
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
