import React, { useState, useEffect, useRef } from 'react';
import { getAIResponse } from './api';

const ChatWindow = ({ onClose }) => {
  // State utama
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const messagesEndRef = useRef(null);

  // Pesan awal dari bot
  useEffect(() => {
    const initialMessage = {
      text: "I am Amoraaa, your virtual assistant. Do you have any questions?",
      sender: 'bot',
      timestamp: new Date().toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).replace(',', ''),
    };
    setChatMessages([initialMessage]);
  }, []);

  // Auto scroll ke bawah setiap ada pesan baru
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isTyping]);

  // Fungsi kirim pesan
  const handleSend = () => {
    if (!input.trim()) return;

    const newUserMessage = {
      text: input,
      sender: 'user',
      timestamp: new Date().toLocaleString('en-US', {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      }).replace(',', ''),
    };

    setChatMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsTyping(true);

    // Respon bot (simulasi delay)
    setTimeout(() => {
      const botResponseText = getAIResponse(newUserMessage.text);
      const botResponseMessage = {
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date().toLocaleString('en-US', {
          month: '2-digit',
          day: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).replace(',', ''),
      };

      setChatMessages(prev => [...prev, botResponseMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '90px',
        right: '20px',
        width: '280px',
        height: '380px',
        backgroundColor: '#fff',
        border: '2px solid #000',
        borderRadius: '15px',
        boxShadow: '4px 4px 0px #000',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '8px',
          borderBottom: '2px solid #000',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          borderRadius: '13px 13px 0 0',
        }}
      >
        <span style={{ color: '#000', fontWeight: 'bold', fontSize: '18px' }}>Get In Touch</span>
        <button
          onClick={onClose}
          style={{
            border: 'none',
            background: 'none',
            cursor: 'pointer',
            fontSize: '1rem',
            color: '#000',
          }}
        >
          ✖
        </button>
      </div>

      {/* Body Pesan */}
      <div style={{ flex: 1, padding: '10px', overflowY: 'auto', backgroundColor: '#e8e8e8' }}>
        {chatMessages.map((msg, index) => (
          <div key={index} style={{ marginBottom: '20px' }}>
            {msg.sender === 'bot' && (
              <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '5px' }}>
                <img
                  src="/amoraaa.png"
                  alt="Bot Profile"
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    border: '2px solid #000',
                    marginRight: '8px',
                  }}
                />
                <div
                  style={{
                    padding: '6px 10px',
                    backgroundColor: '#fff',
                    borderRadius: '15px',
                    border: '2px solid #000',
                    boxShadow: '2px 2px 0px #000',
                    maxWidth: 'calc(100% - 45px)',
                    wordWrap: 'break-word',
                    color: '#000',
                    fontSize: '12px',
                  }}
                >
                  {msg.text}
                </div>
              </div>
            )}
            {msg.sender === 'user' && (
              <div style={{ textAlign: 'right' }}>
                <span
                  style={{
                    display: 'inline-block',
                    padding: '6px 10px',
                    borderRadius: '15px',
                    border: '2px solid #000',
                    backgroundColor: '#000',
                    color: '#fff',
                    boxShadow: '2px 2px 0px #000',
                    wordWrap: 'break-word',
                    maxWidth: 'calc(100% - 10px)',
                    fontSize: '12px',
                  }}
                >
                  {msg.text}
                </span>
              </div>
            )}
            {/* Timestamp */}
            <div
              style={{
                fontSize: '8px',
                color: '#888',
                marginTop: '4px',
                textAlign: msg.sender === 'user' ? 'right' : 'left',
                marginLeft: msg.sender === 'user' ? '0' : '38px',
              }}
            >
              {msg.timestamp}
            </div>
          </div>
        ))}

        {/* Indikator mengetik */}
        {isTyping && (
          <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '10px' }}>
            <img
              src="/amoraaa.png"
              alt="Bot Profile"
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                border: '2px solid #000',
                marginRight: '8px',
              }}
            />
            <div
              style={{
                padding: '6px 10px',
                backgroundColor: '#fff',
                borderRadius: '15px',
                border: '2px solid #000',
                boxShadow: '2px 2px 0px #000',
                maxWidth: 'calc(100% - 45px)',
                wordWrap: 'break-word',
                color: '#000',
                fontSize: '12px',
              }}
            >
              <span className="typing-animation" style={{ fontWeight: 'bold' }}>...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input + tombol kirim */}
      <div
        style={{
          padding: '6px',
          display: 'flex',
          borderTop: '2px solid #000',
          alignItems: 'center',
          boxSizing: 'border-box',
          borderRadius: '0 0 13px 13px',
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          style={{
            flex: 1,
            padding: '6px',
            borderRadius: '15px',
            border: '2px solid #000',
            backgroundColor: '#fff',
            color: '#000',
            marginRight: '6px',
            boxSizing: 'border-box',
            fontSize: '12px',
          }}
          placeholder="Type your question..."
        />
        <button
          onClick={handleSend}
          style={{
            padding: '6px 5px',
            borderRadius: '15px',
            border: '2px solid #000',
            backgroundColor: '#000',
            color: 'white',
            cursor: 'pointer',
            boxSizing: 'border-box',
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;