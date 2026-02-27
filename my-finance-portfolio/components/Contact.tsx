"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    Icon: Mail,
    label: "Email",
    value: "wilfriedlawpro@gmail.com",
    href: "mailto:wilfriedlawpro@gmail.com",
  },
  {
    Icon: Linkedin,
    label: "LinkedIn",
    value: "wilfried-lawsonhellu",
    href: "https://linkedin.com/in/wilfried-lawsonhellu",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Massy, Île-de-France, France",
    href: null,
  },
];

const socialLinks = [
  { Icon: Linkedin, href: "https://linkedin.com/in/wilfried-lawsonhellu", gradient: "from-blue-600 to-cyan-600" },
  { Icon: Github, href: "https://github.com/Wxlly00", gradient: "from-purple-600 to-pink-600" },
  { Icon: Mail, href: "mailto:wilfriedlawpro@gmail.com", gradient: "from-emerald-600 to-teal-600" },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-28 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-full text-sm mb-6 backdrop-blur-sm">
            Get In Touch
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-5">Let&apos;s Connect</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Open to internship opportunities in Asset Management &amp; Corporate Finance — Available March to July 2026
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <p className="text-gray-500 leading-relaxed text-lg">
              Looking for an internship in{" "}
              <span className="text-blue-400 font-medium">Asset Management</span> or{" "}
              <span className="text-blue-400 font-medium">Corporate Finance</span> in Paris.
            </p>

            <div className="space-y-5">
              {contactInfo.map(({ Icon, label, value, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl backdrop-blur-sm shrink-0">
                    <Icon size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-300 text-sm font-medium">{value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {socialLinks.map(({ Icon, href, gradient }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-4 bg-gradient-to-br ${gradient} rounded-2xl shadow-lg hover:shadow-2xl transition-shadow relative overflow-hidden group`}
                >
                  <Icon size={18} className="text-white relative z-10" />
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="p-8 lg:p-10 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />

              <form
                action="mailto:wilfriedlawpro@gmail.com"
                method="get"
                encType="text/plain"
                className="space-y-6 relative z-10"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:outline-none transition-colors px-4 py-3 text-sm backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="your.email@example.com"
                      className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:outline-none transition-colors px-4 py-3 text-sm backdrop-blur-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Internship opportunity — [Company]"
                    className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:outline-none transition-colors px-4 py-3 text-sm backdrop-blur-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    name="body"
                    rows={6}
                    placeholder="Hello Wilfried, I came across your profile and..."
                    className="w-full rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-gray-600 focus:border-blue-500/50 focus:outline-none transition-colors px-4 py-3 text-sm backdrop-blur-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-500/25 group"
                >
                  <Send size={16} />
                  Send Message
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
