import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4">
          <span className="font-serif text-xl font-bold text-gradient">Wilfried LAWSON HELLU</span>
          <p className="text-sm text-slate-500">Finance Analyst | Asset Management &amp; Corporate Finance</p>

          <div className="flex items-center gap-4 mt-2">
            <a
              href="https://linkedin.com/in/wilfried-lawsonhellu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 text-slate-400 hover:text-gold hover:border-gold/30 transition-all"
            >
              <Linkedin size={17} />
            </a>
            <a
              href="https://github.com/Wxlly00"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-white/10 text-slate-400 hover:text-gold hover:border-gold/30 transition-all"
            >
              <Github size={17} />
            </a>
          </div>

          <p className="text-xs text-slate-600 mt-2">
            © 2026 Wilfried LAWSON HELLU · Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
