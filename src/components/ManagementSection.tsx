"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Bell, Users, ShoppingCart, FileText, BookOpen, CalendarDays, CalendarHeart } from "lucide-react";

export function ManagementSection() {
  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden bg-white">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-indigo-100 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-purple-50 rounded-full blur-3xl opacity-30"></div>
      </div>

      {/* Content positioned from top */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-[10vh] w-full">

        {/* Section Header - Centered in a container */}
        <div className="text-center mb-12 px-6 max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-3"
          >
            Management
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-base text-gray-600 max-w-2xl mx-auto"
          >
            Comprehensive tools to streamline your school operations and enhance productivity
          </motion.p>
        </div>

        {/* Services Grid - Full Width Infinite Scroll */}
        <div className="w-full overflow-hidden">
          <div className="scroll-container w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="infinite-scroll flex gap-6 w-max py-4"
            >
              {/* Original services duplicated for seamless loop */}
              {[
                {
                  icon: MessageCircle,
                  title: "Messages & Announcements",
                  desc: "Reach the whole school or a single class in one tap.",
                },
                {
                  icon: Bell,
                  title: "Parent Notifications",
                  desc: "Push alerts that parents actually see and read.",
                },
                {
                  icon: Users,
                  title: "Class-wise Groups",
                  desc: "Auto-organised groups by class and section.",
                },
                {
                  icon: ShoppingCart,
                  title: "POS",
                  desc: "Supplies with integrated Tax settings.",
                },
                {
                  icon: FileText,
                  title: "Certificates & Reports",
                  desc: "Design and issue certificates using templates.",
                },
                {
                  icon: BookOpen,
                  title: "Homework Sharing",
                  desc: "Share daily homework with photos and notes instantly.",
                },
                {
                  icon: CalendarDays,
                  title: "Timetable",
                  desc: "Class schedules always at parents' fingertips.",
                },
                {
                  icon: CalendarHeart,
                  title: "Events",
                  desc: "Sports day, PTM, holidays — everyone stays in the loop.",
                },
              ].concat([
                {
                  icon: MessageCircle,
                  title: "Messages & Announcements",
                  desc: "Reach the whole school or a single class in one tap.",
                },
                {
                  icon: Bell,
                  title: "Parent Notifications",
                  desc: "Push alerts that parents actually see and read.",
                },
                {
                  icon: Users,
                  title: "Class-wise Groups",
                  desc: "Auto-organised groups by class and section.",
                },
                {
                  icon: ShoppingCart,
                  title: "POS",
                  desc: "Supplies with integrated Tax settings.",
                },
                {
                  icon: FileText,
                  title: "Certificates & Reports",
                  desc: "Design and issue certificates using templates.",
                },
                {
                  icon: BookOpen,
                  title: "Homework Sharing",
                  desc: "Share daily homework with photos and notes instantly.",
                },
                {
                  icon: CalendarDays,
                  title: "Timetable",
                  desc: "Class schedules always at parents' fingertips.",
                },
                {
                  icon: CalendarHeart,
                  title: "Events",
                  desc: "Sports day, PTM, holidays — everyone stays in the loop.",
                },
              ]).map((service, index) => (
                <motion.div
                  key={`${service.title}-${index}`}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 1 + (index % 8) * 0.1, duration: 0.5 }}
                  className="management-item flex-shrink-0 w-72 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 text-white shadow-xl"
                >
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{service.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
