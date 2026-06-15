import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import Button from './UI/Button';

export default function Hero() {
  const { scrollY } = useScroll();
  // Parallax translation effects
  const bgY = useTransform(scrollY, [0, 500], [0, 150]);
  const textY = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const handleScrollTo = (id) => {
    const target = document.querySelector(id);
    if (target) {
      const offset = 80;
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('/images/hero_bg.png')`,
          y: bgY,
          scale: 1.1 // Slightly scaled up to prevent border showing during parallax
        }}
      />

      {/* Luxury Vignette and Saffron/Dark Gradients Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/65 to-black/80 z-1" />
      <div className="absolute inset-0 bg-radial-at-c from-transparent via-luxury-dark/40 to-luxury-dark/95 z-1" />
      
      {/* Dynamic Saffron Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-saffron-600/10 rounded-full blur-[120px] pointer-events-none z-1" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[150px] pointer-events-none z-1" />

      {/* Content Container */}
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center justify-center h-full mt-10"
        style={{ y: textY, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtle Badge */}
        <motion.div 
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/20 backdrop-blur-sm mb-6"
          variants={itemVariants}
        >
          <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
          <span className="text-[10px] tracking-[0.3em] uppercase text-gold-200 font-semibold font-sans">
            The Pinnacle of Indian Fine Dining
          </span>
        </motion.div>

        {/* Animated Heading */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-wider leading-tight text-white mb-6"
          variants={itemVariants}
        >
          Experience the <br />
          <span className="text-gold-gradient font-normal italic">True Taste</span> of India
        </motion.h1>

        {/* Description */}
        <motion.p 
          className="text-sm md:text-base lg:text-lg text-white/70 max-w-2xl font-serif leading-relaxed mb-10"
          variants={itemVariants}
        >
          A culinary odyssey blending ancient Vedic recipes with modern culinary craftsmanship. 
          Step into a sanctuary where rich heritage, rare hand-ground spices, and gold-leaf elegance 
          harmonize on your plate.
        </motion.p>

        {/* Actions */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
          variants={itemVariants}
        >
          <Button 
            variant="primary" 
            onClick={() => handleScrollTo('#specialties')} 
            className="w-full sm:w-auto"
          >
            Explore Menu
          </Button>
          <Button 
            variant="secondary" 
            onClick={() => handleScrollTo('#reservation')} 
            className="w-full sm:w-auto"
          >
            Reserve Table
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center cursor-pointer gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        onClick={() => handleScrollTo('#about')}
        style={{ opacity }}
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-white/50 hover:text-gold-400 transition-colors duration-300">
          Scroll Down
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-gold-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
