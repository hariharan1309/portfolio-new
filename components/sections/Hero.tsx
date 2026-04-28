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

export default function Hero({ handleDownload, y1, y2, opacity }: { handleDownload: () => void, y1: any, y2: any, opacity: any }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-6 md:px-12 lg:px-24
    " id="hero">
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{ y: y1, opacity }}
      >
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.15] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.15]" style={{ animationDelay: "2s" }}></div>
      </motion.div>

      <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex-1 space-y-8"
        >
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-[1px] bg-muted-foreground"></div>
              <DecryptedText 
                text="Frontend Engineer" 
                delay={1.2} 
                speed={50}
                className="text-muted-foreground font-mono text-sm tracking-widest uppercase"
              />
            </motion.div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter leading-[0.9] text-foreground flex flex-col">
              <BlurText text="Hariharan" delay={0.3} />
              <BlurText text="A." delay={0.6} className="text-muted-foreground" />
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl text-muted-foreground font-light tracking-wide max-w-xl leading-relaxed"
          >
            Crafting intuitive, pixel-perfect digital experiences with Next.js, React, and TypeScript.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Magnetic intensity={0.2}>
              <Button
                onClick={handleDownload}
                className="group relative overflow-hidden bg-primary text-primary-foreground rounded-full px-8 py-7 text-sm font-medium tracking-wide transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_8px_color-mix(in_srgb,var(--color-primary)_30%,transparent)]"
              >
                <motion.div
                  className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent z-0"
                  animate={{ translateX: ["-100%", "200%"] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: "linear", repeatDelay: 1 }}
                />
                <span className="relative z-10 flex items-center">
                  <Download className="w-4 h-4 mr-2 group-hover:-translate-y-1 group-hover:opacity-0 transition-all duration-300" />
                  <Download className="w-4 h-4 mr-2 absolute left-0 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300" />
                  Download CV
                </span>
              </Button>
            </Magnetic>
            <Magnetic intensity={0.2}>
              <Link
                href="#contact"
                className="group relative overflow-hidden bg-secondary/40 backdrop-blur-md border border-border text-foreground rounded-full px-8 py-7 text-sm font-medium tracking-wide transition-all duration-500 hover:scale-105 hover:bg-secondary/80 hover:border-muted-foreground hover:shadow-[0_0_30px_4px_color-mix(in_srgb,var(--color-primary)_20%,transparent)] flex items-center justify-center cursor-pointer"
              >
                <span className="relative z-10 flex items-center">
                  Let&apos;s Talk
                  <div className="w-2 h-2 rounded-full bg-muted-foreground ml-3 group-hover:bg-foreground group-hover:scale-150 transition-all duration-300"></div>
                </span>
              </Link>
            </Magnetic>
          </motion.div>

          {/* Mobile Image Display (Hidden on Desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden pt-12"
          >
            <div className="relative w-full max-w-[320px] aspect-square rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-background p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/Profile.jpg"
                  alt="Hariharan's profile"
                  fill
                  className="object-cover filter grayscale opacity-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-background/20 mix-blend-overlay"></div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div style={{ perspective: "1000px" }} className="hidden md:block">
          <motion.div
            // 1. Elevated & tilted (like holding a frame before dropping it on a desk)
            initial={{ opacity: 0, y: -80, x: 15, rotateZ: 3, rotateX: 25, scale: 0.9 }}

            // 2. Drop heavily into place, settling on an artistic negative tilt
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              rotateZ: -3, 
              rotateX: 0,
              scale: 1,
            }}

            // 3. Interactive hover: perfectly straightens out and lifts slightly towards user
            // whileHover={{
            //   rotateZ: 0,
            //   rotateX: 5,
            //   y: -10,
            //   scale: 1.02,
            //   transition: { type: "spring", stiffness: 400, damping: 25 }
            // }}

            // 4. Premium physics: Drops relatively fast but has a heavy, satisfying wobble as it hits the "ground"
            transition={{
              type: "spring",
              stiffness: 160, // Speed of the drop
              damping: 12,    // Friction (lower = more wobble/bounce)
              mass: 1.2,      // Weight of the frame
              delay: 0.3
            }}
            style={{
              transformStyle: "preserve-3d",
              transformOrigin: "center center"
            }}
            className="relative w-[420px] h-[420px] group cursor-pointer"
          >
            {/* Outer Frame Background */}
            <div className="absolute inset-0 bg-secondary/20 backdrop-blur-md border border-border/50 shadow-2xl transition-all duration-500 group-hover:border-border group-hover:bg-secondary/40"></div>

            {/* Decorative Corner Brackets */}
            <div className="absolute -top-[1px] -left-[1px] w-6 h-6 border-t-2 border-l-2 border-muted-foreground z-10 transition-all duration-500 group-hover:border-primary group-hover:w-8 group-hover:h-8"></div>
            <div className="absolute -top-[1px] -right-[1px] w-6 h-6 border-t-2 border-r-2 border-muted-foreground z-10 transition-all duration-500 group-hover:border-primary group-hover:w-8 group-hover:h-8"></div>
            <div className="absolute -bottom-[1px] -left-[1px] w-6 h-6 border-b-2 border-l-2 border-muted-foreground z-10 transition-all duration-500 group-hover:border-primary group-hover:w-8 group-hover:h-8"></div>
            <div className="absolute -bottom-[1px] -right-[1px] w-6 h-6 border-b-2 border-r-2 border-muted-foreground z-10 transition-all duration-500 group-hover:border-primary group-hover:w-8 group-hover:h-8"></div>

            {/* Inner Image Container */}
            <div
              className="absolute inset-4 overflow-hidden bg-background border border-border text-foreground"
              onMouseMove={handleMouseMove}
            >
              {/* Base grayscale image */}
              <Image
                src="/Profile.jpg"
                alt="Hariharan's profile"
                fill
                className="object-cover filter grayscale opacity-60 transition-opacity duration-500 group-hover:opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-background/40 mix-blend-overlay z-10"></div>

              {/* Color image with mask */}
              <motion.div
                className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  maskImage: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                  WebkitMaskImage: useMotionTemplate`radial-gradient(250px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                }}
              >
                <Image
                  src="/Profile.jpg"
                  alt="Hariharan's profile"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Spotlight Border */}
              <motion.div
                className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-primary/50"
                style={{
                  maskImage: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                  WebkitMaskImage: useMotionTemplate`radial-gradient(200px circle at ${mouseX}px ${mouseY}px, black 0%, transparent 100%)`,
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-12 left-12 md:left-24 flex items-center gap-4"
        style={{ opacity }}
      >
        <span className="text-xs font-mono tracking-widest text-muted-foreground uppercase rotate-[-90deg] origin-left translate-y-8"></span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-muted-foreground to-transparent"></div>
      </motion.div>
    </section>
  );
}
