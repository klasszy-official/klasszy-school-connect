import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SolutionsSection } from "@/components/SolutionsSection";
import { StepsSection } from "@/components/StepsSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Footer } from "@/components/Footer";
import { WHATSAPP_URL } from "@/components/CtaButtons";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")(  {
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      <Navbar />
      <Hero />
      <AboutSection />
      <FeaturesSection />
      <SolutionsSection />
      <StepsSection />
      <PricingSection />
      <TestimonialsSection />
      <Footer />

      {/* Floating WhatsApp */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.1, boxShadow: "0 12px 30px rgba(37,211,102,0.35)" }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-shadow"
      >
        <MessageCircle className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
