import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { visibleLinks } from "../data/hidden";

const allGroups = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "Alle services" },
      { href: "/services#priser", label: "Priser" },
      { href: "/wordpress-hjemmeside", label: "WordPress-hjemmeside" },
      { href: "/skraeddersyede-hjemmesider", label: "Skræddersyede hjemmesider" },
      { href: "/webshop-hjemmeside", label: "Webshop" },
      { href: "/ai-loesninger", label: "AI-løsninger" },
      { href: "/seo-horsens", label: "SEO Horsens" },
    ],
  },
  {
    title: "Brancher",
    links: [
      { href: "/hjemmeside-til-haandvaerkere", label: "Håndværkere" },
      { href: "/hjemmeside-til-restauranter", label: "Restauranter" },
      { href: "/hjemmeside-til-saloner", label: "Saloner" },
      { href: "/hjemmeside-til-vvs", label: "VVS" },
      { href: "/hjemmeside-til-elektriker", label: "Elektrikere" },
      { href: "/hjemmeside-til-tomrer", label: "Tømrere" },
    ],
  },
  {
    title: "WebHjerte",
    links: [
      { href: "/om-mig", label: "Om mig" },
      { href: "/portefolje", label: "Portefølje" },
      { href: "/blog", label: "Blog og guides" },
      { href: "/partner", label: "Partnerskab" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
];

// Skjulte sider (se data/hidden.js) vises ikke; tomme kolonner fjernes
const groups = allGroups.map((g) => ({ ...g, links: visibleLinks(g.links) })).filter((g) => g.links.length);

const legalLinks = [
  { href: "/privacy", label: "Privatlivspolitik" },
  { href: "/terms", label: "Handelsbetingelser" },
];

const socials = [
  {
    href: "https://www.instagram.com/webhjerte/",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.facebook.com/WebHjerte/",
    icon: Facebook,
    label: "Facebook",
  },
  {
    href: "https://www.linkedin.com/company/webhjerte/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "mailto:hej@webhjerte.dk",
    icon: Mail,
    label: "Email",
  },
];

const linkClass = "text-[15px] text-[#b4bdbd] hover:text-white transition-colors w-fit py-1.5";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#1c1e1e] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-x-8 gap-y-12 pt-16 pb-14 sm:pt-20 sm:pb-16">
          {/* Brand + kontakt */}
          <div className="col-span-2 lg:col-span-1">
            <p className="text-[22px] font-semibold text-white mb-3 tracking-tight">
              Web<span className="text-[#00a8e8]">Hjerte</span>
            </p>
            <p className="text-[15px] text-[#b4bdbd] leading-[1.7] max-w-[300px] mb-6">
              Enkle, hurtige hjemmesider til lokale virksomheder i Horsens og resten af Danmark.
            </p>
            <Link href="/kontakt" className="btn-primary mb-8">
              Få et gratis tilbud
            </Link>
            <div className="flex flex-col gap-1 mb-6">
              <a href="tel:+4542760577" className="text-[16px] font-medium text-white w-fit py-1">
                +45 42 76 05 77
              </a>
              <a href="mailto:hej@webhjerte.dk" className="text-[15px] text-[#b4bdbd] hover:text-white transition-colors w-fit py-1">
                hej@webhjerte.dk
              </a>
            </div>
            <div className="flex gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-white/10 hover:border-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon size={16} className="text-[#b4bdbd]" />
                </Link>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <p className="text-[16px] font-semibold text-white mb-4">{g.title}</p>
              <div className="flex flex-col">
                {g.links.map(({ href, label }) => (
                  <Link key={href} href={href} className={linkClass}>
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}
        </div>

        {/* Bund */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6 border-t border-white/10">
          <p className="text-[13px] text-[#8a9696]">© 2026 WebHjerte · CVR: 46485823 · Horsens</p>
          <div className="text-[13px] text-[#8a9696] flex gap-6">
            {legalLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <p
        aria-hidden
        className="select-none text-center font-semibold tracking-tight leading-none text-[#242828] text-[13.5vw] -mb-[2.2vw] whitespace-nowrap"
      >
        WebHjerte
      </p>
    </footer>
  );
};

export default Footer;
