import React, { useEffect, useRef, useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPhp,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiLaravel, SiPostman, SiMysql, SiDocker, SiKubernetes } from "react-icons/si";

function TechLogos() {
  const logos = [
    <FaHtml5 className="text-orange-600" />,
    <FaCss3Alt className="text-blue-600" />,
    <FaJs className="text-yellow-400" />,
    <FaNodeJs className="text-green-600" />,
    <FaReact className="text-cyan-400" />,
    <FaGitAlt className="text-red-500" />,
    <FaGithub className="text-gray-300" />,
    <SiTailwindcss className="text-cyan-500" />,
    <FaPhp className="text-indigo-600" />,
    <FaPython className="text-blue-400" />,
    <FaJava className="text-red-700" />,
    <SiLaravel className="text-red-600" />,
    <SiPostman className="text-orange-500" />,
    <SiMysql className="text-blue-800" />,
    <SiDocker className="text-blue-500" />,
    <SiKubernetes className="text-blue-400" />,
  ];

  const containerRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const speedRef = useRef(0.5);
  const directionRef = useRef(1);
  const posRef = useRef(0);

  useEffect(() => {
    let animationFrame;

    const tick = () => {
      if (!paused && containerRef.current) {
        posRef.current += speedRef.current * directionRef.current;

        // Seamless loop
        const totalWidth = containerRef.current.scrollWidth / 2;
        if (posRef.current > 0) posRef.current = -totalWidth;
        if (posRef.current < -totalWidth) posRef.current = 0;

        containerRef.current.style.transform = `translateX(${posRef.current}px)`;
      }
      animationFrame = requestAnimationFrame(tick);
    };

    tick();
    return () => cancelAnimationFrame(animationFrame);
  }, [paused]);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > (window.lastScrollY || 0)) {
        directionRef.current = 1;
        speedRef.current = 2;
      } else {
        directionRef.current = -1;
        speedRef.current = 2;
      }
      window.lastScrollY = currentY;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        speedRef.current = 0.5;
        directionRef.current = 1;
      }, 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-white py-4">
      <div
        ref={containerRef}
        className="flex space-x-10 text-5xl cursor-pointer"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        style={{ willChange: "transform" }}
      >
        {logos.concat(logos).map((icon, idx) => (
          <div key={idx} className="flex items-center justify-center">
            {icon}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TechLogos;
