"use client";
import { useLang } from "@/lib/LanguageContext";

export default function Education() {
  const { t } = useLang();
  const ed = t.education;
  return (
    <section id="education" className="max-w-4xl mx-auto px-8 py-16">
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.01em", color: "#1a1a1a", marginBottom: "2.5rem" }}>
        {ed.title}
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {ed.items.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: "1.5rem" }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "#aaa", minWidth: "72px", paddingTop: "0.2rem", letterSpacing: "0.04em" }}>
              {item.period}
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.3, color: "#1a1a1a", marginBottom: "0.3rem" }}>
                {item.degree}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", fontWeight: 300, color: "#888", letterSpacing: "0.04em", marginBottom: "0.6rem" }}>
                {item.school} · {item.location}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", lineHeight: 1.65, fontWeight: 300, color: "#444" }}>
                {item.description}
              </p>
              <div style={{ marginTop: "0.7rem", display: "flex", flexWrap: "wrap", gap: "0.5rem 1.2rem" }}>
                {item.courses.map((c, j) => (
                  <span key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.72rem", fontWeight: 300, color: "#aaa", letterSpacing: "0.04em" }}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
