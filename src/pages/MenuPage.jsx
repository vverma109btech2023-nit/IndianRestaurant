import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Info, Leaf, Wheat, X, ArrowRight } from 'lucide-react';
import Specialties from '../components/Specialties';

export default function MenuPage() {
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
            Sovereign Gastronomy
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            The Culinary <span className="text-gold-gradient italic font-normal">Scroll</span>
          </h1>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto" />
        </div>
      </section>

      {/* Signature Specialties Component */}
      <Specialties />

      {/* Menu Dietary Note Banner */}
      <section className="py-12 bg-luxury-dark border-t border-gold-900/10">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-1.5">Dietary & Allergen Guidance</h4>
            <p className="text-xs text-white/50 font-serif leading-relaxed">
              Many of our dishes contain cashews, almonds, and dairy. If you have severe nut allergies or lactose intolerance, please inform our service captains before ordering.
            </p>
          </div>
          <div className="flex gap-4 flex-shrink-0">
            <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-emerald-400 font-bold border border-emerald-400/20 bg-emerald-950/20 px-3 py-1.5 rounded-sm">
              <Leaf className="w-3.5 h-3.5" /> Vegetarian Options
            </span>
            <span className="flex items-center gap-1 text-[9px] uppercase tracking-wider text-gold-400 font-bold border border-gold-400/20 bg-gold-950/20 px-3 py-1.5 rounded-sm">
              <Wheat className="w-3.5 h-3.5" /> Gluten Free Available
            </span>
          </div>
        </div>
      </section>

    </motion.div>
  );
}
