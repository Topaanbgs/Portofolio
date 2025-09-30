import React, { useState } from "react";
import contactVideo from "../assets/contact.mp4";
import contactVideoBg from "../components/contact/contactvideo";
import contactHero from "../components/contact/contacthero";
import contactForm from "../components/contact/contactform";
import contactNotification from "../components/contact/contactnotification";

const ContactVideoBg = contactVideoBg;
const ContactHero = contactHero;
const ContactForm = contactForm;
const ContactNotification = contactNotification;

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isFormValid = Boolean(name && email && projectDesc);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    console.log("Form submitted with:", { name, email, projectDesc });
    setIsSubmitted(true);
    setName("");
    setEmail("");
    setProjectDesc("");
  };

  const handleCloseNotification = () => setIsSubmitted(false);

  return (
    <div id="contact" className="relative min-h-screen flex items-center justify-center text-white font-[Futura]">
      <ContactVideoBg src={contactVideo} />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 w-full max-w-6xl p-4 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <ContactHero />

          <div className="p-4 sm:p-6 md:pl-36">
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-center md:text-left">
              Get in touch! <br /> <span>Let me know each other.</span>
            </h2>

            {isSubmitted ? (
              <ContactNotification onClose={handleCloseNotification} />
            ) : (
              <ContactForm name={name} setName={setName} email={email} setEmail={setEmail} projectDesc={projectDesc} setProjectDesc={setProjectDesc} handleSubmit={handleSubmit} isFormValid={isFormValid} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
