"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Code, BarChart3, Calculator, Database, Brain } from "lucide-react";

const categories = [
  {
    Icon: Calculator,
    title: "Financial Modeling",
    skills: ["DCF & Valuation", "LBO Modeling", "Budgets & Forecasting", "Sensitivity Analysis"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    Icon: BarChart3,
    title: "Data Analysis",
    skills: ["Advanced Excel (VBA, Power Query)", "Python (Pandas, NumPy)", "SQL", "Tableau / Power BI"],
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    Icon: TrendingUp,
    title: "Capital Markets",
    skills: ["Portfolio Management", "Technical Analysis", "Derivatives", "Market Risk"],
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    Icon: Brain,
    title: "Quantitative Finance",
    skills: ["Time Series Analysis", "Machine Learning", "Portfolio Optimization", "Backtesting"],
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    Icon: Database,
    title: "Tools & Platforms",
    skills: ["Bloomberg Terminal", "FactSet", "Python", "R", "Git"],
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    Icon: Code,
    title: "Programming",
    skills: ["Python", "VBA", "SQL", "R", "JavaScript"],
    gradient: "from-purple-500 to-pink-500",
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 px-6 bg-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <motion.div
        className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm mb-6 backdrop-blur-sm">
            Expertise
          </div>
          <h2 className="text-5xl lg:text-6xl text-white mb-5">Skills</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Competencies built through education, internships, and personal projects
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ Icon, title, skills, gradient }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group"
            >
              <div className="h-full p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 relative overflow-hidden">
                {/* Gradient glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                <div className="flex items-center gap-4 mb-6 relative">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`p-4 bg-gradient-to-br ${gradient} rounded-2xl shadow-lg shadow-blue-500/20 shrink-0`}
                  >
                    <Icon size={22} className="text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>

                <ul className="space-y-3 relative">
                  {skills.map((skill, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + i * 0.05 }}
                      className="text-gray-400 flex items-start gap-3 group-hover:text-gray-300 transition-colors text-sm"
                    >
                      <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent mt-1 shrink-0`}>
                        ▸
                      </span>
                      <span className="leading-relaxed">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
