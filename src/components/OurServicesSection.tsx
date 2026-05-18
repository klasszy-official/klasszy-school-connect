"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  FileText,
  Star,
  Settings,
  Calendar,
  CreditCard,
  Award,
  TrendingUp,
  Users,
  BookOpen,
  Bell,
  MessageCircle,
} from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "POS",
    desc: "Supplies with integrated Tax settings and inventory management.",
    color: "from-gray-800 to-gray-900",
  },
  {
    icon: FileText,
    title: "Certificates & Reports",
    desc: "Design and issue certificates & reports using customizable templates.",
    color: "from-gray-800 to-gray-900",
  },
  {
    icon: Star,
    title: "Behavior & Skills Tracking",
    desc: "Monitor & generate detailed reports on affective and psychomotor domains.",
    color: "from-gray-800 to-gray-900",
  },
  {
    icon: Settings,
    title: "Institute Profile",
    desc: "Customize your institution's details, logo, and branding.",
    color: "from-gray-800 to-gray-900",
  },
  {
    icon: CreditCard,
    title: "Fee Structure",
    desc: "Define and manage fee structures effortlessly with automated reminders.",
    color: "from-gray-800 to-gray-900",
  },
  {
    icon: Calendar,
    title: "Attendance Management",
    desc: "Track attendance with automated reports and parent notifications.",
    color: "from-gray-800 to-gray-900",
  },
  {
    icon: BookOpen,
    title: "Homework Sharing",
    desc: "Share daily homework with photos and notes — instantly.",
    color: "from-gray-800 to-gray-900",
  },
  {
    icon: MessageCircle,
    title: "Messages & Announcements",
    desc: "Reach the whole school or a single class in one tap.",
    color: "from-gray-800 to-gray-900",
  },
  {
    icon: Bell,
    title: "Parent Notifications",
    desc: "Push alerts that parents actually see and read.",
    color: "from-gray-800 to-gray-900",
  },
  {
    icon: Users,
    title: "Class-wise Groups",
    desc: "Auto-organised groups by class and section.",
    color: "from-gray-800 to-gray-900",
  },
];

export function OurServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    const scroll = () => {
      scrollPosition += scrollSpeed;
      
      // Reset to start when reaching the end
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
    };

    const animationFrame = setInterval(scroll, 30); // ~33fps

    return () => clearInterval(animationFrame);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-6 pt-2">
      {/* Section Header */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 mb-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start sm:items-end">
          <div className="flex flex-col items-start translate-y-3">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-[0.65rem] font-bold uppercase tracking-widest text-blue-700 mb-6"
            >
              EVERYTHING YOU NEED. ALL IN ONE PLACE.
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-8xl font-black tracking-tighter text-slate-900 leading-[0.85] uppercase"
            >
              OUR<br />SERVICES
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:items-end"
          >
            <p className="text-xl font-bold leading-tight text-slate-600 sm:text-right max-w-sm border-l-4 sm:border-l-0 sm:border-r-4 border-blue-500 pl-4 sm:pl-0 sm:pr-6 py-2">
              Klasszy is designed to digitize and stream every operation of educational institution effortlessly.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Auto-scrolling Services Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex overflow-x-hidden scrollbar-hide space-x-6 px-6"
          style={{ scrollBehavior: 'smooth' }}
        >
          {/* Duplicate services for seamless loop */}
          {[...services, ...services].map((service, index) => (
            <motion.div
              key={`${service.title}-${index}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05, 
                rotateZ: 2,
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 10 }
              }}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-900 rounded-[2rem] p-8 text-white shadow-2xl hover:shadow-blue-900/40 transition-all duration-300 cursor-pointer group relative overflow-hidden"
            >
              {/* Animated Glow Background - Always visible on mobile, on hover on desktop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon Container - Always white on mobile, on hover on desktop */}
              <div className="relative z-10 w-16 h-16 bg-white backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 border border-white/20 text-blue-900 md:bg-white/10 md:text-white md:group-hover:bg-white md:group-hover:text-blue-900 transition-all duration-300">
                <service.icon className="w-8 h-8 text-blue-900 md:text-white md:group-hover:text-blue-900 transition-colors duration-300 transform scale-110 md:scale-100 md:group-hover:scale-110" />
              </div>

              {/* Service Content */}
              <h3 className="relative z-10 text-2xl font-black mb-4 tracking-tight translate-x-1 md:translate-x-0 md:group-hover:translate-x-1 transition-transform">{service.title}</h3>
              <p className="relative z-10 text-white text-sm leading-relaxed font-medium md:text-blue-100/80 md:group-hover:text-white transition-colors">
                {service.desc}
              </p>

              {/* Decorative Elements - Always brighter on mobile, on hover on desktop */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl md:bg-blue-400/10 md:group-hover:bg-blue-400/20 transition-all" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-indigo-500/20 rounded-full blur-2xl md:bg-indigo-500/10 md:group-hover:bg-indigo-500/20 transition-all" />

              {/* Arrow Indicator - Always visible on mobile, on hover on desktop */}
              <div className="absolute bottom-8 right-8 opacity-100 translate-x-0 md:opacity-0 md:translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient Overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-100 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-2 h-2 bg-gray-800 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          className="w-2 h-2 bg-gray-600 rounded-full"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          className="w-2 h-2 bg-gray-600 rounded-full"
        />
      </div>
    </section>
  );
}
