"use client";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail, ArrowRight, MapPin, TrendingUp, Building2, DollarSign } from "lucide-react";

const stats = [
  { value: "€500K+", label: "Revenue Managed", icon: DollarSign },
  { value: "2", label: "Finance Internships", icon: Building2 },
  { value: "4+ yrs", label: "Macro Trading", icon: TrendingUp },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* Glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left column — text */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Available for Internship · March – July 2026
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-4"
            >
              Wilfried{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                LAWSON HELLU
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-3"
            >
              Finance Analyst · Asset Management &amp; Corporate Finance
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-2 text-gray-500 text-sm mb-10"
            >
              <MapPin size={14} className="text-blue-400" />
              Paris, France · Université Paris-Saclay
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-500/25"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/cv.pdf"
                download
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-blue-500/30 transition-all duration-200 backdrop-blur-sm"
              >
                <Download size={16} />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              {[
                { href: "https://linkedin.com/in/wilfried-lawsonhellu", Icon: Linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
                { href: "https://github.com/Wxlly00", Icon: Github, label: "GitHub", color: "hover:text-gray-200" },
                { href: "mailto:wilfriedlawpro@gmail.com", Icon: Mail, label: "Email", color: "hover:text-cyan-400" },
              ].map(({ href, Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`p-3 rounded-full border border-white/10 bg-white/5 text-gray-400 ${color} hover:border-blue-500/30 hover:bg-white/10 transition-all duration-200 backdrop-blur-sm`}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right column — decorative card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main card */}
            <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm p-10 overflow-hidden">
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 pointer-events-none" />

              {/* WLH monogram */}
              <div className="relative flex items-center justify-center mb-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600/30 to-cyan-600/20 border border-blue-500/20 flex items-center justify-center">
                  <span className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    WLH
                  </span>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, i) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + i * 0.15 }}
                      className="text-center p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/20 transition-all duration-200"
                    >
                      <div className="flex justify-center mb-2">
                        <div className="p-2 rounded-lg bg-blue-500/10">
                          <Icon size={14} className="text-blue-400" />
                        </div>
                      </div>
                      <div className="text-lg font-bold text-white leading-tight">{stat.value}</div>
                      <div className="text-xs text-gray-500 mt-1 leading-tight">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Asset Management", "Corporate Finance", "DCM", "UEMOA", "Portfolio Theory"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs font-semibold shadow-lg shadow-blue-500/30"
            >
              Open to offers ✦
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="lg:hidden grid grid-cols-3 gap-4 mt-10"
        >
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5 border border-white/10">
                <Icon size={14} className="text-blue-400 mx-auto mb-2" />
                <div className="text-lg font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
