"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const ticker = [
  { symbol: "AAPL", price: "189.30", change: "+1.2%" },
  { symbol: "MSFT", price: "415.20", change: "+0.8%" },
  { symbol: "NVDA", price: "875.40", change: "+3.1%" },
  { symbol: "BTC", price: "67,420", change: "+2.4%" },
  { symbol: "SPX", price: "5,123", change: "+0.6%" },
  { symbol: "GOOGL", price: "175.80", change: "+1.4%" },
  { symbol: "JPM", price: "198.50", change: "+0.3%" },
  { symbol: "GS", price: "472.10", change: "+0.9%" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Ticker bar */}
      <div className="fixed top-0 left-0 right-0 z-50 h-8 bg-[#030712] border-b border-white/5 overflow-hidden flex items-center">
        <div className="flex ticker-track whitespace-nowrap">
          {[...ticker, ...ticker].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-6 text-xs font-mono">
              <span className="text-sky-400 font-semibold">{t.symbol}</span>
              <span className="text-white/60">{t.price}</span>
              <span className="text-emerald-400">{t.change}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#030712]/90 backdrop-blur-xl border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center">
                <span className="text-xs font-bold text-white">WL</span>
              </div>
              <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                Wilfried LAWSON HELLU
              </span>
            </a>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="text-sm text-white/50 hover:text-white transition-colors relative group"
                >
                  {label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sky-400 group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}
              <a
                href="#contact"
                className="text-sm px-4 py-2 rounded-lg border border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-200"
              >
                Get in touch →
              </a>
            </div>

            <button className="lg:hidden text-white/60 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-3 border-t border-white/5 mt-4">
                  {navLinks.map(({ label, href }) => (
                    <a key={label} href={href} className="block text-white/50 hover:text-white transition-colors text-sm py-1" onClick={() => setIsOpen(false)}>
                      {label}
                    </a>
                  ))}
                  <a href="#contact" className="block text-sm text-sky-400 hover:text-sky-300 transition-colors" onClick={() => setIsOpen(false)}>
                    Get in touch →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
}
