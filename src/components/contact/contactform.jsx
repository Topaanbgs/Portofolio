import React from "react";

export default function ContactForm({
  name,
  setName,
  email,
  setEmail,
  projectDesc,
  setProjectDesc,
  handleSubmit,
  isFormValid,
}) {
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="max-w-xs mx-auto md:mx-0">
        <label className="sr-only" htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          type="text"
          placeholder="What's your name?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 text-white bg-transparent border-b border-gray-500 placeholder-white focus:outline-none focus:border-white transition-colors duration-300"
          required
        />
      </div>

      <div className="max-w-xs mx-auto md:mx-0">
        <label className="sr-only" htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 text-white bg-transparent border-b border-gray-500 placeholder-white focus:outline-none focus:border-white transition-colors duration-300"
          required
        />
      </div>

      <div className="max-w-xs mx-auto md:mx-0">
        <label className="sr-only" htmlFor="contact-project">Project</label>
        <textarea
          id="contact-project"
          rows="4"
          placeholder="Tell me about your project"
          value={projectDesc}
          onChange={(e) => setProjectDesc(e.target.value)}
          className="w-full p-2 text-white bg-transparent border-b border-gray-500 placeholder-white focus:outline-none focus:border-white transition-colors duration-300 resize-none"
          required
        />
      </div>

      <div className="flex justify-center md:justify-start">
        <button
          type="submit"
          disabled={!isFormValid}
          className={`mt-4 w-fit px-12 py-2 text-sm md:text-base font-medium rounded border transition-colors duration-300 ${
            isFormValid ? "text-black bg-white hover:bg-black hover:text-white" : "text-black bg-white cursor-not-allowed"
          }`}
          aria-disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
