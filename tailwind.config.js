/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // Defines a horizontal scrolling animation for a marquee effect.
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // Defines a blinking animation for a cursor-like effect.
        blink: {
          "0%, 50%, 100%": { opacity: "1" },
          "25%, 75%": { opacity: "0" },
        },
      },
      animation: {
        // Applies the marquee keyframe animation.
        marquee: "marquee 20s linear infinite",
        // Applies the blink keyframe animation.
        blink: "blink 1s step-start infinite",
      },
    },
  },
  plugins: [],
};
