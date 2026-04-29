"use client";
import { useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

export function AtmosphereHUD() {
  const [time, setTime] = useState("");
  const [scrollPct, setScrollPct] = useState("0p");
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " / " + now.toLocaleDateString("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setScrollPct((latest * 100).toFixed(0) + "p");
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

      {/* Viewport HUD tracking (Technical elements) */}
      <div className="pointer-events-none fixed inset-0 z-40 mix-blend-difference opacity-70 hidden md:block">
        {/* Top Left */}
        <div className="absolute top-6 left-6 text-muted-foreground font-mono text-[10px] uppercase tracking-widest leading-relaxed">
          SYS.OS // <br/>
          HARIHARAN_A
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-6 right-6 text-muted-foreground font-mono text-[10px] uppercase tracking-widest text-right flex flex-col items-end leading-relaxed">
          <span>SCROLL_Y</span>
          <span className="text-muted-foreground/60">{scrollPct}</span>
        </div>
        
        {/* Hardware Crosshairs / Edge Marks */}
        <div className="absolute top-0 left-12 w-[1px] h-3 bg-border"></div>
        <div className="absolute top-12 left-0 w-3 h-[1px] bg-border"></div>
        
        <div className="absolute top-0 right-12 w-[1px] h-3 bg-border"></div>
        <div className="absolute top-12 right-0 w-3 h-[1px] bg-border"></div>

        <div className="absolute bottom-0 left-12 w-[1px] h-3 bg-border"></div>
        <div className="absolute bottom-12 left-0 w-3 h-[1px] bg-border"></div>

        <div className="absolute bottom-0 right-12 w-[1px] h-3 bg-border"></div>
        <div className="absolute bottom-12 right-0 w-3 h-[1px] bg-border"></div>
      </div>
    </>
  );
}
