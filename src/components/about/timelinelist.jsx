import React, { useRef, useEffect } from "react";
import TimelineItem from "./timelineitem";
import { useTimelineVisibility } from "../../hooks/useTimelineVisibility";

export default function TimelineList({ experiences }) {
  const lineRef = useRef(null);
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const timelineRefs = useRef([]);
  
  const visibleIndexes = useTimelineVisibility(timelineRefs);

  useEffect(() => {
    if (firstRef.current && lastRef.current && lineRef.current) {
      const top = firstRef.current.offsetTop + firstRef.current.offsetHeight / 2;
      const bottom = lastRef.current.offsetTop + lastRef.current.offsetHeight / 2;
      lineRef.current.style.top = `${top}px`;
      lineRef.current.style.height = `${bottom - top}px`;
    }
  }, []);

  return (
    <>
      <div 
        ref={lineRef} 
        className="absolute left-3 md:left-1/2 transform md:-translate-x-1/2 border-l-2 border-white"
      />
      
      <div className="pt-8 w-full flex flex-col">
        {experiences.map((exp, idx) => (
          <TimelineItem
            key={idx}
            experience={exp}
            index={idx}
            isVisible={visibleIndexes.includes(idx)}
            isLeft={idx % 2 === 0}
            ref={(el) => {
              timelineRefs.current[idx] = el;
              if (idx === 0) firstRef.current = el;
              if (idx === experiences.length - 1) lastRef.current = el;
            }}
          />
        ))}
      </div>
    </>
  );
}