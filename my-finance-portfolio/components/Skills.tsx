"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calculator, BarChart3, TrendingUp, Brain, Database, Code2 } from "lucide-react";

const categories = [
  { Icon: Calculator, title: "Financial Modeling", gradient: ["#0ea5e9", "#38bdf8"],
    skills: [{ name: "DCF & Valuation", level: 90 }, { name: "LBO Modeling", level: 85 }, { name: "Budget & Forecasting", level: 88 }, { name: "Sensitivity Analysis", level: 85 }] },
  { Icon: BarChart3, title: "Data Analysis", gradient: ["#38bdf8", "#22c55e"],
    skills: [{ name: "Python / Pandas", level: 82 }, { name: "Excel VBA / Power Query", level: 90 }, { name: "SQL", level: 75 }, { name: "Power BI / Tableau", level: 72 }] },
  { Icon: TrendingUp, title: "Capital Markets", gradient: ["#22c55e", "#10b981"],
    skills: [{ name: "Portfolio Management", level: 85 }, { name: "Technical Analysis", level: 88 }, { name: "Fixed Income / DCM", level: 82 }, { name: "Derivatives", level: 70 }] },
  { Icon: Brain, title: "Quantitative Finance", gradient: ["#a78bfa", "#818cf8"],
    skills: [{ name: "Portfolio Optimization", level: 80 }, { name: "Monte Carlo Sim.", level: 78 }, { name: "Time Series", level: 72 }, { name: "Risk Modeling", level: 80 }] },
  { Icon: Database, title: "Tools & Platforms", gradient: ["#f59e0b", "#fbbf24"],
    skills: [{ name: "Bloomberg Terminal", level: 75 }, { name: "FactSet", level: 70 }, { name: "Git / GitHub", level: 80 }, { name: "Streamlit", level: 85 }] },
  { Icon: Code2, title: "Programming", gradient: ["#f43f5e", "#fb7185"],
    skills: [{ name: "Python", level: 82 }, { name: "VBA", level: 88 }, { name: "SQL", level: 75 }, { name: "R", level: 65 }] },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-28 px-6 relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none" style={{ background: "radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16"
        >
          <p className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">// skills</p>
          <h2 className="text-4xl lg:text-5xl text-white tracking-tight">Expertise</h2>
          <p className="text-white/40 mt-3 max-w-xl">Built through education, internships, and personal projects</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(({ Icon, title, gradient, skills }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div
                className="h-full p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {/* Icon + title */}
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: `linear-gradient(135deg, ${gradient[0]}20, ${gradient[1]}20)`, border: `1px solid ${gradient[0]}30` }}
                  >
                    <Icon size={16} style={{ color: gradient[0] }} />
                  </div>
                  <h3 className="text-sm font-semibold text-white/80">{title}</h3>
                </div>

                {/* Skill bars */}
                <div className="space-y-3">
                  {skills.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-white/40">{skill.name}</span>
                        <span className="text-xs font-mono" style={{ color: gradient[0] }}>{skill.level}%</span>
                      </div>
                      <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 0.8, delay: index * 0.1 + i * 0.08, ease: "easeOut" }}
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(to right, ${gradient[0]}, ${gradient[1]})` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
