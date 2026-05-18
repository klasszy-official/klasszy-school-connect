import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, PlayCircle, Star } from "lucide-react";
import { DEMO_URL } from "@/components/CtaButtons";



export function Hero() {
  return (
    <header className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white pt-20">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 left-10 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-60 right-20 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-40 left-1/4 h-56 w-56 rounded-full bg-indigo-100/40 blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Hero Grid */}
        <div className="grid min-h-[calc(100vh-5rem)] items-center gap-16 lg:grid-cols-2">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 py-16 lg:py-0"
          >


            {/* Headline */}
            <div className="space-y-4">
              <span className="block text-2xl font-extrabold tracking-tight text-blue-900 md:text-3xl">
                {/* ONE APP. INDIVIDUAL LOGIN. */}
              </span>
              <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-slate-900 lg:text-6xl xl:text-7xl uppercase">
                COMPLETE{" "}
                <span className="relative">
                  <span className="relative z-10 bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                    SCHOOL
                  </span>
                  <span className="absolute -bottom-1 left-0 h-3 w-full rounded-full bg-blue-100/80 -z-0" />
                </span>{" "}
                SOLUTION
              </h1>
            </div>

            <p className="max-w-xl text-lg font-bold leading-relaxed text-blue-900">
              SMARTER ADMIN. BETTER LEARNING. STRONGER SCHOOLS.
            </p>
            <p className="max-w-lg text-lg leading-relaxed text-slate-500 font-medium">
              Klasszy is an all-in-one School ERP that simplifies administration,
              enhances communication, and empowers every stakeholder.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37,99,235,0.25)" }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-100 transition-all group"
              >
                Get Free Demo
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </motion.a>
            </div>

            {/* Social proof removed */}
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative hidden lg:block"
          >
            {/* Dashboard Mockup */}
            <div className="relative z-10 rounded-3xl border border-slate-100 bg-white p-5 shadow-[0_32px_80px_-20px_rgba(0,0,0,0.12)]">
              {/* Browser chrome */}
              <div className="mb-4 flex items-center gap-1.5 px-2">
                <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <div className="ml-4 h-5 flex-1 rounded-full bg-slate-100 px-3 flex items-center">
                  <div className="h-1.5 w-24 rounded-full bg-slate-200" />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {/* Sidebar */}
                <div className="col-span-1 space-y-3">
                  <div className="flex h-8 items-center gap-2 rounded-xl bg-blue-600 px-3">
                    <div className="h-2 w-2 rounded-full bg-white/80" />
                    <div className="h-1.5 w-12 rounded-full bg-white/60" />
                  </div>
                  {["bg-blue-50", "bg-slate-50", "bg-slate-50", "bg-slate-50"].map(
                    (bg, i) => (
                      <div
                        key={i}
                        className={`flex h-8 items-center gap-2 rounded-xl ${bg} px-3`}
                      >
                        <div className="h-2 w-2 rounded-full bg-slate-300" />
                        <div className="h-1.5 w-10 rounded-full bg-slate-200" />
                      </div>
                    )
                  )}
                </div>

                {/* Main */}
                <div className="col-span-3 space-y-4">
                  {/* Summary cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { bg: "bg-blue-50", border: "border-blue-100", label: "Students", val: "1,284" },
                      { bg: "bg-violet-50", border: "border-violet-100", label: "Teachers", val: "48" },
                      { bg: "bg-emerald-50", border: "border-emerald-100", label: "Parents", val: "2,100" },
                    ].map((c) => (
                      <div
                        key={c.label}
                        className={`rounded-xl border ${c.border} ${c.bg} p-3`}
                      >
                        <p className="text-[9px] font-semibold text-slate-500 uppercase tracking-wider">
                          {c.label}
                        </p>
                        <p className="mt-1 text-sm font-extrabold text-slate-800">
                          {c.val}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Chart */}
                  <div className="flex h-32 items-end gap-1.5 rounded-2xl bg-slate-50 px-4 pb-4 pt-6">
                    {[40, 65, 50, 75, 55, 90, 70, 85].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-md"
                        style={{
                          height: `${h}%`,
                          background:
                            i === 5
                              ? "rgb(37,99,235)"
                              : "rgba(37,99,235,0.15)",
                        }}
                      />
                    ))}
                  </div>

                  {/* Stat row */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-orange-50 border border-orange-100 p-3">
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-orange-400">
                        Attendance
                      </p>
                      <p className="mt-1 text-sm font-extrabold text-slate-800">
                        94.2%
                      </p>
                    </div>
                    <div className="rounded-xl bg-rose-50 border border-rose-100 p-3">
                      <p className="text-[9px] font-semibold uppercase tracking-wider text-rose-400">
                        Fee Collected
                      </p>
                      <p className="mt-1 text-sm font-extrabold text-slate-800">
                        ₹ 3.4L
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating notification card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-12 -left-16 z-20 w-64 rounded-2xl border border-slate-100 bg-white p-5 shadow-2xl"
            >
              <div className="flex flex-col text-center">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-900">
                  Your School. Your Identity.
                </p>
                <p className="text-2xl font-black text-indigo-600 mt-1 uppercase">
                  Your App.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-blue-50/50 p-2 border border-blue-100/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm border border-slate-100">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Logo</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-slate-800">
                      Your School Name
                    </p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-2.5 h-2.5 text-amber-400" fill="currentColor" />)}
                    </div>
                  </div>
                </div>
                <button className="cursor-default rounded-md bg-slate-900 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider hover:bg-slate-800 transition-colors">
                  Install
                </button>
              </div>
            </motion.div>

            {/* Floating stat chip */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -right-6 top-10 z-20 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl"
            >
              <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                Onboarded today
              </p>
              <p className="mt-0.5 text-base font-extrabold text-blue-600">
                +14 schools
              </p>
            </motion.div>

            {/* Floating 3D School Mobile Image */}
            <motion.div
              animate={{ y: [0, -15, 0], rotate: [-1, 2, -1] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-32 -left-32 z-30 w-[26rem] pointer-events-none"
            >
              <img 
                src="/ChatGPT_Image_May_15__2026__11_36_57_AM-removebg-preview.png" 
                alt="School Mobile App 3D" 
                className="w-full h-auto object-contain drop-shadow-[0_30px_40px_rgba(37,99,235,0.2)]" 
              />
            </motion.div>

            {/* Glow */}
            <div className="absolute -right-10 -top-10 -z-10 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl" />
            <div className="absolute bottom-20 left-1/3 -z-10 h-48 w-48 rounded-full bg-violet-400/15 blur-3xl" />
          </motion.div>
        </div>
      </div>


    </header>
  );
}
