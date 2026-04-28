"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Palette, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const THEMES = [
  { name: "dark", label: "Dark", icon: Moon },
  { name: "purple", label: "Purple", icon: Palette },
  { name: "cyan", label: "Cyan", icon: Palette },
];

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className={cn(
          "absolute bottom-16 right-0 mb-2 flex flex-col gap-2 rounded-2xl border border-border/50 bg-background/80 p-3 shadow-lg backdrop-blur-xl transition-all duration-300 ease-in-out",
          open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        )}
      >
        {THEMES.map((t) => (
          <button
            key={t.name}
            onClick={() => {
              setTheme(t.name);
              setOpen(false);
            }}
            className={cn(
              "flex items-center gap-3 rounded-xl px-4 py-2 text-sm font-medium transition-colors cursor-pointer",
              theme === t.name 
                ? "bg-primary/10 text-primary" 
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            )}
          >
            <t.icon className="h-4 w-4" />
            {t.label}
          </button>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Toggle theme"
      >
        <Palette className="h-6 w-6 transition-transform group-hover:rotate-12" />
      </button>
    </div>
  );
}
