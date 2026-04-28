"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TrueFocusProps {
  sentence: string;
  manualMode?: boolean;
  blurAmount?: number;
  borderColor?: string;
  animationDuration?: number;
  pauseBetweenAnimations?: number;
}

export const TrueFocus = ({
  sentence,
  manualMode = false,
  blurAmount = 4,
  borderColor = "#27272a", // zinc-800
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
}: TrueFocusProps) => {
  const words = sentence.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState({ x: 0, y: 0, width: 0, height: 0 });

  useEffect(() => {
    if (!manualMode) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
      }, (animationDuration + pauseBetweenAnimations) * 1000);
      return () => clearInterval(interval);
    }
  }, [manualMode, animationDuration, pauseBetweenAnimations, words.length]);

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    if (manualMode) {
      setLastActiveIndex(currentIndex);
      setCurrentIndex(index);
    }
  };

  const handleMouseLeave = () => {
    if (manualMode) {
      setCurrentIndex(lastActiveIndex ?? 0);
    }
  };

  return (
    <div className="relative flex gap-3 md:gap-4 justify-center flex-wrap" ref={containerRef}>
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => { wordRefs.current[index] = el; }}
            className={cn(
              "relative cursor-pointer text-3xl md:text-5xl font-bold transition-all duration-300",
              isActive ? "text-foreground" : "text-muted-foreground"
            )}
            style={{
              filter: isActive ? "blur(0px)" : `blur(${blurAmount}px)`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border"
        animate={{
          x: focusRect.x - 12,
          y: focusRect.y - 8,
          width: focusRect.width + 24,
          height: focusRect.height + 16,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 24,
          mass: 1.5,
        }}
      >
        {/* Corners */}
        <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 rounded-tl-sm" style={{ borderColor }} />
        <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 rounded-tr-sm" style={{ borderColor }} />
        <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 rounded-bl-sm" style={{ borderColor }} />
        <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 rounded-br-sm" style={{ borderColor }} />
      </motion.div>
    </div>
  );
};
