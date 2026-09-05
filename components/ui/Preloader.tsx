"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // In a real app, you might wait for fonts, or images. 
    // Here we'll just wait a brief moment for the aesthetic effect.
    document.body.style.cursor = 'none';
    
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 8) + 2;
      if (currentProgress > 100) currentProgress = 100;
      setProgress(currentProgress);
      
      if (currentProgress === 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default';
          window.scrollTo(0, 0);
        }, 500); // Hold briefly at 100%
      }
    }, 100);
    
    return () => {
      clearInterval(interval);
      document.body.style.cursor = 'default';
    }
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background pointer-events-none p-6"
        >
          {/* Manga Volume Box Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-lg border-2 border-border bg-card p-8 shadow-2xl relative"
          >
            {/* Corner Keyline Accent Brackets */}
            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[var(--accent-hero)]" />
            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[var(--accent-hero)]" />
            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[var(--accent-hero)]" />
            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[var(--accent-hero)]" />

            {/* Header Readout */}
            <div className="flex items-center justify-between border-b border-border pb-3 mb-6 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-none bg-muted-foreground" />
                VOL.01 // REIATSU SYNC
              </span>
              <span className="text-muted-foreground font-bold">ARC: OPENING</span>
            </div>

            {/* Impact Headline Counter */}
            <div className="flex items-baseline justify-between mb-6">
              <div className="font-display text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-none">
                {progress}
                <span className="text-2xl md:text-3xl font-mono text-muted-foreground ml-2">%</span>
              </div>
              <div className="text-right font-mono text-xs text-muted-foreground space-y-1">
                <div>SYS.CORE: ONLINE</div>
                <div>STAGE: CHARGING</div>
              </div>
            </div>

            {/* Segmented Energy Cells Gauge */}
            <div className="grid grid-cols-12 gap-1.5 p-1.5 border border-border bg-background mb-6">
              {Array.from({ length: 12 }).map((_, i) => {
                const threshold = ((i + 1) / 12) * 100;
                const isCharged = progress >= threshold;
                return (
                  <div
                    key={i}
                    className={`h-4 transition-colors duration-150 ${
                      isCharged 
                        ? "bg-foreground border border-foreground" 
                        : "bg-card border border-border"
                    }`}
                  />
                );
              })}
            </div>

            {/* Footer Status Line */}
            <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground pt-2 border-t border-border">
              <span>HARIHARAN A. // PORTFOLIO ARCHIVE</span>
              <span>PRESSURE: {progress > 80 ? "CRITICAL" : progress > 40 ? "ACTIVE" : "STANDBY"}</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
