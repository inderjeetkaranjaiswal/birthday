import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const FloatingBalloons = ({ count = 12 }) => {
  const balloons = useMemo(() => {
    const items = [];
    const colors = [
      { body: 'rgba(251, 113, 133, 0.45)', string: '#f43f5e' }, // soft pink
      { body: 'rgba(167, 139, 250, 0.45)', string: '#8b5cf6' }, // soft purple
      { body: 'rgba(110, 231, 183, 0.45)', string: '#10b981' }, // soft mint
      { body: 'rgba(253, 224, 71, 0.45)', string: '#eab308' },  // soft yellow
      { body: 'rgba(147, 197, 253, 0.45)', string: '#3b82f6' }  // soft blue
    ];
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        x: Math.random() * 95,
        delay: Math.random() * 6,
        duration: 12 + Math.random() * 10,
        scale: 0.6 + Math.random() * 0.5,
        color: colors[i % colors.length]
      });
    }
    return items;
  }, [count]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {balloons.map((b) => (
        <motion.div
          key={b.id}
          className="absolute"
          style={{ left: `${b.x}%`, bottom: '-80px' }}
          animate={{
            y: ['0vh', '-115vh'],
            x: [0, (b.id % 2 === 0 ? 30 : -30), 0],
            rotate: [0, b.id % 2 === 0 ? 10 : -10, 0],
            opacity: [0, 0.65, 0.65, 0]
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            delay: b.delay,
            ease: "easeInOut"
          }}
        >
          <div className="relative flex flex-col items-center">
            {/* Balloon Body */}
            <div 
              style={{
                width: `${36 * b.scale}px`,
                height: `${46 * b.scale}px`,
                backgroundColor: b.color.body,
                borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                boxShadow: 'inset -3px -3px 8px rgba(0,0,0,0.08), inset 3px 3px 8px rgba(255,255,255,0.6)'
              }}
              className="relative backdrop-blur-[1px] border border-white/40"
            >
              {/* Highlight reflection */}
              <div 
                style={{
                  width: `${10 * b.scale}px`,
                  height: `${14 * b.scale}px`,
                  top: `${6 * b.scale}px`,
                  left: `${8 * b.scale}px`,
                  borderRadius: '50%'
                }}
                className="absolute bg-white/70"
              />
            </div>
            
            {/* Balloon Knot */}
            <div 
              style={{
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
                borderBottom: `6px solid ${b.color.string}`
              }}
              className="w-0 h-0 -mt-[1px]"
            />

            {/* Balloon String */}
            <svg width="2" height={40 * b.scale} className="overflow-visible">
              <path 
                d={`M 1 0 Q ${b.id % 2 === 0 ? 8 : -8} ${20 * b.scale} 1 ${40 * b.scale}`} 
                stroke={b.color.string} 
                strokeWidth="1" 
                fill="none" 
                opacity="0.6"
              />
            </svg>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
