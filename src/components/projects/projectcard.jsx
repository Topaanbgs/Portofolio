
import React from "react";
import TechStack from "./techstack";
import ProjectLinks from "./projectlinks";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-black text-white rounded-xl shadow-lg transition-transform transform hover:scale-105 duration-300 overflow-hidden relative flex flex-col h-80">
      
      {/* Tittle & Desc */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
        <p className="text-xs text-gray-400 mb-3 leading-snug line-clamp-4">
          {project.description}
        </p>
        
        <TechStack techStack={project.techStack} />
        <ProjectLinks project={project} />
      </div>

      {/* Image */}
      <div className="relative w-full h-28">
        <img 
          src={project.image} 
          alt={`Preview of ${project.title}`} 
          className="absolute bottom-0 right-0 w-56 h-42 object-cover object-top rounded-sm"
        />
      </div>
    </div>
  );
};

export default ProjectCard;