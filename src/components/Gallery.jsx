import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const galleryItems = [
    { src: '/images/butter_chicken.png', alt: 'Aromatic Butter Chicken', title: 'Signature Murgh Makhani', category: 'Main Course' },
    { src: '/images/hyderabadi_biryani.png', alt: 'Aromatic Dum Biryani', title: 'Royal Lamb Biryani', category: 'Main Course' },
    { src: '/images/ambience_dining.png', alt: 'Fine Dining Ambience', title: 'Golden Dining Salon', category: 'Interior' },
    { src: '/images/paneer_tikka.png', alt: 'Grilled Paneer Tikka', title: 'Charred Tandoori Paneer', category: 'Starters' },
    { src: '/images/saffron_rabri.png', alt: 'Gulab Jamun with Saffron Rabri', title: 'Rabri Dessert Medley', category: 'Desserts' },
    { src: '/images/dal_makhani.png', alt: 'Simmering Dal Makhani', title: 'Peshawari Dal Makhani', category: 'Side Dish' },
    { src: '/images/ambience_lounge.png', alt: 'Private Lounge Seating', title: 'Saffron Lounge Chamber', category: 'Interior' },
    { src: '/images/tandoori_platter.png', alt: 'Tandoori Sizzler Platter', title: 'Imperial Platter Banquet', category: 'Starters' }
  ];

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev === 0 ? galleryItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev === galleryItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-luxury-bg-light overflow-hidden border-t border-gold-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold font-sans block mb-3">
            Visual Storytelling
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
            The Saffron <span className="text-gold-gradient italic font-normal">Gallery</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/60 font-serif leading-relaxed">
            A feast for the eyes before the feast for the palate. Peek inside our royal kitchen, interior spaces, and signature dishes.
          </p>
        </div>

        {/* Masonry Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-sm overflow-hidden border border-gold-900/25 group cursor-pointer shadow-lg break-inside-avoid"
              onClick={() => setActiveImageIndex(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              {/* Image */}
              <img 
                src={item.src} 
                alt={item.alt} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/95 via-luxury-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold mb-1">
                  {item.category}
                </span>
                <h4 className="font-display text-lg text-white font-medium mb-2">
                  {item.title}
                </h4>
                
                {/* Maximize Icon */}
                <div className="flex items-center gap-1.5 text-[10px] text-white/60 uppercase tracking-widest font-semibold mt-1">
                  <Maximize2 className="w-3.5 h-3.5 text-gold-500" />
                  View Close-up
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Dark Close overlay */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveImageIndex(null)} />

            {/* Lightbox controls */}
            <button 
              onClick={() => setActiveImageIndex(null)}
              className="absolute top-6 right-6 z-20 text-white/70 hover:text-gold-400 p-2 border border-white/10 rounded-full hover:border-gold-500/30 transition-all duration-300 cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button 
              onClick={handlePrev}
              className="absolute left-6 text-white/70 hover:text-gold-400 p-3 border border-white/10 rounded-full hover:border-gold-500/30 transition-all duration-300 cursor-pointer z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-6 text-white/70 hover:text-gold-400 p-3 border border-white/10 rounded-full hover:border-gold-500/30 transition-all duration-300 cursor-pointer z-10"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Animated Image Container */}
            <motion.div 
              className="relative max-w-4xl max-h-[80vh] px-4 flex flex-col items-center justify-center z-10"
              key={activeImageIndex}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={galleryItems[activeImageIndex].src} 
                alt={galleryItems[activeImageIndex].alt} 
                className="max-w-full max-h-[70vh] object-contain border border-gold-500/20 shadow-2xl"
              />
              
              <div className="text-center mt-6">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block mb-1">
                  {galleryItems[activeImageIndex].category}
                </span>
                <h3 className="font-display text-xl text-white font-medium">
                  {galleryItems[activeImageIndex].title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
