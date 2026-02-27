"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 py-12 px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 text-sm">
              © 2026{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                Wilfried LAWSON HELLU
              </span>
              {" "}— Finance Portfolio
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {[
              { Icon: Linkedin, href: "https://linkedin.com/in/wilfried-lawsonhellu" },
              { Icon: Github, href: "https://github.com/Wxlly00" },
              { Icon: Mail, href: "mailto:wilfriedlawpro@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="p-2 text-gray-600 hover:text-blue-400 transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
