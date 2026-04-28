"use client";
import { motion } from "motion/react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { experiences } from "@/lib/portfolioData";
import DecryptedText from "@/components/reactbits/DecryptedText";

export default function Experience({ experienceRef, beamHeight }: { experienceRef: any, beamHeight: any }) {
  return (
    <section className="py-32 relative bg-background" id="experience">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
          <div className="relative h-full">
            <div className="lg:sticky lg:top-32">
              <ScrollAnimation>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-8 h-[1px] bg-muted-foreground"></div>
                  <DecryptedText 
                    text="02 / JOURNEY"
                    speed={40}
                    className="text-muted-foreground font-mono text-sm tracking-widest uppercase"
                  />
                </div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 text-foreground">Experience.</h2>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  My professional journey in crafting digital products and leading frontend teams.
                </p>
              </ScrollAnimation>
            </div>
          </div>

          <div className="relative" ref={experienceRef}>
            {/* Static Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-[1px] bg-border/50"></div>
            
            {/* Animated Tracing Beam */}
            <motion.div 
              className="absolute left-4 md:left-8 top-0 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent shadow-[0_0_10px_color-mix(in_srgb,var(--color-primary)_50%,transparent)] origin-top"
              style={{ height: beamHeight }}
            ></motion.div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <ScrollAnimation key={index} direction="up" delay={index * 0.1}>
                  <div className="relative pl-12 md:pl-28 group py-8">
                    <div className="absolute left-[12px] md:left-[28px] top-10 w-2 h-2 rounded-none bg-border group-hover:bg-primary group-hover:scale-150 transition-all duration-300 ring-4 ring-background z-10 origin-center"></div>
                    
                    <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                      <h3 className="text-2xl font-medium text-foreground/80 group-hover:text-foreground transition-colors duration-300">{exp.role}</h3>
                      <span className="text-muted-foreground/80 font-mono text-sm tracking-wide group-hover:text-muted-foreground transition-colors duration-300">{exp.period}</span>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-6 font-light group-hover:text-foreground/80 transition-colors duration-300">{exp.company}</p>
                    
                    <ul className="space-y-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-all duration-300 group-hover:translate-x-1">
                          <span className="mr-4 text-border mt-1.5">—</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
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
