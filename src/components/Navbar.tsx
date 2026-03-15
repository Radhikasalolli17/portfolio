import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../utils';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navItems.map(item => item.name.toLowerCase());
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-6',
        isScrolled ? 'py-4 bg-[#0d0b21]/80 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-black tracking-tighter text-gradient"
        >
          RADHIKA.
        </motion.a>

        {/* Desktop Nav - Now visible from 'sm' breakpoint */}
        <div className="hidden sm:flex items-center bg-white/5 px-6 py-2 rounded-full border border-white/10 backdrop-blur-md">
          <div className="flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'text-[10px] lg:text-xs uppercase tracking-widest font-bold transition-all duration-300 hover:text-brand-purple whitespace-nowrap',
                  activeSection === item.name.toLowerCase() ? 'text-brand-purple' : 'text-white/50'
                )}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="hidden sm:block">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 bg-white text-black text-[10px] font-bold rounded-full hover:bg-brand-purple hover:text-white transition-all"
          >
            HIRE ME
          </motion.a>
        </div>

        {/* Mobile Menu Toggle - Only shows on very small screens */}
        <button
          className="sm:hidden text-white p-2 glass rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu - Now horizontal wrap */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="sm:hidden glass mt-4 rounded-2xl overflow-hidden"
          >
            <div className="flex flex-row flex-wrap justify-center p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'text-sm font-bold uppercase tracking-wider px-3 py-1 rounded-lg transition-colors',
                    activeSection === item.name.toLowerCase() ? 'bg-brand-purple/20 text-brand-purple' : 'text-white/70 hover:bg-white/5'
                  )}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
