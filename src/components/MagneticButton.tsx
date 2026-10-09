"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  pullStrength?: number;
  ariaLabel?: string;
}

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  target,
  rel,
  variant = "primary",
  pullStrength = 0.25,
  ariaLabel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = (e.clientX - centerX) * pullStrength;
    const deltaY = (e.clientY - centerY) * pullStrength;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white font-semibold border border-white/20 hover:from-violet-500 hover:via-indigo-500 hover:to-cyan-400 transition-all shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] hover:scale-105",
    secondary:
      "bg-zinc-800 text-white font-medium border border-zinc-700 hover:border-violet-500/50 hover:bg-zinc-750 transition-all",
    outline:
      "bg-zinc-900/70 text-zinc-200 border border-violet-500/30 hover:border-cyan-400 hover:text-white hover:bg-violet-950/30 backdrop-blur-sm transition-all shadow-[0_0_15px_rgba(139,92,246,0.15)]",
    ghost:
      "bg-transparent text-zinc-400 hover:text-cyan-300 border-transparent",
  };

  const baseContent = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 350, damping: 20, mass: 0.4 }}
      className="inline-block"
    >
      <div
        className={`relative inline-flex items-center justify-center px-6 py-3.5 rounded-full transition-all duration-300 text-sm tracking-wide select-none group cursor-pointer ${variantStyles[variant]} ${className}`}
      >
        {children}
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={onClick}
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full"
      >
        {baseContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-full bg-transparent border-0 p-0"
    >
      {baseContent}
    </button>
  );
}
