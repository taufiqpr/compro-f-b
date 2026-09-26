import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Philosophy from './components/Philosophy';
import MenuShowcase from './components/MenuShowcase';
import Spaces from './components/Spaces';
import ServicesB2B from './components/ServicesB2B';
import Footer from './components/Footer';
import ReservationModal from './components/ReservationModal';

export default function App() {
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);

  const handleOpenReserve = () => {
    setIsReserveModalOpen(true);
  };

  const handleCloseReserve = () => {
    setIsReserveModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0F0E0D] text-[#DDD6CA] font-sans selection:bg-[#C05A3E] selection:text-white relative overflow-x-hidden">
      {/* Sticky Smart Navigation */}
      <Navbar onOpenReserve={handleOpenReserve} />

      {/* Main Content Sections */}
      <main>
        {/* Hero Section with Staggered Entrance Animation */}
        <Hero onOpenReserve={handleOpenReserve} />

        {/* Infinite Running Marquee Ribbon */}
        <Marquee />

        {/* Section 01: The Philosophy & Terroir Storytelling + Animated Metrics */}
        <Philosophy />

        {/* Section 02: Signature Culinary Offerings & Interactive Category Filter */}
        <MenuShowcase onOpenReserve={handleOpenReserve} />

        {/* Section 03: Sanctuary Spaces & Architecture Outlets (Jakarta, Bandung, Bali) */}
        <Spaces onOpenReserve={handleOpenReserve} />

        {/* Section 04: B2B Partnerships, Roasting Wholesale & Editorial Reviews */}
        <ServicesB2B onOpenReserve={handleOpenReserve} />
      </main>

      {/* Editorial Footer with Instagram Visual Feed & Concierge Inquiries */}
      <Footer onOpenReserve={handleOpenReserve} />

      {/* Interactive Reservation Drawer / Modal */}
      <ReservationModal
        isOpen={isReserveModalOpen}
        onClose={handleCloseReserve}
      />
    </div>
  );
}
