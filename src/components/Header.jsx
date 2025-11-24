import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/90 backdrop-blur-md py-2 shadow-lg border-b border-gold/20' : 'bg-transparent py-4'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.1)' : 'none',
        padding: isScrolled ? '10px 0' : '20px 0'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a href="#" className="logo-container" style={{ textDecoration: 'none' }}>
            <span style={{ fontSize: '28px', fontWeight: 'bold', fontFamily: 'var(--font-heading)', color: 'var(--color-gold)' }}>MUSE</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'none' }}>
            <ul style={{ display: 'flex', gap: '30px' }}>
                {navLinks.map((link) => (
                <li key={link.name}>
                    <a 
                        href={link.href} 
                        style={{ 
                            color: 'var(--color-white)', 
                            fontSize: '14px', 
                            textTransform: 'uppercase', 
                            letterSpacing: '1px',
                            position: 'relative'
                        }}
                        className="nav-link"
                    >
                        {link.name}
                    </a>
                </li>
                ))}
            </ul>
        </nav>
        
        {/* Mobile Menu Toggle */}
        <button 
            className="mobile-toggle" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ background: 'none', border: 'none', color: 'var(--color-gold)', cursor: 'pointer', display: 'block' }}
        >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            style={{
                position: 'fixed',
                top: 0,
                right: 0,
                height: '100vh',
                width: '100%',
                backgroundColor: 'var(--color-black)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 49
            }}
          >
             <ul style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'center' }}>
                {navLinks.map((link) => (
                <li key={link.name}>
                    <a 
                        href={link.href} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        style={{ 
                            color: 'var(--color-gold)', 
                            fontSize: '24px', 
                            fontFamily: 'var(--font-heading)',
                            textTransform: 'uppercase', 
                        }}
                    >
                        {link.name}
                    </a>
                </li>
                ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
            .desktop-nav { display: block !important; }
            .mobile-toggle { display: none !important; }
        }
        .nav-link:hover {
            color: var(--color-gold) !important;
        }
      `}</style>
    </motion.header>
  );
};

export default Header;
