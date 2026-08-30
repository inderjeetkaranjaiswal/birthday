import React from 'react';
import { motion } from 'framer-motion';

export const MemoryGallery = ({ title, subheading, memories, footerText, footerSubtext, onNext }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] w-full max-w-5xl mx-auto px-4 py-8">
      {/* Gallery Header */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-rose-950 font-bold mb-3">
          {title}
        </h2>
        <p className="text-base sm:text-lg text-rose-800/90 font-sans italic">
          {subheading}
        </p>
      </motion.div>

      {/* Hanging Polaroid Gallery */}
      <div className="relative w-full mb-8">
        <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gradient-to-r from-rose-300/40 via-rose-400/80 to-rose-300/40 z-0"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
          {memories.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
              style={{ rotate: `${item.rotation || (idx % 2 === 0 ? -3 : 3)}deg` }}
              className="bg-white p-4 pt-6 pb-6 rounded-md polaroid-shadow hover:polaroid-shadow-hover transition-all duration-300 relative group cursor-pointer border border-rose-100 flex flex-col items-center"
            >
              {/* Wooden Peg / Clip at top center */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-4 h-7 bg-amber-200/90 border border-amber-400/60 rounded-sm shadow-sm z-20 flex flex-col items-center justify-between py-0.5">
                <div className="w-full h-0.5 bg-amber-600/40"></div>
                <div className="w-full h-0.5 bg-amber-600/40"></div>
              </div>

              {/* Sparkle Sticker */}
              <div className="absolute top-2 right-2 text-amber-500 text-sm opacity-80 group-hover:scale-125 transition-transform">
                ✨
              </div>

              {/* Photo Frame */}
              <div className="w-full aspect-[3/4] bg-rose-50 rounded overflow-hidden mb-3 border border-rose-100/80">
                <img 
                  src={item.image} 
                  alt={item.caption || "Memory"} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "/images/memory1.svg";
                  }}
                />
              </div>

              {/* Handwritten Caption */}
              <p className="font-handwriting text-xl text-rose-900 text-center font-bold px-2 line-clamp-2">
                {item.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer Text (Only rendered if provided) */}
      {(footerText || footerSubtext) && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center my-6 space-y-2"
        >
          {footerText && (
            <p className="font-handwriting text-3xl sm:text-4xl text-rose-900 font-bold">
              {footerText}
            </p>
          )}
          {footerSubtext && (
            <p className="text-lg sm:text-xl text-rose-950 font-sans font-medium">
              {footerSubtext}
            </p>
          )}
        </motion.div>
      )}

      {/* Next Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
        onClick={onNext}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-8 py-3.5 bg-gradient-to-r from-rose-500 via-rose-600 to-pink-600 text-white font-bold rounded-full shadow-lg hover:shadow-rose-400/40 text-lg transition-all border border-rose-300 flex items-center gap-2 cursor-pointer mt-4"
      >
        <span>NEXT</span>
        <span>→</span>
      </motion.button>
    </div>
  );
};
