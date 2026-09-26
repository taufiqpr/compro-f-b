
export default function Marquee() {
  const items = [
    'SINGLE ORIGIN INDONESIAN HIGHLANDS',
    'ARTISAN 48-HOUR SOURDOUGH FERMENTATION',
    'RAMBUTAN WOOD-FIRE SMOKED HEARTH',
    'BOTANICAL WILD YEAST ELIXIRS',
    'REGENERATIVE FARMING PARTNERSHIP',
    'SANCTUARY SPACES: SENOPATI · DAGO · CANGGU',
  ];

  return (
    <div className="w-full py-5 bg-[#181614] border-y border-[#2B2723] overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {[...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#A89E90] hover:text-[#FAF7F2] transition-colors">
              {text}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#C05A3E]" />
          </div>
        ))}
      </div>
    </div>
  );
}
