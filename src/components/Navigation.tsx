import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationProps {
  onCursorEnter: () => void;
  onCursorLeave: () => void;
}

const Navigation = ({ onCursorEnter, onCursorLeave }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Detect active section
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-neon-cyan/20' 
            : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="font-orbitron text-xl font-bold text-neon-cyan cursor-none"
              onMouseEnter={onCursorEnter}
              onMouseLeave={onCursorLeave}
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection('hero')}
            >
              <span className="relative">
                Devanshu
                <span className="text-neon-pink">...❄️</span>
                <motion.span
                  className="absolute -bottom-1 left-0 h-0.5 bg-neon-cyan"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative font-orbitron text-xs tracking-[3px] transition-colors cursor-none ${
                    activeSection === link.id ? 'text-neon-cyan' : 'text-white/70 hover:text-white'
                  }`}
                  onMouseEnter={onCursorEnter}
                  onMouseLeave={onCursorLeave}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5 + index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-neon-cyan"
                      layoutId="activeNav"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 cursor-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              onMouseEnter={onCursorEnter}
              onMouseLeave={onCursorLeave}
            >
              <motion.span
                className="w-6 h-0.5 bg-neon-cyan"
                animate={{ 
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 4 : 0
                }}
              />
              <motion.span
                className="w-6 h-0.5 bg-neon-cyan"
                animate={{ 
                  opacity: isMobileMenuOpen ? 0 : 1
                }}
              />
              <motion.span
                className="w-6 h-0.5 bg-neon-cyan"
                animate={{ 
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -4 : 0
                }}
              />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`font-orbitron text-2xl tracking-[5px] ${
                    activeSection === link.id ? 'text-neon-cyan' : 'text-white/70'
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
            
            {/* Decorative corners */}
            <div className="absolute top-5 left-5 w-20 h-20 border-l-2 border-t-2 border-neon-cyan/50" />
            <div className="absolute top-5 right-5 w-20 h-20 border-r-2 border-t-2 border-neon-cyan/50" />
            <div className="absolute bottom-5 left-5 w-20 h-20 border-l-2 border-b-2 border-neon-cyan/50" />
            <div className="absolute bottom-5 right-5 w-20 h-20 border-r-2 border-b-2 border-neon-cyan/50" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
