import Image from "next/image";
import Link from "next/link";
import AnimatedInView from "../AnimatedInView";

const cases = [
  {
    name: "Køreskole Vejle",
    type: "Hjemmeside med booking",
    tag: "Køreskole · Vejle",
    concept: false,
    href: "https://korskolevejle.dk",
    image: null,
  },
  {
    name: "Lokal Café",
    type: "Webshop + menukort",
    tag: "Konceptprojekt",
    concept: true,
    href: "/portefolje/lokal-cafe",
    image: null,
  },
  {
    name: "Håndværker Horsens",
    type: "Leadgenerering · Hjemmeside",
    tag: "Konceptprojekt",
    concept: true,
    href: "/portefolje/haandvaerker-horsens",
    image: null,
    wide: true,
  },
];

const PlaceholderImage = ({ wide }) => (
  <div
    className={`w-full bg-[#242828] flex flex-col gap-3 p-5 ${
      wide ? "h-[200px]" : "h-[180px]"
    }`}
  >
    <div className="h-2.5 bg-[#0a3d52] rounded-full w-3/5" />
    <div className="h-2 bg-[#2e3333] rounded-full w-2/5" />
    <div className="h-8 bg-[#1e2424] rounded-lg" />
    <div className={`grid gap-2 ${wide ? "grid-cols-3" : "grid-cols-2"}`}>
      {Array.from({ length: wide ? 3 : 2 }).map((_, i) => (
        <div key={i} className="h-8 bg-[#1e2424] rounded-lg" />
      ))}
    </div>
    <div className="h-5 bg-[#0a3d52] rounded-full w-2/5" />
  </div>
);

const CasesSection = () => {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
              Udvalgte projekter
            </AnimatedInView>
            <AnimatedInView as="h2" className="maintitle text-white">
              Nyligt leveret
            </AnimatedInView>
          </div>
          <Link
            href="/portefolje"
            className="hidden sm:block text-xs text-[#5a5a5a] border-b border-[#2a2a2a] pb-0.5 hover:text-[#9a9a9a] hover:border-[#404040] transition-colors"
          >
            Se alle projekter →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {cases.map(({ name, type, tag, concept, href, image, wide }) => (
            <AnimatedInView
              key={name}
              as="div"
              className={`group bg-[#1c1e1e] border border-[#2a2d2d] hover:border-[#00a8e8] rounded-2xl overflow-hidden transition-colors ${
                wide ? "sm:col-span-2" : ""
              }`}
            >
              <div className="overflow-hidden">
                {image ? (
                  <Image
                    src={image}
                    alt={name}
                    width={1200}
                    height={wide ? 400 : 360}
                    className={`w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02] ${
                      wide ? "h-[200px]" : "h-[180px]"
                    }`}
                  />
                ) : (
                  <PlaceholderImage wide={wide} />
                )}
              </div>

              <div className="flex items-start justify-between gap-4 px-5 py-4">
                <div>
                  <span
                    className={`inline-block text-[10px] px-2.5 py-0.5 rounded-full border mb-2 ${
                      concept
                        ? "text-[#888] border-[#333]"
                        : "text-[#5a5a5a] border-[#2a2d2d]"
                    }`}
                  >
                    {tag}
                  </span>
                  <p className="text-[14px] font-medium text-[#e0e0e0]">{name}</p>
                  <p className="text-[12px] text-[#5a5a5a] mt-0.5">{type}</p>
                </div>

                <Link
                  href={href}
                  className="text-[12px] text-[#00a8e8] hover:opacity-70 transition-opacity whitespace-nowrap mt-[18px]"
                  target={concept ? undefined : "_blank"}
                  rel={concept ? undefined : "noopener noreferrer"}
                >
                  {concept ? "Se case →" : "Se live →"}
                </Link>
              </div>
            </AnimatedInView>
          ))}
        </div>

        <Link
          href="/portefolje"
          className="sm:hidden mt-6 block text-center text-xs text-[#5a5a5a] border-b border-[#2a2a2a] pb-0.5 w-fit mx-auto hover:text-[#9a9a9a] transition-colors"
        >
          Se alle projekter →
        </Link>
      </div>
    </section>
  );
};

export default CasesSection;
