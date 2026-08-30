import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Sparkles, Gift } from 'lucide-react';

export const GiftBox = ({ title, prompt, onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    if (!isOpen) {
      setIsOpen(true);
      
      // Fire confetti cannons
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f43f5e', '#fb7185', '#fde047', '#a855f7', '#ffffff']
        });
        
        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#f43f5e', '#fbcfe8', '#ffffff']
          });
          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#f43f5e', '#fbcfe8', '#ffffff']
          });
        }, 250);
      } catch (err) {}
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] w-full max-w-2xl mx-auto px-4 py-8 text-center">
      {/* Title */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-heading text-rose-950 font-bold mb-8"
      >
        {title}
      </motion.h2>

      {/* Gift Box Graphic */}
      <div className="relative w-64 h-64 sm:w-72 sm:h-72 my-4 flex items-center justify-center">
        {!isOpen ? (
          /* Closed Gift Box */
          <motion.div
            onClick={handleOpenGift}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-56 h-56 sm:w-64 sm:h-64 bg-gradient-to-br from-rose-400 via-rose-500 to-pink-500 rounded-3xl p-6 shadow-2xl border-4 border-rose-200 cursor-pointer relative flex flex-col items-center justify-center pink-glow group"
          >
            {/* Horizontal Ribbon */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-12 bg-amber-200/90 border-x border-amber-300 shadow-md"></div>
            {/* Vertical Ribbon */}
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-12 bg-amber-200/90 border-y border-amber-300 shadow-md"></div>

            {/* Giant Bow Top */}
            <div className="absolute -top-8 z-20 flex items-center justify-center">
              <div className="w-16 h-16 bg-amber-300 rounded-full border-2 border-amber-400 shadow-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <Gift className="w-8 h-8 text-rose-800" />
              </div>
            </div>

            {/* Tap Prompt Label */}
            <div className="z-30 bg-white/95 px-4 py-2 rounded-full shadow-lg border border-rose-200 mt-6">
              <p className="font-handwriting text-2xl font-bold text-rose-900">
                {prompt}
              </p>
            </div>
          </motion.div>
        ) : (
          /* Opened Gift Box with Light Burst */
          <AnimatePresence>
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-full h-full flex flex-col items-center justify-center relative"
            >
              {/* Radial Light Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-200/50 via-rose-300/50 to-pink-200/50 rounded-full blur-2xl animate-pulse"></div>

              {/* Opened Surprise Content */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="z-10 bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border-2 border-rose-200 flex flex-col items-center text-center max-w-sm pink-glow"
              >
                <div className="text-5xl mb-3 animate-bounce-cute">✨ 🎁 ✨</div>
                <h3 className="font-heading text-2xl sm:text-3xl text-rose-950 font-bold mb-2">
                  Surprise Unlocked!
                </h3>
                <p className="font-sans text-rose-800 text-sm sm:text-base">
                  You deserve all the happiness, laughter & joy in the world! 🌸
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* Next Button */}
      {isOpen && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={onNext}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3.5 bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-rose-400/40 text-lg transition-all border border-rose-300 flex items-center gap-2 cursor-pointer"
        >
          <span>NEXT</span>
          <span>→</span>
        </motion.button>
      )}
    </div>
  );
};
