"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight, TrendingUp, AlertTriangle, BarChart2, Leaf, Shield, LineChart } from "lucide-react";

/* ── SVG chart illustrations per project ── */

function EfficientFrontierChart() {
  const dots = [
    [30,80],[40,70],[55,62],[65,55],[75,48],[85,42],[95,38],[105,35],[115,33],[120,32],
    [90,50],[60,65],[70,58],[80,45],[100,37],[50,68],
  ];
  const optimal = [115, 33];
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      {/* Axes */}
      <line x1="20" y1="5" x2="20" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <line x1="20" y1="85" x2="155" y2="85" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      {/* Frontier curve */}
      <path d="M 30 80 Q 65 40 120 32" fill="none" stroke="url(#fg)" strokeWidth="2" strokeLinecap="round" />
      <defs>
        <linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0ea5e9" />
          <stop offset="100%" stopColor="#22c55e" />
        </linearGradient>
      </defs>
      {/* Dots */}
      {dots.map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="2" fill="rgba(14,165,233,0.4)" />
      ))}
      {/* Optimal point */}
      <circle cx={optimal[0]} cy={optimal[1]} r="5" fill="none" stroke="#22c55e" strokeWidth="2" />
      <circle cx={optimal[0]} cy={optimal[1]} r="2.5" fill="#22c55e" />
      <text x={optimal[0]+8} y={optimal[1]+4} fill="#22c55e" fontSize="7" fontFamily="monospace">Max Sharpe</text>
      {/* Labels */}
      <text x="5" y="50" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace" transform="rotate(-90, 12, 50)">Return</text>
      <text x="80" y="96" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="monospace">Risk (σ)</text>
    </svg>
  );
}

function WaterfallChart() {
  const bars = [
    { label: "EV", val: 80, y: 10, color: "#0ea5e9" },
    { label: "Debt", val: 45, y: 10, color: "#f43f5e" },
    { label: "Equity", val: 15, y: 55, color: "#22c55e" },
    { label: "Exit", val: 60, y: 10, color: "#f59e0b" },
  ];
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      {[20,40,60,80].map((y,i) => (
        <line key={i} x1="15" y1={y} x2="155" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}
      {bars.map((b, i) => (
        <motion.g key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: i * 0.15 }} style={{ transformOrigin: `${20 + i * 35}px 90px` }}>
          <rect x={15 + i * 35} y={b.y} width="25" height={b.val} fill={b.color} opacity="0.8" rx="3" />
          <text x={27.5 + i * 35} y="98" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace" textAnchor="middle">{b.label}</text>
        </motion.g>
      ))}
      <text x="80" y="8" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="monospace" textAnchor="middle">Debt Waterfall — $44Bn</text>
    </svg>
  );
}

function DCFLineChart() {
  const points = "20,80 40,72 60,65 80,58 100,52 120,45 140,35";
  const intrinsic = "20,70 140,40";
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      <defs>
        <linearGradient id="dcfg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[20,40,60,80].map((y,i) => (
        <line key={i} x1="15" y1={y} x2="155" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
      ))}
      <path d={`M ${points.split(' ').join(' L ')} L 140 95 L 20 95 Z`} fill="url(#dcfg)" />
      <polyline points={points} fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="20" y1="55" x2="140" y2="55" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="145" y="58" fill="#f59e0b" fontSize="6" fontFamily="monospace">Market</text>
      <text x="145" y="42" fill="#0ea5e9" fontSize="6" fontFamily="monospace">DCF</text>
      {[20,40,60,80,100,120,140].map((x,i) => (
        <circle key={i} cx={x} cy={[80,72,65,58,52,45,35][i]} r="2.5" fill="#0ea5e9" />
      ))}
    </svg>
  );
}

function VaRChart() {
  const normal = Array.from({ length: 60 }, (_, i) => {
    const x = (i / 59) * 140 + 10;
    const z = (i / 59 - 0.5) * 6;
    const y = 85 - 60 * Math.exp(-0.5 * z * z);
    return [x, y];
  });
  const path = normal.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ');
  const tail = normal.filter(p => p[0] <= 28);
  const tailPath = tail.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ') + ` L ${tail[tail.length-1][0]} 85 L 10 85 Z`;
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      <defs>
        <linearGradient id="ng" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path d={path + ` L 150 85 L 10 85 Z`} fill="url(#ng)" />
      <path d={path} fill="none" stroke="#0ea5e9" strokeWidth="1.5" />
      <path d={tailPath} fill="rgba(244,63,94,0.4)" />
      <line x1="28" y1="20" x2="28" y2="85" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="5" y="18" fill="#f43f5e" fontSize="6" fontFamily="monospace">95% VaR</text>
      <text x="5" y="25" fill="#f43f5e" fontSize="6" fontFamily="monospace">$18Bn+</text>
    </svg>
  );
}

function RadarChart() {
  const cx = 80, cy = 55, r = 40;
  const labels = ["E", "S", "G", "Gov", "ESG"];
  const scores = [0.38, 0.72, 0.65, 0.85, 0.53];
  const scores2 = [0.91, 0.78, 0.82, 0.88, 0.85];
  const pts = (s: number[]) => s.map((v, i) => {
    const a = (i / s.length) * Math.PI * 2 - Math.PI / 2;
    return [cx + r * v * Math.cos(a), cy + r * v * Math.sin(a)];
  });
  const toPath = (pts: number[][]) => pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ') + ' Z';
  const p1 = pts(scores), p2 = pts(scores2);
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      {[0.25, 0.5, 0.75, 1].map((t, i) => (
        <polygon key={i} points={labels.map((_, li) => { const a = (li/labels.length)*Math.PI*2 - Math.PI/2; return `${cx + r*t*Math.cos(a)},${cy + r*t*Math.sin(a)}`; }).join(' ')} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      ))}
      {labels.map((_, i) => { const a = (i/labels.length)*Math.PI*2 - Math.PI/2; return <line key={i} x1={cx} y1={cy} x2={cx + r*Math.cos(a)} y2={cy + r*Math.sin(a)} stroke="rgba(255,255,255,0.06)" strokeWidth="1" />; })}
      <path d={toPath(p1)} fill="rgba(244,63,94,0.2)" stroke="#f43f5e" strokeWidth="1.5" />
      <path d={toPath(p2)} fill="rgba(34,197,94,0.2)" stroke="#22c55e" strokeWidth="1.5" />
      <text x="5" y="12" fill="#f43f5e" fontSize="6" fontFamily="monospace">TotalEnergies</text>
      <text x="5" y="20" fill="#22c55e" fontSize="6" fontFamily="monospace">Schneider</text>
    </svg>
  );
}

function GaugeChart() {
  const score = 0.9;
  const angle = -135 + score * 270;
  const cx = 80, cy = 65, r = 45;
  const arcPath = (start: number, end: number, color: string) => {
    const s = (start * Math.PI) / 180;
    const e = (end * Math.PI) / 180;
    const x1 = cx + r * Math.cos(s), y1 = cy + r * Math.sin(s);
    const x2 = cx + r * Math.cos(e), y2 = cy + r * Math.sin(e);
    return `<path d="M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}" fill="none" stroke="${color}" strokeWidth="8" strokeLinecap="round" />`;
  };
  const needle = { x: cx + (r-10) * Math.cos((angle * Math.PI) / 180), y: cy + (r-10) * Math.sin((angle * Math.PI) / 180) };
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      {/* Background arc */}
      <path d={`M ${cx + r * Math.cos(-135 * Math.PI/180)} ${cy + r * Math.sin(-135 * Math.PI/180)} A ${r} ${r} 0 1 1 ${cx + r * Math.cos(-45 * Math.PI/180)} ${cy + r * Math.sin(-45 * Math.PI/180)}`} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
      {/* Danger zone */}
      <path d={`M ${cx + r * Math.cos(-135 * Math.PI/180)} ${cy + r * Math.sin(-135 * Math.PI/180)} A ${r} ${r} 0 0 1 ${cx + r * Math.cos(-108 * Math.PI/180)} ${cy + r * Math.sin(-108 * Math.PI/180)}`} fill="none" stroke="#f43f5e" strokeWidth="8" strokeOpacity="0.8" />
      {/* Safe zone */}
      <path d={`M ${cx + r * Math.cos(-27 * Math.PI/180)} ${cy + r * Math.sin(-27 * Math.PI/180)} A ${r} ${r} 0 0 1 ${cx + r * Math.cos(-45 * Math.PI/180)} ${cy + r * Math.sin(-45 * Math.PI/180)}`} fill="none" stroke="#22c55e" strokeWidth="8" strokeOpacity="0.8" />
      {/* Needle */}
      <line x1={cx} y1={cy} x2={needle.x} y2={needle.y} stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" />
      <circle cx={cx} cy={cy} r="4" fill="#f43f5e" />
      {/* Score */}
      <text x={cx} y={cy-15} textAnchor="middle" fill="white" fontSize="14" fontFamily="monospace" fontWeight="bold">0.9</text>
      <text x={cx} y={cy-6} textAnchor="middle" fill="#f43f5e" fontSize="6" fontFamily="monospace">DISTRESS ZONE</text>
      <text x="12" y="85" fill="#f43f5e" fontSize="5.5" fontFamily="monospace">← Bankrupt</text>
      <text x="112" y="85" fill="#22c55e" fontSize="5.5" fontFamily="monospace">Safe →</text>
    </svg>
  );
}

const projects = [
  {
    title: "Portfolio Optimizer",
    category: "Asset Management",
    description: "Markowitz mean-variance optimization with real market data. Efficient frontier, Sharpe maximization, Monte Carlo simulation of 1,000+ portfolios.",
    tech: ["Python", "PyPortfolioOpt", "Streamlit", "yfinance"],
    github: "https://github.com/Wxlly00/portfolio-optimizer",
    icon: <LineChart size={16} />,
    Chart: EfficientFrontierChart,
    accent: "#0ea5e9",
    caseStudy: { company: "FAANG 2019–2023", metric: "Sharpe 1.84 vs 0.91" },
  },
  {
    title: "LBO Model",
    category: "Private Equity",
    description: "End-to-end Leveraged Buyout model — debt waterfall, 5Y cash flow projections, IRR/MOIC across bear, base, and bull exit scenarios.",
    tech: ["Python", "openpyxl", "pandas"],
    github: "https://github.com/Wxlly00/lbo-model",
    icon: <BarChart2 size={16} />,
    Chart: WaterfallChart,
    accent: "#a78bfa",
    caseStudy: { company: "Twitter/Musk $44Bn", metric: "IRR –12% base case" },
  },
  {
    title: "DCF Valuation Engine",
    category: "Corporate Finance",
    description: "Automated DCF pulling live data via API. Intrinsic value, WACC sensitivity tables, margin-of-safety analysis.",
    tech: ["Python", "yfinance", "pandas", "Streamlit"],
    github: "https://github.com/Wxlly00/dcf-engine",
    icon: <TrendingUp size={16} />,
    Chart: DCFLineChart,
    accent: "#38bdf8",
    caseStudy: { company: "Apple Q4 2023", metric: "$178 intrinsic vs $189 market" },
  },
  {
    title: "VaR Risk Dashboard",
    category: "Risk Management",
    description: "Historical, Parametric & Monte Carlo VaR (10K simulations). Interactive stress testing, portfolio Greeks, tail-risk decomposition.",
    tech: ["Python", "scipy", "numpy", "Streamlit"],
    github: "https://github.com/Wxlly00/var-dashboard",
    icon: <AlertTriangle size={16} />,
    Chart: VaRChart,
    accent: "#f43f5e",
    caseStudy: { company: "SVB March 2023", metric: "95% VaR breach $18Bn+" },
  },
  {
    title: "ESG Scoring Tool",
    category: "Sustainable Finance",
    description: "Multi-criteria ESG framework. Weighted E/S/G scoring, radar visualization, automated CAC40 screening and rebalancing signals.",
    tech: ["Python", "pandas", "plotly", "Streamlit"],
    github: "https://github.com/Wxlly00/esg-tool",
    icon: <Leaf size={16} />,
    Chart: RadarChart,
    accent: "#22c55e",
    caseStudy: { company: "CAC40 screening", metric: "TotalEnergies 38 vs Schneider 91" },
  },
  {
    title: "Credit Analysis Dashboard",
    category: "Fixed Income",
    description: "Financial ratio analysis, Altman Z-Score, internal rating model (AAA → D), traffic-light risk visualization.",
    tech: ["Python", "Streamlit", "pandas"],
    github: "https://github.com/Wxlly00/credit-dashboard",
    icon: <Shield size={16} />,
    Chart: GaugeChart,
    accent: "#f59e0b",
    caseStudy: { company: "WeWork 2022–2023", metric: "Z-Score 0.9 → Chapter 11" },
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #030712, #050f1a, #030712)" }}>
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">// projects</p>
          <h2 className="text-4xl lg:text-5xl text-white tracking-tight">Featured Projects</h2>
          <p className="text-white/40 mt-3 max-w-xl">
            Quantitative finance tools with real-world case studies
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {projects.map((project, index) => {
            const { Chart } = project;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group"
              >
                <div
                  className="h-full rounded-2xl overflow-hidden flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    transition: "border-color 0.3s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${project.accent}33`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}
                >
                  {/* Chart area */}
                  <div className="h-[160px] p-4 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${project.accent}0a 0%, transparent 70%)` }} />
                    <Chart />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="p-1.5 rounded-md" style={{ background: `${project.accent}18`, color: project.accent }}>
                        {project.icon}
                      </span>
                      <span className="text-xs font-mono text-white/30">{project.category}</span>
                    </div>

                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Case study pill */}
                    <div className="flex items-center gap-2 mb-4 p-2.5 rounded-lg" style={{ background: `${project.accent}0d`, border: `1px solid ${project.accent}20` }}>
                      <TrendingUp size={11} style={{ color: project.accent }} />
                      <div>
                        <p className="text-xs font-mono" style={{ color: project.accent }}>{project.caseStudy.company}</p>
                        <p className="text-xs text-white/40">{project.caseStudy.metric}</p>
                      </div>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tech.map((t, i) => (
                        <span key={i} className="text-xs px-2 py-0.5 rounded font-mono text-white/30 bg-white/5">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* GitHub */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-white/40 hover:text-white transition-colors group/link"
                    >
                      <Github size={13} />
                      View on GitHub
                      <ArrowUpRight size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
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
