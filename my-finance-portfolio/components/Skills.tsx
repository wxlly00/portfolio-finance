"use client";
import { useLang } from "@/lib/LanguageContext";

const allSkills = [
  "Python", "Excel / VBA", "Bloomberg Terminal", "SQL",
  "Financial Modeling", "DCF Valuation", "LBO Modeling", "Portfolio Optimization",
  "Risk Analysis (VaR)", "Fixed Income / DCM", "ESG Analysis", "Credit Analysis",
  "Monte Carlo Simulation", "Statistical Modeling", "Streamlit", "Git / GitHub",
  "PowerPoint", "UEMOA Markets", "Factor Investing", "Derivatives",
];

export default function Skills() {
  const { lang } = useLang();
  const isFr = lang === "fr";
  return (
    <section id="skills" className="max-w-4xl mx-auto px-8 py-16">
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.01em", color: "#1a1a1a", marginBottom: "2rem" }}>
        {isFr ? "Compétences" : "Technical Skills"}
      </h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem 2rem", maxWidth: "640px" }}>
        {allSkills.map((skill) => (
          <span key={skill} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 300, color: "#2a2a2a" }}>
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
