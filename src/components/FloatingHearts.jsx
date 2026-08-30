import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const FloatingHearts = ({ count = 15 }) => {
  const particles = useMemo(() => {
    const items = [];
    const colors = ['#f43f5e', '#fb7185', '#fda4af', '#f472b6', '#e11d48'];
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        x: Math.random() * 100, // percentage x position
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 8,
        scale: 0.5 + Math.random() * 0.8,
        color: colors[i % colors.length],
        type: i % 3 === 0 ? 'sparkle' : 'heart'
      });
    }
    return items;
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.x}%`, bottom: '-40px' }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, (p.id % 2 === 0 ? 25 : -25), 0],
            rotate: [0, p.id % 2 === 0 ? 45 : -45, 0],
            opacity: [0, 0.7, 0.7, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut"
          }}
        >
          {p.type === 'heart' ? (
            <svg 
              width={24 * p.scale} 
              height={24 * p.scale} 
              viewBox="0 0 24 24" 
              fill={p.color}
              className="drop-shadow-sm opacity-60"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          ) : (
            <svg 
              width={20 * p.scale} 
              height={20 * p.scale} 
              viewBox="0 0 24 24" 
              fill="#fde047"
              className="drop-shadow-sm opacity-70"
            >
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
            </svg>
          )}
        </motion.div>
      ))}
    </div>
  );
};
