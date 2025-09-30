"use client";

import { useState } from "react";

export default function ContactSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
      label: "Email",
      value: "gawad.developer@gmail.com",
      href: "mailto:gawad.developer@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      ),
      label: "GitHub",
      value: "@siddgawad",
      href: "https://github.com/siddgawad",
      color: "from-gray-600 to-gray-800"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      label: "LinkedIn",
      value: "siddhantgawad",
      href: "https://www.linkedin.com/in/siddhantgawad/",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
      label: "Instagram",
      value: "@siddhantgawaddd",
      href: "https://www.instagram.com/siddhantgawaddd/",
      color: "from-pink-500 to-purple-600"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm tracking-wider">GET IN TOUCH</span>
          
          <h2 className="text-5xl md:text-6xl font-bold mt-2 mb-6">
            Let's Build Something{" "}
            <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="relative p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 text-gray-400 group-hover:text-orange-500 transition-colors duration-300">
                    {method.icon}
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{method.label}</p>
                  <p className="text-white font-medium">{method.value}</p>
                </div>

                {/* Animated Corner */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-orange-500">
                    <path d="M7 17L17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a 
            href="mailto:gawad.developer@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 group"
          >
            <span>Start a Conversation</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 mb-4">
            © 2024 Siddhant Gawad. Built with passion and code.
          </p>
          
          <div className="flex justify-center gap-6">
            <a href="https://drive.google.com/file/d/16MRjxxRTYggAug_oFUkcigvlUC5B0whE/view?usp=sharing" target="_blank" className="text-gray-500 hover:text-orange-500 transition-colors">
              Resume
            </a>
            <a href="https://x.com/XforSid" target="_blank" className="text-gray-500 hover:text-orange-500 transition-colors">
              Twitter
            </a>
            <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/bc913f49d39c4a55a2f5788e8c04b73f" target="_blank" className="text-gray-500 hover:text-orange-500 transition-colors">
              AWS Certification
            </a>
          </div>
        </div>
      </div>

      {/* Background Animation */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50" />
    </section>
  );
}