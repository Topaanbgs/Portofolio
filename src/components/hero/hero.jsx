import React from "react";
import background from "../../assets/background.png";
import HeroHeader from "./heroheader";
import HeroContent from "./herocontent";
import TechLogos from "../techlogo";

function Hero({ onNavigate }) {
  return (
    <section 
      className="relative min-h-screen flex flex-col text-white bg-no-repeat bg-[93%_center] md:bg-center md:bg-cover" 
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-black/60 md:hidden pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col flex-1">
        <HeroHeader onNavigate={onNavigate} />
        <HeroContent />
        <TechLogos />
      </div>
    </section>
  );
}

export default Hero;