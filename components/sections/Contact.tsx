"use client";
import { motion } from "motion/react";
import { Mail, Github, Linkedin } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Sparkles } from "@/components/ui/sparkles";
import Link from "next/link";
import DecryptedText from "@/components/reactbits/DecryptedText";
import BlurText from "@/components/reactbits/BlurText";

export default function Contact({ y2 }: { y2: any }) {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-t border-border bg-background" id="contact">
      <Sparkles count={80} />
      <motion.div 
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{ y: y2 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.15]"></div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-12 lg:px-16 relative z-10 text-center">
        <ScrollAnimation>
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-8 h-[1px] bg-muted-foreground"></div>
            <DecryptedText 
              text="04 / WHAT'S NEXT"
              speed={40}
              className="text-muted-foreground font-mono text-sm tracking-widest uppercase"
            />
            <div className="w-8 h-[1px] bg-muted-foreground"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-bold tracking-tighter mb-8 md:mb-10 flex justify-center text-foreground leading-none">
            <BlurText text="Let's Talk." delay={0.2} />
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground/80 mb-8 font-light max-w-2xl mx-auto">
            Available for new opportunities and freelance work. Let&apos;s build something amazing together.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
            <a href="mailto:hariharana1309@gmail.com" className="group flex items-center gap-6 text-muted-foreground hover:text-foreground transition-colors">
              <div className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-secondary transition-all duration-300">
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="text-xl md:text-2xl font-light">hariharana1309@gmail.com</span>
            </a>
          </div>

          <div className="flex justify-center gap-8">
            <Link href="https://github.com/hariharan1309" target="_blank" className="group text-muted-foreground hover:text-foreground transition-colors">
              <div className="p-4 rounded-full border border-transparent hover:border-border hover:bg-secondary/50 transition-all duration-300">
                <Github className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/hari-haran-b59019187/" target="_blank" className="group text-muted-foreground hover:text-foreground transition-colors">
              <div className="p-4 rounded-full border border-transparent hover:border-border hover:bg-secondary/50 transition-all duration-300">
                <Linkedin className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
