"use client";

import { Github, Linkedin, Mail, Instagram, X as XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import resume from "../../../public/resume.png";

function IconLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-stone-950 hover:text-stone-800 transition-colors
                 relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300
                 hover:after:w-full"
      // ^ animated underline on hover (no layout shift)
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="relative z-10 backdrop-blur-md bg-white/30 border-b border-transparent rounded-lg m-4">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-white bg-clip-text text-transparent">
          Portfolio
        </div>

        <div className="flex gap-4 items-center">
          <IconLink href="https://github.com/siddgawad" label="GitHub">
            <Github className="w-6 h-6" />
          </IconLink>

          <IconLink href="https://www.linkedin.com/in/siddhantgawad/" label="LinkedIn">
            <Linkedin className="w-6 h-6" />
          </IconLink>

          <IconLink href="https://www.instagram.com/siddhantgawaddd/" label="Instagram">
            <Instagram className="w-6 h-6" />
          </IconLink>

          <IconLink href="https://x.com/XforSid" label="X (Twitter)">
            <XIcon className="w-6 h-6" />
          </IconLink>

          {/* mailto can stay a plain anchor */}
          <a
            href="mailto:gawad.developer@gmail.com"
            className="text-stone-950 hover:text-stone-800 transition-colors
                       relative after:content-[''] after:absolute after:left-0 after:-bottom-0.5
                       after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-300
                       hover:after:w-full"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>

          {/* Resume (external) */}
          <Link
            href="https://drive.google.com/file/d/16MRjxxRTYggAug_oFUkcigvlUC5B0whE/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume"
            className="rounded-sm hover:opacity-90 transition-opacity"
          >
            <Image src={resume} alt="Resume" width={22} height={22} />
          </Link>
        </div>
      </div>
    </nav>
  );
}
