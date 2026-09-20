import { useState } from 'react';
import { ChevronDown, ChevronUp, ShieldAlert, PhoneCall, ArrowRight } from 'lucide-react';

interface NotreAgenceSectionProps {
  onOpenSinistre: () => void;
  onOpenAppointment?: () => void;
}

export default function NotreAgenceSection({ 
  onOpenSinistre,
  onOpenAppointment 
}: NotreAgenceSectionProps) {
  const [isAccidentOpen, setIsAccidentOpen] = useState(false);

  return (
    <section id="notre-agence" className="relative w-full py-12 sm:py-20 bg-white overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Stylized Team Photo with Decorative Elements */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
            
            {/* Top-Left Blue Dotted Matrix Pattern */}
            <div 
              className="absolute -top-7 -left-5 sm:-top-8 sm:-left-8 grid grid-cols-6 gap-2.5 sm:gap-3 z-0 pointer-events-none select-none opacity-85"
              aria-hidden="true"
            >
              {[...Array(30)].map((_, i) => (
                <span 
                  key={i} 
                  className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#0072F5]"
                />
              ))}
            </div>

            {/* Bottom-Left Circular Striped Badge */}
            <div 
              className="absolute -bottom-8 -left-6 sm:-bottom-10 sm:-left-8 w-20 h-20 sm:w-28 sm:h-28 rounded-full z-0 pointer-events-none select-none overflow-hidden"
              aria-hidden="true"
            >
              <svg 
                viewBox="0 0 100 100" 
                className="w-full h-full text-[#0072F5] opacity-80"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="3.5"
              >
                <line x1="-20" y1="10" x2="120" y2="10" transform="rotate(-45 50 50)" />
                <line x1="-20" y1="22" x2="120" y2="22" transform="rotate(-45 50 50)" />
                <line x1="-20" y1="34" x2="120" y2="34" transform="rotate(-45 50 50)" />
                <line x1="-20" y1="46" x2="120" y2="46" transform="rotate(-45 50 50)" />
                <line x1="-20" y1="58" x2="120" y2="58" transform="rotate(-45 50 50)" />
                <line x1="-20" y1="70" x2="120" y2="70" transform="rotate(-45 50 50)" />
                <line x1="-20" y1="82" x2="120" y2="82" transform="rotate(-45 50 50)" />
                <line x1="-20" y1="94" x2="120" y2="94" transform="rotate(-45 50 50)" />
                <line x1="-20" y1="106" x2="120" y2="106" transform="rotate(-45 50 50)" />
              </svg>
            </div>

            {/* Main Photo Card Container */}
            <div className="relative z-10 w-full max-w-[480px]">
              
              {/* Solid Red Accent Block protruding on the bottom-right corner */}
              <div 
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-28 sm:w-36 h-36 sm:h-48 bg-[#E11D2A] rounded-br-2xl z-0"
                aria-hidden="true"
              />

              {/* White Card holding the team image */}
              <div className="relative z-10 bg-white p-2.5 sm:p-3 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.08)] border border-slate-100 overflow-hidden">
                <img 
                  src="/images/agency-advisor.jpg?v=advisor1" 
                  alt="Conseiller Echkili Assurances AXA Marrakech"
                  className="w-full h-auto aspect-[4/3] object-cover rounded-xl shadow-xs"
                  loading="lazy"
                />
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Stylized Typography and Concise Information */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Eyebrow in Red */}
            <span className="text-[#E11D2A] font-bold text-sm sm:text-base tracking-wide mb-2 block uppercase">
              ECHKILI ASSURANCES
            </span>

            {/* Main Statement Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-[#1E293B] leading-snug tracking-tight mb-4">
              Est une agence générale d'assurance au Maroc .
            </h2>

            {/* Clean Sub-paragraph */}
            <p className="text-slate-600 text-[14.5px] sm:text-[15.5px] leading-relaxed mb-6 sm:mb-8 font-normal max-w-xl">
              Mérite d’être votre interlocuteur privilégié pour vos assurances ou celles de l’entreprise ou de l’institution dont vous avez la responsabilité.
            </p>

            {/* Stylized Dropdown / Callout Box */}
            <div className="bg-slate-50/80 rounded-xl border border-slate-200/80 p-4 sm:p-5 shadow-xs transition-all max-w-xl">
              
              {/* Accordion Header Toggle */}
              <button 
                onClick={() => setIsAccidentOpen(!isAccidentOpen)}
                className="w-full flex items-center justify-between text-left group"
                aria-expanded={isAccidentOpen}
              >
                <div className="flex items-center gap-2 text-[#E11D2A] font-bold text-[15px] sm:text-[16px]">
                  {isAccidentOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#E11D2A] transition-transform flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#E11D2A] transition-transform flex-shrink-0" />
                  )}
                  <span>En cas d'accident</span>
                </div>
                <span className="text-xs text-slate-400 font-medium group-hover:text-slate-600 transition-colors hidden sm:inline">
                  {isAccidentOpen ? 'Réduire' : 'En savoir plus'}
                </span>
              </button>

              {/* Summary Text (Always visible or compact) */}
              <div className="mt-2.5 text-[13.5px] sm:text-[14px] text-slate-700 leading-relaxed">
                <strong className="text-slate-900 font-bold">ECHKILI ASSURANCES</strong> vous accompagne tout au long de vos démarches{' '}
                <button 
                  onClick={onOpenSinistre}
                  className="text-[#E11D2A] font-semibold hover:underline inline-flex items-center gap-0.5 ml-1 cursor-pointer"
                >
                  Lire la suite...
                </button>
              </div>

              {/* Expandable Helpful Details (Clean and not overloaded) */}
              {isAccidentOpen && (
                <div className="mt-4 pt-3.5 border-t border-slate-200/80 text-[13px] sm:text-[13.5px] text-slate-600 space-y-2.5 animate-fadeIn">
                  <div className="flex items-start gap-2.5">
                    <ShieldAlert className="w-4 h-4 text-[#E11D2A] flex-shrink-0 mt-0.5" />
                    <span>Sécurisez les lieux et remplissez le constat amiable avec précision.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <PhoneCall className="w-4 h-4 text-[#0072F5] flex-shrink-0 mt-0.5" />
                    <span>Contactez notre assistance au <strong>05 25 36 30 61</strong> ou WhatsApp <strong>06 67 76 21 24</strong>.</span>
                  </div>
                  <div className="pt-2 flex flex-wrap gap-2.5">
                    <button
                      onClick={onOpenSinistre}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#E11D2A] text-white rounded-lg text-xs font-semibold hover:bg-[#C01520] transition-colors shadow-xs"
                    >
                      <span>Ouvrir le guide complet du sinistre</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {onOpenAppointment && (
                      <button
                        onClick={onOpenAppointment}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors"
                      >
                        Prendre RDV en agence
                      </button>
                    )}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
