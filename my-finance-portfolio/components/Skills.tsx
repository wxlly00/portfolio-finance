"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const financeSkills = [
  { name: "Financial Analysis", level: 85 },
  { name: "Valuation (DCF / LBO)", level: 80 },
  { name: "Risk Management", level: 75 },
  { name: "Debt Capital Markets", level: 75 },
  { name: "Portfolio Analysis", level: 70 },
  { name: "Credit Analysis", level: 72 },
];

const techSkills = [
  { name: "Excel Advanced", level: 90 },
  { name: "Python", level: 65 },
  { name: "PowerPoint", level: 90 },
  { name: "Bloomberg (Learning)", level: 40 },
];

const languages = [
  { name: "French", sublabel: "Native", level: 100 },
  { name: "English", sublabel: "C1 — Professional", level: 90 },
  { name: "Spanish", sublabel: "B2", level: 75 },
];

function SkillBar({ name, level, delay, sublabel }: { name: string; level: number; delay: number; sublabel?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <div>
          <span className="text-sm font-medium text-slate-200">{name}</span>
          {sublabel && <span className="text-xs text-slate-500 ml-2">{sublabel}</span>}
        </div>
        <span className="text-xs text-gold font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-navy-light rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, #C9A84C, #D4B96A)`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tools = ["Excel", "Python", "PowerPoint", "Bloomberg", "SQL", "Streamlit", "Git", "LaTeX"];
  const interests = ["Macro Trading", "Portfolio Theory", "Private Equity", "ESG Investing", "Emerging Markets", "Philosophy"];

  return (
    <section id="skills" className="section-padding bg-navy-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2 gold-underline">
            Skills
          </h2>
          <p className="text-slate-400 mt-6">Competencies built through education, internships &amp; personal projects</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Finance Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-gold uppercase tracking-widest mb-6">Finance &amp; Analysis</h3>
            {financeSkills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={0.1 + i * 0.07} />
            ))}
          </motion.div>

          {/* Right — Tech + Languages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-gold uppercase tracking-widest mb-6">Technical Tools</h3>
            {techSkills.map((skill, i) => (
              <SkillBar key={skill.name} {...skill} delay={0.2 + i * 0.07} />
            ))}

            <h3 className="text-sm font-semibold text-gold uppercase tracking-widest mt-8 mb-6">Languages</h3>
            {languages.map((lang, i) => (
              <SkillBar key={lang.name} name={lang.name} level={lang.level} delay={0.5 + i * 0.07} sublabel={lang.sublabel} />
            ))}
          </motion.div>
        </div>

        {/* Tags row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-10 border-t border-white/5"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Tools &amp; Software</h4>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="text-sm px-3 py-1 rounded-full bg-navy text-slate-300 border border-white/5">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((t) => (
                  <span key={t} className="text-sm px-3 py-1 rounded-full bg-navy text-slate-300 border border-white/5">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
