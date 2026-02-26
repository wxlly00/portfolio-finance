"use client";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <span className="font-serif text-2xl font-bold text-gradient cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            WLH
          </span>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-slate-300 dark:text-slate-300 hover:text-gold transition-colors duration-200 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 bg-gold text-navy-dark font-semibold text-sm rounded-lg hover:bg-gold-light transition-colors duration-200"
            >
              <Download size={15} />
              Download CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gold p-2"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass border-t border-gold/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-sm text-slate-300 hover:text-gold transition-colors py-1 font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="flex items-center gap-3 pt-2 border-t border-gold/10">
              <ThemeToggle />
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 bg-gold text-navy-dark font-semibold text-sm rounded-lg"
              >
                <Download size={15} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
