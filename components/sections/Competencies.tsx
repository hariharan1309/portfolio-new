"use client";
import React from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { skills } from "@/lib/portfolioData";
import { TrueFocus } from "@/components/ui/TrueFocus";
import { GraduationCap, Code2, Cpu, Palette, Database } from "lucide-react";
import DecryptedText from "@/components/reactbits/DecryptedText";

export default function Competencies() {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return <Code2 className="w-4 h-4 text-foreground" />;
      case "Mobile & AI Integration":
        return <Cpu className="w-4 h-4 text-foreground" />;
      case "UI & Styling":
        return <Palette className="w-4 h-4 text-foreground" />;
      default:
        return <Database className="w-4 h-4 text-foreground" />;
    }
  };

  return (
    <section
      className="py-32 relative border-t-2 border-border bg-background transition-colors duration-300"
      id="competencies"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <ScrollAnimation>
          <div className="flex items-center gap-3 mb-4">
            <span className="px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase border border-border bg-card text-foreground">
              ARCHIVE // 01
            </span>
            <div className="w-8 h-[2px] bg-[var(--accent-chronicle)]" />
            <DecryptedText
              text="Capabilities"
              speed={40}
              className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase"
            />
          </div>

          <h2 className="font-display text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 text-foreground uppercase leading-none">
            Capabilities.
          </h2>

          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mb-16 font-normal">
            Specialized engineering capabilities across frontend performance, on-device mobile machine learning inference, and scalable full-stack services.
          </p>
        </ScrollAnimation>

        {/* Brutalist Stat-Block Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Academic Record Card */}
          <ScrollAnimation
            direction="up"
            className="md:col-span-2 lg:col-span-2 group border-2 border-border bg-card p-8 md:p-10 relative overflow-hidden transition-colors duration-300 hover:border-foreground/40"
          >
            {/* Corner registration marks */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--accent-chronicle)]" />
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--accent-chronicle)]" />
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--accent-chronicle)]" />
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--accent-chronicle)]" />

            <div className="flex flex-col justify-between h-full relative z-10">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-none border border-border bg-background text-foreground">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
                    ACADEMIC CREDENTIALS // B.E.
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Bachelor of Engineering — Electronics & Communication (ECE)
                </h3>
                <p className="text-base text-muted-foreground font-normal">
                  KPR Institute of Engineering and Technology
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                <span className="text-muted-foreground">COIMBATORE, INDIA</span>
                <span className="px-3 py-1 border border-border bg-background text-foreground uppercase tracking-wider w-fit">
                  08/2019 — 04/2023
                </span>
              </div>
            </div>
          </ScrollAnimation>

          {/* Ability Chip Groups */}
          {skills.map((skillGroup, idx) => (
            <ScrollAnimation
              key={skillGroup.category}
              direction="up"
              delay={0.08 * (idx + 1)}
              className="group border-2 border-border bg-card p-8 relative overflow-hidden transition-colors duration-300 hover:border-foreground/40"
            >
              {/* Corner registration mark */}
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-border group-hover:border-[var(--accent-chronicle)] transition-colors" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-border font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  <div className="p-2 border border-border bg-background">
                    {getCategoryIcon(skillGroup.category)}
                  </div>
                  <span className="text-foreground font-semibold">
                    {skillGroup.category}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="btn-tactile px-3 py-1.5 border border-border bg-background text-foreground text-xs font-mono tracking-tight hover:border-[var(--accent-chronicle)] hover:text-foreground cursor-default select-none transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          ))}

          {/* Extra Block: TrueFocus Motto Banner */}
          <ScrollAnimation
            direction="up"
            delay={0.2}
            className="md:col-span-2 lg:col-span-3 border-2 border-border bg-card/60 p-8 md:p-12 relative overflow-hidden transition-colors duration-300"
          >
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                PHILOSOPHY // CORE OPERATING PRINCIPLE
              </span>
              <TrueFocus
                sentence="Always learning, always building."
                blurAmount={3}
                borderColor="var(--accent-chronicle)"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
