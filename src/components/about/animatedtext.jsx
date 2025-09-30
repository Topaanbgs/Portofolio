import React from "react";

export default function AnimatedText({ words, wordVis }) {
  return (
    <p className="text-lg leading-relaxed flex flex-wrap gap-1">
      {words.map((word, idx) => (
        <span
          key={idx}
          style={{
            color: wordVis[idx] ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.12)",
            transform: wordVis[idx] ? "translateY(0px)" : "translateY(6px)",
            transition: "color 360ms ease, transform 360ms ease",
            pointerEvents: "none",
          }}
        >
          {word}{" "}
        </span>
      ))}
    </p>
  );
}