"use client";
import { motion } from "framer-motion";
import { MapPin, ArrowDown, Download } from "lucide-react";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const stats = [
  { value: "€500K+", label: "Revenue Managed" },
  { value: "2", label: "Finance Internships" },
  { value: "4+ yrs", label: "Macro Trading" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-navy-dark">
        <div className="absolute inset-0 opacity-30"
          style={{
            background: "radial-gradient(ellipse at 20% 50%, #0F2040 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, #1a0a28 0%, transparent 60%)",
          }}
        />
        {/* Gold particle dots */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `fade-in ${2 + Math.random() * 3}s ease-in-out infinite alternate`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <span className="inline-flex items-center px-4 py-2 rounded-full border border-gold/40 text-gold text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
            Available for Internship · March – July 2026
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-4"
        >
          Wilfried{" "}
          <span className="text-gradient">LAWSON HELLU</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          {...fadeUp(0.3)}
          className="text-xl md:text-2xl text-slate-300 font-light mb-3"
        >
          Finance Analyst{" "}
          <span className="text-gold font-medium">|</span>{" "}
          Asset Management &amp; Corporate Finance
        </motion.p>

        {/* Location */}
        <motion.div {...fadeUp(0.4)} className="flex items-center justify-center gap-1 text-slate-400 text-sm mb-10">
          <MapPin size={14} className="text-gold" />
          <span>Paris, France · Université Paris-Saclay</span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div {...fadeUp(0.5)} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-gold text-navy-dark font-semibold rounded-lg hover:bg-gold-light transition-all duration-200 hover:shadow-lg hover:shadow-gold/25"
          >
            View Projects
          </button>
          <a
            href="/cv.pdf"
            download
            className="flex items-center justify-center gap-2 px-8 py-3 border border-gold/40 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-all duration-200"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div {...fadeUp(0.65)} className="flex flex-wrap justify-center gap-6 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-gold font-serif">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/50 animate-bounce"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
