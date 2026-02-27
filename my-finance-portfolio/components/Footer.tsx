"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t py-10 px-6" style={{ background: "#030712", borderColor: "rgba(255,255,255,0.05)" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-md flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0ea5e9, #22c55e)" }}>
            <span className="text-[9px] font-bold text-white">WL</span>
          </div>
          <p className="text-xs font-mono text-white/20">{t.footer.copy}</p>
        </div>
        <div className="flex items-center gap-1">
          {[
            { Icon: Linkedin, href: "https://www.linkedin.com/in/wilfried-lawson-hellu-227a09127" },
            { Icon: Github, href: "https://github.com/Wxlly00" },
            { Icon: Mail, href: "mailto:wilfriedlawpro@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
              className="p-2 rounded-lg text-white/20 hover:text-white/60 hover:bg-white/5 transition-all">
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
