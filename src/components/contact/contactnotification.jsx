import React from "react";

export default function ContactNotification({ onClose }) {
  return (
    <div
      className="relative p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-100 max-w-xs mx-auto md:mx-0"
      role="status"
      aria-live="polite"
    >
      <button
        onClick={onClose}
        className="absolute top-2 right-2 hover:text-green-900 focus:outline-none"
        aria-label="Close"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          />
        </svg>
      </button>

      <div>
        <span className="font-medium">Success!</span>
        <div>Your message has been sent. Please allow 1-2 weeks for a reply via email.</div>
      </div>
    </div>
  );
}
