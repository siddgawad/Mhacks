import ProjectsCarousel from "./ProjectsCarousel";
import { projects } from "@/data/portfolio";

export default function FeaturedProjects() {
  return <ProjectsCarousel projects={projects} />;
}
