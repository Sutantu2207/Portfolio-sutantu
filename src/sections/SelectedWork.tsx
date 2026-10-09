"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Sparkles,
  Layers,
  Sliders,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Copy,
  Grid,
  Type,
  Eye,
} from "lucide-react";
import { resumeProjects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";

export default function SelectedWork() {
  const [mousePos, setMousePos] = useState<{ [key: string]: { x: number; y: number } }>({});
  const [freshifySlide, setFreshifySlide] = useState(0);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [pitchSlide, setPitchSlide] = useState(1); // Default to Slide 04: TAM
  const [kairosView, setKairosView] = useState<"poster" | "grid" | "type">("poster");

  const copyToClipboard = (hex: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => {
      setCopiedHex(null);
    }, 2200);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, id: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos((prev) => ({
      ...prev,
      [id]: {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      },
    }));
  };

  return (
    <section id="work" className="py-24 md:py-32 px-6 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="03"
          tag="CREATIVE PORTFOLIO"
          title="SELECTED WORK"
          subtitle="Curated brand identity systems, marketing creatives, and digital product designs crafted with visual precision."
        />

        {/* Editorial Project Presentations */}
        <div className="space-y-20 md:space-y-28">
          {resumeProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const pos = mousePos[project.id] || { x: 0, y: 0 };

            // Project-specific neon spotlight color
            const glowColor =
              project.id === "freshify"
                ? "rgba(16, 185, 129, 0.16)"
                : project.id === "interview-twin"
                ? "rgba(6, 182, 212, 0.18)"
                : "rgba(244, 63, 94, 0.16)";

            const cardBorderHover =
              project.id === "freshify"
                ? "hover:border-emerald-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)]"
                : project.id === "interview-twin"
                ? "hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]"
                : "hover:border-rose-500/50 hover:shadow-[0_0_40px_rgba(244,63,94,0.15)]";

            return (
              <div
                key={project.id}
                data-cursor="project"
                data-cursor-label="EXPLORE"
                onMouseMove={(e) => handleMouseMove(e, project.id)}
                className={`group relative rounded-3xl bg-zinc-900/50 border border-zinc-800 transition-all duration-500 p-6 sm:p-8 md:p-12 overflow-hidden shadow-xl backdrop-blur-md ${cardBorderHover}`}
              >
                {/* Dynamic Colored Spotlight Glow following cursor */}
                <div
                  className="absolute pointer-events-none -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, ${glowColor}, transparent 75%)`,
                  }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
                  {/* Visual Artboard Column */}
                  <div
                    className={`lg:col-span-6 relative ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative aspect-[16/11] rounded-2xl bg-zinc-950 border border-zinc-800 p-5 sm:p-6 flex flex-col justify-between overflow-hidden group-hover:border-zinc-700 transition-all shadow-2xl">
                      {/* Top Chrome inside Artboard */}
                      <div className="flex items-center justify-between z-10 pb-2 border-b border-zinc-850">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-zinc-400" />
                          <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase font-semibold">
                            {project.category}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-medium">
                          {project.type}
                        </span>
                      </div>

                      {/* Bespoke Project Artboards - Live Interactive Workspaces */}
                      {project.id === "freshify" && (
                        <div className="my-auto py-1.5 space-y-2 z-10">
                          {/* Live Carousel Slide Display */}
                          <div className="p-3.5 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 shadow-md">
                            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-zinc-800/80 text-[8.5px] font-mono">
                              <div className="flex items-center gap-1.5 text-zinc-400">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-emerald-300 font-semibold">
                                  {
                                    [
                                      "Canva Pro Brand Suite",
                                      "Educational Carousel Hook",
                                      "Packaging Label Mockup",
                                      "Earth-Tone Color Harmony",
                                      "Campaign Launch Impact",
                                    ][freshifySlide]
                                  }
                                </span>
                              </div>
                              <span className="px-1.5 py-0.5 rounded bg-zinc-850 text-zinc-300 border border-zinc-750 font-bold">
                                Slide 0{freshifySlide + 1}/05
                              </span>
                            </div>

                            {/* Dynamic Slide Content */}
                            <AnimatePresence mode="wait">
                              <motion.div
                                key={freshifySlide}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                                className="min-h-[82px] flex flex-col justify-between"
                              >
                                {freshifySlide === 0 && (
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h4 className="font-display text-lg sm:text-xl font-black text-white tracking-tight">
                                        FRESHIFY<span className="text-zinc-500 font-serif italic text-sm ml-1">Organics</span>
                                      </h4>
                                      <p className="text-[9.5px] text-zinc-400 mt-0.5">
                                        Sustainable Farm-to-Table Identity &amp; Packaging
                                      </p>
                                    </div>
                                    <div className="w-10 h-10 rounded-full border border-emerald-500/30 bg-emerald-950/30 flex flex-col items-center justify-center text-emerald-300 shrink-0">
                                      <span className="font-serif italic text-[10px] font-bold leading-none">100%</span>
                                      <span className="text-[7.5px] font-mono uppercase">Pure</span>
                                    </div>
                                  </div>
                                )}

                                {freshifySlide === 1 && (
                                  <div>
                                    <span className="text-[8px] font-mono text-emerald-400 uppercase font-semibold">
                                      Hook Slide • 4:5 Portrait Grid
                                    </span>
                                    <h4 className="text-xs sm:text-sm font-semibold text-white mt-0.5 leading-snug">
                                      Why Soil Vitality Dictates Produce Nutrient Density
                                    </h4>
                                    <p className="text-[9px] text-zinc-400 mt-1">
                                      Canva Pro social layout designed to maximize save-rates and reader retention.
                                    </p>
                                  </div>
                                )}

                                {freshifySlide === 2 && (
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <span className="text-[8px] font-mono text-emerald-400 uppercase font-semibold">
                                        Packaging Mockup
                                      </span>
                                      <h4 className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                                        Kraft Bottle Label &amp; Seal
                                      </h4>
                                      <p className="text-[9px] text-zinc-400 mt-0.5">
                                        300 DPI print-ready proofs with nutrition panel layout.
                                      </p>
                                    </div>
                                    <div className="px-2 py-1 rounded bg-black/60 border border-zinc-800 text-[8px] font-mono text-zinc-300">
                                      ||| | |||| ||
                                    </div>
                                  </div>
                                )}

                                {freshifySlide === 3 && (
                                  <div>
                                    <span className="text-[8px] font-mono text-emerald-400 uppercase font-semibold">
                                      Color System Rationale
                                    </span>
                                    <h4 className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                                      Earth, Flora &amp; Mineral Equilibrium
                                    </h4>
                                    <p className="text-[9px] text-zinc-400 mt-0.5">
                                      High-contrast palette ensuring WCAG AA accessibility across print &amp; digital.
                                    </p>
                                  </div>
                                )}

                                {freshifySlide === 4 && (
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="p-1.5 rounded bg-black/50 border border-zinc-800">
                                      <span className="text-[7.5px] font-mono text-zinc-400 uppercase">Organic Reach</span>
                                      <div className="text-base font-bold text-emerald-400 font-display">+340%</div>
                                    </div>
                                    <div className="p-1.5 rounded bg-black/50 border border-zinc-800">
                                      <span className="text-[7.5px] font-mono text-zinc-400 uppercase">Social Saves</span>
                                      <div className="text-base font-bold text-cyan-400 font-display">42,500+</div>
                                    </div>
                                  </div>
                                )}
                              </motion.div>
                            </AnimatePresence>
                          </div>

                          {/* Interactive Carousel Stepper Controls */}
                          <div className="flex items-center justify-between px-1 py-1 rounded-lg bg-zinc-900/90 border border-zinc-800">
                            <button
                              onClick={() => setFreshifySlide((prev) => (prev > 0 ? prev - 1 : 4))}
                              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                              title="Previous slide"
                              aria-label="Previous slide"
                            >
                              <ChevronLeft className="w-3.5 h-3.5" />
                            </button>

                            {/* Dot Indicators */}
                            <div className="flex items-center gap-1.5">
                              {[0, 1, 2, 3, 4].map((dot) => (
                                <button
                                  key={dot}
                                  onClick={() => setFreshifySlide(dot)}
                                  aria-label={`Jump to slide ${dot + 1}`}
                                  className={`h-1.5 rounded-full transition-all duration-300 ${
                                    freshifySlide === dot
                                      ? "w-5 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]"
                                      : "w-1.5 bg-zinc-700 hover:bg-zinc-500"
                                  }`}
                                />
                              ))}
                            </div>

                            <button
                              onClick={() => setFreshifySlide((prev) => (prev < 4 ? prev + 1 : 0))}
                              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                              title="Next slide"
                              aria-label="Next slide"
                            >
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          {/* Curated Interactive Earth-Tone Swatches with Click to Copy */}
                          <div className="space-y-1">
                            <div className="flex items-center justify-between text-[8px] font-mono text-zinc-400">
                              <span>Brand Palette (Tap to Copy Hex):</span>
                              {copiedHex && (
                                <span className="text-emerald-400 font-semibold animate-pulse">
                                  ✓ Copied {copiedHex}!
                                </span>
                              )}
                            </div>
                            <div className="grid grid-cols-4 gap-1.5">
                              {[
                                { name: "Forest", hex: "#1B4332", bg: "bg-[#1B4332]" },
                                { name: "Sage", hex: "#52B788", bg: "bg-[#52B788]" },
                                { name: "Alabaster", hex: "#EDE0D4", bg: "bg-[#EDE0D4]" },
                                { name: "Umber", hex: "#D4A373", bg: "bg-[#D4A373]" },
                              ].map((swatch) => (
                                <button
                                  key={swatch.name}
                                  onClick={() => copyToClipboard(swatch.hex)}
                                  className="p-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 hover:border-emerald-500/50 flex flex-col items-center transition-all hover:scale-105 active:scale-95 group/swatch text-left cursor-pointer"
                                  title={`Click to copy ${swatch.hex}`}
                                >
                                  <div className={`w-full h-3 rounded-xs ${swatch.bg} mb-1 shadow-inner`} />
                                  <span className="text-[8.5px] font-mono text-zinc-200 font-semibold">{swatch.name}</span>
                                  <span className="text-[7.5px] font-mono text-zinc-500 group-hover/swatch:text-emerald-300">
                                    {swatch.hex}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === "interview-twin" && (
                        <div className="my-auto py-1.5 space-y-2.5 z-10">
                          {/* Interactive Pitch Deck Slide Navigator Tabs */}
                          <div className="grid grid-cols-4 gap-1 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800">
                            {[
                              { id: 0, label: "01 Cover" },
                              { id: 1, label: "04 TAM" },
                              { id: 2, label: "08 Tokens" },
                              { id: 3, label: "12 Roadmap" },
                            ].map((slideTab) => (
                              <button
                                key={slideTab.id}
                                onClick={() => setPitchSlide(slideTab.id)}
                                className={`py-1 px-1.5 rounded-lg text-[9px] font-mono transition-all ${
                                  pitchSlide === slideTab.id
                                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold shadow-xs"
                                    : "text-zinc-500 hover:text-zinc-300"
                                }`}
                              >
                                {slideTab.label}
                              </button>
                            ))}
                          </div>

                          {/* Dynamic Pitch Deck Slide Preview */}
                          <div className="p-3.5 rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 shadow-md">
                            <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-zinc-800 text-[9px] font-mono text-zinc-400">
                              <div className="flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                <span>Canva Pro Pitch Deck • Slide {[1, 4, 8, 12][pitchSlide]} of 14</span>
                              </div>
                              <span className="text-cyan-300 font-semibold font-mono text-[8px] px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                                INVESTOR READY
                              </span>
                            </div>

                            <AnimatePresence mode="wait">
                              <motion.div
                                key={pitchSlide}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -6 }}
                                transition={{ duration: 0.2 }}
                                className="min-h-[90px] flex flex-col justify-between"
                              >
                                {pitchSlide === 0 && (
                                  <div className="space-y-1.5">
                                    <div className="text-base sm:text-lg font-black font-display text-white tracking-tight">
                                      INTERVIEW TWIN
                                    </div>
                                    <p className="text-[9.5px] text-zinc-400">
                                      AI-Powered Candidate Preparation &amp; Mock Evaluation
                                    </p>
                                    <div className="inline-block px-2 py-0.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-[8px] font-mono text-cyan-300">
                                      16:9 Presentation Format • Seed Round
                                    </div>
                                  </div>
                                )}

                                {pitchSlide === 1 && (
                                  <div className="grid grid-cols-2 gap-2">
                                    <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800">
                                      <span className="text-[8px] font-mono uppercase text-zinc-400 block font-semibold">
                                        Market Opportunity
                                      </span>
                                      <div className="text-lg font-bold font-display text-white mt-0.5">$12.8B TAM</div>
                                      <span className="text-[8px] font-mono text-zinc-400">Ed-Tech Preparation</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800">
                                      <span className="text-[8px] font-mono uppercase text-zinc-400 block font-semibold">
                                        Candidate Retention
                                      </span>
                                      <div className="text-lg font-bold font-display text-white mt-0.5">+142% MoM</div>
                                      <span className="text-[8px] font-mono text-cyan-400">Visual Infographics</span>
                                    </div>
                                  </div>
                                )}

                                {pitchSlide === 2 && (
                                  <div className="space-y-1.5">
                                    <div className="flex items-center justify-between text-[8px] font-mono text-zinc-400">
                                      <span>Design System Variables</span>
                                      <span className="text-emerald-400 font-semibold">WCAG AAA Validated</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-1.5 text-center text-[8px] font-mono">
                                      <div className="p-1 rounded bg-black/50 border border-zinc-800 text-zinc-300">
                                        16 Spacing
                                      </div>
                                      <div className="p-1 rounded bg-black/50 border border-zinc-800 text-zinc-300">
                                        8 Type Sizes
                                      </div>
                                      <div className="p-1 rounded bg-black/50 border border-zinc-800 text-zinc-300">
                                        4 Themes
                                      </div>
                                    </div>
                                    <p className="text-[8.5px] text-zinc-400">
                                      Figma high-fidelity tokens mapped directly to production components.
                                    </p>
                                  </div>
                                )}

                                {pitchSlide === 3 && (
                                  <div className="space-y-1 text-[8.5px] font-mono">
                                    <div className="flex items-center justify-between p-1 rounded bg-black/50 border border-zinc-850">
                                      <span className="text-white font-semibold">Q1: Alpha Core UI</span>
                                      <span className="text-emerald-400">Completed</span>
                                    </div>
                                    <div className="flex items-center justify-between p-1 rounded bg-black/50 border border-zinc-850">
                                      <span className="text-white font-semibold">Q2: Interactive Deck</span>
                                      <span className="text-cyan-400">In Review</span>
                                    </div>
                                    <div className="flex items-center justify-between p-1 rounded bg-black/50 border border-zinc-850">
                                      <span className="text-white font-semibold">Q3: Global Launch</span>
                                      <span className="text-violet-400">Target</span>
                                    </div>
                                  </div>
                                )}
                              </motion.div>
                            </AnimatePresence>
                          </div>

                          {/* Figma UI Digital Prototype Card */}
                          <div className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800">
                            <div className="flex items-center justify-between text-[9px] font-mono mb-1.5">
                              <span className="text-zinc-300 font-semibold">Figma Digital Prototype</span>
                              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[8px]">
                                Interactive State Flow
                              </span>
                            </div>
                            <div className="flex items-center gap-1 flex-wrap">
                              {["Wireframes", "Typography Scale", "Color Tokens", "User Journey Flow"].map((t) => (
                                <span
                                  key={t}
                                  className="text-[8px] font-mono px-2 py-0.5 rounded bg-zinc-800/90 border border-zinc-700 text-zinc-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {project.id === "kairos-editorial" && (
                        <div className="my-auto py-1.5 space-y-2 z-10">
                          {/* Live Mode Toggle (Poster, Grid, Specimen) */}
                          <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-zinc-900/90 border border-zinc-800">
                            {[
                              { id: "poster", label: "Poster View", icon: Eye },
                              { id: "grid", label: "12-Col Grid", icon: Grid },
                              { id: "type", label: "Font Scale", icon: Type },
                            ].map((tab) => {
                              const Icon = tab.icon;
                              const isActive = kairosView === tab.id;
                              return (
                                <button
                                  key={tab.id}
                                  onClick={() => setKairosView(tab.id as "poster" | "grid" | "type")}
                                  className={`flex items-center justify-center gap-1 py-1 rounded-lg text-[9px] font-mono transition-all ${
                                    isActive
                                      ? "bg-rose-500/20 text-rose-300 border border-rose-500/40 font-bold shadow-xs"
                                      : "text-zinc-500 hover:text-zinc-300"
                                  }`}
                                >
                                  <Icon className="w-3 h-3" />
                                  <span>{tab.label}</span>
                                </button>
                              );
                            })}
                          </div>

                          {/* Swiss Style Artboard with Live Grid/Hierarchy Overlays */}
                          <div className="relative p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 overflow-hidden min-h-[145px]">
                            {/* Live 12-Column Grid Lines Overlay when 'grid' active */}
                            {kairosView === "grid" && (
                              <div className="absolute inset-0 grid grid-cols-12 gap-1 px-3 py-2 pointer-events-none z-20">
                                {[...Array(12)].map((_, i) => (
                                  <div
                                    key={i}
                                    className="h-full bg-cyan-500/10 border-x border-cyan-400/30 flex items-start justify-center"
                                  >
                                    <span className="text-[6.5px] font-mono text-cyan-300/80 mt-1">C{i + 1}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {kairosView === "type" ? (
                              <div className="space-y-1.5 z-10 relative">
                                <div className="text-[8px] font-mono text-rose-400 font-semibold uppercase">
                                  Typography Hierarchy Specimen
                                </div>
                                <div className="space-y-1 font-mono text-[8.5px]">
                                  <div className="flex items-center justify-between p-1 rounded bg-black/50 border border-zinc-800">
                                    <span className="font-serif italic text-sm text-white font-bold">Display 48pt</span>
                                    <span className="text-zinc-400">Playfair Bold</span>
                                  </div>
                                  <div className="flex items-center justify-between p-1 rounded bg-black/50 border border-zinc-800">
                                    <span className="font-sans font-bold text-xs text-white">Headline 24pt</span>
                                    <span className="text-zinc-400">Inter SemiBold</span>
                                  </div>
                                  <div className="flex items-center justify-between p-1 rounded bg-black/50 border border-zinc-800">
                                    <span className="font-sans text-[10px] text-zinc-300">Body 14pt (1.6 Line-Height)</span>
                                    <span className="text-zinc-400">Inter Regular</span>
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div className="relative z-10">
                                <span className="absolute right-2 -bottom-2 font-display text-7xl font-black text-white/5 select-none pointer-events-none">
                                  03
                                </span>
                                <div className="flex items-baseline justify-between border-b border-zinc-800 pb-1.5">
                                  <span className="font-display font-extrabold text-sm tracking-widest text-white uppercase">
                                    KAIROS &amp; CO.
                                  </span>
                                  <span className="font-mono text-[8px] text-zinc-400">VOL. IV / SWISS MODERNISM</span>
                                </div>

                                <div className="my-2 grid grid-cols-2 gap-2 text-[10px]">
                                  <div>
                                    <span className="font-mono text-[7.5px] text-zinc-500 uppercase block font-semibold">
                                      Typography Pairing
                                    </span>
                                    <div className="font-serif italic text-sm text-zinc-200 mt-0.5">Playfair &amp; Inter</div>
                                    <p className="text-[8.5px] text-zinc-400 leading-tight mt-0.5">
                                      Balanced asymmetric layout with negative space.
                                    </p>
                                  </div>
                                  <div className="border-l border-zinc-800 pl-2.5">
                                    <span className="font-mono text-[7.5px] text-zinc-500 uppercase block font-semibold">
                                      Campaign Assets
                                    </span>
                                    <div className="font-mono text-[9px] text-zinc-300 font-semibold mt-0.5">
                                      1:1 &bull; 9:16 &bull; A3 Print
                                    </div>
                                    <div className="font-mono text-[8px] text-zinc-500 mt-0.5">CMYK 300 DPI Proofs</div>
                                  </div>
                                </div>

                                <div className="flex items-center justify-between pt-1 border-t border-zinc-800/80 text-[8px] font-mono text-zinc-400">
                                  <span className={kairosView === "grid" ? "text-cyan-400 font-semibold" : ""}>
                                    Grid: 12-Column Asymmetric
                                  </span>
                                  <span>Canva Multi-Format Suite</span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Bottom Visual Highlights */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-t border-zinc-850 pt-2.5 z-10 text-[9.5px] font-mono text-zinc-400">
                        <span>Tools: Canva Pro &amp; Figma</span>
                        <span className="text-zinc-200 font-medium">Verified Design Deliverable</span>
                      </div>

                      {/* Subtle Background Pattern */}
                      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                    </div>
                  </div>

                  {/* Project Info Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Project Index & Category */}
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-violet-300 px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 shadow-sm">
                        PROJECT {project.number}
                      </span>
                      <div className="h-px w-6 bg-zinc-800" />
                      <span className="font-mono text-xs text-cyan-300 uppercase font-semibold">
                        {project.category}
                      </span>
                    </div>

                    {/* Main Title & Subtitle */}
                    <div>
                      <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-violet-200 group-hover:to-cyan-300">
                        {project.title}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-zinc-300 mt-1">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Project Description */}
                    <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Contribution Callout */}
                    <div className="p-4 rounded-2xl bg-zinc-900/70 border border-zinc-800 group-hover:border-violet-500/30 transition-colors">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="font-mono text-xs uppercase font-semibold text-violet-300">
                          My Design Contribution
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                        {project.contribution}
                      </p>
                    </div>

                    {/* Deliverables */}
                    {project.productFocus && (
                      <div className="space-y-2">
                        <span className="text-xs font-mono uppercase text-zinc-400 block font-semibold">
                          Design Deliverables:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {project.productFocus.map((focus, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs text-zinc-200">
                              <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                              <span>{focus}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Tools Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-mono bg-zinc-900/90 border border-zinc-800 text-zinc-200 shadow-sm hover:border-violet-500/50 hover:text-white transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Interaction Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-violet-500/40 text-xs font-mono text-zinc-200 hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-500 hover:text-white hover:border-transparent hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transition-all cursor-pointer group/btn shadow-sm">
                        <span className="font-semibold">VIEW CASE STUDY</span>
                        <ArrowUpRight className="w-4 h-4 text-cyan-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      </div>
                      <span className="text-[11px] font-mono text-zinc-500">
                        [{project.githubUrl}]
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
