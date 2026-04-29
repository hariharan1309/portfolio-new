"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { projects } from "@/lib/portfolioData";
import DecryptedText from "@/components/reactbits/DecryptedText";
import { cn } from "@/lib/utils";

const ProjectCard = ({ project, index, total }: { project: any, index: number, total: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: [`start ${100 + index * 40}px`, `start -100%`] 
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  const hasImage = project.title === "StayCation" || (project.image && !project.image.includes("placeholder"));
  const stickyTop = 100 + index * 40;

  return (
    <div 
      ref={cardRef}
      className="sticky w-full z-10" 
      style={{ top: `${stickyTop}px`, marginBottom: index === total - 1 ? '0' : '40vh' }}
    >
      <motion.div 
        style={{ scale, opacity }}
        className="w-full rounded-md bg-secondary/80 backdrop-blur-xl border border-border shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden will-change-transform origin-top"
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="w-full flex flex-col md:flex-row min-h-[500px]">
          {/* Content */}
          <div className={cn(
            "flex flex-col justify-center p-4 md:p-6 lg:p-10 relative z-20",
            hasImage ? "md:w-1/2" : "w-full items-center text-center max-w-4xl mx-auto"
          )}>
            <div className={cn("flex gap-4 mb-6", !hasImage && "justify-center")}>
               <span className="px-4 py-1.5 text-xs font-semibold rounded-full border border-border bg-background/50 text-foreground/80 backdrop-blur-md uppercase tracking-wider">
                 {project.type}
               </span>
               <span className="text-muted-foreground font-mono text-sm tracking-widest pl-2 border-l border-border flex items-center">
                 0{index + 1}
               </span>
            </div>
            
            <h3 className={cn("text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-6", !hasImage && "md:text-6xl")}>
              {project.title}
            </h3>
            
            <p className={cn("text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed font-light", !hasImage && "text-xl md:text-2xl max-w-3xl mx-auto")}>
              {project.description}
            </p>
            
            <div className={cn("flex flex-wrap gap-3 mb-12", !hasImage && "justify-center")}>
              {project.technologies.map((tech: string) => (
                <span key={tech} className="text-xs font-mono tracking-widest text-muted-foreground uppercase border border-border/50 bg-background/30 px-4 py-1.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className={cn("flex gap-8", !hasImage && "justify-center")}>
              {project.link && (
                <Link href={project.link} target="_blank" className="group/link inline-flex items-center text-foreground font-medium tracking-wide hover:text-primary transition-colors text-sm uppercase">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-full">Live Preview</span>
                    <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover/link:translate-y-0 text-primary">Live Preview</span>
                  </span>
                  <ExternalLink className="w-4 h-4 ml-2 -translate-x-2 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-300" />
                </Link>
              )}
              {project.github && (
                <Link href={project.github} target="_blank" className="group/link inline-flex items-center text-muted-foreground font-medium tracking-wide hover:text-foreground transition-colors text-sm uppercase">
                  <span className="relative overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-full">Source Code</span>
                    <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover/link:translate-y-0 text-foreground">Source Code</span>
                  </span>
                  <Github className="w-4 h-4 ml-2 -translate-x-2 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-300" />
                </Link>
              )}
            </div>
          </div>
          
          {hasImage && (
            <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full overflow-hidden p-3 md:p-6 pb-0 group">
               <div className="w-full h-full min-h-[400px] relative rounded-t-2xl md:rounded-t-3xl md:rounded-b-none border border-border border-b-0 overflow-hidden bg-background">
                  <div className="absolute inset-0 bg-background/20 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-0" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top filter grayscale group-hover:grayscale-[10%] transition-all duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
               </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="py-32 relative border-t border-border bg-background" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <ScrollAnimation>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-muted-foreground"></div>
            <DecryptedText 
              text="03 / PORTFOLIO"
              speed={40}
              className="text-muted-foreground font-mono text-sm tracking-widest uppercase"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tighter mb-16 md:mb-24 text-foreground">Selected Works.</h2>
        </ScrollAnimation>

        <div className="relative w-full max-w-6xl mx-auto pb-[10vh]">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
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
