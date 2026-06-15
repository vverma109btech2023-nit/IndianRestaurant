import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import useScroll from '../hooks/useScroll';
import Button from './UI/Button';

export default function Navbar() {
  const { isScrolled, activeSection } = useScroll(50);
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'Our Story', href: '#about', id: 'about' },
    { name: 'Specialties', href: '#specialties', id: 'specialties' },
    { name: 'Experience', href: '#why-us', id: 'why-us' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Ambience', href: '#ambience', id: 'ambience' },
    { name: 'Offers', href: '#offers', id: 'offers' }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of navbar
      const targetPosition = targetElement.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-luxury-dark/90 backdrop-blur-md border-b border-gold-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-4' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo / Branding */}
          <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="flex flex-col items-center group">
            <span className="font-display text-xl lg:text-2xl tracking-[0.25em] text-gold-400 group-hover:text-gold-300 transition-colors duration-300 font-bold">
              SAFFRON
            </span>
            <span className="text-[9px] tracking-[0.6em] text-white/60 -mt-1 group-hover:text-gold-200 transition-colors duration-300">
              & GOLD
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`relative text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-gold-400 font-bold'
                    : 'text-white/80 hover:text-gold-300'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.span 
                    layoutId="activeIndicator"
                    className="absolute -bottom-1.5 left-0 w-full h-[1.5px] bg-gradient-to-r from-gold-500 to-saffron-500"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center">
            <a href="#reservation" onClick={(e) => handleLinkClick(e, '#reservation')}>
              <Button variant="secondary" className="px-6 py-2.5 text-[10px] flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-gold-500" />
                Reserve Table
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white/80 hover:text-gold-400 p-1 transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="absolute top-full left-0 w-full bg-luxury-dark/95 border-b border-gold-900/20 backdrop-blur-lg lg:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 py-8 flex flex-col gap-6 items-center">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`text-sm uppercase tracking-widest font-medium transition-colors duration-300 ${
                      activeSection === link.id ? 'text-gold-400' : 'text-white/80 hover:text-gold-400'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
                <a href="#reservation" onClick={(e) => handleLinkClick(e, '#reservation')} className="w-full mt-2">
                  <Button variant="primary" className="w-full py-3 text-[10px] flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-luxury-dark" />
                    Reserve Table
                  </Button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
