"use client";

import { Sparkles, Smartphone, Palette, Zap, Layers } from "lucide-react";

export default function MarqueeTicker() {
  const items = [
    { label: "CANVA PRO DESIGN SPECIALIST", icon: Palette, color: "text-cyan-300", bg: "bg-cyan-950/40 border-cyan-500/30" },
    { label: "BRAND KITS & LOGO SYSTEMS", icon: Sparkles, color: "text-violet-300", bg: "bg-violet-950/40 border-violet-500/30" },
    { label: "SOCIAL MEDIA CAROUSELS & ADS", icon: Layers, color: "text-fuchsia-300", bg: "bg-fuchsia-950/40 border-fuchsia-500/30" },
    { label: "PITCH DECKS & PRESENTATIONS", icon: Zap, color: "text-amber-300", bg: "bg-amber-950/40 border-amber-500/30" },
    { label: "FIGMA UI/UX & WIREFRAMES", icon: Smartphone, color: "text-indigo-300", bg: "bg-indigo-950/40 border-indigo-500/30" },
    { label: "TYPOGRAPHY & COLOR HARMONY", icon: Palette, color: "text-emerald-300", bg: "bg-emerald-950/40 border-emerald-500/30" },
    { label: "MARKETING POSTERS & PRINT", icon: Sparkles, color: "text-rose-300", bg: "bg-rose-950/40 border-rose-500/30" },
    { label: "ENTERPRISE DESIGN THINKING", icon: Layers, color: "text-sky-300", bg: "bg-sky-950/40 border-sky-500/30" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 bg-gradient-to-r from-violet-950/20 via-zinc-950/80 to-cyan-950/20 border-y border-violet-500/20 backdrop-blur-md select-none my-8 shadow-[0_0_25px_rgba(139,92,246,0.15)]">
      {/* Left/Right Fade Mask */}
      <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-[#08090d] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-[#08090d] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-6">
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-4 shrink-0">
              <div className={`flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border shadow-sm ${item.bg}`}>
                <Icon className={`w-3.5 h-3.5 ${item.color}`} />
                <span className={`font-mono text-xs md:text-sm font-semibold tracking-wider ${item.color}`}>
                  {item.label}
                </span>
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 text-xs font-bold">✦</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
