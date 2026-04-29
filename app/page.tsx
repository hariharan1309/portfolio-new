"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Hero from "@/components/sections/Hero";
import Competencies from "@/components/sections/Competencies";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
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
    link.href = "/Resume.pdf";
    link.download = "Hariharan_A_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-50 selection:bg-zinc-800 selection:text-zinc-50 overflow-clip">
      <Hero handleDownload={handleDownload} y1={y1} y2={y2} opacity={opacity} />
      <Competencies />
      <Experience experienceRef={experienceRef} beamHeight={beamHeight} />
      <Projects />
      <Contact y2={y2} />
    </main>
  );
}
