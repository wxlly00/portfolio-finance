"use client";
import { useLang } from "@/lib/LanguageContext";

export default function Experience() {
  const { t } = useLang();
  const e = t.experience;
  return (
    <section id="experience" className="max-w-4xl mx-auto px-8 py-16">
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.01em", color: "#1a1a1a", marginBottom: "2.5rem" }}>
        {e.title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {e.items.map((exp, i) => (
          <div key={i} style={{ display: "flex", gap: "1.5rem" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "#aaa", minWidth: "72px", paddingTop: "0.2rem", letterSpacing: "0.04em" }}>
              {exp.period}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.01em", color: "#1a1a1a", marginBottom: "0.3rem" }}>
                {exp.role}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", fontWeight: 300, color: "#888", letterSpacing: "0.04em", marginBottom: "0.8rem" }}>
                {exp.company} · {exp.location}
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                {exp.bullets.map((b, j) => (
                  <li key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.65, fontWeight: 300, color: "#444", paddingLeft: "1rem", position: "relative" }}>
                    <span style={{ position: "absolute", left: 0, color: "#ccc" }}>—</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
