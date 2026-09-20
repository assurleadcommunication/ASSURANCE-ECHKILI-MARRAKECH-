/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import NotreAgenceSection from './components/NotreAgenceSection';
import ValuesSection from './components/ValuesSection';
import SolutionsSection from './components/SolutionsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ProductPage from './components/ProductPage';

import DevisModal from './components/DevisModal';
import AppointmentModal from './components/AppointmentModal';
import SinistreGuideModal from './components/SinistreGuideModal';
import SearchModal from './components/SearchModal';

import { InsuranceSolution } from './types';
import { SOLUTIONS_LIST } from './data/content';

export default function App() {
  // Modal states
  const [isDevisOpen, setIsDevisOpen] = useState(false);
  const [devisType, setDevisType] = useState<'auto' | 'habitation' | 'sante' | 'pro'>('auto');
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [isSinistreOpen, setIsSinistreOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Independent Product Page state (synced with URL hash)
  const [activeProduct, setActiveProduct] = useState<InsuranceSolution | null>(null);

  // Synchronisation with browser hash (#produit-[id]) for bookmarking, back/forward buttons and direct sharing
  useEffect(() => {
    const handleHashSync = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#produit-')) {
        const prodId = hash.replace('#produit-', '');
        const found = SOLUTIONS_LIST.find((s) => s.id === prodId);
        if (found) {
          setActiveProduct(found);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      if (!hash || !hash.startsWith('#produit-')) {
        setActiveProduct(null);
      }
    };

    handleHashSync();
    window.addEventListener('hashchange', handleHashSync);
    return () => window.removeEventListener('hashchange', handleHashSync);
  }, []);

  const handleOpenDevis = (type: 'auto' | 'habitation' | 'sante' | 'pro' = 'auto') => {
    setDevisType(type);
    setIsDevisOpen(true);
  };

  const handleOpenProductPage = (solution: InsuranceSolution) => {
    setActiveProduct(solution);
    window.location.hash = `produit-${solution.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenProductById = (id: string) => {
    const found = SOLUTIONS_LIST.find((s) => s.id === id);
    if (found) {
      handleOpenProductPage(found);
    } else {
      handleOpenDevis('auto');
    }
  };

  const handleBackToHome = () => {
    setActiveProduct(null);
    if (window.location.hash.startsWith('#produit-')) {
      window.history.pushState(null, '', window.location.pathname);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#0072F5] selection:text-white flex flex-col">
      {/* Top Header */}
      <Header
        onOpenDevis={() => handleOpenDevis('auto')}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onOpenSinistre={() => setIsSinistreOpen(true)}
        onOpenProductPage={handleOpenProductById}
        onGoHome={handleBackToHome}
      />

      {/* Main Content Area: Either Independent Product Page OR Full Home Page */}
      <main className="flex-1">
        {activeProduct ? (
          <ProductPage
            solution={activeProduct}
            onBack={handleBackToHome}
            onSelectOtherProduct={handleOpenProductPage}
            onOpenDevis={handleOpenDevis}
            onOpenAppointment={() => setIsAppointmentOpen(true)}
          />
        ) : (
          <>
            {/* Hero Slider with 3 Slides (Auto, Pro/Riad, Famille/Santé) */}
            <HeroSlider
              onOpenDevis={handleOpenDevis}
              onOpenAppointment={() => setIsAppointmentOpen(true)}
            />

            {/* Missions & Valeurs Section (Directement sous le Hero) */}
            <ValuesSection />

            {/* Section Stylisée Notre Agence */}
            <NotreAgenceSection
              onOpenSinistre={() => setIsSinistreOpen(true)}
              onOpenAppointment={() => setIsAppointmentOpen(true)}
            />

            {/* Catalogue AXA Maroc Solutions */}
            <SolutionsSection
              onSelectSolution={handleOpenProductPage}
              onOpenDevis={handleOpenDevis}
            />

            {/* Contact Form & Direct Inquiries */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Official Agency Footer */}
      <Footer
        onOpenDevis={handleOpenDevis}
        onOpenSinistre={() => setIsSinistreOpen(true)}
        onOpenAppointment={() => setIsAppointmentOpen(true)}
        onOpenProductPage={handleOpenProductById}
        onGoHome={handleBackToHome}
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
          onSelectSolution={handleOpenProductPage}
          onOpenDevis={handleOpenDevis}
        />
      )}
    </div>
  );
}
