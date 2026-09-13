"use client";
import { motion } from "motion/react";
import { Download, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import Magnetic from "@/components/ui/Magnetic";
import DecryptedText from "@/components/reactbits/DecryptedText";
import { usePortfolioMode } from "@/components/PortfolioModeProvider";

export default function Hero({
  handleDownload,
  y1,
  y2,
  opacity,
}: {
  handleDownload: () => void;
  y1: any;
  y2: any;
  opacity: any;
}) {
  const { isJobMode } = usePortfolioMode();

  return (
    <section
      className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-32 pb-28 px-6 md:px-12 lg:px-24 bg-background transition-colors duration-300"
      id="hero"
    >
      {/* Background Halftone screentone texture box behind headline */}
      <div
        className="absolute top-1/4 right-1/12 w-[340px] md:w-[540px] h-[340px] md:h-[540px] pointer-events-none screentone text-muted-foreground opacity-15 rotate-6 select-none"
        aria-hidden="true"
      />

      {/* Ambient Corner Registration Crosshairs */}
      {/* <div className="absolute top-12 left-6 md:left-12 font-mono text-[10px] text-muted-foreground/40 select-none hidden sm:block">
        + 11.9708° N, 78.1460° E [SALEM_HQ]
      </div>
      <div className="absolute top-12 right-6 md:right-12 font-mono text-[10px] text-muted-foreground/40 select-none hidden sm:block">
        REV.2026 // ED.A2
      </div> */}

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-10">
        {/* Eyebrow Tag & Mode Switch Visualizer */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center gap-3"
        >
          <span className="px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase border border-border bg-card text-foreground flex items-center gap-2">
            {isJobMode ? (
              <>
                <span className="w-2 h-2 rounded-none bg-emerald-500 animate-pulse" />
                <span>AVAILABLE FOR HIRE // 2026</span>
              </>
            ) : (
              <>
                <span className="w-2 h-2 rounded-none bg-[var(--accent-hero)]" />
                <span>VOL.01 // COVER ARCHIVE</span>
              </>
            )}
          </span>
          <div className="w-8 h-[2px] bg-[var(--accent-hero)]" />
          <DecryptedText
            text="Frontend & Mobile Engineer"
            delay={0.6}
            speed={35}
            className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase font-medium"
          />
        </motion.div>

        {/* Monumental Monolithic Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-2"
        >
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[11rem] font-bold tracking-tight leading-[0.84] text-foreground uppercase select-none">
            <span className="transition-transform duration-300 hover:translate-x-1">
              Hariharan
            </span>
            <span className="text-muted-foreground ml-[1vw] transition-transform duration-300 hover:translate-x-1">
              <span className="text-[var(--accent-hero)] animate-caret-blink transition-all duration-700">.</span>A
            </span>
          </h1>
        </motion.div>

        {/* Narrative Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-normal tracking-normal max-w-3xl leading-relaxed"
        >
          Crafting high-throughput web platforms and native mobile apps with
          Next.js, Node, and React Native. Specializing in on-device AI inference,
          multi-tenant SaaS architectures, and high-performance engineering.
        </motion.p>

        {/* Tactile CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-5 pt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <Magnetic intensity={0.15}>
            <button
              onClick={handleDownload}
              className="btn-tactile group relative inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm font-bold tracking-wider uppercase hover:border-[var(--accent-hero)] cursor-pointer"
            >
              <Download className="w-4 h-4 mr-2 transition-transform duration-200 group-hover:-translate-y-0.5" />
              Download CV
            </button>
          </Magnetic>
          <Magnetic intensity={0.15}>
            <Link
              href="#contact"
              className="btn-tactile group relative inline-flex items-center justify-center bg-card border-2 border-border text-foreground px-8 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-card/80 hover:border-foreground/40 cursor-pointer"
            >
              Let&apos;s Talk
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[var(--accent-hero)]" />
            </Link>
          </Magnetic>
        </motion.div>

        {/* Monolithic Editorial Telemetry Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="pt-8 border-t border-border grid grid-cols-2 lg:grid-cols-4 gap-6 font-mono text-xs uppercase"
        >
          <div className="space-y-1">
            <div className="text-[10px] text-muted-foreground tracking-widest">
              01 // SPECIALTY
            </div>
            <div className="text-foreground font-semibold text-sm">
              Frontend & Mobile
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] text-muted-foreground tracking-widest">
              02 // CORE STACK
            </div>
            <div className="text-foreground font-semibold text-sm">
              Next.js · React · React Native
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] text-muted-foreground tracking-widest">
              03 // EDGE SYSTEMS
            </div>
            <div className="text-foreground font-semibold text-sm">
              TFLite · Biometric
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[10px] text-muted-foreground tracking-widest">
              04 // AVAILABILITY
            </div>
            <div className="text-foreground font-semibold text-sm flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[var(--accent-hero)]" />
              Open to Relocation
            </div>
          </div>
        </motion.div>
      </div>

      {/* Chapter Marker Indicator */}
      <motion.div
        className="absolute bottom-8 left-8 md:left-16 flex items-center gap-3 pointer-events-none select-none"
        style={{ opacity }}
      >
        <span className="text-[10px] font-mono tracking-widest text-muted-foreground/40 uppercase rotate-[-90deg] origin-left translate-y-8">
          CH.00
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-border to-transparent"></div>
      </motion.div>
    </section>
  );
}
