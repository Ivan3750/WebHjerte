import Link from "next/link";

export const metadata = {
  title: "Siden findes ikke | WebHjerte",
  robots: { index: false, follow: true },
};

const links = [
  { href: "/services", label: "Services og pakker" },
  { href: "/hjemmeside-pris", label: "Hjemmeside pris" },
  { href: "/webdesign-horsens", label: "Webdesign Horsens" },
  { href: "/blog", label: "Guides og blog" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[#1c1e1e]">
      <div aria-hidden className="grid-fade absolute inset-0 opacity-60" />
      <div className="relative max-w-3xl mx-auto px-5 sm:px-10 py-28 sm:py-40 text-center">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#7f8c8c] mb-5 inline-flex items-center gap-3">
          <span className="w-8 h-px bg-[#00a8e8]" />
          Fejl 404
          <span className="w-8 h-px bg-[#00a8e8]" />
        </p>
        <h1 className="text-white font-semibold tracking-tight leading-[1.1] text-[clamp(26px,4vw,48px)] mb-5">
          Ups – den side findes ikke
        </h1>
        <p className="text-[14px] text-[#93a0a0] leading-[1.8] max-w-[48ch] mx-auto mb-9">
          Måske er linket gammelt, eller siden er flyttet. Prøv en af genvejene herunder, eller gå tilbage til forsiden.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[12px] text-[#c7d0d0] border border-white/10 hover:border-[#00a8e8] hover:text-[#00a8e8] rounded-full px-4 py-2 transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <Link
          href="/"
          className="inline-flex items-center text-[13px] font-semibold text-white bg-[#00a8e8] hover:bg-white hover:text-[#1c1e1e] rounded-full px-6 py-3 transition-colors"
        >
          Til forsiden
        </Link>
      </div>
    </section>
  );
}
