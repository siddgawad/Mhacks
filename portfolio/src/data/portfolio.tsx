import Image from "next/image";
import type { Project } from "@/types/portfolio";
import bkmrk_icon from "../../public/bkmrk_icon.png"

export const projects: Project[] = [
  {
    title: "Bookmark Manager",
    description: "A modern bookmark management system with authentication",
    coverSrc: <Image src={bkmrk_icon} alt={"Bkrk Icon"} />,
    tags: ["HTML", "CSS", "JavaScript","NodeJs","MongoDB","ExpressJs"],
    link: "https://bookmark-rebuild.vercel.app/login.html",
  },
  {
    title: "Realtime Chat App",
    description: "WebSocket-powered real-time messaging application",
    coverSrc: <Image src={bkmrk_icon} alt={"Bkrk Icon"} />,
    tags: ["WebSockets", "TypeScript", "TailwindCss", "NextJs"],
    link: "https://realtime-chat-app-seven-eta.vercel.app/",
  },
  {
    title: "Taskify",
    description: "Full-featured task management platform with team collaboration",
    coverSrc: <Image src={bkmrk_icon} alt={"Bkrk Icon"} />,
    tags: ["HTML", "CSS", "JavaScript","NodeJs","MongoDB","ExpressJs"],
    link: "https://taskify-three-liard.vercel.app/login.html"
  },
  {
    title: "OpenAI translater",
    description: "I use LLM to translate text between languages",
    coverSrc: <Image src={bkmrk_icon} alt={"Bkrk Icon"} />,
    tags: ["TypeScript", "TailwindCss", "LangChain", "OpenAI", "NextJs"],
    link: "https://superdev-2027.vercel.app/"
  },
];

export const skills = [
  "TypeScript", "React", "Next.js", "Node.js",
  "Prisma", "PostgreSQL", "Supabase", "AWS",
  "LangChain", "Docker", "CI/CD",
];
