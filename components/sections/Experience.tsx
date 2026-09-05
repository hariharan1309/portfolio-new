"use client";
import React from "react";
import { motion } from "motion/react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { experiences } from "@/lib/portfolioData";
import DecryptedText from "@/components/reactbits/DecryptedText";

export default function Experience({
  experienceRef,
  beamHeight,
}: {
  experienceRef: any;
  beamHeight: any;
}) {
  return (
    <section
      className="py-32 relative border-t-2 border-border bg-background transition-colors duration-300"
      id="experience"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-[1fr_2.2fr] gap-12 lg:gap-16">
          {/* Sticky Left Column: Chapter Title & Archive Context */}
          <div className="relative h-full">
            <div className="lg:sticky lg:top-28">
              <ScrollAnimation>
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase border border-border bg-card text-foreground">
                    CHRONICLE / 02
                  </span>
                  <div className="w-8 h-[2px] bg-[var(--accent-chronicle)]" />
                  <DecryptedText
                    text="Journey"
                    speed={40}
                    className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase"
                  />
                </div>

                <h2 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 text-foreground uppercase leading-none">
                  Experience.
                </h2>

                <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-sm mb-8 font-normal">
                  A chaptered chronicle of engineering production systems, mentoring engineers, and deploying real-time applications across web and mobile.
                </p>

                {/* Tactical Status Tag */}
                <div className="hidden lg:inline-flex items-center gap-2.5 px-3.5 py-2 border-2 border-border bg-card font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-none bg-[var(--accent-chronicle)]" />
                  <span>TOTAL ENTRIES: 0{experiences.length} CHAPTERS</span>
                </div>
              </ScrollAnimation>
            </div>
          </div>

          {/* Right Column: Chaptered Timeline */}
          <div className="relative" ref={experienceRef}>
            {/* Base Vertical Ink Spine */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[2px] bg-border" />

            {/* Dynamic Tracing Ink Beam */}
            <motion.div
              className="absolute left-4 md:left-8 top-0 w-[2px] bg-[var(--accent-chronicle)] origin-top shadow-[0_0_8px_rgba(200,160,80,0.3)]"
              style={{ height: beamHeight }}
            />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ScrollAnimation
                  key={exp.company + exp.period}
                  direction="up"
                  delay={index * 0.08}
                >
                  <div className="relative pl-12 md:pl-24 group py-4">
                    {/* Tactical Chapter Node */}
                    <div
                      className="absolute left-[11px] md:left-[27px] top-6 w-3 h-3 rounded-none bg-background border-2 border-border transition-all duration-300 group-hover:border-[var(--accent-chronicle)] group-hover:bg-foreground z-10"
                    />

                    {/* Chapter Box Container */}
                    <div className="border-2 border-border bg-card p-6 md:p-8 transition-colors duration-300 group-hover:border-foreground/40 relative">
                      {/* Top Meta Strip */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-border font-mono text-xs uppercase tracking-widest text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <span className="text-foreground font-bold">
                            CHAPTER 0{index + 1}
                          </span>
                          <span className="text-muted-foreground/60">//</span>
                          <span className="text-muted-foreground">{exp.period}</span>
                        </span>
                        <div className="w-4 h-[1px] bg-border" />
                      </div>

                      {/* Role & Company Headings */}
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-1 transition-colors">
                        {exp.role}
                      </h3>

                      <p className="text-sm md:text-base font-mono text-muted-foreground mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[var(--accent-chronicle)]" />
                        <span>{exp.company}</span>
                      </p>

                      {/* Responsibilities List with Ink Dashes */}
                      <ul className="space-y-3 pt-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-muted-foreground text-sm md:text-base leading-relaxed group-hover:text-foreground transition-colors"
                          >
                            <span className="mr-3 text-muted-foreground/60 font-mono select-none">
                              —
                            </span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
