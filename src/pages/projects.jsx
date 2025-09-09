import React from 'react';
import { FaGithub, FaLink, FaFigma } from 'react-icons/fa';

const projects = [
  {
    title: "Portofolio Web",
    description: "A personal portfolio website built with Vite.js for an efficient workflow and styled with Tailwind CSS for a clean, responsive design. The site uses JavaScript to add interactive animations, showcasing projects and skills.",
    techStack: ["Vite.js", "React", "Tailwind CSS", "JavaScript", "Chatbot API"],
    image: "/project/porto.png",
    link: "https://-/",
    github: "https://github.com/Topaanbgs/Portofolio",
  },
  {
    title: "Web Technology Practicum",
    description: "A project to build a responsive, interactive webpage using HTML for structure, Tailwind CSS for styling, and JQuery for functionality like form validation.",
    techStack: ["HTML", "Tailwind CSS CDN", "JQuery CDN"],
    image: "/project/-.png",
    link: "https://-/",
    github: "https://-",
  },
  {
    title: "Batur Museum Edu-tourism App",
    description: "The Batur Museum app prototype enhances visitor interaction with digital ticketing, interactive guides, and an AI chatbot for an improved edu-tourism experience.",
    techStack: ["Augmented Reality", "AI Chatbot", "Figma"],
    image: "/project/batur.png",
    link: "https://go.undiksha.ac.id/GeOParK",
    figma: "https://go.undiksha.ac.id/MbAtUr",
  },
  {
    title: "Inventory App - LoanHub",
    description: "A lending app created to address student organization complaints, aiming to improve the efficiency and transparency of borrowing items.",
    techStack: ["React", "Javascript", "Firebase", "CSS"],
    image: "/project/loanhub.png",
    link: "https://loanhub.vercel.app",
    github: "https://github.com/Topaanbgs/LoanHub",
  },
  {
    title: "Innovative App - Eco Companion",
    description: "Eco-Companion is a mobile app for environmental conservation, find recycling points, join eco-activities, and earn Eco-Points for sustainable rewards.",
    techStack: ["Figma"],
    image: "/project/eco.png",
    link: "https://go.undiksha.ac.id/gFaMX",
    figma: "https://go.undiksha.ac.id/wkl8D",
  },
  {
    title: "App Mockup - Kick Avenue",
    description: "A project to design a mockup for the Kick Avenue app, which is a marketplace for authentic sneakers and luxury goods. The work includes user workflow, wireframes, and high-fidelity designs.",
    techStack: ["Userflow Diagrams", "Wireframes", "Figma"],
    image: "/project/kickave.png",
    link: "https://go.undiksha.ac.id/EXojH",
    figma: "https://go.undiksha.ac.id/qx49h",
  },
  // Tambahkan proyek lainnya di sini
];

const Projects = () => {
  return (
    <div className="py-12 md:py-20 bg-white font-[Futura]">
      {/* Kontainer utama dibuat lebih lebar */}
      <div className="container mx-auto px-6 md:px-12 lg:px-10 max-w-screen-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-12 text-black">
          Latest Projects
        </h2>

        {/* Grid 2x3 untuk layout proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black text-white rounded-3xl shadow-xl transition-transform transform hover:scale-105 duration-300 overflow-hidden p-6 relative"
            >
              {/* Bagian teks dan tools */}
              <div className="flex flex-col h-full pb-32">
                {/* Judul Proyek */}
                <h3 className="text-2xl font-bold mb-2">
                  {project.title}
                </h3>
                
                {/* Deskripsi Proyek */}
                <p className="text-sm text-gray-400 mb-4 leading-relaxed text-justify">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white text-xs font-medium px-3 py-1 rounded-full text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link Icons */}
                <div className="flex space-x-4 mb-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaLink className="h-4 w-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                  {/* Kondisi untuk menampilkan ikon GitHub atau Figma */}
                  {project.github && !project.figma && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub className="h-4 w-4" />
                      <span>Repository</span>
                    </a>
                  )}
                  {project.figma && (
                    <a
                      href={project.figma}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaFigma className="h-4 w-4" />
                      <span>Prototype</span>
                    </a>
                  )}
                </div>
              </div>
              <div className="absolute bottom-0 right-0 h-auto rounded-lg overflow-hidden shadow-md transform translate-x-1/4 translate-y-1/4">
                <img
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;