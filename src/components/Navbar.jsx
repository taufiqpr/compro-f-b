import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Clock, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

export default function Navbar({ onOpenReserve }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Filosofi', href: '#story' },
    { label: 'Karya Rasa', href: '#menu' },
    { label: 'Ruang Sanctuary', href: '#spaces' },
    { label: 'Kemitraan & B2B', href: '#b2b' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 flex justify-center ${
          isScrolled ? 'py-3 px-4' : 'py-6 px-6 md:px-12'
        }`}
      >
        <div
          className={`w-full max-w-7xl flex items-center justify-between transition-all duration-500 ${
            isScrolled
              ? 'bg-[#181614]/90 backdrop-blur-md border border-[#2E2A27] rounded-full py-2.5 px-6 shadow-2xl shadow-black/40'
              : 'bg-transparent border-b border-[#2E2A27]/60 pb-4'
          }`}
        >
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-serif text-2xl md:text-3xl tracking-wider text-[#FAF7F2] font-normal group-hover:text-[#C05A3E] transition-colors">
              {BRAND_INFO.name}
            </span>
            <span className="hidden sm:inline-block w-px h-4 bg-[#3E3832]" />
            <span className="hidden sm:inline-block text-[11px] uppercase tracking-widest text-[#9C948A] font-medium">
              Culinary & Roastery
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] tracking-wide uppercase text-[#B8B0A5] hover:text-[#FAF7F2] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C05A3E] hover:after:w-full after:transition-all after:duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 text-[12px] text-[#A69E92] bg-[#1E1C1A] border border-[#2F2B27] py-1.5 px-3 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{BRAND_INFO.status}</span>
            </div>

            <button
              onClick={onOpenReserve}
              className="relative inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-[#C05A3E] hover:bg-[#A84B32] text-white py-2.5 px-5 rounded-full transition-all duration-300 transform active:scale-95 shadow-md shadow-[#C05A3E]/20"
            >
              <span>Reservasi Meja</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#EAE4DC] hover:text-[#C05A3E] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-20 z-30 lg:hidden bg-[#181614] border border-[#2E2A27] rounded-2xl p-6 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-serif tracking-wide text-[#E8E2D8] hover:text-[#C05A3E] py-2 border-b border-[#25221F] transition-colors flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={16} className="text-[#756E65]" />
                </a>
              ))}
              <div className="pt-2 text-xs text-[#9E958A] flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <Clock size={13} className="text-[#C05A3E]" />
                  <span>{BRAND_INFO.status}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#C05A3E]" />
                  <span>Senopati · Dago Pakar · Canggu</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
