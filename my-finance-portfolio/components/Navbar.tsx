"use client";
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/50 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.span
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            WLH
          </motion.span>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-400 hover:text-white transition-colors text-sm relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </div>

          {/* Right actions */}
          <motion.div
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/cv.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-medium text-sm transition-all duration-200 shadow-lg shadow-blue-500/20"
            >
              <Download size={14} />
              Download CV
            </a>
          </motion.div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden bg-black/80 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-gray-400 hover:text-white transition-colors text-base font-medium"
                >
                  {link.label}
                </button>
              ))}
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium text-sm w-fit"
              >
                <Download size={14} />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
