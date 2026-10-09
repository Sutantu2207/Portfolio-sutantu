"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Zap } from "lucide-react";
import { expertiseItems, skillCategories } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";

export default function Expertise() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  return (
    <section id="skills" className="py-24 md:py-32 px-6 sm:px-8 relative z-10 bg-[#090a0d]/90">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="02"
          tag="EXPERTISE"
          title="WHAT I DO"
          subtitle="Delivering end-to-end creative craftsmanship from brand identity systems to digital interfaces."
        />

        {/* Competencies Status Banner */}
        <div className="mb-10 flex flex-wrap items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-zinc-200">
            <span className="w-2 h-2 rounded-full bg-zinc-300" />
            <span className="font-semibold">01–04: PRIMARY DESIGN &amp; VISUAL COMPETENCIES</span>
          </div>
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400">
            <span className="w-2 h-2 rounded-full bg-zinc-600" />
            <span>05–06: SUPPORTING MARKETING &amp; CREATIVE STRATEGY</span>
          </div>
        </div>

        {/* Minimalist Interactive Typography List */}
        <div className="divide-y divide-zinc-800/80 border-y border-zinc-800 mb-20">
          {expertiseItems.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const isCore = item.category === "CORE";

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(isHovered ? null : index)}
                className={`group py-8 md:py-10 transition-all duration-300 cursor-pointer relative px-3 sm:px-6 rounded-2xl ${
                  isHovered ? "bg-zinc-900/40" : "hover:bg-white/[0.01]"
                }`}
              >
                {/* Active Minimalist Indicator Bar with Vibrant Multi-Color Gradient */}
                {isHovered && (
                  <motion.div
                    layoutId="activeExpertiseBar"
                    className="absolute left-0 top-4 bottom-4 w-1.5 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400 rounded-r-full shadow-[0_0_15px_rgba(139,92,246,0.8)]"
                  />
                )}

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Left: Number + Big Title */}
                  <div className="flex items-baseline gap-4 md:gap-8">
                    <span className={`font-mono text-sm md:text-base font-bold transition-colors ${
                      isHovered ? "text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400" : "text-zinc-600"
                    }`}>
                      {item.number}
                    </span>
                    <h3
                      className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight transition-all duration-300 ${
                        isHovered
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-cyan-200 translate-x-2"
                          : "text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Right: Category Badge + Description */}
                  <div className="flex items-center justify-between md:justify-end gap-6 md:max-w-md">
                    <div className="text-left md:text-right">
                      <span
                        className={`inline-block text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full mb-1 font-semibold ${
                          isCore
                            ? "bg-violet-950/60 text-violet-300 border border-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.2)]"
                            : "bg-cyan-950/40 text-cyan-300 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                        }`}
                      >
                        {isCore ? "Core Focus" : "Supporting"}
                      </span>
                      <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2">
                        {item.description}
                      </p>
                    </div>

                    <div
                      className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isHovered
                          ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white border-transparent rotate-45 scale-105 shadow-[0_0_20px_rgba(139,92,246,0.5)]"
                          : "border-zinc-800 text-zinc-500 group-hover:border-violet-500 group-hover:text-violet-300"
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4 font-bold" />
                    </div>
                  </div>
                </div>

                {/* Expanded Details Drawer */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden pt-6 mt-4 border-t border-zinc-800/80"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                        <div className="md:col-span-8 space-y-2.5">
                          {item.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>

                        <div className="md:col-span-4 flex flex-wrap gap-2 md:justify-end">
                          {item.techPills.map((pill) => (
                            <span
                              key={pill}
                              className="px-3 py-1 rounded-lg text-[11px] font-mono bg-violet-950/40 border border-violet-500/30 text-violet-200 shadow-sm"
                            >
                              {pill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Structured Skill Categories Grid with Card Glows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, catIdx) => {
            const cardTheme = [
              "border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]",
              "border-violet-500/30 hover:border-violet-400 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]",
              "border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]",
            ][catIdx % 3];

            const badgeBg = [
              "bg-cyan-950/60 border-cyan-500/40 text-cyan-300",
              "bg-violet-950/60 border-violet-500/40 text-violet-300",
              "bg-emerald-950/60 border-emerald-500/40 text-emerald-300",
            ][catIdx % 3];

            return (
              <div
                key={cat.categoryName}
                className={`p-6 rounded-3xl bg-zinc-900/40 border transition-all duration-300 flex flex-col justify-between shadow-sm group ${cardTheme}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-[10px] uppercase tracking-widest font-semibold px-2.5 py-1 rounded-full border shadow-sm ${badgeBg}`}>
                      {cat.badge}
                    </span>
                    <Zap className="w-4 h-4 text-violet-400 group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-white mb-4">
                    {cat.categoryName}
                  </h4>
                  <ul className="space-y-3">
                    {cat.skills.map((skill) => (
                      <li key={skill.name} className="flex items-baseline justify-between gap-2 border-b border-zinc-800/80 pb-2 text-xs">
                        <span className="text-zinc-200 font-medium">{skill.name}</span>
                        <span className="text-[10px] font-mono text-cyan-300/80 shrink-0 font-medium">
                          {skill.level}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
