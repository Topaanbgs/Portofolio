import React, { useState, useEffect, useRef } from "react";
import Reviews from "../components/review";

/** Data pengalaman kerja */
const experiences = [
  {
    company: "Universitas Pendidikan Ganesha",
    status: "Part-Time",
    position: "Student Employee",
    location: "Bali",
    year: "Sep 2025 - Present",
    description: "Maintained strong GPA while contributing to academic volunteer activities.",
  },
  {
    company: "PT Rajawali Adikarya",
    status: "Contract",
    position: "Technical Consultant",
    location: "Jakarta",
    year: "2021 - 2023",
    description: "Handled backend architecture, technical support, and database administration.",
  },
  {
    company: "Fibo Sports",
    status: "Internship",
    position: "Graphic Designer",
    location: "Jakarta",
    year: "Jan - Mar 2020",
    description: "Managed design, content creation, and Instagram marketing strategy.",
  },
  {
    company: "Notforhumanity",
    status: "Self-Employed",
    position: "Creative Director",
    location: "Jakarta",
    year: "2020 - 2025",
    description: "Founded and managed brand across design, production, and marketing.",
  },
];

export default function TimelineAbout() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const timelineRefs = useRef([]);

  /** Animasi muncul timeline */
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const newVisible = [];
      timelineRefs.current.forEach((el, i) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const inView = rect.top < windowHeight * 0.75 && rect.bottom > windowHeight * 0.25;
          if (inView) newVisible.push(i);
        }
      });
      setVisibleIndexes(newVisible);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** Teks About Me */
  const aboutText =
    "I am an aspiring AI and technology enthusiast with hands-on experience in branding, marketing, graphic design, and digital strategy. Skilled in analytical problem-solving, proactive decision-making, and fast learning, I thrive both independently and collaboratively within teams. Currently pursuing a Bachelor's degree in Computer Science at Ganesha University of Education, I am passionate about exploring artificial intelligence, machine learning, and intelligent system design to create innovative solutions. My combination of technical proficiency, creative thinking, and data-driven approach enables me to contribute effectively to AI-driven projects and modern digital initiatives.";

  const words = aboutText.split(" ");
  const spacing = 24;
  const headerOffset = 100;

  return (
    <section className="min-h-screen flex px-10 max-w-7xl mx-auto text-white">
      {/* Bagian kiri */}
      <div className="w-1/2 relative flex flex-col items-center">
        <h2 className="text-5xl font-bold mb-8 w-full text-left">Work Experience</h2>

        {/* Garis vertikal utama */}
        <div className="absolute left-1/2 transform -translate-x-1/2 border-l-2 border-white" style={{ top: headerOffset, bottom: spacing / 2 }}></div>

        <div className="pt-[50px] w-full flex flex-col">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleIndexes.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (timelineRefs.current[index] = el)}
                className={`relative w-full flex items-center my-10 transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ height: spacing }}
              >
                {/* Garis horizontal */}
                <div className={`absolute top-1/2 h-0.5 bg-white ${isLeft ? "left-1/2 -translate-x-full w-20" : "left-1/2 w-20"}`}></div>

                {/* Titik tengah */}
                <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full z-10"></div>

                {/* Box pengalaman */}
                <div className={`w-52 px-2 ${isLeft ? "text-right mr-auto" : "text-left ml-auto"}`}>
                  <h3 className="font-bold text-lg">{exp.company}</h3>
                  <p className="text-sm italic">
                    {exp.position} ({exp.status})
                  </p>
                  <p className="text-sm">
                    {exp.location} | {exp.year}
                  </p>
                  <p className="mt-1 text-sm">{exp.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bagian kanan */}
      <div className="w-1/2 pl-10 flex flex-col">
        <h2 className="text-5xl font-bold mb-8">About Me</h2>
        <p className="text-lg leading-relaxed flex flex-wrap gap-1">
          {words.map((word, index) => {
            const threshold = (index / words.length) * window.innerHeight * 1.5;
            const opacity = scrollY > threshold ? 1 : 0.1;
            return (
              <span key={index} style={{ color: `rgba(255,255,255,${opacity})`, transition: "color 0.6s ease" }}>
                {word}{" "}
              </span>
            );
          })}
        </p>
        <Reviews />
      </div>
    </section>
  );
}
