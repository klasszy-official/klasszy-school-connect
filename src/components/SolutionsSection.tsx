import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Bell, Calendar, Users, TrendingUp, CreditCard, Clock } from "lucide-react";

const solutions = [
  {
    num: "01",
    title: "ATTENDANCE MANAGEMENT",
    desc: "Real-time tracking for students and staff. Automated alerts for absences.",
    icon: Clock,
  },
  {
    num: "02",
    title: "STUDENT PROFILE MANAGEMENT",
    desc: "360° view of every student with academic, medical & extracurricular records.",
    icon: Users,
  },
  {
    num: "03",
    title: "HOMEWORK MANAGEMENT",
    desc: "Digital assignment distribution & submission through a dedicated portal.",
    icon: BookOpen,
  },
  {
    num: "04",
    title: "CIRCULARS & NOTICES",
    desc: "Instant school-wide announcements, event invites & urgent updates.",
    icon: Bell,
  },
  {
    num: "05",
    title: "DIGITAL DIARY",
    desc: "Modernized daily diary with logs, notes & lesson plans in real-time.",
    icon: Calendar,
  },
  {
    num: "06",
    title: "LEAVE APPLICATION",
    desc: "Streamlined leave requests & approvals for parents & staff.",
    icon: CreditCard,
  },
  {
    num: "07",
    title: "INDIVIDUAL STUDENT TRACKING",
    desc: "Data-driven insights to monitor performance & behavioral patterns.",
    icon: TrendingUp,
  },
  {
    num: "08",
    title: "REPORTS & ANALYTICS",
    desc: "Powerful reports & analytics to make smarter decisions.",
    icon: Clock,
  },
];

function SolutionCard({ item, index }: { item: typeof solutions[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-blue-100 bg-blue-50/50 p-8 transition-all hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(29,78,216,0.15)] sm:p-10"
    >
      <div className="absolute top-0 right-0 -m-6 h-32 w-32 rounded-full bg-blue-500 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />

      <div className="relative z-10">
        <div
          className="mb-8 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-white text-blue-600 shadow-sm transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-blue-200"
        >
          <Icon className="h-7 w-7" />
        </div>
        <h3 className="mb-4 text-xl font-bold uppercase tracking-wide text-neutral-900 lg:text-2xl">
          {item.title}
        </h3>
        <p className="text-sm leading-relaxed text-neutral-600 sm:text-base">
          {item.desc}
        </p>
      </div>

      <div className="relative z-10 mt-10 flex items-end justify-between">
        <span className="text-6xl font-black text-blue-200/50 transition-colors duration-300 group-hover:text-blue-100">
          {item.num}
        </span>
      </div>
    </motion.div>
  );
}

export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="bg-white px-6 py-24 lg:px-10 lg:py-40">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end lg:mb-24"
        >
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-blue-100 px-6 py-2 text-xs font-bold tracking-[0.2em] text-blue-800 uppercase">
              Everything You Need. All in One Place.
              </span>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-neutral-900 sm:text-6xl lg:text-7xl">
              OUR SERVICES
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-neutral-600 lg:text-xl font-medium">
            Klasszy is designed to digitize and streamline every operation of educational institutions effortlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((item, i) => (
            <div key={item.num} className="h-full">
              <SolutionCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
