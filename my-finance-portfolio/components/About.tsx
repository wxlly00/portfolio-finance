"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "€500K+", label: "Revenue Managed", color: "#22c55e" },
  { value: "2", label: "Finance Internships", color: "#0ea5e9" },
  { value: "4+ yrs", label: "Macro Trading", color: "#a78bfa" },
  { value: "UEMOA", label: "Market Expertise", color: "#f59e0b" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-16">
          <p className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">// about</p>
          <h2 className="text-4xl lg:text-5xl text-white tracking-tight">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="space-y-4 text-[15px] text-white/50 leading-relaxed">
            <p>
              With hands-on experience at the <span className="text-sky-400">BIDC</span> — the ECOWAS regional development bank — and <span className="text-sky-400">SGI-TOGO</span> in West African debt capital markets, I bring a rare perspective combining institutional finance with frontier market expertise.
            </p>
            <p>
              As founder of Papyrus Distributions, I managed a business generating over <span className="text-emerald-400 font-medium">€500K in cumulative revenue</span> — overseeing full P&L, treasury, banking relationships, and navigating judicial liquidation following a major client default.
            </p>
            <p>
              Currently at <span className="text-sky-400">Université Paris-Saclay</span>, building quantitative skills through projects in portfolio optimization, risk modeling, DCF, LBO, and ESG analysis.
            </p>
            <p>
              4+ years of personal macro and technical trading complement my analytical work — giving me a practitioner&apos;s instinct on top of academic rigor.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {["Asset Management", "Corporate Finance", "DCM", "Portfolio Theory", "UEMOA Markets", "Risk Analysis"].map(tag => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-lg font-mono text-white/30" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ value, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-5 rounded-2xl"
                  style={{ background: `${color}08`, border: `1px solid ${color}20` }}
                >
                  <p className="text-2xl font-mono font-bold" style={{ color }}>{value}</p>
                  <p className="text-xs text-white/40 mt-1">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
