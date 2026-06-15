import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Card from './UI/Card';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: 'Vikram Seth',
      role: 'Delhi Food Critic & Writer',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      quote: 'An absolute masterpiece of tastes. The Hyderabadi Lamb Biryani was a spiritual culinary experience—the grains of basmati were perfectly separated, smelling of pure cardamom and saffron. Exceptional hospitality.'
    },
    {
      id: 2,
      name: 'Priya Sharma',
      role: 'Gastronomy Blogger',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
      quote: 'Saffron & Gold takes Indian cuisine to a height of luxury I have never witnessed before. The smoky aroma of the slow-cooked Peshawari Dal Makhani is unforgettable. The gold-rimmed plates and service are royal.'
    },
    {
      id: 3,
      name: 'David Miller',
      role: 'Michelin Guide Reviewer',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      quote: 'The Chef’s signature Rabri Gulab Jamun medley is a work of art. Plated with real gold leaf, it combined temperatures and textures elegantly. The service was impeccable, deserving of the highest accolades.'
    }
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered) {
      timerRef.current = setInterval(() => {
        handleNext();
      }, 6000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered]);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32 bg-luxury-dark overflow-hidden border-t border-gold-900/10">
      {/* Visual background elements */}
      <div className="absolute left-1/4 top-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold font-sans block mb-3">
            Guest Experiences
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
            Royal Testimonials
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
        </div>

        {/* Carousel Container */}
        <div 
          className="relative min-h-[380px] md:min-h-[300px] flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full flex flex-col items-center"
            >
              <Card hoverEffect={false} className="w-full max-w-3xl p-8 md:p-12 border border-gold-900/15 relative bg-luxury-card/50">
                
                {/* Quote Icon Background */}
                <Quote className="absolute -top-4 left-6 md:left-10 w-16 h-16 text-gold-900/10 -z-0 pointer-events-none" />

                {/* Rating stars */}
                <div className="flex justify-center gap-1 mb-6 relative z-10">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="text-base md:text-lg text-white/80 font-serif leading-relaxed italic mb-8 relative z-10">
                  “ {reviews[currentIndex].quote} ”
                </blockquote>

                {/* Customer Details */}
                <div className="flex items-center justify-center gap-4 relative z-10">
                  <img 
                    src={reviews[currentIndex].avatar} 
                    alt={reviews[currentIndex].name} 
                    className="w-12 h-12 rounded-full object-cover border border-gold-500/30"
                  />
                  <div className="text-left">
                    <cite className="not-italic font-display text-sm text-gold-400 font-bold block">
                      {reviews[currentIndex].name}
                    </cite>
                    <span className="text-[10px] uppercase tracking-widest text-white/50 block mt-0.5">
                      {reviews[currentIndex].role}
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-4 z-20">
            <button 
              onClick={handlePrev}
              className="text-white/60 hover:text-gold-400 p-2 border border-gold-900/20 rounded-full hover:border-gold-500/30 transition-all duration-300 cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            {/* Slide dots */}
            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'w-4 bg-gold-400' : 'bg-white/20'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="text-white/60 hover:text-gold-400 p-2 border border-gold-900/20 rounded-full hover:border-gold-500/30 transition-all duration-300 cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
