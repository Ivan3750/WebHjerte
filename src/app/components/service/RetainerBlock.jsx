import Link from "next/link";
import AnimatedInView from "../AnimatedInView";

const features = [
  {
    name: "Opdateringer",
    desc: "Tekst, billeder og indhold holdes ajour",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1l1.5 3 3.5.5-2.5 2.5.5 3.5L7 9l-3 1.5.5-3.5L2 4.5 5.5 4 7 1z" stroke="#00a8e8" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Sikkerhed",
    desc: "SSL, backups og teknisk vedligehold",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M7 1.5L2 4v3c0 3 2.5 5 5 5.5C9.5 12 12 10 12 7V4L7 1.5z" stroke="#00a8e8" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Support",
    desc: "Svar inden for 24 timer på hverdage",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5" stroke="#00a8e8" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M2 9l2-2-2-2" stroke="#00a8e8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Månedlig rapport",
    desc: "Besøgstal, SEO og anbefalinger",
    icon: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <rect x="2" y="2" width="10" height="10" rx="2" stroke="#00a8e8" strokeWidth="1.2" />
        <path d="M4.5 7h5M4.5 5h3M4.5 9h4" stroke="#00a8e8" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const RetainerBlock = () => {
  return (
    <section className="bg-[#111313] border-t border-[#1e2020] px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Vedligeholdelse
        </AnimatedInView>
        <AnimatedInView as="h2" className="title text-white !leading-tight mb-2">
          Ro i maven - hver måned
        </AnimatedInView>
        <AnimatedInView as="p" className="text-[14px] text-[#5a5a5a] mb-10">
          Din side er altid opdateret, sikker og klar. Du behøver ikke tænke over det.
        </AnimatedInView>

        <AnimatedInView
          as="div"
          className="bg-[#1c1e1e] border border-[#2a2d2d] rounded-2xl p-8 flex flex-col md:flex-row gap-10 md:items-center"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 flex-1">
            {features.map(({ name, desc, icon }) => (
              <div key={name} className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-[#1a2a30] flex items-center justify-center flex-shrink-0 mt-0.5">
                  {icon}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[#e0e0e0] mb-0.5">{name}</p>
                  <p className="text-[11px] text-[#555] leading-[1.5]">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center text-center md:border-l md:border-[#2a2d2d] md:pl-10 shrink-0">
            <p className="text-[38px] font-medium text-white leading-none">1.500</p>
            <p className="text-[13px] text-[#5a5a5a] mt-1.5 mb-6">DKK / måned</p>
            <Link
              href="/kontakt"
              className="bg-[#00a8e8] hover:opacity-85 transition-opacity text-white text-[13px] font-medium px-5 py-2.5 rounded-xl whitespace-nowrap"
            >
              Tilføj til dit projekt
            </Link>
            <p className="text-[11px] text-[#3a3d3d] mt-3">
              Ingen binding · Opsig når som helst
            </p>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
};

export default RetainerBlock;
