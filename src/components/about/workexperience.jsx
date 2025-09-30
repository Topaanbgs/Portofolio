import React from "react";
import TimelineList from "./timelinelist";
import { experiencesData } from "../../data/experiencesData";

export default function WorkExperience() {
  return (
    <div className="w-full md:w-1/2 relative flex flex-col items-start md:items-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-8 w-full text-left">
        Work Experience
      </h2>
      <TimelineList experiences={experiencesData} />
    </div>
  );
}