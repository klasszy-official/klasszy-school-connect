import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

export function WhiteLabelSection() {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-24 lg:py-32 overflow-hidden" ref={scrollRef}>
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 items-center">
          
          {/* Left / Copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700 shadow-sm mb-6">
              Exclusive Brand Identity
            </span>
            <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6 leading-tight">
              Your School on the Play Store.
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-slate-500 font-medium tracking-wide">
              We don't just give you a generic platform. We build a fully customized, white-labeled app on the Google Play Store with your school's exact name, logo, and branding. Empower your parents and teachers with an app they'll proudly recognize.
            </p>
          </motion.div>

          {/* Right / Widget */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center relative"
          >
            {/* Decorative Glows */}
            <div className="absolute left-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 blur-3xl opacity-50" />
            <div className="absolute right-0 bottom-0 -z-10 h-64 w-64 rounded-full bg-indigo-100 blur-3xl opacity-50" />

            {/* The exact design from Hero.tsx, made larger and responsive */}
            <div className="w-full max-w-md rounded-[2.5rem] border border-slate-100 bg-white p-8 md:p-10 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.12)]">
              <div className="flex flex-col text-center mb-10">
                <p className="text-sm md:text-base font-bold uppercase tracking-wider text-blue-900">
                  Your School. Your Identity.
                </p>
                <p className="text-4xl md:text-6xl font-black text-indigo-600 mt-2 uppercase tracking-tight">
                  Your App.
                </p>
              </div>
              
              <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-5 rounded-2xl bg-blue-50/50 p-4 border border-blue-100/50 shadow-sm">
                <div className="flex w-full items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white shadow-md border border-slate-100">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Logo</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-base md:text-lg font-bold text-slate-800 leading-tight">
                      Your School Name
                    </p>
                    <div className="flex gap-1 mt-1">
                      {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <button className="w-full md:w-auto shrink-0 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white uppercase tracking-wider hover:bg-slate-800 transition-colors shadow-lg">
                  Install
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
