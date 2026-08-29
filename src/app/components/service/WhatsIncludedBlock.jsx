import AnimatedInView from "../../utils/AnimatedInView";

const included = [
  "Design og udvikling",
  "Responsivt design",
  "Teknisk SEO-grundlag",
  "SSL",
  "Test på mobil og desktop",
  "Lancering",
  "Direkte kontakt med udvikleren",
];

const extra = [
 "Betalte tredjepartstjenester",
  "Betalingsløsninger",
  "Specifikke premium-værktøjer",
  "Funktioner uden for projektets aftalte omfang",
];

const IncludedIcon = () => (
  <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
    <path
      d="M1.5 4l2 2 3-3"
      stroke="#00a8e8"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ExtraIcon = () => (
  <svg width="9" height="9" viewBox="0 0 8 8" fill="none">
    <path
      d="M2 4h4"
      stroke="#8a8a5a"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
  </svg>
);

export default function WhatsIncludedBlock() {
  return (
    <section className="bg-[#111313] px-5 sm:px-10 lg:px-20 pb-20 -mt-4">
      <div className="max-w-6xl mx-auto">
        <AnimatedInView
          as="div"
          className="rounded-2xl border border-[#2a2d2d] bg-[#1c1e1e] overflow-hidden grid grid-cols-1 sm:grid-cols-2"
        >
          {/* Included */}
          <div className="p-8 sm:p-9 flex flex-col gap-5 sm:border-r border-[#2a2d2d]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#00a8e8] flex-shrink-0" />
              <p className="text-[13px] font-medium text-[#e0e0e0]">
                Alle projekter inkluderer
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-[#1a2a30] border border-[#0a4a60]">
                    <IncludedIcon />
                  </span>
                  <span className="text-[12.5px] text-[#9a9a9a]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Extra costs */}
          <div className="p-8 sm:p-9 flex flex-col gap-5 bg-[#1a1c1c]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#6a6a4a] flex-shrink-0" />
              <p className="text-[13px] font-medium text-[#e0e0e0]">
                Kan medføre ekstra omkostninger
              </p>
            </div>
            <div className="flex flex-col gap-3">
              {extra.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 bg-[#232319] border border-[#3a3a28]">
                    <ExtraIcon />
                  </span>
                  <span className="text-[12.5px] text-[#6a6a6a]">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[11px] text-[#4a4a4a] leading-[1.7] mt-1">
              Dette aftales altid tydeligt, før noget bliver bestilt - ingen skjulte tillæg.
            </p>
          </div>
        </AnimatedInView>
      </div>
    </section>
  );
}
