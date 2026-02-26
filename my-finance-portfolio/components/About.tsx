"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const statCards = [
  { value: "€500K+", label: "Revenue Managed", icon: "💼" },
  { value: "2", label: "Finance Internships", icon: "🏦" },
  { value: "4+ yrs", label: "Macro Trading", icon: "📈" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-navy-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center mb-6 shadow-2xl shadow-gold/10 border-2 border-gold/30"
              style={{
                background: "linear-gradient(135deg, #0A1628, #1a0a28, #0A1628)",
              }}
            >
              <span className="font-serif text-5xl md:text-6xl font-bold text-gradient">WLH</span>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {statCards.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass rounded-xl p-3 text-center"
                >
                  <div className="text-lg mb-1">{stat.icon}</div>
                  <div className="text-gold font-bold text-sm font-serif">{stat.value}</div>
                  <div className="text-slate-400 text-xs leading-tight mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-8 gold-underline">
              About Me
            </h2>

            <div className="space-y-5 text-slate-300 leading-relaxed">
              <p>
                With hands-on experience at the{" "}
                <span className="text-gold font-medium">BIDC — the ECOWAS regional development bank</span>
                {" "}and SGI-TOGO in West African debt capital markets, I bring a unique perspective combining institutional finance with frontier market expertise.
              </p>
              <p>
                As founder of Papyrus Distributions, I managed a business generating over{" "}
                <span className="text-gold font-medium">€500K in cumulative revenue</span>,
                overseeing full P&amp;L, treasury, and banking relationships — including navigating a judicial liquidation following a major client default. This experience gave me a hands-on understanding of corporate finance that complements my academic training.
              </p>
              <p>
                Currently pursuing my degree at{" "}
                <span className="text-gold font-medium">Université Paris-Saclay</span>
                {" "}and actively building quantitative finance skills through personal projects in portfolio optimization, risk modeling, and valuation.
              </p>
              <p>
                4+ years of personal macro and technical trading round out my analytical toolkit — giving me a market practitioner&apos;s instinct alongside my academic rigor.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {["Asset Management", "Corporate Finance", "Risk Management", "DCM", "Portfolio Optimization", "UEMOA Markets"].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-gold/30 text-gold/80">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
