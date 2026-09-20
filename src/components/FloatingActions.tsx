import { useState, useEffect } from 'react';
import { MessageCircle, ArrowUp, Phone, Calendar, Calculator } from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

interface FloatingActionsProps {
  onOpenDevis: () => void;
  onOpenAppointment: () => void;
}

export default function FloatingActions({ onOpenDevis, onOpenAppointment }: FloatingActionsProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating WhatsApp Button - Bottom Left (matches screenshot 1) */}
      <div className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40">
        <a
          href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=Bonjour%20Echkili%20Assurances,%20je%20souhaite%20un%20renseignement%20sur%20vos%20assurances.`}
          target="_blank"
          rel="noreferrer"
          aria-label="Contacter sur WhatsApp"
          className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <MessageCircle className="w-6 h-6 fill-current flex-shrink-0" />
          <span className="hidden sm:inline font-bold text-xs tracking-tight whitespace-nowrap">
            WhatsApp Agence
          </span>
        </a>
      </div>

      {/* Floating Scroll To Top Button - Bottom Right (matches screenshot 4) */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Remonter en haut de la page"
          className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 w-11 h-11 rounded-full bg-[#E11D2A] hover:bg-red-700 text-white shadow-xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-fadeIn"
        >
          <ArrowUp className="w-5 h-5 stroke-[2.5]" />
        </button>
      )}

      {/* Mobile-Only Bottom Navigation Dock (Optimized for mobile experience) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center justify-around shadow-2xl">
        <button
          onClick={onOpenDevis}
          className="flex flex-col items-center gap-1 text-[#0072F5] hover:text-blue-700"
        >
          <Calculator className="w-5 h-5" />
          <span className="text-[10px] font-bold">Devis 2 min</span>
        </button>

        <a
          href={`tel:${AGENCY_INFO.phone1}`}
          className="flex flex-col items-center gap-1 text-slate-700 hover:text-slate-900"
        >
          <Phone className="w-5 h-5 text-[#0F2B5C]" />
          <span className="text-[10px] font-bold">Appeler</span>
        </a>

        <a
          href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=Bonjour%20Assurances%20Echkili,%20je%20vous%20contacte%20depuis%20mon%20mobile.`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 text-[#25D366]"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        <button
          onClick={onOpenAppointment}
          className="flex flex-col items-center gap-1 text-slate-700 hover:text-slate-900"
        >
          <Calendar className="w-5 h-5 text-[#E11D2A]" />
          <span className="text-[10px] font-bold">Prendre RDV</span>
        </button>
      </div>
    </>
  );
}
