"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, ArrowUpRight } from "lucide-react";
import { personalData } from "@/data/personal";
import MobileMenu from "./MobileMenu";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  const navLinks = [
    { label: "WORK", href: "#work" },
    { label: "ABOUT", href: "#about" },
    { label: "EXPERIENCE", href: "#experience" },
    { label: "SKILLS", href: "#skills" },
    { label: "CONTACT", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Simple active section detector
      const sections = ["contact", "experience", "skills", "work", "about"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      setActiveSection("hero");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-3.5 bg-[#08090d]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#hero"
            aria-label="Back to top"
            className="group flex items-center gap-3 focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-violet-950/40 border border-violet-500/40 group-hover:border-cyan-400 transition-colors shadow-sm">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:scale-125 transition-transform shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-sm sm:text-base tracking-wider text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-300 transition-colors">
                {personalData.name}
              </span>
              <span className="text-[10px] font-mono tracking-widest text-violet-300/80 uppercase hidden sm:block">
                {personalData.role}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.04] border border-violet-500/20 backdrop-blur-md shadow-sm">
            {navLinks.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-xs font-semibold tracking-wider rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                      : "text-zinc-300 hover:text-white hover:bg-violet-950/30"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Connect CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-zinc-200 border border-violet-500/40 bg-zinc-900/80 hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-500 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all group"
            >
              <span>CONNECT</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white active:scale-95 transition-all"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navLinks}
      />
    </>
  );
}
