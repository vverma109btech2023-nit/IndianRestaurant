import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-luxury-dark border-t border-gold-900/20 pt-20 pb-10 text-white/70 relative overflow-hidden">
      {/* Subtle bottom glows */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand (4 Columns) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="flex flex-col items-start mb-6 group">
              <span className="font-display text-2xl tracking-[0.25em] text-gold-400 group-hover:text-gold-300 transition-colors duration-300 font-bold">
                SAFFRON
              </span>
              <span className="text-[10px] tracking-[0.6em] text-white/60 -mt-1 group-hover:text-gold-200 transition-colors duration-300">
                & GOLD
              </span>
            </a>
            <p className="text-xs text-white/60 font-serif leading-relaxed mb-6 max-w-sm">
              An award-winning sanctuary of Indian fine dining, elevating classical Vedic culinary arts into modern gastronomic masterpieces. Crafting memories, one plate at a time.
            </p>
            <div className="flex gap-4">
              {[
                { icon: InstagramIcon, href: '#instagram', label: 'Instagram' },
                { icon: FacebookIcon, href: '#facebook', label: 'Facebook' },
                { icon: TwitterIcon, href: '#twitter', label: 'Twitter' }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={idx}
                    href={social.href}
                    className="w-9 h-9 rounded-full bg-luxury-card border border-gold-900/30 flex items-center justify-center text-white/60 hover:text-gold-400 hover:border-gold-500/40 transition-all duration-300 shadow-md cursor-pointer"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Hours (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm text-white font-bold tracking-widest uppercase mb-6 pb-2 border-b border-gold-900/10">
              Opening Hours
            </h4>
            <ul className="space-y-4 text-xs font-serif leading-relaxed">
              <li className="flex justify-between pb-2 border-b border-gold-900/5">
                <span className="text-white/60">Tuesday - Thursday</span>
                <span className="text-gold-400 font-sans font-semibold">5:30 PM - 10:30 PM</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gold-900/5">
                <span className="text-white/60">Friday - Saturday</span>
                <span className="text-gold-400 font-sans font-semibold">5:00 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gold-900/5">
                <span className="text-white/60">Sunday Brunch</span>
                <span className="text-gold-400 font-sans font-semibold">11:30 AM - 3:30 PM</span>
              </li>
              <li className="flex justify-between pb-2 border-b border-gold-900/5">
                <span className="text-white/60">Sunday Dinner</span>
                <span className="text-gold-400 font-sans font-semibold">5:30 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-saffron-500 font-bold uppercase tracking-wider">
                <span>Monday</span>
                <span>Chamber Closed</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Address (3 Columns) */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-sm text-white font-bold tracking-widest uppercase mb-6 pb-2 border-b border-gold-900/10">
              Contact Us
            </h4>
            <ul className="space-y-4 text-xs font-serif leading-relaxed">
              <li className="flex gap-3 items-start">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <span className="text-white/60 leading-relaxed">
                  108 Saffron Boulevard, Sovereign Court, <br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="tel:+15550192834" className="text-white/60 hover:text-gold-400 font-sans font-semibold transition-colors duration-300">
                  +1 (555) 019-2834
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="mailto:dining@saffronandgold.com" className="text-white/60 hover:text-gold-400 font-sans font-semibold transition-colors duration-300">
                  dining@saffronandgold.com
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Maps Placeholder (2 Columns) */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm text-white font-bold tracking-widest uppercase mb-6 pb-2 border-b border-gold-900/10">
              Our Location
            </h4>
            {/* Interactive maps placeholder */}
            <div className="w-full aspect-[4/3] bg-luxury-card border border-gold-900/30 rounded-sm overflow-hidden relative group cursor-pointer shadow-md">
              {/* Stylized custom grid overlay to look like map */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(212,175,55,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />
              {/* Saffron locator dot */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <span className="w-3.5 h-3.5 bg-saffron-600 rounded-full border border-white animate-ping absolute" />
                <span className="w-3 h-3 bg-gold-400 rounded-full border border-luxury-dark relative z-10 shadow-md" />
              </div>
              {/* Map background tint */}
              <div className="absolute inset-0 bg-gold-950/15 group-hover:bg-gold-950/25 transition-colors duration-300" />
              {/* Open Map label on hover */}
              <div className="absolute bottom-2 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[8px] uppercase tracking-widest font-bold text-gold-400 font-sans">
                  Open Google Maps
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold-900/10 pt-8 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-[11px] text-white/40">
          <p className="mb-4 sm:mb-0 font-serif leading-relaxed">
            &copy; {currentYear} Saffron & Gold. All Royal Rights Reserved.
          </p>
          <div className="flex gap-6 font-sans uppercase tracking-widest">
            <a href="#privacy" className="hover:text-gold-400 transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-gold-400 transition-colors duration-300">Terms of Dining</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
