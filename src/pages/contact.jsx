import React, { useState } from "react";
import contactVideo from "../assets/contact.mp4";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !projectDesc) return;

    // Simulate form submission
    console.log("Form submitted with:", { name, email, projectDesc });
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setProjectDesc("");
  };

  const handleCloseNotification = () => setIsSubmitted(false);
  const isFormValid = name && email && projectDesc;

  return (
    <div id="contact" className="relative min-h-screen flex items-center justify-center text-white">
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src={contactVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full max-w-6xl p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Got a project? <br /> Let's talk.
            </h1>
            <p className="text-base sm:text-lg max-w-lg mx-auto md:mx-0">I'm always excited to collaborate on new and challenging projects. Whether you have an idea, a problem to solve, or just want to say hello, feel free to reach out.</p>
          </div>

          <div className="p-4 sm:p-6 md:pl-36">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">
              Get in touch! <br /> <span>Let me know each other.</span>
            </h2>

            {isSubmitted ? (
              <div className="relative p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 max-w-xs mx-auto md:mx-0" role="alert">
                <button onClick={handleCloseNotification} className="absolute top-2 right-2 hover:text-green-900 focus:outline-none" aria-label="Close">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    ></path>
                  </svg>
                </button>
                <div>
                  <span className="font-medium">Success!</span> <br />
                  <span>Your message has been sent. Please allow 1-2 weeks for a reply via email.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="max-w-xs mx-auto md:mx-0">
                  <input
                    type="text"
                    placeholder="What's your name?"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 text-white bg-transparent border-b border-gray-500 placeholder-white focus:outline-none focus:border-white transition-colors duration-300"
                  />
                </div>
                <div className="max-w-xs mx-auto md:mx-0">
                  <input
                    type="email"
                    placeholder="Your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 text-white bg-transparent border-b border-gray-500 placeholder-white focus:outline-none focus:border-white transition-colors duration-300"
                  />
                </div>
                <div className="max-w-xs mx-auto md:mx-0">
                  <textarea
                    rows="4"
                    placeholder="Tell me about your project"
                    value={projectDesc}
                    onChange={(e) => setProjectDesc(e.target.value)}
                    className="w-full p-2 text-white bg-transparent border-b border-gray-500 placeholder-white focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                  ></textarea>
                </div>
                <div className="flex justify-center md:justify-start">
                  <button
                    type="submit"
                    disabled={!isFormValid}
                    className={`mt-4 w-fit px-12 py-2 text-sm md:text-base font-medium rounded border transition-colors duration-300 ${
                      isFormValid ? "text-black bg-white hover:bg-black hover:text-white" : "text-black bg-white cursor-not-allowed"
                    }`}
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
