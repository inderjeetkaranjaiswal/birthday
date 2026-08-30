import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

export const BalloonsSection = ({ onNext }) => {
  const [poppedBalloons, setPoppedBalloons] = useState({});

  const balloons = [
    {
      id: 'b1',
      label: 'Balloon 1',
      note: 'May all your dreams come true and your wishes turn into reality. ✨',
      color: 'bg-rose-200/85 border-rose-300',
      stringColor: '#f43f5e',
      knotColor: '#e11d48',
      popColor: ['#f43f5e', '#fb7185', '#ffffff'],
      x: -110,
      y: 0
    },
    {
      id: 'b2',
      label: 'Balloon 2',
      note: 'Happy Birthday Harsha 🎂🎈',
      color: 'bg-emerald-200/85 border-emerald-300',
      stringColor: '#10b981',
      knotColor: '#059669',
      popColor: ['#10b981', '#6ee7b7', '#ffffff'],
      x: 0,
      y: -30
    },
    {
      id: 'b3',
      label: 'Balloon 3',
      note: 'Keep smiling and shining always. 🌟',
      color: 'bg-indigo-200/85 border-indigo-300',
      stringColor: '#6366f1',
      knotColor: '#4f46e5',
      popColor: ['#6366f1', '#a5b4fc', '#ffffff'],
      x: 110,
      y: 0
    }
  ];

  const handlePop = (id, colors) => {
    if (!poppedBalloons[id]) {
      setPoppedBalloons(prev => ({ ...prev, [id]: true }));

      // Pop confetti
      try {
        confetti({
          particleCount: 40,
          spread: 60,
          origin: { y: 0.6 },
          colors: colors
        });
      } catch (e) {}
    }
  };

  const allPopped = Object.keys(poppedBalloons).length === 3;
  const anyPopped = Object.keys(poppedBalloons).length > 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] w-full max-w-3xl mx-auto px-4 py-8 text-center">
      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl font-heading text-rose-950 font-bold mb-3 tracking-wide"
      >
        Pop all 3 balloons 🎈
      </motion.h2>

      <p className="font-sans text-rose-800 text-sm sm:text-base mb-6 opacity-80">
        Tap on each balloon to reveal your special message!
      </p>

      {/* Balloons Container */}
      <div className="relative w-full min-h-[300px] my-4 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 w-full max-w-2xl items-start justify-items-center">
          {balloons.map((b, idx) => {
            const isPopped = poppedBalloons[b.id];

            return (
              <div key={b.id} className="flex flex-col items-center w-full min-h-[220px]">
                {!isPopped ? (
                  /* Floating Balloon */
                  <motion.div
                    onClick={() => handlePop(b.id, b.popColor)}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [idx % 2 === 0 ? -2 : 2, idx % 2 === 0 ? 2 : -2, idx % 2 === 0 ? -2 : 2]
                    }}
                    transition={{
                      duration: 3 + idx * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="cursor-pointer flex flex-col items-center group relative"
                  >
                    {/* Balloon Glass Body */}
                    <div className={`w-24 h-32 ${b.color} rounded-[50%_50%_50%_50%/40%_40%_60%_60%] border-2 shadow-lg backdrop-blur-sm relative flex items-center justify-center transition-all`}>
                      {/* Inner Shine Highlight */}
                      <div className="absolute top-3 left-4 w-6 h-9 bg-white/70 rounded-full blur-[1px]"></div>
                      <span className="font-handwriting text-xl font-bold text-rose-950 opacity-80">
                        {idx + 1}
                      </span>
                    </div>

                    {/* Knot */}
                    <div 
                      style={{
                        borderLeft: '6px solid transparent',
                        borderRight: '6px solid transparent',
                        borderBottom: `10px solid ${b.knotColor}`
                      }}
                      className="w-0 h-0 -mt-1"
                    />

                    {/* Wavy String */}
                    <svg width="24" height="50" className="overflow-visible">
                      <path 
                        d="M 12 0 Q 20 18 12 35 T 12 50" 
                        stroke={b.stringColor} 
                        strokeWidth="2" 
                        fill="none" 
                        opacity="0.8"
                      />
                    </svg>
                  </motion.div>
                ) : (
                  /* Revealed Note Inside Balloon */
                  <AnimatePresence>
                    <motion.div
                      initial={{ scale: 0.7, opacity: 0, y: 10 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, type: "spring" }}
                      className="w-full bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-xl border-2 border-rose-200 text-center pink-glow my-auto"
                    >
                      <span className="text-xs font-semibold uppercase tracking-wider text-rose-400 block mb-1">
                        Note {idx + 1} 💌
                      </span>
                      <p className="font-handwriting text-2xl text-rose-900 font-bold leading-snug">
                        {b.note}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Next Button */}
      {anyPopped && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-8 py-3.5 bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-rose-400/40 text-lg transition-all border border-rose-300 flex items-center gap-2 cursor-pointer"
        >
          <span>NEXT</span>
          <span>→</span>
        </motion.button>
      )}
    </div>
  );
};
