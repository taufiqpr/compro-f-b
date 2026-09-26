export default function Marquee() {
  const items = [
    'PETIK MERAH DATARAN TINGGI NUSANTARA',
    'KULTUR RAGI LIAR 48 JAM',
    'PANGGANGAN BARA KAYU RAMBUTAN',
    'MINUMAN BOTANIKAL ALAMI',
    'ETIKA SOURCING 100% TERLACAK',
    'SANCTUARY: JAKARTA · BANDUNG · BALI',
  ];

  return (
    <div className="w-full py-4 bg-[#0C0B0A] border-b border-[#262320] overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-12">
            <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#6E675D]">
              {text}
            </span>
            <span className="text-[#C05A3E] text-xs font-serif italic">§</span>
          </div>
        ))}
      </div>
    </div>
  );
}
