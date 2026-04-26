'use client';
import React, { useRef, useEffect, useState } from 'react';

const AnimatedEye = ({ className = '', colorClass = 'text-white' }: { className?: string; colorClass?: string }) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [pupilPos, setPupilPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;
      const rect = eyeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      const distance = 4;
      setPupilPos({
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={eyeRef}
      className={`relative inline-flex items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPupilPos({ x: 0, y: 0 });
      }}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${colorClass} transition-colors duration-300`}
      >
        {/* Outer eye shape */}
        <path
          d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Iris */}
        <circle
          cx={12 + pupilPos.x}
          cy={12 + pupilPos.y}
          r="4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          style={{ transition: isHovered ? 'none' : 'cx 0.3s ease, cy 0.3s ease' }}
        />
        {/* Pupil */}
        <circle
          cx={12 + pupilPos.x}
          cy={12 + pupilPos.y}
          r="1.5"
          fill="currentColor"
          style={{ transition: isHovered ? 'none' : 'cx 0.3s ease, cy 0.3s ease' }}
        />
      </svg>
    </div>
  );
};

export default AnimatedEye;
