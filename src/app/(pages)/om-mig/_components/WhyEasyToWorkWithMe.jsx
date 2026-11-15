import Link from "next/link";
import SectionHead from "../../../components/ui/SectionHead";
import { FadeUp } from "../../../components/home/fx/Reveal";
import BureauCompare from "../../../components/ui/BureauCompare";

export default function WhyEasyToWorkWithMe() {
  return (
    <section className="scene bg-[#1c1e1e]">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16 py-16 sm:py-24">
        <SectionHead
          dark
          lines={["Hvorfor give opgaven til mig", "og ikke til et bureau?"]}
          lead="Et bureau betyder møder, mellemled og ventetid. Her får du én person, der svarer samme dag, viser et udkast på 48 timer og står inde for resultatet."
          maxW="max-w-[26ch]"
        />

        <BureauCompare showRace />

        <FadeUp className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-14 sm:mt-20 pt-10 border-t border-white/10">
          <div>
            <p className="text-[16px] text-white font-medium mb-1">Klar til at se, hvor let det kan være?</p>
            <p className="text-[13px] text-[#7f8c8c]">Første samtale er gratis og uforpligtende.</p>
          </div>
          <Link
            href="/kontakt"
            className="inline-flex justify-center text-[14px] font-semibold text-white bg-[#00a8e8] hover:bg-white hover:text-[#1c1e1e] rounded-full px-8 py-3.5 transition-colors"
          >
            Book gratis samtale
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
