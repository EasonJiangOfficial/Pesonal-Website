import React from "react";
import Image from "next/image";
import ScrollAnimation from "../scrollAnimation";
import ImageSpinAnimation from "../imageSpinAnimation";
import ProjectsList from "./projectsList";

const ProjectsSection = ({ projectsList }) => { 
  return (
    <div className="items-center justify-center w-full min-h-screen flex flex-col min-h-screen text-white">
      <h1 className="font-header text-7xl sm:text-7xl md:text-7xl lg:text-8xl" data-aos="fade-up">Projects</h1>
      <ProjectsList projects={projectsList} />
    </div>
  );
}
export default ProjectsSection