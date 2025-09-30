import React, { useState } from "react";
import Load from "../components/load";
import Hero from "../components/hero/hero";
import ChatButton from "../components/chatbot/chatbutton";
import ChatWindow from "../components/chatbot/chatwindow";
import About from "./about";
import Projects from "./projects";
import Contact from "./contact";
import { getAIResponse } from "../data/chatbotData";
import { smoothScrollTo } from "../utils/scroll";

function Index() {
  const [loading, setLoading] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);

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
          <Hero onNavigate={smoothScrollTo} />

          <section id="about" className="bg-black text-white py-20">
            <About />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="contact">
            <Contact />
          </section>

          <footer className="bg-black text-white py-4 text-center">
            <p>&copy; 2025 Topan Bagus Prasetyo. All Rights Reserved.</p>
          </footer>

          <ChatButton onClick={() => setIsChatOpen(!isChatOpen)} />
          {isChatOpen && <ChatWindow onClose={() => setIsChatOpen(false)} onSendMessage={handleSendMessage} messages={messages} />}
        </div>
      )}
    </>
  );
}

export default Index;
