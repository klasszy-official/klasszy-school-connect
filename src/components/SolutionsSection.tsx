import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

const solutions = [
  {
    num: "I",
    title: "HOMEWORK & DAILY UPDATES",
    desc: "Share homework, class notes, and daily updates instantly with parents. No more lost paper slips or missed WhatsApp messages.",
  },
  {
    num: "II",
    title: "INSTANT NOTIFICATIONS & ALERTS",
    desc: "Send push notifications directly to parent phones. Emergency alerts, holidays, and schedule changes — delivered in seconds.",
  },
  {
    num: "III",
    title: "EVENT & CALENDAR MANAGEMENT",
    desc: "Sports day, PTM, holidays, exams — everything organized in one place. Parents never miss important dates again.",
  },
  {
    num: "IV",
    title: "CLASS-WISE COMMUNICATION",
    desc: "Auto-organized groups by class and section. Send targeted messages to specific classes without bothering others.",
  },
  {
    num: "V",
    title: "ATTENDANCE & PROGRESS TRACKING",
    desc: "Track student attendance and progress. Parents stay informed about their child's performance effortlessly.",
  },
  {
    num: "VI",
    title: "FEE REMINDERS & MANAGEMENT",
    desc: "Automated fee reminders and payment tracking. Reduce follow-ups and keep finances organized.",
  },
  {
    num: "VII",
    title: "TIMETABLE & SCHEDULE SHARING",
    desc: "Digital timetables always at parents' fingertips. Changes updated in real-time across all devices.",
  },
];

function SolutionItem({ item, index }: { item: typeof solutions[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group border-b border-neutral-200 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-neutral-600 lg:py-8"
      >
        <div className="flex items-center gap-6">
          <span className="text-sm font-medium text-neutral-400">{item.num}.</span>
          <span className="text-base font-bold uppercase tracking-wide text-black sm:text-lg lg:text-xl">
            {item.title}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500"
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden"
      >
        <p className="pb-6 pl-12 text-sm leading-relaxed text-neutral-500 lg:max-w-xl lg:pl-16">
          {item.desc}
        </p>
      </motion.div>
    </motion.div>
  );
}

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
          className="mb-12"
        >
          <h2 className="text-4xl font-bold uppercase tracking-tight text-black sm:text-5xl lg:text-6xl">
            SOLUTIONS
            <sup className="ml-1 text-lg font-normal text-neutral-400">
              ({solutions.length.toString().padStart(2, "0")})
            </sup>
          </h2>
        </motion.div>

        <div className="border-t border-neutral-200">
          {solutions.map((item, i) => (
            <SolutionItem key={item.num} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
