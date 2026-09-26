import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowUpRight } from 'lucide-react';

export default function ReservationModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'dining',
    branch: 'Senopati, Jakarta',
    guests: '2 Tamu',
    date: '',
    time: '18:30 WIB',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="relative w-full max-w-lg h-full bg-dark border-l border-line shadow-2xl flex flex-col justify-between overflow-y-auto z-10"
          >
            {/* Drawer Masthead */}
            <div className="p-6 sm:p-8 border-b border-line flex items-center justify-between">
              <div>
                <span className="text-xs text-terracotta uppercase tracking-wider block mb-1 font-medium">
                  Layanan Concierge NÚA
                </span>
                <h3 className="font-serif text-2xl text-cream font-normal">
                  Reservasi & Pertanyaan
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-muted hover:text-cream transition-colors"
                aria-label="Tutup jendela"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 flex-1">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-12 h-12 border border-terracotta text-terracotta flex items-center justify-center mb-6">
                    <CheckCircle2 size={24} />
                  </div>
                  <h4 className="font-serif text-2xl text-cream font-normal mb-3">
                    Permintaan Diterima
                  </h4>
                  <p className="text-xs text-muted max-w-xs leading-relaxed mb-8 font-light">
                    Terima kasih, <strong className="text-cream font-medium">{formData.name}</strong>. Tim concierge NÚA akan mengonfirmasi ketersediaan meja melalui WhatsApp dalam 15 menit.
                  </p>
                  <button
                    onClick={handleReset}
                    className="border border-line-light hover:bg-cream hover:text-dark text-sand text-xs uppercase tracking-wider py-3 px-6 transition-colors font-medium"
                  >
                    Tutup Jendela
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Category Type Toggle */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted block mb-2 font-medium">
                      Pilihan Layanan
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: 'dining' })}
                        className={`py-3 px-4 text-xs tracking-wider transition-colors border text-left font-medium ${
                          formData.serviceType === 'dining'
                            ? 'bg-elevated text-cream border-terracotta'
                            : 'bg-dark text-muted border-line hover:text-sand'
                        }`}
                      >
                        Meja Restoran
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: 'b2b' })}
                        className={`py-3 px-4 text-xs tracking-wider transition-colors border text-left font-medium ${
                          formData.serviceType === 'b2b'
                            ? 'bg-elevated text-cream border-terracotta'
                            : 'bg-dark text-muted border-line hover:text-sand'
                        }`}
                      >
                        Kemitraan & Event
                      </button>
                    </div>
                  </div>

                  {/* Branch Select */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted block mb-2 font-medium">
                      Pilih Ruang Singgah
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full bg-surface border border-line py-3 px-4 text-xs text-cream focus:outline-none focus:border-terracotta"
                    >
                      <option value="Senopati, Jakarta">The Glasshouse — Senopati, Jakarta Selatan</option>
                      <option value="Dago Pakar, Bandung">The Pine Sanctuary — Dago Pakar, Bandung</option>
                      <option value="Canggu, Bali">The Ember & Clay — Canggu, Bali</option>
                    </select>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-muted block mb-2 font-medium">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Arya Pratama"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-surface border border-line py-3 px-4 text-xs text-cream placeholder-faint focus:outline-none focus:border-terracotta"
                      />
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-muted block mb-2 font-medium">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+62 812-xxxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-surface border border-line py-3 px-4 text-xs text-cream placeholder-faint focus:outline-none focus:border-terracotta"
                      />
                    </div>
                  </div>

                  {/* Guests & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs uppercase tracking-wider text-muted block mb-2 font-medium">
                        Jumlah Tamu
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-surface border border-line py-3 px-4 text-xs text-cream focus:outline-none focus:border-terracotta"
                      >
                        <option value="1-2 Tamu">1 – 2 Tamu</option>
                        <option value="3-4 Tamu">3 – 4 Tamu</option>
                        <option value="5-8 Tamu">5 – 8 Tamu</option>
                        <option value="Group 8+ Tamu">Grup 8+ Tamu (Ruang Privat)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs uppercase tracking-wider text-muted block mb-2 font-medium">
                        Waktu Kunjungan
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-surface border border-line py-3 px-4 text-xs text-cream focus:outline-none focus:border-terracotta"
                      >
                        <option value="09:00 WIB">09:00 (Pagi Sangrai & Pastry)</option>
                        <option value="12:30 WIB">12:30 (Makan Siang Sourdough)</option>
                        <option value="18:30 WIB">18:30 (Malam Panggangan Bara)</option>
                        <option value="20:00 WIB">20:00 (Larut Malam Botanikal)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted block mb-2 font-medium">
                      Catatan Tambahan & Alergi
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Preferensi meja (indoor/outdoor) atau pantangan bahan makanan..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-surface border border-line p-3 text-xs text-cream placeholder-faint focus:outline-none focus:border-terracotta resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3.5 border border-line-light bg-elevated hover:bg-cream hover:text-dark text-cream text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 font-medium"
                  >
                    <span>Kirim Reservasi ke Concierge</span>
                    <ArrowUpRight size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Footer Colophon */}
            <div className="p-6 border-t border-line text-center text-xs text-faint">
              Concierge NÚA melayani setiap hari: 08:00 – 21:00 WIB.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
