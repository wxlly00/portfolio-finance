"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ArrowUpRight, TrendingUp, AlertTriangle, BarChart2, Leaf, Shield, LineChart } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

/* ── SVG chart illustrations ── */
function EfficientFrontierChart() {
  const dots = [[30,80],[40,70],[55,62],[65,55],[75,48],[85,42],[95,38],[105,35],[115,33],[120,32],[90,50],[60,65],[70,58],[80,45],[100,37],[50,68]];
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      <line x1="20" y1="5" x2="20" y2="85" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <line x1="20" y1="85" x2="155" y2="85" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <path d="M 30 80 Q 65 40 120 32" fill="none" stroke="url(#fg)" strokeWidth="2" strokeLinecap="round" />
      <defs><linearGradient id="fg" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stopColor="#0ea5e9" /><stop offset="100%" stopColor="#22c55e" /></linearGradient></defs>
      {dots.map(([x,y], i) => <circle key={i} cx={x} cy={y} r="2" fill="rgba(14,165,233,0.4)" />)}
      <circle cx={120} cy={32} r="5" fill="none" stroke="#22c55e" strokeWidth="2" />
      <circle cx={120} cy={32} r="2.5" fill="#22c55e" />
      <text x="128" y="36" fill="#22c55e" fontSize="6" fontFamily="monospace">Max Sharpe</text>
      <text x="5" y="50" fill="rgba(255,255,255,0.25)" fontSize="6" fontFamily="monospace" transform="rotate(-90, 12, 50)">Return</text>
      <text x="75" y="96" fill="rgba(255,255,255,0.25)" fontSize="6" fontFamily="monospace">Risk (σ)</text>
    </svg>
  );
}
function WaterfallChart() {
  const bars = [{ y: 10, h: 70, color: "#0ea5e9", label: "EV" },{ y: 10, h: 45, color: "#f43f5e", label: "Debt" },{ y: 55, h: 25, color: "#22c55e", label: "Equity" },{ y: 10, h: 60, color: "#f59e0b", label: "Exit" }];
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      {[20,40,60,80].map((y,i) => <line key={i} x1="15" y1={y} x2="155" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />)}
      {bars.map((b, i) => (
        <motion.g key={i} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: i * 0.15 }} style={{ transformOrigin: `${20 + i * 35}px 90px` }}>
          <rect x={15 + i * 35} y={b.y} width="25" height={b.h} fill={b.color} opacity="0.85" rx="3" />
          <text x={27.5 + i * 35} y="98" fill="rgba(255,255,255,0.4)" fontSize="6" fontFamily="monospace" textAnchor="middle">{b.label}</text>
        </motion.g>
      ))}
    </svg>
  );
}
function DCFLineChart() {
  const pts = "20,80 40,72 60,65 80,58 100,52 120,45 140,35";
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      <defs><linearGradient id="dcfg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" /><stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" /></linearGradient></defs>
      {[20,40,60,80].map((y,i) => <line key={i} x1="15" y1={y} x2="155" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />)}
      <path d={`M ${pts.split(' ').join(' L ')} L 140 95 L 20 95 Z`} fill="url(#dcfg)" />
      <polyline points={pts} fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="20" y1="55" x2="140" y2="55" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="4 3" />
      <text x="145" y="58" fill="#f59e0b" fontSize="6" fontFamily="monospace">Mkt</text>
      <text x="145" y="42" fill="#0ea5e9" fontSize="6" fontFamily="monospace">DCF</text>
      {[[20,80],[40,72],[60,65],[80,58],[100,52],[120,45],[140,35]].map(([x,y],i) => <circle key={i} cx={x} cy={y} r="2.5" fill="#0ea5e9" />)}
    </svg>
  );
}
function VaRChart() {
  const normal = Array.from({ length: 60 }, (_, i) => { const x = (i/59)*140+10; const z=(i/59-0.5)*6; return [x, 85-60*Math.exp(-0.5*z*z)]; });
  const path = normal.map((p, i) => `${i===0?'M':'L'} ${p[0]} ${p[1]}`).join(' ');
  const tail = normal.filter(p => p[0] <= 28);
  const tailPath = tail.map((p, i) => `${i===0?'M':'L'} ${p[0]} ${p[1]}`).join(' ') + ` L ${tail[tail.length-1][0]} 85 L 10 85 Z`;
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      <defs><linearGradient id="ng" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.35" /><stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.03" /></linearGradient></defs>
      <path d={path + ` L 150 85 L 10 85 Z`} fill="url(#ng)" />
      <path d={path} fill="none" stroke="#0ea5e9" strokeWidth="1.5" />
      <path d={tailPath} fill="rgba(244,63,94,0.4)" />
      <line x1="28" y1="20" x2="28" y2="85" stroke="#f43f5e" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="5" y="18" fill="#f43f5e" fontSize="6" fontFamily="monospace">95% VaR</text>
      <text x="5" y="26" fill="#f43f5e" fontSize="6" fontFamily="monospace">$18Bn+</text>
    </svg>
  );
}
function RadarChart() {
  const cx=80,cy=55,r=40,labels=["E","S","G","Gov","ESG"];
  const s1=[0.38,0.72,0.65,0.85,0.53],s2=[0.91,0.78,0.82,0.88,0.85];
  const pts=(s:number[])=>s.map((v,i)=>{const a=(i/s.length)*Math.PI*2-Math.PI/2;return[cx+r*v*Math.cos(a),cy+r*v*Math.sin(a)];});
  const p=(pts:number[][])=>pts.map((p,i)=>`${i===0?'M':'L'} ${p[0]} ${p[1]}`).join(' ')+'Z';
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      {[0.25,0.5,0.75,1].map((t,i)=><polygon key={i} points={labels.map((_,li)=>{const a=(li/labels.length)*Math.PI*2-Math.PI/2;return `${cx+r*t*Math.cos(a)},${cy+r*t*Math.sin(a)}`;}).join(' ')} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>)}
      {labels.map((_,i)=>{const a=(i/labels.length)*Math.PI*2-Math.PI/2;return<line key={i} x1={cx} y1={cy} x2={cx+r*Math.cos(a)} y2={cy+r*Math.sin(a)} stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>;})}
      <path d={p(pts(s1))} fill="rgba(244,63,94,0.2)" stroke="#f43f5e" strokeWidth="1.5"/>
      <path d={p(pts(s2))} fill="rgba(34,197,94,0.2)" stroke="#22c55e" strokeWidth="1.5"/>
      <text x="5" y="12" fill="#f43f5e" fontSize="6" fontFamily="monospace">TotalEnergies</text>
      <text x="5" y="20" fill="#22c55e" fontSize="6" fontFamily="monospace">Schneider</text>
    </svg>
  );
}
function GaugeChart() {
  const cx=80,cy=65,r=45;
  const needle={x:cx+(r-10)*Math.cos((-95*Math.PI)/180),y:cy+(r-10)*Math.sin((-95*Math.PI)/180)};
  return (
    <svg viewBox="0 0 160 100" className="w-full h-full">
      <path d={`M ${cx+r*Math.cos(-135*Math.PI/180)} ${cy+r*Math.sin(-135*Math.PI/180)} A ${r} ${r} 0 1 1 ${cx+r*Math.cos(-45*Math.PI/180)} ${cy+r*Math.sin(-45*Math.PI/180)}`} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8"/>
      <path d={`M ${cx+r*Math.cos(-135*Math.PI/180)} ${cy+r*Math.sin(-135*Math.PI/180)} A ${r} ${r} 0 0 1 ${cx+r*Math.cos(-108*Math.PI/180)} ${cy+r*Math.sin(-108*Math.PI/180)}`} fill="none" stroke="#f43f5e" strokeWidth="8" strokeOpacity="0.85"/>
      <path d={`M ${cx+r*Math.cos(-27*Math.PI/180)} ${cy+r*Math.sin(-27*Math.PI/180)} A ${r} ${r} 0 0 1 ${cx+r*Math.cos(-45*Math.PI/180)} ${cy+r*Math.sin(-45*Math.PI/180)}`} fill="none" stroke="#22c55e" strokeWidth="8" strokeOpacity="0.85"/>
      <line x1={cx} y1={cy} x2={needle.x} y2={needle.y} stroke="#f43f5e" strokeWidth="2" strokeLinecap="round"/>
      <circle cx={cx} cy={cy} r="4" fill="#f43f5e"/>
      <text x={cx} y={cy-15} textAnchor="middle" fill="white" fontSize="14" fontFamily="monospace" fontWeight="bold">0.9</text>
      <text x={cx} y={cy-6} textAnchor="middle" fill="#f43f5e" fontSize="5.5" fontFamily="monospace">DISTRESS</text>
      <text x="12" y="85" fill="#f43f5e" fontSize="5.5" fontFamily="monospace">← Bankrupt</text>
      <text x="112" y="85" fill="#22c55e" fontSize="5.5" fontFamily="monospace">Safe →</text>
    </svg>
  );
}

const static_data = [
  { Chart: EfficientFrontierChart, icon: <LineChart size={16}/>, accent: "#0ea5e9", tech: ["Python","PyPortfolioOpt","Streamlit","yfinance"], github: "https://github.com/Wxlly00/portfolio-optimizer" },
  { Chart: WaterfallChart, icon: <BarChart2 size={16}/>, accent: "#a78bfa", tech: ["Python","openpyxl","pandas"], github: "https://github.com/Wxlly00/lbo-model" },
  { Chart: DCFLineChart, icon: <TrendingUp size={16}/>, accent: "#38bdf8", tech: ["Python","yfinance","pandas","Streamlit"], github: "https://github.com/Wxlly00/dcf-engine" },
  { Chart: VaRChart, icon: <AlertTriangle size={16}/>, accent: "#f43f5e", tech: ["Python","scipy","numpy","Streamlit"], github: "https://github.com/Wxlly00/var-dashboard" },
  { Chart: RadarChart, icon: <Leaf size={16}/>, accent: "#22c55e", tech: ["Python","pandas","plotly","Streamlit"], github: "https://github.com/Wxlly00/esg-tool" },
  { Chart: GaugeChart, icon: <Shield size={16}/>, accent: "#f59e0b", tech: ["Python","Streamlit","pandas"], github: "https://github.com/Wxlly00/credit-dashboard" },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();
  const p = t.projects;

  return (
    <section id="projects" className="py-28 px-6 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #030712, #050f1a, #030712)" }}>
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="mb-16">
          <p className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">{p.tag}</p>
          <h2 className="text-4xl lg:text-5xl text-white tracking-tight">{p.title}</h2>
          <p className="text-white/40 mt-3 max-w-xl">{p.subtitle}</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {p.items.map((item, index) => {
            const { Chart, icon, accent, tech, github } = static_data[index];
            return (
              <motion.div key={index} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.08 }} whileHover={{ y: -4 }} className="group">
                <div className="h-full rounded-2xl overflow-hidden flex flex-col"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", transition: "border-color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = `${accent}33`)}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
                  {/* Chart */}
                  <div className="h-[160px] p-4 border-b border-white/5 relative overflow-hidden">
                    <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at center, ${accent}0a 0%, transparent 70%)` }} />
                    <Chart />
                  </div>
                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="p-1.5 rounded-md" style={{ background: `${accent}18`, color: accent }}>{icon}</span>
                      <span className="text-xs font-mono text-white/25">{item.category}</span>
                    </div>
                    <h3 className="text-base font-semibold text-white mb-2 group-hover:text-sky-300 transition-colors">{item.title}</h3>
                    <p className="text-sm text-white/40 leading-relaxed mb-4 flex-1">{item.description}</p>
                    {/* Case study */}
                    <div className="flex items-center gap-2 mb-4 p-2.5 rounded-lg" style={{ background: `${accent}0d`, border: `1px solid ${accent}20` }}>
                      <TrendingUp size={11} style={{ color: accent }} />
                      <div>
                        <p className="text-xs font-mono" style={{ color: accent }}>{item.caseStudy.company}</p>
                        <p className="text-xs text-white/35">{item.caseStudy.metric}</p>
                      </div>
                    </div>
                    {/* Tech */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {tech.map((tg, i) => <span key={i} className="text-xs px-2 py-0.5 rounded font-mono text-white/25 bg-white/4">{tg}</span>)}
                    </div>
                    {/* GitHub */}
                    <a href={github} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-white/30 hover:text-white transition-colors group/link">
                      <Github size={13} />{p.viewGithub}<ArrowUpRight size={11} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
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
