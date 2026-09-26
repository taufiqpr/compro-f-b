import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SPACES } from '../data/content';
import { MapPin, Clock, Users, ArrowUpRight, Compass } from 'lucide-react';

export default function Spaces({ onOpenReserve }) {
  const [selectedSpaceId, setSelectedSpaceId] = useState(SPACES[0].id);

  const currentSpace = SPACES.find((s) => s.id === selectedSpaceId) || SPACES[0];

  return (
    <section id="spaces" className="py-28 px-6 md:px-12 bg-[#121110] border-t border-[#26221E] relative">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#C05A3E] tracking-widest uppercase">03 / RUANG SANCTUARY</span>
              <div className="h-px bg-[#2E2925] w-16" />
              <span className="text-xs tracking-wider uppercase text-[#857C70]">Atmosfer & Arsitektur</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F2] font-normal">
              Dirancang untuk <br />
              <span className="italic text-[#E0A894]">Ketenangan Indrawi.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#A89E90] font-light leading-relaxed">
            Setiap outlet NÚA dirancang merespons karakter alam lokal—memadukan material kayu jati daur ulang, batu andesit, serta pencahayaan alami yang ramah bagi percakapan hangat.
          </p>
        </div>

        {/* Space Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {SPACES.map((space) => {
            const isSelected = space.id === selectedSpaceId;
            return (
              <button
                key={space.id}
                onClick={() => setSelectedSpaceId(space.id)}
                className={`text-left p-5 rounded-2xl border transition-all duration-300 relative ${
                  isSelected
                    ? 'bg-[#1E1B18] border-[#C05A3E] shadow-xl shadow-black/40'
                    : 'bg-[#161412] border-[#2A2622] hover:border-[#3E3832] opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-[#C05A3E] uppercase tracking-wider">{space.city}</span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#C05A3E]' : 'bg-[#3A342E]'}`} />
                </div>
                <h3 className="font-serif text-lg text-[#FAF7F2] mb-1">{space.name}</h3>
                <p className="text-xs text-[#8C8377] line-clamp-1">{space.address}</p>
              </button>
            );
          })}
        </div>

        {/* Main Display: Active Space Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSpace.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden bg-[#181614] border border-[#2B2723] grid grid-cols-1 lg:grid-cols-12 shadow-2xl shadow-black/60"
          >
            {/* Visual Photography */}
            <div className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto min-h-[380px] overflow-hidden group">
              <img
                src={currentSpace.image}
                alt={currentSpace.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/70 via-transparent to-transparent" />
              
              <div className="absolute top-6 left-6 bg-[#121110]/80 backdrop-blur-md border border-[#332E29] text-xs font-mono text-[#EAE4DC] py-1.5 px-3.5 rounded-full flex items-center gap-2">
                <Compass size={14} className="text-[#C05A3E]" />
                <span>Sanctuary Unit #{currentSpace.city.toUpperCase()}</span>
              </div>
            </div>

            {/* Space Information Details */}
            <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-[#C05A3E] tracking-widest uppercase mb-2 block">
                  {currentSpace.city}
                </span>

                <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] mb-4 font-normal">
                  {currentSpace.name}
                </h3>

                <p className="text-sm text-[#A89E90] font-light leading-relaxed mb-8">
                  {currentSpace.ambience}
                </p>

                <div className="space-y-4 pt-6 border-t border-[#26221F] text-xs text-[#CDC4B8]">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-[#C05A3E] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#FAF7F2]">Alamat Lengkap</span>
                      <span className="text-[#8C8377]">{currentSpace.address}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock size={16} className="text-[#D49B44] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#FAF7F2]">Jam Kunjungan</span>
                      <span className="text-[#8C8377]">{currentSpace.hours}</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Users size={16} className="text-[#A89E90] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold block text-[#FAF7F2]">Kapasitas & Fasilitas</span>
                      <span className="text-[#8C8377]">{currentSpace.capacity}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-8 mt-8 border-t border-[#26221F]">
                <button
                  onClick={onOpenReserve}
                  className="inline-flex items-center gap-2 bg-[#C05A3E] hover:bg-[#A84B32] text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-full transition-all duration-300 shadow-md shadow-[#C05A3E]/20"
                >
                  <span>Reservasi di {currentSpace.city}</span>
                  <ArrowUpRight size={14} />
                </button>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(currentSpace.name + ' ' + currentSpace.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#CDC4B8] hover:text-white py-3.5 px-5 rounded-full border border-[#332E29] hover:border-[#4B443D] transition-colors"
                >
                  <span>Lihat di Google Maps</span>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
