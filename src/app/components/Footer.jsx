import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const groups = [
  {
    title: "Virksomhed",
    links: [
      { href: "/", label: "Forside" },
      { href: "/services", label: "Services" },
      { href: "/portefolje", label: "Portefølje" },
      { href: "/om-mig", label: "Om mig" },
      { href: "/blog", label: "Blog" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  },
  {
    title: "Ydelser",
    links: [
      { href: "/webdesign-horsens", label: "Webdesign Horsens" },
      { href: "/seo-horsens", label: "SEO Horsens" },
      { href: "/webbureau-midtjylland", label: "Webbureau Midtjylland" },
      { href: "/hjemmeside-pris", label: "Hjemmeside pris" },
      { href: "/wordpress-hjemmeside", label: "WordPress hjemmeside" },
      { href: "/skraeddersyede-hjemmesider", label: "Skræddersyede hjemmesider" },
      { href: "/freelancer-vs-bureau", label: "Freelancer vs bureau" },
    ],
  },
  {
    title: "Områder og emner",
    links: [
      { href: "/ai-loesninger", label: "AI-løsninger" },
      { href: "/alle-typer-hjemmesider", label: "Alle platforme" },
      { href: "/shopify-hjemmeside", label: "Shopify" },
      { href: "/webbureau-jylland", label: "Webbureau Jylland" },
      { href: "/webbureau-aarhus", label: "Webbureau Aarhus" },
      { href: "/webbureau-vejle", label: "Webbureau Vejle" },
      { href: "/wordpress-horsens", label: "WordPress Horsens" },
      { href: "/geo-ai-synlighed", label: "AI-synlighed (GEO)" },
      { href: "/ai-chatbot-til-hjemmeside", label: "AI-chatbot" },
    ],
  },
  {
    title: "Viden",
    links: [
      { href: "/blog", label: "Blog og guides" },
      { href: "/ofte-stillede-spoergsmaal", label: "Ofte stillede spørgsmål" },
      { href: "/ordliste", label: "Ordliste" },
      { href: "/om-webhjerte", label: "Fakta om WebHjerte" },
      { href: "/hosting-og-vedligeholdelse", label: "Hosting og drift" },
      { href: "/webstrategi", label: "Webstrategi" },
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
];

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

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#1c1e1e] border-t border-white/10">
      <div className="max-w-[88rem] mx-auto px-5 sm:px-10 lg:px-16">
        {/* Links */}
        <div className="grid grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr_1fr_1fr_1.1fr] gap-x-6 gap-y-10 pt-14 pb-12 sm:pt-16 sm:pb-14">
          <div className="col-span-2 lg:col-span-1">
            <p className="text-[18px] font-semibold text-white mb-3 tracking-tight">
              Web<span className="text-[#00a8e8]">Hjerte</span>
            </p>
            <p className="text-[13px] text-[#6f7c7c] leading-[1.7] max-w-[260px] mb-5">
              Enkle, hurtige hjemmesider til lokale virksomheder i Danmark.
            </p>
            <div className="flex gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 border border-white/10 hover:border-[#00a8e8] hover:bg-[#00a8e8]/10 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon size={15} className="text-[#9aa5a5]" />
                </Link>
              ))}
            </div>
          </div>

          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <p className="text-[11px] uppercase tracking-[0.16em] text-[#7a8787] mb-4">{g.title}</p>
              <div className="flex flex-col gap-1">
                {g.links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className="text-[13px] text-[#9aa5a5] hover:text-white transition-colors w-fit py-1.5"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
          ))}

          <div className="col-span-2 lg:col-span-1">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#7a8787] mb-4">Kontakt</p>
            <div className="flex flex-col gap-1">
              <a href="mailto:hej@webhjerte.dk" className="text-[13px] text-[#9aa5a5] hover:text-white transition-colors w-fit py-1.5">
                hej@webhjerte.dk
              </a>
              <a href="tel:+4542760577" className="text-[13px] text-[#9aa5a5] hover:text-white transition-colors w-fit py-1.5">
                +45 42 76 05 77
              </a>
              <span className="text-[13px] text-[#7a8787] py-1.5">Horsens, Midtjylland</span>
            </div>
          </div>
        </div>

        {/* Bund */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-6 border-t border-white/10">
          <p className="text-[12px] text-[#7a8787] leading-relaxed">© 2026 WebHjerte · CVR: 46485823</p>
          <p className="text-[12px] text-[#7a8787] flex gap-5">
            {legalLinks.map(({ href, label }) => (
              <Link key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </p>
        </div>
      </div>

      <p
        aria-hidden
        className="select-none text-center font-semibold tracking-tight leading-none text-[#252828] text-[13.5vw] -mb-[2.2vw] whitespace-nowrap"
      >
        WebHjerte
      </p>
    </footer>
  );
};

export default Footer;
