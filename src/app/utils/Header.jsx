"use client";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import W from "../../../public/W.png";
import Button from "./Button";

const links = [
  { href: "/", label: "Forside" },
  { href: "/services", label: "Services" },
  { href: "/om-mig", label: "Om mig" },
  { href: "/portefolje", label: "Portefølje" },
  { href: "/kontakt", label: "Kontakt" },
];

const NavLink = ({ href, label, pathname, onClick }) => {
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`relative text-sm px-3 py-1.5 rounded-xl transition-colors ${
        isActive
          ? "text-white bg-[#2a2d2d]"
          : "text-[#9a9a9a] hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="relative flex items-center justify-between px-4 py-3 md:px-6 lg:px-10 sticky top-0 left-0 border-b-2 border-[#404242] bg-[#1c1e1e] z-50">
      <Link href="/" aria-label="Gå til forsiden">
        <div className="flex items-center gap-3">
          <Image src={W} width={44} height={44} alt="WebHjerte logo" priority />
          <p className="text-white text-lg font-bold logo-web">
            Web<span className="text-[#00a8e8]">Hjerte</span>
          </p>
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-1 bg-[#101213] rounded-2xl px-2 py-2 border border-[#424242]">
        {links.map((link) => (
          <NavLink key={link.href} {...link} pathname={pathname} />
        ))}
      </nav>

      <Link href="/kontakt" className="hidden md:block">
        <Button name="Få et gratis tilbud" />
      </Link>

      <button
        type="button"
        className="block md:hidden text-white text-2xl touch-manipulation"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Luk menu" : "Åbn menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-menu"
      >
        {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
      </button>

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`fixed inset-0 h-[100dvh] w-screen z-[999] bg-[#101213] flex flex-col items-center justify-center gap-5 overscroll-contain transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <button
          type="button"
          className="absolute top-4 right-4 text-white text-2xl touch-manipulation"
          onClick={closeMobileMenu}
          aria-label="Luk menu"
        >
          <IoClose />
        </button>

        {links.map((link) => (
          <NavLink
            key={link.href}
            {...link}
            pathname={pathname}
            onClick={closeMobileMenu}
          />
        ))}

        <Link href="/kontakt" onClick={closeMobileMenu} className="mt-2">
          <Button name="Få et gratis tilbud" />
        </Link>
      </div>
    </header>
  );
};

export default Header;