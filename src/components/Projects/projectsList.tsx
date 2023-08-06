import React from "react";
import Link from "next/link";
// import {TbBrandNextjs} from "react-icons/Tb"
// import {FaReact,FaHtml5,FaCss3} from "react-icons/Fa"
// import {SiWeb3Dotjs,SiJavascript,SiTypescript,SiTailwindcss} from "react-icons/Si"

interface Project {
  description: string;
  github: string;
  name: string;
  technologies: string[];
}
interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="mt-28 gap-12 place-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lf:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className=" hover:from-gradient-end-green hover:to-emerald-800 hover:-translate-y-4 hover:shadow-2xl hover:ease-in duration-200 rounded-[30px] bg-gradient-to-b from-gradient-start-green to-gradient-end-green p-9 w-full h-[36rem] flex flex-col justify-center items-center text-white"
        >
          <div className="h-2/6"></div>
          <div className="flex flex-col gap-2">
            <Link href={project.github}>
              <h1 className="text-5xl h-4/6 font-header">{project.name}</h1>
            </Link>
            <p className="text-2 font-body">
              {project.description.slice(0, 400) + "..."}
            </p>
            {/* {project.technologies.map((tech) => {
              
              return ();
            })} */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
