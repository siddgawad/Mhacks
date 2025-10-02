"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Create the observer once
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    // Capture the current element *now* and use that in observe/unobserve
    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el); // use the captured node, not sectionRef.current
      observer.disconnect();
    };
  }, []); // no deps needed; observer + element captured inside

  const stats = [
    { number: "3", label: "Projects Completed" },
    { number: "2", label: "Years Experience" },
    { number: "AWS", label: "Certified" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: "🎨",
    },
    {
      title: "Backend & Infrastructure",
      skills: ["Node.js","MongoDB", "Express", "PostgreSQL", "Prisma", "AWS", "Docker", "CI/CD"],
      icon: "⚙️",
    },
    {
      title: "AI & Emerging Tech",
      skills: ["LangChain", "OpenAI API", "Vector DBs", "RAG Systems", "Agents"],
      icon: "🤖",
    },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
            <span className="text-orange-500 font-semibold text-sm tracking-wider">ABOUT ME</span>

            <h2 className="text-5xl font-bold mt-2 mb-6">
              Building the Future,<br />
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                One Line at a Time
              </span>
            </h2>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              I am a full-stack developer passionate about creating AI-powered products that solve real problems.
              With expertise spanning frontend development, backend architecture, and cloud infrastructure,
              I build scalable solutions that deliver exceptional user experiences.
            </p>

            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              My approach combines clean, maintainable code with modern design principles.
              I ship weekly, test in production safely, and prioritize features that move user metrics.
              Currently focused on building agentic AI systems that can take actions and solve complex problems autonomously.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-white/5 backdrop-blur border border-white/10 rounded-lg hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Skills */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
            <div className="space-y-6">
              {skillCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-900/50 backdrop-blur border border-gray-800 rounded-xl hover:border-orange-500/50 transition-all duration-300 group"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-orange-500 font-semibold tracking-wide text-sm">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300 cursor-pointer group-hover:border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Visual Element */}
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl">
              <p className="text-sm text-gray-400 mb-2">Currently Learning</p>
              <p className="text-lg font-semibold text-white">
                Advanced RAG Architectures • Multi-Agent Systems • Edge Computing
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
    </section>
  );
}
