"use client";

import { motion } from "framer-motion";

export default function LiveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#08090d]">
      {/* 1. Violet Aurora Orb - Top Left */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.22, 0.35, 0.22],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-20 w-[650px] h-[650px] rounded-full bg-gradient-to-br from-violet-600/35 via-purple-700/25 to-transparent blur-[140px]"
      />

      {/* 2. Electric Cyan / Sky Aurora Orb - Top Right */}
      <motion.div
        animate={{
          x: [0, -40, 25, 0],
          y: [0, 35, -25, 0],
          scale: [1, 1.12, 1, 1],
          opacity: [0.18, 0.3, 0.18],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute -top-24 -right-20 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-cyan-500/30 via-blue-600/20 to-transparent blur-[130px]"
      />

      {/* 3. Fuchsia / Magenta Aurora Orb - Middle Right */}
      <motion.div
        animate={{
          x: [0, -35, 15, 0],
          y: [0, -45, 20, 0],
          scale: [0.95, 1.2, 0.95],
          opacity: [0.12, 0.24, 0.12],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        className="absolute top-1/3 -right-28 w-[550px] h-[550px] rounded-full bg-gradient-to-l from-fuchsia-600/25 via-pink-600/15 to-transparent blur-[150px]"
      />

      {/* 4. Emerald / Teal Aurora Orb - Middle Left */}
      <motion.div
        animate={{
          x: [0, 30, -15, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.18, 1],
          opacity: [0.12, 0.22, 0.12],
        }}
        transition={{
          duration: 17,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-2/3 -left-28 w-[580px] h-[580px] rounded-full bg-gradient-to-r from-emerald-500/20 via-teal-600/15 to-transparent blur-[150px]"
      />

      {/* 5. Deep Indigo Aura - Bottom Center */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.28, 0.15],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[850px] h-[550px] rounded-full bg-gradient-to-t from-indigo-700/25 via-violet-600/15 to-transparent blur-[160px]"
      />

      {/* High-Definition Subtle Grid Overlay with mask */}
      <div className="absolute inset-0 opacity-[0.035] bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

      {/* Subtle Noise / Grain Texture feeling */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#08090d]/60 pointer-events-none" />
    </div>
  );
}
