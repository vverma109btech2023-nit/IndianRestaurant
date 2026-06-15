import { useState, useEffect } from 'react';

export default function useScroll(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      // Check if user scrolled past threshold
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check which section is in view
      const sections = ['hero', 'about', 'specialties', 'why-us', 'gallery', 'testimonials', 'ambience', 'offers', 'reservation'];
      const scrollPosition = window.scrollY + 200; // Offset for navbar

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Trigger initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { isScrolled, activeSection };
}
