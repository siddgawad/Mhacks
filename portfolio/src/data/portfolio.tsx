import Image from "next/image";
import type { Project } from "@/types/portfolio";
import bkmrk_icon from "../../public/bkmrk_icon.png"

export const projects: Project[] = [
  {
    title: "Bookmark Manager",
    description: "A modern bookmark management system with authentication",
    coverSrc: <Image src={bkmrk_icon} alt={"Bkrk Icon"} />,
    tags: ["React", "TypeScript", "Supabase"],
    link: "https://bookmark-rebuild.vercel.app/login.html",
  },
  {
    title: "Realtime Chat App",
    description: "WebSocket-powered real-time messaging application",
    coverSrc: <Image src={bkmrk_icon} alt={"Bkrk Icon"} />,
    tags: ["Node.js", "Socket.io", "React"],
    link: "https://realtime-chat-app-seven-eta.vercel.app/",
  },
  {
    title: "Taskify",
    description: "Full-featured task management platform with team collaboration",
    coverSrc: <Image src={bkmrk_icon} alt={"Bkrk Icon"} />,
    tags: ["Next.js", "Prisma", "PostgreSQL"],
    link: "https://taskify-three-liard.vercel.app/login.html"
  },
  {
    title: "SuperDev Portfolio",
    description: "Advanced portfolio showcase with modern design patterns",
    coverSrc: <Image src={bkmrk_icon} alt={"Bkrk Icon"} />,
    tags: ["React", "Tailwind", "Animations"],
    link: "https://superdev-2027.vercel.app/"
  },
];

export const skills = [
  "TypeScript", "React", "Next.js", "Node.js",
  "Prisma", "PostgreSQL", "Supabase", "AWS",
  "LangChain", "Docker", "CI/CD",
];
