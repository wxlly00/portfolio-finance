"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, BarChart3, TrendingUp, Brain, Database, Code2 } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const icons = [Calculator, BarChart3, TrendingUp, Brain, Database, Code2];
const gradients = [
  ["#0ea5e9", "#38bdf8"], ["#38bdf8", "#22c55e"], ["#22c55e", "#10b981"],
  ["#a78bfa", "#818cf8"], ["#f59e0b", "#fbbf24"], ["#f43f5e", "#fb7185"],
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();
  const s = t.skills;

  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.05) 0%, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-16">
          <p className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">{s.tag}</p>
          <h2 className="text-4xl lg:text-5xl text-white tracking-tight">{s.title}</h2>
          <p className="text-white/40 mt-3 max-w-xl">{s.subtitle}</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {s.categories.map(({ title, skills }, index) => {
            const Icon = icons[index];
            const [g1, g2] = gradients[index];
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ y: -4 }}>
                <div className="h-full p-6 rounded-2xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `linear-gradient(135deg, ${g1}20, ${g2}20)`, border: `1px solid ${g1}30` }}>
                      <Icon size={16} style={{ color: g1 }} />
                    </div>
                    <h3 className="text-sm font-semibold text-white/80">{title}</h3>
                  </div>
                  <div className="space-y-3">
                    {skills.map((skill, i) => (
                      <div key={i}>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs text-white/40">{skill.name}</span>
                          <span className="text-xs font-mono" style={{ color: g1 }}>{skill.level}%</span>
                        </div>
                        <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 0.8, delay: index * 0.1 + i * 0.08, ease: "easeOut" }}
                            className="h-full rounded-full"
                            style={{ background: `linear-gradient(to right, ${g1}, ${g2})` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
