"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #030712, #050f1a)" }}>
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(14,165,233,0.08) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-16">
          <p className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">// contact</p>
          <h2 className="text-4xl lg:text-5xl text-white tracking-tight">Let&apos;s Talk</h2>
          <p className="text-white/40 mt-3 max-w-xl">Open to internship opportunities in asset management, corporate finance, or capital markets starting March 2026.</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }} className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {[
              { Icon: Mail, label: "Email", value: "wilfriedlawpro@gmail.com", href: "mailto:wilfriedlawpro@gmail.com" },
              { Icon: MapPin, label: "Location", value: "Paris, France · Université Paris-Saclay", href: null },
            ].map(({ Icon, label, value, href }, i) => (
              <motion.div key={label} initial={{ opacity: 0, x: -16 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)" }}>
                  <Icon size={15} className="text-sky-400" />
                </div>
                <div>
                  <p className="text-xs text-white/30 font-mono uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm text-white/70 hover:text-sky-400 transition-colors">{value}</a>
                  ) : (
                    <p className="text-sm text-white/70">{value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Social links */}
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Linkedin, href: "https://linkedin.com/in/wilfried-lawsonhellu", label: "LinkedIn", color: "#0ea5e9" },
                { Icon: Github, href: "https://github.com/Wxlly00", label: "GitHub", color: "#a78bfa" },
                { Icon: Mail, href: "mailto:wilfriedlawpro@gmail.com", label: "Email", color: "#22c55e" },
              ].map(({ Icon, href, label, color }) => (
                <motion.a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all"
                  style={{ background: `${color}12`, border: `1px solid ${color}25`, color }}>
                  <Icon size={14} />
                  {label}
                  <ArrowUpRight size={11} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }} className="lg:col-span-3">
            <div className="p-7 rounded-2xl relative overflow-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(14,165,233,0.05) 0%, transparent 60%)" }} />
              <form className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { id: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                    { id: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                  ].map(f => (
                    <div key={f.id}>
                      <label htmlFor={f.id} className="block text-xs font-mono text-white/30 uppercase tracking-wider mb-2">{f.label}</label>
                      <input id={f.id} type={f.type} placeholder={f.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 outline-none transition-all"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                        onFocus={e => (e.target.style.borderColor = "rgba(14,165,233,0.4)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")} />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-white/30 uppercase tracking-wider mb-2">Subject</label>
                  <input id="subject" type="text" placeholder="Internship opportunity — Spring 2026"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onFocus={e => (e.target.style.borderColor = "rgba(14,165,233,0.4)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")} />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-white/30 uppercase tracking-wider mb-2">Message</label>
                  <textarea id="message" rows={5} placeholder="Tell me about the opportunity..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/20 outline-none transition-all resize-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onFocus={e => (e.target.style.borderColor = "rgba(14,165,233,0.4)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")} />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #22c55e)", boxShadow: "0 4px 20px rgba(14,165,233,0.3)" }}>
                  <Send size={14} />
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
