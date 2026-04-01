import { useState } from "react";
import { motion as Motion } from "framer-motion";
import { Mail, Copy, Check, MapPin, Clock, Send } from "lucide-react";

const personalInfo = {
  email: "yad.4322@gmail.com",
};

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      // Optional toast – you can replace with a simple alert or a snackbar
      setTimeout(() => setCopied(false), 2000);
    } catch {
      alert("Failed to copy email.");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-500">
            Get in Touch
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Contact Me
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you.
            Let's build something amazing together.
          </p>
        </Motion.div>

        {/* Contact Card */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div
            className={`
              group relative flex flex-col rounded-2xl border border-teal-500/20
              bg-linear-to-br from-teal-500/5 via-transparent to-emerald-500/5
              bg-black/40 backdrop-blur-sm transition-all duration-300
              hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1 hover:border-teal-500/50
            `}
          >
            <div className="p-8 flex flex-col items-center gap-6">
              {/* Email Display */}
              <div className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 group-hover:border-teal-500/30 transition-colors">
                <div className="flex items-center gap-3 min-w-0">
                  <Mail className="size-5 text-teal-500 shrink-0" />
                  <span className="text-sm font-medium truncate text-gray-200">
                    {personalInfo.email}
                  </span>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors shrink-0"
                  aria-label="Copy email"
                >
                  {copied ? (
                    <Check className="size-4 text-teal-500" />
                  ) : (
                    <Copy className="size-4 text-gray-400 hover:text-teal-400 transition-colors" />
                  )}
                </button>
              </div>

              {/* Info Items */}
              <div className="w-full grid sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <MapPin className="size-4 text-gray-400 shrink-0" />
                  <span className="text-sm text-gray-400">Remote / Worldwide</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10">
                  <Clock className="size-4 text-gray-400 shrink-0" />
                  <span className="text-sm text-gray-400">Responds within 24h</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="w-full flex flex-col sm:flex-row gap-3 mt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm"
                >
                  <Send className="size-4" />
                  Send Email
                </a>
                <button
                  onClick={copyEmail}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-gray-200 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105 text-sm"
                >
                  <Copy className="size-4" />
                  {copied ? "Copied!" : "Copy Email"}
                </button>
              </div>
            </div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}