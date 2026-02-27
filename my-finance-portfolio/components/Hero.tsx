"use client";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050D1A] px-6 py-32">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Moving orb 1 — gold */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Moving orb 2 — indigo */}
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left column ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge + Name + Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] rounded-full text-sm mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for Internship · March – July 2026
              </div>

              <h1 className="font-serif text-6xl lg:text-7xl mb-6 leading-tight font-bold">
                <span className="text-white">Wilfried</span>{" "}
                <span className="bg-gradient-to-r from-[#C9A84C] via-[#D4B96A] to-[#C9A84C] bg-clip-text text-transparent">
                  LAWSON HELLU
                </span>
              </h1>

              <p className="text-2xl text-slate-400 leading-relaxed">
                Finance Analyst · Asset Management &amp; Corporate Finance
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <p className="text-lg text-slate-500 leading-relaxed max-w-xl">
                Passionné par la finance et les données, je transforme des analyses complexes
                en insights actionnables. Spécialiste en modélisation financière, gestion de
                portefeuille et analyse quantitative.
              </p>
              <div className="flex items-center gap-2 text-slate-600 text-sm pt-1">
                <MapPin size={13} className="text-[#C9A84C]" />
                Paris, France · Université Paris-Saclay
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#C9A84C] to-[#D4B96A] hover:from-[#D4B96A] hover:to-[#C9A84C] text-[#050D1A] font-semibold transition-all duration-200 shadow-lg shadow-[#C9A84C]/20"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/cv.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C9A84C]/20 bg-[#C9A84C]/5 text-white font-semibold hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all duration-200 backdrop-blur-sm"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-2"
            >
              {[
                { href: "https://linkedin.com/in/wilfried-lawsonhellu", Icon: Linkedin, label: "LinkedIn" },
                { href: "https://github.com/Wxlly00", Icon: Github, label: "GitHub" },
                { href: "mailto:wilfriedlawpro@gmail.com", Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-[#C9A84C]/5 rounded-full border border-[#C9A84C]/15 hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/40 transition-all"
                >
                  <Icon size={18} className="text-slate-400 group-hover:text-[#C9A84C]" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* ── Right column — glassmorphism card + floating stats ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Glowing border blur — gold */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C9A84C] via-[#D4B96A] to-[#0F2040] rounded-3xl blur-2xl opacity-20" />

              {/* Main card */}
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-[#C9A84C]/15 bg-gradient-to-br from-[#0F2040]/80 to-[#050D1A]/90 backdrop-blur-xl">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-[#C9A84C]/8 to-transparent" />
                {/* Decorative inner grid */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:2rem_2rem]" />

                {/* Center monogram */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-br from-[#C9A84C]/20 to-[#0F2040]/60 border border-[#C9A84C]/25 flex items-center justify-center shadow-[0_0_60px_rgba(201,168,76,0.15)]">
                    <span className="font-serif text-5xl bg-gradient-to-r from-[#C9A84C] to-[#D4B96A] bg-clip-text text-transparent font-bold">
                      WLH
                    </span>
                  </div>
                </div>

                {/* Finance tags scattered */}
                <div className="absolute bottom-8 left-0 right-0 flex flex-wrap justify-center gap-2 px-8">
                  {["Asset Management", "Corporate Finance", "DCM", "UEMOA", "Quant"].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-[#C9A84C] backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Floating stat card — bottom left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-8 -left-8 bg-[#0A1628]/90 backdrop-blur-xl rounded-2xl p-6 border border-[#C9A84C]/15 shadow-2xl"
            >
              <p className="font-serif text-3xl mb-1 bg-gradient-to-r from-[#C9A84C] to-[#D4B96A] bg-clip-text text-transparent font-bold">
                4+
              </p>
              <p className="text-sm text-slate-500">Years of Trading</p>
            </motion.div>

            {/* Floating stat card — top right */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-8 -right-8 bg-[#0A1628]/90 backdrop-blur-xl rounded-2xl p-6 border border-[#C9A84C]/15 shadow-2xl"
            >
              <p className="font-serif text-3xl mb-1 bg-gradient-to-r from-[#C9A84C] to-[#D4B96A] bg-clip-text text-transparent font-bold">
                6
              </p>
              <p className="text-sm text-slate-500">Finance Projects</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="lg:hidden grid grid-cols-2 gap-4 mt-12"
        >
          {[
            { value: "4+", label: "Years of Trading" },
            { value: "6", label: "Finance Projects" },
          ].map((stat) => (
            <div key={stat.label} className="text-center p-5 rounded-2xl bg-[#C9A84C]/5 border border-[#C9A84C]/15">
              <p className="font-serif text-2xl font-bold bg-gradient-to-r from-[#C9A84C] to-[#D4B96A] bg-clip-text text-transparent mb-1">
                {stat.value}
              </p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050D1A] to-transparent pointer-events-none" />
    </section>
  );
}
