"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 400, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === "undefined" || window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (isHidden) setIsHidden(false);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      
      // Look for clickable elements
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.closest('.group') // Some of our cards use group with cursor-pointer
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isHidden]);

  if (!mounted || isHidden) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[100] mix-blend-difference hidden md:flex items-center justify-center -translate-x-1/2 -translate-y-1/2 select-none"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      {/* Outer Manga Registration Reticle Box */}
      <motion.div
        className="absolute border border-white/80 flex items-center justify-center"
        animate={{
          width: isHovering ? 44 : 22,
          height: isHovering ? 44 : 22,
          rotate: isHovering ? 45 : 0,
          borderColor: isHovering ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.45)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
      >
        {/* Reticle Corner Brackets when hovering */}
        {isHovering && (
          <>
            <span className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-white" />
            <span className="absolute -top-1 -right-1 w-2 h-2 border-t-2 border-r-2 border-white" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b-2 border-l-2 border-white" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-white" />
          </>
        )}
      </motion.div>

      {/* Dead-Center Blade Diamond Tick */}
      <motion.div
        className="w-2 h-2 bg-white rotate-45 select-none relative z-10"
        animate={{
          scale: isHovering ? 1.3 : 1,
        }}
        transition={{ duration: 0.15 }}
      />
    </motion.div>
  );
}
