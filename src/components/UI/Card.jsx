import React from 'react';
import { motion } from 'framer-motion';

export default function Card({ 
  children, 
  className = '', 
  hoverEffect = true,
  ...props 
}) {
  return (
    <motion.div
      className={`bg-luxury-card/90 backdrop-blur-md border border-gold-900/30 rounded-sm overflow-hidden p-6 transition-all duration-500 ${
        hoverEffect ? 'hover:border-gold-500/50 hover:shadow-[0_10px_30px_rgba(212,175,55,0.08)] group' : ''
      } ${className}`}
      whileHover={hoverEffect ? { y: -6 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}
