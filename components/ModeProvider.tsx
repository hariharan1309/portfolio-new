"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModeContextType {
  is3DMode: boolean;
  toggleMode: () => void;
}

const ModeContext = createContext<ModeContextType | undefined>(undefined);

export function ModeProvider({ children }: { children: ReactNode }) {
  const [is3DMode, setIs3DMode] = useState(false);

  const toggleMode = () => {
    setIs3DMode((prev) => !prev);
  };

  return (
    <ModeContext.Provider value={{ is3DMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider");
  }
  return context;
}
