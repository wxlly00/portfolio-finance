"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Code, BarChart3, Calculator, Database, Brain } from "lucide-react";

const skillCategories = [
  {
    icon: Calculator,
    title: "Financial Modeling",
    gradient: "from-blue-500 to-cyan-500",
    skills: ["DCF & Valuation", "LBO Modeling", "Financial Analysis", "Budgets & Forecasting", "Sensitivity Analysis"],
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    gradient: "from-cyan-500 to-teal-500",
    skills: ["Excel Advanced (VBA)", "Python (Pandas, NumPy)", "Power Query", "Tableau / Power BI", "SQL"],
  },
  {
    icon: TrendingUp,
    title: "Market Finance",
    gradient: "from-teal-500 to-emerald-500",
    skills: ["Portfolio Management", "Technical Analysis", "Macro Trading (4+ yrs)", "Risk Management", "DCM / Bond Markets"],
  },
  {
    icon: Brain,
    title: "Quantitative Finance",
    gradient: "from-blue-500 to-indigo-500",
    skills: ["Portfolio Optimization", "VaR Modeling", "Monte Carlo Simulation", "Altman Z-Score", "ESG Scoring"],
  },
  {
    icon: Database,
    title: "Tools & Technologies",
    gradient: "from-indigo-500 to-purple-500",
    skills: ["Bloomberg (Learning)", "Excel / VBA", "Python", "Git", "Streamlit"],
  },
  {
    icon: Code,
    title: "Programming",
    gradient: "from-purple-500 to-pink-500",
    skills: ["Python", "VBA", "SQL", "R (basics)", "openpyxl"],
  },
];

const financeSkills = [
  { name: "Financial Analysis", level: 85 },
  { name: "Valuation (DCF / LBO)", level: 80 },
  { name: "Risk Management", level: 75 },
  { name: "Debt Capital Markets", level: 75 },
  { name: "Portfolio Analysis", level: 70 },
  { name: "Credit Analysis", level: 72 },
];

const tools = ["Excel", "Python", "PowerPoint", "Bloomberg", "SQL", "Streamlit", "Git", "LaTeX"];
const languages = ["French · Native", "English · C1 Professional", "Spanish · B2"];
const interests = ["Macro Trading", "Portfolio Theory", "Private Equity", "ESG Investing", "Emerging Markets", "Philosophy"];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs text-blue-400 font-mono">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-28 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Orb */}
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm mb-6 backdrop-blur-sm">
            Expertise
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-5">Skills</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Competencies built through education, internships &amp; personal projects
          </p>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className="h-full p-7 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="flex items-center gap-4 mb-5 relative">
                    <div className={`p-3 bg-gradient-to-br ${category.gradient} rounded-2xl shadow-lg`}>
                      <Icon size={20} className="text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>

                  <ul className="space-y-2.5 relative">
                    {category.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="text-gray-400 flex items-start gap-2.5 group-hover:text-gray-300 transition-colors text-sm"
                      >
                        <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mt-1 text-sm shrink-0`}>•</span>
                        <span className="leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Skill bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-8 mb-8"
        >
          <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-6">Finance &amp; Analysis</h3>
          <div className="grid md:grid-cols-2 gap-x-10">
            {financeSkills.map((skill, i) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={0.1 + i * 0.07} />
            ))}
          </div>
        </motion.div>

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-3 gap-6"
        >
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Tools &amp; Software</h4>
            <div className="flex flex-wrap gap-2">
              {tools.map((t) => (
                <span key={t} className="text-sm px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {languages.map((t) => (
                <span key={t} className="text-sm px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">{t}</span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white/5 border border-white/10 p-6">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Interests</h4>
            <div className="flex flex-wrap gap-2">
              {interests.map((t) => (
                <span key={t} className="text-sm px-3 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10">{t}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
