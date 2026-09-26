import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

function InstagramIcon({ size = 16, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="4" ry="4" />
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
      alt: 'Seduhan manual V60 Kopi Kerinci',
      caption: 'Seduh Manual'
    },
    {
      url: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop',
      alt: 'Roti Sourdough segar dari oven',
      caption: 'Oven Pagi'
    },
    {
      url: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
      alt: 'Panggangan kayu rambutan',
      caption: 'Bara Kayu'
    },
    {
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=600&auto=format&fit=crop',
      alt: 'Atmosfer ruang The Glasshouse Senopati',
      caption: 'Ruang Singgah'
    }
  ];

  return (
    <footer className="bg-dark text-sand pt-16 pb-12 px-6 md:px-12 border-t border-line">
      <div className="w-full max-w-7xl mx-auto">
        {/* Visual Journal Grid */}
        <div className="mb-16 pb-12 border-b border-line">
          <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-line">
            <div>
              <span className="text-xs text-terracotta uppercase tracking-wider block mb-1 font-medium">
                Jurnal Visual
              </span>
              <h4 className="font-serif text-xl sm:text-2xl text-cream font-normal">
                Dokumentasi Harian di Balik Layar
              </h4>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-cream transition-colors"
            >
              <InstagramIcon size={14} />
              <span>{BRAND_INFO.contact.instagram}</span>
              <ArrowUpRight size={12} />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative border border-line bg-surface p-1.5"
              >
                <div className="overflow-hidden aspect-square">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2 pb-1 px-1 text-center text-xs text-muted font-sans">
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Footer Directory */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-line">
          {/* Brand Colophon */}
          <div className="md:col-span-5">
            <span className="font-serif text-2xl md:text-3xl text-cream tracking-tight block mb-3 font-normal">
              {BRAND_INFO.fullName}
            </span>
            <p className="text-xs text-muted font-light leading-relaxed max-w-sm mb-6">
              Mewujudkan kemewahan kuliner yang jujur melalui biji kopi murni petani nusantara, peragian roti alami, dan panggangan bara perapian kayu.
            </p>

            <div className="space-y-2 text-xs text-muted font-sans">
              <div>
                <span className="text-faint">Surel: </span>
                <a href={`mailto:${BRAND_INFO.contact.email}`} className="text-sand hover:text-terracotta transition-colors">
                  {BRAND_INFO.contact.email}
                </a>
              </div>
              <div>
                <span className="text-faint">Konsolidasi: </span>
                <a href={`tel:${BRAND_INFO.contact.phone}`} className="text-sand hover:text-terracotta transition-colors">
                  {BRAND_INFO.contact.phone}
                </a>
              </div>
              <div>
                <span className="text-faint">Head Roastery: </span>
                <span className="text-sand">Senopati No. 42, Jakarta Selatan</span>
              </div>
            </div>
          </div>

          {/* Directory Links (Clean sans list, no over-numbering) */}
          <div className="md:col-span-3">
            <h5 className="text-xs uppercase tracking-wider text-cream mb-4 pb-2 border-b border-line font-medium">
              Direktori
            </h5>
            <ul className="space-y-2.5 text-xs text-muted">
              <li>
                <a href="#story" className="hover:text-cream transition-colors">Filosofi & Asal Usul</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-cream transition-colors">Kurasi Menu Musiman</a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-cream transition-colors">Ruang Singgah (3 Kota)</a>
              </li>
              <li>
                <a href="#b2b" className="hover:text-cream transition-colors">Kemitraan & Wholesale</a>
              </li>
              <li>
                <button onClick={onOpenReserve} className="hover:text-terracotta transition-colors text-left">
                  Reservasi Meja & Event
                </button>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4">
            <h5 className="text-xs uppercase tracking-wider text-cream mb-2 pb-2 border-b border-line font-medium">
              Warta Petik & Roastery
            </h5>
            <p className="text-xs text-muted font-light leading-relaxed mb-4">
              Menerima kabar batch sangrai micro-lot terbatas dan jamuan Chef's Table privat setiap bulan.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat email Anda..."
                className="w-full bg-surface border border-line p-3 text-xs text-cream placeholder-faint focus:outline-none focus:border-terracotta"
              />
              <button
                type="submit"
                className="w-full border border-line-light text-sand hover:text-dark hover:bg-cream p-3 text-xs font-medium uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                {subscribed ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span>Terdaftar di Warta</span>
                  </>
                ) : (
                  <span>Langganan Warta</span>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Colophon & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-baseline justify-between text-xs text-faint gap-4">
          <div>
            © {new Date().getFullYear()} {BRAND_INFO.fullName}. Seluruh hak cipta dilindungi.
          </div>
          <div className="flex items-center gap-4">
            <span>Senopati · Dago Pakar · Canggu</span>
            <span>·</span>
            <span>Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
