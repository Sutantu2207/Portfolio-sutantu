"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState<"default" | "hover" | "project" | "text">("default");
  const [cursorLabel, setCursorLabel] = useState<string>("");
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  useEffect(() => {
    // Detect touch device or reduced motion
    const touch = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (touch || reducedMotion) {
      setIsTouchDevice(true);
      return;
    }

    setIsTouchDevice(false);

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    // Event delegation for interactive states
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const projectCard = target.closest("[data-cursor='project']");
      if (projectCard) {
        setCursorState("project");
        setCursorLabel(projectCard.getAttribute("data-cursor-label") || "VIEW");
        return;
      }

      const interactive = target.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']");
      if (interactive) {
        setCursorState("hover");
        setCursorLabel("");
        return;
      }

      setCursorState("default");
      setCursorLabel("");
    };

    window.addEventListener("mouseover", handleElementHover);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseover", handleElementHover);
    };
  }, [isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Soft Colorful Aura Trail following cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9990] w-56 h-56 rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-500/15 to-cyan-400/20 blur-3xl opacity-80"
        animate={{
          x: mousePosition.x - 112,
          y: mousePosition.y - 112,
        }}
        transition={{
          type: "spring",
          stiffness: 240,
          damping: 32,
          mass: 0.8,
        }}
      />

      {/* Outer fluid cursor dot / ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full mix-blend-difference"
        animate={{
          x: mousePosition.x - (cursorState === "project" ? 44 : cursorState === "hover" ? 24 : 8),
          y: mousePosition.y - (cursorState === "project" ? 44 : cursorState === "hover" ? 24 : 8),
          width: cursorState === "project" ? 88 : cursorState === "hover" ? 48 : 16,
          height: cursorState === "project" ? 88 : cursorState === "hover" ? 48 : 16,
          backgroundColor:
            cursorState === "project"
              ? "rgba(255, 255, 255, 0.95)"
              : cursorState === "hover"
              ? "rgba(255, 255, 255, 0.2)"
              : "rgba(255, 255, 255, 0.9)",
          border:
            cursorState === "hover"
              ? "1px solid rgba(255, 255, 255, 0.4)"
              : cursorState === "project"
              ? "none"
              : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 450,
          damping: 28,
          mass: 0.5,
        }}
      >
        {cursorState === "project" && cursorLabel && (
          <span className="text-[10px] font-bold tracking-widest text-black uppercase select-none">
            {cursorLabel}
          </span>
        )}
      </motion.div>

      {/* Inner precise pinpoint dot for standard state */}
      {cursorState === "default" && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[10000] w-1.5 h-1.5 rounded-full bg-white"
          animate={{
            x: mousePosition.x - 3,
            y: mousePosition.y - 3,
          }}
          transition={{
            type: "spring",
            stiffness: 800,
            damping: 35,
          }}
        />
      )}
    </>
  );
}
