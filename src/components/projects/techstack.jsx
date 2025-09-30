
import React from "react";

const TechStack = ({ techStack }) => {
  return (
    <div className="flex flex-wrap gap-1.5 mb-3">
      {techStack.map((tech, index) => (
        <span 
          key={index} 
          className="bg-white text-[12px] font-medium px-2 py-0.5 rounded-full text-black"
        >
          {tech}
        </span>
      ))}
    </div>
  );
};

export default TechStack;