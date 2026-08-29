import Link from "next/link";
import AnimatedInView from "../../utils/AnimatedInView";
import Button from "../../utils/Button";

export default function WordpressFordel() {
  return (
    <section className="bg-white px-5 sm:px-10 lg:px-20 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedInView
          as="p"
          className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4"
        >
          Fordelen ved WordPress
        </AnimatedInView>
        <AnimatedInView as="h2" className="maintitle text-[#1a1a1a] !leading-tight mb-14 max-w-2xl mx-auto">
          Skal du vente på en udvikler – eller gøre det selv?
        </AnimatedInView>

        {/* Ét billede, to sider */}
        <AnimatedInView
          as="div"
          className="grid grid-cols-1 sm:grid-cols-2 rounded-2xl overflow-hidden border border-[#eeecec]"
        >
          {/* Uden WordPress */}
          <div className="bg-[#f0efee] px-8 py-12 flex flex-col items-center gap-4">
            <div className="w-12 h-12 bg-[#dcdad9] rounded-full flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect x="5" y="11" width="14" height="9" rx="2" stroke="#9a9a9a" strokeWidth="1.6" fill="none" />
                <path
                  d="M8 11V8a4 4 0 018 0v3"
                  stroke="#9a9a9a"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <p className="text-[14px] font-medium text-[#7a7a7a]">
              Uden WordPress
            </p>
            <p className="text-[13px] text-[#9a9a9a] leading-relaxed max-w-[220px]">
              Du venter på et bureau for hver rettelse – og betaler for det.
            </p>
          </div>

          {/* Med WordPress */}
          <div className="relative bg-[#f7f6f6] px-8 py-12 flex flex-col items-center gap-4">
            <span className="absolute top-4 right-4 text-[9px] uppercase tracking-[0.08em] font-medium text-[#00a8e8] bg-[#00a8e8]/10 px-2.5 py-1 rounded-full">
              Sat op af WebHjerte
            </span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-[0_4px_14px_-6px_rgba(0,0,0,0.15)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 20l1-4L15 6l3 3L8 19l-4 1z"
                  stroke="#00a8e8"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>
            <p className="text-[14px] font-medium text-[#1a1a1a]">
              Med WordPress
            </p>
            <p className="text-[13px] text-[#6a6a6a] leading-relaxed max-w-[220px]">
              Du retter det selv, med det samme – vi har allerede sat det op.
            </p>
          </div>
        </AnimatedInView>

        <AnimatedInView as="div" className="mt-12 flex items-center gap-5 flex-wrap justify-center">
          <Link href="/kontakt">
            <Button name="Hør om WordPress passer til dig" />
          </Link>
          <Link
            href="/portefolje"
            className="text-[13px] text-[#5a5a5a] border-b border-[#2a2d2d] pb-px hover:text-[#9a9a9a] hover:border-[#404040] transition-colors"
          >
            Se eksempler
          </Link>
        </AnimatedInView>
      </div>
    </section>
  );
}