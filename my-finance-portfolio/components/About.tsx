"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DollarSign, Building2, TrendingUp } from "lucide-react";

const statCards = [
  { value: "€500K+", label: "Revenue Managed", icon: DollarSign },
  { value: "2", label: "Finance Internships", icon: Building2 },
  { value: "4+ yrs", label: "Macro Trading", icon: TrendingUp },
];

const tags = ["Asset Management", "Corporate Finance", "Risk Management", "DCM", "Portfolio Optimization", "UEMOA Markets"];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 px-6 bg-[#050D1A] relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] rounded-full text-sm mb-5 backdrop-blur-sm">
            About
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">About Me</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — avatar + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full flex items-center justify-center mb-8 border border-[#C9A84C]/20 relative overflow-hidden"
              style={{ background: "radial-gradient(circle at 50% 50%, #0F2040, #050D1A)" }}
            >
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C9A84C]/15 to-transparent" />
              <span className="font-serif text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#C9A84C] to-[#D4B96A] bg-clip-text text-transparent relative z-10">
                WLH
              </span>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
              {statCards.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    className="rounded-2xl p-3 text-center bg-[#C9A84C]/5 border border-[#C9A84C]/15 backdrop-blur-sm hover:border-[#C9A84C]/30 transition-all"
                  >
                    <div className="flex justify-center mb-2">
                      <div className="p-1.5 rounded-lg bg-[#C9A84C]/10">
                        <Icon size={12} className="text-[#C9A84C]" />
                      </div>
                    </div>
                    <div className="text-[#C9A84C] font-bold text-sm">{stat.value}</div>
                    <div className="text-slate-500 text-xs leading-tight mt-1">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-5 text-slate-400 leading-relaxed">
              <p>
                With hands-on experience at the{" "}
                <span className="text-[#C9A84C] font-medium">BIDC — the ECOWAS regional development bank</span>
                {" "}and SGI-TOGO in West African debt capital markets, I bring a unique perspective combining institutional finance with frontier market expertise.
              </p>
              <p>
                As founder of Papyrus Distributions, I managed a business generating over{" "}
                <span className="text-[#C9A84C] font-medium">€500K in cumulative revenue</span>,
                overseeing full P&amp;L, treasury, and banking relationships — including navigating a judicial liquidation following a major client default.
              </p>
              <p>
                Currently pursuing my degree at{" "}
                <span className="text-[#C9A84C] font-medium">Université Paris-Saclay</span>
                {" "}and actively building quantitative finance skills through personal projects in portfolio optimization, risk modeling, and valuation.
              </p>
              <p>
                4+ years of personal macro and technical trading round out my analytical toolkit — giving me a market practitioner&apos;s instinct alongside my academic rigor.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium border border-[#C9A84C]/20 text-[#C9A84C] bg-[#C9A84C]/8">
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
