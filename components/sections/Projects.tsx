"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { projects } from "@/lib/portfolioData";
import DecryptedText from "@/components/reactbits/DecryptedText";

export default function Projects({ activeProject, setActiveProject }: { activeProject: number, setActiveProject: (index: number) => void }) {
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

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start relative">
          {/* Left Side: Scrolling Text */}
          <div className="space-y-24 md:space-y-32 pb-32">
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                onViewportEnter={() => setActiveProject(index)}
                viewport={{ margin: "-50% 0px -50% 0px" }}
                className={`transition-opacity duration-500 ${activeProject === index ? 'opacity-100' : 'opacity-30 hover:opacity-50'}`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-muted-foreground font-mono text-sm tracking-widest">0{index + 1}</div>
                  <span className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-secondary/50 text-foreground/80 backdrop-blur-md">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6">{project.title}</h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono tracking-wider text-muted-foreground uppercase border border-border px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  {project.link && (
                    <Link 
                      href={project.link}
                      target="_blank"
                      className="group/link inline-flex items-center text-foreground font-medium tracking-wide hover:text-primary transition-colors"
                    >
                      <span className="relative overflow-hidden">
                        <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-full">Live Preview</span>
                        <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover/link:translate-y-0">Live Preview</span>
                      </span>
                      <ExternalLink className="w-4 h-4 ml-2 -translate-x-2 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-300" />
                    </Link>
                  )}
                  {project.github && (
                    <Link 
                      href={project.github}
                      target="_blank"
                      className="group/link inline-flex items-center text-muted-foreground font-medium tracking-wide hover:text-foreground transition-colors"
                    >
                      <span className="relative overflow-hidden">
                        <span className="inline-block transition-transform duration-300 group-hover/link:-translate-y-full">Source Code</span>
                        <span className="absolute left-0 top-0 inline-block translate-y-full transition-transform duration-300 group-hover/link:translate-y-0">Source Code</span>
                      </span>
                      <Github className="w-4 h-4 ml-2 -translate-x-2 opacity-0 group-hover/link:translate-x-0 group-hover/link:opacity-100 transition-all duration-300" />
                    </Link>
                  )}
                </div>
                
                {/* Mobile Image (Visible only on small screens) */}
                <div className="mt-12 lg:hidden relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary/50 border border-border/50 p-2 backdrop-blur-sm">
                  <div className="relative w-full h-full rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-background/20 mix-blend-overlay z-10"></div>
                    <Image
                      src={typeof project.image === 'string' ? project.image : "https://picsum.photos/seed/" + project.title.replace(/\s/g, '') + "/800/450"}
                      alt={project.title}
                      fill
                      className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Sticky Image (Desktop only) */}
          <div className="hidden lg:block sticky top-32 h-[600px] rounded-3xl overflow-hidden bg-secondary/50 border border-border/50 p-4 backdrop-blur-sm shadow-2xl">
            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${activeProject === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'}`}
                >
                  <div className="absolute inset-0 bg-background/20 mix-blend-overlay z-10"></div>
                  <Image
                    src={typeof project.image === 'string' ? project.image : "https://picsum.photos/seed/" + project.title.replace(/\s/g, '') + "/800/450"}
                    alt={project.title}
                    fill
                    className="object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
