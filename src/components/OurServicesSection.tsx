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
      <div className="relative z-10 text-center mb-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Management
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-gray-600 max-w-2xl mx-auto px-4 mb-2"
        >
          Comprehensive tools to streamline your school operations and enhance productivity
        </motion.p>
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
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="flex-shrink-0 w-80 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/90 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full backdrop-blur-sm"></div>
              <div className="absolute bottom-4 right-8 w-4 h-4 bg-white/10 rounded-full backdrop-blur-sm"></div>
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
