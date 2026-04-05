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
  { href: "/om-os", label: "Om os" },
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
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname]);

  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-6 lg:px-10 sticky top-0 left-0 border-b-2 border-[#404242] bg-[#1c1e1e] z-50">
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
        className="block md:hidden text-white text-2xl"
        onClick={toggleMobileMenu}
        aria-label={isMobileMenuOpen ? "Luk menu" : "Åbn menu"}
      >
        {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
      </button>

      <div
        className={`absolute top-0 left-0 z-[500] w-full h-screen bg-[#101213] flex flex-col items-center justify-center gap-5 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white text-2xl"
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