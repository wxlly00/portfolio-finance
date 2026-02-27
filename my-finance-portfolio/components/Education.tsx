"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin } from "lucide-react";

const education = [
  {
    school: "Université Paris-Saclay",
    location: "Sceaux, France",
    degree: "Licence Économie-Gestion — Économie Appliquée",
    period: "2021 — Present",
    status: "In Progress",
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    courses: ["Advanced Macroeconomics", "Industrial Economics", "Statistics & Data Analysis", "International Economics"],
    iconGradient: "from-[#C9A84C] to-[#D4B96A]",
    highlight: true,
  },
  {
    school: "École Alpha",
    location: "Lomé, Togo",
    degree: "Baccalauréat Général — Mention Bien",
    period: "June 2021",
    status: "Graduated",
    statusColor: "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    courses: ["Mathematics", "Economics", "Geopolitics"],
    iconGradient: "from-indigo-600 to-blue-600",
    highlight: false,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-28 px-6 bg-[#050D1A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] rounded-full text-sm mb-5 backdrop-blur-sm">
            Academic Background
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Education</h2>
          <p className="text-slate-500 mt-4">Academic foundation in economics &amp; finance</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className={`h-full rounded-3xl bg-[#0A1628]/60 border backdrop-blur-sm p-7 hover:border-[#C9A84C]/25 transition-all duration-300 relative overflow-hidden ${edu.highlight ? "border-[#C9A84C]/20" : "border-white/8"}`}>
                {/* Gold glow on hover */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C9A84C]/0 to-transparent group-hover:from-[#C9A84C]/5 transition-all duration-300" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${edu.iconGradient} shadow-lg`}>
                      <GraduationCap size={22} className="text-white" />
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${edu.statusColor}`}>
                      {edu.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{edu.school}</h3>
                  <p className="text-[#C9A84C] font-medium text-sm mb-3">{edu.degree}</p>

                  <div className="flex flex-wrap gap-3 text-xs text-slate-500 mb-5">
                    <span className="flex items-center gap-1">
                      <MapPin size={11} className="text-[#C9A84C]/60" />
                      {edu.location}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500">
                      📅 {edu.period}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs text-slate-600 uppercase tracking-wider mb-3 font-medium">Key subjects</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course) => (
                        <span key={course} className="text-xs px-3 py-1 rounded-full bg-[#C9A84C]/5 text-slate-400 border border-[#C9A84C]/15">
                          {course}
                        </span>
                      ))}
                    </div>
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
