import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPACES } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function Spaces({ onOpenReserve }) {
  const [selectedSpaceId, setSelectedSpaceId] = useState(SPACES[0].id);

  const currentSpace = SPACES.find((s) => s.id === selectedSpaceId) || SPACES[0];

  return (
    <section id="spaces" className="py-20 md:py-28 px-6 md:px-12 border-b border-line bg-dark">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-line mb-10 gap-4">
          <div className="text-xs text-muted uppercase tracking-wider">
            Ruang Singgah & Atmosfer
          </div>
          <div className="text-xs text-muted font-light">
            Senopati · Dago Pakar · Canggu
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream font-normal leading-tight">
            Dirancang untuk Keheningan, <br />
            <span className="italic font-serif text-terracotta">& Percakapan Hangat.</span>
          </h2>
        </div>

        {/* Location Selectors: Clean Architectural Strip (No redundant "LOKASI 01" labels) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-line mb-14">
          {SPACES.map((space, idx) => {
            const isSelected = space.id === selectedSpaceId;
            return (
              <button
                key={space.id}
                onClick={() => setSelectedSpaceId(space.id)}
                className={`text-left p-6 sm:p-8 transition-colors flex flex-col justify-between ${
                  idx < SPACES.length - 1 ? 'md:border-r border-line' : ''
                } ${isSelected ? 'bg-surface' : 'hover:bg-surface/50'}`}
              >
                <div className="flex items-center justify-between text-xs text-muted mb-4 font-sans">
                  <span>{space.city}</span>
                  <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-terracotta' : 'bg-faint'}`} />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-cream mb-1 font-normal">
                    {space.name}
                  </h3>
                  <div className="text-xs text-terracotta font-medium">
                    Lihat Profil Ruang
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Space Monograph Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSpace.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
          >
            {/* Architectural Space Photograph */}
            <div className="lg:col-span-8 border border-line bg-surface p-2 flex flex-col justify-between">
              <div className="aspect-[16/10] lg:aspect-auto lg:h-[440px] overflow-hidden">
                <img
                  src={currentSpace.image}
                  alt={currentSpace.name}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="pt-2.5 pb-1 px-2 flex justify-between text-xs text-muted font-sans">
                <span>Arsitektur ruang: {currentSpace.name}</span>
                <span className="text-terracotta">{currentSpace.city}</span>
              </div>
            </div>

            {/* Specifications & Reservation Details */}
            <div className="lg:col-span-4 border border-line bg-surface p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <span className="text-xs text-terracotta uppercase tracking-wider block mb-2 font-medium">
                  Spesifikasi Ruang
                </span>

                <h4 className="font-serif text-2xl sm:text-3xl text-cream font-normal mb-3">
                  {currentSpace.name}
                </h4>

                <p className="text-xs text-sand font-light leading-relaxed mb-6">
                  {currentSpace.ambience}
                </p>

                <div className="space-y-4 pt-4 border-t border-line text-xs font-sans">
                  <div>
                    <span className="text-muted block mb-0.5">Alamat Lengkap</span>
                    <span className="text-sand font-light">{currentSpace.address}</span>
                  </div>

                  <div>
                    <span className="text-muted block mb-0.5">Jam Operasional</span>
                    <span className="text-sand font-light">{currentSpace.hours}</span>
                  </div>

                  <div>
                    <span className="text-muted block mb-0.5">Kapasitas & Fasilitas</span>
                    <span className="text-sand font-light">{currentSpace.capacity}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-line flex flex-col gap-2.5">
                <button
                  onClick={onOpenReserve}
                  className="w-full inline-flex items-center justify-center gap-2 border border-line-light text-sand hover:text-dark hover:bg-cream py-3 text-xs font-medium uppercase tracking-wider transition-all duration-300"
                >
                  <span>Reservasi di {currentSpace.city}</span>
                  <ArrowUpRight size={13} />
                </button>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(currentSpace.name + ' ' + currentSpace.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-xs text-muted hover:text-terracotta transition-colors py-1"
                >
                  Buka Peta Google Maps →
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
