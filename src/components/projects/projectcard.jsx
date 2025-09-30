import React from "react";
import TechStack from "./techstack";
import ProjectLinks from "./projectlinks";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-black text-white rounded-3xl shadow-xl transition-transform transform hover:scale-105 duration-300 overflow-hidden relative flex flex-col">
      <div className="flex flex-col flex-grow p-6">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        
        <p className="text-sm text-gray-400 mb-4 leading-relaxed text-justify">
          {project.description}
        </p>
        
        <TechStack techStack={project.techStack} />
        <ProjectLinks project={project} />
      </div>
      
      <div className="relative w-full h-48 overflow-hidden rounded-b-2xl">
        <img 
          src={project.image} 
          alt={`Preview of ${project.title}`} 
          className="absolute w-[100%] h-[100%] rounded-lg object-cover object-top transform translate-x-1/4 translate-y-1/6" 
        />
      </div>
    </div>
  );
};

export default ProjectCard;