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
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-400/30",
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
    badgeColor: "bg-gold/10 text-gold border-gold/30",
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
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-400/30",
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
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2 gold-underline">
            Experience
          </h2>
          <p className="text-slate-400 mt-6">Professional journey in finance &amp; entrepreneurship</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[-5px] md:left-[19px] top-2 w-3 h-3 rounded-full bg-gold border-2 border-navy-dark shadow-lg shadow-gold/30" />

                <div className="glass rounded-2xl p-6 hover:border-gold/30 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap gap-3 items-start justify-between mb-3">
                    <div>
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full border mb-2 ${exp.badgeColor}`}>
                        {exp.badge}
                      </span>
                      <h3 className="font-serif text-lg md:text-xl font-bold text-white">{exp.company}</h3>
                      <p className="text-gold font-medium text-sm mt-0.5">{exp.role}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} className="text-gold/60" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-gold/60" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2 text-slate-300 text-sm leading-relaxed">
                        <span className="text-gold mt-1.5 text-xs">▸</span>
                        {bullet}
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
