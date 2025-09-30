import { useState, useEffect, useRef, useCallback } from "react";

export const useWordCascade = (wordCount, targetRef, speedMs = 25) => {
  const [wordVis, setWordVis] = useState(() => Array(wordCount).fill(false));
  const timersRef = useRef([]);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const startWordCascade = useCallback(() => {
    clearAllTimers();
    setWordVis(Array(wordCount).fill(false));
    
    for (let i = 0; i < wordCount; i++) {
      const timer = setTimeout(() => {
        setWordVis((prev) => {
          const copy = [...prev];
          copy[i] = true;
          return copy;
        });
      }, i * speedMs);
      timersRef.current.push(timer);
    }
  }, [wordCount, speedMs, clearAllTimers]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === targetRef.current) {
            if (entry.isIntersecting) {
              startWordCascade();
            } else {
              setWordVis(Array(wordCount).fill(false));
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
      clearAllTimers();
    };
  }, [targetRef, startWordCascade, wordCount, clearAllTimers]);

  return wordVis;
};