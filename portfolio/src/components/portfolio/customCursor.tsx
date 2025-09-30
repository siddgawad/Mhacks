// components/portfolio/CustomCursor.tsx
"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    window.addEventListener('mousemove', updatePosition);
    
    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div 
        className={`fixed w-2 h-2 bg-orange-500 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-150 ${isHovered ? 'scale-[2.5]' : ''}`}
        style={{ left: position.x - 4, top: position.y - 4 }}
      />
      <div 
        className={`fixed w-8 h-8 border border-orange-500/50 rounded-full pointer-events-none z-[9998] transition-all duration-75 ${isHovered ? 'scale-150 border-orange-500' : ''}`}
        style={{ left: position.x - 16, top: position.y - 16 }}
      />
    </>
  );
}