"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import icon from "../../../public/icon.jpg";
import { memo } from "react";
import { Variants } from "framer-motion";

type Props = {
  skills: string[];
};

// Memoize skill item to prevent unnecessary re-renders
const SkillItem = memo(({ skill, index }: { skill: string; index: number }) => (
  <motion.div
    className="px-4 py-2 bg-white/5 border border-white/10 rounded-md text-sm text-gray-400 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
    whileHover={{ scale: 1.05, y: -2 }}
    data-cursor-hover="true"
  >
    {skill}
  </motion.div>
));

SkillItem.displayName = "SkillItem";

export default function Hero({ skills }: Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1]
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen flex items-center justify-center px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl py-20 w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          {/* Title */}
          <motion.h1 
            className="text-6xl lg:text-7xl font-black mb-6 leading-tight"
            variants={itemVariants}
          >
            I Build{" "}
            <motion.span 
              className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent inline-block"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              style={{ 
                backgroundSize: "200% auto",
                backgroundImage: "linear-gradient(90deg, #f97316, #ef4444, #ec4899, #f97316)"
              }}
            >
              AI-Powered
            </motion.span>
            <br />
            Products End-to-End
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-2xl text-gray-400 mb-6"
            variants={itemVariants}
          >
            Full-Stack Developer • AWS Certified 
          </motion.p>

          {/* Description */}
          <motion.p 
            className="text-gray-500 text-lg mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Next.js/React (TSX/JSX), Tailwind CSS, Node/Express; data on 
            MongoDB & Postgres (Prisma/Supabase); auth with JWT/OAuth2; 
            production on AWS with Docker & CI/CD.{" "}
            <a 
              href="https://cp.certmetrics.com/amazon/en/public/verify/credential/bc913f49d39c4a55a2f5788e8c04b73f" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-orange-500 font-semibold z-15 hover:underline"
              data-cursor-hover="true"
            >
              AWS Certified Cloud Practitioner
            </a>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 mb-10"
            variants={itemVariants}
          >
            <motion.a 
              href="#projects" 
              className="px-8 py-4 z-15 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover="true"
            >
              View Projects →
            </motion.a>
            <motion.a 
              href="https://drive.google.com/file/d/1TwF5nQtrzLwzeCvkTrbXtEqbGr3NAKE_/view?usp=sharing" 
              target="_blank"
              className="px-8 py-4 z-15 border border-gray-700 rounded-lg font-semibold hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover="true"
            >
              Resume
            </motion.a>
          </motion.div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <SkillItem key={skill} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <motion.div 
          className="relative hidden lg:block"
          variants={itemVariants}
        >
          {/* Morphing Gradient Orb */}
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-red-500/20 rounded-full blur-3xl will-change-transform"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Code Window */}
          <motion.div 
            className="relative bg-gray-900/90 backdrop-blur border border-gray-800 rounded-xl overflow-hidden shadow-2xl p-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-3 text-gray-500 text-sm">terminal</span>
            </div>
            
            {/* Code Content */}
            <div className="font-mono text-sm">
              <div className="text-green-400">$ npm run dev</div>
              <div className="text-gray-400 mt-2">
                <span className="text-blue-400">▲ Next.js 15.5.4</span>
                <br />
                <span className="text-gray-500">- Local: </span>
                <span className="text-cyan-400">http://localhost:3000</span>
                <br />
                <span className="text-gray-500">- Network: </span>
                <span className="text-cyan-400">http://192.168.1.1:3000</span>
              </div>
              <div className="text-green-400 mt-3">✓ Ready in 2s</div>
              <div className="text-gray-400 mt-2">
                <span className="text-yellow-400">○ </span>
                <span>Compiling /portfolio...</span>
              </div>
              <div className="text-green-400">✓ Compiled successfully</div>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="absolute top-10 right-10 w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500/20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
            whileHover={{ scale: 1.1 }}
          >
            <Image 
              src={icon} 
              alt="Profile" 
              className="w-full h-full object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}
