"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface CursorContextType {
  isHovered: boolean;
  setIsHovered: (value: boolean) => void;
}

const CursorContext = createContext<CursorContextType>({
  isHovered: false,
  setIsHovered: () => {},
});

export const useCursor = () => useContext(CursorContext);

export function CursorProvider({ children }: { children: ReactNode }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <CursorContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </CursorContext.Provider>
  );
}