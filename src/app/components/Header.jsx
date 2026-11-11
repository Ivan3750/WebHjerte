"use client";
import Link from "next/link";
import Image from "next/image";
import { IoMenu, IoClose, IoChevronDown } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import W from "../../../public/W.png";

/**
 * Menustruktur – enkel, så en kunde uden teknisk viden kan finde rundt.
 * Et punkt er enten et direkte link ({ href }) eller en gruppe med undermenu ({ columns }).
 * Branche- og bysider ligger ikke i menuen; de findes på /services og i footeren.
 */
const navItems = [
  {
    label: "Hjemmesider",
    columns: [
      {
        title: "Hvad har du brug for?",
        links: [
          { href: "/hjemmeside-til-virksomhed", label: "Ny hjemmeside", desc: "En professionel side til din virksomhed" },
          { href: "/webshop-hjemmeside", label: "Webshop", desc: "Sælg dine varer online" },
          { href: "/wordpress-hjemmeside", label: "WordPress", desc: "En side, du selv kan redigere" },
          { href: "/hosting-og-vedligeholdelse", label: "Drift og vedligehold", desc: "Jeg passer siden for dig hver måned" },
          { href: "/services", label: "Alle ydelser", desc: "Overblik, brancher og områder" },
        ],
      },
    ],
  },
  { href: "/ai-loesninger", label: "AI" },
  { href: "/hjemmeside-pris", label: "Priser" },
  { href: "/portefolje", label: "Portefølje" },
  { href: "/blog", label: "Blog" },
  { href: "/om-mig", label: "Om mig" },
];

const isActivePath = (pathname, href) =>
  href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

const groupLinks = (item) => item.columns.flatMap((c) => c.links);
const isGroupActive = (pathname, item) => groupLinks(item).some((l) => isActivePath(pathname, l.href));

const Underline = ({ active }) => (
  <span
    aria-hidden
    className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] rounded-full bg-[#00a8e8] transition-all duration-300 ${
      active ? "w-4" : "w-0"
    }`}
  />
);

const itemClass = (active) =>
  `relative text-[13px] px-3 xl:px-3.5 py-2 transition-colors whitespace-nowrap ${
    active ? "text-white" : "text-[#8b9797] hover:text-white"
  }`;

const DesktopDropdown = ({ item, pathname, open, onToggle, onClose }) => {
  const active = isGroupActive(pathname, item);
  const wide = item.columns.length > 1;
  const id = `menu-${item.label.toLowerCase()}`;

  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className={`${itemClass(active || open)} flex items-center gap-1`}
        aria-expanded={open}
        aria-controls={id}
      >
        {item.label}
        <IoChevronDown size={13} className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        <Underline active={active} />
      </button>

      <div
        id={id}
        className={`absolute top-full mt-3 p-2 bg-[#111414] border border-white/10 rounded-2xl shadow-2xl transition-all duration-200 z-50 ${
          wide ? "left-0 w-[520px] grid grid-cols-2 gap-2" : "left-1/2 -translate-x-1/2 w-[320px]"
        } ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none invisible"}`}
      >
        {item.columns.map((col) => (
          <div key={col.title}>
            <p className="px-3.5 pt-2.5 pb-1.5 text-[10.5px] uppercase tracking-[0.16em] text-[#5f6c6c]">{col.title}</p>
            <ul>
              {col.links.map((link) => {
                const current = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      aria-current={current ? "page" : undefined}
                      className={`block px-3.5 py-2 rounded-xl text-[13px] transition-colors ${
                        current ? "text-white bg-white/10" : "text-[#9aa5a5] hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <span className="block">{link.label}</span>
                      {link.desc && <span className="block text-[11.5px] text-[#6f7c7c] mt-0.5">{link.desc}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState(null); // desktop-dropdown
  const [mobileGroup, setMobileGroup] = useState(null); // mobil-accordion
  const pathname = usePathname();
  const navRef = useRef(null);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeGroup = () => setOpenGroup(null);

  useEffect(() => {
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

  // Luk alt ved sideskift
  useEffect(() => {
    closeMobileMenu();
    closeGroup();
  }, [pathname]);

  // Åbn den mobile gruppe, der indeholder den aktuelle side
  useEffect(() => {
    const current = navItems.find((item) => item.columns && isGroupActive(pathname, item));
    setMobileGroup(current ? current.label : null);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        closeMobileMenu();
        closeGroup();
      }
    };
    const onMouseDown = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) closeGroup();
    };
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onMouseDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onMouseDown);
    };
  }, []);

  return (
    <header className="sticky top-0 left-0 z-50 h-[68px] flex items-center justify-between gap-4 px-4 md:px-6 lg:px-8 xl:px-10 bg-[#1c1e1e] border-b border-white/10">
      <Link href="/" aria-label="WebHjerte – gå til forsiden" className="flex items-center gap-2.5 shrink-0">
        <Image src={W} width={36} height={36} alt="WebHjerte logo" priority />
        <span className="text-white text-[17px] font-semibold tracking-tight logo-web">
          Web<span className="text-[#00a8e8]">Hjerte</span>
        </span>
      </Link>

      <nav ref={navRef} className="hidden lg:flex items-center" aria-label="Hovedmenu">
        {navItems.map((item) =>
          item.columns ? (
            <DesktopDropdown
              key={item.label}
              item={item}
              pathname={pathname}
              open={openGroup === item.label}
              onToggle={() => setOpenGroup((g) => (g === item.label ? null : item.label))}
              onClose={closeGroup}
            />
          ) : (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={itemClass(isActivePath(pathname, item.href))}
            >
              {item.label}
              <Underline active={isActivePath(pathname, item.href)} />
            </Link>
          )
        )}
      </nav>

      <div className="hidden lg:flex items-center shrink-0">
        <Link
          href="/kontakt"
          className="text-[13px] font-semibold text-white bg-[#00a8e8] hover:bg-white hover:text-[#1c1e1e] rounded-full px-5 py-2.5 transition-colors whitespace-nowrap"
        >
          Få et gratis tilbud
        </Link>
      </div>

      <button
        type="button"
        className="lg:hidden w-11 h-11 -mr-2 flex items-center justify-center text-white text-[26px] touch-manipulation"
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
        aria-label="Menu"
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
        className={`fixed inset-0 h-[100dvh] w-screen z-[999] bg-[#1c1e1e] flex flex-col overscroll-contain transition-transform duration-300 lg:hidden ${
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

        <div className="flex-1 overflow-y-auto px-5 py-4">
          <nav className="flex flex-col" aria-label="Mobilmenu">
            <Link
              href="/"
              onClick={closeMobileMenu}
              className={`py-3.5 border-b border-white/[0.07] text-[22px] font-semibold tracking-tight ${
                pathname === "/" ? "text-[#00a8e8]" : "text-white"
              }`}
            >
              Forside
            </Link>
            {navItems.map((item) => {
              if (!item.columns) {
                const active = isActivePath(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`py-3.5 border-b border-white/[0.07] text-[22px] font-semibold tracking-tight ${
                      active ? "text-[#00a8e8]" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
              const expanded = mobileGroup === item.label;
              const active = isGroupActive(pathname, item);
              const panelId = `mobile-${item.label.toLowerCase()}`;
              return (
                <div key={item.label} className="border-b border-white/[0.07]">
                  <button
                    type="button"
                    onClick={() => setMobileGroup(expanded ? null : item.label)}
                    aria-expanded={expanded}
                    aria-controls={panelId}
                    className={`w-full flex items-center justify-between py-3.5 text-[22px] font-semibold tracking-tight ${
                      active ? "text-[#00a8e8]" : "text-white"
                    }`}
                  >
                    {item.label}
                    <IoChevronDown size={20} className={`text-[#7a8787] transition-transform duration-300 ${expanded ? "rotate-180" : ""}`} />
                  </button>
                  <div id={panelId} hidden={!expanded} className="pb-4">
                    {item.columns.map((col) => (
                      <div key={col.title} className="mt-1 mb-3">
                        {item.columns.length > 1 && (
                          <p className="text-[10.5px] uppercase tracking-[0.16em] text-[#7a8787] mb-2">{col.title}</p>
                        )}
                        <div className="flex flex-col gap-2">
                          {col.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={closeMobileMenu}
                              aria-current={pathname === link.href ? "page" : undefined}
                              className={`rounded-2xl px-4 py-3 border ${
                                pathname === link.href ? "border-[#00a8e8] bg-[#00a8e8]/[0.06]" : "border-white/10"
                              }`}
                            >
                              <span className={`block text-[15px] font-semibold ${pathname === link.href ? "text-[#00a8e8]" : "text-white"}`}>{link.label}</span>
                              {link.desc && <span className="block text-[12.5px] text-[#8795a0] mt-0.5">{link.desc}</span>}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
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
