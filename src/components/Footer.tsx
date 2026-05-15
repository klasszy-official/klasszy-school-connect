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


      {/* Footer */}
      <footer className="border-t border-slate-100 bg-slate-50 px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-4 mb-16">
            {/* Brand */}
            <div className="md:col-span-2 space-y-5">
              <div className="flex items-center gap-1.5 group">
                <div className="relative flex h-10 w-10 items-center justify-center translate-y-0.5">
                  <span className="text-[2.6rem] font-black bg-gradient-to-br from-blue-900 via-blue-700 to-blue-400 bg-clip-text text-transparent font-sans">K</span>
                  <GraduationCap className="absolute -top-1 -left-1 h-5 w-5 text-yellow-500 fill-yellow-500/20" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col justify-center translate-y-1">
                  <span className="text-[2rem] font-black tracking-tighter text-[#0a1128] lowercase leading-[0.8]">
                    klasszy
                  </span>
                  <span className="text-[0.6rem] font-black tracking-[0.25em] text-slate-500 uppercase mt-1 leading-none">
                    ERP FOR SCHOOL MANAGEMENT
                  </span>
                </div>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500 font-medium">
                Klasszy is an all-in-one School ERP that simplifies administration, enhances communication, and empowers every stakeholder.
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
                <li className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <a href="tel:+917200675522" className="hover:text-blue-600 transition-colors">
                      7200675522
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <a href="tel:+917373733435" className="hover:text-blue-600 transition-colors">
                      7373733435
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <a href="tel:+919092346284" className="hover:text-blue-600 transition-colors">
                      9092346284
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <a href="mailto:support@klasszy.in" className="hover:text-blue-600 transition-colors">
                    support@klasszy.in
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
