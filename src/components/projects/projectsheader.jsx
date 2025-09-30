import React, { useState, useEffect, useRef } from "react";
import { useTypingEffect } from "../../hooks/useTypingEffect";

const ProjectsHeader = () => {
  const headingRef = useRef(null);
  const fullText = "Latest Projects";
  const { typedText, startTyping } = useTypingEffect(fullText);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startTyping();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => {
      if (headingRef.current) {
        observer.unobserve(headingRef.current);
      }
    };
  }, [startTyping]);

  return (
    <h2 
      ref={headingRef} 
      className="text-4xl md:text-5xl font-bold text-center mb-12 md:mb-12 text-black"
    >
      {typedText}
      <span className="inline-block w-[2px] h-10 align-middle bg-black ml-1 animate-blink" />
    </h2>
  );
};

export default ProjectsHeader;