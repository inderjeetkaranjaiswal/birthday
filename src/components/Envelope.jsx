import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Mail } from 'lucide-react';

export const Envelope = ({ header, prompt, greeting, paragraphs, quote, signoff, onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[75vh] w-full max-w-2xl mx-auto px-4 py-8">
      {/* Header */}
      <motion.h2 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl sm:text-3xl md:text-4xl font-heading text-center text-rose-950 font-bold mb-6"
      >
        {header}
      </motion.h2>

      {/* Envelope & Letter Container */}
      <div className="relative w-full max-w-lg my-4 flex flex-col items-center">
        {!isOpen ? (
          /* Closed Interactive Envelope */
          <motion.div 
            onClick={handleOpen}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-br from-rose-200 via-rose-300 to-pink-300 rounded-2xl p-6 shadow-2xl cursor-pointer border-2 border-rose-300/80 relative overflow-hidden flex flex-col items-center justify-center min-h-[260px] group transition-all"
          >
            {/* Envelope Flap Triangle visual */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-rose-400 to-rose-300 [clip-path:polygon(0_0,100%_0,50%_100%)] shadow-md group-hover:from-rose-400 group-hover:to-pink-400 transition-all"></div>
            
            {/* Star Wax Seal */}
            <motion.div 
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="z-10 bg-white/95 p-4 rounded-full shadow-lg border border-rose-300 flex items-center justify-center mt-8"
            >
              <Mail className="w-9 h-9 text-rose-600" />
            </motion.div>

            {/* Prompt text below */}
            <p className="z-10 mt-6 font-handwriting text-2xl font-bold text-rose-950 tracking-wide">
              {prompt}
            </p>

            <span className="z-10 text-xs text-rose-700 font-sans mt-1 opacity-75">
              (Click envelope to unseal)
            </span>
          </motion.div>
        ) : (
          /* Opened Letter Paper Card */
          <AnimatePresence>
            <motion.div 
              initial={{ scale: 0.8, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="w-full bg-lined-paper rounded-2xl p-6 sm:p-10 shadow-2xl border-2 border-rose-200/80 relative overflow-hidden pink-glow"
            >
              {/* Decorative top ribbon pin */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-6 washi-tape rounded-sm flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
              </div>

              {/* Letter Greeting */}
              <h3 className="font-handwriting text-3xl sm:text-4xl text-rose-900 font-bold mb-6 mt-4">
                {greeting}
              </h3>

              {/* Letter Body Paragraphs */}
              <div className="space-y-4 text-base sm:text-lg text-rose-950 leading-relaxed font-sans">
                {paragraphs.map((p, idx) => (
                  <p key={idx} className="whitespace-pre-line">
                    {p}
                  </p>
                ))}
              </div>

              {/* Styled Quote */}
              {quote && (
                <div className="my-6 py-3 px-4 border-y border-rose-200/60 bg-rose-50/50 rounded-lg text-center">
                  <p className="font-handwriting italic text-2xl sm:text-3xl text-rose-900 font-bold tracking-wide">
                    {quote}
                  </p>
                </div>
              )}

              {/* Signoff Signature */}
              <div className="mt-6 pt-4 text-right">
                <p className="font-handwriting text-2xl sm:text-3xl text-rose-900 font-bold whitespace-pre-line">
                  {signoff}
                </p>
              </div>

              {/* Floating Sparkle Effect */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0, 1, 0], y: -40 }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute top-4 right-6 text-amber-500"
              >
                ✨
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
