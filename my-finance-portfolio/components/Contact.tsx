"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Linkedin, Github, Send, ArrowUpRight } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { t } = useLang();
  const c = t.contact;
  const f = c.form;

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden" style={{ background: "linear-gradient(to bottom, #030712, #050f1a)" }}>
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(14,165,233,0.07) 0%, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="mb-16">
          <p className="text-xs font-mono text-sky-400 uppercase tracking-widest mb-3">{c.tag}</p>
          <h2 className="text-4xl lg:text-5xl text-white tracking-tight">{c.title}</h2>
          <p className="text-white/40 mt-3 max-w-xl">{c.subtitle}</p>
        </motion.div>
        <div className="grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, x: -24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }} className="lg:col-span-2 space-y-5">
            {[
              { Icon: Mail, label: c.emailLabel, value: "wilfriedlawpro@gmail.com", href: "mailto:wilfriedlawpro@gmail.com" },
              { Icon: MapPin, label: c.locationLabel, value: c.location, href: null },
            ].map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 p-4 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(14,165,233,0.1)", border: "1px solid rgba(14,165,233,0.2)" }}>
                  <Icon size={15} className="text-sky-400" />
                </div>
                <div>
                  <p className="text-xs font-mono text-white/25 uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? <a href={href} className="text-sm text-white/60 hover:text-sky-400 transition-colors">{value}</a> : <p className="text-sm text-white/60">{value}</p>}
                </div>
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/wilfried-lawson-hellu-227a09127", label: "LinkedIn", color: "#0ea5e9" },
                { Icon: Github, href: "https://github.com/Wxlly00", label: "GitHub", color: "#a78bfa" },
                { Icon: Mail, href: "mailto:wilfriedlawpro@gmail.com", label: "Email", color: "#22c55e" },
              ].map(({ Icon, href, label, color }) => (
                <motion.a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
                  whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-medium transition-all"
                  style={{ background: `${color}10`, border: `1px solid ${color}20`, color }}>
                  <Icon size={13} />{label}<ArrowUpRight size={10} />
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }} className="lg:col-span-3">
            <div className="p-7 rounded-2xl relative overflow-hidden" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at top right, rgba(14,165,233,0.05) 0%, transparent 60%)" }} />
              <form className="space-y-5 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { label: f.name, placeholder: f.namePlaceholder, type: "text" },
                    { label: f.email, placeholder: f.emailPlaceholder, type: "email" },
                  ].map((field, i) => (
                    <div key={i}>
                      <label className="block text-xs font-mono text-white/25 uppercase tracking-wider mb-2">{field.label}</label>
                      <input type={field.type} placeholder={field.placeholder}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/15 outline-none transition-all"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                        onFocus={e => (e.target.style.borderColor = "rgba(14,165,233,0.4)")}
                        onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")} />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/25 uppercase tracking-wider mb-2">{f.subject}</label>
                  <input type="text" placeholder={f.subjectPlaceholder}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/15 outline-none transition-all"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onFocus={e => (e.target.style.borderColor = "rgba(14,165,233,0.4)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")} />
                </div>
                <div>
                  <label className="block text-xs font-mono text-white/25 uppercase tracking-wider mb-2">{f.message}</label>
                  <textarea rows={5} placeholder={f.messagePlaceholder}
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/15 outline-none transition-all resize-none"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                    onFocus={e => (e.target.style.borderColor = "rgba(14,165,233,0.4)")}
                    onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.08)")} />
                </div>
                <button type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold text-white"
                  style={{ background: "linear-gradient(135deg, #0ea5e9, #22c55e)", boxShadow: "0 4px 20px rgba(14,165,233,0.25)" }}>
                  <Send size={14} />{f.send}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
