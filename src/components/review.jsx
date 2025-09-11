import React, { useEffect, useState, useRef } from "react";

const clientImages = ["review/r1.png", "review/r2.png", "review/r3.png", "review/r4.png"];

export default function Reviews() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState([]);
  const target = 100;
  const sectionRef = useRef(null);

  // Start animation for number count and photos
  const startAnimation = () => {
    setCount(0);
    setVisible([]);

    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(10, Math.floor(duration / target));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    // photos animation
    clientImages.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, i]);
      }, i * 300);
    });
  };

  // Intersection Observer to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) startAnimation();
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full flex flex-col items-center justify-center pt-20 pb-4 md:pt-24 md:pb-0">
      {/* Client photos */}
      <div className="flex -space-x-4 mb-4">
        {clientImages.map((img, i) => (
          <img key={i} src={img} alt={`client-${i}`} className={`w-12 h-12 rounded-full border-2 border-white object-cover transition-all duration-700 ${visible.includes(i) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} />
        ))}
      </div>

      {/* Review count */}
      <h3 className="text-2xl font-bold text-white">
        {count}+ Reviews <span className="text-white">(4.9 of 5)</span>
      </h3>
      <p className="text-gray-400 mt-1">Reviews from Valued Clients</p>
    </section>
  );
}
