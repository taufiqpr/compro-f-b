import { B2B_SERVICES, REVIEWS } from '../data/content';
import { ArrowUpRight } from 'lucide-react';

export default function ServicesB2B({ onOpenReserve }) {
  const serviceCategories = ['Program Kopi', 'Bingkisan Kurasi', 'Jamuan Privat'];

  return (
    <section id="b2b" className="py-20 md:py-28 px-6 md:px-12 border-b border-line bg-dark">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-line mb-10 gap-4">
          <div className="text-xs text-muted uppercase tracking-wider">
            Kemitraan & Hospitaliti Bisnis
          </div>
          <div className="text-xs text-muted font-light">
            Suplai Roastery · Bingkisan Artisan · Jamuan Eksekutif
          </div>
        </div>

        {/* Section Headline */}
        <div className="mb-14">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-cream font-normal leading-tight">
            Kolaborasi Profesional, <br />
            <span className="italic font-serif text-terracotta">Standar Rasa Tanpa Kompromi.</span>
          </h2>
        </div>

        {/* 3 Columns (Varied Rhythm: Open Layout Without Repetitive Number Boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-line mb-20">
          {B2B_SERVICES.map((service, index) => (
            <div
              key={service.title}
              className={`py-8 sm:py-10 md:px-8 flex flex-col justify-between ${
                index < B2B_SERVICES.length - 1 ? 'md:border-r border-line' : ''
              } ${index === 0 ? 'md:pl-0' : ''} ${index === B2B_SERVICES.length - 1 ? 'md:pr-0' : ''} border-b md:border-b-0 border-line`}
            >
              <div>
                <div className="text-xs text-terracotta uppercase tracking-wider mb-4 font-medium">
                  {serviceCategories[index]}
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-cream font-normal mb-3">
                  {service.title}
                </h3>

                <p className="text-xs text-sand font-light leading-relaxed mb-6">
                  {service.desc}
                </p>

                <div className="space-y-2 mb-8 pb-6 border-b border-line">
                  {service.perks.map((perk) => (
                    <div key={perk} className="flex items-center gap-2 text-xs text-muted">
                      <span className="text-terracotta">—</span>
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={onOpenReserve}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-sand hover:text-terracotta transition-colors font-medium pt-2"
              >
                <span>Konsultasikan Kemitraan</span>
                <ArrowUpRight size={13} />
              </button>
            </div>
          ))}
        </div>

        {/* Editorial Press Reviews (Literary Citation Layout) */}
        <div className="border border-line bg-surface p-8 md:p-12">
          <div className="text-xs text-muted uppercase tracking-wider mb-6 pb-3 border-b border-line">
            Kutipan Media & Catatan Kurasi
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
            {REVIEWS.map((rev, i) => (
              <div key={i} className="flex flex-col justify-between">
                <blockquote className="font-serif text-lg sm:text-xl text-cream font-normal leading-relaxed italic mb-6">
                  "{rev.quote}"
                </blockquote>

                <div className="flex items-center gap-3 text-xs uppercase tracking-wider text-muted pt-3 border-t border-line font-sans">
                  <span className="text-sand font-medium">{rev.source}</span>
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
