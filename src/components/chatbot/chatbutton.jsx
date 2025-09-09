// src/components/chatbot/chatbutton.jsx

import React, { useState } from 'react';
import botPixelLogo from '../../assets/bot_pixel.png';

const ChatButton = ({ onClick }) => {
  // State untuk mengontrol apakah pesan pratinjau ditampilkan
  const [showPreview, setShowPreview] = useState(true);

  // Fungsi untuk menangani klik pada tombol chat
  const handleChatButtonClick = () => {
    // Sembunyikan pesan pratinjau saat tombol diklik
    setShowPreview(false);
    // Jalankan fungsi onClick yang diteruskan dari parent
    onClick();
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      {/* Pesan Pratinjau (akan ditampilkan di atas tombol) */}
      {showPreview && (
        <div
          style={{
            position: 'absolute',
            bottom: '75px', // Sesuaikan posisi di atas tombol chat
            right: '0',
            // Lebar dan padding disesuaikan agar tidak terlalu besar
            width: '250px', 
            padding: '8px 12px',
            backgroundColor: '#fff',
            borderRadius: '15px',
            border: '2px solid #000',
            boxShadow: '4px 4px 0px #000',
            // Teks akan tetap berada dalam lebar yang ditentukan
            whiteSpace: 'normal',
            overflowWrap: 'break-word',
          }}
        >
          <p style={{ margin: 0, fontSize: '12px', lineHeight: '1.4' }}>
            Hello! I am Amoraaa, your virtual assistant. Do you have any questions?
          </p>
        </div>
      )}

      {/* Tombol Chat (akan tetap di pojok kanan bawah) */}
      <button
        onClick={handleChatButtonClick}
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#fff',
          border: '2px solid #000',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '4px 4px 0px #000',
        }}
      >
        <img src={botPixelLogo} alt="Chatbot" style={{ width: '40px', height: '40px' }} />
      </button>
    </div>
  );
};

export default ChatButton;