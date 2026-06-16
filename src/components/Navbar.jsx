import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import Button from './UI/Button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Our Story', to: '/about' },
    { name: 'Menu', to: '/menu' },
    { name: 'Ambience', to: '/ambience' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Offers', to: '/offers' }
  ];

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-luxury-dark/95 backdrop-blur-md border-b border-gold-500/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-4' 
            : 'bg-transparent py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          {/* Logo / Branding */}
          <Link to="/" onClick={() => setIsOpen(false)} className="flex flex-col items-center group">
            <span className="font-display text-xl lg:text-2xl tracking-[0.25em] text-gold-400 group-hover:text-gold-300 transition-colors duration-300 font-bold">
              SAFFRON
            </span>
            <span className="text-[9px] tracking-[0.6em] text-white/60 -mt-1 group-hover:text-gold-200 transition-colors duration-300">
              & GOLD
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) => 
                  `relative text-xs uppercase tracking-widest font-semibold transition-all duration-300 py-1.5 ${
                    isActive
                      ? 'text-gold-400 font-bold'
                      : 'text-white/85 hover:text-gold-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.span 
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gradient-to-r from-gold-500 to-saffron-500"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center">
            <Link to="/reserve">
              <Button variant="secondary" className="px-6 py-2.5 text-[10px] flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-gold-500" />
                Reserve Table
              </Button>
            </Link>
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
                  <NavLink
                    key={link.name}
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => 
                      `text-sm uppercase tracking-widest font-medium transition-colors duration-300 ${
                        isActive ? 'text-gold-400 font-bold' : 'text-white/85 hover:text-gold-400'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
                <Link to="/reserve" onClick={() => setIsOpen(false)} className="w-full mt-2">
                  <Button variant="primary" className="w-full py-3 text-[10px] flex items-center justify-center gap-2">
                    <Calendar className="w-4 h-4 text-luxury-dark" />
                    Reserve Table
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
