"use client";

import React, { useState } from "react";
import { Check, Palette, Smartphone, Sparkles, TrendingUp, Layers, Sliders } from "lucide-react";
import { flutterProjects } from "@/data/projects";
import SectionHeading from "@/components/SectionHeading";

export default function FlutterProjects() {
  const [selectedProjectId, setSelectedProjectId] = useState<string>(flutterProjects[0].id);
  const [internalMockupTab, setInternalMockupTab] = useState<number>(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeProject =
    flutterProjects.find((p) => p.id === selectedProjectId) || flutterProjects[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="flutter" className="py-24 md:py-32 px-6 sm:px-8 relative z-10 bg-[#090a0d]/90">
      {/* Decorative Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          number="04"
          tag="VISUAL UI &amp; INTERACTIVE SHOWCASE"
          title="DIGITAL INTERFACE DESIGNS"
          subtitle="Interactive mobile UI concepts crafted with meticulous visual hierarchy, color psychology, and tactile ergonomics."
        />

        {/* Design Showcase Callout Banner */}
        <div className="mb-12 p-4 sm:p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-300 shrink-0">
              <Palette className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2">
                <span>Interactive Design Showcase: Live Mockup Previews</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Explore custom mobile interface layouts, typography hierarchies, and curated color palettes designed for seamless user engagement.
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300 shrink-0 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-zinc-400" />
            <span className="font-semibold">Curated UI Concepts</span>
          </div>
        </div>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-10">
          {flutterProjects.map((p) => {
            const isSelected = p.id === activeProject.id;
            return (
              <button
                key={p.id}
                onClick={() => setSelectedProjectId(p.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2.5 cursor-pointer select-none ${
                  isSelected
                    ? "bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-semibold shadow-[0_0_20px_rgba(139,92,246,0.4)] scale-105 border border-white/20"
                    : "bg-zinc-900/80 text-zinc-400 hover:text-white hover:border-violet-500/40 border border-zinc-800"
                }`}
              >
                <Smartphone className={`w-3.5 h-3.5 ${isSelected ? "text-cyan-200" : "text-zinc-400"}`} />
                <span>{p.name}</span>
                <span className={`text-[9px] px-2 py-0.5 rounded-full font-semibold ${
                  isSelected ? "bg-black/30 text-cyan-200" : "bg-zinc-800 border border-zinc-700 text-zinc-300"
                }`}>
                  Concept
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Project Showcase Layout */}
        <div
          onMouseMove={handleMouseMove}
          className="group relative rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-violet-500/40 p-6 sm:p-8 md:p-12 shadow-2xl backdrop-blur-md overflow-hidden transition-all duration-500"
        >
          {/* Subtle colorful cursor spotlight */}
          <div
            className="absolute pointer-events-none -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 75%)`,
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
            {/* Interactive Phone Mockup Viewport */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="relative w-[285px] sm:w-[310px] h-[560px] rounded-[44px] bg-[#111318] p-3 shadow-2xl border border-zinc-800">
                {/* Physical Bezel Buttons */}
                <div className="absolute -left-[3px] top-[110px] w-[3px] h-[26px] bg-zinc-700 rounded-l-sm" />
                <div className="absolute -left-[3px] top-[150px] w-[3px] h-[48px] bg-zinc-700 rounded-l-sm" />
                <div className="absolute -right-[3px] top-[140px] w-[3px] h-[60px] bg-zinc-700 rounded-r-sm" />

                {/* Screen View */}
                <div className="w-full h-full rounded-[36px] bg-[#090a0d] p-4 flex flex-col justify-between overflow-hidden border border-zinc-800/80 relative z-10">
                  {/* Dynamic Island */}
                  <div className="w-20 h-4 rounded-full bg-black mx-auto mb-2 flex items-center justify-between px-2 border border-zinc-800">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
                  </div>

                  {/* Mockup App Bar */}
                  <div className="border-b border-zinc-850 pb-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">
                        {activeProject.mockupTheme.appBarTitle}
                      </span>
                      <span className="text-[9px] font-mono text-zinc-300 font-semibold px-2 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                        UI / UX
                      </span>
                    </div>
                    <div className="text-[10px] text-zinc-400 mt-0.5 truncate">
                      {activeProject.tagline}
                    </div>
                  </div>

                  {/* Mockup Body based on internalTab */}
                  <div className="my-auto space-y-2.5 py-1">
                    {/* Hero Metric Card */}
                    <div className="p-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 shadow-sm">
                      <span className="text-[9px] font-mono uppercase text-zinc-400 font-semibold tracking-wider">
                        {activeProject.mockupTheme.cardTitle}
                      </span>
                      <div className="text-2xl font-bold font-display text-white mt-1">
                        {activeProject.mockupTheme.statValue}
                      </div>
                      <div className="text-[10px] text-zinc-400 mt-0.5">
                        {activeProject.mockupTheme.statLabel}
                      </div>

                      {/* Bar graph */}
                      <div className="flex items-end gap-1 h-8 mt-2.5 pt-1">
                        {[45, 70, 85, 60, 95, 80, 100, 90, 85].map((val, idx) => (
                          <div
                            key={idx}
                            style={{ height: `${val}%` }}
                            className="flex-1 rounded-t-xs bg-zinc-500 opacity-70 hover:opacity-100 transition-all"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Secondary Detail Card */}
                    <div className="p-3 rounded-xl bg-zinc-900/60 border border-zinc-800">
                      <div className="text-xs font-semibold text-white">
                        {activeProject.mockupTheme.cardSubtitle}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {activeProject.mockupTheme.pillTags.map((t) => (
                          <span
                            key={t}
                            className="text-[9px] font-mono px-2 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mockup Action Button */}
                  <button className="w-full py-2.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase shadow-md active:scale-95 transition-transform">
                    {activeProject.mockupTheme.actionText}
                  </button>

                  {/* Home indicator bar */}
                  <div className="w-20 h-1 bg-zinc-700 rounded-full mx-auto mt-2" />
                </div>
              </div>
            </div>

            {/* Detailed Project Breakdown Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-full text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold shadow-sm">
                  {activeProject.statusBadge}
                </span>
                <span className="text-xs font-mono text-zinc-500">
                  Interactive Visual Mockup
                </span>
              </div>

              <div>
                <h3 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight uppercase">
                  {activeProject.name}
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 mt-1 font-medium">
                  {activeProject.tagline}
                </p>
              </div>

              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {activeProject.description}
              </p>

              {/* Role */}
              <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800">
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-1 font-semibold">
                  Design Role:
                </span>
                <span className="text-sm font-semibold text-white">
                  {activeProject.myRole}
                </span>
              </div>

              {/* Features */}
              <div>
                <span className="text-xs font-mono text-zinc-500 uppercase block mb-2 font-semibold">
                  Key Design Highlights:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProject.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Strategy Note */}
              <div className="p-4 rounded-2xl bg-zinc-900/40 border border-zinc-800">
                <div className="flex items-center gap-2 mb-1.5 text-zinc-300">
                  <Sparkles className="w-4 h-4 text-zinc-400" />
                  <span className="font-mono text-xs uppercase font-semibold">Design Philosophy &amp; Visual Strategy</span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {activeProject.uiUxProcess}
                </p>
              </div>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-2 font-mono text-xs">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-white hover:text-black hover:border-white transition-all cursor-pointer shadow-sm">
                  <Palette className="w-4 h-4 text-zinc-400 group-hover:text-black" />
                  <span className="font-semibold">Explore Design System</span>
                </div>
                <span className="text-zinc-500">[{activeProject.demoUrl}]</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
