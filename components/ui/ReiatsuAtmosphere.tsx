"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface Particle {
  x: number;
  y: number;
  baseRadius: number;
  radius: number;
  vx: number;
  vy: number;
  baseVy: number;
  alpha: number;
  baseAlpha: number;
  isVermilion: boolean;
  phase: number;
}

export function ReiatsuAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Accessibility check: disable continuous motion if user requested reduced motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse velocity & position tracking
    const mouse = {
      x: -1000,
      y: -1000,
      prevX: -1000,
      prevY: -1000,
      vx: 0,
      vy: 0,
      active: false,
    };

    let scrollDelta = 0;
    let lastScrollY = window.scrollY;

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.vx = mouse.x - mouse.prevX;
      mouse.vy = mouse.y - mouse.prevY;
      mouse.active = true;
    };

    const onMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      scrollDelta = (currentScrollY - lastScrollY) * 0.15;
      lastScrollY = currentScrollY;
    };

    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Initialize Particles (45-55 micro particles: elegant, not cluttered)
    const particleCount = Math.min(55, Math.floor((width * height) / 24000));
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const isVermilion = Math.random() < 0.22; // ~22% are Imperial Vermilion embers
      const baseRadius = isVermilion ? 1.2 + Math.random() * 1.5 : 0.8 + Math.random() * 1.8;
      const baseVy = -(0.25 + Math.random() * 0.45); // Upward drift like incense
      const baseAlpha = isVermilion ? 0.25 + Math.random() * 0.25 : 0.1 + Math.random() * 0.15;

      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseRadius,
        radius: baseRadius,
        vx: (Math.random() - 0.5) * 0.3,
        vy: baseVy,
        baseVy,
        alpha: baseAlpha,
        baseAlpha,
        isVermilion,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let animId: number;
    let time = 0;

    const render = () => {
      if (document.hidden) {
        animId = requestAnimationFrame(render);
        return;
      }

      time += 0.015;
      scrollDelta *= 0.92; // Decay scroll impulse

      ctx.clearRect(0, 0, width, height);

      const isDark = resolvedTheme === "dark";
      const inkBase = isDark ? "245, 239, 235" : "24, 24, 27";
      const vermilionBase = "194, 59, 34"; // Imperial Vermilion #C23B22

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // 1. Natural Sinusoidal Drift & Scroll Momentum
        p.phase += 0.02;
        const driftX = Math.sin(p.phase) * 0.25;
        p.x += p.vx + driftX;
        p.y += p.vy - scrollDelta;

        // 2. Cursor Gravitational Fluid Wake (Repulsion & Swirl)
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          const maxDist = 140;

          if (dist < maxDist && dist > 1) {
            const force = (1 - dist / maxDist) * 1.8;
            p.x += (dx / dist) * force;
            p.y += (dy / dist) * force;

            // Transfer subtle mouse momentum
            p.x += mouse.vx * 0.04 * force;
            p.y += mouse.vy * 0.04 * force;
          }
        }

        // 3. Screen Wrap Around
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        } else if (p.y > height + 10) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        // 4. Draw Particle (Sumi-e ink or Vermilion spark)
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const rgb = p.isVermilion ? vermilionBase : inkBase;
        ctx.fillStyle = `rgba(${rgb}, ${p.alpha})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none w-full h-full select-none"
      aria-hidden="true"
    />
  );
}
