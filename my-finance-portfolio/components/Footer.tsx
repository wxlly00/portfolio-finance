"use client";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="max-w-4xl mx-auto px-8 py-8">
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", fontWeight: 300, color: "#ccc", letterSpacing: "0.06em" }}>
        {t.footer.copy}
      </p>
    </footer>
  );
}
