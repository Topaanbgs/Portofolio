import React from "react";
import WorkExperience from "../components/about/workexperience";
import AboutMe from "../components/about/aboutme";

export default function TimelineAbout() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row px-5 md:px-10 max-w-7xl mx-auto text-white relative">
      <WorkExperience />
      <AboutMe />
    </section>
  );
}
