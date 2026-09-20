import { useState } from 'react';
import { 
  X, 
  AlertTriangle, 
  Car, 
  Home, 
  Sparkles, 
  ShieldAlert, 
  PhoneCall, 
  CheckCircle2, 
  FileText,
  MessageCircle
} from 'lucide-react';
import { SINISTRE_GUIDES, AGENCY_INFO } from '../data/content';

interface SinistreGuideModalProps {
  onClose: () => void;
}

export default function SinistreGuideModal({ onClose }: SinistreGuideModalProps) {
  const [activeGuideId, setActiveGuideId] = useState<string>('auto');

  const currentGuide = SINISTRE_GUIDES.find(g => g.id === activeGuideId) || SINISTRE_GUIDES[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Urgent Red Banner */}
        <div className="bg-[#B91C1C] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-rose-200 text-xs font-extrabold uppercase tracking-wider mb-2">
            <AlertTriangle className="w-4 h-4" />
            <span>Assistance Urgence 24h/24 & 7j/7</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Que faire en cas de sinistre ?
          </h2>
          <p className="text-xs sm:text-sm text-rose-100 mt-1 max-w-lg">
            Gardez votre calme. Notre équipe d'experts à Marrakech vous guide pas à pas pour sécuriser votre prise en charge et votre indemnisation.
          </p>

          {/* Quick Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">
            {SINISTRE_GUIDES.map(guide => (
              <button
                key={guide.id}
                onClick={() => setActiveGuideId(guide.id)}
                className={`py-2 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  activeGuideId === guide.id ? 'bg-white text-[#B91C1C] shadow-md' : 'bg-black/20 text-white hover:bg-black/30'
                }`}
              >
                <span>{guide.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Urgent Notice Alert Box */}
          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block mb-0.5">Consigne immédiate de sécurité :</strong>
              {currentGuide.urgentNotice}
            </div>
          </div>

          {/* Steps List */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Démarches pas à pas
            </h3>
            <div className="space-y-3">
              {currentGuide.steps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <div className="w-6 h-6 rounded-full bg-[#0F2B5C] text-white flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="leading-relaxed">{step}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Documents Required */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Pièces & documents indispensables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentGuide.documents.map((doc, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 p-2.5 rounded-lg border border-slate-100 bg-white">
                  <FileText className="w-4 h-4 text-[#0072F5] flex-shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Agency drop-off address notice */}
          <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 text-xs sm:text-sm text-slate-700">
            <strong className="text-[#0F2B5C] font-bold block mb-1">Dépôt physique de votre dossier :</strong>
            Agence Echkili Assurances - Rdc magasin 2, Immeuble Erraha N°8, Av Guemassa, Mhamid Marrakech (Lundi au Vendredi de 08h30 à 18h30 en continu).
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`tel:${currentGuide.emergencyContact}`}
            className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-[#B91C1C] hover:bg-red-800 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Appeler l'assistance dépannage ({currentGuide.emergencyContact})</span>
          </a>

          <a
            href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=URGENCE%20SINISTRE%20:%20Bonjour,%20je%20d%C3%A9clare%20un%20sinistre%20(${encodeURIComponent(currentGuide.title)})`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-sm shadow-xs flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Déclaration rapide WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
