import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const steps = [
  {
    num: 1,
    title: "DISCOVER",
    desc: "We understand your school's unique needs, class structure, and communication goals.",
    color: "bg-blue-600",
    light: "bg-blue-50",
    text: "text-blue-600",
    border: "border-blue-200",
  },
  {
    num: 2,
    title: "SETUP",
    desc: "Our team configures your classes, teachers and parents — ready in just 1–2 days.",
    color: "bg-violet-600",
    light: "bg-violet-50",
    text: "text-violet-600",
    border: "border-violet-200",
  },
  {
    num: 3,
    title: "LAUNCH",
    desc: "Quick training for staff, app access for parents, and you're live — effortlessly.",
    color: "bg-emerald-600",
    light: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
  },
];

export function StepsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="how" className="bg-slate-50 px-6 py-24 lg:px-10 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
            How it Works
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Up and running in 3 simple steps
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-slate-500">
            From first contact to daily use — we're with you every step of the
            way.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setActiveStep(i)}
              className={`group cursor-pointer rounded-3xl border bg-white p-8 transition-all duration-300 ${
                activeStep === i
                  ? `border-2 ${step.border} shadow-xl`
                  : "border-slate-100 hover:shadow-md"
              }`}
            >
              {/* Step number */}
              <div
                className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-extrabold text-white ${step.color}`}
              >
                {step.num}
              </div>

              <h3 className="mb-3 text-xl font-extrabold text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {step.desc}
              </p>

              {/* Active indicator */}
              <div
                className={`mt-6 h-1 rounded-full transition-all duration-500 ${
                  activeStep === i ? `${step.color} w-full` : "bg-slate-100 w-8"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Progress dots */}
        <div className="mt-10 flex justify-center gap-2">
          {steps.map((s, i) => (
            <button
              key={s.num}
              onClick={() => setActiveStep(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === activeStep ? "w-8 bg-blue-600" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-8 text-center text-sm leading-relaxed text-slate-400"
        >
          From first setup to daily use, we're with you at every step.{" "}
          <a
            href="#contact"
            className="font-semibold text-blue-600 underline underline-offset-2 transition-colors hover:text-blue-700"
          >
            Contact us for details
          </a>
        </motion.p>
      </div>
    </section>
  );
}
