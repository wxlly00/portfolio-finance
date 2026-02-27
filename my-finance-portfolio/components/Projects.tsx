"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Portfolio Optimizer",
    category: "Asset Management",
    description: "Markowitz mean-variance optimization with real market data. Interactive dashboard featuring efficient frontier visualization, Sharpe ratio maximization, and portfolio analytics.",
    tech: ["Python", "Streamlit", "PyPortfolioOpt", "yfinance"],
    github: "https://github.com/Wxlly00/portfolio-optimizer",
    gradient: "from-blue-950/80 via-blue-900/40 to-cyan-950/60",
    accentColor: "text-blue-400",
    emoji: "📊",
  },
  {
    title: "LBO Model",
    category: "Private Equity",
    description: "End-to-end Leveraged Buyout model with debt waterfall, 5-year cash flow projections, and IRR/MOIC analysis across bear, base, and bull exit scenarios.",
    tech: ["Python", "openpyxl", "pandas"],
    github: "https://github.com/Wxlly00/lbo-model",
    gradient: "from-violet-950/80 via-purple-900/40 to-blue-950/60",
    accentColor: "text-violet-400",
    emoji: "💰",
  },
  {
    title: "DCF Valuation Engine",
    category: "Corporate Finance",
    description: "Automated Discounted Cash Flow engine pulling live financial data via API. Generates intrinsic valuations with WACC sensitivity tables and upside/downside analysis.",
    tech: ["Python", "yfinance", "pandas", "Streamlit"],
    github: "https://github.com/Wxlly00/dcf-engine",
    gradient: "from-emerald-950/80 via-teal-900/40 to-cyan-950/60",
    accentColor: "text-emerald-400",
    emoji: "🔢",
  },
  {
    title: "VaR Risk Dashboard",
    category: "Risk Management",
    description: "Multi-method Value-at-Risk calculator using Historical, Parametric, and Monte Carlo (10,000 simulations) approaches with interactive portfolio stress testing.",
    tech: ["Python", "Streamlit", "scipy", "numpy"],
    github: "https://github.com/Wxlly00/var-dashboard",
    gradient: "from-red-950/80 via-rose-900/40 to-pink-950/60",
    accentColor: "text-red-400",
    emoji: "⚡",
  },
  {
    title: "ESG Scoring Tool",
    category: "Sustainable Finance",
    description: "Multi-criteria ESG screening framework for equity universes. Weighted scoring across Environmental, Social and Governance pillars with heatmap and radar visualizations.",
    tech: ["Python", "pandas", "plotly", "Streamlit"],
    github: "https://github.com/Wxlly00/esg-tool",
    gradient: "from-green-950/80 via-emerald-900/40 to-teal-950/60",
    accentColor: "text-green-400",
    emoji: "🌱",
  },
  {
    title: "Credit Analysis Dashboard",
    category: "Fixed Income",
    description: "Credit assessment tool using key financial ratios, Altman Z-Score, and an internal rating model mapping issuers from AAA to D with traffic-light risk visualization.",
    tech: ["Python", "Streamlit", "pandas"],
    github: "https://github.com/Wxlly00/credit-dashboard",
    gradient: "from-amber-950/80 via-yellow-900/40 to-orange-950/60",
    accentColor: "text-amber-400",
    emoji: "🏛️",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-28 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm mb-6 backdrop-blur-sm">
            Portfolio
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-5">Featured Projects</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Quantitative finance tools built to demonstrate real-world analytical capabilities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />

                {/* Image placeholder */}
                <div className={`aspect-video relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  {/* Decorative content in image area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl opacity-20 select-none">{project.emoji}</span>
                  </div>
                  {/* Category label over image */}
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border border-current/20 bg-black/40 backdrop-blur-sm ${project.accentColor}`}>
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-7 relative">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub link */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-blue-500/50 hover:text-white transition-all duration-200 group/btn"
                  >
                    <Github size={15} />
                    View on GitHub
                    <ArrowUpRight size={13} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
