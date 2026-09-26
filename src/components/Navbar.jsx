import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function Navbar({ onOpenReserve }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', label: 'Filosofi', href: '#story' },
    { num: '02', label: 'Karya Rasa', href: '#menu' },
    { num: '03', label: 'Ruang', href: '#spaces' },
    { num: '04', label: 'Kemitraan', href: '#b2b' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
          isScrolled
            ? 'bg-dark/95 backdrop-blur-md border-b border-line'
            : 'bg-transparent border-b border-line/60'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-baseline gap-3 group">
            <span className="font-serif text-2xl md:text-3xl text-cream font-normal group-hover:text-terracotta transition-colors">
              {BRAND_INFO.name}
            </span>
            <span className="hidden sm:inline text-xs text-muted font-sans tracking-wide">
              Atelier & Roastery
            </span>
          </a>

          {/* Desktop Navigation Links (Retained intentional mono numbering) */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs tracking-wider uppercase text-muted hover:text-cream transition-colors flex items-center gap-2 py-1 relative group"
              >
                <span className="font-mono text-xs text-faint group-hover:text-terracotta transition-colors">
                  {item.num}
                </span>
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-terracotta group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action & Status */}
          <div className="flex items-center gap-6">
            <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-muted">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              <span>JKT · BDG · DPS</span>
            </div>

            <button
              onClick={onOpenReserve}
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider border border-line-light text-sand hover:text-dark hover:bg-cream hover:border-cream py-2.5 px-5 transition-all duration-300"
            >
              <span>Reservasi Meja</span>
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-sand hover:text-cream transition-colors"
              aria-label="Menu navigasi"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-20 z-30 lg:hidden bg-dark border-b border-line px-6 py-8 shadow-2xl"
          >
            <div className="flex flex-col gap-6 max-w-lg mx-auto">
              <div className="text-xs text-muted uppercase tracking-wider pb-2 border-b border-line">
                Navigasi
              </div>
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-cream hover:text-terracotta transition-colors flex items-baseline justify-between"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-faint">{item.num}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-line text-xs text-muted flex justify-between items-center">
                <span>{BRAND_INFO.status}</span>
                <span className="text-terracotta">Senopati · Dago · Canggu</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
