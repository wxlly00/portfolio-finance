"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const accents = [
  { badge: "bg-sky-500/10 text-sky-400 border-sky-500/20", dot: "from-sky-500 to-sky-600" },
  { badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20", dot: "from-cyan-500 to-cyan-600" },
  { badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20", dot: "from-emerald-500 to-teal-500" },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();
  const e = t.experience;

  return (
    <section id="experience" className="py-28 px-6 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #030712, #050f1a, #030712)" }}>
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-16">
          <p className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">{e.tag}</p>
          <h2 className="text-4xl lg:text-5xl text-white tracking-tight">{e.title}</h2>
          <p className="text-white/30 mt-3 text-sm">{e.subtitle}</p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500 via-sky-500/30 to-transparent" />
          <div className="space-y-8">
            {e.items.map((exp, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-8 md:pl-20">
                <div className={`absolute left-[-5px] md:left-[19px] top-5 w-3 h-3 rounded-full bg-gradient-to-br ${accents[i].dot}`} />
                <div className="group rounded-2xl p-6 relative" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", transition: "border-color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(14,165,233,0.25)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
                  <span className={`inline-block text-xs font-mono px-3 py-1 rounded-full border mb-3 ${accents[i].badge}`}>{exp.badge}</span>
                  <h3 className="text-base font-semibold text-white mb-0.5">{exp.company}</h3>
                  <p className="text-sky-400 text-sm font-medium mb-3">{exp.role}</p>
                  <div className="flex flex-wrap gap-4 text-xs text-white/25 mb-4">
                    <span className="flex items-center gap-1"><Calendar size={11} className="text-sky-400/50" />{exp.period}</span>
                    <span className="flex items-center gap-1"><MapPin size={11} className="text-sky-400/50" />{exp.location}</span>
                  </div>
                  <ul className="space-y-2">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-white/40 leading-relaxed">
                        <span className="text-sky-400/60 mt-1.5 text-xs shrink-0">▸</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
