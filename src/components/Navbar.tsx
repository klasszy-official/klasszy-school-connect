import { Link } from "@tanstack/react-router";
import { GraduationCap, Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DEMO_URL } from "./CtaButtons";

const links = [
  { href: "#features", label: "Why Us" },
  { href: "#solutions", label: "Solutions", hasDropdown: true },
  { href: "#pricing", label: "Pricing" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 z-50 w-full transition-all duration-700 ${scrolled
          ? "pt-4 px-4 sm:px-10"
          : "pt-0 px-0"
        }`}
    >
      <div
        className={`mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10 transition-all duration-500 ${scrolled
            ? "rounded-3xl bg-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.08)] backdrop-blur-2xl border border-white/20 h-16"
            : "bg-transparent h-24"
          }`}
      >
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-1.5 transition-transform hover:scale-[1.02]">
          <div className="relative flex h-10 w-10 items-center justify-center translate-y-0.5">
            <motion.span
              whileHover={{ rotate: [-10, 10, 0] }}
              className="text-[2.6rem] font-black bg-gradient-to-br from-blue-800 via-blue-600 to-indigo-500 bg-clip-text text-transparent font-sans"
            >
              K
            </motion.span>
            <GraduationCap className="absolute -top-1 -left-1 h-5 w-5 text-amber-500 fill-amber-500/20 transition-transform group-hover:-rotate-12 group-hover:scale-110" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col justify-center translate-y-1">
            <span className="text-[2rem] font-black tracking-tighter text-slate-950 lowercase leading-[0.8]">
              klasszy
            </span>
            <span className="text-[0.6rem] font-black tracking-[0.25em] text-blue-600 uppercase mt-1 leading-none">
              School ERP
            </span>
          </div>
        </Link>

        {/* Right Side: Nav & CTA */}
        <div className="hidden md:flex items-center gap-8">
          {/* Desktop Nav */}
          <nav className="flex items-center gap-8">
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
                className="group relative flex items-center gap-1.5 text-sm font-bold text-slate-600 transition-colors duration-300 hover:text-blue-600"
              >
                {l.label}
                {l.hasDropdown && (
                  <ChevronDown size={14} className="opacity-40 group-hover:rotate-180 transition-transform" />
                )}
                <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2, boxShadow: "0 10px 25px rgba(37,99,235,0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex h-11 items-center justify-center rounded-2xl bg-blue-600 px-7 text-sm font-black text-white transition-all hover:bg-blue-500 shadow-md shadow-blue-500/30"
            >
              Login
            </motion.a>
          </motion.div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-100 bg-white shadow-sm md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="mx-4 mt-2 overflow-hidden rounded-3xl bg-white/95 border border-slate-100 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-4">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-5 py-4 text-base font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-2 p-2 flex flex-col gap-3">
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-2xl bg-blue-600 py-4 text-base font-black text-white shadow-lg shadow-blue-500/30"
                >
                  Login
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}