import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import Load from "../components/load";

import background from "../assets/background.png";
import TypingEffect from "../components/typing";
import TechLogos from "../components/techlogo";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

import ChatButton from "../components/chatbot/chatbutton";
import ChatWindow from "../components/chatbot/chatwindow";
import { getAIResponse } from "../components/chatbot/api";

function Index() {
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  /** Scroll ke halaman target */
  const smoothScrollTo = (id) => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let startTime = null;

    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  /** Kirim dan terima pesan chatbot */
  const handleSendMessage = (userMessage) => {
    const newUserMessage = { sender: "user", text: userMessage };
    setMessages((prev) => [...prev, newUserMessage]);

    setTimeout(() => {
      const aiResponse = getAIResponse(userMessage);
      setMessages((prev) => [...prev, { sender: "ai", text: aiResponse }]);
    }, 1000);
  };

  return (
    <>
      {loading && <Load onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="relative min-h-screen font-[Futura]">
          {/* Hero Section */}
          <section className="relative min-h-screen flex flex-col text-white bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/70 to-transparent"></div>

            <div className="relative z-10 flex flex-col flex-1">
              {/* Header / Navbar */}
              <header className="flex justify-between items-center px-4 md:px-10 py-6">
                <div className="flex items-center space-x-4 md:space-x-8 font-bold">
                  <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
                  <nav className="hidden md:flex space-x-4 md:space-x-8">
                    <a onClick={() => smoothScrollTo("about")} className="hover:text-gray-300 cursor-pointer">
                      ABOUT
                    </a>
                    <a onClick={() => smoothScrollTo("projects")} className="hover:text-gray-300 cursor-pointer">
                      PROJECTS
                    </a>
                    <a onClick={() => smoothScrollTo("contact")} className="hover:text-gray-300 cursor-pointer">
                      CONTACT
                    </a>
                  </nav>
                </div>
                <div className="flex items-center space-x-4 md:space-x-6 text-xl md:text-2xl">
                  <a href="https://linkedin.com/in/topanbagusprasetyo" target="_blank" rel="noreferrer">
                    <FaLinkedin />
                  </a>
                  <a href="https://github.com/Topaanbgs" target="_blank" rel="noreferrer">
                    <FaGithub />
                  </a>
                  <a href="https://www.instagram.com/Topaanbgs" target="_blank" rel="noreferrer">
                    <FaInstagram />
                  </a>
                </div>
              </header>

              {/* Hero Content */}
              <main className="flex-1 flex flex-col justify-center px-4 md:px-10 max-w-4xl mb-10 items-start text-left mx-auto md:mx-0">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Hello, I'm{" "}
                  <span className="text-white">
                    <TypingEffect text="Topan Bagus" speed={120} eraseSpeed={80} delay={3000} />
                  </span>
                  , <br />a Solutions Engineer.
                </h1>
                <p className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl text-white">
                  I transform complex challenges into <br className="hidden sm:block" /> effective digital solutions.
                </p>
                <a
                  href="Curriculum Vitae.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-fit px-5 py-2 text-sm md:text-base font-medium text-black bg-white rounded border border-transparent hover:border-white hover:bg-black hover:text-white transition-colors duration-300"
                >
                  See My CV
                </a>
              </main>
              <TechLogos />
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="bg-black text-white py-20">
            <About />
          </section>

          {/* Projects Section */}
          <section id="projects">
            <Projects />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <Contact />
          </section>

          {/* Footer Section */}
          <footer className="bg-black text-white py-6 text-center">
            <p>&copy; 2025 Topan Bagus Prasetyo. All Rights Reserved.</p>
          </footer>

          {/* Chatbot */}
          <ChatButton onClick={() => setIsChatOpen(!isChatOpen)} />
          {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} onSendMessage={handleSendMessage} messages={messages} />}
        </div>
      )}
    </>
  );
}

export default Index;
