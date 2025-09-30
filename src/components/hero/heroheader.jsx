import React from "react";
import logo from "../../assets/logo.png";
import Navigation from "./navigation";
import SocialLinks from "./sociallinks";

function HeroHeader({ onNavigate }) {
  return (
    <header className="px-4 md:px-10 py-4">
      <div className="flex flex-col sm:hidden items-center">
        <img src={logo} alt="Logo" className="h-10 w-auto mb-4" />
        <Navigation onNavigate={onNavigate} />
        <SocialLinks />
      </div>
      
      <div className="hidden sm:flex justify-between items-center">
        <div className="flex items-center gap-8">
          <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
          <Navigation onNavigate={onNavigate} />
        </div>
        <SocialLinks />
      </div>
    </header>
  );
}

export default HeroHeader;