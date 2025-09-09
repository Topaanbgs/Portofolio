import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
import background from "../assets/background.png";
import TechLogos from "../components/techlogo";
import Projects from "./projects";
import TypingEffect from "../components/typing";
import About from "./about";
import Load from "../components/load";

// ============ Import komponen chatbot yang baru ============
import ChatButton from "../components/chatbot/chatbutton";
import ChatWindow from "../components/chatbot/chatwindow";
import { getAIResponse } from "../components/chatbot/api";

function Index() {
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  // Fungsi baru untuk smooth scroll dengan kecepatan yang bisa diatur
  const smoothScrollTo = (id) => {
    const targetElement = document.getElementById(id);
    if (!targetElement) return;

    const startPosition = window.pageYOffset;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200; // Durasi dalam milidetik (misalnya, 1200ms = 1.2 detik)
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Fungsi Easing (untuk pergerakan yang lebih halus)
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  // Fungsi untuk mengirim pesan ke chatbot (tidak berubah)
  const handleSendMessage = (userMessage) => {
    const newUserMessage = { sender: "user", text: userMessage };
    setMessages((prevMessages) => [...prevMessages, newUserMessage]);
    setTimeout(() => {
      const aiResponse = getAIResponse(userMessage);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "ai", text: aiResponse },
      ]);
    }, 1000);
  };

  return (
    <>
      {loading && <Load onFinish={() => setLoading(false)} />}
      {!loading && (
        <div className="relative min-h-screen font-[Futura]">
          <section
            className="relative min-h-screen flex flex-col text-white bg-cover bg-center"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/100 via-black/70 to-transparent"></div>
            <div className="relative z-10 flex flex-col flex-1">
              <header className="flex justify-between items-center px-10 py-6">
                <div className="flex items-center space-x-8 font-bold">
                  <img src={logo} alt="Logo" className="h-10 w-auto" />
                  {/* Gunakan fungsi baru untuk smooth scroll */}
                  <a onClick={() => smoothScrollTo('about')} className="hover:text-gray-300 cursor-pointer">
                    ABOUT
                  </a>
                  <a onClick={() => smoothScrollTo('projects')} className="hover:text-gray-300 cursor-pointer">
                    PROJECTS
                  </a>
                  <a onClick={() => smoothScrollTo('contact')} className="hover:text-gray-300 cursor-pointer">
                    CONTACT
                  </a>
                </div>
                <div className="flex items-center space-x-6 text-2xl">
                  <a
                    href="https://linkedin.com/in/topanbagusprasetyo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://github.com/Topaanbgs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.instagram.com/Topaanbgs"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </header>

              <main className="flex-1 flex flex-col justify-center px-10 max-w-4xl mb-10 items-start text-left ml-0 md:ml-10">
                <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                  Hello, I'm{" "}
                  <span className="text-white">
                    <TypingEffect
                      text="Topan Bagus"
                      speed={120}
                      eraseSpeed={80}
                      delay={3000}
                    />
                  </span>
                  , <br />a Solutions Engineer.
                </h1>
                <p className="mt-6 text-3xl text-white">
                  I transform complex challenges into <br /> effective digital
                  solutions.
                </p>

                <a
                  href="/Curriculum Vitae.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-fit px-7 py-2 text-m font-medium text-black bg-white rounded border border-transparent hover:border-white hover:bg-black hover:text-white transition-colors duration-300"
                >
                  See My CV
                </a>
              </main>
              <TechLogos />
            </div>
          </section>

          <section id="about" className="bg-black text-white py-20">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <ChatButton onClick={() => setIsChatOpen(!isChatOpen)} />
          {isChatOpen && (
            <ChatWindow
              onClose={() => setIsChatOpen(false)}
              onSendMessage={handleSendMessage}
              messages={messages}
            />
          )}
        </div>
      )}
    </>
  );
}

export default Index;