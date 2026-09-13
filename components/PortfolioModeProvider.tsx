"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { profileConfig } from "@/lib/portfolioData";

export type PortfolioMode = "job" | "craft";

interface PortfolioModeContextType {
  mode: PortfolioMode;
  setMode: (mode: PortfolioMode) => void;
  toggleMode: () => void;
  isJobMode: boolean;
}

const PortfolioModeContext = createContext<PortfolioModeContextType | undefined>(undefined);

export function PortfolioModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<PortfolioMode>(profileConfig.defaultMode || "job");

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-mode") as PortfolioMode | null;
    if (saved === "job" || saved === "craft") {
      setMode(saved);
    }
  }, []);

  const handleSetMode = (newMode: PortfolioMode) => {
    setMode(newMode);
    localStorage.setItem("portfolio-mode", newMode);
  };

  const toggleMode = () => {
    const next = mode === "job" ? "craft" : "job";
    handleSetMode(next);
  };

  return (
    <PortfolioModeContext.Provider
      value={{
        mode,
        setMode: handleSetMode,
        toggleMode,
        isJobMode: mode === "job",
      }}
    >
      {children}
    </PortfolioModeContext.Provider>
  );
}

export function usePortfolioMode() {
  const context = useContext(PortfolioModeContext);
  if (!context) {
    return {
      mode: profileConfig.defaultMode,
      setMode: () => {},
      toggleMode: () => {},
      isJobMode: profileConfig.defaultMode === "job",
    };
  }
  return context;
}
