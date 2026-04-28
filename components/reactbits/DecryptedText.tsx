"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const CHARS = "ABCDEFGHIJKLMNO PQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?/";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  className?: string;
  as?: React.ElementType;
  delay?: number;
}

export default function DecryptedText({ 
  text, 
  speed = 40, 
  className = "",
  as: Component = "span",
  delay = 0
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const hasTriggered = useRef(false);

  useEffect(() => {
    if (isInView && !hasTriggered.current) {
      hasTriggered.current = true;
      
      const startTimeout = setTimeout(() => {
        setIsAnimating(true);
        let iteration = 0;
        
        const interval = setInterval(() => {
          setDisplayText((prev) => 
            text.split("").map((letter, index) => {
              if (index < iteration) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            }).join("")
          );
          
          if (iteration >= text.length) {
            clearInterval(interval);
            setIsAnimating(false);
          }
          
          iteration += 1 / 3; // Controls how fast it locks in the correct character
        }, speed);

        return () => clearInterval(interval);
      }, delay * 1000);

      return () => clearTimeout(startTimeout);
    }
  }, [isInView, text, speed, delay]);

  return (
    <Component ref={ref} className={`${className} font-mono relative inline-block`}>
      <span className="opacity-0">{text}</span>
      <span className="absolute left-0 top-0 text-inherit">{displayText}</span>
    </Component>
  );
}
