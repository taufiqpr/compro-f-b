import { useState } from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, Check } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer({ onOpenReserve }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=600&auto=format&fit=crop',
      alt: 'Pour Over V60 Coffee'
    },
    {
      url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
      alt: 'Fresh Baked Sourdough'
    },
    {
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
      alt: 'Wood-fired kitchen steak'
    },
    {
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop',
      alt: 'Cafe interior with greenery'
    }
  ];

  return (
    <footer className="bg-[#0E0D0C] text-[#EAE4DC] border-t border-[#26221E] pt-20 pb-12 px-6 md:px-12">
      <div className="w-full max-w-7xl mx-auto">
        {/* Curated Visual Grid (Instagram / Journal Feed) */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-xs font-mono text-[#C05A3E] tracking-widest uppercase block mb-1">
                Visual Journal
              </span>
              <h4 className="font-serif text-2xl text-[#FAF7F2]">
                Detik & Cerita di Balik Layar
              </h4>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A89E90] hover:text-[#FAF7F2] transition-colors"
            >
              <InstagramIcon size={14} />
              <span>{BRAND_INFO.contact.instagram}</span>
              <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-2xl overflow-hidden aspect-square border border-[#26221E] bg-[#161412]"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="p-2.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                    <InstagramIcon size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#211E1B]">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <span className="font-serif text-3xl md:text-4xl text-[#FAF7F2] tracking-wider block mb-4">
              {BRAND_INFO.fullName}
            </span>
            <p className="text-xs text-[#9E958A] font-light leading-relaxed max-w-sm mb-6">
              Mewujudkan kemewahan kuliner yang jujur melalui biji kopi murni, ragi alami, dan aroma perapian kayu bakar nusantara.
            </p>

            <div className="flex flex-col gap-2.5 text-xs text-[#CDC3B6]">
              <div className="flex items-center gap-2.5">
                <Mail size={14} className="text-[#C05A3E]" />
                <a href={`mailto:${BRAND_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={14} className="text-[#C05A3E]" />
                <a href={`tel:${BRAND_INFO.contact.phone}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin size={14} className="text-[#C05A3E]" />
                <span>Head Roastery: Senopati, Kebayoran Baru, Jakarta</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h5 className="text-xs font-mono uppercase tracking-widest text-[#FAF7F2] mb-4">
              Navigasi Halaman
            </h5>
            <ul className="space-y-2.5 text-xs text-[#9E958A]">
              <li>
                <a href="#story" className="hover:text-[#FAF7F2] transition-colors">Filosofi & Terroir Petani</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#FAF7F2] transition-colors">Kurasi Menu Andalan</a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-[#FAF7F2] transition-colors">Ruang Sanctuary (3 Kota)</a>
              </li>
              <li>
                <a href="#b2b" className="hover:text-[#FAF7F2] transition-colors">Kemitraan Roasting & B2B</a>
              </li>
              <li>
                <button onClick={onOpenReserve} className="hover:text-[#C05A3E] transition-colors text-left">
                  Reservasi Meja & Private Event
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4">
            <h5 className="text-xs font-mono uppercase tracking-widest text-[#FAF7F2] mb-2">
              Warta Musim Panen
            </h5>
            <p className="text-xs text-[#9E958A] font-light leading-relaxed mb-4">
              Dapatkan akses awal untuk rilis batch kopi micro-lot langka dan undangan jamuan Chef’s Table bulanan.
            </p>

            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat email Anda..."
                className="flex-1 bg-[#1A1816] border border-[#2B2723] rounded-xl px-4 py-3 text-xs text-[#FAF7F2] placeholder-[#5E564C] focus:outline-none focus:border-[#C05A3E]"
              />
              <button
                type="submit"
                className="bg-[#C05A3E] hover:bg-[#A84B32] text-white px-5 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 flex items-center justify-center"
              >
                {subscribed ? <Check size={16} /> : 'Daftar'}
              </button>
            </form>
            {subscribed && (
              <span className="text-[11px] text-emerald-400 mt-2 block font-light">
                Terima kasih! Anda telah terdaftar dalam daftar rilis eksklusif kami.
              </span>
            )}
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#70685D] gap-4">
          <div>
            © {new Date().getFullYear()} {BRAND_INFO.fullName}. Hak Cipta Dilindungi Undang-Undang.
          </div>
          <div className="flex items-center gap-6">
            <span>Dirancang dengan Pendekatan Human Craft & Savor</span>
            <span className="w-1 h-1 rounded-full bg-[#36302A]" />
            <span>Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
