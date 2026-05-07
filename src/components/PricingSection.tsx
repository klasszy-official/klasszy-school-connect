import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { DEMO_URL } from "./CtaButtons";

const benefits = [
  "All features included",
  "Free setup & training",
  "Unlimited parent accounts",
  "Personal support over WhatsApp",
  "Dedicated relationship manager",
  "Custom branding for your school",
];

const tiers = [
  {
    name: "Starter",
    students: "Up to 200 students",
    highlight: false,
    badge: null,
    description: "Perfect for small preschools & kindergartens.",
  },
  {
    name: "Growth",
    students: "Up to 800 students",
    highlight: true,
    badge: "Most Popular",
    description: "Ideal for growing primary and secondary schools.",
  },
  {
    name: "Enterprise",
    students: "Unlimited students",
    highlight: false,
    badge: null,
    description: "For large school groups & institutions.",
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="bg-white px-6 py-24 lg:px-10 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-700">
            Pricing
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Plans that fit your school
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-slate-500">
            No hidden charges. Simple, transparent pricing based on your school size.
          </p>
        </motion.div>

        {/* Tier cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-3xl border p-8 transition-all ${
                tier.highlight
                  ? "border-blue-600 bg-blue-600 shadow-2xl shadow-blue-200"
                  : "border-slate-100 bg-white hover:shadow-lg"
              }`}
            >
              {tier.badge && (
                <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                  <Sparkles className="h-3 w-3" /> {tier.badge}
                </span>
              )}
              <h3
                className={`text-xl font-extrabold ${
                  tier.highlight ? "text-white" : "text-slate-900"
                }`}
              >
                {tier.name}
              </h3>
              <p
                className={`mt-1 text-sm font-semibold ${
                  tier.highlight ? "text-blue-200" : "text-slate-500"
                }`}
              >
                {tier.students}
              </p>
              <p
                className={`mt-4 text-sm leading-relaxed ${
                  tier.highlight ? "text-blue-100" : "text-slate-500"
                }`}
              >
                {tier.description}
              </p>
              <div className={`mt-6 mb-8 h-px ${tier.highlight ? "bg-white/20" : "bg-slate-100"}`} />
              <p className={`text-2xl font-extrabold ${tier.highlight ? "text-white" : "text-slate-900"}`}>
                Custom Pricing
              </p>
              <p className={`mt-1 text-xs ${tier.highlight ? "text-blue-200" : "text-slate-400"}`}>
                Contact us for your quote
              </p>
              <motion.a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className={`mt-6 inline-flex w-full items-center justify-center rounded-full py-3 text-sm font-bold transition-all ${
                  tier.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-slate-900 text-white hover:bg-slate-700"
                }`}
              >
                Get a Quote
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* What's included */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl rounded-3xl border border-slate-100 bg-slate-50 px-8 py-8"
        >
          <p className="mb-5 text-center text-sm font-bold uppercase tracking-widest text-slate-500">
            All plans include
          </p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {benefits.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                className="flex items-center gap-2.5 text-sm text-slate-600"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
