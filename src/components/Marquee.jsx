export default function Marquee() {
  const items = [
    'Petik Merah Dataran Tinggi Nusantara',
    'Kultur Ragi Liar 48 Jam',
    'Panggangan Bara Kayu Rambutan',
    'Minuman Botanikal Alami',
    'Etika Sourcing Terlacak',
    'Ruang Singgah: Jakarta · Bandung · Bali',
  ];

  return (
    <div className="w-full py-3.5 bg-dark border-b border-line overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-10 whitespace-nowrap">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-10">
            <span className="text-xs font-sans tracking-wider uppercase text-muted">
              {text}
            </span>
            <span className="text-terracotta text-xs font-serif italic">§</span>
          </div>
        ))}
      </div>
    </div>
  );
}
