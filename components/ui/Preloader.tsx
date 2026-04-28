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
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background pointer-events-none"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="font-sans text-7xl md:text-9xl font-bold tracking-tighter text-foreground flex items-baseline">
              {progress}<span className="text-3xl md:text-5xl text-muted-foreground ml-2">%</span>
            </div>
            
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.2 }}
               className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase flex items-center gap-4"
            >
              <div className="w-8 h-[1px] bg-border"></div>
              Initializing Experience
              <div className="w-8 h-[1px] bg-border"></div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="absolute bottom-0 left-0 h-1 bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
