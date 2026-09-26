import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send } from 'lucide-react';

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
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Slide-over Drawer Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="relative w-full max-w-lg h-full bg-[#181614] border-l border-[#2E2A27] shadow-2xl flex flex-col justify-between overflow-y-auto z-10"
          >
            {/* Header */}
            <div className="p-8 border-b border-[#26221E] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#C05A3E] uppercase tracking-widest block mb-1">
                  Atelier Concierge
                </span>
                <h3 className="font-serif text-2xl text-[#FAF7F2]">
                  Reservasi & Pertanyaan
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#9C948A] hover:text-[#FAF7F2] hover:bg-[#25221F] transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body */}
            <div className="p-8 flex-1">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#C05A3E]/15 text-[#C05A3E] flex items-center justify-center mb-6">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-serif text-2xl text-[#FAF7F2] mb-3">
                    Permintaan Diterima
                  </h4>
                  <p className="text-xs text-[#A89E90] max-w-xs leading-relaxed mb-8">
                    Terima kasih, <strong className="text-white">{formData.name}</strong>. Tim concierge NÚA akan mengonfirmasi ketersediaan meja melalui WhatsApp dalam 15 menit.
                  </p>
                  <button
                    onClick={handleReset}
                    className="bg-[#24211D] hover:bg-[#C05A3E] text-[#FAF7F2] text-xs font-semibold uppercase tracking-wider py-3 px-6 rounded-full transition-colors"
                  >
                    Tutup Jendela
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Category Type */}
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-[#A89E90] block mb-2 font-mono">
                      Pilihan Layanan
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: 'dining' })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-colors border ${
                          formData.serviceType === 'dining'
                            ? 'bg-[#C05A3E] text-white border-[#C05A3E]'
                            : 'bg-[#1C1A18] text-[#8C8377] border-[#2C2723]'
                        }`}
                      >
                        Reservasi Meja Resto
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, serviceType: 'b2b' })}
                        className={`py-2.5 px-3 rounded-xl text-xs font-medium transition-colors border ${
                          formData.serviceType === 'b2b'
                            ? 'bg-[#C05A3E] text-white border-[#C05A3E]'
                            : 'bg-[#1C1A18] text-[#8C8377] border-[#2C2723]'
                        }`}
                      >
                        Kemitraan Kopi / Event
                      </button>
                    </div>
                  </div>

                  {/* Branch Select */}
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-[#A89E90] block mb-2 font-mono">
                      Pilih Ruang Sanctuary
                    </label>
                    <select
                      value={formData.branch}
                      onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                      className="w-full bg-[#1C1A18] border border-[#2E2A27] rounded-xl py-3 px-4 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#C05A3E]"
                    >
                      <option value="Senopati, Jakarta">Senopati, Jakarta Selatan (The Glasshouse)</option>
                      <option value="Dago Pakar, Bandung">Dago Pakar, Bandung (The Pine Sanctuary)</option>
                      <option value="Canggu, Bali">Canggu, Bali (The Ember & Clay)</option>
                    </select>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wider text-[#A89E90] block mb-2 font-mono">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Contoh: Arya Pratama"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#1C1A18] border border-[#2E2A27] rounded-xl py-3 px-4 text-xs text-[#FAF7F2] placeholder-[#5C554C] focus:outline-none focus:border-[#C05A3E]"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-medium uppercase tracking-wider text-[#A89E90] block mb-2 font-mono">
                        Nomor WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+62 812-xxxx-xxxx"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#1C1A18] border border-[#2E2A27] rounded-xl py-3 px-4 text-xs text-[#FAF7F2] placeholder-[#5C554C] focus:outline-none focus:border-[#C05A3E]"
                      />
                    </div>
                  </div>

                  {/* Guests & Time */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium uppercase tracking-wider text-[#A89E90] block mb-2 font-mono">
                        Jumlah Tamu
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-[#1C1A18] border border-[#2E2A27] rounded-xl py-3 px-4 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#C05A3E]"
                      >
                        <option value="1-2 Tamu">1 – 2 Tamu</option>
                        <option value="3-4 Tamu">3 – 4 Tamu</option>
                        <option value="5-8 Tamu">5 – 8 Tamu</option>
                        <option value="Group 8+ Tamu">Group 8+ Tamu (Private Area)</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-medium uppercase tracking-wider text-[#A89E90] block mb-2 font-mono">
                        Waktu Kunjungan
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        className="w-full bg-[#1C1A18] border border-[#2E2A27] rounded-xl py-3 px-4 text-xs text-[#FAF7F2] focus:outline-none focus:border-[#C05A3E]"
                      >
                        <option value="09:00 WIB">09:00 (Morning Roast & Pastry)</option>
                        <option value="12:30 WIB">12:30 (Lunch Savor)</option>
                        <option value="18:30 WIB">18:30 (Dinner Wood-Fire Hearth)</option>
                        <option value="20:00 WIB">20:00 (Night Botanical Tasting)</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="text-xs font-medium uppercase tracking-wider text-[#A89E90] block mb-2 font-mono">
                      Catatan Tambahan / Alergi
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Beri tahu kami preferensi meja (indoor/outdoor) atau catatan alergi makanan..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#1C1A18] border border-[#2E2A27] rounded-xl p-4 text-xs text-[#FAF7F2] placeholder-[#5C554C] focus:outline-none focus:border-[#C05A3E] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-[#C05A3E] hover:bg-[#A84B32] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-[#C05A3E]/30 transform active:scale-98"
                  >
                    <span>Kirim Reservasi ke Concierge</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>

            {/* Footer Notice */}
            <div className="p-6 border-t border-[#26221E] text-center text-[11px] text-[#7A7266]">
              Atelier Concierge melayani reservasi setiap hari pukul 08:00 – 21:00 WIB.
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
