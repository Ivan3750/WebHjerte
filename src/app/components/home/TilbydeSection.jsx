import Link from "next/link";
import AnimatedInView from "../AnimatedInView";

const MonitorIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="4" width="16" height="11" rx="2" stroke="#00a8e8" strokeWidth="1.4" />
    <path d="M7 18h6M10 15v3" stroke="#00a8e8" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const ShopIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M3 5h14M3 5a1 1 0 01-1-1V3a1 1 0 011-1h14a1 1 0 011 1v1a1 1 0 01-1 1M3 5v11a2 2 0 002 2h10a2 2 0 002-2V5"
      stroke="#00a8e8"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M8 10l1.5 1.5L12 9"
      stroke="#00a8e8"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const AIIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="3" stroke="#00a8e8" strokeWidth="1.4" />
    <path
      d="M10 2v2M10 16v2M2 10h2M16 10h2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"
      stroke="#00a8e8"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

const services = [
  {
    icon: <MonitorIcon />,
    name: "Hjemmeside",
    desc: "En hurtig, mobilvenlig hjemmeside der gør det nemt for kunder at finde og kontakte dig.",
  },
  {
    icon: <ShopIcon />,
    name: "Webshop",
    desc: "Sælg dine produkter online med en simpel og overskuelig webshop — klar til at tage imod ordrer.",
  },
  {
    icon: <AIIcon />,
    name: "AI-integration",
    desc: "Automatiser svar, booking eller support med en AI-løsning bygget ind direkte på din side.",
  },
];

const TilbydeSection = () => {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <AnimatedInView as="h2" className="title text-white !leading-tight">
            Hvad kan jeg hjælpe med? 
          </AnimatedInView>

          <Link
            href="/services"
            className="hidden sm:block text-xs text-[#5a5a5a] border-b border-[#2a2a2a] pb-0.5 hover:text-[#9a9a9a] hover:border-[#404040] transition-colors"
          >
            Se alle priser →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {services.map(({ icon, name, desc }) => (
            <AnimatedInView
              key={name}
              as="div"
              className="group bg-[#f7f6f6] border-2 border-[#f7f6f6]]/10   rounded-2xl p-6 flex flex-col gap-4 transition-colors"
            >
              <div className="w-10 h-10 bg-[#5e5f5f]/10 rounded-xl flex items-center justify-center shrink-0">
                {icon}
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <p className="text-[15px] font-medium text-[#5a5a5a] ">{name}</p>
                <p className="text-[13px] text-[#6a6a6a] leading-relaxed">{desc}</p>
              </div>

              <Link
                href="/services"
                className="text-xs text-[#00a8e8]  "
              >
                Se priser →
              </Link>
            </AnimatedInView>
          ))}
        </div>

        <Link
          href="/services"
          className="sm:hidden mt-6 block text-center text-xs text-[#5a5a5a] border-b border-[#2a2a2a] pb-0.5 w-fit mx-auto"
        >
          Se alle priser →
        </Link>
      </div>
    </section>
  );
};

export default TilbydeSection;
