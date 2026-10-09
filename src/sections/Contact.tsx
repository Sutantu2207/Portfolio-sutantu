"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { personalData } from "@/data/personal";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 md:py-36 px-6 sm:px-8 relative overflow-hidden bg-[#090a0d] z-10">
      {/* Subtle Ambient Vignette */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full bg-white/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6 font-mono text-xs tracking-widest text-zinc-400 uppercase">
          <span className="text-zinc-600 font-bold">[08]</span>
          <span className="font-semibold text-zinc-300">INITIATE DIALOGUE</span>
          <div className="h-[1px] w-8 bg-zinc-800" />
        </div>

        {/* Dramatic Minimalist Typography */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white uppercase tracking-tighter leading-[0.92]"
          >
            LET&apos;S BUILD
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] as const }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 uppercase tracking-tighter leading-[0.92] drop-shadow-[0_0_35px_rgba(168,85,247,0.3)]"
          >
            SOMETHING GREAT.
          </motion.div>
        </div>

        {/* Supporting Text */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 font-normal leading-relaxed max-w-2xl mb-12">
          Have an idea, creative project, or design opportunity? Let&apos;s talk about brand visual identity, graphic design, and creating standout experiences.
        </p>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border border-violet-500/30 hover:border-violet-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-300 flex flex-col justify-between group shadow-sm backdrop-blur-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Mail className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase text-violet-300 block mb-1 font-semibold">
                Direct Email
              </span>
              <a
                href={`mailto:${personalData.email}`}
                className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors break-all"
              >
                {personalData.email}
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
              <a
                href={`mailto:${personalData.email}`}
                className="text-xs font-mono text-cyan-300 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border border-emerald-500/30 hover:border-emerald-400 hover:shadow-[0_0_30px_rgba(16,185,129,0.25)] transition-all duration-300 flex flex-col justify-between group shadow-sm backdrop-blur-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase text-emerald-300 block mb-1 font-semibold">
                Mobile Line
              </span>
              <a
                href={`tel:${personalData.phone.replace(/\s+/g, "")}`}
                className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300 transition-colors"
              >
                {personalData.phone}
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <button
                onClick={handleCopyPhone}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>
              <a
                href={`tel:${personalData.phone.replace(/\s+/g, "")}`}
                className="text-xs font-mono text-emerald-300 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Call Directly</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Portfolio Location Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/50 border border-cyan-500/30 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] transition-all duration-300 flex flex-col justify-between group shadow-sm backdrop-blur-md">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-md">
                <GithubIcon className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase text-cyan-300 block mb-1 font-semibold">
                Design &amp; Portfolio
              </span>
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors"
              >
                {personalData.github}
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalData.location}</span>
              </div>
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-cyan-300 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Explore</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimalist CTA Ribbon with Iridescent Glow */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-violet-950/50 via-zinc-900/90 to-cyan-950/50 border border-violet-500/30 shadow-[0_0_40px_rgba(139,92,246,0.2)] backdrop-blur-xl">
          <div>
            <div className="text-xl sm:text-3xl font-black font-display text-white tracking-tight">
              Ready to create something bold together?
            </div>
            <p className="text-xs sm:text-sm text-zinc-300 mt-1 font-mono">
              Direct response within 24 hours. Open for Graphic &amp; Visual Design roles.
            </p>
          </div>

          <MagneticButton href={`mailto:${personalData.email}`} variant="primary">
            <span className="font-bold text-base">GET IN TOUCH</span>
            <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
