import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BubuDuduHug } from './CatIllustrations';
import { Heart } from 'lucide-react';

export const VirtualHug = ({ title, prompt, hugMessageTitle, hugMessageSubtitle, onNext }) => {
  const [isHugging, setIsHugging] = useState(false);

  const triggerHug = () => {
    if (!isHugging) {
      setIsHugging(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] w-full max-w-2xl mx-auto px-4 py-8 text-center">
      {/* Heading */}
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl font-heading text-rose-950 font-bold mb-4"
      >
        {title}
      </motion.h2>

      {/* Hugging Characters Illustration (Bubu & Dudu bear hug with bouquet from reference image) */}
      <div className="my-6 relative flex flex-col items-center justify-center w-full">
        <BubuDuduHug className="w-80 h-72 sm:w-96 sm:h-80" isHugging={isHugging} />

        {/* Interactive "Come here 🫂" Button if not yet hugged */}
        {!isHugging ? (
          <motion.button
            onClick={triggerHug}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 px-7 py-3 bg-white/95 text-rose-900 font-bold rounded-full shadow-lg border-2 border-rose-300 text-lg hover:bg-rose-50 flex items-center gap-2 cursor-pointer pink-glow"
          >
            <span>{prompt}</span>
            <Heart className="w-5 h-5 text-rose-500 fill-rose-400 animate-pulse" />
          </motion.button>
        ) : (
          /* Text revealed after clicking hug */
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-6 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-rose-200 max-w-md"
          >
            <h3 className="font-handwriting text-3xl sm:text-4xl text-rose-900 font-bold mb-3">
              {hugMessageTitle}
            </h3>
            <p className="font-sans text-base sm:text-lg text-rose-950 leading-relaxed whitespace-pre-line">
              {hugMessageSubtitle}
            </p>
          </motion.div>
        )}
      </div>

      {/* Next Button */}
      {isHugging && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
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
