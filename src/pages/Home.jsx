import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Compass, Calendar } from 'lucide-react';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

export default function Home() {
  const featuredDishes = [
    {
      id: 1,
      name: 'Royal Butter Chicken',
      price: '$28',
      image: '/images/butter_chicken.png',
      description: 'Simmered in a velvet-smooth sauce of vine-ripened tomatoes, cashew butter, and fenugreek.'
    },
    {
      id: 2,
      name: 'Hyderabadi Lamb Biryani',
      price: '$34',
      image: '/images/hyderabadi_biryani.png',
      description: 'Basmati rice, saffron, and tender lamb, slow-cooked in a sealed clay pot on dum.'
    },
    {
      id: 6,
      name: 'Deconstructed Gulab Jamun',
      price: '$18',
      image: '/images/saffron_rabri.png',
      description: ' syrup-soaked milk dumplings served on a velvet pillow of saffron rabri with 24K gold leaf.'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Cinematic Hero Header */}
      <Hero />

      {/* Gourmet Highlights Teaser */}
      <section className="py-24 bg-luxury-bg-light relative border-t border-gold-900/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold font-sans block mb-3">
                Culinary Highlights
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white">
                Signature <span className="text-gold-gradient italic font-normal">Tasters</span>
              </h2>
            </div>
            <Link to="/menu">
              <Button variant="tertiary" className="text-xs tracking-widest flex items-center gap-2">
                View Full Menu <ArrowRight className="w-4 h-4 text-gold-400" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDishes.map((dish) => (
              <Card key={dish.id} className="group border border-gold-900/10 hover:border-gold-500/20 flex flex-col justify-between">
                <div>
                  <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-5">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute top-3 right-3 bg-luxury-dark/95 border border-gold-500/20 px-2.5 py-0.5 text-[10px] font-bold text-gold-400 font-sans tracking-wide">
                      {dish.price}
                    </div>
                  </div>
                  <h3 className="font-display text-base text-white font-medium mb-2 group-hover:text-gold-300 transition-colors duration-300">
                    {dish.name}
                  </h3>
                  <p className="text-xs text-white/60 font-serif leading-relaxed mb-6">
                    {dish.description}
                  </p>
                </div>
                <Link to="/menu" className="text-[10px] uppercase tracking-widest text-gold-400 font-bold flex items-center gap-1 group-hover:text-gold-300">
                  Dish Details <ArrowRight className="w-3.5 h-3.5 text-gold-500 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us Strengths */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />

      {/* Premium Reservation Teaser Banner */}
      <section className="py-24 bg-luxury-bg-light relative border-t border-gold-900/10 text-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none" style={{ backgroundImage: "url('/images/hero_bg.png')" }} />
        <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gold-500 font-semibold font-sans mb-3 block">
            Exquisite Hospitality
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
            Secure Your <span className="text-gold-gradient italic font-normal">Sovereign Dining</span> Chamber
          </h2>
          <p className="text-xs md:text-sm text-white/60 font-serif leading-relaxed max-w-xl mb-10">
            Dine like royalty. Experience hand-roasted Vedic recipes in a sanctuary of luxury. We recommend securing your reservation in advance.
          </p>
          <Link to="/reserve">
            <Button variant="primary" className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-luxury-dark" />
              Book Your Table
            </Button>
          </Link>
        </div>
      </section>

    </motion.div>
  );
}
