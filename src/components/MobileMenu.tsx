"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Mail, Phone } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { personalData } from "@/data/personal";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { label: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-[#090a0d]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8"
        >
          {/* Top Bar inside Menu */}
          <div className="flex items-center justify-between border-b border-zinc-800 pb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-300" />
              <span className="font-display font-bold text-lg tracking-wider text-white">
                {personalData.name}
              </span>
            </div>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="w-11 h-11 rounded-full border border-zinc-800 bg-zinc-900/80 flex items-center justify-center text-white hover:bg-zinc-800 active:scale-95 transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with Stagger */}
          <nav className="flex flex-col space-y-6 my-auto">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={onClose}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index + 0.1, duration: 0.4 }}
                className="group flex items-center justify-between py-2 border-b border-zinc-850 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-violet-400 font-semibold">
                    0{index + 1}
                  </span>
                  <span className="font-display text-3xl sm:text-4xl font-extrabold text-zinc-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all tracking-tight">
                    {item.label}
                  </span>
                </div>
                <ArrowUpRight className="w-6 h-6 text-zinc-500 group-hover:text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </motion.a>
            ))}
          </nav>

          {/* Bottom Direct Contacts */}
          <div className="border-t border-zinc-800 pt-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span>{personalData.role}</span>
              <span>{personalData.location}</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-white hover:bg-zinc-800 transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                <span>GitHub</span>
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-white hover:bg-zinc-800 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                <span>Email</span>
              </a>
              <a
                href={`tel:${personalData.phone.replace(/\s+/g, "")}`}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-white hover:bg-zinc-800 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
