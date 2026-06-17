"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import SogipLogo from "@/components/icons/SogipLogo";

const NAV_LINKS = [
  { href: "/", label: "Accueil" },
  {
    href: "/services",
    label: "Services",
    children: [
      { href: "/services/btp", label: "SOGIP BTP" },
      { href: "/services/immo", label: "LePropio" },
      { href: "/services/energie", label: "Soleil Guinée" },
      { href: "/services/academy", label: "SOGIP Academy" },
    ],
  },
  { href: "/about", label: "À Propos" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const prevPathname = useRef(pathname);

  // Détection du scroll pour changer le style du header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Feedback d'animation lors des transitions de pages
  useEffect(() => {
    if (prevPathname.current !== pathname) {
      setNavigating(true);
      setMobileOpen(false);
      setMobileDropdownOpen(false); // Réinitialise le sous-menu mobile au changement de page
      const t = setTimeout(() => setNavigating(false), 600);
      prevPathname.current = pathname;
      return () => clearTimeout(t);
    }
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Barre de progression supérieure lors de la navigation */}
      <AnimatePresence>
        {navigating && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] z-[100] origin-left"
            style={{
              background: "linear-gradient(90deg, #9A7A30, #C9A84C, #E8C96A)",
            }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>

      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          backgroundColor: scrolled
            ? "rgba(10,10,14,0.92)"
            : "rgba(10,10,14,0)",
          backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.07)"
            : "1px solid transparent",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div className="container flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0"
            aria-label="SOGIP Group — Accueil"
          >
            <SogipLogo className="h-10 w-auto" />
          </Link>

          {/* Navigation Bureau (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8" role="navigation">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setDropdown(link.href)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <button
                    className={`nav-link flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive(link.href)
                        ? "text-[#C9A84C] active"
                        : "text-[#8A8A8A] hover:text-[#F0EDE8]"
                    }`}
                    aria-expanded={activeDropdown === link.href}
                    aria-haspopup="true"
                  >
                    {link.label}
                    <ChevronIcon
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.href ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === link.href && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-52 py-2 rounded-xl border overflow-hidden"
                        style={{
                          background: "#1A1A22",
                          borderColor: "rgba(201,168,76,0.2)",
                          boxShadow: "0 16px 48px rgba(0,0,0,0.5)",
                        }}
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-4 py-2.5 text-sm transition-all duration-150 ${
                              isActive(child.href)
                                ? "text-[#C9A84C] bg-[rgba(201,168,76,0.08)]"
                                : "text-[#8A8A8A] hover:text-[#F0EDE8] hover:bg-[rgba(255,255,255,0.04)]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive(link.href)
                      ? "text-[#C9A84C] active"
                      : "text-[#8A8A8A] hover:text-[#F0EDE8]"
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn btn-primary text-xs px-5 py-2.5"
            >
              Nous contacter
            </Link>
          </div>

          {/* Bouton Hamburger Mobile */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-md z-50 relative"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-panel"
          >
            <motion.span
              className="block w-6 h-0.5 bg-[#F0EDE8] origin-center"
              animate={mobileOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-[#F0EDE8]"
              animate={
                mobileOpen
                  ? { opacity: 0, scaleX: 0 }
                  : { opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-0.5 bg-[#F0EDE8] origin-center"
              animate={
                mobileOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
              }
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>

        {/* Menu Déroulant Mobile */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-navigation-panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t"
              style={{
                background: "rgba(10,10,14,0.97)",
                borderColor: "rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
              }}
            >
              <nav
                className="container py-6 flex flex-col gap-1"
                role="navigation"
              >
                {NAV_LINKS.map((link) => (
                  <div key={link.href}>
                    {link.children ? (
                      <>
                        {/* Bouton accordéon pour déplier le sous-menu sur mobile */}
                        <button
                          onClick={() =>
                            setMobileDropdownOpen(!mobileDropdownOpen)
                          }
                          className={`w-full flex items-center justify-between py-3 text-base font-medium border-b text-left transition-colors duration-200 ${
                            isActive(link.href)
                              ? "text-[#C9A84C]"
                              : "text-[#8A8A8A]"
                          }`}
                          style={{ borderColor: "rgba(255,255,255,0.06)" }}
                          aria-expanded={mobileDropdownOpen}
                        >
                          <span>{link.label}</span>
                          <ChevronIcon
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileDropdownOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {mobileDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 overflow-hidden"
                            >
                              {/* Lien global optionnel vers la catégorie "Tous les services" */}
                              <Link
                                href={link.href}
                                className="block py-2.5 text-sm text-[#8A8A8A] font-semibold italic"
                              >
                                Voir tous les services —
                              </Link>
                              {link.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`block py-2.5 text-sm transition-colors duration-150 ${
                                    isActive(child.href)
                                      ? "text-[#C9A84C]"
                                      : "text-[#8A8A8A] hover:text-[#F0EDE8]"
                                  }`}
                                >
                                  — {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block py-3 text-base font-medium border-b transition-colors duration-200 ${
                          isActive(link.href)
                            ? "text-[#C9A84C]"
                            : "text-[#8A8A8A] hover:text-[#F0EDE8]"
                        }`}
                        style={{ borderColor: "rgba(255,255,255,0.06)" }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
                <Link
                  href="/contact"
                  className="btn btn-primary mt-4 justify-center"
                >
                  Nous contacter
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}

function ChevronIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
