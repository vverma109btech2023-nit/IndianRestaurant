import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Heart, Leaf, Wheat, Info } from 'lucide-react';
import Card from './UI/Card';
import Button from './UI/Button';
import SpiceLevel from './UI/SpiceLevel';

export default function Specialties() {
  const [activeDish, setActiveDish] = useState(null);

  const dishes = [
    {
      id: 1,
      name: 'Royal Butter Chicken',
      localName: 'Murgh Makhani',
      description: 'Tender tandoori-grilled chicken simmered in a velvet-smooth sauce of vine-ripened tomatoes, cashew butter, and dried fenugreek leaves.',
      price: '$28',
      image: '/images/butter_chicken.png',
      spiceLevel: 1,
      tags: ['Signature', 'Gluten Free'],
      ingredients: 'Tandoori chicken, Roma tomatoes, heavy cream, cashew paste, honey, fenugreek leaves (kasuri methi), cardamom.',
      calories: '680 kcal',
      dietary: { veg: false, gf: true, df: false, nuts: true }
    },
    {
      id: 2,
      name: 'Hyderabadi Lamb Biryani',
      localName: 'Kacchi Yakhni Biryani',
      description: 'A masterpiece of basmati rice, saffron, and milk-marinated Australian lamb, slow-cooked in a sealed clay pot on dum over hot coals.',
      price: '$34',
      image: '/images/hyderabadi_biryani.png',
      spiceLevel: 3,
      tags: ['Chef Special', 'Nut Free'],
      ingredients: 'Aged Basmati rice, premium lamb leg chunks, saffron threads, mint, cilantro, caramelized onions, rose water, kewra essence.',
      calories: '790 kcal',
      dietary: { veg: false, gf: true, df: true, nuts: false }
    },
    {
      id: 3,
      name: 'Charred Paneer Tikka',
      localName: 'Khas Paneer Tikka',
      description: 'Artisanal organic cottage cheese blocks marinated in thick hang-yogurt, mustard oil, and hand-pounded spices, charred to perfection.',
      price: '$24',
      image: '/images/paneer_tikka.png',
      spiceLevel: 2,
      tags: ['Vegetarian', 'Gluten Free'],
      ingredients: 'Organic house-made paneer, bell peppers, Spanish onion, yogurt marinade, Kashmiri chili powder, black salt, chaat masala.',
      calories: '450 kcal',
      dietary: { veg: true, gf: true, df: false, nuts: false }
    },
    {
      id: 4,
      name: 'Slow Simmered Dal Makhani',
      localName: 'Peshawari Dal',
      description: 'Black lentils (urad) and red kidney beans, slow-cooked for 24 hours with butter, garlic, and tomato paste, finished with wood-smoke.',
      price: '$22',
      image: '/images/dal_makhani.png',
      spiceLevel: 1,
      tags: ['Vegetarian', 'Gluten Free'],
      ingredients: 'Whole black lentils, kidney beans, salted white butter, tomato puree, fresh cream, ginger juliennes, charcoal smoke infusion.',
      calories: '420 kcal',
      dietary: { veg: true, gf: true, df: false, nuts: false }
    },
    {
      id: 5,
      name: 'Imperial Tandoori Platter',
      localName: 'Shahi Khazana',
      description: 'A royal banquet platter containing lamb seekh kebab, tandoori murgh tikka, tiger prawns, and fish kebabs, served on a sizzling hot plate.',
      price: '$42',
      image: '/images/tandoori_platter.png',
      spiceLevel: 2,
      tags: ['Royal Feast', 'Gluten Free'],
      ingredients: 'Australian lamb mince, organic chicken thigh, jumbo black tiger prawns, local cod chunks, tandoori spice rub, lemon, mint chutney.',
      calories: '890 kcal',
      dietary: { veg: false, gf: true, df: false, nuts: false }
    },
    {
      id: 6,
      name: 'Deconstructed Gulab Jamun',
      localName: 'Rabri Saffron Medley',
      description: 'Warm, syrup-soaked milk dumplings served on a velvet pillow of saffron-infused condensed rabri, finished with edible 24K gold leaf.',
      price: '$18',
      image: '/images/saffron_rabri.png',
      spiceLevel: 1,
      tags: ['Signature Dessert', 'Vegetarian'],
      ingredients: 'Reduced milk solids (khoya), sugar syrup, green cardamom, saffron threads, condensed milk, pistachios, almonds, pure gold leaf.',
      calories: '380 kcal',
      dietary: { veg: true, gf: false, df: false, nuts: true }
    }
  ];

  return (
    <section id="specialties" className="relative py-24 lg:py-32 bg-luxury-bg-light overflow-hidden border-t border-gold-900/10">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-900/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold font-sans block mb-3">
            Signature Flavors
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
            Chef’s Signature <span className="text-gold-gradient italic font-normal">Creations</span>
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/60 font-serif leading-relaxed">
            Experience our highly curated selection of signature dishes, where classical cooking heritage meets modern luxury dining aesthetics.
          </p>
        </div>

        {/* Specialties Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1, 
              transition: { staggerChildren: 0.15 } 
            }
          }}
        >
          {dishes.map((dish) => (
            <motion.div
              key={dish.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="h-full"
            >
              <Card className="h-full flex flex-col justify-between group relative border border-gold-900/20 hover:border-gold-500/30 overflow-hidden">
                <div>
                  {/* Image Container with Zoom and Glow */}
                  <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden mb-5">
                    <img 
                      src={dish.image} 
                      alt={dish.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-card/90 via-transparent to-transparent opacity-60" />
                    
                    {/* Floating Price Tag */}
                    <div className="absolute top-4 right-4 bg-luxury-dark/95 border border-gold-500/20 px-3.5 py-1 text-xs font-bold text-gold-400 font-sans tracking-wide">
                      {dish.price}
                    </div>

                    {/* Ribbon Tags */}
                    <div className="absolute bottom-4 left-4 flex gap-1.5">
                      {dish.tags.slice(0, 1).map(t => (
                        <span key={t} className="bg-gold-500/10 backdrop-blur-sm border border-gold-400/20 text-[9px] uppercase tracking-wider text-gold-300 px-2 py-0.5 font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Text Details */}
                  <div className="flex justify-between items-baseline mb-2">
                    <h3 className="font-display text-lg text-white font-medium group-hover:text-gold-300 transition-colors duration-300">
                      {dish.name}
                    </h3>
                  </div>
                  
                  <p className="text-[11px] font-sans uppercase tracking-[0.2em] text-white/40 mb-3 block">
                    {dish.localName}
                  </p>

                  <p className="text-xs text-white/60 font-serif leading-relaxed mb-6">
                    {dish.description.substring(0, 100)}...
                  </p>
                </div>

                {/* Footer Section of Card */}
                <div className="flex items-center justify-between pt-4 border-t border-gold-900/10 mt-auto">
                  <SpiceLevel level={dish.spiceLevel} />
                  <button 
                    onClick={() => setActiveDish(dish)}
                    className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/70 hover:text-gold-400 font-semibold transition-colors duration-300 cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5 text-gold-500" />
                    Nutritional Info
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Specialty Detail Modal */}
      <AnimatePresence>
        {activeDish && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer" 
              onClick={() => setActiveDish(null)}
            />

            {/* Modal Body */}
            <motion.div 
              className="relative bg-luxury-dark border border-gold-500/30 max-w-2xl w-full rounded-sm overflow-hidden shadow-2xl z-10 flex flex-col md:flex-row"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              {/* Close Button */}
              <button 
                onClick={() => setActiveDish(null)}
                className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-luxury-dark/80 border border-gold-900/30 text-white/70 hover:text-gold-400 flex items-center justify-center transition-colors duration-300 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Left Side: Image */}
              <div className="w-full md:w-1/2 relative min-h-[220px] md:min-h-auto">
                <img 
                  src={activeDish.image} 
                  alt={activeDish.name} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-luxury-dark via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold bg-luxury-dark/90 px-3 py-1 border border-gold-900/30">
                    {activeDish.price}
                  </span>
                </div>
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] uppercase tracking-widest text-gold-500 font-bold block mb-1">
                    {activeDish.localName}
                  </span>
                  <h3 className="font-display text-xl lg:text-2xl text-white font-medium mb-3">
                    {activeDish.name}
                  </h3>

                  <div className="flex items-center gap-4 mb-4">
                    <SpiceLevel level={activeDish.spiceLevel} />
                    <span className="text-[10px] text-white/50 font-semibold uppercase tracking-wider bg-gold-950 px-2 py-0.5 border border-gold-900/10">
                      {activeDish.calories}
                    </span>
                  </div>

                  <p className="text-xs text-white/70 font-serif leading-relaxed mb-4">
                    {activeDish.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-[10px] uppercase tracking-wider text-gold-400 font-bold mb-1">Key Ingredients</h4>
                    <p className="text-[11px] text-white/60 font-serif leading-relaxed">
                      {activeDish.ingredients}
                    </p>
                  </div>
                </div>

                {/* Dietary Badges */}
                <div className="flex gap-2.5 pt-4 border-t border-gold-900/10 mt-4">
                  {activeDish.dietary.veg && (
                    <div className="flex items-center gap-1.5 text-[9px] text-emerald-400 font-semibold uppercase tracking-wider">
                      <Leaf className="w-3.5 h-3.5" />
                      Veg
                    </div>
                  )}
                  {activeDish.dietary.gf && (
                    <div className="flex items-center gap-1.5 text-[9px] text-gold-400 font-semibold uppercase tracking-wider">
                      <Wheat className="w-3.5 h-3.5" />
                      Gluten Free
                    </div>
                  )}
                  {!activeDish.dietary.nuts && (
                    <div className="text-[9px] text-white/40 font-semibold uppercase tracking-wider">
                      Nut-Free
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
