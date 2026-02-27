"use client";
import { useLang } from "@/lib/LanguageContext";

export default function Contact() {
  const { lang } = useLang();
  const isFr = lang === "fr";
  return (
    <section id="contact" className="max-w-4xl mx-auto px-8 py-16">
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, lineHeight: 1.3, letterSpacing: "-0.01em", color: "#1a1a1a", marginBottom: "1rem" }}>
        {isFr ? "Contact" : "Contact"}
      </h2>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "#888", marginBottom: "1.5rem", lineHeight: 1.7 }}>
        {isFr
          ? "Disponible pour des opportunités de stage en gestion d'actifs ou finance d'entreprise à partir de mars 2026."
          : "Open to internship opportunities in asset management or corporate finance starting March 2026."}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {[
          { label: "Email", value: "wilfriedlawpro@gmail.com", href: "mailto:wilfriedlawpro@gmail.com" },
          { label: "LinkedIn", value: "linkedin.com/in/wilfried-lawson-hellu-227a09127", href: "https://www.linkedin.com/in/wilfried-lawson-hellu-227a09127" },
          { label: "GitHub", value: "github.com/Wxlly00", href: "https://github.com/Wxlly00" },
        ].map(({ label, value, href }) => (
          <div key={label} style={{ display: "flex", gap: "1.5rem", alignItems: "baseline" }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 300, color: "#ccc", letterSpacing: "0.1em", textTransform: "uppercase", minWidth: "64px" }}>
              {label}
            </span>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "#444", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.textDecoration = "underline")}
              onMouseLeave={e => (e.currentTarget.style.textDecoration = "none")}>
              {value}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
