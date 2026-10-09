"use client";

import React, { useState, useEffect } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Clock,
  Layers,
  Palette,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { personalData } from "@/data/personal";
import MagneticButton from "@/components/MagneticButton";
import HeroVisual from "@/components/HeroVisual";

export default function Hero() {
  const [timeString, setTimeString] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-14 px-6 sm:px-8 overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        {/* Left Column: Hero Typography & CTAs */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center text-left z-10"
        >
          {/* Eyebrow / Name Badge & Live Real-Time Studio Status */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-6">
            <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/40 border border-violet-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.25)]">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_8px_rgba(167,139,250,1)]" />
              <span className="font-mono text-xs font-semibold tracking-widest text-violet-200 uppercase">
                {personalData.name}
              </span>
            </div>

            {/* Live Real-Time Coimbatore Ticking Clock */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-750 text-xs font-mono text-cyan-300 backdrop-blur-md shadow-sm">
              <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Coimbatore, IN • {timeString || "01:53:22 PM"} IST</span>
            </div>

            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-xs font-mono text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)] animate-ping" />
              <span>Live: Available for Roles</span>
            </div>
          </motion.div>

          {/* Huge Main Title */}
          <div className="overflow-hidden">
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl font-black tracking-tighter uppercase leading-[0.92] select-none text-white drop-shadow-[0_4px_30px_rgba(255,255,255,0.12)]"
            >
              GRAPHIC &amp;
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-6">
            <motion.div
              variants={itemVariants}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 uppercase leading-[0.95] drop-shadow-[0_0_40px_rgba(168,85,247,0.35)]"
            >
              VISUAL DESIGNER
            </motion.div>
          </div>

          {/* Supporting Text */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-xl mb-6"
          >
            {personalData.tagline}
          </motion.p>

          {/* Feature Badge Pills with Unique Colors & Micro-Glows */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8">
            {personalData.heroPills.map((pill, i) => {
              const pillStyles = [
                "bg-cyan-950/40 border-cyan-500/40 text-cyan-200 hover:border-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]",
                "bg-violet-950/40 border-violet-500/40 text-violet-200 hover:border-violet-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.4)]",
                "bg-fuchsia-950/40 border-fuchsia-500/40 text-fuchsia-200 hover:border-fuchsia-300 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)]",
                "bg-amber-950/40 border-amber-500/40 text-amber-200 hover:border-amber-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]",
                "bg-indigo-950/40 border-indigo-500/40 text-indigo-200 hover:border-indigo-300 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]",
              ];
              const currentStyle = pillStyles[i % pillStyles.length];

              return (
                <span
                  key={pill}
                  className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border transition-all duration-300 shadow-sm hover:scale-105 cursor-default ${currentStyle}`}
                >
                  {i === 0 && <Palette className="w-3.5 h-3.5 text-cyan-400" />}
                  {i === 1 && <Sparkles className="w-3.5 h-3.5 text-violet-400" />}
                  {i === 2 && <Layers className="w-3.5 h-3.5 text-fuchsia-400" />}
                  {i === 3 && <Sparkles className="w-3.5 h-3.5 text-amber-400" />}
                  {i === 4 && <Smartphone className="w-3.5 h-3.5 text-indigo-400" />}
                  {pill}
                </span>
              );
            })}
          </motion.div>

          {/* Magnetic CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <MagneticButton href="#work" variant="primary">
              <span className="font-semibold">VIEW MY WORK</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </MagneticButton>

            <MagneticButton href="#contact" variant="outline">
              <span className="font-semibold">LET&apos;S CONNECT</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Visual */}
        <motion.div
          initial={{ opacity: 1, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="lg:col-span-5 flex items-center justify-center relative py-4"
        >
          <HeroVisual />
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-auto pt-6 flex flex-col items-center justify-center text-center select-none"
      >
        <a
          href="#about"
          aria-label="Scroll to explore"
          className="group flex flex-col items-center gap-2 text-zinc-500 hover:text-zinc-300 transition-colors"
        >
          <span className="font-mono text-[11px] tracking-widest uppercase text-zinc-400 font-semibold">
            SCROLL TO EXPLORE
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ChevronDown className="w-4 h-4 text-zinc-400" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
