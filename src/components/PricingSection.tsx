import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles, BookOpen } from "lucide-react";
import { DEMO_URL } from "./CtaButtons";

const benefits = [
  "Attedance & Homework Management",
  "Leave Applications & Tracking",
  "Digital Diary & Performance Reports",
  "Instant Circulars & Notices",
  "Dedicated Parent App",
  "Your School Name & Logo",
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="bg-slate-50 px-6 py-24 lg:px-10 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-amber-200 bg-amber-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-700 shadow-sm">
            Simple Pricing
          </span>
          <h2 className="mt-5 text-4xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl lg:text-6xl max-w-2xl mx-auto">
            ALL FEATURES. ONE APP. ONE PRICE.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-xl font-medium text-slate-600">
            A comprehensive solution for schools of all sizes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-700 to-indigo-800 p-10 sm:p-14 shadow-2xl shadow-blue-900/20 text-center border border-indigo-500/30"
        >
          <div className="absolute top-0 right-0 -m-10 h-64 w-64 rounded-full bg-white opacity-5 blur-3xl" />
          <div className="absolute bottom-0 left-0 -m-10 h-64 w-64 rounded-full bg-amber-400 opacity-10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-amber-400 backdrop-blur-sm border border-white/20 shadow-xl">
              <BookOpen className="h-10 w-10" />
            </div>

            <h3 className="text-3xl font-black text-white sm:text-5xl mb-2">
              Cost of a Diary
            </h3>
            <p className="text-blue-200 font-medium text-lg max-w-md mx-auto mb-10">
              Get the complete school ERP and parent communication app without breaking the bank.
            </p>

            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 text-left mb-12 w-full max-w-2xl mx-auto">
              {benefits.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  className="flex items-center gap-3 text-sm sm:text-base font-semibold text-white/90"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-amber-400" />
                  {item}
                </motion.li>
              ))}
            </ul>

            <motion.a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex w-full max-w-sm items-center justify-center rounded-full bg-amber-400 py-4 text-lg font-black uppercase tracking-wide text-indigo-950 transition-all hover:bg-amber-300 shadow-xl"
            >
              Book a Free Demo Today!
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
