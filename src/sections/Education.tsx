"use client";

import { motion } from "framer-motion";
import { GraduationCap, CheckCircle2 } from "lucide-react";
import { educations } from "@/data/education";
import SectionHeading from "@/components/SectionHeading";

export default function Education() {
  const beDegree = educations.find((e) => e.isDominant) || educations[0];
  const otherEducations = educations.filter((e) => !e.isDominant);

  return (
    <section id="education" className="py-24 md:py-32 px-6 sm:px-8 relative z-10 bg-[#090a0d]/90">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          number="06"
          tag="ACADEMIC BACKGROUND"
          title="EDUCATION"
          subtitle="Academic foundations in design thinking, human-computer interaction, visual communication, and creative technologies."
        />

        {/* Visually Dominant B.E. Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-zinc-900/50 border border-zinc-800 p-8 sm:p-10 md:p-12 mb-10 overflow-hidden shadow-lg backdrop-blur-md"
        >
          <div className="relative z-10">
            {/* Header Badge & Timeline */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono text-xs font-semibold shadow-sm">
                <GraduationCap className="w-4 h-4 text-zinc-400" />
                <span>PRIMARY DEGREE</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-zinc-400 font-semibold tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{beDegree.period} • {beDegree.status}</span>
              </div>
            </div>

            {/* Degree Title & Institution */}
            <div className="mb-6">
              <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight uppercase">
                {beDegree.degree}
              </h3>
              <div className="text-lg sm:text-xl font-semibold text-zinc-300 mt-1">
                {beDegree.institution}
                <span className="text-zinc-500 font-normal text-sm ml-2">
                  — {beDegree.location}
                </span>
              </div>
            </div>

            {/* Curricular Highlights */}
            <div className="space-y-3 mb-8 max-w-3xl">
              {beDegree.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-zinc-400 shrink-0 mt-1" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Core Academic Focus Badges */}
            <div className="border-t border-zinc-850 pt-6">
              <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3 font-semibold">
                Current Creative Focus:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {beDegree.focusAreas.map((area) => (
                  <span
                    key={area}
                    className="px-3.5 py-1.5 rounded-xl text-xs font-mono bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-700 transition-colors shadow-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Schooling Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherEducations.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-zinc-900/30 border border-zinc-850 hover:border-zinc-750 transition-all duration-300 shadow-sm backdrop-blur-md"
            >
              <div className="flex items-center justify-between font-mono text-xs text-zinc-500 mb-3">
                <span className="text-zinc-300 font-semibold">{edu.period}</span>
                <span>{edu.status}</span>
              </div>

              <h4 className="font-display text-xl font-bold text-white mb-1">
                {edu.degree}
              </h4>
              <div className="text-sm text-zinc-400 mb-4">{edu.institution}</div>

              <div className="space-y-2 text-xs text-zinc-500 border-t border-zinc-850 pt-4">
                {edu.highlights.map((h, i) => (
                  <p key={i}>{h}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
