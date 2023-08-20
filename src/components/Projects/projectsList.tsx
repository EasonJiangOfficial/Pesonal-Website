import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { TbBrandNextjs } from "react-icons/Tb";
import { FaReact, FaHtml5, FaCss3, FaInfinity } from "react-icons/fa";
import {
  SiWeb3Dotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFirebase,
} from "react-icons/si";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

interface Project {
  description: string;
  github: string;
  name: string;
  technologies: string[];
  // image_url: string;
}
interface ProjectsListProps {
  projects: Project[];
}

interface TechLogos {
  [key: string]: JSX.Element;
}
interface ProejectURLs {
  [key: string]: string;
}
const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  const techLogos: TechLogos = {
    // "NextJs": <TbBrandNextjs />,
    React: <FaReact />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Web3: <SiWeb3Dotjs />,
    JavaScript: <SiJavascript />,
    TypeScript: <SiTypescript />,
    Tailwind: <SiTailwindcss />,
    Firebase: <SiFirebase />,
    Motoko: <FaInfinity />,
  };
  const [imageURLs, setImageURLs] = useState({});

  // useEffect(() => {
  //   const storage = getStorage();

  //   Promise.all(
  //     projects.map((project) => {
  //       const storageRef = ref(storage, project.image_url);
  //     })
  //   ).then((urls) => {
  //     let urlObject : ProejectURLs = {};

  //     projects.forEach((project, index) => {
  //       urlObject[project.name] = urls[index]; // assuming each project has a unique 'id'
  //     });
  //     setImageURLs(urlObject);
  //   });
  // }, []);

  return (
    <div className="mt-28 gap-12 place-items-center grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <div
          key={index}
          className=" hover:from-gradient-end-green hover:to-emerald-800 hover:-translate-y-4 hover:shadow-2xl hover:ease-in duration-200 rounded-[30px] bg-gradient-to-b from-gradient-start-green to-gradient-end-green p-4 w-full h-[30em] sm:h-[30rem] md:h-[32rem] lg:h-[34rem] flex flex-col justify-center items-center text-white"
        >
          <div className="h-3/6">
            {/* <Image
              src={imageURLs[project.id]}
              sizes="100%"
              fill={true}
              alt={`Picture of ${project.name}`}
            /> */}
          </div>
          <div className="flex flex-col gap-2">
            <Link href={project.github}>
              <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl h-4/6 font-header">
                {project.name}
              </h1>
            </Link>
            <p className="text-2 font-body">
              {project.description.slice(0, 1000) + "..."}
            </p>
            <div className="w-full flex flex-row gap-2">
              {project.technologies.map((tech) => {
                return techLogos[tech];
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
