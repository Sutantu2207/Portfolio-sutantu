"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  number?: string;
  tag?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  number,
  tag,
  title,
  subtitle,
  className = "",
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? "text-center mx-auto max-w-3xl" : "max-w-4xl"} ${className}`}>
      {/* Index Tag */}
      {(number || tag) && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className={`flex items-center gap-3 mb-4 font-mono text-xs tracking-widest uppercase ${
            isCenter ? "justify-center" : ""
          }`}
        >
          {number && <span className="text-violet-400 font-bold">[{number}]</span>}
          {tag && <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300">{tag}</span>}
          <div className="h-[1.5px] w-8 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 rounded-full" />
        </motion.div>
      )}

      {/* Main Editorial Title */}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white uppercase leading-[1.08]"
      >
        {title}
      </motion.h2>

      {/* Subtitle */}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mt-4 text-base md:text-lg text-zinc-400 font-normal leading-relaxed max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
