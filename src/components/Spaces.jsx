import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPACES } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function Spaces({ onOpenReserve }) {
  const [selectedSpaceId, setSelectedSpaceId] = useState(SPACES[0].id);

  const currentSpace = SPACES.find((s) => s.id === selectedSpaceId) || SPACES[0];

  return (
    <section id="spaces" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#262320]">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#262320] mb-12 gap-4">
          <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#7C756B]">
            <span>KAPITEL 03 — RUANG SANCTUARY & ATMOSFER</span>
          </div>
          <div className="text-xs text-[#8C8478] font-light">
            Senopati · Dago Pakar · Canggu
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F2EB] font-normal tracking-[-0.025em]">
            Dirancang untuk Keheningan, <br />
            <span className="italic font-serif text-[#C05A3E]">& Percakapan Hangat.</span>
          </h2>
        </div>

        {/* Location Selectors: Architectural Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#262320] mb-16">
          {SPACES.map((space, idx) => {
            const isSelected = space.id === selectedSpaceId;
            return (
              <button
                key={space.id}
                onClick={() => setSelectedSpaceId(space.id)}
                className={`text-left p-6 sm:p-8 transition-colors flex flex-col justify-between ${
                  idx < SPACES.length - 1 ? 'md:border-r border-[#262320]' : ''
                } ${isSelected ? 'bg-[#151412]' : 'hover:bg-[#121110]'}`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono mb-6">
                  <span className="text-[#5C554C]">LOKASI 0{idx + 1}</span>
                  <span className={`w-1.5 h-1.5 ${isSelected ? 'bg-[#C05A3E]' : 'bg-[#3A352F]'}`} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#F5F2EB] mb-1 font-normal">
                    {space.name}
                  </h3>
                  <div className="text-xs font-mono uppercase tracking-wider text-[#C05A3E]">
                    {space.city}
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
            <div className="lg:col-span-8 border border-[#262320] bg-[#151412] p-2 flex flex-col justify-between">
              <div className="aspect-[16/10] lg:aspect-auto lg:h-[450px] overflow-hidden">
                <img
                  src={currentSpace.image}
                  alt={currentSpace.name}
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="pt-3 pb-1 px-2 flex justify-between text-[11px] font-mono text-[#7C756B]">
                <span>SANCTUARY ARCHIVE: {currentSpace.name.toUpperCase()}</span>
                <span>{currentSpace.city.toUpperCase()}</span>
              </div>
            </div>

            {/* Specifications & Reservation Details */}
            <div className="lg:col-span-4 border border-[#262320] bg-[#121110] p-8 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C05A3E] block mb-2">
                  Profil Arsitektur
                </span>

                <h4 className="font-serif text-3xl text-[#F5F2EB] font-normal mb-4">
                  {currentSpace.name}
                </h4>

                <p className="text-xs text-[#A69E91] font-light leading-relaxed mb-8">
                  {currentSpace.ambience}
                </p>

                <div className="space-y-4 pt-6 border-t border-[#262320] text-xs font-mono">
                  <div>
                    <span className="text-[#5C554C] uppercase text-[10px] block mb-0.5">Alamat</span>
                    <span className="text-[#DDD6CA] font-sans font-light text-xs">{currentSpace.address}</span>
                  </div>

                  <div>
                    <span className="text-[#5C554C] uppercase text-[10px] block mb-0.5">Jam Operasional</span>
                    <span className="text-[#DDD6CA] font-sans font-light text-xs">{currentSpace.hours}</span>
                  </div>

                  <div>
                    <span className="text-[#5C554C] uppercase text-[10px] block mb-0.5">Kapasitas</span>
                    <span className="text-[#DDD6CA] font-sans font-light text-xs">{currentSpace.capacity}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 mt-8 border-t border-[#262320] flex flex-col gap-3">
                <button
                  onClick={onOpenReserve}
                  className="w-full inline-flex items-center justify-center gap-2 border border-[#3A352F] text-[#DDD6CA] hover:text-[#0F0E0D] hover:bg-[#F5F2EB] py-3 text-xs font-medium tracking-[0.14em] uppercase transition-all duration-300"
                >
                  <span>Reservasi di {currentSpace.city}</span>
                  <ArrowUpRight size={13} />
                </button>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(currentSpace.name + ' ' + currentSpace.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center text-[11px] font-mono text-[#7C756B] hover:text-[#C05A3E] transition-colors py-1"
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
