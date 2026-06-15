import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, Mail, Phone, Users, Clock, Compass, CheckCircle2, X } from 'lucide-react';
import Button from './UI/Button';
import Card from './UI/Card';

export default function ReservationCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: '2',
    date: '',
    time: '19:00',
    seating: 'dining'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      guests: '2',
      date: '',
      time: '19:00',
      seating: 'dining'
    });
    setIsSubmitted(false);
  };

  return (
    <section id="reservation" className="relative py-24 lg:py-32 bg-luxury-bg-light overflow-hidden border-t border-gold-900/10">
      {/* Ambient backgrounds */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gold-950/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-saffron-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Copy and details (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs uppercase tracking-[0.3em] text-gold-500 font-semibold font-sans block mb-3">
              Table Bookings
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">
              Reserve Your <span className="text-gold-gradient italic font-normal">Sovereign Seat</span>
            </h2>
            
            <p className="text-sm text-white/70 font-serif leading-relaxed mb-6">
              Whether celebrating a special milestone or embarking on a gourmet tasting journey, we invite you to book your table in advance. Experience royal Indian hospitality in our premium chambers.
            </p>

            <div className="space-y-5 mt-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-950 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-1">Seating Requests</h4>
                  <p className="text-xs text-white/60 font-serif">Specify your chamber preference: Fine Dining Hall, Saffron Lounge, or Private VIP Vault.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold-950 border border-gold-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-gold-400" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-white font-bold mb-1">Confirmation Details</h4>
                  <p className="text-xs text-white/60 font-serif">A booking manager will reach out via email or phone within 1 hour to finalize details.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Reservation Form (7 Columns) */}
          <div className="lg:col-span-7">
            <Card hoverEffect={false} className="p-8 md:p-10 border border-gold-500/20 shadow-2xl relative bg-luxury-card/90">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <label className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/50" />
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Maharaja Singhania"
                        className="w-full bg-luxury-dark/80 border border-gold-900/30 rounded-sm py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors placeholder-white/20"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/50" />
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="royal@saffron.com"
                        className="w-full bg-luxury-dark/80 border border-gold-900/30 rounded-sm py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors placeholder-white/20"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div className="relative">
                    <label className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-2">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/50" />
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1 (555) 019-2834"
                        className="w-full bg-luxury-dark/80 border border-gold-900/30 rounded-sm py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors placeholder-white/20"
                      />
                    </div>
                  </div>

                  {/* Guests */}
                  <div className="relative">
                    <label className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-2">Number of Guests</label>
                    <div className="relative">
                      <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/50" />
                      <select 
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full bg-luxury-dark/80 border border-gold-900/30 rounded-sm py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="8">8+ Guests</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date */}
                  <div className="relative">
                    <label className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-2">Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/50" />
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="w-full bg-luxury-dark/80 border border-gold-900/30 rounded-sm py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors [color-scheme:dark] cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Time */}
                  <div className="relative">
                    <label className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-2">Dining Time</label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-500/50" />
                      <select 
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-luxury-dark/80 border border-gold-900/30 rounded-sm py-3 pl-11 pr-4 text-sm text-white focus:outline-none focus:border-gold-400 transition-colors appearance-none cursor-pointer"
                      >
                        <option value="12:00">12:00 PM (Lunch)</option>
                        <option value="13:30">1:30 PM (Lunch)</option>
                        <option value="18:00">6:00 PM (Dinner)</option>
                        <option value="19:00">7:00 PM (Dinner)</option>
                        <option value="20:30">8:30 PM (Dinner)</option>
                        <option value="22:00">10:00 PM (Dinner)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Seating preference */}
                <div>
                  <label className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold block mb-3">Chamber Preference</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'dining', label: 'Dining Hall' },
                      { id: 'lounge', label: 'Lounge' },
                      { id: 'vault', label: 'VIP Vault' }
                    ].map((pref) => (
                      <button
                        key={pref.id}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, seating: pref.id }))}
                        className={`py-2 px-1 text-[10px] uppercase tracking-widest font-semibold border transition-all rounded-sm cursor-pointer ${
                          formData.seating === pref.id 
                            ? 'bg-gold-500/10 border-gold-400 text-gold-400 shadow-md shadow-gold-500/5' 
                            : 'border-gold-900/25 bg-luxury-dark/40 text-white/50 hover:text-white/80 hover:border-gold-500/20'
                        }`}
                      >
                        {pref.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Submit button */}
                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="primary" 
                    className="w-full py-4 text-xs font-bold"
                    disabled={loading}
                  >
                    {loading ? 'Requesting Seat...' : 'Request Reservation'}
                  </Button>
                </div>
              </form>
            </Card>
          </div>

        </div>
      </div>

      {/* Success Modal Overlay */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={resetForm} />

            {/* Modal Box */}
            <motion.div 
              className="relative bg-luxury-dark border border-gold-500/30 p-8 max-w-md w-full rounded-sm text-center shadow-2xl z-10"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
            >
              <button 
                onClick={resetForm}
                className="absolute top-4 right-4 text-white/60 hover:text-gold-400 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 bg-gold-950/80 border border-gold-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8 text-gold-400" />
              </div>

              <span className="text-[10px] uppercase tracking-widest text-gold-500 font-bold block mb-1">
                Booking Sent
              </span>
              
              <h3 className="font-display text-2xl text-white font-semibold mb-4">
                Reservation Requested
              </h3>

              <p className="text-xs text-white/70 font-serif leading-relaxed mb-6">
                Greetings, <span className="text-gold-300 font-sans font-bold">{formData.name}</span>. 
                We have registered your request for <span className="font-sans font-semibold text-white">{formData.guests} guests</span> on <span className="font-sans font-semibold text-white">{formData.date}</span> at <span className="font-sans font-semibold text-white">{formData.time}</span>. 
                A sovereign concierge officer will contact you within 1 hour to confirm availability in the <span className="font-sans font-semibold text-white capitalize">{formData.seating} area</span>.
              </p>

              <Button variant="secondary" onClick={resetForm} className="w-full text-[10px] py-2.5">
                Close Confirmation
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
