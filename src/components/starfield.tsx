import { useState } from 'react';

type Star = {
  id: number;
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
};

function generateStars(): Star[] {
  return Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 2,
  }));
}

export default function Starfield() {
  // useState with an initializer function runs generateStars only once, on mount
  const [stars] = useState<Star[]>(generateStars);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size * 4}px`,
            height: `${star.size * 4}px`,
            background: `radial-gradient(circle, var(--star) 0%, var(--star) ${100 / 4}%, transparent 70%)`,
            willChange: 'opacity, transform',
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}