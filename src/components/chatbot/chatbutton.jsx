import React, { useState } from "react";
import botPixelLogo from "../../assets/bot_pixel.png";

const ChatButton = ({ onClick }) => {
  const [showPreview, setShowPreview] = useState(true);

  const handleChatButtonClick = () => {
    setShowPreview(false);
    onClick();
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {showPreview && (
        <div className="absolute bottom-[75px] right-0 w-[250px] p-2 bg-white rounded-[15px] border-2 border-black shadow-[4px_4px_0px_#000]">
          <p className="m-0 text-[12px] leading-[1.4] whitespace-normal break-words">Hello! I am Amoraaa, your virtual assistant. Do you have any questions?</p>
        </div>
      )}

      <button onClick={handleChatButtonClick} className="w-[60px] h-[60px] rounded-full bg-white border-2 border-black cursor-pointer flex items-center justify-center shadow-[4px_4px_0px_#000]">
        <img src={botPixelLogo} alt="Chatbot" className="w-[40px] h-[40px]" />
      </button>
    </div>
  );
};

export default ChatButton;
