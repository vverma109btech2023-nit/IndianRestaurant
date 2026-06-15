import React from 'react';

// Custom elegant pepper SVG
const ChiliIcon = ({ filled }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill={filled ? "url(#chiliGrad)" : "none"} 
    stroke={filled ? "none" : "#4A0010"} 
    strokeWidth="1.5"
    className="w-4 h-4 transition-all duration-300"
  >
    <defs>
      <linearGradient id="chiliGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff9933" />
        <stop offset="100%" stopColor="#800020" />
      </linearGradient>
    </defs>
    <path d="M12 2c-.5.5-1 1.5-1 2.5 0 2 1.5 3.5 3 3.5s2.5-1 2.5-2.5c0-1.5-1-2-1.5-2.5L12 2z" stroke="#ff9933" strokeWidth="1" />
    <path d="M10 6.5C7 9.5 5.5 13 6 17c.5 4 4.5 5 7 4 3.5-1.5 5.5-5 5-9.5-.2-2-1.3-4-2.5-5C13.5 8 11.5 7.5 10 6.5z" />
  </svg>
);

export default function SpiceLevel({ level = 1, showLabel = true }) {
  // level: 1 (Mild), 2 (Medium), 3 (Spicy)
  const label = level === 1 ? 'Mild' : level === 2 ? 'Medium' : 'Spicy';
  
  return (
    <div className="flex items-center gap-1.5" title={`Spice Level: ${label}`}>
      <div className="flex gap-0.5">
        {[1, 2, 3].map((num) => (
          <ChiliIcon key={num} filled={num <= level} />
        ))}
      </div>
      {showLabel && (
        <span className="text-[10px] uppercase tracking-widest text-gold-500 font-medium font-sans">
          {label}
        </span>
      )}
    </div>
  );
}
