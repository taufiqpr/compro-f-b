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
            ? 'bg-[#0F0E0D]/95 backdrop-blur-md border-b border-[#262320]'
            : 'bg-transparent border-b border-[#262320]/60'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          {/* Brand Identity */}
          <a href="#" className="flex items-baseline gap-3 group">
            <span className="font-serif text-2xl md:text-3xl tracking-tight text-[#F5F2EB] font-normal group-hover:text-[#C05A3E] transition-colors">
              {BRAND_INFO.name}
            </span>
            <span className="hidden sm:inline text-[10px] uppercase font-mono tracking-[0.2em] text-[#7C756B]">
              Atelier & Roastery
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[12px] tracking-[0.12em] uppercase text-[#9C9488] hover:text-[#F5F2EB] transition-colors flex items-center gap-1.5 py-1 relative group"
              >
                <span className="font-mono text-[10px] text-[#5C554C] group-hover:text-[#C05A3E] transition-colors">
                  {item.num}
                </span>
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C05A3E] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* Right Action & Status */}
          <div className="flex items-center gap-6">
            <div className="hidden xl:flex items-center gap-2 text-[11px] font-mono tracking-wider text-[#7C756B]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#445542]" />
              <span>JKT · BDG · DPS</span>
            </div>

            <button
              onClick={onOpenReserve}
              className="inline-flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.12em] sm:tracking-[0.14em] uppercase border border-[#3A352F] text-[#DDD6CA] hover:text-[#0F0E0D] hover:bg-[#F5F2EB] hover:border-[#F5F2EB] py-2 sm:py-2.5 px-3.5 sm:px-5 transition-all duration-300"
            >
              <span>Reservasi Meja</span>
              <ArrowUpRight size={13} />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#DDD6CA] hover:text-[#F5F2EB] transition-colors"
              aria-label="Toggle menu"
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
            className="fixed inset-x-0 top-20 z-30 lg:hidden bg-[#0F0E0D] border-b border-[#262320] px-6 py-8 shadow-2xl"
          >
            <div className="flex flex-col gap-6 max-w-lg mx-auto">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7C756B] pb-2 border-b border-[#262320]">
                Indeks Halaman
              </div>
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-2xl text-[#E8E2D8] hover:text-[#C05A3E] transition-colors flex items-baseline justify-between"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[#5C554C]">{item.num}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-[#262320] text-xs text-[#8C8478] flex justify-between items-center">
                <span>{BRAND_INFO.status}</span>
                <span className="font-mono text-[11px] text-[#C05A3E]">Senopati · Dago · Canggu</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
