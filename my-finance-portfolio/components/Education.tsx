"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const gradients = ["from-sky-600 to-cyan-600", "from-cyan-600 to-teal-600"];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();
  const ed = t.education;

  return (
    <section id="education" className="py-28 px-6 relative overflow-hidden bg-[#030712]">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-16">
          <p className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">{ed.tag}</p>
          <h2 className="text-4xl lg:text-5xl text-white tracking-tight">{ed.title}</h2>
          <p className="text-white/30 mt-3 text-sm">{ed.subtitle}</p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl">
          {ed.items.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 24 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.12 }} whileHover={{ y: -4 }}>
              <div className="h-full rounded-2xl p-6 group" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", transition: "border-color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(14,165,233,0.25)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")}>
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${gradients[i]}`}>
                    <GraduationCap size={18} className="text-white" />
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-lg" style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)", color: "#38bdf8" }}>
                    {item.status}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{item.school}</h3>
                <p className="text-sky-400 text-sm font-medium mb-3">{item.degree}</p>
                <div className="flex flex-wrap gap-3 text-xs text-white/25 mb-4">
                  <span className="flex items-center gap-1"><MapPin size={10} className="text-sky-400/50" />{item.location}</span>
                  <span className="text-white/25">📅 {item.period}</span>
                </div>
                <div>
                  <p className="text-xs text-white/20 uppercase tracking-widest mb-2 font-mono">Courses</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.courses.map(c => (
                      <span key={c} className="text-xs px-2.5 py-1 rounded-lg font-mono text-white/30" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>{c}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
