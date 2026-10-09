"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Palette, Smartphone, Sparkles, Zap } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function HeroVisual() {
  const [activeView, setActiveView] = useState<"portrait" | "app">("portrait");
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt physics
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["14deg", "-14deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-14deg", "14deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / rect.width - 0.5;
    const yPct = mouseY / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative flex flex-col items-center justify-center">
      {/* View Switcher Tabs: Portrait vs Mobile UI View */}
      <div className="relative z-20 flex items-center p-1 rounded-full bg-zinc-900/90 border border-violet-500/30 backdrop-blur-xl mb-6 shadow-[0_0_20px_rgba(139,92,246,0.15)]">
        <button
          onClick={() => setActiveView("portrait")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
            activeView === "portrait"
              ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.5)]"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>PORTRAIT</span>
        </button>
        <button
          onClick={() => setActiveView("app")}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
            activeView === "app"
              ? "bg-gradient-to-r from-indigo-600 to-cyan-500 text-white shadow-[0_0_15px_rgba(6,182,212,0.5)]"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>MOBILE UI VIEW</span>
        </button>
      </div>

      {activeView === "portrait" ? (
        <div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative perspective-[1200px] cursor-grab active:cursor-grabbing select-none"
        >
          {/* Vibrant Colorful Ambient Halo */}
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-violet-600/30 via-fuchsia-500/25 to-cyan-400/30 blur-3xl opacity-80 pointer-events-none animate-pulse" />

          {/* 3D Tilting Card with Iridescent Gradient Border */}
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative w-[300px] sm:w-[340px] md:w-[370px] aspect-[4/5] rounded-[36px] p-[2px] bg-gradient-to-br from-violet-500/60 via-fuchsia-500/30 to-cyan-400/60 shadow-2xl overflow-visible"
          >
            {/* Inner Image Container */}
            <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-zinc-950 border border-zinc-800/80 shadow-inner">
              <Image
                src="/sutantu.jpg"
                alt="M Sutantu — Graphic & Visual Designer"
                fill
                priority
                className="object-cover object-top scale-105 hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Vignette at Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/30 to-transparent opacity-90" />

              {/* Name & Role Overlay at Bottom of Card */}
              <div className="absolute bottom-4 left-4 right-4 z-10 p-3.5 rounded-2xl bg-zinc-900/90 backdrop-blur-md border border-violet-500/30 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                <div className="flex items-center justify-between">
                  <div className="font-display font-bold text-lg text-white tracking-wide">
                    M SUTANTU
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-[10px] font-mono font-semibold text-emerald-300 shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>AVAILABLE</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-violet-200 font-mono mt-0.5">
                  <Palette className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300 font-medium">Graphic &amp; Visual Designer</span>
                </div>
              </div>
            </div>

            {/* Floating Badge 1: Top Right */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 z-30 px-3.5 py-2 rounded-2xl bg-zinc-900/95 border border-violet-500/50 backdrop-blur-xl shadow-[0_0_25px_rgba(139,92,246,0.35)] flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white shadow-sm">
                <Palette className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono font-semibold text-white">Canva Pro &amp; Brand</div>
                <div className="text-[9px] text-violet-300 font-mono">Expert Visuals</div>
              </div>
            </motion.div>

            {/* Floating Badge 2: Bottom Left */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-5 -left-5 z-30 px-3.5 py-2 rounded-2xl bg-zinc-900/95 border border-cyan-500/50 backdrop-blur-xl shadow-[0_0_25px_rgba(6,182,212,0.35)] flex items-center gap-2.5"
            >
              <div className="w-7 h-7 rounded-xl bg-gradient-to-br from-cyan-600 to-teal-500 flex items-center justify-center text-white shadow-sm">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono font-semibold text-white">Creative Impact</div>
                <div className="flex items-center gap-1 mt-1">
                  {[
                    { h: 45, bg: "bg-violet-400" },
                    { h: 90, bg: "bg-fuchsia-400" },
                    { h: 60, bg: "bg-cyan-400" },
                    { h: 100, bg: "bg-emerald-400" },
                    { h: 75, bg: "bg-amber-400" },
                  ].map((bar, i) => (
                    <div
                      key={i}
                      style={{ height: `${bar.h}%` }}
                      className={`w-1 h-2.5 rounded-full ${bar.bg}`}
                    />
                  ))}
                  <span className="text-[9px] font-mono text-cyan-300 ml-1">Vibrant</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      ) : (
        <PhoneMockup
          title="Sutantu • Design"
          subtitle="Visual & UI Portfolio"
          themeColor="#18181b"
          accentColor="#ffffff"
          interactive={true}
        />
      )}
    </div>
  );
}
