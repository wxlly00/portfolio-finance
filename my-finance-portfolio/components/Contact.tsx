"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "wilfriedlawpro@gmail.com",
    href: "mailto:wilfriedlawpro@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "wilfried-lawsonhellu",
    href: "https://linkedin.com/in/wilfried-lawsonhellu",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Massy, Île-de-France, France",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-2 gold-underline">
            Get In Touch
          </h2>
          <p className="text-slate-400 mt-6">Open to opportunities in Asset Management &amp; Corporate Finance</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <p className="text-slate-300 leading-relaxed mb-8">
              Open to internship opportunities in{" "}
              <span className="text-gold font-medium">Asset Management</span> and{" "}
              <span className="text-gold font-medium">Corporate Finance</span> in Paris.
              Available{" "}
              <span className="text-gold font-medium">March to July 2026</span>.
            </p>

            {contactInfo.map((item) => (
              <div key={item.label} className="glass rounded-xl p-4 flex items-center gap-4 hover:border-gold/30 transition-all">
                <div className="p-2 rounded-lg bg-gold/10">
                  <item.icon size={18} className="text-gold" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-slate-200 hover:text-gold transition-colors text-sm font-medium"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-slate-200 text-sm font-medium">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              action="mailto:wilfriedlawpro@gmail.com"
              method="get"
              encType="text/plain"
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-wider mb-1.5">Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs text-slate-500 uppercase tracking-wider mb-1.5">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-gold/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-wider mb-1.5">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Internship opportunity — [Company]"
                  className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs text-slate-500 uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  name="body"
                  rows={5}
                  placeholder="Hello Wilfried, I came across your profile and..."
                  className="w-full bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-gold/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-gold text-navy-dark font-semibold rounded-lg hover:bg-gold-light transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
