import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mr. Rajesh Verma",
    role: "Principal, Saraswati Public School",
    location: "Bareilly, UP",
    quote:
      "Parents finally see homework on time. Our teachers love how simple Klasszy is — no more long WhatsApp groups.",
  },
  {
    name: "Mrs. Anitha Reddy",
    role: "Correspondent, Sunrise English Medium",
    location: "Warangal, TS",
    quote:
      "Setup was done in just two days. The support team is very patient and responds on WhatsApp instantly.",
  },
  {
    name: "Mr. Suresh Patel",
    role: "Owner, Little Stars Academy",
    location: "Anand, GJ",
    quote:
      "We tried 3 apps before. Klasszy is the only one our teachers actually use every day. Highly recommend.",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-neutral-50 px-6 py-24 lg:px-10 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center"
        >
          <span className="inline-block rounded-full bg-black px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            Testimonials
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-black sm:text-4xl lg:text-5xl">
            What principals are saying
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -4,
                boxShadow: "0 20px_40px -15px rgba(0,0,0,0.08)",
              }}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
            >
              <div className="flex gap-1 text-[#d4f542]">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-current text-amber-400" />
                ))}
              </div>
              <p className="mt-5 flex-1 text-sm leading-relaxed text-neutral-600">
                "{t.quote}"
              </p>
              <div className="mt-6 border-t border-neutral-100 pt-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                    {t.name.charAt(0)}
                    {t.name.split(" ").pop()?.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-black">{t.name}</p>
                    <p className="text-xs text-neutral-500">{t.role}</p>
                    <p className="text-xs text-neutral-400">{t.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
