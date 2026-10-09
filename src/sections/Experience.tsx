"use client";

import { motion } from "framer-motion";
import { Calendar, ChevronRight } from "lucide-react";
import { experiences } from "@/data/experience";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 sm:px-8 relative z-10 bg-[#090a0d]/90">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="05"
          tag="PROFESSIONAL HISTORY"
          title="EXPERIENCE"
          subtitle="Professional internships spanning Full Stack Design, AI & machine learning pipelines, and digital marketing."
        />

        {/* Minimalist Vertical Timeline */}
        <div className="relative pl-6 sm:pl-10 md:pl-12 border-l border-zinc-800 space-y-16 sm:space-y-20 my-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Pin Node */}
              <div className="absolute -left-[31px] sm:-left-[47px] md:-left-[55px] top-1.5 flex items-center justify-center">
                {exp.isCurrent ? (
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-6 h-6 rounded-full bg-violet-500/30 animate-ping" />
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 border-2 border-[#08090d] shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
                  </div>
                ) : (
                  <div className="w-3.5 h-3.5 rounded-full bg-zinc-800 border-2 border-zinc-700 group-hover:border-cyan-400 group-hover:shadow-[0_0_8px_rgba(6,182,212,0.6)] transition-all" />
                )}
              </div>

              {/* Card Container */}
              <div className={`p-6 sm:p-8 rounded-3xl border transition-all duration-300 shadow-sm backdrop-blur-md ${
                exp.isCurrent
                  ? "bg-gradient-to-br from-violet-950/30 via-zinc-900/60 to-zinc-900/40 border-violet-500/40 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                  : exp.id === "epoch-minds"
                  ? "bg-zinc-900/40 border-cyan-500/20 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)] hover:bg-zinc-900/60"
                  : "bg-zinc-900/40 border-emerald-500/20 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] hover:bg-zinc-900/60"
              }`}>
                {/* Header: Period, Badges, Role */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5 font-mono text-xs text-zinc-300 font-semibold">
                    <Calendar className={`w-3.5 h-3.5 ${exp.isCurrent ? "text-violet-400" : "text-cyan-400"}`} />
                    <span>{exp.period}</span>
                    {exp.isCurrent && (
                      <span className="px-2.5 py-0.5 rounded-full bg-violet-950/80 border border-violet-500/50 text-violet-300 text-[10px] font-semibold uppercase tracking-wider shadow-[0_0_10px_rgba(139,92,246,0.25)]">
                        Active Role
                      </span>
                    )}
                  </div>

                  {exp.badgeNote && (
                    <span className="font-mono text-[11px] px-3 py-1 rounded-full bg-violet-950/60 border border-violet-500/40 text-violet-300 self-start sm:self-auto font-semibold shadow-sm">
                      {exp.badgeNote}
                    </span>
                  )}
                </div>

                <div className="mb-4">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-violet-200 group-hover:to-cyan-200 transition-all">
                    {exp.role}
                  </h3>
                  <div className="text-sm sm:text-base font-semibold text-zinc-300 mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
                  {exp.summary}
                </p>

                {/* Responsibilities List */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 block font-semibold">
                    Key Responsibilities:
                  </span>
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                      <ChevronRight className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-800">
                  {exp.techTags.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-[11px] font-mono bg-zinc-950/80 border border-zinc-800 text-zinc-300 hover:border-violet-500/40 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
