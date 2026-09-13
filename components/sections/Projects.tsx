"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink, Lock, ArrowUpRight, Cpu, Smartphone, Layout, Server, Sparkles } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { projects } from "@/lib/portfolioData";
import DecryptedText from "@/components/reactbits/DecryptedText";

export default function Projects() {
  const [p0, p1, p2, p3, p4] = projects;

  const tier1Ref = useRef<HTMLDivElement>(null);
  const tier2Ref = useRef<HTMLDivElement>(null);
  const tier3Ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress: s1 } = useScroll({
    target: tier1Ref,
    offset: ["start end", "start 80px"],
  });
  const scale1 = useTransform(s1, [0.3, 1], [0.97, 1]);
  const opacity1 = useTransform(s1, [0.1, 0.7], [0.7, 1]);

  const { scrollYProgress: s2 } = useScroll({
    target: tier2Ref,
    offset: ["start end", "start 120px"],
  });
  const scale2 = useTransform(s2, [0.3, 1], [0.97, 1]);
  const opacity2 = useTransform(s2, [0.1, 0.7], [0.7, 1]);

  const { scrollYProgress: s3 } = useScroll({
    target: tier3Ref,
    offset: ["start end", "start 160px"],
  });
  const scale3 = useTransform(s3, [0.3, 1], [0.97, 1]);
  const opacity3 = useTransform(s3, [0.1, 0.7], [0.7, 1]);

  return (
    <section
      className="py-32 relative border-t-2 border-border bg-background transition-colors duration-300"
      id="projects"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <ScrollAnimation>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase border border-border bg-card text-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[var(--accent-hero)]" />
              <span>ARC.03 // PORTFOLIO</span>
            </span>
            <div className="w-12 h-[2px] bg-[var(--accent-hero)]" />
            <DecryptedText
              text="Selected Works"
              speed={40}
              className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase"
            />
          </div>

          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 text-foreground uppercase leading-none">
            Selected Works.
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl font-normal max-w-3xl mb-16 leading-relaxed">
            Five discrete production chapters showcasing autonomous AI agent orchestration, on-device biometric inference, real-time SaaS architecture, and resilient web infrastructure.
          </p>
        </ScrollAnimation>

        <div className="relative w-full pb-[16vh] lg:pb-[4vh]">
          {/* ========================================================================= */}
          {/* TIER 1: THE MONUMENTAL FLAGSHIP (Full-Width Spread // Project 01)        */}
          {/* ========================================================================= */}
          {p0 && (
            <div
              ref={tier1Ref}
              className="relative lg:sticky top-auto lg:top-[5rem] z-10 mb-12 lg:mb-[24vh] w-full"
            >
              <motion.div
                style={{ scale: scale1, opacity: opacity1 }}
                className="w-full lg:min-h-[540px] bg-card border-2 border-border shadow-2xl relative group overflow-hidden transition-all duration-300 hover:border-foreground/40 will-change-transform flex flex-col justify-between"
              >
                {/* Corner Keyline Accents */}
                <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[var(--accent-hero)] z-30" />
                <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[var(--accent-hero)] z-30" />
                <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[var(--accent-hero)] z-30" />
                <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[var(--accent-hero)] z-30" />

                {/* Technical Header */}
                <div className="flex items-center justify-between px-6 py-2.5 border-b-2 border-border bg-background font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 bg-[var(--accent-hero)] animate-pulse" />
                    <span className="text-foreground font-bold">ARC.01 // {p0.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-card border border-border text-[10px] text-[var(--accent-hero)] font-bold">
                      {/* FLAGSHIP */}
                    </span>
                    <span className="font-mono text-[11px]">CHAPTER 01 OF 05</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 md:p-8 flex-1 items-stretch">
                  {/* Left Column: Narrative & Architecture */}
                  <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-background text-[11px] font-mono text-[var(--accent-hero)] uppercase tracking-wider mb-3">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>{p0.metrics}</span>
                      </div>

                      <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground uppercase mb-3 leading-tight">
                        {p0.title}
                      </h3>

                      <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed mb-4">
                        {p0.description}
                      </p>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {p0.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] font-mono tracking-wider text-foreground uppercase border border-border bg-background px-2.5 py-1"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Architectural Blueprint Canvas */}
                  <div className="lg:col-span-6 border-2 border-border bg-background p-2 relative flex flex-col justify-between overflow-hidden">
                    <div className="flex items-center justify-between pb-2 mb-2 border-b border-border font-mono text-[10px] uppercase text-muted-foreground px-2">
                      <span>// MULTI_AGENT_TOPOLOGY</span>
                      <span className="text-[var(--accent-hero)] font-bold">ARC.01 // PRODUCTION</span>
                    </div>

                    <div className="relative w-full h-[200px] sm:h-[240px] lg:h-[260px] border border-border overflow-hidden bg-[#09090b]">
                      <Image
                        src={p0.image}
                        alt={`${p0.title} architectural blueprint`}
                        fill
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        priority
                      />
                    </div>

                    <div className="pt-2 px-2 flex items-center justify-between font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                      <span>ORCHESTRATION: AUTONOMOUS</span>
                      <span>ARCHITECTURE: SYSTEM_GRAPH</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* TIER 2: ASYMMETRIC EDITORIAL DUO (60 / 40 Split // Chapters 02 & 03)     */}
          {/* ========================================================================= */}
          <div
            ref={tier2Ref}
            className="relative lg:sticky top-auto lg:top-[7.5rem] z-20 mb-12 lg:mb-[24vh] w-full"
          >
            <motion.div
              style={{ scale: scale2, opacity: opacity2 }}
              className="w-full relative will-change-transform"
            >
              {/* Solid matting backdrop so gap doesn't bleed Tier 1 */}
              <div className="absolute inset-0 bg-background -z-10" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Project 02: On-Device Biometrics (7 Cols) */}
                {p1 && (
                  <div className="lg:col-span-7 flex">
                    <div className="w-full h-full lg:min-h-[540px] bg-card border-2 border-border shadow-2xl relative group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-foreground/40">
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--accent-hero)]" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--accent-hero)]" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--accent-hero)]" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--accent-hero)]" />

                      {/* Header */}
                      <div className="flex items-center justify-between px-6 py-2.5 border-b-2 border-border bg-background font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Smartphone className="w-4 h-4 text-[var(--accent-hero)]" />
                          <span className="text-foreground font-bold">ARC.02 // ON-DEVICE AI</span>
                        </div>
                        <span className="font-mono text-[11px]">CHAPTER 02 OF 05</span>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-7 space-y-4">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-border bg-background text-[11px] font-mono text-[var(--accent-hero)] uppercase tracking-wider">
                          <span className="w-1.5 h-1.5 bg-[var(--accent-hero)]" />
                          <span>{p1.metrics}</span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground uppercase leading-tight">
                          {p1.title}
                        </h3>

                        <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed">
                          {p1.description}
                        </p>

                        {/* Simulated Mobile Scanner Viewport */}
                        <div className="border border-border bg-[#09090b] p-2 relative overflow-hidden">
                          <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[210px] border border-border overflow-hidden">
                            <Image
                              src={p1.image}
                              alt={`${p1.title} blueprint`}
                              fill
                              className="object-contain transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 1024px) 100vw, 50vw"
                            />
                          </div>
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {p1.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-mono tracking-wider text-foreground uppercase border border-border bg-background px-2.5 py-1"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Project 03: Gym Force Multi-Tenant SaaS (5 Cols) */}
                {p2 && (
                  <div className="lg:col-span-5 flex">
                    <div className="w-full h-full lg:min-h-[540px] bg-card border-2 border-border shadow-2xl relative group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-foreground/40">
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--accent-hero)]" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--accent-hero)]" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--accent-hero)]" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--accent-hero)]" />

                      {/* Header (Simulated Browser Frame Dots) */}
                      <div className="flex items-center justify-between px-6 py-2.5 border-b-2 border-border bg-background font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5 mr-2">
                            <span className="w-2 h-2 rounded-full bg-red-500/80" />
                            <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                            <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-foreground font-bold">ARC.03 // SAAS</span>
                        </div>
                        <span className="font-mono text-[11px]">CHAPTER 03 OF 05</span>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-7 space-y-4">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-border bg-background text-[11px] font-mono text-[var(--accent-hero)] uppercase tracking-wider">
                          <Layout className="w-3.5 h-3.5" />
                          <span>{p2.metrics}</span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground uppercase leading-tight">
                          {p2.title}
                        </h3>

                        <p className="text-sm sm:text-base text-muted-foreground font-normal leading-relaxed">
                          {p2.description}
                        </p>

                        {/* Graphic Container */}
                        <div className="border border-border bg-[#09090b] p-2 relative overflow-hidden">
                          <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[210px] border border-border overflow-hidden">
                            <Image
                              src={p2.image}
                              alt={`${p2.title} blueprint`}
                              fill
                              className="object-contain transition-transform duration-700 group-hover:scale-105"
                              sizes="(max-width: 1024px) 100vw, 40vw"
                            />
                          </div>
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {p2.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-mono tracking-wider text-foreground uppercase border border-border bg-background px-2.5 py-1"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* ========================================================================= */}
          {/* TIER 3: SYSTEMS ARCHITECTURE INDEX (50 / 50 Split // Chapters 04 & 05)    */}
          {/* ========================================================================= */}
          <div
            ref={tier3Ref}
            className="relative lg:sticky top-auto lg:top-[10rem] z-30 mb-12 lg:mb-[16vh] w-full"
          >
            <motion.div
              style={{ scale: scale3, opacity: opacity3 }}
              className="w-full relative will-change-transform"
            >
              {/* Solid matting backdrop so gap doesn't bleed Tier 2 */}
              <div className="absolute inset-0 bg-background -z-10" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Project 04: StayCation */}
                {p3 && (
                  <div className="flex">
                    <div className="w-full h-full lg:min-h-[540px] bg-card border-2 border-border shadow-2xl relative group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-foreground/40">
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--accent-hero)]" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--accent-hero)]" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--accent-hero)]" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--accent-hero)]" />

                      {/* Header */}
                      <div className="flex items-center justify-between px-6 py-2.5 border-b-2 border-border bg-background font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        <span className="text-foreground font-bold">ARC.04 // FULL-STACK</span>
                        <span className="font-mono text-[11px]">CHAPTER 04 OF 05</span>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-7 space-y-4">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-border bg-background text-[11px] font-mono text-[var(--accent-hero)] uppercase tracking-wider">
                          <span>{p3.metrics}</span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground uppercase">
                          {p3.title}
                        </h3>

                        <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                          {p3.description}
                        </p>

                        {/* Screenshot Frame */}
                        <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[210px] border border-border overflow-hidden bg-background">
                          <Image
                            src={p3.image}
                            alt={`${p3.title} thumbnail`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {p3.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-mono tracking-wider text-foreground uppercase border border-border bg-background px-2.5 py-1"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="p-6 pt-4 border-t border-border flex flex-wrap gap-3">
                        {p3.link && (
                          <Link
                            href={p3.link}
                            target="_blank"
                            className="btn-tactile inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer"
                          >
                            <span>Live Preview</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                        )}
                        {p3.github && (
                          <Link
                            href={p3.github}
                            target="_blank"
                            className="btn-tactile inline-flex items-center gap-2 bg-card border-2 border-border text-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-card/80 cursor-pointer"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Project 05: Subscription Engine */}
                {p4 && (
                  <div className="flex">
                    <div className="w-full h-full lg:min-h-[540px] bg-card border-2 border-border shadow-2xl relative group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-foreground/40">
                      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--accent-hero)]" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--accent-hero)]" />
                      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--accent-hero)]" />
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--accent-hero)]" />

                      {/* Header */}
                      <div className="flex items-center justify-between px-6 py-2.5 border-b-2 border-border bg-background font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        <span className="text-foreground font-bold">ARC.05 // BACKEND SYSTEMS</span>
                        <span className="font-mono text-[11px]">CHAPTER 05 OF 05</span>
                      </div>

                      {/* Content */}
                      <div className="p-6 md:p-7 space-y-4">
                        <div className="inline-flex items-center gap-2 px-2.5 py-1 border border-border bg-background text-[11px] font-mono text-[var(--accent-hero)] uppercase tracking-wider">
                          <Server className="w-3.5 h-3.5" />
                          <span>{p4.metrics}</span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground uppercase">
                          {p4.title}
                        </h3>

                        <p className="text-sm text-muted-foreground font-normal leading-relaxed">
                          {p4.description}
                        </p>

                        {/* Schematic Frame */}
                        <div className="relative w-full h-[180px] sm:h-[200px] lg:h-[210px] border border-border overflow-hidden bg-[#09090b]">
                          <Image
                            src={p4.image}
                            alt={`${p4.title} schematic`}
                            fill
                            className="object-contain transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {p4.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-[10px] font-mono tracking-wider text-foreground uppercase border border-border bg-background px-2.5 py-1"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="p-6 pt-4 border-t border-border flex flex-wrap gap-3">
                        {p4.github && (
                          <Link
                            href={p4.github}
                            target="_blank"
                            className="btn-tactile inline-flex items-center gap-2 bg-card border-2 border-border text-foreground px-5 py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-card/80 cursor-pointer"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Source Code</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
