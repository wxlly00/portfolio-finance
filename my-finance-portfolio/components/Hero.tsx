"use client";
import { useLang } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLang();
  return (
    <section className="max-w-4xl mx-auto px-8 pt-32 pb-16">
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-0.01em", color: "#1a1a1a", marginBottom: "1.2rem" }}>
        Wilfried LAWSON HELLU
      </h1>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.12em", textTransform: "uppercase", color: "#555", marginBottom: "0.6rem" }}>
        {t.hero.subtitle}
      </p>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.75rem", fontWeight: 300, letterSpacing: "0.06em", color: "#aaa" }}>
        {t.hero.location} · {t.hero.available}
      </p>
    </section>
  );
}
