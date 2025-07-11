"use client";
import { useEffect, useState } from "react";

export default function BackgroundStars() {
  const [stars, setStars] = useState<Array<{ top: number; left: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const generateStars = () =>
      Array.from({ length: 50 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 10,
      }));

    setStars(generateStars());
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {stars.map((star, index) => (
        <div
          key={index}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            top: `${star.top}vh`,
            left: `${star.left}vw`,
            width: `${star.size}px`,
            height: `${star.size}px`,
animation: `fallingStars 5s linear ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
