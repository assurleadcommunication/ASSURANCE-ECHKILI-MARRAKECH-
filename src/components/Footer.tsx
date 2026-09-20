import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { AGENCY_INFO } from '../data/content';

interface FooterProps {
  onOpenDevis: (type?: 'auto' | 'habitation' | 'sante' | 'pro') => void;
  onOpenSinistre: () => void;
  onOpenAppointment: () => void;
  onOpenProductPage?: (solutionId: string) => void;
  onGoHome?: () => void;
}

export default function Footer({
  onOpenDevis,
  onOpenSinistre,
  onOpenAppointment,
  onOpenProductPage,
  onGoHome,
}: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (id: string) => {
    if (onGoHome) onGoHome();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  const handleProduct = (id: string, fallbackDevis: 'auto' | 'habitation' | 'sante' | 'pro') => {
    if (onOpenProductPage) {
      onOpenProductPage(id);
    } else {
      onOpenDevis(fallbackDevis);
    }
  };

  return (
    <footer className="w-full bg-[#0B1E3F] text-white pt-16 pb-24 sm:pb-12 border-t-4 border-[#E11D2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Agency Brand & Mission */}
          <div className="space-y-4">
            <Logo variant="dark" />
            <p className="text-xs text-slate-300 leading-relaxed font-normal mt-3">
              Cabinet d'assurance et de réassurance agréé par l'ACAPS. Intermédiaire d'assurance et Agent Général exclusif de la compagnie <strong className="text-white">AXA Assurance Maroc</strong> à Marrakech.
            </p>
            <div className="p-3 rounded-xl bg-[#132A54] border border-slate-700/60 text-[11px] text-slate-300">
              <span className="font-bold text-sky-400 block mb-0.5">Agrément Officiel :</span>
              {AGENCY_INFO.acapsNumber}
            </div>
          </div>

          {/* Column 2: Solutions Particuliers */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300">
              Assurances Particuliers
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleProduct('auto', 'auto')} className="hover:text-white hover:underline text-left">
                  Assurance Automobile & Dépannage 0 km
                </button>
              </li>
              <li>
                <button onClick={() => handleProduct('moto', 'auto')} className="hover:text-white hover:underline text-left">
                  Assurance Moto & Scooter Marrakech
                </button>
              </li>
              <li>
                <button onClick={() => handleProduct('habitation', 'habitation')} className="hover:text-white hover:underline text-left">
                  Multirisque Habitation Manzilouna & Riads
                </button>
              </li>
              <li>
                <button onClick={() => handleProduct('sante', 'sante')} className="hover:text-white hover:underline text-left">
                  Complémentaire Santé & Cliniques Privées
                </button>
              </li>
              <li>
                <button onClick={() => handleProduct('epargne', 'auto')} className="hover:text-white hover:underline text-left">
                  Épargne & Retraite Futuris AXA
                </button>
              </li>
              <li>
                <button onClick={() => handleProduct('voyage', 'auto')} className="hover:text-white hover:underline text-left">
                  Assistance Voyage Visa Schengen
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions Pros & Sinistres */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300">
              Professionnels & Urgences
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleProduct('multirisque-pro', 'pro')} className="hover:text-white hover:underline text-left">
                  Multirisque Professionnelle (Commerces & Riads)
                </button>
              </li>
              <li>
                <button onClick={() => handleProduct('accidents-travail', 'pro')} className="hover:text-white hover:underline text-left">
                  Accidents du Travail (Loi 18-12)
                </button>
              </li>
              <li>
                <button onClick={() => handleProduct('rc-pro', 'pro')} className="hover:text-white hover:underline text-left">
                  Responsabilité Civile Pro & Décennale BTP
                </button>
              </li>
              <li>
                <button onClick={() => handleProduct('flotte-auto', 'pro')} className="hover:text-white hover:underline text-left">
                  Flotte Automobile Entreprise
                </button>
              </li>
              <li>
                <button onClick={onOpenSinistre} className="text-[#E11D2A] font-bold hover:underline text-left flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Guide Sinistre & Assistance 24/7</span>
                </button>
              </li>
              <li>
                <button onClick={onOpenAppointment} className="text-sky-300 font-semibold hover:underline text-left">
                  Prendre Rendez-vous à l'Agence
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Agency Address & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-sky-300">
              Coordonnées de l'agence
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0072F5] flex-shrink-0 mt-0.5" />
                <a 
                  href={AGENCY_INFO.googleMapsUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  {AGENCY_INFO.address} <span className="text-[#0072F5] font-semibold text-[10px] block mt-0.5">Ouvrir dans Google Maps ↗</span>
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#0072F5] flex-shrink-0 mt-0.5" />
                <div>
                  <a href={`tel:${AGENCY_INFO.phone1}`} className="hover:text-white block font-medium">
                    Fixe : {AGENCY_INFO.phoneDisplay}
                  </a>
                  <a href={`tel:${AGENCY_INFO.phone2}`} className="hover:text-white block text-[11px] text-slate-300 mt-0.5">
                    Gsm / WA : {AGENCY_INFO.mobileDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#0072F5] flex-shrink-0 mt-0.5" />
                <a href={`mailto:${AGENCY_INFO.email1}`} className="hover:text-white">
                  {AGENCY_INFO.email1}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#0072F5] flex-shrink-0 mt-0.5" />
                <span className="text-[11px]">{AGENCY_INFO.hoursWeekday}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <strong className="text-white">Echkili Assurances</strong>. Agent Général AXA Assurances Maroc. Tous droits réservés.
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-slate-300 cursor-pointer">Mentions Légales</span>
            <span>•</span>
            <span className="hover:text-slate-300 cursor-pointer">Protection des Données (CNDP)</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center transition-colors"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
