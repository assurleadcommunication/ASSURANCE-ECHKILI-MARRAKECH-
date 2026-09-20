/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import NotreAgenceSection from './components/NotreAgenceSection';
import ValuesSection from './components/ValuesSection';
import SolutionsSection from './components/SolutionsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

import DevisModal from './components/DevisModal';
import AppointmentModal from './components/AppointmentModal';
import SinistreGuideModal from './components/SinistreGuideModal';
import SearchModal from './components/SearchModal';
import SolutionDetailModal from './components/SolutionDetailModal';

import { InsuranceSolution } from './types';

export default function App() {
  // Modal states
  const [isDevisOpen, setIsDevisOpen] = useState(false);
  const [devisType, setDevisType] = useState<'auto' | 'habitation' | 'sante' | 'pro'>('auto');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isSinistreOpen, setIsSinistreOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState<InsuranceSolution | null>(null);

  const handleOpenDevis = (type: 'auto' | 'habitation' | 'sante' | 'pro' = 'auto') => {
    setDevisType(type);
    setIsDevisOpen(true);
  };

  const handleSelectSolution = (solution: InsuranceSolution) => {
    setSelectedSolution(solution);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0072F5] selection:text-white flex flex-col">
      {/* Top Header */}
      <Header
        onOpenDevis={() => handleOpenDevis('auto')}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onOpenSinistre={() => setIsSinistreOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Slider with 3 Slides (Auto, Pro/Riad, Famille/Santé) */}
        <HeroSlider
          onOpenDevis={handleOpenDevis}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />

        {/* Missions & Valeurs Section (Monté d'un pas, directement sous le Hero) */}
        <ValuesSection />

        {/* Section Stylisée Notre Agence (Matching Screenshot) */}
        <NotreAgenceSection
          onOpenSinistre={() => setIsSinistreOpen(true)}
          onOpenAppointment={() => setIsAppointmentOpen(true)}
        />

        {/* Catalogue AXA Maroc Solutions (Matching Screenshots 5 & 6) */}
        <SolutionsSection
          onSelectSolution={handleSelectSolution}
          onOpenDevis={handleOpenDevis}
        />

        {/* Contact Form & Direct Inquiries */}
        <ContactSection />
      </main>

      {/* Official Agency Footer */}
      <Footer
        onOpenDevis={handleOpenDevis}
        onOpenSinistre={() => setIsSinistreOpen(true)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
      />

      {/* Persistent Floating Quick Buttons (WhatsApp + Scroll To Top + Mobile Dock) */}
      <FloatingActions
        onOpenDevis={() => handleOpenDevis('auto')}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
      />

      {/* MODALS */}
      {isDevisOpen && (
        <DevisModal
          initialType={devisType}
          onClose={() => setIsDevisOpen(false)}
        />
      )}

      {isAppointmentOpen && (
        <AppointmentModal
          onClose={() => setIsAppointmentOpen(false)}
        />
      )}

      {isSinistreOpen && (
        <SinistreGuideModal
          onClose={() => setIsSinistreOpen(false)}
        />
      )}

      {isSearchOpen && (
        <SearchModal
          onClose={() => setIsSearchOpen(false)}
          onSelectSolution={handleSelectSolution}
          onOpenDevis={handleOpenDevis}
        />
      )}

      {selectedSolution && (
        <SolutionDetailModal
          solution={selectedSolution}
          onClose={() => setSelectedSolution(null)}
          onOpenDevis={handleOpenDevis}
        />
      )}
    </div>
  );
}
