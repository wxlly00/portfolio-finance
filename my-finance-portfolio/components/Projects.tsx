"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Optimizer",
    category: "Asset Management",
    desc: "Markowitz mean-variance optimization with real market data. Interactive dashboard featuring efficient frontier visualization, Sharpe ratio maximization, and portfolio analytics.",
    tech: ["Python", "Streamlit", "PyPortfolioOpt", "yfinance"],
    github: "https://github.com/Wxlly00/portfolio-optimizer",
    accent: "#3B82F6",
    emoji: "📊",
  },
  {
    title: "LBO Model",
    category: "Private Equity",
    desc: "End-to-end Leveraged Buyout model with debt waterfall, 5-year cash flow projections, and IRR/MOIC analysis across bear, base, and bull exit scenarios.",
    tech: ["Python", "openpyxl", "pandas"],
    github: "https://github.com/Wxlly00/lbo-model",
    accent: "#8B5CF6",
    emoji: "💰",
  },
  {
    title: "DCF Valuation Engine",
    category: "Corporate Finance",
    desc: "Automated Discounted Cash Flow engine pulling live financial data via API. Generates intrinsic valuations with WACC sensitivity tables and upside/downside analysis.",
    tech: ["Python", "yfinance", "pandas", "Streamlit"],
    github: "https://github.com/Wxlly00/dcf-engine",
    accent: "#10B981",
    emoji: "🔢",
  },
  {
    title: "VaR Risk Dashboard",
    category: "Risk Management",
    desc: "Multi-method Value-at-Risk calculator using Historical, Parametric, and Monte Carlo (10,000 simulations) approaches with interactive portfolio stress testing.",
    tech: ["Python", "Streamlit", "scipy", "numpy"],
    github: "https://github.com/Wxlly00/var-dashboard",
    accent: "#EF4444",
    emoji: "⚡",
  },
  {
    title: "ESG Scoring Tool",
    category: "Sustainable Finance",
    desc: "Multi-criteria ESG screening framework for equity universes. Weighted scoring across Environmental, Social and Governance pillars with heatmap and radar visualizations.",
    tech: ["Python", "pandas", "plotly", "Streamlit"],
    github: "https://github.com/Wxlly00/esg-tool",
    accent: "#059669",
    emoji: "🌱",
  },
  {
    title: "Credit Analysis Dashboard",
    category: "Fixed Income",
    desc: "Credit assessment tool using key financial ratios, Altman Z-Score, and an internal rating model mapping issuers from AAA to D with traffic-light risk visualization.",
    tech: ["Python", "Streamlit", "pandas"],
    github: "https://github.com/Wxlly00/credit-dashboard",
    accent: "#F59E0B",
    emoji: "🏛️",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2 inline-block gold-underline">
            Featured Projects
          </h2>
          <p className="text-slate-400 mt-6 max-w-2xl mx-auto">
            Quantitative finance tools built to demonstrate real-world analytical capabilities
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:border-gold/30 hover:shadow-lg cursor-pointer"
              style={{ "--accent": project.accent } as React.CSSProperties}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-2xl mb-2 block">{project.emoji}</span>
                  <span className="text-xs font-medium px-2 py-0.5 rounded-full border border-gold/25 text-gold/80">
                    {project.category}
                  </span>
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-500 hover:text-gold transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github size={18} />
                </a>
              </div>

              <h3 className="font-serif text-lg font-bold text-white mb-2 group-hover:text-gold transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.desc}</p>

              {/* Tech badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded-md border border-gold/20 text-gold/70 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              {/* Link */}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs text-gold/70 hover:text-gold transition-colors font-medium"
              >
                View on GitHub <ExternalLink size={11} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
