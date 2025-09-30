// components/portfolio/PortfolioPage.tsx
"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ProjectsCarousel from "./ProjectsCarousel";
import AboutSection from "./AboutSecttion";
import ContactSection from "./ContactSection";
import LoadingScreen from "./LoadingScreen";
import CustomCursor from "./customCursor";
import ParticleBackground from "./particleBackground";
import { projects, skills } from "@/data/portfolio";

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Loading Screen */}
      {isLoading && <LoadingScreen />}
      
      {/* Main Content */}
      <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Hero Section with gradient background */}
        <section id="home" className="relative min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/10 to-transparent" />
          <Hero skills={skills} />
        </section>
        
        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-orange-500 font-semibold text-sm tracking-wider">FEATURED WORK</span>
              <h2 className="text-5xl font-bold mt-2 mb-4">Projects That Make Impact</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                A collection of projects showcasing modern web development and AI integration
              </p>
            </div>
            <ProjectsCarousel projects={projects} />
          </div>
        </section>
        
        {/* About Section */}
        <AboutSection />
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}