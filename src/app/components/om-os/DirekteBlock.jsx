import AnimatedInView from "../AnimatedInView";

const advantages = [
  {
    name: "Ingen mellemled",
    desc: "Du skriver til mig - ikke til en receptionist der sender din besked videre til nogen der sender den videre igen.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2a3 3 0 100 6 3 3 0 000-6zM3 13c0-2.21 2.239-4 5-4s5 1.79 5 4" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Hurtigere beslutninger",
    desc: "Når du vil ændre noget, sker det - ikke efter tre interne møder og en godkendelsesrunde.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="6" stroke="#00a8e8" strokeWidth="1.3" />
        <path d="M8 5v3.5l2 2" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Fuld overblik",
    desc: "Jeg kender dit projekt fra dag et - du behøver ikke forklare konteksten igen hver gang du kontakter os.",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M2 8h12M2 5h8M2 11h10" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
];

const bureauRows = [
  "Projektleder modtager din besked",
  "Videresendes til en account manager",
  "Developer får briefing tredje hånd",
  "Svar inden for 3–5 hverdage",
];

const direkteRows = [
  "Du skriver direkte til Ivan",
  "Ivan løser det selv",
  "Ingen oversættelse, ingen tab",
  "Svar inden for 24 timer",
];

const CheckIcon = () => (
  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
    <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DirekteBlock = () => {
  return (
    <section className="bg-[#f7f6f6]  px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView as="p" className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
          Hvorfor direkte
        </AnimatedInView>
         <AnimatedInView as="h2" className="title text-white !leading-tight mb-12">
          Du taler altid <span className="text-[#00a8e8]">med mig</span>
        </AnimatedInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <AnimatedInView
            as="div"
            className="bg-[#f7f6f6] border  border-[#f7f6f6]]/40  rounded-2xl p-7 flex flex-col gap-7"
          >
            {advantages.map(({ name, desc, icon }) => (
              <div key={name} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#5e5f5f]/10  flex items-center justify-center flex-shrink-0 mt-0.5">
                  {icon}
                </div>
                <div>
                  <p className="text-[14px] font-medium text-[#5e5f5f] mb-1">{name}</p>
                  <p className="text-[12px] text-[#666] leading-[1.65]">{desc}</p>
                </div>
              </div>
            ))}
          </AnimatedInView>

          <AnimatedInView
            as="div"
            className="bg-[#f7f6f6] border  border-[#f7f6f6]]/40 rounded-2xl p-7 grid grid-cols-2 gap-px"
          >
            <div className="pr-7">
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-3">
                Stort bureau
              </p>
              <p className="text-[13px] font-medium text-[#4a4a4a] mb-4">
                Sådan ser det typisk ud
              </p>
              <div className="flex flex-col gap-2.5">
                {bureauRows.map((row) => (
                  <div key={row} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-[#333] bg-[#5e5f5f1a] flex-shrink-0" />
                    <span className="text-[12px] text-[#444]">{row}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pl-7 border-l border-[#2a2d2d]">
              <p className="text-[11px] uppercase tracking-[0.08em] text-[#5a5a5a] mb-3">
                WebHjerte
              </p>
              <p className="text-[13px] font-medium text-[#4a4a4a] mb-4 ">
                Sådan ser det ud her
              </p>
              <div className="flex flex-col gap-2.5">
                {direkteRows.map((row) => (
                  <div key={row} className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full border border-[#0a5a7a] bg-[#5e5f5f1a] flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    <span className="text-[12px] text-[#9a9a9a]">{row}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedInView>
        </div>
      </div>
    </section>
  );
};

export default DirekteBlock;
