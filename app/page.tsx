"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import Hero from "@/components/sections/Hero";
import Competencies from "@/components/sections/Competencies";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import { useMode } from "@/components/ModeProvider";
import { Scene3D } from "@/components/3d/Scene3D";

export default function Home() {
  const { is3DMode } = useMode();
  const experienceRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const { scrollYProgress: experienceScroll } = useScroll({
    target: experienceRef,
    offset: ["start center", "end center"]
  });
  const beamHeight = useTransform(experienceScroll, [0, 1], ["0%", "100%"]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Hariharan-A-Resume.pdf";
    link.download = "Hariharan_A_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Scene3D />
      <AnimatePresence>
        {!is3DMode && (
          <motion.main
            key="2d-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-800 selection:text-zinc-50 overflow-clip"
          >
            <Hero handleDownload={handleDownload} y1={y1} y2={y2} opacity={opacity} />
            <Competencies />
            <Experience experienceRef={experienceRef} beamHeight={beamHeight} />
            <Projects />
            <Contact y2={y2} />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
