"use client";

import { useMode } from "@/components/ModeProvider";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function CapsuleToggle() {
  const { is3DMode, toggleMode } = useMode();

  return (
    <motion.button
      onClick={toggleMode}
      className={cn(
        "fixed bottom-6 right-6 z-[100] w-12 h-12 rounded-full flex items-center justify-center overflow-hidden border border-zinc-800 shadow-xl transition-all duration-300 hover:scale-110",
        is3DMode ? "bg-zinc-800" : "bg-zinc-900"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      aria-label="Toggle 3D Mode"
    >
      <motion.div
        className="w-full h-full relative"
        animate={{
          rotate: is3DMode ? 180 : 0,
        }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-cyan-500 rounded-full opacity-80" />
        {/* A simple geometric representation of a capsule */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-8 bg-zinc-100 rounded-full shadow-[inset_0_-2px_4px_rgba(0,0,0,0.5)] rotate-45 flex flex-col overflow-hidden">
             <div className="w-full h-1/2 bg-purple-500" />
             <div className="w-full h-1/2 bg-zinc-200" />
        </div>
      </motion.div>
    </motion.button>
  );
}
