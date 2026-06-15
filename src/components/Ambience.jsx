import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Wine, ShieldCheck, Heart } from 'lucide-react';
import Button from './UI/Button';

export default function Ambience() {
  const [activeTab, setActiveTab] = useState('dining');

  const sections = {
    dining: {
      title: 'The Golden Dining Salon',
      subtitle: 'Premium Fine Dining Hall',
      description: 'Step into an arena of sheer opulence. Under the warm glow of custom brass chandeliers, enjoy linen-lined tables set with handcrafted bronze cutlery. Designed for couples and connoisseurs seeking a majestic, intimate epicurean atmosphere.',
      highlights: ['Custom Golden Tableware', 'Soft Classical Sitar Melodies', 'Sommelier Wine Pairings'],
      image: '/images/ambience_dining.png',
      capacity: 'Seats 80 guests'
    },
    lounge: {
      title: 'The Saffron Lounge Chamber',
      subtitle: 'Royal Family Seating & Lounge',
      description: 'A luxurious sanctuary draped in ethnic Indian fabrics and rich velvet textures. The Saffron Lounge features semi-private alcoves and low-table configurations. Perfect for family celebrations and group feasts where memories are shared over platters.',
      highlights: ['Spacious Velvet Sofa Alcoves', 'Curated Herbal Mocktails', 'Child-Friendly Custom Menu'],
      image: '/images/ambience_lounge.png',
      capacity: 'Seats 45 guests'
    },
    vault: {
      title: 'The Private Jewel Vault',
      subtitle: 'VIP Events & Sovereign Rooms',
      description: 'Our soundproof, secure VIP Vault is designed for private corporate events, family anniversaries, and high-profile parties. Equipped with a dedicated butler service, a customized menus option, and modular seating configurations.',
      highlights: ['Personal Butler Service', 'Tailored Multi-Course Menus', 'Complete Acoustic Isolation'],
      image: '/images/hero_bg.png', // Fallback to hero_bg since it looks like a beautiful dark scene
      capacity: 'Accommodates 12 to 24 guests'
    }
  };

  const current = sections[activeTab];

  return (
    <section id="ambience" className="relative py-24 lg:py-32 bg-luxury-bg-light overflow-hidden border-t border-gold-900/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold font-sans block mb-3">
            Royal Surroundings
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
            Our Dining <span className="text-gold-gradient italic font-normal">Chambers</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/60 font-serif leading-relaxed">
            Every room in Saffron & Gold is designed to immerse your senses in royalty. Choose the environment that matches your celebration.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center border-b border-gold-900/20 mb-12 max-w-md mx-auto">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`relative py-3.5 px-5 text-xs uppercase tracking-widest font-semibold cursor-pointer transition-colors duration-300 ${
                activeTab === key ? 'text-gold-400 font-bold' : 'text-white/50 hover:text-white'
              }`}
            >
              {key === 'dining' ? 'Fine Dining' : key === 'lounge' ? 'Lounge' : 'Private Vault'}
              {activeTab === key && (
                <motion.div 
                  layoutId="activeAmbienceIndicator"
                  className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold-400"
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content (Animated Layout Grid) */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* Image (Left 7 Columns) */}
            <div className="lg:col-span-7 border-2 border-gold-900/20 p-2 relative rounded-sm overflow-hidden shadow-2xl group">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img 
                  src={current.image} 
                  alt={current.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Info (Right 5 Columns) */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold mb-1">
                {current.subtitle}
              </span>
              <h3 className="font-display text-2xl lg:text-3xl text-white font-medium mb-5">
                {current.title}
              </h3>
              
              <p className="text-xs md:text-sm text-white/70 font-serif leading-relaxed mb-6">
                {current.description}
              </p>

              {/* Highlights Checklist */}
              <div className="space-y-3 mb-8">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                    <span className="text-xs text-white/80 font-sans tracking-wide">
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Capacity info tag */}
              <div className="py-3 px-4 bg-gold-950/20 border border-gold-900/20 text-center rounded-sm">
                <span className="text-[10px] uppercase tracking-widest text-gold-300 font-semibold font-sans">
                  Capacity: {current.capacity}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
