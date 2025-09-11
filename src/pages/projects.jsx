import React, { useState, useEffect, useRef } from "react";
import { FaGithub, FaLink, FaFigma } from "react-icons/fa";

// Project data
const projects = [
  {
    title: "Portofolio Web",
    description:
      "A personal portfolio website built with Vite.js for an efficient workflow and styled with Tailwind CSS for a clean, responsive design. The site uses JavaScript to add interactive animations, showcasing projects and skills.",
    techStack: ["Vite.js", "React", "Tailwind CSS", "JavaScript", "Chatbot API"],
    image: "project/porto.png",
    link: "https://topaanbgs.github.io/Portofolio",
    github: "https://github.com/Topaanbgs/Portofolio",
  },
  {
    title: "Web Technology Practicum",
    description: "A project to build a responsive, interactive webpage using HTML for structure, Tailwind CSS for styling, and JQuery for functionality like form validation.",
    techStack: ["HTML", "Tailwind CSS CDN", "JQuery CDN"],
    image: "project/tekweb.png",
    link: "practicum/bab1.html",
    github: "https://github.com/Topaanbgs/Portofolio/tree/main/public/practicum",
  },
  {
    title: "Batur Museum Edu-tourism App",
    description: "The Batur Museum app prototype enhances visitor interaction with digital ticketing, interactive guides, and an AI chatbot for an improved edu-tourism experience.",
    techStack: ["Augmented Reality", "AI Chatbot", "Figma"],
    image: "project/batur.png",
    link: "https://go.undiksha.ac.id/GeOParK",
    figma: "https://go.undiksha.ac.id/MbAtUr",
  },
  {
    title: "Inventory App - LoanHub",
    description: "A lending app created to address student organization complaints, aiming to improve the efficiency and transparency of borrowing items.",
    techStack: ["React", "Javascript", "Firebase", "CSS"],
    image: "project/loanhub.png",
    link: "https://loanhub.vercel.app",
    github: "https://github.com/Topaanbgs/LoanHub",
  },
  {
    title: "Innovative App - Eco Companion",
    description: "Eco-Companion is a mobile app for environmental conservation, find recycling points, join eco-activities, and earn Eco-Points for sustainable rewards.",
    techStack: ["Figma"],
    image: "project/eco.png",
    link: "https://go.undiksha.ac.id/gFaMX",
    figma: "https://go.undiksha.ac.id/wkl8D",
  },
  {
    title: "App Mockup - Kick Avenue",
    description: "Created a high-fidelity app mockup for Kick Avenue, a luxury goods marketplace. The project included developing user workflows, wireframes, and final designs.",
    techStack: ["Figma"],
    image: "project/kickave.png",
    link: "https://go.undiksha.ac.id/EXojH",
    figma: "https://go.undiksha.ac.id/qx49h",
  },
];

const Projects = () => {
  const fullText = "Latest Projects";
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const headingRef = useRef(null);

  // Trigger typing effect on intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTyping && typedText === "") {
            setIsTyping(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => {
      if (headingRef.current) observer.unobserve(headingRef.current);
    };
  }, [isTyping, typedText]);

  // Trigger delete effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!isDeleting && !isTyping && typedText === fullText) {
        setIsDeleting(true);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [typedText, isDeleting, isTyping, fullText]);

  // Handle typing and deleting animation
  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (typedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 150);
      } else {
        setIsTyping(false);
      }
    } else if (isDeleting) {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length - 1));
        }, 80);
      } else {
        setIsDeleting(false);
      }
    }
    return () => clearTimeout(timeout);
  }, [typedText, isTyping, isDeleting, fullText]);

  return (
    <div className="py-12 md:py-20 bg-white font-[Futura]">
      <div className="container mx-auto px-6 md:px-12 lg:px-10 max-w-screen-2xl">
        <h2 ref={headingRef} className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-12 text-black">
          {typedText}
          <span className="inline-block w-[2px] h-10 align-middle bg-black ml-1 animate-blink" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="bg-black text-white rounded-3xl shadow-xl transition-transform transform hover:scale-105 duration-300 overflow-hidden relative flex flex-col">
              <div className="flex flex-col flex-grow p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed text-justify">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span key={i} className="bg-white text-xs font-medium px-3 py-1 rounded-full text-black">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mb-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300">
                      <FaLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.github && !project.figma && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300">
                      <FaGithub className="h-4 w-4" />
                      <span>Repository</span>
                    </a>
                  )}
                  {project.figma && (
                    <a href={project.figma} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300">
                      <FaFigma className="h-4 w-4" />
                      <span>Prototype</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="relative w-full h-48 overflow-hidden rounded-b-2xl">
                <img src={project.image} alt={`Preview of ${project.title}`} className="absolute w-[100%] h-[100%] rounded-lg object-cover object-top transform translate-x-1/4 translate-y-1/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
