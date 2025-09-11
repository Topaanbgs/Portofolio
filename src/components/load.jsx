import React, { useEffect, useState } from "react";

function Load({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const barHeights = ["h-4", "h-8", "h-12", "h-8", "h-4"];

  // Loading bar animation
  useEffect(() => {
    const totalSteps = 100;
    const intervalTime = 20;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= totalSteps) {
          clearInterval(interval);
          setTimeout(onFinish, 300);
          return totalSteps;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black z-50">
      <div className="flex space-x-2 items-end">
        {barHeights.map((height, i) => {
          const fillThreshold = ((i + 1) / barHeights.length) * 100;
          const filled = progress >= fillThreshold;

          return <div key={i} className={`w-3 md:w-4 border-2 border-white transition-all duration-300 ${filled ? "bg-white" : "bg-black"} ${height}`} />;
        })}
      </div>
    </div>
  );
}

export default Load;
