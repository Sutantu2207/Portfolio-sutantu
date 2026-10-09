"use client";

import { motion } from "framer-motion";
import { Globe2, ShieldCheck } from "lucide-react";
import { certifications, languages } from "@/data/certifications";
import SectionHeading from "@/components/SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 px-6 sm:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="07"
          tag="VERIFIED CREDENTIALS"
          title="CERTIFICATIONS"
          subtitle="Specialized certifications validating human-centered design, digital media ethics, and creative analytical foundations."
        />

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const isSpecial = cert.isSpecialCounter;

            const cardThemes = [
              "border-violet-500/30 hover:border-violet-400 hover:shadow-[0_0_25px_rgba(139,92,246,0.2)]",
              "border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)]",
              "border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]",
              "border-amber-500/30 hover:border-amber-400 hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]",
            ];
            const currentTheme = cardThemes[index % cardThemes.length];

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-3xl transition-all duration-300 flex flex-col justify-between group shadow-sm backdrop-blur-md ${
                  isSpecial
                    ? "p-[1.5px] bg-gradient-to-r from-amber-400 via-rose-500 to-violet-500 shadow-[0_0_35px_rgba(245,158,11,0.25)] scale-[1.02]"
                    : `p-6 sm:p-7 bg-zinc-900/40 border ${currentTheme}`
                }`}
              >
                <div className={isSpecial ? "p-6 rounded-[22px] bg-zinc-950 flex flex-col justify-between h-full" : "flex flex-col justify-between h-full"}>
                  <div>
                    {/* Top Issuer Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-violet-300">
                        {cert.issuer}
                      </span>
                      <span
                        className={`text-[10px] font-mono px-3 py-1 rounded-full font-semibold ${
                          isSpecial
                            ? "bg-gradient-to-r from-amber-400 to-orange-500 text-black shadow-md font-bold"
                            : "bg-zinc-900 border border-violet-500/30 text-cyan-300"
                        }`}
                      >
                        {cert.credentialBadge}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="font-display text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-cyan-200 transition-all">
                      {cert.title}
                    </h4>

                    {/* Description */}
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>

                  {/* Bottom Verification Label */}
                  <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <span>Verified Credential</span>
                    </div>
                    <span className="text-violet-300 font-medium">{cert.category}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimalist Languages Bar */}
        <div className="p-6 sm:p-7 rounded-3xl bg-zinc-900/50 border border-violet-500/20 hover:border-cyan-500/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white shadow-sm shrink-0">
              <Globe2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                COMMUNICATION LANGUAGES
              </span>
              <p className="text-xs text-zinc-300">
                Cross-cultural collaboration and multilingual communication
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {languages.map((lang, idx) => {
              const langStyles = [
                "border-cyan-500/30 text-cyan-200 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]",
                "border-violet-500/30 text-violet-200 hover:border-violet-400 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]",
                "border-fuchsia-500/30 text-fuchsia-200 hover:border-fuchsia-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)]",
                "border-amber-500/30 text-amber-200 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)]",
              ][idx % 4];

              return (
                <span
                  key={lang.name}
                  className={`px-4 py-1.5 rounded-full bg-zinc-900/90 border text-xs font-mono transition-all shadow-sm font-semibold cursor-default ${langStyles}`}
                  title={lang.proficiency}
                >
                  {lang.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
