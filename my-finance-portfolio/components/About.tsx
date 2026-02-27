"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLang } from "@/lib/LanguageContext";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-16">
          <p className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">{a.tag}</p>
          <h2 className="text-4xl lg:text-5xl text-white tracking-tight">{a.title}</h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6 }} className="space-y-4 text-[15px] text-white/50 leading-relaxed">
            <p><span className="text-sky-400">BIDC</span> — {a.p1.split("BIDC")[1]?.split("SGI-TOGO")[0]}<span className="text-sky-400">SGI-TOGO</span>{a.p1.split("SGI-TOGO")[1]}</p>
            <p>{a.p2.split("€500K")[0]}<span className="text-emerald-400 font-medium">€500K{a.p2.split("€500K")[1]?.split("revenue")[0]}revenue</span>{a.p2.split("revenue")[1]}</p>
            <p>{a.p3.split("Université Paris-Saclay")[0]}<span className="text-sky-400">Université Paris-Saclay</span>{a.p3.split("Université Paris-Saclay")[1]}</p>
            <p>{a.p4}</p>
            <div className="flex flex-wrap gap-2 pt-2">
              {a.tags.map(tag => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-lg font-mono text-white/30" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>{tag}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="grid grid-cols-2 gap-4">
              {a.stats.map(({ value, label, color }, i) => (
                <motion.div key={label} initial={{ opacity: 0, y: 16 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.1 }}
                  className="p-5 rounded-2xl" style={{ background: `${color}08`, border: `1px solid ${color}20` }}>
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
