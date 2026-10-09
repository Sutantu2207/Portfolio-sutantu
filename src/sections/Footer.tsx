"use client";

import { ArrowUp } from "lucide-react";
import { personalData } from "@/data/personal";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-zinc-850 bg-[#07080b] py-14 px-6 sm:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-zinc-850">
          {/* Brand Identity Column */}
          <div>
            <div className="font-display text-2xl font-black text-white tracking-wider">
              {personalData.name}
            </div>
            <div className="flex items-center gap-2 mt-1 text-xs font-mono text-zinc-300">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300 font-semibold">{personalData.role}</span>
              <span className="text-zinc-600">•</span>
              <span className="text-zinc-400">{personalData.secondaryRole}</span>
            </div>
            <p className="text-xs text-zinc-300 mt-2 max-w-sm">
              Crafting memorable brand identities, striking visual designs, and intuitive digital experiences with Canva Pro &amp; Figma.
            </p>
          </div>

          {/* Quick Links & Back to Top */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 font-mono text-xs text-zinc-400">
            <a
              href={personalData.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-300 transition-colors font-medium"
            >
              GitHub
            </a>
            <span className="text-zinc-600 hover:text-zinc-500 cursor-not-allowed" title="Placeholder as requested">
              LinkedIn [{personalData.linkedin}]
            </span>
            <a
              href={`mailto:${personalData.email}`}
              className="hover:text-violet-300 transition-colors font-medium"
            >
              Email
            </a>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-violet-500/30 text-zinc-300 hover:bg-gradient-to-r hover:from-violet-600 hover:to-cyan-500 hover:text-white hover:border-transparent hover:shadow-[0_0_20px_rgba(139,92,246,0.4)] transition-all active:scale-95 cursor-pointer ml-auto md:ml-4 font-semibold"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Legal & Credit Line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 {personalData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <span>Visual Design Portfolio • Crafted with Modern Aesthetics</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
