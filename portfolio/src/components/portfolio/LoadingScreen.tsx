"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 z-[10000] bg-[#0a0a0a] flex items-center justify-center">
      <div className="text-center">
        {/* Name Animation */}
        <h1 className="text-5xl md:text-7xl font-black mb-8 overflow-hidden">
          <span className="inline-block animate-slideUp bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
            SIDDHANT GAWAD
          </span>
        </h1>
        
        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto mb-4">
          <div 
            className="h-full bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* Loading Text */}
        <p className="text-gray-500 text-sm tracking-widest animate-pulse">
          {progress < 30 ? "INITIALIZING" : progress < 60 ? "LOADING ASSETS" : progress < 90 ? "ALMOST THERE" : "READY"}
        </p>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>
    </div>
  );
}