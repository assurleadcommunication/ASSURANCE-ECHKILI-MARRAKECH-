import { useState, useEffect } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  Search, 
  Menu, 
  X, 
  ChevronDown, 
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Clock,
  Car,
  Home,
  HeartPulse,
  Briefcase,
  Users,
  HardHat,
  ChevronRight
} from 'lucide-react';
import Logo from './Logo';
import { AGENCY_INFO } from '../data/content';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenDevis: (type?: 'auto' | 'habitation' | 'sante' | 'pro') => void;
  onOpenAppointment: () => void;
  onOpenSinistre: () => void;
  activeSection?: string;
}

export default function Header({ 
  onOpenSearch, 
  onOpenDevis, 
  onOpenAppointment, 
  onOpenSinistre,
  activeSection = '' 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(prev => prev === name ? null : name);
  };

  const toggleMobileAccordion = (name: string) => {
    setMobileAccordion(prev => prev === name ? null : name);
  };

  const closeAllMenus = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  const handleNavClick = (targetId: string) => {
    closeAllMenus();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white relative z-40 border-b border-slate-100">
      {/* 1. TOP INFORMATION STRIP (Desktop & Tablet) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Main Logo */}
          <a href="#" className="flex-shrink-0" onClick={() => handleNavClick('accueil')}>
            <Logo variant="light" />
          </a>

          {/* Contact & Location Info Group (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {/* Notre bureau */}
            <a 
              href={AGENCY_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-start gap-2.5 text-left group hover:opacity-85 transition-opacity"
            >
              <div className="w-8 h-8 rounded-full bg-sky-50 text-[#0072F5] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-sky-100 transition-colors">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-[13px] leading-snug">
                <div className="font-bold text-[#0F2B5C] group-hover:text-[#0072F5] transition-colors">Notre bureau</div>
                <div className="text-slate-500 font-medium text-[12px]">Rdc mag 2, Imm Erraha N°8</div>
                <div className="text-slate-500 text-[12px]">Av Guemassa, Mhamid Marrakech</div>
              </div>
            </a>

            {/* Écrivez nous */}
            <a 
              href={`mailto:${AGENCY_INFO.email1}`}
              className="flex items-start gap-2.5 text-left group hover:opacity-85 transition-opacity"
            >
              <div className="w-8 h-8 rounded-full bg-sky-50 text-[#0072F5] flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-sky-100 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-[13px] leading-snug">
                <div className="font-bold text-[#0F2B5C] group-hover:text-[#0072F5] transition-colors">Écrivez nous</div>
                <div className="text-slate-500 text-[12px] font-medium">{AGENCY_INFO.email1}</div>
              </div>
            </a>

            {/* Appelez nous */}
            <div className="flex items-start gap-2.5 text-left">
              <div className="w-8 h-8 rounded-full bg-sky-50 text-[#0072F5] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div className="text-[13px] leading-snug">
                <div className="font-bold text-[#0F2B5C]">Appelez nous</div>
                <div className="text-slate-700 font-bold text-[12px]">
                  <a href={`tel:${AGENCY_INFO.phone1}`} className="hover:text-[#0072F5] transition-colors">
                    Fixe : 05 25 36 30 61
                  </a>
                </div>
                <div className="text-slate-600 font-medium text-[11px]">
                  <a href={`tel:${AGENCY_INFO.phone2}`} className="hover:text-[#0072F5] transition-colors">
                    Gsm : 06 67 76 21 24
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick CTA + Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenDevis('auto')}
              className="px-3 py-1.5 rounded-md bg-[#0072F5] text-white text-xs font-bold tracking-tight shadow-sm hover:bg-[#005ec4]"
            >
              Devis
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. PRIMARY NAV BAR (Dark Navy Background #102B54) */}
      <nav className={`w-full bg-[#102B54] text-white transition-all duration-200 ${isScrolled ? 'sticky top-0 z-50 shadow-md' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[52px]">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center h-full space-x-0.5">
              {/* Accueil */}
              <button
                onClick={() => handleNavClick('accueil')}
                className={`h-full px-5 text-[14px] font-semibold flex items-center transition-colors ${
                  activeSection === '' || activeSection === 'accueil' ? 'bg-[#24477D] text-white shadow-inner' : 'text-slate-200 hover:bg-[#1A3868] hover:text-white'
                }`}
              >
                Accueil
              </button>

              {/* Assurances Echkili + */}
              <div className="relative h-full" onMouseLeave={() => setOpenDropdown(null)}>
                <button
                  onClick={() => toggleDropdown('echkili')}
                  onMouseEnter={() => setOpenDropdown('echkili')}
                  className={`h-full px-4 text-[14px] font-medium flex items-center gap-1.5 transition-colors ${
                    openDropdown === 'echkili' ? 'bg-[#24477D] text-white' : 'text-slate-200 hover:bg-[#1A3868] hover:text-white'
                  }`}
                >
                  Assurances Echkili <span className="text-slate-400 text-xs">+</span>
                </button>

                {openDropdown === 'echkili' && (
                  <div className="absolute left-0 top-full w-64 bg-white text-slate-800 rounded-b-lg shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn">
                    <button 
                      onClick={() => handleNavClick('valeurs')}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center justify-between font-medium"
                    >
                      <span>Missions & Valeurs</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button 
                      onClick={() => handleNavClick('notre-agence')}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center justify-between"
                    >
                      <span>Notre Agence</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button 
                      onClick={() => handleNavClick('contact')}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center justify-between"
                    >
                      <span>Coordonnées & Contact</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button 
                      onClick={onOpenAppointment}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center justify-between"
                    >
                      <span>Prendre Rendez-vous</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button 
                      onClick={onOpenSinistre}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center justify-between text-[#E11D2A] font-semibold"
                    >
                      <span>En cas de sinistre (Urgence 24/7)</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#E11D2A]" />
                    </button>
                  </div>
                )}
              </div>

              {/* Particuliers + */}
              <div className="relative h-full" onMouseLeave={() => setOpenDropdown(null)}>
                <button
                  onClick={() => toggleDropdown('particuliers')}
                  onMouseEnter={() => setOpenDropdown('particuliers')}
                  className={`h-full px-4 text-[14px] font-medium flex items-center gap-1.5 transition-colors ${
                    openDropdown === 'particuliers' ? 'bg-[#24477D] text-white' : 'text-slate-200 hover:bg-[#1A3868] hover:text-white'
                  }`}
                >
                  Particuliers <span className="text-slate-400 text-xs">+</span>
                </button>

                {openDropdown === 'particuliers' && (
                  <div className="absolute left-0 top-full w-72 bg-white text-slate-800 rounded-b-lg shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn">
                    <button 
                      onClick={() => { onOpenDevis('auto'); closeAllMenus(); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center gap-2.5"
                    >
                      <Car className="w-4 h-4 text-[#0072F5]" />
                      <span>Assurance Auto & Moto (0 km)</span>
                    </button>
                    <button 
                      onClick={() => { onOpenDevis('habitation'); closeAllMenus(); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center gap-2.5"
                    >
                      <Home className="w-4 h-4 text-[#0072F5]" />
                      <span>Habitation Manzilouna</span>
                    </button>
                    <button 
                      onClick={() => { onOpenDevis('sante'); closeAllMenus(); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center gap-2.5"
                    >
                      <HeartPulse className="w-4 h-4 text-[#0072F5]" />
                      <span>Santé & Complémentaire Maladie</span>
                    </button>
                    <button 
                      onClick={() => { handleNavClick('solutions'); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center justify-between border-t border-slate-100 mt-1 pt-2 font-medium text-[#0F2B5C]"
                    >
                      <span>Voir toutes les offres Particuliers</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              {/* Professionnels + */}
              <div className="relative h-full" onMouseLeave={() => setOpenDropdown(null)}>
                <button
                  onClick={() => toggleDropdown('pros')}
                  onMouseEnter={() => setOpenDropdown('pros')}
                  className={`h-full px-4 text-[14px] font-medium flex items-center gap-1.5 transition-colors ${
                    openDropdown === 'pros' ? 'bg-[#24477D] text-white' : 'text-slate-200 hover:bg-[#1A3868] hover:text-white'
                  }`}
                >
                  Professionnels <span className="text-slate-400 text-xs">+</span>
                </button>

                {openDropdown === 'pros' && (
                  <div className="absolute left-0 top-full w-72 bg-white text-slate-800 rounded-b-lg shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn">
                    <button 
                      onClick={() => { onOpenDevis('pro'); closeAllMenus(); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center gap-2.5"
                    >
                      <Briefcase className="w-4 h-4 text-[#0072F5]" />
                      <span>Multirisque Professionnelle</span>
                    </button>
                    <button 
                      onClick={() => { onOpenDevis('pro'); closeAllMenus(); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center gap-2.5"
                    >
                      <Users className="w-4 h-4 text-[#0072F5]" />
                      <span>Accidents du Travail (Loi 18-12)</span>
                    </button>
                    <button 
                      onClick={() => { handleNavClick('solutions'); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center gap-2.5"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#0072F5]" />
                      <span>Responsabilité Civile Pro & Décennale</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Entreprises + */}
              <div className="relative h-full" onMouseLeave={() => setOpenDropdown(null)}>
                <button
                  onClick={() => toggleDropdown('entreprises')}
                  onMouseEnter={() => setOpenDropdown('entreprises')}
                  className={`h-full px-4 text-[14px] font-medium flex items-center gap-1.5 transition-colors ${
                    openDropdown === 'entreprises' ? 'bg-[#24477D] text-white' : 'text-slate-200 hover:bg-[#1A3868] hover:text-white'
                  }`}
                >
                  Entreprises <span className="text-slate-400 text-xs">+</span>
                </button>

                {openDropdown === 'entreprises' && (
                  <div className="absolute left-0 top-full w-72 bg-white text-slate-800 rounded-b-lg shadow-xl border border-slate-100 py-2 z-50 animate-fadeIn">
                    <button 
                      onClick={() => { onOpenDevis('pro'); closeAllMenus(); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center gap-2.5"
                    >
                      <Car className="w-4 h-4 text-[#0072F5]" />
                      <span>Flottes Automobiles (dès 3 véhicules)</span>
                    </button>
                    <button 
                      onClick={() => { onOpenDevis('pro'); closeAllMenus(); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center gap-2.5"
                    >
                      <HardHat className="w-4 h-4 text-[#0072F5]" />
                      <span>Tous Risques Chantier (TRC & BTP)</span>
                    </button>
                    <button 
                      onClick={() => { onOpenDevis('pro'); closeAllMenus(); }}
                      className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-50 hover:text-[#0072F5] flex items-center gap-2.5"
                    >
                      <Users className="w-4 h-4 text-[#0072F5]" />
                      <span>Retraite & Prévoyance Collective</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Contact */}
              <button
                onClick={() => handleNavClick('contact')}
                className="h-full px-4 text-[14px] font-medium text-slate-200 hover:bg-[#1A3868] hover:text-white transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Mobile Branding Text on Scrolled Nav */}
            <div className="flex lg:hidden items-center">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Agent Général AXA Marrakech
              </span>
            </div>

            {/* Right Icons: Search, WhatsApp, Social Links */}
            <div className="flex items-center gap-3">
              {/* Search Icon */}
              <button
                onClick={onOpenSearch}
                aria-label="Recherche sur le site"
                className="p-2 text-slate-300 hover:text-white hover:bg-[#1A3868] rounded-full transition-colors"
              >
                <Search className="w-4 h-4" />
              </button>

              {/* WhatsApp Icon */}
              <a
                href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=Bonjour%20Assurances%20Echkili,%20je%20souhaite%20un%20renseignement.`}
                target="_blank"
                rel="noreferrer"
                aria-label="Contacter sur WhatsApp"
                className="p-2 text-emerald-400 hover:text-white hover:bg-emerald-600 rounded-full transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              {/* Social Icons */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook Assurances Echkili"
                className="hidden sm:inline-flex p-2 text-slate-300 hover:text-white hover:bg-[#1A3868] rounded-full transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.688 5H18V0h-3.808C10.592 0 9 1.582 9 4.615V8z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Assurances Echkili"
                className="hidden sm:inline-flex p-2 text-slate-300 hover:text-white hover:bg-[#1A3868] rounded-full transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Assurances Echkili"
                className="hidden sm:inline-flex p-2 text-slate-300 hover:text-white hover:bg-[#1A3868] rounded-full transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 3. MOBILE SLIDE-OUT DRAWER */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs animate-fadeIn">
          <div className="absolute right-0 top-0 bottom-0 w-5/6 max-w-sm bg-white shadow-2xl flex flex-col overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <Logo variant="light" className="scale-90 origin-left" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-slate-500 hover:text-slate-800 rounded-lg"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick Actions Bar inside Mobile Drawer */}
            <div className="p-3 bg-[#102B54] text-white grid grid-cols-2 gap-2">
              <button
                onClick={() => { onOpenDevis('auto'); setMobileMenuOpen(false); }}
                className="py-2 px-3 bg-[#0072F5] rounded-md font-bold text-xs text-center hover:bg-blue-600 transition-colors"
              >
                Devis Express
              </button>
              <button
                onClick={() => { onOpenAppointment(); setMobileMenuOpen(false); }}
                className="py-2 px-3 bg-[#24477D] rounded-md font-semibold text-xs text-center hover:bg-slate-700 transition-colors"
              >
                Rendez-vous
              </button>
            </div>

            {/* Drawer Navigation Links */}
            <div className="p-4 space-y-1 text-slate-800 flex-1">
              <button
                onClick={() => handleNavClick('accueil')}
                className="w-full text-left py-2.5 px-3 rounded-md font-bold text-sm hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Accueil</span>
              </button>

              {/* Accordion 1: Assurances Echkili */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleMobileAccordion('echkili')}
                  className="w-full text-left py-2.5 px-3 rounded-md font-semibold text-sm hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Assurances Echkili</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'echkili' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'echkili' && (
                  <div className="pl-6 py-1 space-y-2 text-sm text-slate-600 bg-slate-50/70 rounded-md">
                    <button onClick={() => handleNavClick('notre-agence')} className="block w-full text-left py-1 font-medium text-slate-800 hover:text-[#0072F5]">
                      Notre Agence
                    </button>
                    <button onClick={() => handleNavClick('valeurs')} className="block w-full text-left py-1 hover:text-[#0072F5]">
                      Missions & Valeurs
                    </button>
                    <button onClick={() => handleNavClick('contact')} className="block w-full text-left py-1 hover:text-[#0072F5]">
                      Coordonnées & Contact
                    </button>
                    <button onClick={() => { onOpenSinistre(); setMobileMenuOpen(false); }} className="block w-full text-left py-1 text-[#E11D2A] font-semibold">
                      Guide Sinistres & Urgences
                    </button>
                  </div>
                )}
              </div>

              {/* Accordion 2: Particuliers */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleMobileAccordion('particuliers')}
                  className="w-full text-left py-2.5 px-3 rounded-md font-semibold text-sm hover:bg-slate-50 flex items-center justify-between text-[#0072F5]"
                >
                  <span>Particuliers</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'particuliers' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'particuliers' && (
                  <div className="pl-6 py-1 space-y-2 text-sm text-slate-600 bg-slate-50/70 rounded-md">
                    <button onClick={() => { onOpenDevis('auto'); setMobileMenuOpen(false); }} className="block w-full text-left py-1 hover:text-[#0072F5]">
                      Assurance Automobile & Moto
                    </button>
                    <button onClick={() => { onOpenDevis('habitation'); setMobileMenuOpen(false); }} className="block w-full text-left py-1 hover:text-[#0072F5]">
                      Habitation Manzilouna
                    </button>
                    <button onClick={() => { onOpenDevis('sante'); setMobileMenuOpen(false); }} className="block w-full text-left py-1 hover:text-[#0072F5]">
                      Santé Particuliers
                    </button>
                    <button onClick={() => handleNavClick('solutions')} className="block w-full text-left py-1 font-semibold text-[#0F2B5C]">
                      Toutes les offres Particuliers →
                    </button>
                  </div>
                )}
              </div>

              {/* Accordion 3: Professionnels & Entreprises */}
              <div className="border-b border-slate-100 pb-1">
                <button
                  onClick={() => toggleMobileAccordion('pros')}
                  className="w-full text-left py-2.5 px-3 rounded-md font-semibold text-sm hover:bg-slate-50 flex items-center justify-between"
                >
                  <span>Professionnels & Entreprises</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileAccordion === 'pros' ? 'rotate-180' : ''}`} />
                </button>
                {mobileAccordion === 'pros' && (
                  <div className="pl-6 py-1 space-y-2 text-sm text-slate-600 bg-slate-50/70 rounded-md">
                    <button onClick={() => { onOpenDevis('pro'); setMobileMenuOpen(false); }} className="block w-full text-left py-1 hover:text-[#0072F5]">
                      Multirisque Professionnelle (Riads & Commerces)
                    </button>
                    <button onClick={() => { onOpenDevis('pro'); setMobileMenuOpen(false); }} className="block w-full text-left py-1 hover:text-[#0072F5]">
                      Accidents du Travail (Loi 18-12)
                    </button>
                    <button onClick={() => { onOpenDevis('pro'); setMobileMenuOpen(false); }} className="block w-full text-left py-1 hover:text-[#0072F5]">
                      Flottes Automobiles Entreprise
                    </button>
                    <button onClick={() => handleNavClick('solutions')} className="block w-full text-left py-1 font-semibold text-[#0F2B5C]">
                      Toutes les offres Pros & Entreprises →
                    </button>
                  </div>
                )}
              </div>

              {/* Direct Link: Contact */}
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full text-left py-2.5 px-3 rounded-md font-semibold text-sm hover:bg-slate-50 flex items-center justify-between"
              >
                <span>Contact & Localisation</span>
              </button>
            </div>

            {/* Mobile Drawer Bottom Info */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs space-y-2 text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0072F5]" />
                <a href={`tel:${AGENCY_INFO.phone1}`} className="font-semibold text-slate-800">
                  {AGENCY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0072F5]" />
                <span>Rdc mag 2, Imm Erraha N°8, Av Guemassa Mhamid</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-600 font-semibold pt-1">
                <MessageCircle className="w-3.5 h-3.5" />
                <a href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=Bonjour%20Echkili%20Assurances`} target="_blank" rel="noreferrer">
                  WhatsApp direct : {AGENCY_INFO.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
