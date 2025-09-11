import React, { useState, useEffect } from "react";

function TypingEffect({ text, speed = 120, eraseSpeed = 80, delay = 1500 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing and deleting animation effect
  useEffect(() => {
    let timeout;

    if (!isDeleting && index < text.length) {
      // Typing forward
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex(index + 1);
      }, speed);
    } else if (isDeleting && index > 0) {
      // Deleting backward
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex(index - 1);
      }, eraseSpeed);
    } else if (index === text.length) {
      // Wait before deleting
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (index === 0 && isDeleting) {
      // After deleting, restart
      setIsDeleting(false);
    }

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text, speed, eraseSpeed, delay]);

  return <span className="border-r-2 border-white pr-1">{displayedText}</span>;
}

export default TypingEffect;
