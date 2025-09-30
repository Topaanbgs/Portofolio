import { useState, useEffect } from "react";

export const useTimelineVisibility = (timelineRefs) => {
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const newVisible = [];
      timelineRefs.current.forEach((el, i) => {
        if (el) {
          const rect = el.getBoundingClientRect();
          if (
            rect.top < window.innerHeight * 0.75 && 
            rect.bottom > window.innerHeight * 0.25
          ) {
            newVisible.push(i);
          }
        }
      });
      setVisibleIndexes(newVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [timelineRefs]);

  return visibleIndexes;
};