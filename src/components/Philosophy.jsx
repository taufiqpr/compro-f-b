import { METRICS } from '../data/content';

export default function Philosophy() {
  return (
    <section id="story" className="py-24 md:py-32 px-6 md:px-12 border-b border-[#262320]">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between pb-6 border-b border-[#262320] mb-16 text-[11px] font-mono tracking-[0.18em] uppercase text-[#7C756B]">
          <span>KAPITEL 01 — KELAHIRAN & FILOSOFI</span>
          <span className="hidden sm:inline">DARI TANAH PETANI KE MEJA SAJI</span>
        </div>

        {/* Grand Manifesto Text Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-baseline">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#F5F2EB] font-normal leading-[1.08] tracking-[-0.025em]">
              Kami tidak mengejar kecepatan.{' '}
              <span className="italic font-serif text-[#C05A3E]">
                Kami merayakan waktu, ketelatenan tangan,
              </span>{' '}
              dan kemurnian rasa yang dihadiahkan alam.
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-5 text-sm text-[#A69E91] leading-relaxed font-light">
            <p>
              Dimulai dari sebuah micro-roastery kecil pada tahun 2018 di Jakarta Selatan, NÚA lahir dari kegelisahan terhadap budaya kuliner cepat saji. Kami percaya bahwa rasa sejati membutuhkan waktu: kopi yang dipetik saat matang optimal, adonan yang difermentasi berhari-hari, dan kayu bakar yang dikeringkan dengan sabar.
            </p>
            <p>
              Kami bermitra langsung dengan 12 kelompok tani di Gayo, Kerinci, Toraja, hingga Kintamani—menghilangkan tengkulak dan memastikan setiap panen dihargai secara bermartabat.
            </p>
          </div>
        </div>

        {/* Asymmetrical Photo Essay (Editorial Storytelling, No Card Clichés) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-24">
          {/* Main Large Image: Wood-Fire & Hearth */}
          <div className="lg:col-span-7">
            <div className="border border-[#262320] bg-[#151412] p-2">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                  alt="Dapur api kayu bakar NÚA"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="pt-3 pb-1 px-2 flex justify-between text-[11px] font-mono text-[#7C756B]">
                <span>PL. 02 — TUNGKU BARA KAYU RAMBUTAN</span>
                <span>PANGGANGAN API LANGSUNG</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-[#8C8478] font-light max-w-lg leading-relaxed">
              Kayu buah rambutan tua yang dipangkas musiman memberikan karakter aroma asap yang manis dan lembut, tidak menusuk hidung, menyatu sempurna dengan bahan lokal.
            </p>
          </div>

          {/* Secondary Stack: Roasting & Fermentation Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="border border-[#262320] bg-[#151412] p-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=900&auto=format&fit=crop"
                  alt="Kultur ragi liar sourdough 48 jam"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="pt-3 pb-1 px-2 flex justify-between text-[11px] font-mono text-[#7C756B]">
                <span>PL. 03 — PERAGIAN ALAMI</span>
                <span>KULTUR INDUK SEJAK 2018</span>
              </div>
            </div>
            <p className="text-xs text-[#8C8478] font-light leading-relaxed">
              Starter ragi liar kami dirawat setiap pagi dengan tepung gandum utuh dan air mata air, menciptakan rongga roti yang kenyal serta rasa asam karamel yang kaya.
            </p>
          </div>
        </div>

        {/* Typographic Metrics Ledger (Integrated Grid, Not Floating SaaS Cards) */}
        <div className="border-t border-[#262320]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric, i) => (
              <div
                key={metric.label}
                className={`py-8 sm:py-10 ${
                  i < METRICS.length - 1 ? 'lg:border-r border-[#262320] lg:pr-8' : ''
                } ${i > 0 ? 'lg:pl-8' : ''} border-b lg:border-b-0 border-[#262320]`}
              >
                <div className="font-serif text-4xl sm:text-5xl text-[#F5F2EB] font-normal tracking-tight mb-2">
                  {metric.value}
                  <span className="text-sm font-sans font-normal text-[#C05A3E] ml-1">{metric.suffix}</span>
                </div>
                <div className="text-xs font-mono uppercase tracking-[0.14em] text-[#C5BCB0] mb-2">
                  {metric.label}
                </div>
                <p className="text-xs text-[#7C756B] font-light leading-relaxed">
                  {metric.subtext}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
