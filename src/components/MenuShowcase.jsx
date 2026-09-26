import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES, MENU_ITEMS } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function MenuShowcase({ onOpenReserve }) {
  const [activeTab, setActiveTab] = useState('roastery');

  const filteredItems = MENU_ITEMS.filter((item) => item.categoryId === activeTab);
  const featuredItem = filteredItems[0] || MENU_ITEMS[0];
  const secondaryItem = filteredItems[1] || MENU_ITEMS[1];

  return (
    <section id="menu" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#262320]">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#262320] mb-12 gap-4">
          <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#7C756B]">
            <span>KAPITEL 02 — KARYA RASA & SANGRAI</span>
          </div>
          <div className="text-xs text-[#8C8478] font-light">
            Menu disesuaikan berkala mengikuti musim petik petani lokal.
          </div>
        </div>

        {/* Grand Section Title */}
        <div className="mb-14">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F2EB] font-normal tracking-[-0.025em]">
            Kurasi Pilihan, <br />
            <span className="italic font-serif text-[#C05A3E]">Diracik dengan Ketelitian.</span>
          </h2>
        </div>

        {/* Minimalist Editorial Category Navigation */}
        <div className="flex items-center gap-6 sm:gap-10 border-b border-[#262320] pb-4 mb-16 overflow-x-auto scrollbar-none">
          {CATEGORIES.map((cat, idx) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-xs uppercase tracking-[0.14em] py-2 whitespace-nowrap transition-colors relative flex items-baseline gap-2 ${
                  isActive ? 'text-[#F5F2EB]' : 'text-[#7C756B] hover:text-[#BDB5A8]'
                }`}
              >
                <span className="font-mono text-[10px] text-[#5C554C]">0{idx + 1}</span>
                <span>{cat.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-[#C05A3E]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Editorial Product Presentation (Asymmetric & Typographic) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20"
          >
            {/* Featured Product Column (Monumental Presentation) */}
            {featuredItem && (
              <div className="lg:col-span-7 border border-[#262320] bg-[#151412] p-3">
                <div className="aspect-[16/10] overflow-hidden mb-6 relative">
                  <img
                    src={featuredItem.image}
                    alt={featuredItem.title}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-[#0F0E0D]/90 px-3 py-1 text-[10px] font-mono tracking-widest text-[#DDD6CA] border border-[#262320]">
                    {featuredItem.highlight}
                  </div>
                </div>

                <div className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-[#262320] mb-4">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#7C756B] uppercase block mb-1">
                        {featuredItem.origin}
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F2EB] font-normal">
                        {featuredItem.title}
                      </h3>
                    </div>
                    <div className="font-mono text-base text-[#F5F2EB]">
                      {featuredItem.price}
                    </div>
                  </div>

                  <p className="text-sm text-[#A69E91] font-light leading-relaxed mb-6">
                    {featuredItem.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#262320]">
                    <div className="flex flex-wrap gap-2">
                      {featuredItem.notes.map((note) => (
                        <span
                          key={note}
                          className="text-[11px] font-mono text-[#8C8478] bg-[#1A1816] border border-[#262320] px-2.5 py-1"
                        >
                          {note}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={onOpenReserve}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#DDD6CA] hover:text-[#C05A3E] transition-colors"
                    >
                      <span>Cicipi di Meja</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Companion Product Column */}
            {secondaryItem && (
              <div className="lg:col-span-5 border border-[#262320] bg-[#151412] p-3 flex flex-col justify-between">
                <div className="aspect-[4/3] overflow-hidden mb-6 relative">
                  <img
                    src={secondaryItem.image}
                    alt={secondaryItem.title}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute top-4 left-4 bg-[#0F0E0D]/90 px-3 py-1 text-[10px] font-mono tracking-widest text-[#DDD6CA] border border-[#262320]">
                    {secondaryItem.highlight}
                  </div>
                </div>

                <div className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-[#262320] mb-4">
                    <div>
                      <span className="text-[10px] font-mono tracking-widest text-[#7C756B] uppercase block mb-1">
                        {secondaryItem.origin}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB] font-normal">
                        {secondaryItem.title}
                      </h3>
                    </div>
                    <div className="font-mono text-sm text-[#F5F2EB]">
                      {secondaryItem.price}
                    </div>
                  </div>

                  <p className="text-xs text-[#A69E91] font-light leading-relaxed mb-6">
                    {secondaryItem.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#262320]">
                    <div className="flex flex-wrap gap-1.5">
                      {secondaryItem.notes.map((note) => (
                        <span
                          key={note}
                          className="text-[10px] font-mono text-[#8C8478] bg-[#1A1816] border border-[#262320] px-2 py-0.5"
                        >
                          {note}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={onOpenReserve}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#DDD6CA] hover:text-[#C05A3E] transition-colors"
                    >
                      <span>Cicipi di Meja</span>
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Chef's Table Private Reservation Monograph */}
        <div className="border border-[#262320] p-8 md:p-12 flex flex-col md:flex-row items-baseline justify-between gap-8 bg-[#121110]">
          <div className="max-w-xl">
            <span className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#C05A3E] block mb-2">
              Jamuan Privat · Chef’s Table
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F2EB] font-normal mb-3">
              6-Course Wood-Fire & Botanical Pairing
            </h3>
            <p className="text-xs text-[#8C8478] font-light leading-relaxed">
              Disediakan khusus untuk kelompok 6 hingga 14 tamu dengan hidangan yang disiapkan langsung di hadapan Anda oleh Head Chef dan Barista Curator kami.
            </p>
          </div>

          <button
            onClick={onOpenReserve}
            className="inline-flex items-center gap-2 border border-[#3A352F] text-[#DDD6CA] hover:text-[#0F0E0D] hover:bg-[#F5F2EB] text-xs font-medium tracking-[0.14em] uppercase py-3.5 px-7 transition-all duration-300 shrink-0"
          >
            <span>Reservasi Chef's Table</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
