import React from 'react';
import { motion } from 'framer-motion';
import ReservationCTA from '../components/ReservationCTA';

export default function ReservePage() {
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
            Table Bookings
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-medium text-white mb-6">
            Reserve Your <span className="text-gold-gradient italic font-normal">Sovereign Seat</span>
          </h1>
          <div className="w-16 h-[1.5px] bg-gold-400 mx-auto" />
        </div>
      </section>

      {/* Main Reservation component */}
      <ReservationCTA />
    </motion.div>
  );
}
