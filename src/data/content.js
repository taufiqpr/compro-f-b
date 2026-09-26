// Data konten untuk NÚA Culinary & Roastery
// Menggunakan pendekatan editorial, storytelling asli, dan foto kuliner alami beresolusi tinggi (Unsplash)

export const BRAND_INFO = {
  name: "NÚA",
  fullName: "NÚA Culinary & Roastery",
  tagline: "Honoring Terroir. Crafted for Savor.",
  description: "Kelompok kuliner artisan yang memadukan roastery kopi nusantara, peragian roti alami, dan hidangan berbasis api kayu bakar dalam satu kesatuan pengalaman indrawi.",
  foundedYear: 2018,
  status: "Buka Hari Ini: 07:30 — 22:30 WIB",
  contact: {
    email: "concierge@nuaculinary.id",
    phone: "+62 812-8899-2345",
    instagram: "@nua.culinary",
  }
};

export const METRICS = [
  {
    value: "100%",
    suffix: "",
    label: "Regenerative Sourcing",
    subtext: "Biji kopi & rempah langsung dari 12 koperasi petani nusantara."
  },
  {
    value: "48",
    suffix: " Jam",
    label: "Fermentasi Alami",
    subtext: "Adonan sourdough liar tanpa ragi instan dan zat aditif."
  },
  {
    value: "3",
    suffix: " Sanctuary Spaces",
    label: "Ruang Restoratif",
    subtext: "Arsitektur ramah alam di Senopati, Dago Pakar, dan Canggu."
  },
  {
    value: "14.000+",
    suffix: "/Bulan",
    label: "Cangkir Terseduh",
    subtext: "Profil sangrai micro-batch dengan kurva suhu presisi."
  }
];

export const CATEGORIES = [
  { id: "roastery", name: "Specialty Roastery", subtitle: "Single-origin micro lot" },
  { id: "bakery", name: "Artisan Sourdough", subtitle: "Wild yeast & ancient grains" },
  { id: "kitchen", name: "Wood-Fire Kitchen", subtitle: "Smoked & slow-braised" },
  { id: "botanical", name: "Botanical Elixir", subtitle: "Herbal & fermented drinks" }
];

export const MENU_ITEMS = [
  {
    id: 1,
    categoryId: "roastery",
    title: "Kerinci Anaerobic Natural",
    origin: "Kayu Aro, Jambi · 1.650 MASL",
    process: "72h Anaerobic Fermentation",
    notes: ["Wild Strawberry", "Bergamot", "Raw Honey"],
    price: "IDR 58.000",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=900&auto=format&fit=crop",
    highlight: "Harvest 2026 Batch",
    description: "Kopi aromatik dengan keasaman segar mirip buah berry matang dan akhir rasa madu hutan Sumatera yang berkepanjangan."
  },
  {
    id: 2,
    categoryId: "roastery",
    title: "Toraja Sapan Washed",
    origin: "Tana Toraja, Sulsel · 1.800 MASL",
    process: "Classic Wet Process",
    notes: ["Dark Chocolate", "Cedarwood", "Dried Fig"],
    price: "IDR 52.000",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop",
    highlight: "Signature Espresso",
    description: "Karakter tubuh kopi yang tebal, aroma rempah kayu manis, dan sentuhan cokelat pekat Sulawesi yang seimbang."
  },
  {
    id: 3,
    categoryId: "bakery",
    title: "Ancient Grain Country Loaf",
    origin: "Organic Rye, Spelt & Stoneground Wheat",
    process: "48-Hour Cold Proofing",
    notes: ["Crisp Crust", "Custardy Crumb", "Nutty Finish"],
    price: "IDR 72.000",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=900&auto=format&fit=crop",
    highlight: "Baked Fresh 07:00 & 14:00",
    description: "Kerak renyah berwarna karamel keemasan dengan rongga dalam yang kenyal, kaya asam laktat alami yang ramah pencernaan."
  },
  {
    id: 4,
    categoryId: "bakery",
    title: "Cardamom & Orange Morning Bun",
    origin: "Laminated Brioche & Madagascan Vanilla",
    process: "Single Origin Butter Fold",
    notes: ["Fresh Citrus", "Crushed Cardamom", "Golden Caramel"],
    price: "IDR 44.000",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=900&auto=format&fit=crop",
    highlight: "Guest Favorite",
    description: "Lapisan pastry renyah bermentega tinggi yang digulung dengan gula tebu organik, kapulaga tumbuk, dan kulit jeruk segar."
  },
  {
    id: 5,
    categoryId: "kitchen",
    title: "Rambutan Wood Smoked Wagyu",
    origin: "Ranger Valley Wagyu MB5+ · Kayu Rambutan Tua",
    process: "14h Low & Slow Ember Smoke",
    notes: ["Sweet Smoke Aroma", "Bone Marrow Glaze", "Fermented Sambal"],
    price: "IDR 245.000",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=900&auto=format&fit=crop",
    highlight: "Dinner Hearth Only",
    description: "Daging wagyu lembut diasapi perlahan menggunakan bara kayu buah lokal, disajikan dengan jus sumsum tulang dan garam laut Bali."
  },
  {
    id: 6,
    categoryId: "kitchen",
    title: "Charred Heirloom Carrots & Labneh",
    origin: "Lembang High Organic Farm",
    process: "Direct Coal Charred",
    notes: ["Smoked Paprika", "House Whipped Labneh", "Pistachio Dukkah"],
    price: "IDR 88.000",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=900&auto=format&fit=crop",
    highlight: "Vegetarian Fire Craft",
    description: "Wortel pusaka panggang arang dengan kemanisan karamel alami, beralaskan labneh asam segar dan taburan rempah renyah."
  },
  {
    id: 7,
    categoryId: "botanical",
    title: "Wild Ginger & Pine Kombucha",
    origin: "Raw Highland Honey & Wild Yeast SCOBY",
    process: "14-Day Micro Fermentation",
    notes: ["Effervescent", "Spicy Zing", "Forest Pine Needle"],
    price: "IDR 48.000",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=900&auto=format&fit=crop",
    highlight: "Probiotic Living Drink",
    description: "Kombucha berbuih alami dengan rempah jahe liar pegunungan dan sari jarum pinus yang menyegarkan tubuh."
  },
  {
    id: 8,
    categoryId: "botanical",
    title: "Cold Brew Cascara Spritz",
    origin: "Gayo Organic Coffee Cherry Husks",
    process: "Slow Cold Extraction 24h",
    notes: ["Tamarind", "Hibiscus Floral", "Sparkling Spring Water"],
    price: "IDR 46.000",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?q=80&w=900&auto=format&fit=crop",
    highlight: "Zero Waste Initiative",
    description: "Ekstrak kulit buah kopi yang manis asam seperti kismis dan kembang sepatu, diinfus dengan soda air mata air alami."
  }
];

export const SPACES = [
  {
    id: "senopati",
    city: "Jakarta Selatan",
    name: "The Glasshouse Roastery",
    address: "Jl. Senopati No. 42, Kebayoran Baru",
    ambience: "Rumah kaca bernuansa kayu jati daur ulang dengan open-counter roastery 15kg.",
    hours: "Senin – Minggu: 07:30 – 22:00 WIB",
    capacity: "85 Kursi · 2 Ruang Privat",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "dago",
    city: "Bandung",
    name: "The Pine Sanctuary",
    address: "Jl. Rancakendal Luhur No. 8, Dago Pakar",
    ambience: "Balkon terbuka menghadap lembah pinus dengan tungku perapian kayu dan udara sejuk pegunungan.",
    hours: "Senin – Minggu: 08:00 – 21:00 WIB",
    capacity: "120 Kursi · Outdoor Garden Terrace",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: "canggu",
    city: "Bali",
    name: "The Ember & Clay Compound",
    address: "Jl. Pantai Batu Mejan, Canggu, Badung",
    ambience: "Paviliun tanah liat ramah lingkungan dengan dapur api terbuka dan kebun rempah organik.",
    hours: "Senin – Minggu: 07:00 – 23:00 WITA",
    capacity: "95 Kursi · Chef's Tasting Table",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop"
  }
];

export const B2B_SERVICES = [
  {
    number: "01",
    title: "Wholesale & Cafe Partner Program",
    desc: "Suplai rutin biji kopi sangrai single-origin & blend kustom untuk cafe independen, hotel butik, dan kantor, lengkap dengan kalibrasi mesin mingguan.",
    perks: ["Profil Sangrai Eksklusif", "Barista Training & Kalibrasi", "Garansi Kesegaran Batch"]
  },
  {
    number: "02",
    title: "Corporate Gifting & Artisan Hampers",
    desc: "Bingkisan mewah berisikan biji kopi langka, kue fermentasi, madu hutan murni, dan keramik buatan tangan seniman lokal untuk rekanan bisnis Anda.",
    perks: ["Custom Logo & Wooden Box Packaging", "Kurasi Produk Berkelanjutan", "Pengiriman Multi-Kota"]
  },
  {
    number: "03",
    title: "Private Dinners & Hearth Takeovers",
    desc: "Penyewaan ruang eksklusif dengan kurasi 6-course wood-fire tasting menu pribadi yang disajikan langsung oleh Executive Chef kami.",
    perks: ["Kapasitas 12-40 Tamu", "Wine & Botanical Pairing", "Audio & Visual Privat"]
  }
];

export const REVIEWS = [
  {
    quote: "NÚA membuktikan bahwa kemewahan kuliner sejati tidak terletak pada bahan impor mahal, melainkan pada ketelitian memperlakukan hasil bumi nusantara dengan teknik artisan kelas dunia.",
    source: "Jakarta Epicurean Journal",
    year: "Catatan Kurasi 2025"
  },
  {
    quote: "Kombinasi antara arsitektur ruang yang tenang dan aroma roti sourdough yang baru keluar dari tungku membuat kunjungan ke sini serasa meditasi.",
    source: "Architectural & Living Asia",
    year: "Design Review 2026"
  }
];
