import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const socialLinks = [
  { href: "https://linkedin.com/in/topanbagusprasetyo", icon: FaLinkedin },
  { href: "https://github.com/Topaanbgs", icon: FaGithub },
  { href: "https://www.instagram.com/Topaanbgs", icon: FaInstagram }
];

function SocialLinks() {
  return (
    <div className="flex items-center space-x-4 sm:space-x-6 text-2xl sm:text-3xl justify-center">
      {socialLinks.map(({ href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="hover:text-gray-300 transition-colors"
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;