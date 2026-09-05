"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Palette, Moon, Sparkles, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const CHAPTERS = [
  { id: "hero", num: "CH.00", label: "Cover" },
  { id: "competencies", num: "CH.01", label: "Capabilities" },
  { id: "experience", num: "CH.02", label: "Journey" },
  { id: "projects", num: "CH.03", label: "Portfolio" },
  { id: "contact", num: "CH.04", label: "Let's Talk" },
];

const THEMES = [
  { name: "paper", label: "Paper", icon: Sun },
  { name: "dark", label: "Ink", icon: Moon },
  { name: "purple", label: "Reiatsu", icon: Sparkles },
  { name: "cyan", label: "Bankai", icon: Palette },
];

export function MangaNav() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    CHAPTERS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none p-3 md:p-5 flex justify-center">
      <div className="w-full max-w-7xl flex items-center justify-between pointer-events-auto border-2 border-border bg-card/90 backdrop-blur-md px-4 py-2.5 shadow-xl relative transition-colors duration-300">
        {/* Corner Registration Accents in Current Theme Accent */}
        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t-2 border-l-2 border-[var(--accent-hero)]" />
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t-2 border-r-2 border-[var(--accent-hero)]" />
        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b-2 border-l-2 border-[var(--accent-hero)]" />
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b-2 border-r-2 border-[var(--accent-hero)]" />

        {/* Volume Spine Brand */}
        <Link
          href="#hero"
          className="flex items-center gap-2 text-foreground hover:opacity-90 font-mono text-xs uppercase tracking-widest group"
        >
          <span className="w-2 h-2 bg-[var(--accent-hero)] group-hover:scale-125 transition-transform" />
          <span className="font-bold">VOL.01</span>
          <span className="text-muted-foreground/60">//</span>
          <span className="text-muted-foreground group-hover:text-foreground transition-colors">HARIHARAN A.</span>
        </Link>

        {/* Desktop Chapter Spine Navigation */}
        <nav className="hidden lg:flex items-center gap-1 font-mono text-xs" aria-label="Manga chapters">
          {CHAPTERS.map((ch) => {
            const isActive = activeSection === ch.id;
            return (
              <Link
                key={ch.id}
                href={`#${ch.id}`}
                className={cn(
                  "px-3 py-1.5 transition-all border uppercase tracking-wider",
                  isActive
                    ? "border-border bg-background text-foreground font-bold"
                    : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
                )}
              >
                <span className="text-muted-foreground mr-1.5">{ch.num}</span>
                <span>{ch.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggles & Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          {/* Tactical Theme Selector */}
          <div className="hidden sm:flex items-center border border-border bg-background/80 p-0.5">
            {THEMES.map((t) => (
              <button
                key={t.name}
                onClick={() => setTheme(t.name)}
                className={cn(
                  "px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5",
                  theme === t.name
                    ? "bg-primary text-primary-foreground font-bold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-card/40"
                )}
                aria-label={`Select ${t.label} theme`}
              >
                <t.icon className="w-3 h-3" />
                <span>{t.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 border border-border bg-background text-foreground hover:opacity-90 cursor-pointer"
            aria-label="Toggle chapter menu"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Chapter Drawer */}
      {isOpen && (
        <div className="fixed inset-x-3 top-16 z-50 lg:hidden pointer-events-auto border-2 border-border bg-card p-6 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-border font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span>VOLUME INDEX // CHAPTERS</span>
            <span className="text-[var(--accent-hero)]">VOL.01</span>
          </div>

          <div className="flex flex-col space-y-2">
            {CHAPTERS.map((ch) => (
              <Link
                key={ch.id}
                href={`#${ch.id}`}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "px-4 py-3 border text-xs font-mono uppercase tracking-wider flex items-center justify-between",
                  activeSection === ch.id
                    ? "border-border bg-background text-foreground font-bold"
                    : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground"
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="text-muted-foreground">{ch.num}</span>
                  <span>{ch.label}</span>
                </span>
                <span className="text-muted-foreground">→</span>
              </Link>
            ))}
          </div>

          {/* Mobile Theme Buttons */}
          <div className="pt-4 border-t border-border">
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">
              THEME COLOR SCHEME
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {THEMES.map((t) => (
                <button
                  key={t.name}
                  onClick={() => {
                    setTheme(t.name);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "py-2 px-3 text-xs font-mono uppercase tracking-wider border transition-colors flex items-center justify-center gap-1.5",
                    theme === t.name
                      ? "border-border bg-primary text-primary-foreground font-bold"
                      : "border-border/60 bg-background text-muted-foreground hover:text-foreground"
                  )}
                >
                  <t.icon className="w-3.5 h-3.5" />
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
