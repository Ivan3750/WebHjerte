import Link from "next/link";
import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Forside" },
  { href: "/services", label: "Services" },
  { href: "/portefolje", label: "Portefølje" },
  { href: "/om-os", label: "Om os" },
  { href: "/kontakt", label: "Kontakt" },
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
    <footer className="bg-[#111313] border-t border-[#1e2020] px-5 sm:px-10 lg:px-20 pt-14 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-[18px] font-medium text-white mb-3">
              Web<span className="text-[#00a8e8]">Hjerte</span>
            </p>
            <p className="text-[13px] text-[#5a5a5a] leading-[1.65] max-w-[200px]">
              Enkle, hurtige hjemmesider til lokale virksomheder i Danmark.
            </p>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4">
              Navigation
            </p>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[13px] text-[#7a7a7a] hover:text-[#e0e0e0] transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-4">
              Kontakt
            </p>
            <div className="flex flex-col gap-2.5 mb-7">
              <a
                href="mailto:hej@webhjerte.dk"
                className="text-[13px] text-[#7a7a7a] hover:text-[#e0e0e0] transition-colors w-fit"
              >
                hej@webhjerte.dk
              </a>
              <span className="text-[13px] text-[#5a5a5a]">
                Horsens, Midtjylland
              </span>
            </div>

            <p className="text-[11px] uppercase tracking-[0.1em] text-[#5a5a5a] mb-3">
              Følg os
            </p>
            <div className="flex gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 border border-[#2a2d2d] hover:border-[#404040] rounded-lg flex items-center justify-center transition-colors"
                >
                  <Icon size={14} className="text-[#7a7a7a]" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#1e2020]">
          <p className="text-[12px] text-[#3a3d3d]">
            © 2026 WebHjerte
            {legalLinks.map(({ href, label }, i) => (
              <span key={href}>
                {" · "}
                <Link
                  href={href}
                  className="hover:text-[#5a5a5a] transition-colors"
                >
                  {label}
                </Link>
              </span>
            ))}
          </p>

          <div className="inline-flex items-center gap-2 bg-[#1a2e1a] border border-[#2a5a2a] rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3a9e4a] flex-shrink-0" />
            <span className="text-[11px] text-[#5abf6a] font-medium">
              5% til miljøet
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;