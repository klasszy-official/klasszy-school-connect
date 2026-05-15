import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, HeartHandshake } from "lucide-react";

function FadeInWhenVisible({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function AboutSection() {
  return (
    <section className="bg-neutral-50 px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* Top area */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: Text content */}
          <div>
            <FadeInWhenVisible>
              <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl">
                About
                <br />
                <span className="text-blue-600">Klasszy</span>
              </h2>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.1}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-500">
                Klasszy is a next-generation School ERP designed to digitize and streamline every operation of educational institutions. From student management to communication, from academics to analytics – we bring everything together in one powerful, easy-to-use app.
              </p>
            </FadeInWhenVisible>
          </div>

          {/* Right: Editorial images */}
          <div className="grid grid-cols-2 gap-3">
            <FadeInWhenVisible delay={0.2}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src="/strategy-student.png"
                  alt="Student with aspirations"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-lg font-bold uppercase leading-tight text-white">
                    Communication Is
                    <br />
                    How You Connect
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible delay={0.3}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img
                  src="/results-teacher.png"
                  alt="Teacher empowered"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-lg font-bold uppercase leading-tight text-white">
                    Results Are
                    <br />
                    What Matter
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>

        {/* Stats + Philosophy grid */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stat cards */}
          <FadeInWhenVisible delay={0.1}>
            <div className="flex flex-col justify-end rounded-2xl bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <span className="text-6xl font-bold tracking-tight text-black">
                500<sup className="text-2xl font-semibold text-neutral-400">+</sup>
              </span>
              <p className="mt-2 text-sm text-neutral-500">Schools Connected</p>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.2}>
            <div className="flex flex-col justify-end rounded-2xl bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
              <span className="text-6xl font-bold tracking-tight text-black">
                50K<sup className="text-2xl font-semibold text-neutral-400">+</sup>
              </span>
              <p className="mt-2 text-sm text-neutral-500">Parents Reached</p>
            </div>
          </FadeInWhenVisible>

          {/* Philosophy cards */}
          <FadeInWhenVisible delay={0.3}>
            <div className="rounded-2xl bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:col-span-2">
              <Sparkles className="h-6 w-6 text-blue-500" />
              <h3 className="mt-4 text-lg font-bold uppercase tracking-tight text-black">
                OUR MISSION
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                To empower schools with smart technology that drives efficiency, transparency, and better outcomes.
              </p>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible delay={0.4}>
            <div className="rounded-2xl bg-white p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:col-span-2">
              <HeartHandshake className="h-6 w-6 text-blue-500" />
              <h3 className="mt-4 text-lg font-bold uppercase tracking-tight text-black">
                OUR PROMISE
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                All features. One App. One Price. Bringing your school identity to the forefront with your own app.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
}
