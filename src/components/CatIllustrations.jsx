import React from 'react';
import { motion } from 'framer-motion';

// Welcome Cat - Curious, soft, cute cat looking up
export const WelcomeCat = ({ className = "w-48 h-48" }) => (
  <motion.div 
    className={`relative flex items-center justify-center ${className}`}
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      <defs>
        <linearGradient id="catGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8f6" />
          <stop offset="100%" stopColor="#fde8e8" />
        </linearGradient>
        <linearGradient id="earPink" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
      </defs>

      {/* Tail */}
      <path d="M 140 150 Q 180 140 165 100 Q 155 80 145 90" stroke="#fbcfe8" strokeWidth="12" fill="none" strokeLinecap="round"/>

      {/* Body */}
      <ellipse cx="100" cy="140" rx="45" ry="35" fill="url(#catGrad)"/>

      {/* Paws */}
      <ellipse cx="80" cy="168" rx="12" ry="8" fill="#ffffff" stroke="#fbcfe8" strokeWidth="2"/>
      <ellipse cx="120" cy="168" rx="12" ry="8" fill="#ffffff" stroke="#fbcfe8" strokeWidth="2"/>

      {/* Left Ear */}
      <polygon points="55,80 72,40 92,72" fill="url(#catGrad)" stroke="#fbcfe8" strokeWidth="2"/>
      <polygon points="62,75 72,48 85,72" fill="url(#earPink)"/>

      {/* Right Ear */}
      <polygon points="108,72 128,40 145,80" fill="url(#catGrad)" stroke="#fbcfe8" strokeWidth="2"/>
      <polygon points="115,72 128,48 138,75" fill="url(#earPink)"/>

      {/* Head */}
      <circle cx="100" cy="95" r="40" fill="url(#catGrad)"/>

      {/* Eyes */}
      <ellipse cx="83" cy="92" rx="7" ry="9" fill="#4a2e35"/>
      <circle cx="81" cy="89" r="2.5" fill="#ffffff"/>
      <circle cx="85" cy="94" r="1.2" fill="#ffffff"/>

      <ellipse cx="117" cy="92" rx="7" ry="9" fill="#4a2e35"/>
      <circle cx="115" cy="89" r="2.5" fill="#ffffff"/>
      <circle cx="119" cy="94" r="1.2" fill="#ffffff"/>

      {/* Nose */}
      <polygon points="97,99 103,99 100,102" fill="#fb7185"/>

      {/* Mouth */}
      <path d="M 94 105 Q 100 110 100 104 Q 100 110 106 105" stroke="#881337" strokeWidth="2" fill="none" strokeLinecap="round"/>

      {/* Blush Cheeks */}
      <ellipse cx="73" cy="100" rx="7" ry="4" fill="#fb7185" opacity="0.4"/>
      <ellipse cx="127" cy="100" rx="7" ry="4" fill="#fb7185" opacity="0.4"/>

      {/* Whiskers */}
      <line x1="50" y1="92" x2="68" y2="95" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="48" y1="100" x2="68" y2="99" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="132" y1="95" x2="152" y2="92" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="132" y1="99" x2="152" y2="100" stroke="#f472b6" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  </motion.div>
);

// Angry Cat - Cute pouting cat for NO reaction
export const AngryCat = ({ className = "w-48 h-48" }) => (
  <motion.div 
    className={`relative flex items-center justify-center ${className}`}
    animate={{ rotate: [-3, 3, -3] }}
    transition={{ duration: 0.4, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-lg">
      <defs>
        <linearGradient id="angryCatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff1f2" />
          <stop offset="100%" stopColor="#ffe4e6" />
        </linearGradient>
      </defs>

      <path d="M 145 45 L 160 30 M 152 30 L 152 45 M 145 35 L 160 35" stroke="#e11d48" strokeWidth="3" strokeLinecap="round"/>

      <polygon points="50,75 65,35 88,68" fill="url(#angryCatGrad)" stroke="#fda4af" strokeWidth="2"/>
      <polygon points="58,72 65,42 80,68" fill="#fb7185"/>

      <polygon points="112,68 135,35 150,75" fill="url(#angryCatGrad)" stroke="#fda4af" strokeWidth="2"/>
      <polygon points="120,68 135,42 142,72" fill="#fb7185"/>

      <ellipse cx="100" cy="140" rx="48" ry="38" fill="url(#angryCatGrad)"/>

      <ellipse cx="85" cy="145" rx="14" ry="10" fill="#ffffff" stroke="#fda4af" strokeWidth="2"/>
      <ellipse cx="115" cy="145" rx="14" ry="10" fill="#ffffff" stroke="#fda4af" strokeWidth="2"/>

      <circle cx="100" cy="95" r="42" fill="url(#angryCatGrad)"/>

      <line x1="72" y1="78" x2="90" y2="88" stroke="#be123c" strokeWidth="4" strokeLinecap="round"/>
      <line x1="128" y1="78" x2="110" y2="88" stroke="#be123c" strokeWidth="4" strokeLinecap="round"/>

      <ellipse cx="83" cy="94" rx="7" ry="7" fill="#881337"/>
      <ellipse cx="117" cy="94" rx="7" ry="7" fill="#881337"/>
      <circle cx="81" cy="92" r="2" fill="#ffffff"/>
      <circle cx="115" cy="92" r="2" fill="#ffffff"/>

      <path d="M 92 112 Q 100 104 108 112" stroke="#be123c" strokeWidth="3" fill="none" strokeLinecap="round"/>

      <ellipse cx="72" cy="102" rx="9" ry="5" fill="#f43f5e" opacity="0.6"/>
      <ellipse cx="128" cy="102" rx="9" ry="5" fill="#f43f5e" opacity="0.6"/>

      <line x1="45" y1="95" x2="65" y2="97" stroke="#f43f5e" strokeWidth="1.5"/>
      <line x1="135" y1="97" x2="155" y2="95" stroke="#f43f5e" strokeWidth="1.5"/>
    </svg>
  </motion.div>
);

// Happy Cat - Joyful winking cat for YES reaction
export const HappyCat = ({ className = "w-48 h-48" }) => (
  <motion.div 
    className={`relative flex items-center justify-center ${className}`}
    initial={{ scale: 0.8, y: 10 }}
    animate={{ scale: 1, y: 0 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
  >
    <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-md">
      <defs>
        <linearGradient id="happyCatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff8f6" />
          <stop offset="100%" stopColor="#fce7f3" />
        </linearGradient>
      </defs>

      <polygon points="52,75 68,32 90,68" fill="url(#happyCatGrad)" stroke="#fbcfe8" strokeWidth="2"/>
      <polygon points="60,72 68,40 82,68" fill="#fb7185"/>

      <polygon points="110,68 132,32 148,75" fill="url(#happyCatGrad)" stroke="#fbcfe8" strokeWidth="2"/>
      <polygon points="118,68 132,40 140,72" fill="#fb7185"/>

      <ellipse cx="100" cy="140" rx="46" ry="36" fill="url(#happyCatGrad)"/>

      <ellipse cx="78" cy="148" rx="10" ry="7" fill="#ffffff" stroke="#fbcfe8" strokeWidth="2"/>
      <ellipse cx="122" cy="148" rx="10" ry="7" fill="#ffffff" stroke="#fbcfe8" strokeWidth="2"/>

      <circle cx="100" cy="92" r="42" fill="url(#happyCatGrad)"/>

      <path d="M 75 92 Q 83 84 91 92" stroke="#881337" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M 109 92 Q 117 84 125 92" stroke="#881337" strokeWidth="3" fill="none" strokeLinecap="round"/>

      <polygon points="97,97 103,97 100,100" fill="#fb7185"/>
      <path d="M 93 103 Q 100 115 107 103 Z" fill="#e11d48"/>

      <ellipse cx="71" cy="98" rx="8" ry="5" fill="#f43f5e" opacity="0.5"/>
      <ellipse cx="129" cy="98" rx="8" ry="5" fill="#f43f5e" opacity="0.5"/>

      <path d="M 148 70 L 152 75 L 148 80 L 144 75 Z" fill="#fde047"/>
    </svg>
  </motion.div>
);

// Party Cat - Cute cat wearing party hat for birthday screen
export const PartyCat = ({ className = "w-56 h-56" }) => (
  <motion.div 
    className={`relative flex items-center justify-center ${className}`}
    animate={{ y: [0, -8, 0] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    <svg viewBox="0 0 200 220" className="w-full h-full drop-shadow-xl">
      <defs>
        <linearGradient id="partyCatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#fff1f2" />
        </linearGradient>
        <linearGradient id="hatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f43f5e" />
          <stop offset="50%" stopColor="#fb7185" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>
      </defs>

      <polygon points="100,20 75,75 125,75" fill="url(#hatGrad)"/>
      <circle cx="100" cy="18" r="7" fill="#fde047"/>
      <path d="M 83 58 Q 100 62 117 58" stroke="#ffffff" strokeWidth="3" fill="none"/>
      <path d="M 89 42 Q 100 45 111 42" stroke="#ffffff" strokeWidth="3" fill="none"/>

      <polygon points="48,95 62,50 85,88" fill="url(#partyCatGrad)" stroke="#fda4af" strokeWidth="2"/>
      <polygon points="56,92 62,58 78,88" fill="#fb7185"/>

      <polygon points="115,88 138,50 152,95" fill="url(#partyCatGrad)" stroke="#fda4af" strokeWidth="2"/>
      <polygon points="122,88 138,58 144,92" fill="#fb7185"/>

      <ellipse cx="100" cy="160" rx="50" ry="40" fill="url(#partyCatGrad)"/>

      <rect x="85" y="152" width="30" height="22" rx="4" fill="#fb7185"/>
      <path d="M 80 152 Q 100 135 120 152 Z" fill="#ffffff"/>
      <circle cx="100" cy="140" r="5" fill="#e11d48"/>
      <line x1="100" y1="135" x2="100" y2="128" stroke="#fde047" strokeWidth="2"/>

      <ellipse cx="76" cy="165" rx="10" ry="7" fill="#ffffff" stroke="#fda4af" strokeWidth="2"/>
      <ellipse cx="124" cy="165" rx="10" ry="7" fill="#ffffff" stroke="#fda4af" strokeWidth="2"/>

      <circle cx="100" cy="112" r="44" fill="url(#partyCatGrad)"/>

      <ellipse cx="82" cy="110" rx="7" ry="9" fill="#4a2e35"/>
      <circle cx="80" cy="107" r="2.5" fill="#ffffff"/>

      <ellipse cx="118" cy="110" rx="7" ry="9" fill="#4a2e35"/>
      <circle cx="116" cy="107" r="2.5" fill="#ffffff"/>

      <path d="M 94 120 Q 100 126 106 120" stroke="#881337" strokeWidth="2" fill="none" strokeLinecap="round"/>

      <ellipse cx="70" cy="118" rx="8" ry="5" fill="#fb7185" opacity="0.5"/>
      <ellipse cx="130" cy="118" rx="8" ry="5" fill="#fb7185" opacity="0.5"/>

      <path d="M 35 100 L 40 105 L 35 110 L 30 105 Z" fill="#fde047"/>
      <path d="M 165 115 L 170 120 L 165 125 L 160 120 Z" fill="#f43f5e"/>
    </svg>
  </motion.div>
);
