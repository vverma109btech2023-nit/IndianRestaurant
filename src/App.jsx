import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Ambience from './components/Ambience';
import SpecialOffers from './components/SpecialOffers';
import ReservationCTA from './components/ReservationCTA';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Hook for reading page scroll progress
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track scroll position for Back to Top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simulate loader screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* 1. Loading Entrance Screen */}
      <AnimatePresence>
        {loading && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-luxury-dark flex flex-col items-center justify-center"
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
            }}
          >
            {/* Spinning Golden Geometric Rings */}
            <div className="relative w-28 h-28 mb-8">
              <motion.div 
                className="absolute inset-0 border-2 border-gold-500/20 rounded-full"
              />
              <motion.div 
                className="absolute inset-0 border-t-2 border-gold-400 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              />
              <motion.div 
                className="absolute inset-4 border-b-2 border-saffron-500 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
              />
              {/* Inner dot */}
              <div className="absolute inset-10 bg-luxury-dark rounded-full border border-gold-500/40 flex items-center justify-center">
                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full animate-ping" />
              </div>
            </div>

            {/* Premium Branding Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-center"
            >
              <h1 className="font-display text-2xl lg:text-3xl tracking-[0.3em] text-gold-400 font-bold mb-1">
                SAFFRON
              </h1>
              <span className="text-[9px] tracking-[0.7em] text-white/50 block">
                & GOLD
              </span>
              <p className="text-[9px] uppercase tracking-[0.25em] text-gold-500/80 font-sans font-semibold mt-4">
                Sovereign Indian Dining
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Website Contents */}
      {!loading && (
        <div className="min-h-screen bg-luxury-dark text-white relative">
          
          {/* Scroll progress bar */}
          <motion.div 
            className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold-500 via-saffron-500 to-gold-400 origin-[0%] z-[60]"
            style={{ scaleX }}
          />

          {/* Sticky Header Navigation */}
          <Navbar />

          {/* Sections */}
          <main>
            <Hero />
            <About />
            <Specialties />
            <WhyChooseUs />
            <Gallery />
            <Testimonials />
            <Ambience />
            <SpecialOffers />
            <ReservationCTA />
          </main>

          {/* Footer information */}
          <Footer />

          {/* Back to Top button */}
          <AnimatePresence>
            {showBackToTop && (
              <motion.button
                onClick={handleScrollToTop}
                className="fixed bottom-6 right-6 z-45 w-11 h-11 bg-luxury-card hover:bg-gold-950 border border-gold-900/30 hover:border-gold-400 text-gold-400 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Scroll back to top"
              >
                <ChevronUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </motion.button>
            )}
          </AnimatePresence>

        </div>
      )}
    </>
  );
}
