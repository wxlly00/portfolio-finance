import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-12 relative overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center gap-5">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Wilfried LAWSON HELLU
          </span>
          <p className="text-sm text-gray-500">Finance Analyst · Asset Management &amp; Corporate Finance</p>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/wilfried-lawsonhellu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-blue-400 hover:border-blue-500/30 transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/Wxlly00"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-gray-200 hover:border-white/20 transition-all"
            >
              <Github size={16} />
            </a>
            <a
              href="mailto:wilfriedlawpro@gmail.com"
              className="p-2.5 rounded-full border border-white/10 bg-white/5 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
            >
              <Mail size={16} />
            </a>
          </div>

          <div className="h-px w-full max-w-xs bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <p className="text-xs text-gray-600">
            © 2026 Wilfried LAWSON HELLU · Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
