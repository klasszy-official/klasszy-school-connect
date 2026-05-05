import { motion } from "framer-motion";
import { GraduationCap, MessageCircle, Bell, Users, ShoppingCart, FileText, BookOpen, CalendarDays, CalendarHeart } from "lucide-react";
import RhythmicRipplesBackground from "@/components/ui/rhythmic-ripples-background";
import { AnimatedText } from "@/components/ui/animated-shiny-text";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-purple-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Content positioned in center */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 w-full max-w-4xl mx-auto">
        
        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ 
            opacity: 1, 
            y: [0, -12, 0],
            scale: 1,
            rotate: [0, 1.5, -1.5, 0]
          }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Box-like background structure */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl blur-xl opacity-50"></div>
            <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border-4 border-gray-200"></div>
            
            {/* Inner content */}
            <div className="relative z-10 p-12 md:p-16 lg:p-20">
              <AnimatedText 
                text="KLASSZY"
                gradientColors="linear-gradient(90deg, #000, #666, #000)"
                gradientAnimationDuration={3}
                hoverEffect={true}
                textClassName="font-black uppercase leading-[0.85] tracking-[0.08em] text-[3.5rem] sm:text-[5rem] md:text-[5.7rem] lg:text-[7.1rem] xl:text-[8.5rem]"
              />
            </div>
          </div>
        </motion.div>

        {/* Subtitle with icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-center"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-black text-white">
            <GraduationCap className="h-4 w-4" />
          </span>
          <span className="text-sm font-medium text-neutral-700">
            Connecting Schools & Parents Seamlessly
          </span>
        </motion.div>

        {/* Optional additional text for larger screens */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hidden text-center text-sm leading-relaxed text-neutral-600 mt-6 md:block"
        >
          <p>One App, One School</p>
          <p>Every Update Reaching Parents</p>
        </motion.div>
      </div>
    </section>
  );
}
