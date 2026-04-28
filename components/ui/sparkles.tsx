"use client";
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export const Sparkles = ({ count = 50 }: { count?: number }) => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSparkles(
        Array.from({ length: count }).map((_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1, // 1px to 3px
          duration: Math.random() * 3 + 2, // 2s to 5s
          delay: Math.random() * 2,
        }))
      );
    }, 0);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute bg-primary rounded-full mix-blend-screen"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            width: sparkle.size,
            height: sparkle.size,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
            y: [0, -20],
          }}
          transition={{
            duration: sparkle.duration,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
