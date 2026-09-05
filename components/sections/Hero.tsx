"use client";
import { motion, useMotionValue, useMotionTemplate } from "motion/react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Magnetic from "@/components/ui/Magnetic";

import BlurText from "@/components/reactbits/BlurText";
import DecryptedText from "@/components/reactbits/DecryptedText";

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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 md:px-12 lg:px-24 bg-background transition-colors duration-300"
      id="hero"
    >
      {/* Background Halftone screentone texture box behind headline */}
      <div 
        className="absolute top-1/4 left-1/12 w-[340px] md:w-[480px] h-[340px] md:h-[480px] pointer-events-none screentone text-muted-foreground opacity-20 -rotate-6 select-none" 
        aria-hidden="true"
      />

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-4">
            {/* Manga Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="px-2.5 py-1 text-[11px] font-mono tracking-widest uppercase border border-border bg-card text-foreground">
                VOL.01 // COVER
              </span>
              <div className="w-8 h-[2px] bg-[var(--accent-hero)]" />
              <DecryptedText
                text="Frontend Engineer"
                delay={0.8}
                speed={40}
                className="text-muted-foreground font-mono text-xs tracking-[0.2em] uppercase"
              />
            </motion.div>

            {/* Display Headline */}
            <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-tight leading-[0.88] text-foreground flex flex-col uppercase">
              <span className="inline-block transition-transform duration-300 hover:translate-x-1">Hariharan</span>
              <span className="text-muted-foreground inline-block transition-transform duration-300 hover:translate-x-1">A.</span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground font-normal tracking-normal max-w-xl leading-relaxed"
          >
            Crafting fast, pixel-perfect web and native applications with
            Next.js and React Native. High concurrency, local AI inference, and brutalist performance.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-5 pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
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
                <span className="w-2 h-2 ml-3 bg-muted-foreground group-hover:bg-[var(--accent-hero)] transition-colors" />
              </Link>
            </Magnetic>
          </motion.div>

          {/* Mobile Image Display (Hidden on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden pt-8 w-full flex justify-center"
          >
            <div className="relative w-full max-w-[280px] aspect-[4/5] border-2 border-border bg-card p-2 relative">
              {/* Corner brackets */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[var(--accent-hero)]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[var(--accent-hero)]" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[var(--accent-hero)]" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[var(--accent-hero)]" />

              <div className="relative w-full h-full border border-border overflow-hidden">
                <Image
                  src="/Profile.jpg"
                  alt="Hariharan's profile portrait"
                  fill
                  className="object-cover filter grayscale opacity-80"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="pt-2 flex justify-between font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                <span>PORTRAIT // ARCHIVE</span>
                <span>VOL.01</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop 3D Manga Splash Panel */}
        <div style={{ perspective: "1000px" }} className="hidden md:block">
          <motion.div
            initial={{
              opacity: 0,
              y: -50,
              x: 10,
              rotateZ: 2,
              rotateX: 15,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              rotateZ: -2,
              rotateX: 0,
              scale: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 14,
              mass: 1.1,
              delay: 0.2,
            }}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center",
            }}
            className="relative w-[400px] h-[460px] group cursor-pointer"
          >
            {/* Outer Brutalist Frame */}
            <div className="absolute inset-0 bg-card border-2 border-border shadow-2xl transition-colors duration-300 group-hover:border-foreground/40"></div>

            {/* Corner Registration Accents in Current Theme Accent */}
            <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-[var(--accent-hero)] z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
            <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-[var(--accent-hero)] z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
            <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-[var(--accent-hero)] z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>
            <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-[var(--accent-hero)] z-20 transition-all duration-300 group-hover:w-6 group-hover:h-6"></div>

            {/* Technical Header Strip */}
            <div className="absolute top-2 left-4 right-4 flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground z-10">
              <span>FIG. 00 // DEVELOPER_MESH</span>
              <span className="text-muted-foreground/60">60FPS // TFLITE</span>
            </div>

            {/* Inner Image Container */}
            <div
              className="absolute inset-4 top-8 overflow-hidden bg-background border border-border text-foreground"
              onMouseMove={handleMouseMove}
            >
              {/* Base grayscale ink image */}
              <Image
                src="/Profile.jpg"
                alt="Hariharan's profile portrait"
                fill
                className="object-cover filter grayscale opacity-80 transition-opacity duration-500 group-hover:opacity-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-foreground/5 z-10 pointer-events-none"></div>

              {/* Color spotlight with mask */}
              <motion.div
                className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  maskImage: useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                  WebkitMaskImage: useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                }}
              >
                <Image
                  src="/Profile.jpg"
                  alt="Hariharan's profile portrait"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Spotlight Reticle Border */}
              <motion.div
                className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-[var(--accent-hero)]"
                style={{
                  maskImage: useMotionTemplate`radial-gradient(180px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                  WebkitMaskImage: useMotionTemplate`radial-gradient(180px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Chapter Marker Indicator */}
      <motion.div
        className="absolute bottom-8 left-8 md:left-16 flex items-center gap-3"
        style={{ opacity }}
      >
        <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase rotate-[-90deg] origin-left">
          CH.00
        </span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-border to-transparent"></div>
      </motion.div>
    </section>
  );
}
