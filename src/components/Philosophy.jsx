import { METRICS } from '../data/content';

export default function Philosophy() {
  return (
    <section id="story" className="py-20 md:py-28 px-6 md:px-12 border-b border-line bg-dark">
      <div className="w-full max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-line mb-12 text-xs text-muted uppercase tracking-wider">
          <span>Filosofi & Asal Usul</span>
          <span className="hidden sm:inline">Dari Tanah Petani ke Meja Saji</span>
        </div>

        {/* Grand Manifesto Text Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-16 items-baseline">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cream font-normal leading-tight">
              Kami tidak mengejar kecepatan.{' '}
              <span className="italic font-serif text-terracotta">
                Kami merayakan waktu, ketelatenan tangan,
              </span>{' '}
              dan kemurnian rasa yang dihadiahkan alam.
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-4 text-sm text-sand leading-relaxed font-light">
            <p>
              Dimulai dari sebuah micro-roastery kecil pada tahun 2018 di Jakarta Selatan, NÚA lahir dari kegelisahan terhadap budaya kuliner cepat saji. Kami percaya bahwa rasa sejati membutuhkan waktu: kopi yang dipetik saat matang optimal, adonan yang difermentasi berhari-hari, dan kayu bakar yang dikeringkan dengan sabar.
            </p>
            <p>
              Kami bermitra langsung dengan 12 kelompok tani di Gayo, Kerinci, Toraja, hingga Kintamani—menghilangkan tengkulak dan memastikan setiap panen dihargai secara bermartabat.
            </p>
          </div>
        </div>

        {/* Asymmetrical Photo Essay (Showcase 1: Architectural Framing) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          {/* Main Large Image: Wood-Fire & Hearth */}
          <div className="lg:col-span-7">
            <div className="border border-line bg-surface p-2">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop"
                  alt="Dapur api kayu bakar NÚA"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="pt-2.5 pb-1 px-2 flex justify-between text-xs text-muted font-sans">
                <span>Tungku bara kayu rambutan tua</span>
                <span className="text-terracotta">Dapur Perapian</span>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted font-light max-w-lg leading-relaxed">
              Kayu buah rambutan tua yang dipangkas musiman memberikan karakter aroma asap yang manis dan lembut, tidak menusuk hidung, menyatu sempurna dengan bahan lokal.
            </p>
          </div>

          {/* Secondary Stack: Roasting & Fermentation Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="border border-line bg-surface p-2">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?q=80&w=900&auto=format&fit=crop"
                  alt="Kultur ragi liar sourdough 48 jam"
                  className="w-full h-full object-cover hover:scale-102 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>
              <div className="pt-2.5 pb-1 px-2 flex justify-between text-xs text-muted font-sans">
                <span>Peragian ragi liar alami</span>
                <span className="text-terracotta">Kultur Sejak 2018</span>
              </div>
            </div>
            <p className="text-xs text-muted font-light leading-relaxed">
              Starter ragi liar kami dirawat setiap pagi dengan tepung gandum utuh dan air mata air, menciptakan rongga roti yang kenyal serta rasa asam karamel yang kaya.
            </p>
          </div>
        </div>

        {/* Typographic Metrics Ledger (Integrated Grid) */}
        <div className="border-t border-line">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {METRICS.map((metric, i) => (
              <div
                key={metric.label}
                className={`py-8 ${
                  i < METRICS.length - 1 ? 'lg:border-r border-line lg:pr-8' : ''
                } ${i > 0 ? 'lg:pl-8' : ''} border-b lg:border-b-0 border-line`}
              >
                <div className="font-serif text-3xl sm:text-4xl text-cream font-normal tracking-tight mb-2">
                  {metric.value}
                  <span className="text-sm font-sans font-normal text-terracotta ml-1">{metric.suffix}</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-sand mb-1.5 font-medium">
                  {metric.label}
                </div>
                <p className="text-xs text-muted font-light leading-relaxed">
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
