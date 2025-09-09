// src/components/Projects.jsx

import React from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

// Data statis untuk proyek Anda (diperbarui dengan data yang lebih lengkap)
const projects = [
  {
    title: "Next Form",
    description: "A Simple And Powerful Form Builder With Drag And Drop Features.",
    techStack: ["Next.js 14", "Tailwindcss", "Shadcn/UI", "Drizzle"],
    image: "/images/next-form-preview.png",
    link: "https://next-form-builder.vercel.app/",
    github: "https://github.com/Topaanbgs/next-form-builder",
  },
  {
    title: "Movie App",
    description: "Immersive movie app crafted with cutting-edge technologies, combining the power of Next.js, the style of Tailwind CSS, and the rich data from The Movie Database (TMDB) API.",
    techStack: ["Next.js", "Tailwindcss", "TMDB API"],
    image: "/images/movie-app-preview.png",
    link: "https://movie-app-topan.vercel.app/",
    github: "https://github.com/Topaanbgs/movie-app",
  },
  {
    title: "Open Trip Website",
    description: "This website was created to fulfill the final assignment of the SMKDEV Frontend Bootcamp Batch 1. I learn a lot, like how to slicing design UI/UX to website and learning about Next.js and Tailwindcss.",
    techStack: ["Next.js", "Tailwindcss", "Typescript", "Next-auth"],
    image: "/images/opentrip-preview.png",
    link: "https://open-trip-one.vercel.app/",
    github: "https://github.com/Topaanbgs/OpenTrip",
  },
  {
    title: "Sushiman Landing Page",
    description: "This is sushi landing page website for sushi restaurant.",
    techStack: ["Vite", "HTML", "CSS", "Javascript"],
    image: "/images/sushiman-preview.png",
    link: "https://sushiman-ten.vercel.app/",
    github: "https://github.com/Topaanbgs/Sushiman",
  },
  {
    title: "Votastic",
    description: "Votastic is a revolutionary online voting application. This innovative platform brings seamless, secure, and transparent voting experiences to organizations, institutions, and communities of all sizes.",
    techStack: ["Next.js", "Next-auth", "PrismaORM", "MongoDB"],
    image: "/images/votastic-preview.png",
    link: "https://votastic.vercel.app/",
    github: "https://github.com/Topaanbgs/Votastic",
  },
  {
    title: "Votastic",
    description: "Votastic is a revolutionary online voting application. This innovative platform brings seamless, secure, and transparent voting experiences to organizations, institutions, and communities of all sizes.",
    techStack: ["Next.js", "Next-auth", "PrismaORM", "MongoDB"],
    image: "/images/votastic-preview.png",
    link: "https://votastic.vercel.app/",
    github: "https://github.com/Topaanbgs/Votastic",
  },
  // Tambahkan proyek lainnya di sini
];

const Projects = () => {
  return (
    // Background halaman Projects diubah menjadi putih
    <div className="py-12 md:py-20 bg-white font-[Futura]">
      {/* Kontainer utama dibuat lebih lebar */}
      <div className="container mx-auto px-6 md:px-12 lg:px-10 max-w-screen-2xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-12 text-black">
          My Projects
        </h2>

        {/* Grid 2x3 untuk layout proyek */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            // Box proyek dengan background hitam dan teks putih
            <div
              key={index}
              className="bg-black text-white rounded-3xl shadow-xl transition-transform transform hover:scale-105 duration-300 overflow-hidden p-6 relative"
            >
              {/* Bagian teks dan tools */}
              <div className="flex flex-col h-full">
                {/* Judul Proyek */}
                <h3 className="text-2xl font-bold mb-2">
                  {project.title}
                </h3>
                
                {/* Deskripsi Proyek */}
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <FaGithub className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

                {/* Gambar Dokumentasi Proyek */}
                <div className="mt-auto relative rounded-lg overflow-hidden border border-gray-700 shadow-md">
                  <img
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;