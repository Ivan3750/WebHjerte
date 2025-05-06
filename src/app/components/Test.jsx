import { FaCheck } from "react-icons/fa";

const Test = () => {
  return (
    <div className="bg-[#1D1E1F] py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12">
        
        {/* Міні-блок Track */}
        <div className="bg-[#101213] border border-[#3A3B3C] rounded-2xl p-5 w-full md:max-w-sm shadow-lg">
          <p className="text-white text-sm font-unbounded mb-4">Projekt #239</p>

          <div className="flex flex-wrap gap-3 mb-5">
            {["Design", "Udvikling", "Feedback", "Færdig"].map((step, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-5 h-5 bg-[#FFD100] rounded-full flex items-center justify-center">
                  <FaCheck className="text-black text-xs" />
                </div>
                <span className="text-[#B3B1B1] text-xs">{step}</span>
              </div>
            ))}
          </div>

          <p className="text-[#4FA0F1] text-sm font-unbounded mb-4">Deadline: 3d 5t 12m</p>

          <div className="text-white text-xs font-unbounded leading-relaxed space-y-2 mb-4">
            <p><strong>Navn:</strong> Hjemmeside til butik</p>
            <p><strong>Detaljer:</strong> En moderne webshop med betaling og mobiltilpasning.</p>
            <p><strong>Pris:</strong> 3.500 DKK</p>
          </div>

          <div>
            <p className="text-white font-unbounded text-xs mb-2">Teknologi:</p>
            <div className="flex gap-2">
              {["React", "Tailwind", "Stripe"].map((tech, i) => (
                <div key={i} title={tech} className="w-6 h-6 bg-gray-600 rounded-full" />
              ))}
            </div>
          </div>
        </div>

        {/* Основний текст справа */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-5xl font-bold font-unbounded text-white mb-6 leading-tight">
            Følg med hele vejen
          </h2>
          <p className="text-[#B3B1B1] font-unbounded text-base md:text-lg leading-relaxed max-w-3xl">
            Med vores smarte sporingssystem kan du til enhver tid tjekke, hvor langt dit projekt er. Det skaber tryghed, transparens og ro i maven.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Test;
