import React from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, ShieldAlert } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-luxury-dark overflow-hidden border-t border-gold-900/10">
      {/* Decorative Elements */}
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-gold-900/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-saffron-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Visual Story/Gallery (Left 5 Columns) */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Main Chef Portrait with Gold Frame */}
            <motion.div 
              className="relative z-10 w-4/5 aspect-[3/4] border-2 border-gold-500/20 p-2 overflow-hidden shadow-2xl"
              variants={itemVariants}
            >
              <div className="w-full h-full overflow-hidden relative group">
                <img 
                  src="/images/chef_portrait.png" 
                  alt="Executive Chef Sanjay Kapoor" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent opacity-60" />
              </div>
            </motion.div>

            {/* Back Accent Frame */}
            <motion.div 
              className="absolute -bottom-4 -left-2 w-3/4 aspect-[3/4] border border-gold-700/30 -z-0 translate-x-4 translate-y-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            />

            {/* Decorative Gold Leaf Label */}
            <motion.div 
              className="absolute -right-4 top-12 bg-luxury-card/95 border border-gold-500/30 px-5 py-3 shadow-xl backdrop-blur-sm z-20 text-center"
              variants={itemVariants}
            >
              <p className="font-display text-sm text-gold-400 font-bold tracking-wider">30+ YEARS</p>
              <p className="text-[9px] uppercase tracking-widest text-white/60">Culinary Mastery</p>
            </motion.div>
          </div>

          {/* Text/Content (Right 7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold font-sans block mb-2">
                Our Legacy
              </span>
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">
                Crafting Gastronomic <br />
                <span className="text-gold-gradient italic font-normal">Masterpieces</span>
              </h2>
            </motion.div>

            <motion.p 
              className="text-sm md:text-base text-white/70 font-serif leading-relaxed mb-6"
              variants={itemVariants}
            >
              At Saffron & Gold, we invite you to embark on a sensory voyage across the sub-continent. 
              Our cuisine is rooted in the rich culinary traditions of India's royal courts, 
              where recipes were closely guarded treasures and dinners were ceremonial feasts.
            </motion.p>

            <motion.p 
              className="text-sm md:text-base text-white/70 font-serif leading-relaxed mb-8"
              variants={itemVariants}
            >
              Every blend of garam masala, cardamom, and saffron is hand-roasted and stone-ground 
              in our kitchen daily. We combine these age-old spices with locally sourced premium organic 
              meats and heirloom vegetables, creating dishes that honor the past while embracing contemporary 
              gourmet presentations.
            </motion.p>

            {/* Chef Quote Callout */}
            <motion.div 
              className="border-l-2 border-gold-500/50 pl-6 my-6 italic text-gold-200/90 font-serif text-base md:text-lg leading-relaxed relative"
              variants={itemVariants}
            >
              <span className="absolute -left-3 -top-6 text-7xl text-gold-900/30 pointer-events-none font-display">“</span>
              Cooking is an act of spiritual devotion; every spice tells a story, and the plate is the canvas where my soul expresses its love for India.
              <span className="block mt-2 font-sans text-xs uppercase tracking-widest text-white/50 not-italic font-semibold">
                — Chef Sanjay Kapoor, Culinary Director
              </span>
            </motion.div>

            {/* Core Values / Features */}
            <motion.div 
              className="grid grid-cols-2 gap-6 mt-6 pt-6 border-t border-gold-900/10"
              variants={itemVariants}
            >
              <div className="flex gap-3.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-950 border border-gold-500/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-1">Michelin Caliber</h4>
                  <p className="text-[11px] text-white/60 font-serif">Recipes curated by award-winning global masters.</p>
                </div>
              </div>

              <div className="flex gap-3.5">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gold-950 border border-gold-500/20 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-1">Pure Integrity</h4>
                  <p className="text-[11px] text-white/60 font-serif">Zero artificial colors, stabilizers, or MSG.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
