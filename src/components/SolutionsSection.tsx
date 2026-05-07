import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Bell, Calendar, Users, TrendingUp, CreditCard, Clock } from "lucide-react";

const solutions = [
  {
    num: "01",
    title: "HOMEWORK & DAILY UPDATES",
    desc: "Share homework, class notes, and daily updates instantly with parents. No more lost paper slips or missed WhatsApp messages.",
    icon: BookOpen,
  },
  {
    num: "02",
    title: "INSTANT NOTIFICATIONS & ALERTS",
    desc: "Send push notifications directly to parent phones. Emergency alerts, holidays, and schedule changes — delivered in seconds.",
    icon: Bell,
  },
  {
    num: "03",
    title: "EVENT & CALENDAR MANAGEMENT",
    desc: "Sports day, PTM, holidays, exams — everything organized in one place. Parents never miss important dates again.",
    icon: Calendar,
  },
  {
    num: "04",
    title: "CLASS-WISE COMMUNICATION",
    desc: "Auto-organized groups by class and section. Send targeted messages to specific classes without bothering others.",
    icon: Users,
  },
  {
    num: "05",
    title: "ATTENDANCE & PROGRESS TRACKING",
    desc: "Track student attendance and progress. Parents stay informed about their child's performance effortlessly.",
    icon: TrendingUp,
  },
  {
    num: "06",
    title: "FEE REMINDERS & MANAGEMENT",
    desc: "Automated fee reminders and payment tracking. Reduce follow-ups and keep finances organized.",
    icon: CreditCard,
  },
  {
    num: "07",
    title: "TIMETABLE & SCHEDULE SHARING",
    desc: "Digital timetables always at parents' fingertips. Changes updated in real-time across all devices.",
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
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] border border-purple-100 bg-purple-50/50 p-8 transition-all hover:-translate-y-2 hover:bg-white hover:shadow-[0_30px_60px_-15px_rgba(147,51,234,0.15)] sm:p-10"
    >
      <div className="absolute top-0 right-0 -m-6 h-32 w-32 rounded-full bg-purple-500 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" />

      <div className="relative z-10">
        <div
          className="mb-8 flex h-16 w-16 items-center justify-center rounded-[1.25rem] bg-white text-purple-600 shadow-sm transition-all duration-300 group-hover:bg-purple-600 group-hover:text-white group-hover:shadow-xl group-hover:shadow-purple-200"
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
        <span className="text-6xl font-black text-purple-200/50 transition-colors duration-300 group-hover:text-purple-100">
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
            <span className="inline-block rounded-full bg-purple-100 px-6 py-2 text-xs font-bold tracking-[0.2em] text-purple-600 uppercase">
              Transforming Education
              </span>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-neutral-900 sm:text-6xl lg:text-8xl">
              SOLUTIONS
              <sup className="ml-1 text-2xl font-normal text-neutral-300">
                ({solutions.length.toString().padStart(2, "0")})
              </sup>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-neutral-600 lg:text-xl">
            A comprehensive suite of tools designed to streamline school management and enhance parent-teacher collaboration.
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
