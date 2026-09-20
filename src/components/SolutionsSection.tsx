import { useState } from 'react';
import { 
  User, 
  Briefcase, 
  LayoutGrid, 
  Car, 
  Home, 
  HeartPulse, 
  TrendingUp, 
  Bike, 
  Plane, 
  Users, 
  Shield, 
  Truck, 
  HardHat, 
  Building2, 
  ChevronRight,
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { SOLUTIONS_LIST, AGENCY_INFO } from '../data/content';
import { InsuranceSolution } from '../types';

interface SolutionsSectionProps {
  onSelectSolution: (solution: InsuranceSolution) => void;
  onOpenDevis: (type?: 'auto' | 'habitation' | 'sante' | 'pro') => void;
}

export default function SolutionsSection({ onSelectSolution, onOpenDevis }: SolutionsSectionProps) {
  const [activeTab, setActiveTab] = useState<'particuliers' | 'professionnels' | 'all'>('particuliers');

  const filteredSolutions = SOLUTIONS_LIST.filter(sol => {
    if (activeTab === 'all') return true;
    return sol.category === activeTab;
  });

  const getSolutionIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#1E314B] stroke-[1.6]";
    switch (iconName) {
      case 'car':
        return <Car className={iconClass} />;
      case 'home':
        return <Home className={iconClass} />;
      case 'heart-pulse':
        return <HeartPulse className={iconClass} />;
      case 'trending-up':
        return <TrendingUp className={iconClass} />;
      case 'bike':
        return <Bike className={iconClass} />;
      case 'plane':
        return <Plane className={iconClass} />;
      case 'briefcase':
        return <Briefcase className={iconClass} />;
      case 'users':
        return <Users className={iconClass} />;
      case 'shield':
        return <Shield className={iconClass} />;
      case 'truck':
        return <Truck className={iconClass} />;
      case 'hard-hat':
        return <HardHat className={iconClass} />;
      case 'building-2':
        return <Building2 className={iconClass} />;
      default:
        return <Shield className={iconClass} />;
    }
  };

  return (
    <section id="solutions" className="relative w-full py-14 sm:py-24 bg-[#0F2B5C] bg-gradient-to-b from-[#0D254F] via-[#0F2B5C] to-[#0A1E40] text-white overflow-hidden">
      
      {/* Background Overlapping Elliptical Loops (Luminous Sky & White on Blue) */}
      <div 
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none" 
        aria-hidden="true"
      >
        {/* Top-Left Overlapping Organic Loops */}
        <svg 
          className="absolute -top-10 -left-10 w-[480px] h-[440px] sm:w-[580px] sm:h-[520px]"
          viewBox="0 0 600 550" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse 
            cx="110" 
            cy="110" 
            rx="130" 
            ry="190" 
            transform="rotate(-24 110 110)" 
            stroke="#38BDF8" 
            strokeWidth="1.8" 
            strokeOpacity="0.25"
          />
          <ellipse 
            cx="100" 
            cy="130" 
            rx="180" 
            ry="250" 
            transform="rotate(-18 100 130)" 
            stroke="#FFFFFF" 
            strokeWidth="1.8" 
            strokeOpacity="0.15"
          />
          <ellipse 
            cx="120" 
            cy="140" 
            rx="240" 
            ry="320" 
            transform="rotate(-14 120 140)" 
            stroke="#38BDF8" 
            strokeWidth="1.8" 
            strokeOpacity="0.2"
          />
          <ellipse 
            cx="140" 
            cy="150" 
            rx="310" 
            ry="400" 
            transform="rotate(-10 140 150)" 
            stroke="#FFFFFF" 
            strokeWidth="1.6" 
            strokeOpacity="0.12"
          />
        </svg>

        {/* Bottom-Right Overlapping Organic Loops */}
        <svg 
          className="absolute -bottom-14 -right-10 w-[520px] h-[480px] sm:w-[620px] sm:h-[560px]" 
          viewBox="0 0 650 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse 
            cx="520" 
            cy="470" 
            rx="140" 
            ry="200" 
            transform="rotate(-22 520 470)" 
            stroke="#38BDF8" 
            strokeWidth="1.8" 
            strokeOpacity="0.25"
          />
          <ellipse 
            cx="490" 
            cy="440" 
            rx="200" 
            ry="270" 
            transform="rotate(-18 490 440)" 
            stroke="#FFFFFF" 
            strokeWidth="1.8" 
            strokeOpacity="0.15"
          />
          <ellipse 
            cx="460" 
            cy="410" 
            rx="270" 
            ry="350" 
            transform="rotate(-14 460 410)" 
            stroke="#38BDF8" 
            strokeWidth="1.8" 
            strokeOpacity="0.2"
          />
          <ellipse 
            cx="430" 
            cy="380" 
            rx="350" 
            ry="430" 
            transform="rotate(-10 430 380)" 
            stroke="#FFFFFF" 
            strokeWidth="1.6" 
            strokeOpacity="0.12"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Centered Red Bar */}
        <div className="w-10 sm:w-12 h-1 bg-[#E11D2A] rounded-full mx-auto mb-3.5 sm:mb-4 shadow-sm" />

        {/* Section Heading with Serif Font (Matching Missions & Valeurs style) */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 
            className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Nos Solutions Particuliers <span className="font-serif italic font-normal text-sky-200">&</span> Professionnels
          </h2>
          
          <p className="text-[13.5px] sm:text-[15px] text-blue-100/90 leading-relaxed max-w-2xl mx-auto font-normal">
            Conçues pour répondre aux réalités du marché marocain, avec la solidité financière d'AXA et la{' '}
            <strong className="text-white font-bold underline decoration-sky-400/40 decoration-2 underline-offset-4">
              proximité de votre Agent Général à Marrakech.
            </strong>
          </p>
        </div>

        {/* Filter Tabs (Refined pill style on dark blue) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-10 sm:mb-12">
          <button
            onClick={() => setActiveTab('particuliers')}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-200 cursor-pointer ${
              activeTab === 'particuliers'
                ? 'bg-white text-[#0F2B5C] shadow-lg shadow-black/20 scale-[1.02]'
                : 'bg-white/10 hover:bg-white/20 text-blue-100 hover:text-white border border-white/15 backdrop-blur-xs'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Assurance Particuliers (6)</span>
          </button>

          <button
            onClick={() => setActiveTab('professionnels')}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-200 cursor-pointer ${
              activeTab === 'professionnels'
                ? 'bg-white text-[#0F2B5C] shadow-lg shadow-black/20 scale-[1.02]'
                : 'bg-white/10 hover:bg-white/20 text-blue-100 hover:text-white border border-white/15 backdrop-blur-xs'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Professionnels & Entreprises (6)</span>
          </button>

          <button
            onClick={() => setActiveTab('all')}
            className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold transition-all duration-200 cursor-pointer ${
              activeTab === 'all'
                ? 'bg-white text-[#0F2B5C] shadow-lg shadow-black/20 scale-[1.02]'
                : 'bg-white/10 hover:bg-white/20 text-blue-100 hover:text-white border border-white/15 backdrop-blur-xs'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Toutes les Solutions (12)</span>
          </button>
        </div>

        {/* Cards Grid (Clean white cards popping against dark blue canvas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-14">
          {filteredSolutions.map((solution) => (
            <div
              key={solution.id}
              className="bg-white text-slate-900 rounded-[18px] border border-white/20 p-6 flex flex-col justify-between min-h-[220px] shadow-[0_10px_25px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.28)] hover:-translate-y-1.5 transition-all duration-300 group relative"
            >
              <div>
                {/* Header of card: Wireframe icon + subtle badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-blue-50/80 transition-colors">
                    {getSolutionIcon(solution.icon)}
                  </div>
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-50 border border-slate-100/90 px-2.5 py-0.5 rounded-full">
                    {solution.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 
                  className="text-[17px] sm:text-[18px] font-bold text-[#0F2B5C] tracking-tight mb-2 group-hover:text-[#0072F5] transition-colors"
                >
                  {solution.title}
                </h3>

                {/* Card Short Description */}
                <p className="text-[12.5px] sm:text-[13px] text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {solution.shortDesc}
                </p>
              </div>

              {/* Card Footer with Découvrir l'offre and WhatsApp button */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onSelectSolution(solution)}
                  className="text-[#E11D2A] hover:text-red-700 font-bold text-xs uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer group-hover:translate-x-0.5 duration-200"
                >
                  <span>Découvrir l'offre</span>
                  <ChevronRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>

                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=${encodeURIComponent(solution.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Demander des informations sur WhatsApp pour ${solution.title}`}
                  className="w-8 h-8 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-xs hover:scale-110 active:scale-95 transition-transform"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Quick Quote Simulator prompt */}
        <div className="bg-white/10 border border-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-white shadow-xl">
          <div className="text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1 block">
              Simulation rapide & sans engagement
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mb-1.5" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              Besoin d'un tarif immédiat pour votre assurance ?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100/90">
              Estimez votre prime automobile, habitation ou prévoyance en 2 minutes chrono.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onOpenDevis('auto')}
              className="px-5 py-2.5 bg-[#E11D2A] hover:bg-[#C01520] text-white text-xs sm:text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Simulateur en ligne</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=${encodeURIComponent("Bonjour Echkili Assurances, je souhaite être conseillé pour choisir la meilleure offre d'assurance.")}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-white text-[#0F2B5C] hover:bg-blue-50 text-xs sm:text-sm font-bold rounded-xl transition-all flex items-center gap-2 shadow-md hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
              <span>Conseil WhatsApp direct</span>
            </a>
          </div>
        </div>

        {/* Centered Closing Takeaway (refined light text on blue) */}
        <div className="text-center mt-10 text-[12.5px] sm:text-[13.5px] text-blue-200/80 font-normal">
          <p>
            À travers ses solutions et ses services, AXA Maroc cherche à offrir{' '}
            <strong className="text-white font-semibold">une protection durable, adaptée aux</strong>
          </p>
          <div className="flex items-center justify-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
            <span className="text-white font-bold text-[12.5px] sm:text-[13.5px]">
              nouveaux modes de vie et aux enjeux contemporains.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
