import React from "react";
import contactVideo from "../assets/contact.mp4";

function Contact() {
  return (
    <div
      id="contact"
      className="relative min-h-screen flex items-center justify-center text-white"
    >
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={contactVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content Section */}
      <div className="relative z-10 w-full max-w-6xl p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Heading and Description */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-white">
              Got a project? <br /> Let's talk.
            </h1>
            <p className="text-base sm:text-lg text-white max-w-lg mx-auto md:mx-0">
              I'm always excited to collaborate on new and challenging projects.
              Whether you have an idea, a problem to solve, or just want to say
              hello, feel free to reach out.
            </p>
          </div>

          {/* Right Column: Contact Form */}
          <div className="p-4 sm:p-6 md:pl-36">
            <h2 className="text-2xl sm:text-3xl font-semibold leading-tight mb-6 text-white text-center md:text-left">
              Get in touch! <br />
              <span className="text-white">Let me know each other.</span>
            </h2>
            <form className="space-y-4">
              {/* Input: What's your name? */}
              <div className="max-w-xs mx-auto md:mx-0">
                <input
                  type="text"
                  id="name"
                  placeholder="What's your name?"
                  className="w-full p-2 text-white bg-transparent border-b border-gray-500 placeholder-white focus:outline-none focus:border-white transition-colors duration-300"
                />
              </div>
              {/* Input: Your email */}
              <div className="max-w-xs mx-auto md:mx-0">
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="w-full p-2 text-white bg-transparent border-b border-gray-500 placeholder-white focus:outline-none focus:border-white transition-colors duration-300"
                />
              </div>
              {/* Textarea: Tell me about your project */}
              <div className="max-w-xs mx-auto md:mx-0">
                <textarea
                  id="project-desc"
                  rows="4"
                  placeholder="Tell me about your project"
                  className="w-full p-2 text-white bg-transparent border-b border-gray-500 placeholder-white focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="flex justify-center md:justify-start">
                <button
                  type="submit"
                  className="mt-4 w-fit px-12 py-2 text-sm md:text-base font-medium text-black bg-white rounded border border-transparent hover:border-white hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;