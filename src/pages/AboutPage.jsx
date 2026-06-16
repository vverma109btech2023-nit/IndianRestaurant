import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/About';

export default function AboutPage() {
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
            The Saffron & Gold Chronicle
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            Our Legacy & <span className="text-gold-gradient italic font-normal">Heritage</span>
          </h1>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto" />
        </div>
      </section>

      {/* Main About Component */}
      <About />

      {/* Expanded Philosophy / Vedic Cooking Section */}
      <section className="py-24 bg-luxury-dark relative border-t border-gold-900/10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h3 className="font-display text-2xl lg:text-3xl text-white font-medium mb-8">
            The Art of <span className="text-gold-gradient font-normal italic">Slow-Cooked Vedic Gastronomy</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mt-12">
            <div className="p-6 border border-gold-900/10 bg-luxury-card/30 rounded-sm">
              <span className="text-gold-500 font-display text-xl font-bold block mb-3">01</span>
              <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-2">Spice Roasting</h4>
              <p className="text-xs text-white/60 font-serif leading-relaxed">
                Spices are roasted at custom temperatures to release volatile essential oils before stone grinding.
              </p>
            </div>
            <div className="p-6 border border-gold-900/10 bg-luxury-card/30 rounded-sm">
              <span className="text-gold-500 font-display text-xl font-bold block mb-3">02</span>
              <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-2">Wood Smoke (Dhungar)</h4>
              <p className="text-xs text-white/60 font-serif leading-relaxed">
                Ghee is poured over red-hot charcoal inside copper containers to smoke our signature dals and gravies.
              </p>
            </div>
            <div className="p-6 border border-gold-900/10 bg-luxury-card/30 rounded-sm">
              <span className="text-gold-500 font-display text-xl font-bold block mb-3">03</span>
              <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-2">Clay Dum Cookery</h4>
              <p className="text-xs text-white/60 font-serif leading-relaxed">
                Handis are sealed with wheat dough, cooking meat and rice in their own natural juices under slow steam pressure.
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
