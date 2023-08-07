import React from "react";
import Image from "next/image";
import ScrollAnimation from "../scrollAnimation";
import ImageSpinAnimation from "../imageSpinAnimation";
import ProjectsList from "./projectsList";
interface Project {
  description: string;
  github: string;
  name: string;
  technologies: string[];
}
interface ProjectsListProps {
  projectsList: Project[];
}

const Projects:React.FC<ProjectsListProps> = ({ projectsList }) => { 
  return (
    <div className="w-full flex flex-col min-h-screen justify-center items-center text-white">
      <h1 className="font-header text-7xl sm:text-7xl md:text-7xl lg:text-8xl">Projects</h1>
      <ProjectsList projects={projectsList} />
    </div>
  );
}
export default Projects