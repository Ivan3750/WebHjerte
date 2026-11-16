import { FadeUp } from "../../../components/home/fx/Reveal";

/** Fra ti blå links til ét svar – tegnet som to paneler. */
export default function SearchShift() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-stretch">
      <FadeUp className="rounded-3xl bg-[#eceeee] p-7 sm:p-9">
        <p className="text-[13px] font-semibold text-[#7a7a7a] mb-5">Før: Google viser en liste</p>
        <ol className="flex flex-col gap-2.5">
          {Array.from({ length: 8 }, (_, i) => (
            <li key={i} className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${i === 5 ? "bg-white border border-[#00a8e8]/50" : "bg-white/60"}`}>
              <span className="w-5 text-[12px] font-semibold text-[#9a9a9a] tabular-nums">{i + 1}</span>
              <span className="flex-1 flex flex-col gap-1.5">
                <span className={`h-2 rounded-full ${i === 5 ? "bg-[#00a8e8] w-2/3" : "bg-[#cfcdcd] w-1/2"}`} />
                <span className="h-1.5 rounded-full bg-[#dcdada] w-5/6" />
              </span>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-[14.5px] text-[#4a4a4a] leading-[1.7]">Kunden klikker rundt og sammenligner selv.</p>
      </FadeUp>

      <span aria-hidden className="hidden md:flex items-center text-[#00a8e8] text-[32px]">→</span>

      <FadeUp delay={0.12} className="rounded-3xl bg-[#1c1e1e] p-7 sm:p-9 flex flex-col">
        <p className="text-[13px] font-semibold text-[#00a8e8] mb-5">Nu: AI giver ét svar</p>
        <div className="rounded-2xl bg-[#242828] border border-white/10 p-6 flex flex-col gap-4 flex-1 justify-center">
          <span className="h-2.5 rounded-full bg-white/80 w-11/12" />
          <span className="h-2.5 rounded-full bg-white/60 w-full" />
          <span className="h-2.5 rounded-full bg-white/60 w-4/5" />
          <span className="h-2.5 rounded-full bg-white/40 w-2/3" />
          <span className="h-2.5 rounded-full bg-white/30 w-5/6" />
          <span className="h-2.5 rounded-full bg-white/20 w-1/2" />
          <div className="pt-4 flex gap-2">
            <span className="rounded-full bg-[#00a8e8] text-white text-[12px] font-semibold px-3 py-1.5">dinvirksomhed.dk</span>
            <span className="rounded-full bg-white/10 text-[#b4bdbd] text-[12px] px-3 py-1.5">kilde 2</span>
          </div>
        </div>
        <p className="mt-6 text-[14.5px] text-[#b4bdbd] leading-[1.7]">Kunden får et svar – og de få kilder, AI stoler nok på til at nævne.</p>
      </FadeUp>
    </div>
  );
}
