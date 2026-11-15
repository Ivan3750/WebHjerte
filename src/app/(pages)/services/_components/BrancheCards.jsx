import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "../../../components/home/fx/Reveal";
import { ArrowBadge } from "../../../components/ui/ArrowIcon";
import RenServ from "../../../assets/cases/renserv.jpg";
import Pizzle from "../../../assets/cases/PizzleM.png";
import ImprovePhysio from "../../../assets/cases/improvephysio.jpg";
import VEKA from "../../../assets/cases/VEKA.png";
import Monolit from "../../../assets/cases/Vzlom.png";
import Lønbæks from "../../../assets/cases/lønbæks.jpg";

/**
 * Brancher som store kort med rigtige billeder fra mine egne projekter – ikke tegninger.
 * Hvert kort viser et konkret eksempel og fører videre til branchesiden.
 */
const cards = [
  { href: "/hjemmeside-til-haandvaerkere", title: "Håndværkere", text: "Vis dine ydelser og dit område, og gør det nemt at ringe eller bede om et tilbud.", img: VEKA, example: "VEKA" },
  { href: "/hjemmeside-til-restauranter", title: "Restauranter", text: "Menu, booking og online bestilling – så du ikke betaler Wolt for dine egne kunder.", img: Pizzle, example: "Pizzaria" },
  { href: "/hjemmeside-til-saloner", title: "Saloner", text: "Tidsbestilling, priser og billeder, der sælger – klar til at blive delt på Instagram.", img: ImprovePhysio, example: "Improve Physio" },
  { href: "/hjemmeside-til-vvs", title: "VVS", text: "Flere opkald og akutte henvendelser fra kunder i dit område.", img: RenServ, example: "RenServ" },
  { href: "/hjemmeside-til-elektriker", title: "Elektrikere", text: "Vis autorisationer og referencer, og få flere tilbudsforespørgsler.", img: Monolit, example: "Monolit" },
  { href: "/hjemmeside-til-tomrer", title: "Tømrere", text: "Vis færdige projekter, og bliv fundet af både private og erhverv.", img: Lønbæks, example: "Lønbæks Køreskole" },
];

const lower = (t) => (t === "VVS" ? t : t.toLowerCase());

export default function BrancheCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {cards.map((c, i) => (
        <FadeUp key={c.href} delay={(i % 3) * 0.08}>
          <Link
            href={c.href}
            className="group block h-full rounded-3xl bg-[#242828] border border-white/10 p-3 sm:p-4 transition-all duration-500 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#00a8e8]"
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#1c1e1e]">
              <Image
                src={c.img}
                alt={`Eksempel på en hjemmeside til ${lower(c.title)}: ${c.example}`}
                fill
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />
              <span className="absolute left-3 bottom-3 rounded-full bg-[#1c1e1e]/85 backdrop-blur px-3 py-1.5 text-[11.5px] text-white">
                Fra mine projekter: {c.example}
              </span>
            </div>
            <div className="px-3 sm:px-4 pt-6 pb-4 flex flex-col gap-3">
              <h3 className="text-[19px] font-semibold text-white leading-snug group-hover:text-[#00a8e8] transition-colors">{c.title}</h3>
              <p className="readable text-[15px] text-[#b4bdbd] leading-[1.7]">{c.text}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[12.5px] font-medium text-white/70 group-hover:text-white transition-colors">Se hjemmesider til {lower(c.title)}</span>
                <ArrowBadge tone="dark" />
              </div>
            </div>
          </Link>
        </FadeUp>
      ))}
    </div>
  );
}
