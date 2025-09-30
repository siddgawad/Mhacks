// components/portfolio/Hero.tsx
"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import icon from "../../../public/icon.jpg";

type Props = {
  skills: string[];
};

export default function Hero({ skills }: Props) {
  const codeWindowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!codeWindowRef.current) return;
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      
      codeWindowRef.current.style.transform = 
        `translate(-50%, -50%) translate(${mouseX * -10}px, ${mouseY * -10}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="animate-fadeInLeft">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-8">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-500 text-sm font-semibold">Available for opportunities</span>
          </div>

          {/* Title */}
          <h1 className="text-6xl lg:text-7xl font-black mb-6 leading-tight">
            I Build <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">AI-Powered</span><br />
            Products End-to-End
          </h1>

          {/* Subtitle */}
          <p className="text-2xl text-gray-400 mb-6">
            Full-Stack Developer • AWS Certified • System Architect
          </p>

          {/* Description */}
          <p className="text-gray-500 text-lg mb-8 leading-relaxed">
            Frontend in Next.js/React with clean UX, backend in Node/TypeScript, 
            data in Postgres/Prisma, and deployments on AWS with CI/CD and observability. 
            My current focus is agentic systems—tool-using, retrieval-augmented, 
            and action-oriented agents that solve real problems.{" "}
            <a 
              href="https://cp.certmetrics.com/amazon/en/public/verify/credential/bc913f49d39c4a55a2f5788e8c04b73f" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 font-semibold hover:underline"
            >
              AWS Certified Cloud Practitioner
            </a>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1"
            >
              View Projects →
            </a>
            <a 
              href="https://drive.google.com/file/d/16MRjxxRTYggAug_oFUkcigvlUC5B0whE/view?usp=sharing" 
              target="_blank"
              className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-gray-400 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative animate-fadeInRight hidden lg:block">
          {/* Morphing Gradient Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-full blur-3xl animate-morph" />
          
          {/* Code Window */}
          <div 
            ref={codeWindowRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] bg-gray-900/90 backdrop-blur border border-gray-800 rounded-xl overflow-hidden shadow-2xl"
          >
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-800/50 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            
            {/* Code Content */}
            <div className="p-6 font-mono text-sm">
              <div className="text-orange-500">const</div>
              <div className="text-blue-400 ml-4">{"buildProduct = () => {"}</div>
              <div className="ml-8">
                <span className="text-purple-400">return</span> {"{"}
              </div>
              <div className="ml-12 text-gray-400">
                <div>frontend: <span className="text-green-400">'Next.js'</span>,</div>
                <div>backend: <span className="text-green-400">'Node.js'</span>,</div>
                <div>database: <span className="text-green-400">'PostgreSQL'</span>,</div>
                <div>ai: <span className="text-green-400">'LangChain'</span>,</div>
                <div>cloud: <span className="text-green-400">'AWS'</span></div>
              </div>
              <div className="ml-8">{"}"}</div>
              <div className="text-blue-400 ml-4">{"}"}</div>
            </div>
          </div>

          {/* Profile Image (optional) */}
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500/20">
            <Image src={icon} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}