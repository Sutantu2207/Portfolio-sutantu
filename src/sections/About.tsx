"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, Palette, Smartphone, Sparkles, MapPin, GraduationCap } from "lucide-react";
import { personalData } from "@/data/personal";
import SectionHeading from "@/components/SectionHeading";

export default function About() {
  const pillars = [
    {
      icon: Sparkles,
      title: "Canva Pro Brand Kits & Systems",
      desc: "Architecting memorable brand identities, custom logomarks, typography pairings, and official Canva Brand Kits for instant brand recognition.",
      iconBg: "bg-gradient-to-br from-violet-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.4)]",
      badgeStyle: "hover:border-violet-500/50 hover:bg-violet-950/20 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]",
      titleColor: "group-hover:text-violet-300",
    },
    {
      icon: Layers,
      title: "Social Carousels & Ad Creatives",
      desc: "Designing high-converting multi-slide Instagram carousels, LinkedIn infographics, and scroll-stopping promotional banners with rapid turnaround.",
      iconBg: "bg-gradient-to-br from-fuchsia-600 to-pink-600 text-white shadow-[0_0_15px_rgba(236,72,153,0.4)]",
      badgeStyle: "hover:border-fuchsia-500/50 hover:bg-fuchsia-950/20 hover:shadow-[0_0_25px_rgba(236,72,153,0.2)]",
      titleColor: "group-hover:text-fuchsia-300",
    },
    {
      icon: Palette,
      title: "Investor Pitch Decks & Decks",
      desc: "Transforming complex business propositions and startup data into executive, persuasive slide decks with clean layout rhythm.",
      iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-[0_0_15px_rgba(245,158,11,0.4)]",
      badgeStyle: "hover:border-amber-500/50 hover:bg-amber-950/20 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]",
      titleColor: "group-hover:text-amber-300",
    },
    {
      icon: Smartphone,
      title: "UI/UX & Prototyping in Figma",
      desc: "Translating brand identities into intuitive mobile and web layouts with ergonomic navigation zones, high-contrast tokens, and WCAG AAA compliance.",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-[0_0_15px_rgba(6,182,212,0.4)]",
      badgeStyle: "hover:border-cyan-500/50 hover:bg-cyan-950/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]",
      titleColor: "group-hover:text-cyan-300",
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="01"
          tag="ABOUT ME"
          title="IDENTITY & MINDSET"
          subtitle="Combining artistic intuition with deliberate visual communication craftsmanship."
        />

        {/* Strong Visual Statement */}
        <div className="mb-16">
          <div className="overflow-hidden">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white uppercase leading-[1.05]"
            >
              {personalData.statement.headline}
            </motion.h3>
          </div>
          <div className="overflow-hidden">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              className="font-display text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 uppercase leading-[1.05] drop-shadow-[0_0_30px_rgba(168,85,247,0.25)]"
            >
              {personalData.statement.subheadline}
            </motion.h3>
          </div>
        </div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Column 1: Portrait Profile Card with Gradient Border */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 rounded-3xl p-[1.5px] bg-gradient-to-br from-violet-500/40 via-cyan-500/20 to-fuchsia-500/40 shadow-[0_0_30px_rgba(139,92,246,0.15)] relative overflow-hidden group hover:shadow-[0_0_40px_rgba(6,182,212,0.25)] transition-all duration-500"
          >
            <div className="rounded-[22px] bg-zinc-950 p-4 w-full h-full">
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-4 bg-zinc-900 border border-zinc-800/80">
                <Image
                  src="/sutantu.jpg"
                  alt="M Sutantu"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs font-mono text-white">
                  <span className="px-2.5 py-0.5 rounded-full bg-violet-950/80 border border-violet-500/40 text-violet-200">
                    Graphic Designer
                  </span>
                  <span className="text-emerald-400 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Available
                  </span>
                </div>
              </div>

              <div className="p-2 space-y-2 font-mono text-xs text-zinc-300">
                <div className="flex items-center gap-2 text-white font-bold text-sm font-display">
                  <Palette className="w-4 h-4 text-cyan-400" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300">M SUTANTU</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <GraduationCap className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                  <span>SNS College of Technology (2023–2027)</span>
                </div>
                <div className="flex items-center gap-1.5 text-zinc-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>Coimbatore, Tamil Nadu, India</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Narrative Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-8 space-y-6 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed"
          >
            {personalData.statement.description.map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Design Pillars Grid with Colorful Glows */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800 transition-all duration-300 group shadow-sm ${pillar.badgeStyle}`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${pillar.iconBg}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className={`font-display text-sm font-bold text-white mb-1.5 transition-colors ${pillar.titleColor}`}>
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
