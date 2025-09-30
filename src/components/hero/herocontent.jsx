import React from "react";
import TypingEffect from "../typing";
import VisitorCounter from "../visitorcounter";

function HeroContent() {
  return (
    <main className="flex-1 flex flex-col justify-center px-4 md:px-28 max-w-4xl items-center md:items-start text-center md:text-left z-20 pb-10">
      <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-snug">
        Hello, I'm{" "}
        <span className="inline-block align-middle whitespace-nowrap">
          <TypingEffect 
            text="Topan Bagus," 
            speed={120} 
            eraseSpeed={80} 
            delay={3000} 
          />
        </span>
        <br className="hidden md:block" />
        <span className="block">a Solutions Engineer.</span>
      </h1>
      
      <p className="mt-4 text-base sm:text-xl md:text-2xl text-white max-w-xl">
        I transform complex challenges into <br /> effective digital solutions.
      </p>
      
      <a
        href="Curriculum Vitae.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 w-fit px-5 py-2 text-sm md:text-base font-medium text-black bg-white rounded border border-transparent hover:border-white hover:bg-black hover:text-white transition-colors duration-300"
      >
        See My CV
      </a>
      
      <VisitorCounter />
    </main>
  );
}

export default HeroContent;