import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen,
  Bell,
  MessageCircle,
  CalendarDays,
  CalendarHeart,
  Users,
} from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Homework Sharing",
    desc: "Share daily homework with photos and notes — instantly.",
  },
  {
    icon: MessageCircle,
    title: "Messages & Announcements",
    desc: "Reach the whole school or a single class in one tap.",
  },
  {
    icon: CalendarDays,
    title: "Timetable",
    desc: "Class schedules always at parents' fingertips.",
  },
  {
    icon: CalendarHeart,
    title: "Events",
    desc: "Sports day, PTM, holidays — everyone stays in the loop.",
  },
  {
    icon: Bell,
    title: "Parent Notifications",
    desc: "Push alerts that parents actually see and read.",
  },
  {
    icon: Users,
    title: "Class-wise Groups",
    desc: "Auto-organised groups by class and section.",
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="bg-neutral-50 px-6 py-24 lg:px-10 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            Features
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            Everything your school needs
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-neutral-500">
            Designed to be so simple, anyone can use it from day one.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.1)",
                }}
                className="group cursor-default rounded-2xl bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-colors"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100 text-neutral-500 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-black">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">
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
