import Link from "next/link";
import AnimatedInView from "../../utils/AnimatedInView";

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

const SeoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="8.5" cy="8.5" r="5.5" stroke="#00a8e8" strokeWidth="1.4" />
    <path d="M16 16l-3.5-3.5" stroke="#00a8e8" strokeWidth="1.4" strokeLinecap="round" />
    <path d="M8.5 6v5M6 8.5h5" stroke="#00a8e8" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
);

const SupportIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 2a6 6 0 00-6 6v3a2 2 0 002 2h1v-5H4.5A5.5 5.5 0 0110 3.5 5.5 5.5 0 0115.5 8H13v5h1a2 2 0 002-2V8a6 6 0 00-6-6z"
      stroke="#00a8e8"
      strokeWidth="1.2"
    />
    <path d="M8 17a2 2 0 004 0" stroke="#00a8e8" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const DesignIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M4 16l1-4L14 3l3 3-9 9-4 1z"
      stroke="#00a8e8"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M11.5 5.5l3 3" stroke="#00a8e8" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const services = [
  {
    icon: <MonitorIcon />,
    name: "Hjemmeside",
    desc: "Taber du kunder, fordi din hjemmeside ser gammeldags ud eller slet ikke findes? Jeg bygger en hjemmeside, der får dig til at se professionel ud fra sekund et - og konverterer besøgende til kunder.",
  },
  {
    icon: <ShopIcon />,
    name: "Webshop",
    desc: "Klar til at sælge døgnet rundt - også mens du sover? Jeg bygger en webshop, der er nem at bruge for dine kunder og nem at administrere for dig. Ingen tekniske hovedpiner.",
  },
  {
    icon: <AIIcon />,
    name: "AI-integration",
    desc: "Forestil dig at aldrig gå glip af en kunde igen. Med AI der svarer, booker og hjælper automatisk, sparer du timer hver uge - og dine kunder får svar med det samme, 24/7.",
  },
  {
    icon: <SeoIcon />,
    name: "SEO-optimering",
    desc: "Den flotteste hjemmeside er værdiløs, hvis ingen finder den. Jeg optimerer din side, så du rangerer højere på Google og får flere kunder - helt organisk, uden dyre annoncer.",
  },
  {
    icon: <SupportIcon />,
    name: "Vedligeholdelse & support",
    desc: "Ingen stress, hvis noget går ned. Jeg holder øje med din side hver dag - sikkerhed, opdateringer og drift - så du altid kan fokusere 100% på din forretning.",
  },
  {
    icon: <DesignIcon />,
    name: "Design & branding",
    desc: "Første indtryk tæller. Jeg skaber et design, der får din virksomhed til at se seriøs, troværdig og unik ud - så kunderne vælger dig frem for konkurrenten.",
  },
];

const TilbydeSection = () => {
  return (
    <section className="py-24 px-6 sm:px-12 lg:px-20 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <AnimatedInView as="h2" className="title text-[#1a1a1a] !leading-tight">
            Hvad kan jeg hjælpe med?
          </AnimatedInView>

          <Link
            href="/services"
            className="hidden sm:block text-xs text-[#5a5a5a] border-b border-[#2a2a2a] pb-0.5 hover:text-[#9a9a9a] hover:border-[#404040] transition-colors"
          >
            Se alle priser
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {services.map(({ icon, name, desc }) => (
            <AnimatedInView
              key={name}
              as="div"
              className="group bg-[#f7f6f6] border-2 border-[#f7f6f6]/10 rounded-2xl p-6 flex flex-col gap-4 transition-colors"
            >
              <div className="w-10 h-10 bg-[#5e5f5f]/10 rounded-xl flex items-center justify-center shrink-0">
                {icon}
              </div>

              <div className="flex flex-col gap-2 flex-1">
                <p className="text-[15px] font-medium text-[#5a5a5a]">{name}</p>
                <p className="text-[13px] text-[#6a6a6a] leading-relaxed">{desc}</p>
              </div>
            </AnimatedInView>
          ))}
        </div>

        <Link
          href="/services"
          className="sm:hidden mt-6 block text-center text-xs text-[#5a5a5a] border-b border-[#2a2a2a] pb-0.5 w-fit mx-auto"
        >
          Se alle priser
        </Link>
      </div>
    </section>
  );
};

export default TilbydeSection;