import React from "react";

const TechStack = ({ techStack }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {techStack.map((tech, index) => (
        <span 
          key={index} 
          className="bg-white text-xs font-medium px-3 py-1 rounded-full text-black"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStack;