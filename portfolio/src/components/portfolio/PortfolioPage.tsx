"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FramerCursor from "./FramerCursor";
import ParticleBackground from "@/components/portfolio/particleBackground";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ProjectsCarousel from "./ProjectsCarousel";
import AboutSection from "@/components/portfolio/AboutSection";
import ContactSection from "./ContactSection";
import LoadingScreen from "./LoadingScreen";
import { projects, skills } from "@/data/portfolio";

export default function PortfolioPage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 2000);
    
    return () => {
      clearTimeout(timer);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <FramerCursor />
      
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>
      
      {/* Main Content */}
      <motion.div 
        className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* Particle Background */}
        <ParticleBackground />
        
        {/* Navigation */}
        <Navbar />
        
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/10 to-transparent" />
          <Hero skills={skills} />
        </section>
        
        {/* Projects Section */}
        <motion.section 
          id="projects" 
          className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#050505]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <motion.span 
                className="text-orange-500 font-semibold text-sm tracking-wider"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                FEATURED WORK
              </motion.span>
              <motion.h2 
                className="text-5xl font-bold mt-2 mb-4"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                Projects That Make Impact
              </motion.h2>
              <motion.p 
                className="text-gray-400 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                A collection of projects showcasing modern web development and AI integration
              </motion.p>
            </div>
            <ProjectsCarousel projects={projects} />
          </div>
        </motion.section>
        
        {/* About Section */}
        <AboutSection />
        
        {/* Contact Section */}
        <ContactSection />
      </motion.div>
    </>
  );
}
