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
      caption: 'Sanctuary Space'
    }
  ];

  return (
    <footer className="bg-[#0C0B0A] text-[#DDD6CA] pt-20 pb-12 px-6 md:px-12">
      <div className="w-full max-w-7xl mx-auto">
        {/* Curated Visual Journal (Clean Architectural Framing) */}
        <div className="mb-20 pb-16 border-b border-[#262320]">
          <div className="flex items-baseline justify-between mb-8 pb-4 border-b border-[#262320]">
            <div>
              <span className="text-[10px] font-mono text-[#C05A3E] tracking-[0.2em] uppercase block mb-1">
                Jurnal Visual
              </span>
              <h4 className="font-serif text-2xl text-[#F5F2EB] font-normal">
                Dokumentasi Harian di Balik Layar
              </h4>
            </div>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#7C756B] hover:text-[#F5F2EB] transition-colors"
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
                className="group relative border border-[#262320] bg-[#151412] p-1.5"
              >
                <div className="overflow-hidden aspect-square">
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2 pb-1 px-1 flex justify-between text-[10px] font-mono text-[#7C756B]">
                  <span>ARCHIVE 0{idx + 1}</span>
                  <span>{img.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Editorial Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-[#262320]">
          {/* Brand Manifesto */}
          <div className="md:col-span-5">
            <span className="font-serif text-3xl md:text-4xl text-[#F5F2EB] tracking-tight block mb-4 font-normal">
              {BRAND_INFO.fullName}
            </span>
            <p className="text-xs text-[#8C8478] font-light leading-relaxed max-w-sm mb-8">
              Mewujudkan kemewahan kuliner yang jujur melalui biji kopi murni petani nusantara, peragian roti alami, dan panggangan bara perapian kayu.
            </p>

            <div className="space-y-2 text-xs font-mono text-[#7C756B]">
              <div>
                <span className="text-[#5C554C]">Surel: </span>
                <a href={`mailto:${BRAND_INFO.contact.email}`} className="text-[#DDD6CA] hover:text-[#C05A3E] transition-colors">
                  {BRAND_INFO.contact.email}
                </a>
              </div>
              <div>
                <span className="text-[#5C554C]">Konsolidasi: </span>
                <a href={`tel:${BRAND_INFO.contact.phone}`} className="text-[#DDD6CA] hover:text-[#C05A3E] transition-colors">
                  {BRAND_INFO.contact.phone}
                </a>
              </div>
              <div>
                <span className="text-[#5C554C]">Head Roastery: </span>
                <span className="text-[#DDD6CA]">Senopati No. 42, Jakarta Selatan</span>
              </div>
            </div>
          </div>

          {/* Table of Contents / Directory */}
          <div className="md:col-span-3">
            <h5 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F5F2EB] mb-6 pb-2 border-b border-[#262320]">
              Direktori
            </h5>
            <ul className="space-y-3 text-xs font-mono text-[#8C8478]">
              <li>
                <a href="#story" className="hover:text-[#F5F2EB] transition-colors">01 / Filosofi & Asal Usul</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F5F2EB] transition-colors">02 / Kurasi Menu Musiman</a>
              </li>
              <li>
                <a href="#spaces" className="hover:text-[#F5F2EB] transition-colors">03 / Ruang Sanctuary (3 Kota)</a>
              </li>
              <li>
                <a href="#b2b" className="hover:text-[#F5F2EB] transition-colors">04 / Kemitraan & Wholesale</a>
              </li>
              <li>
                <button onClick={onOpenReserve} className="hover:text-[#C05A3E] transition-colors text-left">
                  05 / Reservasi Meja & Event
                </button>
              </li>
            </ul>
          </div>

          {/* Dispatch Subscription */}
          <div className="md:col-span-4">
            <h5 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#F5F2EB] mb-2 pb-2 border-b border-[#262320]">
              Warta Petik & Roastery
            </h5>
            <p className="text-xs text-[#8C8478] font-light leading-relaxed mb-6">
              Menerima kabar batch sangrai micro-lot terbatas dan jamuan Chef's Table privat setiap bulan.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Alamat email Anda..."
                className="w-full bg-[#151412] border border-[#262320] p-3 text-xs text-[#F5F2EB] placeholder-[#5C554C] focus:outline-none focus:border-[#C05A3E]"
              />
              <button
                type="submit"
                className="w-full border border-[#3A352F] text-[#DDD6CA] hover:text-[#0F0E0D] hover:bg-[#F5F2EB] p-3 text-xs font-medium tracking-[0.14em] uppercase transition-all duration-300 flex items-center justify-center gap-2"
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
        <div className="pt-8 flex flex-col sm:flex-row items-baseline justify-between text-[11px] font-mono text-[#5C554C] gap-4">
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
