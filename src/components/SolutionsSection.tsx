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

const gradients = [
  "from-violet-400 to-indigo-400",
  "from-amber-400 to-orange-400",
  "from-green-400 to-emerald-400",
  "from-pink-400 to-red-400",
  "from-blue-400 to-cyan-400",
  "from-fuchsia-400 to-purple-400",
  "from-teal-400 to-emerald-400",
  "from-rose-400 to-orange-400",
];

function BounceCard({ item, index }: { item: typeof solutions[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const Icon = item.icon;
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className="group relative min-h-[320px] cursor-pointer overflow-hidden rounded-[2rem] bg-slate-100/80 border border-slate-200/60 p-6 h-full shadow-sm"
    >
      <div className="relative z-10 flex flex-col items-center pt-2">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm border border-slate-100">
          <Icon className="h-6 w-6" />
        </div>
        <CardTitle>{item.title}</CardTitle>
      </div>

      {/* Decorative big number */}
      <div className="absolute top-5 left-6 text-2xl font-black text-slate-300/50 z-0 select-none">
        {item.num}
      </div>

      {/* Sliding bottom gradient with description */}
      <div className={`absolute bottom-0 left-4 right-4 top-[8.5rem] translate-y-12 rounded-t-[1.5rem] bg-gradient-to-br ${gradient} p-5 px-6 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] flex justify-center items-center shadow-lg z-20`}>
        <p className="block text-center font-semibold text-white text-[15px] sm:text-base leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

const CardTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mx-auto text-center text-lg font-bold uppercase tracking-wide text-slate-800 px-2 line-clamp-2">
      {children}
    </h3>
  );
};

export function SolutionsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solutions" className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end lg:mb-20"
        >
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-blue-100 px-6 py-2 text-xs font-bold tracking-[0.2em] text-blue-800 uppercase shadow-sm">
              Everything You Need. All in One Place.
            </span>
            <h2 className="text-4xl font-bold uppercase tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              OUR SERVICES
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-slate-600 lg:text-xl font-medium">
            Klasszy is designed to digitize and streamline every operation of educational institutions effortlessly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((item, i) => (
            <div key={item.num} className="h-full">
              <BounceCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
