import React from "react";

const menuItems = [
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  { id: "contact", label: "CONTACT" }
];

function Navigation({ onNavigate }) {
  return (
    <nav className="flex justify-center gap-8 text-lg lg:text-xl font-semibold mb-4 sm:mb-0">
      {menuItems.map(({ id, label }) => (
        <a
          key={id}
          onClick={() => onNavigate(id)}
          className="hover:text-gray-300 cursor-pointer"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;