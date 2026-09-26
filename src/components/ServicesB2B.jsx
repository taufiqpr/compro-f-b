import { motion } from 'framer-motion';
import { B2B_SERVICES, REVIEWS } from '../data/content';
import { Check, ArrowRight, Quote, Building2, Coffee, Gift } from 'lucide-react';

export default function ServicesB2B({ onOpenReserve }) {
  return (
    <section id="b2b" className="py-28 px-6 md:px-12 bg-[#161412] border-t border-[#26221E] relative">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-[#C05A3E] tracking-widest uppercase">04 / KEMITRAAN & B2B</span>
              <div className="h-px bg-[#2E2925] w-16" />
              <span className="text-xs tracking-wider uppercase text-[#857C70]">Hospitality & Solutions</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF7F2] font-normal">
              Kolaborasi & <br />
              <span className="italic text-[#E0A894]">Solusi Hospitaliti Bisnis.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#A89E90] font-light leading-relaxed">
            Dari suplai biji kopi sangrai berskala untuk cafe Anda hingga jamuan makan privat eksklusif bagi para eksekutif korporat.
          </p>
        </div>

        {/* 3 B2B Services Grid (Architectural / Swiss numbered cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {B2B_SERVICES.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-[#1A1816] border border-[#2B2723] hover:border-[#4B433B] transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/30"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#26221F]">
                  <span className="font-mono text-2xl font-light text-[#C05A3E]">{service.number}</span>
                  {index === 0 && <Coffee size={20} className="text-[#8C8377] group-hover:text-[#FAF7F2] transition-colors" />}
                  {index === 1 && <Gift size={20} className="text-[#8C8377] group-hover:text-[#FAF7F2] transition-colors" />}
                  {index === 2 && <Building2 size={20} className="text-[#8C8377] group-hover:text-[#FAF7F2] transition-colors" />}
                </div>

                <h3 className="font-serif text-2xl text-[#FAF7F2] mb-3 group-hover:text-[#E0A894] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs text-[#A89E90] font-light leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="space-y-2 mb-8">
                  {service.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2 text-xs text-[#CDC3B6]">
                      <Check size={14} className="text-[#C05A3E] shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenReserve}
                className="w-full inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded-xl bg-[#23201C] hover:bg-[#C05A3E] text-[#FAF7F2] transition-colors"
              >
                <span>Konsultasikan Kebutuhan</span>
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Editorial Press / Media Reviews */}
        <div className="p-10 md:p-14 rounded-3xl bg-[#131210] border border-[#2B2723] relative overflow-hidden">
          <div className="absolute top-6 right-8 text-[#26221E] pointer-events-none">
            <Quote size={120} strokeWidth={1} />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            {REVIEWS.map((rev, i) => (
              <div key={i} className="flex flex-col justify-between">
                <p className="font-serif text-xl sm:text-2xl text-[#E8E2D8] font-normal leading-relaxed italic mb-6">
                  "{rev.quote}"
                </p>
                <div className="flex items-center gap-3 text-xs text-[#8C8377] font-mono uppercase tracking-wider">
                  <span className="text-[#C05A3E] font-semibold">{rev.source}</span>
                  <span className="w-1 h-1 rounded-full bg-[#3D3730]" />
                  <span>{rev.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
