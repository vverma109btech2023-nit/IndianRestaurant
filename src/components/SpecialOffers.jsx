import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Gift, Star, Sparkles } from 'lucide-react';
import Card from './UI/Card';
import Button from './UI/Button';

export default function SpecialOffers() {
  const offers = [
    {
      id: 1,
      badge: 'Royal Tasting',
      title: 'Chef Sanjay’s Sovereign Feast',
      price: '$95',
      frequency: 'per guest',
      description: 'An exclusive 7-course blind tasting menu crafted by our culinary director. Experience rare ingredients, custom spices, and table-side flame plating.',
      validity: 'Valid Tue - Thu (Pre-booking required)',
      features: ['Personalized guest menu', 'Includes saffron mocktail pairing', 'Chef culinary brief']
    },
    {
      id: 2,
      badge: 'Festive Special',
      title: 'Shahi Diwali & Saffron Feast',
      price: '$140',
      frequency: 'for two guests',
      description: 'Celebrate the festival of lights with our majestic silver-plated feast. Features a mega tandoori platter, rich lamb shank korma, and deconstructed dessert.',
      validity: 'Seasonal offer (Nov 1 - Nov 15)',
      features: ['Complimentary bottle of prosecco', 'Gift box of artisanal sweets', 'Royal table setup']
    },
    {
      id: 3,
      badge: 'Weekend Luxury',
      title: 'Maharaja Champagne Brunch',
      price: '$65',
      frequency: 'per guest',
      description: 'Elevate your Sundays with unlimited clay-oven naans, chef specialty seekh grills, slow-simmered lentils, and unlimited premium champagne pours.',
      validity: 'Every Sunday (11:30 AM - 3:30 PM)',
      features: ['Live acoustic sitar background', 'Bottomless champagne or saffron tea', 'Dessert cart access']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const handleScrollToBooking = () => {
    const target = document.querySelector('#reservation');
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="offers" className="relative py-24 lg:py-32 bg-luxury-dark overflow-hidden border-t border-gold-900/10">
      {/* Decorative vector sparks */}
      <div className="absolute right-1/4 top-1/4 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold font-sans block mb-3">
            Exquisite Privileges
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
            Seasonal & Royal <span className="text-gold-gradient italic font-normal">Offers</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/60 font-serif leading-relaxed">
            Savor the seasons with customized feast packages and curated dining events designed to transport you to the palace banquets of ancient India.
          </p>
        </div>

        {/* Offers Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {offers.map((offer) => (
            <motion.div key={offer.id} variants={itemVariants} className="h-full">
              <Card className="h-full flex flex-col justify-between p-8 border border-gold-500/10 relative overflow-hidden group hover:border-gold-500/40">
                {/* Shiny sweeping overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none" />

                <div>
                  {/* Badge */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-gold-500/10 border border-gold-500/30 text-gold-400 text-[9px] uppercase tracking-widest font-semibold px-3 py-1 rounded-sm">
                      {offer.badge}
                    </span>
                    <Sparkles className="w-4 h-4 text-gold-500/40 group-hover:text-gold-400 group-hover:animate-pulse transition-all duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg text-white font-medium mb-4 group-hover:text-gold-300 transition-colors duration-300">
                    {offer.title}
                  </h3>

                  {/* Price Block */}
                  <div className="flex items-baseline gap-1.5 mb-6">
                    <span className="text-3xl font-bold text-gold-400 font-sans tracking-wide">
                      {offer.price}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/40 font-semibold">
                      / {offer.frequency}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-white/70 font-serif leading-relaxed mb-6 pb-6 border-b border-gold-900/10">
                    {offer.description}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {offer.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <Gift className="w-3.5 h-3.5 text-gold-500 flex-shrink-0" />
                        <span className="text-[11px] text-white/80 font-sans tracking-wide">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer details */}
                <div className="mt-auto pt-6 border-t border-gold-900/10">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-3.5 h-3.5 text-saffron-500 flex-shrink-0" />
                    <span className="text-[9px] uppercase tracking-wider text-white/50 font-bold">
                      {offer.validity}
                    </span>
                  </div>

                  <Button 
                    variant="secondary" 
                    onClick={handleScrollToBooking}
                    className="w-full py-2.5 text-[9px]"
                  >
                    Claim Offer
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
