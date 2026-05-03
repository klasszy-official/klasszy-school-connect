import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const steps = [
  {
    num: 1,
    title: "DISCOVER",
    desc: "We understand your school's unique needs, class structure, and communication goals.",
  },
  {
    num: 2,
    title: "SETUP",
    desc: "Our team configures your classes, teachers and parents — ready in just 1-2 days.",
  },
  {
    num: 3,
    title: "LAUNCH",
    desc: "Quick training for staff, app access for parents, and you're live — effortlessly.",
  },
];

function StepCircle({ step, isActive }: { step: typeof steps[0]; isActive: boolean }) {
  const circumference = 2 * Math.PI * 120;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center"
    >
      <div className="relative flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
        {/* Outer ring */}
        <svg className="absolute inset-0" viewBox="0 0 260 260">
          <circle
            cx="130"
            cy="130"
            r="120"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="2"
          />
          <motion.circle
            cx="130"
            cy="130"
            r="120"
            fill="none"
            stroke="#d4f542"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: isActive ? circumference * 0.65 : circumference }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            transform="rotate(-90 130 130)"
          />
        </svg>

        {/* Center content */}
        <div className="text-center">
          <motion.h3
            key={step.num}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white sm:text-3xl"
          >
            {step.num}. {step.title}
          </motion.h3>
          <motion.p
            key={`desc-${step.num}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-3 max-w-[200px] text-sm leading-relaxed text-neutral-400"
          >
            {step.desc}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

export function StepsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section id="how" className="bg-black px-6 py-24 lg:px-10 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-[1400px]">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          OUR STEPS
        </motion.h2>

        <div className="mt-16 flex flex-col items-center justify-center lg:mt-20">
          <StepCircle step={steps[activeStep]} isActive={isInView} />

          {/* Step indicators */}
          <div className="mt-10 flex gap-3">
            {steps.map((s, i) => (
              <button
                key={s.num}
                onClick={() => setActiveStep(i)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === activeStep
                    ? "w-10 bg-[#d4f542]"
                    : "w-2.5 bg-neutral-700 hover:bg-neutral-500"
                }`}
              />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-16 max-w-md text-center text-sm leading-relaxed text-neutral-500"
          >
            From first setup to daily use, we're with you at every step.{" "}
            <a href="#contact" className="text-neutral-300 underline transition-colors hover:text-white">
              Contact us for details
            </a>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
