import React, { useState, useEffect, useRef } from "react";

// Components
import Reviews from "../components/review";

// Work experience data
const experiences = [
  { company: "Universitas Pendidikan Ganesha", status: "Part-Time", position: "Student Employee", location: "Bali", year: "Sep 2025 - Present", description: "Maintained strong GPA while contributing to academic volunteer activities." },
  { company: "PT Rajawali Adikarya", status: "Contract", position: "Technical Consultant", location: "Jakarta", year: "2021 - 2023", description: "Handled backend architecture, technical support, and database administration." },
  { company: "Fibo Sports", status: "Internship", position: "Graphic Designer", location: "Jakarta", year: "Jan - Mar 2020", description: "Managed design, content creation, and Instagram marketing strategy." },
  { company: "Notforhumanity", status: "Self-Employed", position: "Creative Director", location: "Jakarta", year: "2020 - 2025", description: "Founded and managed brand across design, production, and marketing." },
];

export default function TimelineAbout() {
  const aboutText =
    "I am an aspiring AI and technology enthusiast with hands-on experience in branding, marketing, graphic design, and digital strategy. Skilled in analytical problem-solving, proactive decision-making, and fast learning, I thrive both independently and collaboratively within teams. Currently pursuing a Bachelor's degree in Computer Science at Ganesha University of Education, I am passionate about exploring artificial intelligence, machine learning, and intelligent system design to create innovative solutions. My combination of technical proficiency, creative thinking, and data-driven approach enables me to contribute effectively to AI-driven projects and modern digital initiatives.";

  const words = aboutText.split(" ");
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const [wordVis, setWordVis] = useState(() => Array(words.length).fill(false));

  const timelineRefs = useRef([]);
  const timersRef = useRef([]);
  const lineRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const aboutRef = useRef(null);

  // Clear all timers on unmount
  const clearAllTimers = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  };

  // Start word cascade animation
  const startWordCascade = (speedMs = 25) => {
    clearAllTimers();
    setWordVis(Array(words.length).fill(false));
    words.forEach((_, i) => {
      const t = setTimeout(() => {
        setWordVis((prev) => {
          const copy = [...prev];
          copy[i] = true;
          return copy;
        });
      }, i * speedMs);
      timersRef.current.push(t);
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = [];
      timelineRefs.current.forEach((el, i) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75 && rect.bottom > window.innerHeight * 0.25) {
            newVisible.push(i);
          }
        }
      });
      setVisibleIndexes(newVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === aboutRef.current) {
            if (entry.isIntersecting) startWordCascade();
            else setWordVis(Array(words.length).fill(false));
          }
        });
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);

    if (firstRef.current && lastRef.current && lineRef.current) {
      const top = firstRef.current.offsetTop + firstRef.current.offsetHeight / 2;
      const bottom = lastRef.current.offsetTop + lastRef.current.offsetHeight / 2;
      lineRef.current.style.top = `${top}px`;
      lineRef.current.style.height = `${bottom - top}px`;
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
      clearAllTimers();
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row px-5 md:px-10 max-w-7xl mx-auto text-white relative">
      {/* Work Experience */}
      <div className="w-full md:w-1/2 relative flex flex-col items-start md:items-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 w-full text-left">Work Experience</h2>
        <div ref={lineRef} className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 border-l-2 border-white"></div>
        <div className="pt-8 w-full flex flex-col">
          {experiences.map((exp, idx) => {
            const isVisible = visibleIndexes.includes(idx);
            const isLeft = idx % 2 === 0;
            return (
              <div
                key={idx}
                ref={(el) => {
                  timelineRefs.current[idx] = el;
                  if (idx === 0) firstRef.current = el;
                  if (idx === experiences.length - 1) lastRef.current = el;
                }}
                className={`relative w-full flex items-center mb-8 transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} ${isLeft ? "md:mr-auto" : "md:ml-auto"} -mt-3 md:-mt-10`}
              >
                <div className={`absolute top-1/2 h-0.5 bg-white ${isLeft ? "left-3 md:left-1/2 md:-translate-x-full w-4 md:w-20" : "left-3 md:left-1/2 w-4 md:w-20"}`}></div>
                <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full z-10 left-2 md:left-1/2 md:-translate-x-1/2"></div>
                <div className={`w-full md:w-48 px-2 pl-10 md:px-0 ${isLeft ? "md:text-right md:mr-auto" : "md:text-left md:ml-auto"}`}>
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

      {/* About Me */}
      <div ref={aboutRef} className="w-full md:w-1/2 pl-0 md:pl-10 flex flex-col mt-10 md:mt-0">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
        <p className="text-lg leading-relaxed flex flex-wrap gap-1">
          {words.map((word, idx) => (
            <span
              key={idx}
              style={{
                color: wordVis[idx] ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.12)",
                transform: wordVis[idx] ? "translateY(0px)" : "translateY(6px)",
                transition: "color 360ms ease, transform 360ms ease",
                pointerEvents: "none",
              }}
            >
              {word}{" "}
            </span>
          ))}
        </p>
        <Reviews />
      </div>
    </section>
  );
}
