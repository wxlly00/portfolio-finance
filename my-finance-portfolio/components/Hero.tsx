"use client";
import { motion } from "framer-motion";
import { Download, ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

function CandlestickChart() {
  const candles = [
    { o: 60, h: 75, l: 55, c: 70, bull: true },
    { o: 70, h: 80, l: 65, c: 65, bull: false },
    { o: 65, h: 72, l: 58, c: 72, bull: true },
    { o: 72, h: 85, l: 68, c: 80, bull: true },
    { o: 80, h: 88, l: 72, c: 74, bull: false },
    { o: 74, h: 82, l: 70, c: 82, bull: true },
    { o: 82, h: 90, l: 78, c: 88, bull: true },
    { o: 88, h: 92, l: 80, c: 82, bull: false },
    { o: 82, h: 86, l: 74, c: 78, bull: false },
    { o: 78, h: 88, l: 75, c: 86, bull: true },
    { o: 86, h: 95, l: 82, c: 93, bull: true },
    { o: 93, h: 98, l: 88, c: 90, bull: false },
  ];
  const H = 120, W = 300, min = 50, max = 100;
  const scale = (v: number) => H - ((v - min) / (max - min)) * H;
  const cw = 16, gap = 8;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-full" preserveAspectRatio="none">
      {[0, 0.25, 0.5, 0.75, 1].map((t, i) => <line key={i} x1="0" y1={t * H} x2={W} y2={t * H} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />)}
      {candles.map((c, i) => {
        const x = i * (cw + gap) + 4;
        const color = c.bull ? "#22c55e" : "#f43f5e";
        const bodyTop = Math.min(scale(c.o), scale(c.c));
        const bodyH = Math.abs(scale(c.o) - scale(c.c)) || 2;
        const xMid = x + cw / 2;
        return (
          <motion.g key={i} initial={{ opacity: 0, scaleY: 0 }} animate={{ opacity: 1, scaleY: 1 }} transition={{ delay: i * 0.08, duration: 0.4 }} style={{ transformOrigin: `${xMid}px ${H}px` }}>
            <line x1={xMid} y1={scale(c.h)} x2={xMid} y2={scale(c.l)} stroke={color} strokeWidth="1.5" />
            <rect x={x} y={bodyTop} width={cw} height={bodyH} fill={color} rx="2" opacity="0.9" />
          </motion.g>
        );
      })}
    </svg>
  );
}

export default function Hero() {
  const { t } = useLang();
  const h = t.hero;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: "7rem" }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-emerald-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-8"
              style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.2)", color: "#22c55e" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {h.badge}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h1 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tight mb-3">
                <span className="text-white">{h.title1}</span>
                <br />
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 40%, #22c55e 100%)" }}>
                  {h.title2}
                </span>
              </h1>
              <p className="text-lg text-white/40 font-light mt-4">{h.subtitle}</p>
              <p className="text-sm text-white/25 mt-1">{h.location}</p>
            </motion.div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-6 text-white/50 leading-relaxed max-w-lg text-[15px]">
              {h.bio}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-3 mt-8">
              <a href="#projects"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white transition-all duration-200"
                style={{ background: "linear-gradient(135deg, #0ea5e9, #22c55e)", boxShadow: "0 4px 24px rgba(14,165,233,0.25)" }}
                onClick={e => { e.preventDefault(); document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" }); }}>
                {h.cta1}
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="/cv.pdf" download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white/60 hover:text-white border border-white/10 hover:border-white/20 bg-white/5 transition-all duration-200">
                <Download size={14} />
                {h.cta2}
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex items-center gap-2 mt-6">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/wilfried-lawson-hellu-227a09127", label: "LinkedIn" },
                { Icon: Github, href: "https://github.com/Wxlly00", label: "GitHub" },
                { Icon: Mail, href: "mailto:wilfriedlawpro@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
                  className="p-2 rounded-lg text-white/25 hover:text-white/70 hover:bg-white/5 border border-transparent hover:border-white/8 transition-all">
                  <Icon size={16} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — terminal */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="relative hidden lg:block">
            <div className="rounded-2xl overflow-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <span className="text-xs text-white/20 font-mono ml-2">portfolio_analysis.py</span>
              </div>

              {/* Chart */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <p className="text-xs text-white/25 font-mono uppercase tracking-wider">{h.chartTitle}</p>
                    <p className="text-xl font-mono text-white mt-0.5">+184.2% <span className="text-emerald-400 text-sm">↑ Sharpe 1.84</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/25 font-mono">{h.chartLabel}</p>
                    <p className="text-sm font-mono text-white/35">+91.0% <span className="text-white/25">Sharpe 0.91</span></p>
                  </div>
                </div>
                <div className="h-[140px] w-full"><CandlestickChart /></div>
                <div className="flex justify-between mt-3 text-xs font-mono text-white/20">
                  <span>Jan 2019</span><span>Dec 2023</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-4 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                {h.stats.map((s, i) => (
                  <motion.div key={s.label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 + i * 0.1 }}
                    className="p-4 text-center border-r last:border-r-0" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                    <p className="text-lg font-mono font-semibold bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #0ea5e9, #22c55e)" }}>{s.value}</p>
                    <p className="text-[10px] text-white/25 mt-0.5 leading-tight">{s.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1 }}
              className="absolute -top-5 -right-5 px-3 py-2 rounded-xl text-xs font-mono text-emerald-400 border border-emerald-500/20"
              style={{ background: "rgba(34,197,94,0.08)" }}>
              {h.available}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/15 font-mono">{h.scroll}</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/15 to-transparent" />
      </motion.div>
    </section>
  );
}
