import { motion } from 'framer-motion';
import { ArrowDown, Flame, Sparkles, Compass } from 'lucide-react';

export default function Hero({ onOpenReserve }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-16 px-6 md:px-12 overflow-hidden">
      {/* Subtle Ambient Background Lighting (Warm ember, no tacky purple AI glow) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#C05A3E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#2E3D30]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
        >
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Top pill badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="flex items-center gap-2 text-xs font-medium tracking-wider bg-[#1F1C19] border border-[#332D28] text-[#D8CFBF] py-1.5 px-4 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C05A3E] animate-pulse" />
                <span>Panen Raya Dataran Tinggi 2026 · Petik Merah No. 04</span>
              </span>
            </motion.div>

            {/* Main Grand Title */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[-0.03em] leading-[1.02] text-[#FAF7F2] mb-6 font-normal"
            >
              Kopi Sangrai, <br />
              <span className="italic font-normal text-[#E0A894]">Roti Ragi Alami</span>, <br />
              & Dapur Api Kayu.
            </motion.h1>

            {/* Editorial Body Text */}
            <motion.p
              variants={itemVariants}
              className="text-[#BDB4A8] text-base md:text-lg leading-relaxed max-w-xl mb-8 font-light"
            >
              Kolektif kuliner di Jakarta, Bandung, dan Bali yang merawat hubungan langsung dengan petani nusantara, menghidupkan ragi liar, dan menyajikan rasa jujur dari tungku perapian.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4">
              <a
                href="#menu"
                className="group inline-flex items-center gap-2 bg-[#F9F6F0] hover:bg-[#EAE4D9] text-[#121110] text-xs font-semibold uppercase tracking-wider py-4 px-8 rounded-full transition-all duration-300 transform active:scale-95 shadow-xl shadow-black/30"
              >
                <span>Jelajahi Menu Andalan</span>
                <ArrowDown size={14} className="group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenReserve}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-[#1C1A18] text-[#E0D7CB] border border-[#3E3832] hover:border-[#524B43] text-xs font-semibold uppercase tracking-wider py-4 px-7 rounded-full transition-all duration-300 transform active:scale-95"
              >
                <span>Reservasi Meja</span>
              </button>
            </motion.div>

            {/* Sensory Badges */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-10 mt-8 border-t border-[#2A2622]"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1B1917] border border-[#2D2925] text-[#C05A3E]">
                  <Compass size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#EAE4DC]">Single Origin</div>
                  <div className="text-[11px] text-[#8C8377]">12 Terroir Kopi</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1B1917] border border-[#2D2925] text-[#D49B44]">
                  <Sparkles size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#EAE4DC]">Wild Yeast</div>
                  <div className="text-[11px] text-[#8C8377]">Fermentasi 48 Jam</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#1B1917] border border-[#2D2925] text-[#C05A3E]">
                  <Flame size={16} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#EAE4DC]">Kayu Rambutan</div>
                  <div className="text-[11px] text-[#8C8377]">Smoked & Hearth</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: High Quality Culinary Visual with Natural Texture */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative"
          >
            <div className="relative group rounded-3xl overflow-hidden border border-[#2E2A27] bg-[#181614] shadow-2xl shadow-black/80 aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop"
                alt="Artisan Specialty Coffee & Sourdough"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                loading="eager"
              />

              {/* Gradient overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-transparent opacity-80" />

              {/* Floating Badge on Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#181614]/85 backdrop-blur-md border border-[#332E29]">
                <div className="flex items-center justify-between text-xs text-[#9E958A] mb-1">
                  <span className="uppercase tracking-widest text-[10px]">Sensory Focus</span>
                  <span className="text-[#C05A3E] font-medium">Batch #182</span>
                </div>
                <div className="font-serif text-lg text-[#F9F6F0] italic">
                  "Kopi yang jujur dan adonan yang bernapas, dirawat dengan kesabaran."
                </div>
              </div>
            </div>

            {/* Offset Decorative Accent Badge */}
            <div className="hidden sm:block absolute -top-4 -right-4 bg-[#C05A3E] text-white py-3 px-4 rounded-2xl text-xs font-semibold uppercase tracking-wider shadow-lg transform rotate-3">
              Est. 2018 · Indonesia
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
