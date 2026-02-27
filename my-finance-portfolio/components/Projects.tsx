"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "Portfolio Optimizer",
    category: "Asset Management",
    description:
      "Markowitz mean-variance optimization with real market data. Interactive dashboard featuring efficient frontier visualization, Sharpe ratio maximization, and portfolio analytics.",
    image:
      "https://images.unsplash.com/photo-1691643158804-d3f02eb456a3?w=800&q=80&auto=format&fit=crop",
    tech: ["Python", "Streamlit", "PyPortfolioOpt", "yfinance"],
    github: "https://github.com/Wxlly00/portfolio-optimizer",
    accent: { text: "text-blue-400", border: "border-blue-500/30", bg: "bg-blue-500/10", glow: "from-blue-500/20" },
    caseStudy: {
      company: "FAANG Portfolio (2019–2023)",
      insight:
        "Optimized allocation across AAPL, GOOGL, META, AMZN, NFLX — achieving a Sharpe ratio of 1.84 vs. S&P 500 benchmark of 0.91 over the same period.",
      metric: "Sharpe +102%",
    },
  },
  {
    title: "LBO Model",
    category: "Private Equity",
    description:
      "End-to-end Leveraged Buyout model with debt waterfall, 5-year cash flow projections, and IRR/MOIC analysis across bear, base, and bull exit scenarios.",
    image:
      "https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?w=800&q=80&auto=format&fit=crop",
    tech: ["Python", "openpyxl", "pandas"],
    github: "https://github.com/Wxlly00/lbo-model",
    accent: { text: "text-violet-400", border: "border-violet-500/30", bg: "bg-violet-500/10", glow: "from-violet-500/20" },
    caseStudy: {
      company: "Twitter / X — Musk Acquisition (2022)",
      insight:
        "Modeled the $44Bn deal at $54.20/share with ~$13Bn debt load. Base scenario IRR: negative at current EBITDA run-rate, validating analyst concerns about deal structure.",
      metric: "IRR: –12% base",
    },
  },
  {
    title: "DCF Valuation Engine",
    category: "Corporate Finance",
    description:
      "Automated Discounted Cash Flow engine pulling live financial data via API. Generates intrinsic valuations with WACC sensitivity tables and upside/downside analysis.",
    image:
      "https://images.unsplash.com/photo-1762279389020-eeeb69c25813?w=800&q=80&auto=format&fit=crop",
    tech: ["Python", "yfinance", "pandas", "Streamlit"],
    github: "https://github.com/Wxlly00/dcf-engine",
    accent: { text: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10", glow: "from-emerald-500/20" },
    caseStudy: {
      company: "Apple Inc. — Q4 2023",
      insight:
        "At WACC of 8.5% and terminal growth of 3%, engine produced an intrinsic value of $178 vs. market price of $189 — flagging a 6% premium and suggesting limited upside.",
      metric: "–6% vs market",
    },
  },
  {
    title: "VaR Risk Dashboard",
    category: "Risk Management",
    description:
      "Multi-method Value-at-Risk calculator using Historical, Parametric, and Monte Carlo (10,000 simulations) approaches with interactive portfolio stress testing.",
    image:
      "https://images.unsplash.com/photo-1505209487757-5114235191e5?w=800&q=80&auto=format&fit=crop",
    tech: ["Python", "Streamlit", "scipy", "numpy"],
    github: "https://github.com/Wxlly00/var-dashboard",
    accent: { text: "text-red-400", border: "border-red-500/30", bg: "bg-red-500/10", glow: "from-red-500/20" },
    caseStudy: {
      company: "Silicon Valley Bank — March 2023",
      insight:
        "Stress-testing SVB's HTM bond portfolio against a +300bps rate shock revealed a 95% VaR breach of $18Bn+ — a signal their internal models critically underweighted duration risk.",
      metric: "VaR breach: $18Bn+",
    },
  },
  {
    title: "ESG Scoring Tool",
    category: "Sustainable Finance",
    description:
      "Multi-criteria ESG screening framework for equity universes. Weighted scoring across Environmental, Social and Governance pillars with heatmap and radar visualizations.",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80&auto=format&fit=crop",
    tech: ["Python", "pandas", "plotly", "Streamlit"],
    github: "https://github.com/Wxlly00/esg-tool",
    accent: { text: "text-green-400", border: "border-green-500/30", bg: "bg-green-500/10", glow: "from-green-500/20" },
    caseStudy: {
      company: "CAC40 — TotalEnergies vs Schneider Electric",
      insight:
        "TotalEnergies scored 38/100 on Environmental pillar vs Schneider Electric at 91/100. The 53-point gap drove a strong sell signal under ESG-weighted portfolio rebalancing.",
      metric: "Score gap: 53pts",
    },
  },
  {
    title: "Credit Analysis Dashboard",
    category: "Fixed Income",
    description:
      "Credit assessment tool using key financial ratios, Altman Z-Score, and an internal rating model mapping issuers from AAA to D with traffic-light risk visualization.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80&auto=format&fit=crop",
    tech: ["Python", "Streamlit", "pandas"],
    github: "https://github.com/Wxlly00/credit-dashboard",
    accent: { text: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/10", glow: "from-amber-500/20" },
    caseStudy: {
      company: "WeWork — 2022–2023 Distress",
      insight:
        "Dashboard flagged WeWork with Altman Z-Score of 0.9 (distress zone < 1.23) 14 months before Chapter 11 filing. Internal rating: CCC–. Debt-to-EBITDA: 42x.",
      metric: "Z-Score: 0.9 → Bankrupt",
    },
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-32 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm mb-6 backdrop-blur-sm">
            Portfolio
          </div>
          <h2 className="text-5xl lg:text-6xl text-white mb-5">Featured Projects</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Quantitative finance tools built to demonstrate real-world analytical capabilities
          </p>
        </motion.div>

        {/* Grid */}
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
                {/* Hover glow */}
                <div className={`absolute inset-0 pointer-events-none bg-gradient-to-br ${project.accent.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Image */}
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                  />
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border bg-black/50 backdrop-blur-sm ${project.accent.text} ${project.accent.border}`}>
                      {project.category}
                    </span>
                  </div>
                  {/* Metric badge */}
                  <div className="absolute bottom-4 right-4 z-20">
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${project.accent.bg} border ${project.accent.border} ${project.accent.text} backdrop-blur-sm font-mono`}>
                      {project.caseStudy.metric}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 relative">
                  <h3 className={`text-2xl font-bold mb-3 text-white group-hover:${project.accent.text} transition-colors`}>
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-5 leading-relaxed text-sm">{project.description}</p>

                  {/* Case Study */}
                  <div className={`mb-5 p-4 rounded-2xl border ${project.accent.border} ${project.accent.bg}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp size={13} className={project.accent.text} />
                      <span className={`text-xs font-semibold uppercase tracking-wider ${project.accent.text}`}>
                        Case Study
                      </span>
                    </div>
                    <p className={`text-xs font-semibold mb-1.5 ${project.accent.text}`}>
                      {project.caseStudy.company}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed">{project.caseStudy.insight}</p>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* GitHub */}
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
