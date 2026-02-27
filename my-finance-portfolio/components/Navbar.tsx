"use client";
import { useLang } from "@/lib/LanguageContext";

export default function Navbar() {
  const { lang, setLang } = useLang();
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-8 h-14 flex items-center justify-between">
        <a href="#" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "0.95rem", fontWeight: 400, letterSpacing: "0.05em", color: "#1a1a1a", textDecoration: "none" }}>
          WLH
        </a>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {(["en", "fr"] as const).map((l) => (
            <button key={l} onClick={() => setLang(l)}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 300, letterSpacing: "0.1em", textTransform: "uppercase", color: lang === l ? "#1a1a1a" : "#bbb", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
              {l}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
