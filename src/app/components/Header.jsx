"use client";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import W from "../../../public/W.png";

const mainLinks = [
  { href: "/", label: "Forside" },
  { href: "/services", label: "Services" },
  { href: "/om-mig", label: "Om mig" },
  { href: "/portefolje", label: "Portefølje" },
  { href: "/kontakt", label: "Kontakt" },
];

const nicheLinks = [
  { href: "/hjemmeside-til-haandvaerkere", label: "Håndværkere" },
  { href: "/hjemmeside-til-restauranter", label: "Restauranter" },
  { href: "/hjemmeside-til-saloner", label: "Saloner" },
  { href: "/hjemmeside-til-vvs", label: "VVS" },
  { href: "/hjemmeside-til-elektriker", label: "Elektrikere" },
  { href: "/hjemmeside-til-tomrer", label: "Tømrere" },
];

const NavLink = ({ href, label, pathname, onClick }) => {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`relative text-[13px] px-3.5 py-2 transition-colors ${
        isActive ? "text-white" : "text-[#8b9797] hover:text-white"
      }`}
    >
      {label}
      <span
        className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] rounded-full bg-[#00a8e8] transition-all duration-300 ${
          isActive ? "w-4" : "w-0"
        }`}
      />
    </Link>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNicheOpen, setIsNicheOpen] = useState(false);
  const pathname = usePathname();
  const nicheRef = useRef(null);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  useEffect(() => {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    if (!isMobileMenuOpen) return;

    const scrollY = window.scrollY;
    const { style } = document.body;
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.width = "100%";

    return () => {
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    closeMobileMenu();
    setIsNicheOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        setIsNicheOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (nicheRef.current && !nicheRef.current.contains(e.target)) {
        setIsNicheOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isNicheActive = nicheLinks.some((l) => l.href === pathname);

  const nicheOpenClass = isNicheOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none";

  return (
    <header className="sticky top-0 left-0 z-50 h-[68px] flex items-center justify-between px-4 md:px-6 lg:px-10 bg-[#1c1e1e] border-b border-white/10">
      <Link href="/" aria-label="Gå til forsiden" className="flex items-center gap-2.5">
        <Image src={W} width={36} height={36} alt="WebHjerte logo" priority />
        <p className="text-white text-[17px] font-semibold tracking-tight logo-web">
          Web<span className="text-[#00a8e8]">Hjerte</span>
        </p>
      </Link>

      <nav className="hidden md:flex items-center" aria-label="Hovedmenu">
        {mainLinks.slice(0, 2).map((link) => (
          <NavLink key={link.href} {...link} pathname={pathname} />
        ))}

        <div ref={nicheRef} className="relative">
          <button
            onClick={() => setIsNicheOpen(!isNicheOpen)}
            className={`relative text-[13px] px-3.5 py-2 transition-colors flex items-center gap-1 ${
              isNicheActive || isNicheOpen ? "text-white" : "text-[#8b9797] hover:text-white"
            }`}
            aria-expanded={isNicheOpen}
            aria-haspopup="true"
          >
            Brancher
            <IoChevronDown size={13} className={`transition-transform duration-300 ${isNicheOpen ? "rotate-180" : ""}`} />
            <span
              className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] rounded-full bg-[#00a8e8] transition-all duration-300 ${
                isNicheActive ? "w-4" : "w-0"
              }`}
            />
          </button>

          <div
            className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[300px] p-2 grid grid-cols-2 gap-1 bg-[#111414] border border-white/10 rounded-2xl shadow-2xl transition-all duration-200 z-50 ${nicheOpenClass}`}
          >
            {nicheLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsNicheOpen(false)}
                tabIndex={isNicheOpen ? 0 : -1}
                className={`px-3.5 py-2.5 rounded-xl text-[13px] transition-colors ${
                  pathname === link.href ? "text-white bg-white/10" : "text-[#9aa5a5] hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {mainLinks.slice(2).map((link) => (
          <NavLink key={link.href} {...link} pathname={pathname} />
        ))}
      </nav>

      <div className="hidden md:flex items-center">
        <Link
          href="/kontakt"
          className="text-[13px] font-semibold text-white bg-[#00a8e8] hover:bg-white hover:text-[#1c1e1e] rounded-full px-5 py-2.5 transition-colors"
        >
          Få et gratis tilbud
        </Link>
      </div>

      <button
        type="button"
        className="md:hidden w-11 h-11 -mr-2 flex items-center justify-center text-white text-[26px] touch-manipulation"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Luk menu" : "Åbn menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Mobilmenu */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 h-[100dvh] w-screen z-[999] bg-[#1c1e1e] flex flex-col overscroll-contain transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="h-[68px] shrink-0 flex items-center justify-between px-4 border-b border-white/10">
          <span className="text-white text-[17px] font-semibold tracking-tight">
            Web<span className="text-[#00a8e8]">Hjerte</span>
          </span>
          <button
            type="button"
            className="w-11 h-11 -mr-2 flex items-center justify-center text-white text-[26px] touch-manipulation"
            onClick={closeMobileMenu}
            aria-label="Luk menu"
          >
            <IoClose />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <nav className="flex flex-col" aria-label="Mobilmenu">
            {mainLinks.map((link, i) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="flex items-baseline gap-4 py-3.5 border-b border-white/[0.07]"
                >
                  <span className="text-[11px] tabular-nums text-[#4b5757]">0{i + 1}</span>
                  <span className={`text-[24px] font-semibold tracking-tight ${active ? "text-[#00a8e8]" : "text-white"}`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <p className="text-[11px] uppercase tracking-[0.16em] text-[#7a8787] mt-8 mb-3">Brancher</p>
          <div className="flex flex-wrap gap-2">
            {nicheLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`text-[13px] rounded-full px-4 py-2.5 border ${
                  pathname === link.href ? "border-[#00a8e8] text-[#00a8e8]" : "border-white/10 text-[#b4bebe]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="shrink-0 px-5 pt-4 pb-5 border-t border-white/10 flex flex-col gap-3">
          <Link
            href="/kontakt"
            onClick={closeMobileMenu}
            className="text-center text-[15px] font-semibold text-white bg-[#00a8e8] rounded-full py-3.5"
          >
            Få et gratis tilbud
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
