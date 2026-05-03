import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { DEMO_URL } from "./CtaButtons";

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const benefits = [
    "All features included",
    "Free setup & training",
    "Unlimited parent accounts",
    "Personal support over WhatsApp",
    "Dedicated relationship manager",
    "Custom branding for your school",
  ];

  return (
    <section id="pricing" className="bg-white px-6 py-24 lg:px-10 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold uppercase tracking-tight text-black sm:text-5xl lg:text-6xl">
            PRICING
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-neutral-500">
            No hidden charges. Simple, transparent pricing based on your school size.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl"
        >
          <div className="relative overflow-hidden rounded-3xl bg-black p-10 text-center sm:p-14">
            {/* Decorative gradient */}
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#d4f542]/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#d4f542]/5 blur-3xl" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#d4f542]">
                <Sparkles className="h-3.5 w-3.5" /> Custom Plan
              </span>

              <h3 className="mt-6 text-2xl font-bold text-white sm:text-3xl">
                Plans that fit your school
              </h3>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-neutral-400">
                Whether you have 50 students or 5,000, we have a plan that works.
                Talk to us and we'll build the right package for you.
              </p>

              <ul className="mx-auto mt-8 max-w-sm space-y-3 text-left">
                {benefits.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.06, duration: 0.5 }}
                    className="flex items-start gap-3 text-sm text-neutral-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#d4f542]" />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(212,245,66,0.3)" }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 inline-flex items-center justify-center rounded-full bg-[#d4f542] px-8 py-4 text-sm font-bold text-black transition-shadow"
              >
                Get Your Custom Quote
              </motion.a>

              <p className="mt-4 text-xs text-neutral-600">
                Contact us for personalized pricing
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
