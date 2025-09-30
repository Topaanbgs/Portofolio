
import React from "react";
import ProjectsHeader from "../components/projects/projectsheader";
import ProjectCard from "../components/projects/projectcard";
import { projectsData } from "../data/projectsData";

const Projects = () => {
  return (
    <div className="py-12 md:py-20 bg-white font-[Futura]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-screen-2xl">
        <ProjectsHeader />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
