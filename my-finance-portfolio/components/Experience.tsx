"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";

const experiences = [
  {
    company: "BIDC — Banque d'Investissement et de Développement de la CEDEAO",
    role: "Analyste Stagiaire — Recherche & Stratégie",
    location: "Lomé, Togo",
    period: "July 2025 — September 2025",
    badge: "Development Banking",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    accentColor: "from-blue-500 to-blue-600",
    bullets: [
      "Modeled Single Obligor Limit (SOL) framework per Basel III standards, optimizing maximum counterparty exposure for the regional development bank",
      "Produced investment committee briefings supporting structured financing decisions across the ECOWAS region",
      "Contributed to regional strategic plan development through quantitative data analysis and macroeconomic synthesis",
    ],
  },
  {
    company: "SGI-TOGO — Société de Gestion et d'Intermédiation",
    role: "Analyste Junior — Marchés des Capitaux",
    location: "Lomé, Togo",
    period: "April 2025 — June 2025",
    badge: "Capital Markets",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    accentColor: "from-cyan-500 to-cyan-600",
    bullets: [
      "Participated in structuring bond issuances and commercial paper (Titres de Créances Négociables) for corporate and sovereign issuers",
      "Conducted credit analysis: financial ratio assessment, repayment capacity modeling, and presentation dossier preparation",
      "Crafted pitch decks and investment teasers targeting UEMOA institutional investors for private placements",
    ],
  },
  {
    company: "Papyrus Distributions",
    role: "Founder & CEO",
    location: "Paris, France",
    period: "May 2023 — March 2025",
    badge: "Entrepreneurship",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    accentColor: "from-emerald-500 to-teal-500",
    bullets: [
      "Built and managed P&L of a business generating €500K+ in cumulative revenue from inception",
      "Optimized working capital and banking relationships; improved net profitability by +15% through cost-optimization initiatives",
      "Managed judicial liquidation following major client default: impact analysis, liability management, and full account closure",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm mb-5 backdrop-blur-sm">
            Career
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">Experience</h2>
          <p className="text-gray-500 mt-4">Professional journey in finance &amp; entrepreneurship</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className={`absolute left-[-5px] md:left-[19px] top-5 w-3 h-3 rounded-full bg-gradient-to-br ${exp.accentColor} shadow-lg`} />

                <div className="rounded-3xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 group">
                  {/* Glow on hover */}
                  <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 transition-all duration-300" />

                  <div className="relative">
                    <div className="flex flex-wrap gap-3 items-start justify-between mb-3">
                      <div>
                        <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-3 ${exp.badgeColor}`}>
                          {exp.badge}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-white">{exp.company}</h3>
                        <p className="text-blue-400 font-medium text-sm mt-0.5">{exp.role}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 text-xs text-gray-500 mb-5">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-blue-400/60" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-blue-400/60" />
                        {exp.location}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                          <span className="text-blue-400 mt-1.5 text-xs shrink-0">▸</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
