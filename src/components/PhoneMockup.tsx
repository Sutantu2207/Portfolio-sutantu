"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Activity, Bell, Palette, Sparkles, TrendingUp, Zap } from "lucide-react";

interface PhoneMockupProps {
  title?: string;
  subtitle?: string;
  themeColor?: string;
  accentColor?: string;
  interactive?: boolean;
  className?: string;
}

const THEMES = [
  { name: "Aurora", label: "Aurora Violet", primary: "#8b5cf6", secondary: "#06b6d4" },
  { name: "Cyan", label: "Electric Cyan", primary: "#06b6d4", secondary: "#3b82f6" },
  { name: "Emerald", label: "Cyber Emerald", primary: "#10b981", secondary: "#a3e635" },
  { name: "Rose", label: "Sunset Rose", primary: "#f43f5e", secondary: "#f59e0b" },
];

export default function PhoneMockup({
  title = "PulseFit UI",
  subtitle = "Visual Design System",
  interactive = true,
  className = "",
}: PhoneMockupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedThemeIdx, setSelectedThemeIdx] = useState(0);
  const activeTheme = THEMES[selectedThemeIdx];

  // Mouse tilt spring values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center select-none perspective-[1200px] ${className}`}
    >
      {/* Floating Ambient Glow - Dynamically reactive to theme */}
      <div
        className="absolute -inset-6 rounded-full blur-3xl opacity-60 pointer-events-none transition-all duration-500 animate-pulse"
        style={{
          background: `radial-gradient(circle, ${activeTheme.primary}45 0%, ${activeTheme.secondary}35 60%, transparent 100%)`,
        }}
      />

      {/* 3D Tilting Phone Frame */}
      <motion.div
        style={{
          rotateX: interactive ? rotateX : "0deg",
          rotateY: interactive ? rotateY : "0deg",
          transformStyle: "preserve-3d",
          borderColor: `${activeTheme.primary}45`,
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative w-[285px] sm:w-[310px] md:w-[325px] h-[580px] sm:h-[620px] rounded-[44px] bg-[#121318] p-3 shadow-2xl transition-colors duration-500"
      >
        {/* Outer Bezel Volume Highlights */}
        <div className="absolute inset-0 rounded-[44px] ring-1 ring-violet-500/20 pointer-events-none" />
        <div className="absolute -left-[3px] top-[115px] w-[3px] h-[26px] bg-zinc-700 rounded-l-sm" />
        <div className="absolute -left-[3px] top-[155px] w-[3px] h-[48px] bg-zinc-700 rounded-l-sm" />
        <div className="absolute -left-[3px] top-[215px] w-[3px] h-[48px] bg-zinc-700 rounded-l-sm" />
        <div className="absolute -right-[3px] top-[165px] w-[3px] h-[65px] bg-zinc-700 rounded-r-sm" />

        {/* Screen Bezel & Display */}
        <div className="relative w-full h-full rounded-[36px] bg-[#08090d] overflow-hidden flex flex-col border border-zinc-800">
          {/* Dynamic Island / Camera Pill */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 w-24 h-5 rounded-full bg-black flex items-center justify-between px-2.5 border border-zinc-800 shadow-md">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,1)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400/80" />
          </div>

          {/* Status Bar */}
          <div className="relative z-20 flex items-center justify-between px-5 pt-3 pb-1 text-[11px] font-medium text-zinc-400">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span className="text-[9px] font-mono text-cyan-400 font-semibold">5G</span>
              <div className="w-5 h-2.5 border border-zinc-600 rounded-sm p-[1px] flex items-center">
                <div className="h-full w-4/5 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* Design App Bar */}
          <div className="px-4 py-2 border-b border-zinc-850 flex items-center justify-between bg-zinc-950/50">
            <div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                <span className="text-[12px] font-semibold tracking-wide text-white">
                  {title}
                </span>
              </div>
              <p className="text-[9px] text-zinc-400">{subtitle}</p>
            </div>
            <div className="w-7 h-7 rounded-full bg-zinc-900 border border-violet-500/30 flex items-center justify-center text-cyan-300 shadow-sm">
              <Bell className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Dynamic App Body Content based on Active Tab */}
          <div className="flex-1 px-3.5 py-3 overflow-y-auto space-y-3 font-sans text-white text-xs">
            {activeTab === 0 && (
              <motion.div
                key="tab-design"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                {/* Metric Hero Card */}
                <div
                  className="relative rounded-2xl p-3.5 border shadow-md overflow-hidden transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${activeTheme.primary}18 0%, rgba(24, 24, 27, 0.95) 50%, ${activeTheme.secondary}18 100%)`,
                    borderColor: `${activeTheme.primary}40`,
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[10px] uppercase font-mono tracking-wider font-semibold"
                      style={{ color: activeTheme.primary }}
                    >
                      Design System Harmony
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-1.5 py-0.5 rounded-md font-mono font-semibold">
                      100% AA
                    </span>
                  </div>
                  <div
                    className="text-2xl font-bold font-display tracking-tight text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `linear-gradient(90deg, #fff, ${activeTheme.primary}, ${activeTheme.secondary})`,
                    }}
                  >
                    98.4%
                  </div>
                  <div className="text-[10px] text-zinc-400 mt-0.5">
                    Accessible Typography &amp; Color Contrast
                  </div>

                  {/* Interactive Wave / Bar Graph */}
                  <div className="flex items-end gap-1 h-10 mt-3 pt-2">
                    {[40, 65, 80, 55, 90, 75, 98, 88, 92, 100, 85, 95].map((val, idx) => (
                      <div
                        key={idx}
                        style={{
                          height: `${val}%`,
                          background: `linear-gradient(to top, ${activeTheme.primary}, ${activeTheme.secondary})`,
                        }}
                        className="flex-1 rounded-t-xs opacity-85 hover:opacity-100 transition-all cursor-pointer hover:scale-y-110"
                        title={`Value: ${val}%`}
                      />
                    ))}
                  </div>
                </div>

                {/* Quick Action Tiles */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="p-2.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between shadow-sm">
                    <div className="flex items-center justify-between text-zinc-400">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[9px] text-emerald-300 font-mono font-semibold">Perfect</span>
                    </div>
                    <div className="mt-2">
                      <span className="text-[9px] text-zinc-400 uppercase font-mono">
                        Typography
                      </span>
                      <div className="text-sm font-semibold text-white">Modern Sans</div>
                    </div>
                  </div>

                  <div
                    className="p-2.5 rounded-xl border flex flex-col justify-between shadow-sm"
                    style={{
                      backgroundColor: `${activeTheme.secondary}12`,
                      borderColor: `${activeTheme.secondary}40`,
                    }}
                  >
                    <div className="flex items-center justify-between text-zinc-400">
                      <Palette className="w-3.5 h-3.5" style={{ color: activeTheme.secondary }} />
                      <span
                        className="text-[9px] font-mono font-semibold"
                        style={{ color: activeTheme.secondary }}
                      >
                        {activeTheme.name}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="text-[9px] text-zinc-400 uppercase font-mono">
                        Active Theme
                      </span>
                      <div className="text-sm font-semibold text-white truncate">{activeTheme.label}</div>
                    </div>
                  </div>
                </div>

                {/* Component Card */}
                <div
                  className="rounded-xl border p-2.5 space-y-2 shadow-sm"
                  style={{
                    backgroundColor: `${activeTheme.primary}10`,
                    borderColor: `${activeTheme.primary}30`,
                  }}
                >
                  <div className="flex items-center justify-between text-[10px]">
                    <span className="font-semibold text-zinc-200">Interactive Component</span>
                    <span
                      className="font-mono text-[9px] font-semibold"
                      style={{ color: activeTheme.primary }}
                    >
                      Canva &bull; Figma
                    </span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded-lg bg-black/60 border border-zinc-800 text-[10px]">
                    <div
                      className="w-6 h-6 rounded-md text-white flex items-center justify-center shadow-sm"
                      style={{
                        background: `linear-gradient(135deg, ${activeTheme.primary}, ${activeTheme.secondary})`,
                      }}
                    >
                      <Activity className="w-3 h-3" />
                    </div>
                    <div className="flex-1 truncate">
                      <div className="font-medium text-white truncate">Hero Card Layout</div>
                      <div className="text-[9px] text-zinc-400">Interactive Prototype</div>
                    </div>
                    <span
                      className="text-[9px] font-mono font-bold"
                      style={{ color: activeTheme.secondary }}
                    >
                      100%
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 1 && (
              <motion.div
                key="tab-assets"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-2.5"
              >
                <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800">
                  <div className="flex items-center justify-between text-[10px] mb-2 font-mono">
                    <span className="text-zinc-300 font-semibold uppercase tracking-wider">Asset Library</span>
                    <span className="text-cyan-400">Canva Pro Ready</span>
                  </div>
                  <div className="space-y-1.5">
                    {[
                      { name: "Brand Mark Suite", format: "SVG / Vector", size: "100% Crisp" },
                      { name: "Social Carousel Kit", format: "1080x1350 (4:5)", size: "Canva Pro" },
                      { name: "Marketing Banner", format: "1920x1080 (16:9)", size: "Retina" },
                      { name: "Color Tokens (WCAG)", format: "Tokens.json", size: "Design Sys" },
                    ].map((asset, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2 rounded-lg bg-black/50 border border-zinc-850 hover:border-zinc-700 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: i % 2 === 0 ? activeTheme.primary : activeTheme.secondary }}
                          />
                          <span className="text-[10px] font-medium text-zinc-200">{asset.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[9px] font-mono text-zinc-400 block">{asset.format}</span>
                          <span className="text-[8px] font-mono text-emerald-400">{asset.size}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-violet-950/20 border border-violet-500/30 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-semibold text-white">Visual Quality Standard</div>
                    <div className="text-[9px] text-zinc-400">Pixel-perfect raster &amp; vector exports</div>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[9px] font-mono font-bold">
                    300 DPI
                  </span>
                </div>
              </motion.div>
            )}

            {activeTab === 2 && (
              <motion.div
                key="tab-palette"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="space-y-2.5"
              >
                <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800">
                  <div className="flex items-center justify-between text-[10px] mb-2 font-mono">
                    <span className="text-zinc-300 font-semibold uppercase tracking-wider">Live Color Theme</span>
                    <span className="text-violet-400">Click to Switch</span>
                  </div>
                  <p className="text-[9.5px] text-zinc-400 mb-3">
                    Tap a swatch below to dynamically restyle the entire phone interface in real time:
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {THEMES.map((theme, idx) => {
                      const isSelected = selectedThemeIdx === idx;
                      return (
                        <button
                          key={theme.name}
                          onClick={() => setSelectedThemeIdx(idx)}
                          className={`p-2 rounded-xl text-left border transition-all duration-200 ${
                            isSelected
                              ? "bg-zinc-800 border-white/40 shadow-lg scale-[1.02]"
                              : "bg-black/50 border-zinc-850 hover:border-zinc-700"
                          }`}
                        >
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <div
                              className="w-3.5 h-3.5 rounded-full shadow-xs"
                              style={{ backgroundColor: theme.primary }}
                            />
                            <div
                              className="w-3.5 h-3.5 rounded-full shadow-xs"
                              style={{ backgroundColor: theme.secondary }}
                            />
                            {isSelected && (
                              <span className="ml-auto text-[8px] font-mono font-bold text-emerald-400">LIVE</span>
                            )}
                          </div>
                          <div className="text-[10px] font-semibold text-white">{theme.label}</div>
                          <div className="text-[8px] font-mono text-zinc-400">{theme.primary}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-black/60 border border-zinc-800 flex items-center justify-between text-[9px] font-mono">
                  <span className="text-zinc-400">Contrast Ratio:</span>
                  <span className="text-emerald-400 font-semibold">21:1 (AAA High Contrast)</span>
                </div>
              </motion.div>
            )}
          </div>

          {/* Bottom Floating Action Dock */}
          <div className="relative px-4 py-2 border-t border-zinc-850 bg-black/75 backdrop-blur-md flex items-center justify-around text-zinc-400">
            {[
              { id: 0, label: "Design", icon: Activity },
              { id: 1, label: "Assets", icon: Zap },
              { id: 2, label: "Palette", icon: Palette },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-medium transition-all ${
                    isActive
                      ? "text-white font-bold bg-zinc-800/80 shadow-xs"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                  style={{
                    color: isActive ? activeTheme.primary : undefined,
                  }}
                >
                  <Icon className="w-3 h-3" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* iOS Home Indicator Bar */}
          <div className="w-24 h-1 bg-zinc-700 rounded-full mx-auto my-1.5" />
        </div>
      </motion.div>

      {/* Floating Badges */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-4 -right-4 sm:-right-8 z-30 px-3.5 py-2 rounded-2xl bg-zinc-900/95 border border-violet-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(139,92,246,0.3)] flex items-center gap-2"
      >
        <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse shadow-[0_0_8px_rgba(167,139,250,1)]" />
        <span className="text-xs font-mono font-medium text-violet-200">Canva Pro &amp; Figma</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 -left-4 sm:-left-8 z-30 px-3.5 py-2 rounded-2xl bg-zinc-900/95 border border-cyan-500/40 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] flex items-center gap-2"
      >
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        <span className="text-xs font-mono font-medium text-cyan-200">Visual &amp; Graphic Design</span>
      </motion.div>
    </div>
  );
}
