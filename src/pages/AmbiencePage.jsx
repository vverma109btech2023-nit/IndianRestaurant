import React from 'react';
import { motion } from 'framer-motion';
import Ambience from '../components/Ambience';

export default function AmbiencePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="pt-24 lg:pt-32"
    >
      {/* Banner / Header */}
      <section className="py-20 bg-luxury-bg-light relative overflow-hidden border-b border-gold-900/10">
        <div className="absolute inset-0 bg-cover bg-center opacity-5 pointer-events-none" style={{ backgroundImage: "url('/images/hero_bg.png')" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gold-500 font-bold block mb-4">
            Palace Environments
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            The Dining <span className="text-gold-gradient italic font-normal">Chambers</span>
          </h1>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto" />
        </div>
      </section>

      {/* Main Ambience component */}
      <Ambience />

      {/* Music and Vibe Note */}
      <section className="py-24 bg-luxury-dark relative border-t border-gold-900/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-display text-xl lg:text-2xl text-white font-medium mb-6">
            Sovereign Acoustic <span className="text-gold-gradient font-normal italic">Environment</span>
          </h3>
          <p className="text-xs md:text-sm text-white/50 font-serif leading-relaxed max-w-2xl mx-auto mb-8">
            Sound design at Saffron & Gold is meticulously calibrated. We host live, acoustic Indian sitar and table performances every Friday and Saturday evening. During weekdays, enjoy ambient classical raagas playing softly in the background to ensure privacy and relaxed conversation.
          </p>
          <div className="w-12 h-[1px] bg-gold-900/50 mx-auto" />
        </div>
      </section>
    </motion.div>
  );
}
