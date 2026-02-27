"use client";
import { useLang } from "@/lib/LanguageContext";

export default function About() {
  const { t, lang } = useLang();
  const isFr = lang === "fr";
  return (
    <section id="about" className="max-w-4xl mx-auto px-8 py-16">
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.01em", color: "#1a1a1a", marginBottom: "2rem" }}>
        {isFr ? "Vision" : "Vision"}
      </h2>
      <div className="max-w-2xl" style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300, color: "#2a2a2a" }}>
          {t.about.p1}
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300, color: "#2a2a2a" }}>
          {t.about.p2}
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.9rem", lineHeight: 1.8, fontWeight: 300, color: "#2a2a2a" }}>
          {t.about.p3}
        </p>
      </div>
    </section>
  );
}
