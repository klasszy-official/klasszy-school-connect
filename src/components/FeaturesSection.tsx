import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Clock, Settings, Users, BarChart3 } from "lucide-react";

const features = [
  {
    title: "A Complete ERP",
    desc: "More than a Diary – A Complete School ERP for everything you need.",
    icon: Settings,
    accent: "text-blue-600",
    iconBg: "bg-blue-50",
    border: "hover:border-blue-200",
    glow: "hover:shadow-blue-50",
  },
  {
    title: "Secure & Reliable",
    desc: "Easy to use, secure, and accessible anytime, anywhere.",
    icon: Users,
    accent: "text-violet-600",
    iconBg: "bg-violet-50",
    border: "hover:border-violet-200",
    glow: "hover:shadow-violet-50",
  },
  {
    title: "Saves Time",
    desc: "Automates processes to save time and drastically reduce workload.",
    icon: Clock,
    accent: "text-emerald-600",
    iconBg: "bg-emerald-50",
    border: "hover:border-emerald-200",
    glow: "hover:shadow-emerald-50",
  },
  {
    title: "Improves Outcomes",
    desc: "Improves communication & transparency, supporting better learning outcomes.",
    icon: BarChart3,
    accent: "text-orange-600",
    iconBg: "bg-orange-50",
    border: "hover:border-orange-200",
    glow: "hover:shadow-orange-50",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="features"
      className="bg-white px-6 py-24 lg:px-10 lg:py-32"
      ref={ref}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
            Why Klasszy?
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            More than a Diary
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-500">
            Everything you need to manage your school efficiently in a single
            dashboard.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6, boxShadow: "0 24px 48px -12px rgba(0,0,0,0.06)" }}
                className={`group cursor-default rounded-3xl border border-slate-100 bg-white p-8 transition-all duration-300 ${f.border} ${f.glow} hover:shadow-xl`}
              >
                <div
                  className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${f.iconBg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`h-6 w-6 ${f.accent}`} />
                </div>
                <h3 className="mb-3 text-lg font-extrabold text-slate-900">
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  {f.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
