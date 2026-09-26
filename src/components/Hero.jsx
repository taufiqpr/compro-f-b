import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function Hero({ onOpenReserve }) {
  return (
    <section className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 px-6 md:px-12 border-b border-[#262320]">
      <div className="w-full max-w-7xl mx-auto">
        {/* Archival Masthead Line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#262320] text-[11px] font-mono tracking-[0.16em] uppercase text-[#7C756B] mb-8 sm:mb-10">
          <span>Kolektif Kuliner Nusantara</span>
          <span className="hidden sm:inline text-[#3A352F]">·</span>
          <span>Sourcing Langsung 12 Koperasi Tani</span>
          <span className="hidden sm:inline text-[#3A352F]">·</span>
          <span className="text-[#C05A3E]">Terbuka Setiap Hari · Sejak 2018</span>
        </div>

        {/* Hero Main Grid: Balanced Two-Column Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-14">
          {/* Left Column: Eyebrow + Headline + Description + CTA */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[11px] font-mono tracking-[0.2em] text-[#C05A3E] uppercase mb-3 flex items-center gap-2"
            >
              <span>Atelier & Roastery</span>
              <span className="w-4 h-px bg-[#C05A3E]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] tracking-[-0.03em] leading-[1.12] sm:leading-[1.06] text-[#F5F2EB] font-normal mb-5"
            >
              Secangkir kopi <br />
              yang jujur, <br />
              <span className="italic font-normal text-[#C05A3E] font-serif">roti ragi liar,</span> <br />
              & dapur api kayu.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="text-[#BDB5A8] text-sm sm:text-base leading-relaxed font-light max-w-xl mb-7"
            >
              NÚA adalah ruang temu bagi ketelatenan tangan manusia dan kekayaan tanah nusantara. Mengolah biji kopi petik merah, adonan gandum fermentasi lambat, dan hidangan panggangan bara kayu buah dalam ritme yang tidak tergesa-gesa.
            </motion.p>

            {/* Dedicated Horizontal CTA Group */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3 sm:gap-4"
            >
              <a
                href="#menu"
                className="inline-flex items-center gap-2 bg-[#F5F2EB] text-[#0F0E0D] hover:bg-[#DDD6CA] px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-mono uppercase tracking-[0.14em] font-medium transition-all duration-300 group shadow-md shadow-black/20"
              >
                <span>Jelajahi Menu</span>
                <ArrowDown size={13} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenReserve}
                className="inline-flex items-center gap-2 border border-[#3A352F] text-[#DDD6CA] hover:text-[#0F0E0D] hover:bg-[#F5F2EB] hover:border-[#F5F2EB] px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-mono uppercase tracking-[0.14em] font-medium transition-all duration-300 group"
              >
                <span>Reservasi Meja</span>
                <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </motion.div>
          </div>

          {/* Right Column: Naturally Integrated Photography & Caption */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="border border-[#262320] bg-[#151412] overflow-hidden">
              <div className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] xl:aspect-[5/4] overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop"
                  alt="Ritual penyeduhan kopi dan roti sourdough di Atelier NÚA"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Enhanced Editorial Caption Bar */}
              <div className="py-2.5 px-4 flex items-center justify-between text-xs font-mono text-[#8C8478] border-t border-[#262320] bg-[#121110]">
                <span className="tracking-wider">PL. 01 — KURASI RASA & RUANG</span>
                <span className="text-[#C05A3E] font-medium">SENOPATI, JKT</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Provenance Ledger */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#262320] pt-6 sm:pt-8 gap-6 md:gap-0">
          <div className="md:pr-8 md:border-r border-[#262320]">
            <span className="font-mono text-[11px] text-[#C05A3E] tracking-widest block mb-1.5">01 / TERROIR</span>
            <h4 className="font-serif text-base sm:text-lg text-[#F5F2EB] mb-1 font-normal">Biji Kopi Petik Merah</h4>
            <p className="text-xs text-[#8C8478] leading-relaxed font-light">
              Bekerja langsung dengan 12 kelompok tani di Gayo, Kerinci, Toraja, dan Kintamani dengan harga berkeadilan.
            </p>
          </div>

          <div className="md:px-8 md:border-r border-[#262320]">
            <span className="font-mono text-[11px] text-[#C89542] tracking-widest block mb-1.5">02 / PERAGIAN</span>
            <h4 className="font-serif text-base sm:text-lg text-[#F5F2EB] mb-1 font-normal">48 Jam Ragi Liar</h4>
            <p className="text-xs text-[#8C8478] leading-relaxed font-light">
              Kultur starter alami sejak 2018 tanpa ragi instan sintetis, menghasilkan adonan ramah pencernaan.
            </p>
          </div>

          <div className="md:pl-8">
            <span className="font-mono text-[11px] text-[#C05A3E] tracking-widest block mb-1.5">03 / PERAPIAN</span>
            <h4 className="font-serif text-base sm:text-lg text-[#F5F2EB] mb-1 font-normal">Bara Kayu Buah Tropis</h4>
            <p className="text-xs text-[#8C8478] leading-relaxed font-light">
              Memanfaatkan ranting pangkasan kayu rambutan dan arang batok untuk aroma asap manis yang lembut.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
