import { X, CheckCircle2, Star, Shield, MessageCircle, ArrowRight } from 'lucide-react';
import { InsuranceSolution } from '../types';
import { AGENCY_INFO } from '../data/content';

interface SolutionDetailModalProps {
  solution: InsuranceSolution | null;
  onClose: () => void;
  onOpenDevis: (type?: 'auto' | 'habitation' | 'sante' | 'pro') => void;
}

export default function SolutionDetailModal({
  solution,
  onClose,
  onOpenDevis,
}: SolutionDetailModalProps) {
  if (!solution) return null;

  const getDevisType = (): 'auto' | 'habitation' | 'sante' | 'pro' => {
    if (solution.id === 'auto' || solution.id === 'moto') return 'auto';
    if (solution.id === 'habitation') return 'habitation';
    if (solution.id === 'sante') return 'sante';
    return 'pro';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/65 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-[#0F2B5C] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-sky-200 text-xs font-bold tracking-tight mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>{solution.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white mb-2">
            {solution.title}
          </h2>

          <p className="text-sm text-slate-200 leading-relaxed max-w-xl">
            {solution.shortDesc}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Detailed Presentation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Présentation détaillée
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              {solution.fullDesc}
            </p>
          </div>

          {/* Guarantees List */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Garanties & Couvertures incluses
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {solution.guarantees.map((guarantee, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{guarantee}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Avantages AXA Assurances Echkili
            </h3>
            <div className="space-y-2">
              {solution.advantages.map((adv, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Star className="w-4 h-4 text-[#E11D2A] fill-current flex-shrink-0 mt-0.5" />
                  <span>{adv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience */}
          <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100 text-xs sm:text-sm text-slate-700">
            <strong className="font-bold text-[#0F2B5C] block mb-1">Pour qui ?</strong>
            {solution.targetAudience}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={() => {
              onClose();
              onOpenDevis(getDevisType());
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#0072F5] hover:bg-[#005EC4] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <span>Demander un devis immédiat</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=${encodeURIComponent(solution.whatsappMessage)}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-xs flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Échanger sur WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
