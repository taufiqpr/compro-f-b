import { motion } from 'framer-motion';
import { METRICS } from '../data/content';

export default function Philosophy() {
  return (
    <section id="story" className="py-28 px-6 md:px-12 bg-[#121110] relative">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="text-xs font-mono text-[#C05A3E] tracking-widest uppercase">01 / FILOSOFI KAMI</span>
          <div className="h-px bg-[#2B2723] flex-1 max-w-[120px]" />
          <span className="text-xs tracking-wider uppercase text-[#857C70]">Dari Tanah Petani ke Meja Saji</span>
        </div>

        {/* Grand Editorial Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-baseline">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF7F2] font-normal leading-[1.15]">
              Kami tidak mengejar kecepatan.{' '}
              <span className="italic font-serif text-[#E0A894]">
                Kami merayakan waktu, ketelatenan tangan, dan kemurnian rasa
              </span>{' '}
              yang dianugerahkan alam nusantara.
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-end">
            <p className="text-[#A89F93] text-base leading-relaxed font-light mb-6">
              Dimulai dari sebuah micro-roastery kecil pada tahun 2018, NÚA lahir dari kegelisahan terhadap budaya kuliner instan. Kami bekerja langsung dengan 12 kelompok tani di Gayo, Kerinci, Toraja, hingga Kintamani—menghilangkan rantai tengkulak dan memastikan setiap butir panen dihargai secara bermartabat.
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-[#C05A3E] uppercase tracking-wider">
              <span>Etika Sourcing 100% Terlacak</span>
              <span className="w-1 h-1 rounded-full bg-[#C05A3E]" />
              <span>Zero Artificial Additives</span>
            </div>
          </div>
        </div>

        {/* Visual Grid: Real Culinary Process Photography */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden bg-[#181614] border border-[#2B2723] aspect-[4/5]"
          >
            <img
              src="https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=900&auto=format&fit=crop"
              alt="Artisan Roasting Machine & Precision"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C05A3E] mb-1 block">Proses 01</span>
              <h3 className="font-serif text-xl text-[#FAF7F2] mb-1">Micro-Batch Roasting</h3>
              <p className="text-xs text-[#A89E90] font-light">Disangrai maksimal 5kg per batch untuk mengunci profil rasa terroir aslinya.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="group relative rounded-2xl overflow-hidden bg-[#181614] border border-[#2B2723] aspect-[4/5]"
          >
            <img
              src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=900&auto=format&fit=crop"
              alt="Wild Sourdough Starter & Fermentation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#D49B44] mb-1 block">Proses 02</span>
              <h3 className="font-serif text-xl text-[#FAF7F2] mb-1">48h Ragi Liar Hidup</h3>
              <p className="text-xs text-[#A89E90] font-light">Starter alami berusia 7 tahun menghasilkan tekstur roti kenyal tanpa asam maag.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="group relative rounded-2xl overflow-hidden bg-[#181614] border border-[#2B2723] aspect-[4/5]"
          >
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=900&auto=format&fit=crop"
              alt="Wood-Fired Hearth Charcoal"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C05A3E] mb-1 block">Proses 03</span>
              <h3 className="font-serif text-xl text-[#FAF7F2] mb-1">Kayu Buah Rambutan</h3>
              <p className="text-xs text-[#A89E90] font-light">Asap manis beraroma harum dari pangkasan kayu buah tropis yang ramah lingkungan.</p>
            </div>
          </motion.div>
        </div>

        {/* Animated Metrics Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-[#26221E]">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-[#171513] border border-[#2A2622] hover:border-[#3E3832] transition-colors"
            >
              <div className="font-serif text-4xl lg:text-5xl text-[#FAF7F2] mb-2 font-normal">
                {metric.value}
                <span className="text-lg text-[#C05A3E] font-sans font-medium">{metric.suffix}</span>
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#EAE4DC] mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-[#8C8377] font-light leading-relaxed">
                {metric.subtext}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
