import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

// Assets
import logo from "../assets/logo.png";
import background from "../assets/background.png";

// Components
import Load from "../components/load";
import TypingEffect from "../components/typing";
import TechLogos from "../components/techlogo";
import ChatButton from "../components/chatbot/chatbutton";
import ChatWindow from "../components/chatbot/chatwindow";

// Sections
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";

// API
import { getAIResponse } from "../components/chatbot/api";

function Index() {
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  // Smooth scroll animation
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

  // Handle chatbot messages
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
          <section className="relative min-h-screen flex flex-col text-white bg-no-repeat bg-[93%_center] md:bg-center md:bg-cover" style={{ backgroundImage: `url(${background})` }}>
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-transparent pointer-events-none"></div>
            <div className="absolute inset-0 bg-black/60 md:hidden pointer-events-none"></div>

            <div className="relative z-10 flex flex-col flex-1">
              <header className="px-4 md:px-10 py-4">
                {/* Mobile & Web Navbar */}
                <div className="flex flex-col sm:hidden items-center">
                  <img src={logo} alt="Logo" className="h-10 w-auto mb-4" />
                  <nav className="flex justify-center gap-8 text-lg font-semibold mb-4">
                    <a onClick={() => smoothScrollTo("about")} className="hover:text-gray-300 cursor-pointer">ABOUT</a>
                    <a onClick={() => smoothScrollTo("projects")} className="hover:text-gray-300 cursor-pointer">PROJECTS</a>
                    <a onClick={() => smoothScrollTo("contact")} className="hover:text-gray-300 cursor-pointer">CONTACT</a>
                  </nav>
                  <div className="flex space-x-6 text-2xl justify-center">
                    <a href="https://linkedin.com/in/topanbagusprasetyo" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/Topaanbgs" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://www.instagram.com/Topaanbgs" target="_blank" rel="noreferrer"><FaInstagram /></a>
                  </div>
                </div>

                <div className="hidden sm:flex justify-between items-center">
                  <div className="flex items-center gap-8">
                    <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto" />
                    <nav className="flex gap-8 text-lg lg:text-xl font-semibold">
                      <a onClick={() => smoothScrollTo("about")} className="hover:text-gray-300 cursor-pointer">ABOUT</a>
                      <a onClick={() => smoothScrollTo("projects")} className="hover:text-gray-300 cursor-pointer">PROJECTS</a>
                      <a onClick={() => smoothScrollTo("contact")} className="hover:text-gray-300 cursor-pointer">CONTACT</a>
                    </nav>
                  </div>
                  <div className="flex items-center space-x-4 text-3xl">
                    <a href="https://linkedin.com/in/topanbagusprasetyo" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/Topaanbgs" target="_blank" rel="noreferrer"><FaGithub /></a>
                    <a href="https://www.instagram.com/Topaanbgs" target="_blank" rel="noreferrer"><FaInstagram /></a>
                  </div>
                </div>
              </header>

              <main className="flex-1 flex flex-col justify-center px-4 md:px-28 max-w-4xl items-center md:items-start text-center md:text-left z-20 pb-10">
                <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold leading-snug">
                  Hello, I'm{" "}
                  <span className="inline-block align-middle whitespace-nowrap">
                    <TypingEffect text="Topan Bagus," speed={120} eraseSpeed={80} delay={3000} />
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
              </main>
              <TechLogos />
            </div>
          </section>

          <section id="about" className="bg-black text-white py-20"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
          <footer className="bg-black text-white py-4 text-center"><p>&copy; 2025 Topan Bagus Prasetyo. All Rights Reserved.</p></footer>
          <ChatButton onClick={() => setIsChatOpen(!isChatOpen)} />
          {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} onSendMessage={handleSendMessage} messages={messages} />}
        </div>
      )}
    </>
  );
}

export default Index;