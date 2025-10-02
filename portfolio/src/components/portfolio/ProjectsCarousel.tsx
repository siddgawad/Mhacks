"use client";

import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import type { Project } from "@/types/portfolio";

type Props = {
  projects: Project[];
};

export default function ProjectsCarousel({ projects }: Props) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <div className="space-y-12">
      <div className="relative">
        {/* Make items stretch so slides get equal height */}
        <Carousel setApi={setApi} className="w-full max-w-6xl mx-auto">
          <CarouselContent className="-ml-4 items-stretch">
            {projects.map((project, index) => (
              /* Make each slide a flex row so child can fill height */
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3 flex"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group w-full h-full"
                  data-cursor-hover="true"
                >
                  {/* Wrapper fills height to allow Card to stretch */}
                  <div
                    className="relative h-full group flex"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Card
                      className="border border-white/10 bg-gray-900/50 backdrop-blur-xl
                                 hover:bg-gray-900/70 hover:border-orange-500/50
                                 transition-all duration-500 cursor-pointer overflow-hidden
                                 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10
                                 h-full w-full flex flex-col"
                    >
                      {/* Keep a fixed aspect so image area doesn't collapse */}
                      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-orange-500/10 to-red-500/10 flex-shrink-0">
                        <div className="absolute inset-0 flex items-center justify-center p-6 group-hover:scale-110 transition-transform duration-700">
                          {project.coverSrc}
                        </div>

                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* External link icon */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                          <ExternalLink className="w-4 h-4 text-slate-900" />
                        </div>
                      </div>

                      <CardHeader className="space-y-3 pb-4">
                        <CardTitle className="text-xl font-semibold text-white group-hover:text-orange-400 transition-colors line-clamp-1">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>

                      {/* Push tags row to bottom so all cards align */}
                      <CardContent className="pt-0 mt-auto">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.slice(0, 3).map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="text-xs px-3 py-1 rounded-full bg-orange-500/10 text-orange-400/70 border border-orange-500/20 group-hover:border-orange-500/40 group-hover:text-orange-400 transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && (
                            <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/50 border border-white/10">
                              +{project.tags.length - 3}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>

                    {/* Non-interactive hover gradient overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-500/0 to-red-500/0 group-hover:from-orange-500/10 group-hover:to-red-500/10 transition-all duration-500 rounded-xl z-10" />
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation + progress */}
        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            onClick={scrollPrev}
            disabled={current === 0}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 group"
            aria-label="Previous project"
            data-cursor-hover="true"
          >
            <ChevronLeft className="w-5 h-5 text-white group-hover:scale-110 group-hover:text-orange-400 transition-all" />
          </button>

          <div className="flex items-center gap-3">
            <span className="text-white/90 font-medium text-lg min-w-[3ch] text-right">
              {String(current + 1).padStart(2, "0")}
            </span>
            <div className="w-20 h-0.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-500 to-red-500 rounded-full transition-all duration-300"
                style={{ width: `${count ? ((current + 1) / count) * 100 : 0}%` }}
              />
            </div>
            <span className="text-white/50 font-medium text-lg min-w-[3ch]">
              {String(count).padStart(2, "0")}
            </span>
          </div>

          <button
            onClick={scrollNext}
            disabled={current === count - 1}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-orange-500/20 hover:border-orange-500/50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 group"
            aria-label="Next project"
            data-cursor-hover="true"
          >
            <ChevronRight className="w-5 h-5 text-white group-hover:scale-110 group-hover:text-orange-400 transition-all" />
          </button>
        </div>
      </div>
    </div>
  );
}
