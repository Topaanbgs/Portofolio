import { useState, useEffect, useCallback } from "react";

export const useTypingEffect = (fullText, typingSpeed = 150, deletingSpeed = 80) => {
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const startTyping = useCallback(() => {
    if (!isTyping && typedText === "") {
      setIsTyping(true);
    }
  }, [isTyping, typedText]);

  useEffect(() => {
    const handleScroll = () => {
      if (!isDeleting && !isTyping && typedText === fullText) {
        setIsDeleting(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [typedText, isDeleting, isTyping, fullText]);

  useEffect(() => {
    let timeout;

    if (isTyping) {
      if (typedText.length < fullText.length) {
        timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, typingSpeed);
      } else {
        setIsTyping(false);
      }
    } else if (isDeleting) {
      if (typedText.length > 0) {
        timeout = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isTyping, isDeleting, fullText, typingSpeed, deletingSpeed]);

  return { typedText, startTyping };
};