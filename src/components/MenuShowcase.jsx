import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, MENU_ITEMS } from '../data/content';
import { ArrowUpRight, Sparkles, Flame } from 'lucide-react';

export default function MenuShowcase({ onOpenReserve }) {
  const [activeTab, setActiveTab] = useState('roastery');

  const filteredItems = MENU_ITEMS.filter((item) => item.categoryId === activeTab);

  return (
    <section id="menu" className="py-28 px-6 md:px-12 bg-[#161412] border-t border-[#26221E] relative">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#C05A3E] tracking-widest uppercase">02 / KARYA RASA KAMI</span>
              <div className="h-px bg-[#2E2925] w-16" />
              <span className="text-xs tracking-wider uppercase text-[#857C70]">Signature Offerings</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F2] font-normal">
              Kurasi Pilihan, <br />
              <span className="italic text-[#E0A894]">Dibuat dengan Dedikasi.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-sm text-[#A89E90] font-light leading-relaxed mb-4">
              Setiap cangkir kopi, sepotong sourdough, dan hidangan panggangan dirancang dengan bahan bersertifikasi organik dan profil rasa yang transparan.
            </p>
            <div className="text-xs text-[#C05A3E] font-medium flex items-center gap-2">
              <Sparkles size={14} />
              <span>Menu berubah berkala mengikuti musim panen bumi nusantara.</span>
            </div>
          </div>
        </div>

        {/* Category Tabs (Animated Switcher) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none border-b border-[#2A2521]">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative py-3 px-6 rounded-full text-xs font-medium uppercase tracking-wider transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                  isActive
                    ? 'text-[#121110] bg-[#FAF7F2] font-semibold shadow-lg shadow-black/30'
                    : 'text-[#A89F93] hover:text-[#FAF7F2] hover:bg-[#201D1A]'
                }`}
              >
                <span>{cat.name}</span>
                <span className={`text-[10px] ${isActive ? 'text-[#C05A3E]' : 'text-[#6B6357]'}`}>
                  · {cat.subtitle}
                </span>
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid with Framer Motion AnimatePresence */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="group relative rounded-3xl bg-[#1A1816] border border-[#2B2723] hover:border-[#423C36] overflow-hidden transition-all duration-500 flex flex-col sm:flex-row shadow-xl shadow-black/40"
              >
                {/* Image Section with Micro-Zoom on Hover */}
                <div className="sm:w-2/5 relative overflow-hidden aspect-[4/3] sm:aspect-auto">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 via-transparent to-transparent" />
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-3 left-3 bg-[#181614]/85 backdrop-blur-md border border-[#332E29] text-[10px] uppercase font-mono tracking-wider text-[#FAF7F2] py-1 px-2.5 rounded-full">
                    {item.highlight}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 sm:w-3/5 flex flex-col justify-between">
                  <div>
                    {/* Origin & Process Details */}
                    <div className="flex items-center justify-between text-xs text-[#9E958A] mb-2 font-mono">
                      <span>{item.origin}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-[#FAF7F2] mb-2 group-hover:text-[#E0A894] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#A89E90] font-light leading-relaxed mb-5">
                      {item.description}
                    </p>

                    {/* Sensory Tasting Notes Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.notes.map((note) => (
                        <span
                          key={note}
                          className="text-[11px] font-sans bg-[#23201D] text-[#D4C9BC] border border-[#302B26] py-1 px-2.5 rounded-md"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#26221F]">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#736B60] block font-mono">
                        Per Porsi / Batch
                      </span>
                      <span className="text-base font-semibold text-[#FAF7F2]">
                        {item.price}
                      </span>
                    </div>

                    <button
                      onClick={onOpenReserve}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#FAF7F2] bg-[#272320] hover:bg-[#C05A3E] py-2 px-3.5 rounded-full transition-all duration-300"
                    >
                      <span>Cicipi Langsung</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Menu Manifesto Box */}
        <div className="mt-16 p-8 rounded-3xl bg-[#1D1A17] border border-[#2F2924] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-[#26221E] text-[#C05A3E] border border-[#38322C]">
              <Flame size={24} />
            </div>
            <div>
              <h4 className="font-serif text-xl text-[#FAF7F2] mb-0.5">Ingin Mencicipi Menu Tasting Khusus?</h4>
              <p className="text-xs text-[#A89E90] font-light">
                Kami menyediakan 6-Course Wood-Fire & Wine Pairing untuk acara pribadi Anda di Chef’s Table.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenReserve}
            className="whitespace-nowrap bg-[#C05A3E] hover:bg-[#A84B32] text-white text-xs font-semibold uppercase tracking-wider py-3.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-[#C05A3E]/20"
          >
            Tanya Ketersediaan Chef's Table
          </button>
        </div>
      </div>
    </section>
  );
}
