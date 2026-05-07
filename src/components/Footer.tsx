import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, ArrowRight } from "lucide-react";
import { GraduationCap, Phone, Mail } from "lucide-react";
import { WHATSAPP_URL, DEMO_URL } from "./CtaButtons";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      {/* Final CTA */}
      <section id="contact" className="bg-white px-6 py-24 lg:px-10 lg:py-32" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-7xl"
        >
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900 px-8 py-24 text-center sm:px-16">
            {/* Blobs */}
            <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-violet-600/10 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400 mb-6">
                Get Started Today
              </span>
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Want to see these features
                <br />
                <span className="text-blue-400">in action?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
                Book a free 1-on-1 demo with our product consultant. Ask
                anything, see every feature — all for free.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <motion.a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.06, boxShadow: "0 0 32px rgba(37,99,235,0.35)" }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-10 py-4 text-sm font-bold text-white shadow-lg transition-all"
                >
                  Get Free Demo <ArrowRight size={16} />
                </motion.a>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-10 py-4 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-50 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-4 mb-16">
            {/* Brand */}
            <div className="md:col-span-2 space-y-5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="text-xl font-extrabold tracking-tight text-slate-900">
                  Klasszy
                </span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                Simple school & parent communication platform — built for
                schools across India. Streamlining operations and fostering
                engagement every day.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-5 text-sm font-extrabold uppercase tracking-widest text-slate-900">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-slate-500">
                {[
                  { href: "#features", label: "Features" },
                  { href: "#solutions", label: "Solutions" },
                  { href: "#how", label: "How it works" },
                  { href: "#pricing", label: "Pricing" },
                  { href: "#contact", label: "Contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="group relative inline-block transition-colors hover:text-blue-600"
                    >
                      {l.label}
                      <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-5 text-sm font-extrabold uppercase tracking-widest text-slate-900">
                Get in Touch
              </h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-slate-400" />
                  <a href="tel:+919999999999" className="hover:text-blue-600 transition-colors">
                    +91 99999 99999
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <a href="mailto:hello@klasszy.com" className="hover:text-blue-600 transition-colors">
                    hello@klasszy.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MessageCircle className="h-4 w-4 text-slate-400" />
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    WhatsApp us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-200 pt-8 flex flex-col gap-4 md:flex-row md:justify-between md:items-center text-xs text-slate-400">
            <p>© {new Date().getFullYear()} Klasszy. Made with care for schools in India.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-700 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-700 transition-colors">Terms of Use</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
