import {
  Brain,
  Palette,
  Monitor,
  Megaphone,
  BarChart3,
  PenTool,
} from "lucide-react";

const TilbydeSection = () => {
  return (
    <section className="bg-[#F7F6F6] py-24 px-5 sm:px-10 lg:px-20">
      <h2 className="text-4xl font-semibold text-center mb-16 text-[#5e5f5f]">
        Det tilbyder vi
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[220px] gap-6">
        <div className="lg:col-span-2 bg-[#1c1e1e] rounded-3xl p-8 flex flex-col justify-between shadow-md">
          <Brain size={36} className="text-[#0af]" />
          <div>
            <h3 className="text-2xl font-semibold text-white mb-2">
              Web-strategi
            </h3>
            <p className="text-gray-300 text-sm max-w-md">
              Klar struktur og retning for din hjemmeside, baseret på din
              forretning og dine mål.
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 bg-[#0af] rounded-3xl p-8 flex flex-col justify-between shadow-md">
          <Megaphone size={34} className="text-[#1c1e1e]" />
          <div>
            <h3 className="text-2xl font-semibold mb-2 text-[#1c1e1e]">
              Online synlighed
            </h3>
            <p className="text-[#003344] text-sm max-w-md">
              SEO og annoncering, der hjælper din virksomhed med at blive fundet
              online i Horsens og Midtjylland.
            </p>
          </div>
        </div>

        <div className="bg-[rgb(246_213_92)] rounded-3xl p-8 flex flex-col justify-between shadow-sm">
          <Palette size={32} className="text-[#1c1e1e]" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#1c1e1e]">
              UI & visuel identitet
            </h3>
            <p className="text-[#3a3200] text-sm">
              Et gennemført visuelt udtryk, der matcher dit brand og skaber
              genkendelighed.
            </p>
          </div>
        </div>

        <div className="bg-[#1c1e1e] rounded-3xl p-8 flex flex-col justify-between shadow-md">
          <Monitor size={32} className="text-[rgb(246_213_92)]" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              Websites
            </h3>
            <p className="text-gray-300 text-sm">
              Responsive hjemmesider bygget med fokus på brugervenlighed og
              stabil drift.
            </p>
          </div>
        </div>

        <div className="bg-[rgb(246_213_92)] rounded-3xl p-8 flex flex-col justify-between shadow-sm">
          <PenTool size={32} className="text-[#1c1e1e]" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#1c1e1e]">
              Content & tekster
            </h3>
            <p className="text-[#3a3200] text-sm">
              Tekster der formidler dit budskab klart og professionelt - både
              for mennesker og søgemaskiner.
            </p>
          </div>
        </div>

        <div className="bg-[#0af] rounded-3xl p-8 flex flex-col justify-between shadow-md">
          <BarChart3 size={32} className="text-[#1c1e1e]" />
          <div>
            <h3 className="text-xl font-semibold mb-2 text-[#1c1e1e]">
              Performance & drift
            </h3>
            <p className="text-[#003344] text-sm">
              Løbende vedligeholdelse og optimering, så din hjemmeside fungerer
              optimalt over tid.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TilbydeSection;
