import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Animated fluid background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 right-0 top-1/3"
        >
          <img
            src="/fluid-bg.png"
            alt=""
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/80" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 pb-16 pt-28 lg:px-10 lg:pt-32">
        {/* Massive headline */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          <h1 className="text-center font-black uppercase leading-[0.85] tracking-[-0.04em] text-black"
            style={{ fontSize: "clamp(80px, 14vw, 200px)" }}
          >
            KLASSZY
          </h1>
        </motion.div>

        {/* Bottom row */}
        <div className="mt-8 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
              <GraduationCap className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-neutral-700">
              School Communication App
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="hidden text-right text-sm leading-relaxed text-neutral-600 md:block"
          >
            <p>One App, One School</p>
            <p>Every Update Reaching Parents</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
