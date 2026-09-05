"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { projects } from "@/lib/portfolioData";
import DecryptedText from "@/components/reactbits/DecryptedText";

const ARC_ACCENTS = [
  "var(--accent-project-1)", // Arc 1: Crimson (Biometrics)
  "var(--accent-project-2)", // Arc 2: Azure (Gym Force)
  "var(--accent-project-3)", // Arc 3: Gold (StayCation)
  "var(--accent-project-4)", // Arc 4: Violet (Subscription Tracker)
];

const ProjectCard = ({
  project,
  index,
  total,
}: {
  project: any;
  index: number;
  total: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const accentColor = ARC_ACCENTS[index % ARC_ACCENTS.length];

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0.4, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.8], [0.6, 1]);

  return (
    <div
      ref={cardRef}
      className="sticky w-full z-10"
      style={{
        top: `calc(5.5rem + ${index * 1.5}rem)`,
        marginBottom: index === total - 1 ? "0" : "28vh",
      }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="w-full rounded-none bg-card border-2 border-border shadow-2xl overflow-hidden will-change-transform relative group transition-colors duration-300"
      >
        {/* Isolated Corner Halftone Texture (Capped at 0.08 opacity) */}
        <div
          className="absolute -top-12 -right-12 w-48 h-48 screentone text-muted-foreground opacity-[var(--halftone-opacity)] pointer-events-none select-none"
          aria-hidden="true"
        />

        {/* Corner Registration Accents in Arc Spot Color */}
        <div
          className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 z-30 transition-all duration-300 group-hover:w-6 group-hover:h-6"
          style={{ borderColor: accentColor }}
        />
        <div
          className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 z-30 transition-all duration-300 group-hover:w-6 group-hover:h-6"
          style={{ borderColor: accentColor }}
        />
        <div
          className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 z-30 transition-all duration-300 group-hover:w-6 group-hover:h-6"
          style={{ borderColor: accentColor }}
        />
        <div
          className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 z-30 transition-all duration-300 group-hover:w-6 group-hover:h-6"
          style={{ borderColor: accentColor }}
        />

        {/* Technical Manga Header Strip */}
        <div className="flex items-center justify-between px-6 py-3 border-b-2 border-border bg-background font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <div className="flex items-center gap-3">
            <span
              className="w-2.5 h-2.5 inline-block"
              style={{ backgroundColor: accentColor }}
            />
            <span className="text-foreground font-bold">
              ARC.0{index + 1} // {project.type}
            </span>
          </div>
          <span className="text-muted-foreground font-mono text-[11px]">
            CHAPTER 0{index + 1} OF 0{total}
          </span>
        </div>

        {/* Panel Content Grid */}
        <div className="w-full flex flex-col lg:flex-row min-h-[460px]">
          {/* Text & Specs Column */}
          <div className="flex-1 flex flex-col justify-between p-6 md:p-10 relative z-20">
            <div>
              <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground uppercase mb-4 leading-none">
                {project.title}
              </h3>

              <p className="text-base sm:text-lg text-muted-foreground font-normal leading-relaxed mb-8 max-w-xl">
                {project.description}
              </p>

              {/* Tactical Tech Chips */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono tracking-wider text-foreground uppercase border border-border bg-background px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tactile Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
              {project.link && (
                <Link
                  href={project.link}
                  target="_blank"
                  className="btn-tactile inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-xs font-bold uppercase tracking-wider cursor-pointer hover:border-foreground"
                >
                  <span>Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              )}
              {project.github && (
                <Link
                  href={project.github}
                  target="_blank"
                  className="btn-tactile inline-flex items-center gap-2 bg-card border-2 border-border text-foreground px-6 py-3 text-xs font-semibold uppercase tracking-wider hover:bg-card/80 hover:border-foreground/40 cursor-pointer"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Source Code</span>
                </Link>
              )}
              {!project.link && !project.github && (
                <span className="inline-flex items-center px-4 py-2 border border-border text-[11px] font-mono text-muted-foreground uppercase tracking-wider">
                  Internal Production Deployment
                </span>
              )}
            </div>
          </div>

          {/* Visual Blueprint / Graphic Panel */}
          <div className="lg:w-[48%] relative min-h-[300px] lg:min-h-full border-t-2 lg:border-t-0 lg:border-l-2 border-border bg-background overflow-hidden flex items-center justify-center p-4">
            <div className="relative w-full h-full min-h-[320px] lg:min-h-[420px] border border-border overflow-hidden bg-background">
              <Image
                src={project.image}
                alt={`${project.title} architectural blueprint`}
                fill
                className="object-contain lg:object-cover filter grayscale contrast-125 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-background/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  return (
    <section
      className="py-32 relative border-t-2 border-border bg-background transition-colors duration-300"
      id="projects"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <ScrollAnimation>
          <div className="flex items-center gap-4 mb-4">
            <span className="px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase border border-border bg-card text-foreground">
              ARC.03 // PORTFOLIO
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

          <p className="text-muted-foreground text-lg md:text-xl font-normal max-w-2xl mb-16 leading-relaxed">
            Four discrete production chapters showcasing on-device machine learning inference, real-time SaaS architecture, and resilient web infrastructure.
          </p>
        </ScrollAnimation>

        <div className="relative w-full max-w-6xl mx-auto pb-[12vh]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              total={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
