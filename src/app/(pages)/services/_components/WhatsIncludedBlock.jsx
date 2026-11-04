import { FadeUp } from "../../../components/home/fx/Reveal";

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

export default function WhatsIncludedBlock() {
  return (
    <section className="scene bg-[#e4f0f7]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 pb-16 sm:pb-24">
        <FadeUp className="rounded-3xl bg-white border border-[#e8e6e6] overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="p-7 sm:p-10 flex flex-col gap-6 md:border-r border-b md:border-b-0 border-[#eeecec]">
            <p className="flex items-center gap-2.5 text-[14px] font-semibold text-[#1c1e1e]">
              <span className="w-2 h-2 rounded-full bg-[#00a8e8]" />
              Alle projekter inkluderer
            </p>
            <ul className="flex flex-col gap-3.5">
              {included.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 bg-[#00a8e8]/10 border border-[#00a8e8]/30">
                    <svg width="9" height="9" viewBox="0 0 8 8" fill="none" aria-hidden>
                      <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[13.5px] text-[#4a4a4a]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-7 sm:p-10 flex flex-col gap-6 bg-[#fbfaf9]">
            <p className="flex items-center gap-2.5 text-[14px] font-semibold text-[#1c1e1e]">
              <span className="w-2 h-2 rounded-full bg-[#c9a227]" />
              Kan medføre ekstra omkostninger
            </p>
            <ul className="flex flex-col gap-3.5">
              {extra.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 bg-[#c9a227]/10 border border-[#c9a227]/30">
                    <span className="w-2 h-[1.5px] bg-[#a8861a]" />
                  </span>
                  <span className="text-[13.5px] text-[#6a6a6a]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[12px] text-[#8a8a8a] leading-[1.7] mt-auto">
              Dette aftales altid tydeligt, før noget bliver bestilt - ingen skjulte tillæg.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
