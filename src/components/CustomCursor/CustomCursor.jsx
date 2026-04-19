import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const mainRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (mainRef.current) {
        mainRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      // Slower lerp for a "heavier," more expensive feel
      const lerp = 0.1;
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove);
    const frame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="luxury-cursor-container">
      <div ref={mainRef} className="cursor-particle" />
      <div ref={ringRef} className="cursor-glass-ring" />
    </div>
  );
};

export default CustomCursor;