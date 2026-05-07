import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, ArrowRight, MessageSquare } from "lucide-react";
import { DEMO_URL, WHATSAPP_URL } from "./CtaButtons";

const testimonials = [
  {
    name: "Mr. Rajesh Verma",
    role: "Principal, Saraswati Public School",
    location: "Bareilly, UP",
    quote:
      "Parents finally see homework on time. Our teachers love how simple Klasszy is — no more long WhatsApp groups.",
    initials: "RV",
  },
  {
    name: "Mrs. Anitha Reddy",
    role: "Correspondent, Sunrise English Medium",
    location: "Warangal, TS",
    quote:
      "Setup was done in just two days. The support team is very patient and responds on WhatsApp instantly.",
    initials: "AR",
  },
  {
    name: "Mr. Suresh Patel",
    role: "Owner, Little Stars Academy",
    location: "Anand, GJ",
    quote:
      "We tried 3 apps before. Klasszy is the only one our teachers actually use every day. Highly recommend.",
    initials: "SP",
  },
  {
    name: "Ms. Priya Kumar",
    role: "Director, Bright Horizon School",
    location: "Coimbatore, TN",
    quote:
      "The parent engagement shot up the very first week. Klasszy transformed our school's communication overnight.",
    initials: "PK",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      className="relative mx-6 mb-16 overflow-hidden rounded-[3rem] bg-slate-900 px-6 py-24 lg:mx-10 lg:px-16 lg:py-32"
      ref={ref}
    >
      {/* Decorative message icon */}
      <div className="pointer-events-none absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 opacity-5">
        <MessageSquare size={400} className="text-white" />
      </div>

      {/* Glow blobs */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="flex flex-col gap-16 lg:flex-row lg:items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-5/12 space-y-8"
          >
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-400">
              Testimonials
            </span>
            <h2 className="text-4xl font-extrabold leading-tight text-white lg:text-5xl">
              Our Customers{" "}
              <span className="text-blue-400">Speak for Themselves</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-400">
              From small preschools to large English-medium schools — schools
              of all sizes trust Klasszy every single day.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-900 transition-all hover:bg-slate-100"
              >
                Book Free Demo
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-full font-bold text-white transition-colors hover:text-blue-400"
              >
                More Info <ArrowRight size={18} />
              </motion.a>
            </div>
          </motion.div>

          {/* Right testimonial grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:w-7/12">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: i * 0.09,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className="flex flex-col rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-md space-y-4 transition-all"
              >
                {/* Stars */}
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="flex-1 text-sm italic leading-relaxed text-slate-300">
                  "{t.quote}"
                </p>
                <div className="border-t border-white/10 pt-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                    <p className="text-xs text-slate-600">{t.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
