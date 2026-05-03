import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Phone, Mail, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, DEMO_URL } from "./CtaButtons";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <>
      {/* Final CTA */}
      <section id="contact" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          ref={ref}
          className="mx-auto max-w-[1400px]"
        >
          <div className="relative overflow-hidden rounded-3xl bg-neutral-950 px-8 py-20 text-center sm:px-16 lg:py-28">
            {/* Decorative elements */}
            <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#d4f542]/5 blur-3xl" />
            <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#d4f542]/5 blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Start your school's digital
                <br />
                journey today
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-400">
                Book a free demo and see how Klasszy can make your school's
                communication simpler in just a few days.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <motion.a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,245,66,0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4f542] px-8 py-4 text-sm font-bold text-black transition-shadow"
                >
                  Book Free Demo
                </motion.a>
                <motion.a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
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
      <footer className="border-t border-neutral-100 bg-white px-6 py-16 lg:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-12 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="text-xl font-bold text-black">Klasszy</span>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-500">
                Simple school & parent communication app — built for schools
                across India.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-black">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-neutral-500">
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
                      className="group relative inline-block transition-colors hover:text-black"
                    >
                      {l.label}
                      <span className="absolute -bottom-0.5 left-0 h-[1px] w-0 bg-black transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-black">
                Get in touch
              </h4>
              <ul className="mt-4 space-y-3 text-sm text-neutral-500">
                <li className="flex items-center gap-2.5">
                  <Phone className="h-4 w-4 text-neutral-400" />
                  <a href="tel:+919999999999" className="hover:text-black">
                    +91 99999 99999
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="h-4 w-4 text-neutral-400" />
                  <a href="mailto:hello@klasszy.com" className="hover:text-black">
                    hello@klasszy.com
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <MessageCircle className="h-4 w-4 text-neutral-400" />
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-black"
                  >
                    WhatsApp us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 border-t border-neutral-100 pt-8 text-center text-xs text-neutral-400">
            © {new Date().getFullYear()} Klasszy. Made with care for schools in
            India.
          </div>
        </div>
      </footer>
    </>
  );
}
