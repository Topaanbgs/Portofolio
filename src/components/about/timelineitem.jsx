import React, { forwardRef } from "react";

const TimelineItem = forwardRef(({ experience, isVisible, isLeft }, ref) => {
  return (
    <div
      ref={ref}
      className={`relative w-full flex items-center mb-8 transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${isLeft ? "md:mr-auto" : "md:ml-auto"} -mt-3 md:-mt-10`}
    >
      <div 
        className={`absolute top-1/2 h-0.5 bg-white ${
          isLeft 
            ? "left-3 md:left-1/2 md:-translate-x-full w-4 md:w-20" 
            : "left-3 md:left-1/2 w-4 md:w-20"
        }`}
      />
      
      <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full z-10 left-2 md:left-1/2 md:-translate-x-1/2" />
      
      <div 
        className={`w-full md:w-48 px-2 pl-10 md:px-0 ${
          isLeft ? "md:text-right md:mr-auto" : "md:text-left md:ml-auto"
        }`}
      >
        <h3 className="font-bold text-lg">{experience.company}</h3>
        <p className="text-sm italic">
          {experience.position} ({experience.status})
        </p>
        <p className="text-sm">
          {experience.location} | {experience.year}
        </p>
        <p className="mt-1 text-sm">{experience.description}</p>
      </div>
    </div>
  );
});

TimelineItem.displayName = "TimelineItem";

export default TimelineItem;