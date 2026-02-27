"use client";
import { useLang } from "@/lib/LanguageContext";

const github = [
  "https://github.com/Wxlly00/portfolio-optimizer",
  "https://github.com/Wxlly00/lbo-model",
  "https://github.com/Wxlly00/dcf-engine",
  "https://github.com/Wxlly00/var-dashboard",
  "https://github.com/Wxlly00/esg-tool",
  "https://github.com/Wxlly00/credit-dashboard",
];

const tech = [
  "Python · PyPortfolioOpt · Monte Carlo · yfinance",
  "Python · openpyxl · pandas",
  "Python · yfinance · pandas · Streamlit",
  "Python · scipy · numpy · Streamlit",
  "Python · pandas · plotly · Streamlit",
  "Python · Streamlit · pandas",
];

export default function Projects() {
  const { t } = useLang();
  const p = t.projects;
  return (
    <section id="projects" className="max-w-4xl mx-auto px-8 py-16">
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.01em", color: "#1a1a1a", marginBottom: "2.5rem" }}>
        {p.title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {p.items.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "1.5rem" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "#ccc", minWidth: "32px", paddingTop: "0.2rem", letterSpacing: "0.04em" }}>
              {String(i + 1).padStart(2, "0")}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 400, lineHeight: 1.3, color: "#1a1a1a", marginBottom: "0.5rem" }}>
                {item.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.65, fontWeight: 300, color: "#444", marginBottom: "0.6rem" }}>
                {item.description}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "#bbb", letterSpacing: "0.04em", marginBottom: "0.5rem" }}>
                {item.caseStudy.company} · {item.caseStudy.metric}
              </p>
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "#ccc" }}>
                  {tech[i]}
                </span>
                <a href={github[i]} target="_blank" rel="noopener noreferrer"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "#888", letterSpacing: "0.06em", textDecoration: "none", textUnderlineOffset: "3px" }}
                  onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
                  onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}>
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
