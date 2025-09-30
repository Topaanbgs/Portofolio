import React from "react";
import { FaGithub, FaLink, FaFigma } from "react-icons/fa";

const ProjectLinks = ({ project }) => {
  const links = [
    {
      condition: project.link,
      href: project.link,
      icon: FaLink,
      label: "Live Demo"
    },
    {
      condition: project.github && !project.figma,
      href: project.github,
      icon: FaGithub,
      label: "Repository"
    },
    {
      condition: project.figma,
      href: project.figma,
      icon: FaFigma,
      label: "Prototype"
    }
  ];

  return (
    <div className="flex space-x-4 mb-4">
      {links.map((link, index) => (
        link.condition && (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
          >
            <link.icon className="h-4 w-4" />
            <span>{link.label}</span>
          </a>
        )
      ))}
    </div>
  );
};

export default ProjectLinks;