import React, { useEffect, useState, useRef } from "react";

const clientImages = [
  "/r1.png",
  "/r2.png",
  "/r3.png",
  "/r4.png",
];

export default function Reviews() {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState([]);
  const target = 100; // target angka review
  const sectionRef = useRef(null);

  // fungsi untuk animasi angka + foto
  const startAnimation = () => {
    // reset dulu biar bisa animasi lagi
    setCount(0);
    setVisible([]);

    // animasi angka
    let start = 0;
    const duration = 2000; // 2 detik
    const stepTime = Math.max(10, Math.floor(duration / target));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) clearInterval(timer);
    }, stepTime);

    // animasi foto muncul satu per satu
    clientImages.forEach((_, i) => {
      setTimeout(() => {
        setVisible((prev) => [...prev, i]);
      }, i * 300);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation(); // trigger animasi setiap kali masuk viewport
          }
        });
      },
      { threshold: 0.5 } // minimal 50% elemen terlihat
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full flex flex-col items-center justify-center py-16"
    >
      {/* Foto klien */}
      <div className="flex -space-x-4 mb-4">
        {clientImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`client-${i}`}
            className={`w-12 h-12 rounded-full border-2 border-white object-cover transition-all duration-700 ${
              visible.includes(i)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          />
        ))}
      </div>

      {/* Angka review */}
      <h3 className="text-2xl font-bold text-white">
        {count}+ Reviews <span className="text-gray-300">(4.9 of 5)</span>
      </h3>
      <p className="text-gray-400 mt-1">Reviews from Valued Clients</p>
    </section>
  );
}