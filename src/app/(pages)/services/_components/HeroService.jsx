import PageHero, { PrimaryLink, GhostLink } from "../../../components/ui/PageHero";

const nodes = [
  { label: "Hjemmesider", pos: "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2", color: "#00a8e8" },
  { label: "Webshops", pos: "top-1/2 right-0 translate-x-[12%] -translate-y-1/2", color: "#3ddc97" },
  { label: "SEO", pos: "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2", color: "#f0a63a" },
  { label: "Vedligeholdelse", pos: "top-1/2 left-0 -translate-x-[12%] -translate-y-1/2", color: "#8a8ff0" },
];

function Orbit() {
  return (
    <div aria-hidden className="relative aspect-square w-full max-w-[380px] mx-auto">
      <div className="absolute inset-[8%] rounded-full border border-white/10" />
      <div className="absolute inset-[26%] rounded-full border border-dashed border-white/10" />

      <div className="absolute inset-[8%] orbit-spin">
        {nodes.map((n) => (
          <div key={n.label} className={`absolute ${n.pos}`}>
            <div className="orbit-counter flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#141818] border border-white/10 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: n.color }} />
              <span className="text-[11.5px] text-[#e6eaea] font-medium">{n.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-[110px] h-[110px] rounded-full bg-[#141818] border border-white/10">
        <span className="relative flex w-2.5 h-2.5 mb-2">
          <span className="pulse-ring absolute inset-0 rounded-full text-[#00a8e8]" />
          <span className="relative w-2.5 h-2.5 rounded-full bg-[#00a8e8]" />
        </span>
        <span className="text-[10px] text-[#9aa5a5] text-center leading-tight">
          Din
          <br />
          virksomhed
        </span>
      </div>
    </div>
  );
}

export default function HeroServices() {
  return (
    <PageHero
      breadcrumbs={[{ href: "/", label: "Forside" }, { label: "Services" }]}
      eyebrow="Mine services"
      titleLines={["Hjemmesider til små", "virksomheder i Horsens"]}
      lead="Som webudvikler i Horsens bygger jeg professionelt webdesign, SEO, webshops og integrationer — digitale løsninger, der gør det nemmere for dine kunder at finde, forstå og vælge din virksomhed. Faste priser fra 2.500 DKK inkl. moms."
      actions={
        <>
          <PrimaryLink href="#priser">Se priser</PrimaryLink>
          <GhostLink href="/gratis-seo-tjek-horsens">Gratis SEO-tjek</GhostLink>
        </>
      }
      aside={<Orbit />}
    />
  );
}
