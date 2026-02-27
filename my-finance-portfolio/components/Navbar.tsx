"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050D1A]/80 backdrop-blur-xl border-b border-[#C9A84C]/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="font-serif text-xl font-bold tracking-tight bg-gradient-to-r from-[#C9A84C] to-[#D4B96A] bg-clip-text text-transparent"
          >
            WLH
          </motion.a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-10">
            {links.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                className="text-slate-400 hover:text-white transition-colors text-sm relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#C9A84C] to-[#D4B96A] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="px-5 py-2 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#D4B96A] hover:from-[#D4B96A] hover:to-[#C9A84C] text-[#050D1A] text-sm font-semibold transition-all shadow-lg shadow-[#C9A84C]/20"
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-5 pb-5 space-y-4 border-t border-[#C9A84C]/10 pt-5">
                {links.map(({ label, href }) => (
                  <a
                    key={label}
                    href={href}
                    className="block text-slate-400 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="block w-full text-center px-5 py-2.5 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#D4B96A] text-[#050D1A] font-semibold"
                  onClick={() => setIsOpen(false)}
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
