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
    <section id="menu" className="py-20 md:py-28 px-6 md:px-12 border-b border-line bg-surface">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header (Varied Rhythm: Elevated background, clean sans eyebrow) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-line mb-10 gap-4">
          <div className="text-xs text-muted uppercase tracking-wider">
            Kurasi Rasa Musiman
          </div>
          <div className="text-xs text-muted font-light">
            Disesuaikan berkala mengikuti hasil panen petani mitra.
          </div>
        </div>

        {/* Section Title */}
        <div className="mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream font-normal leading-tight">
            Pilihan Sangrai, Dapur, <br />
            <span className="italic font-serif text-terracotta">& Peragian Alami.</span>
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-6 sm:gap-10 border-b border-line pb-4 mb-14 overflow-x-auto scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-xs uppercase tracking-wider py-2 whitespace-nowrap transition-colors relative flex items-center gap-2 ${
                  isActive ? 'text-cream font-medium' : 'text-muted hover:text-sand'
                }`}
              >
                <span>{cat.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-terracotta"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Product Presentation (Open Whitespace, No Rigid Card Box Borders) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start mb-16"
          >
            {/* Featured Product Column */}
            {featuredItem && (
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="aspect-[16/10] overflow-hidden mb-6 relative bg-dark">
                  <img
                    src={featuredItem.image}
                    alt={featuredItem.title}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-dark/90 px-3 py-1 text-xs text-sand border border-line">
                    {featuredItem.highlight}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-line mb-4">
                    <div>
                      <span className="text-xs text-muted block mb-1">
                        {featuredItem.origin}
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-cream font-normal">
                        {featuredItem.title}
                      </h3>
                    </div>
                    <div className="font-mono text-base text-cream">
                      {featuredItem.price}
                    </div>
                  </div>

                  <p className="text-sm text-sand font-light leading-relaxed mb-6">
                    {featuredItem.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line">
                    <div className="flex flex-wrap gap-2">
                      {featuredItem.notes.map((note) => (
                        <span
                          key={note}
                          className="text-xs text-muted bg-dark border border-line px-2.5 py-1"
                        >
                          {note}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={onOpenReserve}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-sand hover:text-terracotta transition-colors font-medium"
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
              <div className="lg:col-span-5 flex flex-col justify-between pt-4 lg:pt-0">
                <div className="aspect-[4/3] overflow-hidden mb-6 relative bg-dark">
                  <img
                    src={secondaryItem.image}
                    alt={secondaryItem.title}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-dark/90 px-3 py-1 text-xs text-sand border border-line">
                    {secondaryItem.highlight}
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-4 pb-4 border-b border-line mb-4">
                    <div>
                      <span className="text-xs text-muted block mb-1">
                        {secondaryItem.origin}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-cream font-normal">
                        {secondaryItem.title}
                      </h3>
                    </div>
                    <div className="font-mono text-sm text-cream">
                      {secondaryItem.price}
                    </div>
                  </div>

                  <p className="text-xs text-sand font-light leading-relaxed mb-6">
                    {secondaryItem.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-line">
                    <div className="flex flex-wrap gap-1.5">
                      {secondaryItem.notes.map((note) => (
                        <span
                          key={note}
                          className="text-xs text-muted bg-dark border border-line px-2 py-0.5"
                        >
                          {note}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={onOpenReserve}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-sand hover:text-terracotta transition-colors font-medium"
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

        {/* Chef's Table Private Reservation Callout */}
        <div className="border border-line bg-dark p-8 md:p-10 flex flex-col md:flex-row items-baseline justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-xs text-terracotta uppercase tracking-wider block mb-2 font-medium">
              Jamuan Privat · Chef’s Table
            </span>
            <h3 className="font-serif text-xl sm:text-2xl text-cream font-normal mb-2">
              6-Course Wood-Fire & Botanical Pairing
            </h3>
            <p className="text-xs text-muted font-light leading-relaxed">
              Disediakan khusus untuk 6 hingga 14 tamu dengan hidangan yang disiapkan langsung di hadapan Anda oleh Head Chef dan Barista Curator kami.
            </p>
          </div>

          <button
            onClick={onOpenReserve}
            className="inline-flex items-center gap-2 border border-line-light text-sand hover:text-dark hover:bg-cream text-xs font-medium uppercase tracking-wider py-3 px-6 transition-all duration-300 shrink-0"
          >
            <span>Reservasi Chef's Table</span>
            <ArrowUpRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}
