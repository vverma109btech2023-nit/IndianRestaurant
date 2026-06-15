import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button',
  className = '',
  ...props 
}) {
  const baseStyle = "relative px-8 py-3.5 rounded-sm font-sans tracking-widest text-xs uppercase font-semibold transition-all duration-300 overflow-hidden cursor-pointer";
  
  const variants = {
    primary: "bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 text-luxury-dark hover:from-gold-500 hover:to-gold-500 gold-glow hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] border border-gold-300/20",
    secondary: "border border-gold-500/50 text-gold-400 hover:text-luxury-dark hover:border-gold-400 backdrop-blur-sm",
    tertiary: "text-white hover:text-gold-400 underline decoration-gold-500/50 underline-offset-8 decoration-2 hover:decoration-gold-400"
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      whileHover={{ scale: variant !== 'tertiary' ? 1.03 : 1 }}
      whileTap={{ scale: variant !== 'tertiary' ? 0.98 : 1 }}
      {...props}
    >
      {/* Golden sweeping light effect on hover for secondary button */}
      {variant === 'secondary' && (
        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-gold-500/20 to-transparent -translate-x-full hover:animate-[shimmer_1.5s_infinite]" />
      )}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
}
