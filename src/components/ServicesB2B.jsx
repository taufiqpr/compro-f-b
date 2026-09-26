import { B2B_SERVICES, REVIEWS } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesB2B({ onOpenReserve }) {
  return (
    <section id="b2b" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#262320]">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-6 border-b border-[#262320] mb-12 gap-4">
          <div className="text-[11px] font-mono tracking-[0.18em] uppercase text-[#7C756B]">
            <span>KAPITEL 04 — KEMITRAAN & SOLUSI B2B</span>
          </div>
          <div className="text-xs text-[#8C8478] font-light">
            Suplai Roastery · Bingkisan Artisan · Jamuan Eksekutif
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F5F2EB] font-normal tracking-[-0.025em]">
            Kolaborasi Profesional, <br />
            <span className="italic font-serif text-[#C05A3E]">Standar Kualitas Tanpa Kompromi.</span>
          </h2>
        </div>

        {/* 3 Architectural Columns (No SaaS Pricing Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-[#262320] mb-24">
          {B2B_SERVICES.map((service, index) => (
            <div
              key={service.number}
              className={`p-8 sm:p-10 flex flex-col justify-between ${
                index < B2B_SERVICES.length - 1 ? 'md:border-r border-[#262320]' : ''
              } border-b md:border-b-0 border-[#262320] bg-[#121110]`}
            >
              <div>
                <div className="font-mono text-xs text-[#C05A3E] tracking-widest mb-6">
                  {service.number} / PROGRAM
                </div>

                <h3 className="font-serif text-2xl text-[#F5F2EB] font-normal mb-4">
                  {service.title}
                </h3>

                <p className="text-xs text-[#A69E91] font-light leading-relaxed mb-8">
                  {service.desc}
                </p>

                <div className="space-y-2 mb-10 pb-6 border-b border-[#262320]">
                  {service.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2 text-xs font-mono text-[#8C8478]">
                      <span className="text-[#C05A3E]">—</span>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenReserve}
                className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-[#DDD6CA] hover:text-[#C05A3E] transition-colors pt-2"
              >
                <span>Ajukan Kolaborasi</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          ))}
        </div>

        {/* Editorial Press Reviews (Book Citation Style) */}
        <div className="border border-[#262320] bg-[#151412] p-8 md:p-14">
          <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#7C756B] mb-8 pb-4 border-b border-[#262320]">
            Kutipan Media & Catatan Kurasi
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {REVIEWS.map((rev, i) => (
              <div key={i} className="flex flex-col justify-between">
                <blockquote className="font-serif text-xl sm:text-2xl text-[#E8E2D8] font-normal leading-relaxed italic mb-8">
                  "{rev.quote}"
                </blockquote>

                <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-wider text-[#7C756B] pt-4 border-t border-[#262320]">
                  <span className="text-[#DDD6CA] font-medium">{rev.source}</span>
                  <span>·</span>
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
