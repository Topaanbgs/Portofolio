import React, { useRef } from "react";
import Reviews from "../review";
import AnimatedText from "./animatedtext";
import { aboutText } from "../../data/aboutData";
import { useWordCascade } from "../../hooks/useWordCascade";

export default function AboutMe() {
  const aboutRef = useRef(null);
  const words = aboutText.split(" ");
  const wordVis = useWordCascade(words.length, aboutRef);

  return (
    <div 
      ref={aboutRef} 
      className="w-full md:w-1/2 pl-0 md:pl-10 flex flex-col mt-10 md:mt-0"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
      <AnimatedText words={words} wordVis={wordVis} />
      <Reviews />
    </div>
  );
}