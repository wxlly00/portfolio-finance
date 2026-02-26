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
    statusColor: "bg-green-500/10 text-green-400 border-green-400/30",
    courses: [
      "Advanced Macroeconomics",
      "Industrial Economics (Market Strategy)",
      "Statistics & Data Analysis",
      "International Economics",
    ],
    highlight: true,
  },
  {
    school: "École Alpha",
    location: "Lomé, Togo",
    degree: "Baccalauréat Général — Mention Bien",
    period: "June 2021",
    status: "Graduated",
    statusColor: "bg-blue-500/10 text-blue-400 border-blue-400/30",
    courses: [
      "Mathematics",
      "Economics",
      "Geopolitics",
    ],
    highlight: false,
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-navy-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2 gold-underline">
            Education
          </h2>
          <p className="text-slate-400 mt-6">Academic foundation in economics &amp; finance</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`glass rounded-2xl p-6 hover:border-gold/30 transition-all duration-300 ${edu.highlight ? "border-gold/20" : ""}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 rounded-lg bg-gold/10">
                  <GraduationCap size={24} className="text-gold" />
                </div>
                <span className={`text-xs font-medium px-2 py-1 rounded-full border ${edu.statusColor}`}>
                  {edu.status}
                </span>
              </div>

              <h3 className="font-serif text-xl font-bold text-white mb-1">{edu.school}</h3>
              <p className="text-gold font-medium text-sm mb-2">{edu.degree}</p>

              <div className="flex flex-wrap gap-3 text-xs text-slate-400 mb-4">
                <span className="flex items-center gap-1">
                  <MapPin size={11} className="text-gold/60" />
                  {edu.location}
                </span>
                <span className="flex items-center gap-1">
                  📅 {edu.period}
                </span>
              </div>

              <div>
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2 font-medium">Key subjects</p>
                <div className="flex flex-wrap gap-2">
                  {edu.courses.map((course) => (
                    <span key={course} className="text-xs px-2 py-1 rounded-md bg-navy text-slate-300 border border-white/5">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
