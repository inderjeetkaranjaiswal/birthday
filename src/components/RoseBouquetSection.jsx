import React from 'react';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

export const RoseBouquetSection = ({ onReplay }) => {
  const noteBubbles = [
    { text: "Forever yours 🌹", x: "-left-4 sm:-left-16", y: "top-8", delay: 0.2 },
    { text: "You are my sunshine ☀️", x: "-left-6 sm:-left-20", y: "top-36", delay: 0.4 },
    { text: "I'm lucky to have you 🍀", x: "-left-2 sm:-left-12", y: "bottom-12", delay: 0.6 },
    { text: "You make my world beautiful ✨", x: "-right-4 sm:-right-16", y: "top-6", delay: 0.3 },
    { text: "Happy Birthday Harsha 🎂", x: "-right-6 sm:-right-20", y: "top-32", delay: 0.5 },
    { text: "You are my favorite person 💕", x: "-right-2 sm:-right-12", y: "bottom-10", delay: 0.7 }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] w-full max-w-3xl mx-auto px-4 py-8 text-center relative">
      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-handwriting text-rose-900 font-bold mb-4 tracking-wide"
      >
        Your Rose Bouquet 🌹
      </motion.h2>

      {/* Bouquet & Floating Note Bubbles Container */}
      <div className="relative w-full max-w-lg my-6 flex items-center justify-center min-h-[340px]">
        {/* Floating Note Bubbles */}
        {noteBubbles.map((bubble, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: bubble.delay, duration: 0.5 }}
            className={`absolute ${bubble.x} ${bubble.y} z-20 hidden xs:block`}
          >
            <div className="bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-2xl shadow-md border border-rose-200/80 text-xs sm:text-sm font-sans font-medium text-rose-900">
              {bubble.text}
            </div>
          </motion.div>
        ))}

        {/* Uploaded Rose Bouquet Image Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 p-3 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border-2 border-rose-200 pink-glow max-w-xs sm:max-w-sm"
        >
          <div className="rounded-2xl overflow-hidden aspect-square border border-rose-100">
            <img 
              src="/images/rose_bouquet.png" 
              alt="Your Rose Bouquet" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>

      {/* Replay Surprise Story Button */}
      {onReplay && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          onClick={onReplay}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 py-3 px-7 bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-rose-400/40 text-base transition-all border border-rose-300 flex items-center gap-2 cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Replay Surprise Story</span>
        </motion.button>
      )}
    </div>
  );
};
