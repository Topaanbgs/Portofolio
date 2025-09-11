import React, { useState, useEffect, useRef } from "react";
import { getAIResponse } from "./api";

const ChatWindow = ({ onClose }) => {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Initial message and auto-scroll logic
  useEffect(() => {
    const initialMessage = {
      text: "I am Amoraaa, your virtual assistant. Do you have any questions?",
      sender: "bot",
      timestamp: new Date().toLocaleString("en-US").replace(",", ""),
    };
    setChatMessages([initialMessage]);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = {
      text: input,
      sender: "user",
      timestamp: new Date().toLocaleString("en-US").replace(",", ""),
    };

    setChatMessages((prev) => [...prev, newUserMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const botResponseText = getAIResponse(newUserMessage.text);
      const botResponseMessage = {
        text: botResponseText,
        sender: "bot",
        timestamp: new Date().toLocaleString("en-US").replace(",", ""),
      };

      setChatMessages((prev) => [...prev, botResponseMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-[90px] right-5 w-[280px] h-[380px] bg-white border-2 border-black rounded-[15px] shadow-[4px_4px_0px_#000] z-50 flex flex-col">
      {/* Header */}
      <div className="p-2 border-b-2 border-black flex justify-between items-center bg-[#f0f0f0] rounded-t-[13px]">
        <span className="text-black font-bold text-lg">Get In Touch</span>
        <button onClick={onClose} className="border-none bg-none cursor-pointer text-xl text-black">
          ✖
        </button>
      </div>

      {/* Message body */}
      <div className="flex-1 p-2 overflow-y-auto bg-[#e8e8e8]">
        {chatMessages.map((msg, index) => (
          <div key={index} className="mb-5">
            {msg.sender === "bot" ? (
              <div className="flex items-start mb-[5px]">
                <img src="amoraaa.png" alt="Bot Profile" className="w-[30px] h-[30px] rounded-full border-2 border-black mr-2" />
                <div className="p-[6px] rounded-[15px] border-2 border-black bg-white shadow-[2px_2px_0px_#000] max-w-[calc(100%-45px)] break-words text-black text-[12px]">{msg.text}</div>
              </div>
            ) : (
              <div className="text-right">
                <span className="inline-block p-[6px] rounded-[15px] border-2 border-black bg-black text-white shadow-[2px_2px_0px_#000] break-words max-w-[calc(100%-10px)] text-[12px]">{msg.text}</span>
              </div>
            )}
            <div className={`text-[8px] text-[#888] mt-1 ${msg.sender === "user" ? "text-right" : "text-left ml-[38px]"}`}>{msg.timestamp}</div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-start mb-2">
            <img src="/amoraaa.png" alt="Bot Profile" className="w-[30px] h-[30px] rounded-full border-2 border-black mr-2" />
            <div className="p-[6px] rounded-[15px] border-2 border-black bg-white shadow-[2px_2px_0px_#000] max-w-[calc(100%-45px)] break-words text-black text-[12px]">
              <span className="font-bold typing-animation">...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="p-[6px] flex border-t-2 border-black items-center box-border rounded-b-[13px]">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="flex-1 p-[6px] rounded-[15px] border-2 border-black bg-white text-black mr-[6px] box-border text-[12px] placeholder:text-[#a0a0a0] focus:outline-none"
          placeholder="Type your question..."
        />
        <button onClick={handleSend} className="p-[6px] rounded-[15px] border-2 border-black bg-black text-white cursor-pointer box-border">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
