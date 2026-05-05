"use client";

import React from "react";
import { motion } from "framer-motion";
import RhythmicRipplesBackground from "@/components/ui/rhythmic-ripples-background";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.25,
      duration: 0.9,
      ease: [0.4, 0.0, 0.2, 1],
    },
  }),
};

const DemoOne = () => {
  return (
    <RhythmicRipplesBackground>
      <div className="text-center max-w-4xl mx-auto px-4">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={0}
          className="mb-6 inline-flex items-center justify-center rounded-full border border-white/10 bg-black/10 px-5 py-2 text-sm text-white/70 backdrop-blur-sm"
        >
          ✨ A New Hero Component has Arrived
        </motion.div>

        <motion.h1
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-5xl font-bold tracking-tighter text-white sm:text-7xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
        >
          Rhythmic Ripples
        </motion.h1>

        <motion.p
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/50"
        >
          Experience a serene and captivating hero section with animated,
          hypnotic ripples that create a sense of calm and focus.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          custom={3}
          className="mt-12 flex items-center justify-center gap-x-6"
        >
          <button className="rounded-full bg-indigo-500 px-7 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/20 transition-transform hover:scale-105">
            Explore Now
          </button>
        </motion.div>
      </div>
    </RhythmicRipplesBackground>
  );
};

export default DemoOne;
