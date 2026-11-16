import Link from "next/link";
import { FadeUp } from "../../../components/home/fx/Reveal";

/** Prissammenligning som tabel (rækker = hvad du får), ikke som tre kort. Priser inkl. moms. */
const plans = [
  { key: "basis", name: "Basis", price: "3.500", href: "/kontakt?pakke=ai-seo-basis", cta: "Vælg Basis" },
  { key: "standard", name: "Standard", price: "6.500", href: "/kontakt?pakke=ai-seo-standard", cta: "Vælg Standard", popular: true },
  { key: "custom", name: "Skræddersyet", price: "12.000", prefix: "Fra", href: "/kontakt?pakke=ai-seo-skraeddersyet", cta: "Kontakt mig" },
];

// true = med, false = ikke med, tekst = detalje
const rows = [
  ["Nøgleordsanalyse", true, true, true],
  ["Teknisk SEO-grundlag", true, true, true],
  ["Google Business Profile", true, true, true],
  ["Indholdsoptimering", "10 elementer", "20 elementer", "Løbende"],
  ["Konkurrentanalyse", false, true, true],
  ["Månedlig rapportering", false, true, true],
  ["Komplet AI SEO-strategi", false, false, true],
  ["Konverteringsoptimering", false, false, true],
  ["Månedligt strategimøde", false, false, true],
  ["Support", "30 dage", "30 dage", "Prioriteret"],
  ["Levering", "14 dage", "21 dage", "Aftales"],
];

const Cell = ({ v, popular }) =>
  v === true ? (
    <span className="inline-flex w-6 h-6 rounded-full bg-[#00a8e8]/15 items-center justify-center" aria-label="Med">
      <svg width="11" height="11" viewBox="0 0 8 8" fill="none" aria-hidden>
        <path d="M1.5 4l2 2 3-3" stroke="#00a8e8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  ) : v === false ? (
    <span className="text-[#b9b7b7]" aria-label="Ikke med">–</span>
  ) : (
    <span className={`text-[14px] font-semibold ${popular ? "text-[#1c1e1e]" : "text-[#3a3a3a]"}`}>{v}</span>
  );

export default function PricingMatrix() {
  return (
    <FadeUp className="rounded-3xl bg-white border border-[#e8e6e6] overflow-x-auto">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <caption className="sr-only">Sammenligning af AI SEO-pakker. Priser inkl. moms.</caption>
        <thead>
          <tr>
            <th scope="col" className="p-5 sm:p-7 align-bottom w-[34%]">
              <span className="text-[13px] font-semibold text-[#7a7a7a]">Priser inkl. moms</span>
            </th>
            {plans.map((p) => (
              <th key={p.key} scope="col" className={`p-5 sm:p-7 align-bottom text-center ${p.popular ? "bg-[#1c1e1e]" : ""}`}>
                {p.popular && <span className="inline-block mb-2 text-[10.5px] font-semibold px-2 py-0.5 rounded-full bg-[#00a8e8] text-white">Mest valgt</span>}
                <span className={`block text-[15px] font-semibold ${p.popular ? "text-white" : "text-[#1c1e1e]"}`}>{p.name}</span>
                <span className={`block mt-1 ${p.popular ? "text-white" : "text-[#1c1e1e]"}`}>
                  {p.prefix && <span className="text-[12px] text-[#8a9696] mr-1">{p.prefix}</span>}
                  <span className="text-[clamp(24px,2.6vw,32px)] font-semibold tracking-tight">{p.price}</span>
                  <span className="text-[13px] text-[#8a9696] ml-1">kr</span>
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, ...vals]) => (
            <tr key={label} className="border-t border-[#ececec]">
              <th scope="row" className="px-5 sm:px-7 py-4 text-[14.5px] font-medium text-[#3a3a3a]">{label}</th>
              {vals.map((v, i) => (
                <td key={i} className={`px-5 sm:px-7 py-4 text-center ${plans[i].popular ? "bg-[#1c1e1e]/[0.04]" : ""}`}>
                  <Cell v={v} popular={plans[i].popular} />
                </td>
              ))}
            </tr>
          ))}
          <tr className="border-t border-[#ececec]">
            <td />
            {plans.map((p) => (
              <td key={p.key} className={`p-5 sm:p-7 text-center ${p.popular ? "bg-[#1c1e1e]/[0.04]" : ""}`}>
                <Link href={p.href} className={p.popular ? "btn-primary" : "btn-ghost btn-ghost-light"}>{p.cta}</Link>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </FadeUp>
  );
}
