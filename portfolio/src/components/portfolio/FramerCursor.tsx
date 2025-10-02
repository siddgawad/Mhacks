"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function FramerCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Using motion values for smooth cursor movement
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  // Spring animations for smooth following
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // Only run in the browser after mount
    if (!isMounted || typeof window === 'undefined') return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Using event delegation with data attributes
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target;
      
      // Check if target is a Node and can potentially have closest method
      if (target && target instanceof Element) {
        // Now we can safely use closest
        const hoverElement = target.closest('[data-cursor-hover="true"]');
        if (hoverElement) {
          setIsHovered(true);
        }
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target;
      
      // Check if target is a Node and can potentially have closest method
      if (target && target instanceof Element) {
        // Now we can safely use closest
        const hoverElement = target.closest('[data-cursor-hover="true"]');
        if (hoverElement) {
          setIsHovered(false);
        }
      }
    };

    // Add event listeners
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, [cursorX, cursorY, isMounted]);

  // Don't render until mounted (avoids SSR issues)
  if (!isMounted) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-4px",
          translateY: "-4px",
        }}
      >
        <motion.div
          className="w-2 h-2 bg-orange-500 rounded-full"
          animate={{
            scale: isClicking ? 0.5 : isHovered ? 2.5 : 1,
            backgroundColor: isHovered ? "#f97316" : "#fb923c"
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 10
          }}
        />
      </motion.div>

      {/* Cursor outline */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-20px",
          translateY: "-20px",
        }}
      >
        <motion.div
          className="w-10 h-10 border border-orange-500/50 rounded-full"
          animate={{
            scale: isClicking ? 1.5 : isHovered ? 1.8 : 1,
            borderColor: isHovered ? "#f97316" : "#fb923c80",
            borderWidth: isHovered ? "2px" : "1px"
          }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
        />
      </motion.div>
    </>
  );
}