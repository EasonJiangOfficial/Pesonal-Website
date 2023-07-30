import React from "react";
import Image from "next/image";
import ScrollAnimation from "./scrollAnimation";
import ImageSpinAnimation from "./imageSpinAnimation";
import ProjectsList from "./projectsList";

export default function Projects() {
  return (
    <div className="w-full flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-8xl">Projects</h1>
      <ProjectsList />
    </div>
  );
}
