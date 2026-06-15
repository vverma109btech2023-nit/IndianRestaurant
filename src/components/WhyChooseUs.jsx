import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Compass, Award, Star, Users, Leaf } from 'lucide-react';
import Card from './UI/Card';

export default function WhyChooseUs() {
  const strengths = [
    {
      icon: Compass,
      title: 'Authentic Vedic Recipes',
      description: 'Our secret spice mixtures are based on ancient gastronomic traditions passed down through generations, ensuring pure historical authenticity.'
    },
    {
      icon: Leaf,
      title: 'Fresh Premium Ingredients',
      description: 'We prioritize organic, locally grown vegetables and hand-selected free-range meats, alongside rare spices imported directly from small farms in India.'
    },
    {
      icon: Award,
      title: 'Award-Winning Chefs',
      description: 'Our culinary kitchen is directed by Michelin-caliber master chefs who spent decades cooking for royal families and luxury estates.'
    },
    {
      icon: Star,
      title: 'Premium Dining Experience',
      description: 'From velvet seating and customized brass-rimmed dinnerware to ambient classical sitar background melodies, every details exudes royalty.'
    },
    {
      icon: Users,
      title: 'Family & Group Seating',
      description: 'We offer specialized spacious dining areas, cozy family alcoves, and private dining vaults designed to make your gatherings unforgettable.'
    },
    {
      icon: Flame,
      title: 'Traditional Tandoor Clay Oven',
      description: 'We source special clay pots from Rajasthan to craft custom ovens that bake fresh naans and sear kebabs with authentic firewood smokiness.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="why-us" className="relative py-24 lg:py-32 bg-luxury-dark overflow-hidden border-t border-gold-900/10">
      {/* Decorative Glows */}
      <div className="absolute right-0 top-0 w-80 h-80 bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-saffron-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold font-sans block mb-3">
            Why Dine With Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
            The Pinnacle of <span className="text-gold-gradient italic font-normal">Hospitality</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/60 font-serif leading-relaxed">
            Our commitment is to elevate traditional flavors into a sensory, high-end fine dining luxury experience that is unmatched in flavor and style.
          </p>
        </div>

        {/* Strengths Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div key={index} variants={cardVariants} className="h-full">
                <Card className="h-full flex flex-col items-center text-center p-8 border border-gold-900/10 hover:border-gold-500/30">
                  {/* Icon Wrapper */}
                  <div className="w-16 h-16 rounded-full bg-gold-950/80 border border-gold-500/20 flex items-center justify-center mb-6 shadow-md transition-transform duration-500 group-hover:scale-110 group-hover:border-gold-500/40">
                    <Icon className="w-7 h-7 text-gold-400 group-hover:text-gold-300 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg text-white font-medium mb-3 group-hover:text-gold-300 transition-colors duration-300">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-white/60 font-serif leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
