"use client";
import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

export function AtmosphereHUD() {
  const [scrollPct, setScrollPct] = useState("0%");
  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const pct = Math.round(latest * 100);
    const formatted = `${pct}%`;
    setScrollPct((prev) => (prev === formatted ? prev : formatted));
  });

  return (
    <>
      {/* Cinematic Noise Overlay (Fixed to screen) */}
      <div 
        className="pointer-events-none fixed z-50 opacity-[0.015] mix-blend-difference overflow-hidden"
        style={{ width: "200vw", height: "200vh", left: "-50vw", top: "-50vh" }}
      >
        <div 
          className="absolute inset-0 animate-noise"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Viewport Reading HUD (Minimalist Editorial Margins) */}
      <div className="pointer-events-none fixed inset-0 z-40 opacity-70 hidden md:block select-none" aria-hidden="true">
        {/* Top Left - Technical Volume Header (positioned below MangaNav) */}
        <div className="absolute top-20 left-6 text-muted-foreground font-mono text-[10px] uppercase tracking-widest leading-relaxed">
          ISSUE.01 // <br/>
          <span className="text-foreground font-bold">HARIHARAN_A</span>
        </div>

        {/* Top Right - Status / Discipline Readout */}
        <div className="absolute top-20 right-6 text-muted-foreground font-mono text-[10px] uppercase tracking-widest text-right leading-relaxed">
          <span>FRONTEND & MOBILE</span><br/>
          <span className="text-muted-foreground/60">PRODUCTION ARCHIVE</span>
        </div>

        {/* Bottom Left - Volume Reading & Pressure */}
        {/* <div className="absolute bottom-8 left-6 text-muted-foreground font-mono text-[10px] uppercase tracking-widest leading-relaxed">
          <span>VOL.01 // MONOGRAPH</span><br/>
          <span className="text-muted-foreground/80">READING DEPTH: {scrollPct}</span>
        </div> */}

        {/* Right Edge - Reading Depth Gauge */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] font-mono tracking-widest text-muted-foreground uppercase -rotate-90 origin-center mb-2">DEPTH</span>
          <div className="w-[3px] h-28 bg-card border border-border relative overflow-hidden">
            <div 
              className="w-full bg-[var(--accent-hero)] absolute bottom-0 transition-all duration-150"
              style={{ height: scrollPct }}
            />
          </div>
          <span className="text-[10px] font-mono text-muted-foreground mt-2">{scrollPct}</span>
        </div>
      </div>
    </>
  );
}
