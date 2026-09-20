import { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Lock,
  Headphones
} from 'lucide-react';
import { AGENCY_INFO } from '../data/content';
import AgencyGoogleMap from './AgencyGoogleMap';

export default function ContactSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Demande de Devis Auto / Habitation');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 450);
  };

  return (
    <section id="contact" className="relative w-full py-16 sm:py-24 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
      
      {/* Subtle background decorative shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-rose-100/30 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-100 text-[#E11D2A] text-xs font-black uppercase tracking-widest mb-3 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#E11D2A] animate-ping" />
            <span>ÉCRIVEZ-NOUS OU CONTACTEZ-NOUS</span>
          </div>

          <h2 
            className="text-3xl sm:text-4xl lg:text-[42px] font-black text-[#0F2B5C] tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Contactez votre Conseiller AXA
          </h2>
          
          <div className="w-12 h-1 bg-[#E11D2A] rounded-full mx-auto my-3.5" />
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto font-normal">
            Une question sur vos garanties ? Un conseil pour votre commerce ou véhicule ? Notre équipe vous répond avec diligence.
          </p>
        </div>

        {/* 2-Column Grid: Contact Cards (5 cols) + Form (7 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Highly Stylized Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* 1. Téléphone direct agence */}
            <div className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_2px_12px_rgba(15,43,92,0.03)] hover:shadow-md hover:border-[#0F2B5C]/30 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/60 border border-blue-200/70 text-[#0F2B5C] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-[#0072F5]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-extrabold text-slate-900 text-base">Téléphone direct agence</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md border border-blue-100">
                      Standard
                    </span>
                  </div>

                  <div className="mt-2.5 space-y-1.5">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-500 font-medium text-xs">Fixe :</span>
                      <a 
                        href={`tel:${AGENCY_INFO.phone1}`} 
                        className="font-bold text-[#0F2B5C] hover:text-[#0072F5] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{AGENCY_INFO.phoneDisplay}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>

                    <div className="flex items-center justify-between text-sm pt-1 border-t border-slate-100">
                      <span className="text-slate-500 font-medium text-xs">Gsm :</span>
                      <a 
                        href={`tel:${AGENCY_INFO.phone2}`} 
                        className="font-bold text-[#0F2B5C] hover:text-[#0072F5] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{AGENCY_INFO.mobileDisplay}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. WhatsApp Express */}
            <div className="group bg-gradient-to-br from-white to-emerald-50/30 rounded-2xl p-5 sm:p-6 border border-emerald-200/80 shadow-[0_2px_12px_rgba(16,185,129,0.05)] hover:shadow-md hover:border-emerald-300 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-[#25D366]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-extrabold text-slate-900 text-base">WhatsApp Express</h4>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded-full border border-emerald-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      En ligne
                    </span>
                  </div>

                  <p className="text-lg font-black text-emerald-800 tracking-tight mt-1.5">
                    <a 
                      href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=Bonjour%20Echkili%20Assurances,%20je%20vous%20contacte%20depuis%20le%20site%20web.`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline flex items-center justify-between"
                    >
                      <span>{AGENCY_INFO.mobileDisplay}</span>
                      <span className="text-xs font-bold text-emerald-700 bg-white px-2.5 py-1 rounded-lg border border-emerald-200 shadow-2xs">
                        Écrire ↗
                      </span>
                    </a>
                  </p>

                  <p className="text-xs text-emerald-700/90 font-medium mt-2 bg-emerald-50/80 p-2 rounded-lg border border-emerald-100 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Réponse instantanée pour devis et constats</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Courriel officiel */}
            <div className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_2px_12px_rgba(15,43,92,0.03)] hover:shadow-md hover:border-[#0F2B5C]/30 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 text-[#0F2B5C] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-[#0F2B5C]" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-extrabold text-slate-900 text-base">Courriel officiel</h4>
                  
                  <div className="mt-2 space-y-1.5 text-xs sm:text-sm">
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 hover:bg-blue-50/50 transition-colors">
                      <a 
                        href={`mailto:${AGENCY_INFO.email1}`} 
                        className="font-bold text-[#0F2B5C] hover:text-[#0072F5] transition-colors block truncate"
                      >
                        {AGENCY_INFO.email1}
                      </a>
                    </div>
                    <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 hover:bg-blue-50/50 transition-colors">
                      <a 
                        href={`mailto:${AGENCY_INFO.email2}`} 
                        className="font-semibold text-slate-600 hover:text-[#0072F5] transition-colors block truncate"
                      >
                        {AGENCY_INFO.email2}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Horaires d'accueil & Adresse */}
            <div className="group bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_2px_12px_rgba(15,43,92,0.03)] hover:shadow-md hover:border-[#0F2B5C]/30 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-50 to-rose-100/50 border border-rose-200 text-[#E11D2A] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                  <Clock className="w-6 h-6 text-[#E11D2A]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-extrabold text-slate-900 text-base">Horaires d'accueil</h4>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      Ouvert
                    </span>
                  </div>

                  <div className="mt-2 space-y-1 text-xs text-slate-700 font-medium">
                    <p className="flex items-center justify-between">
                      <span className="text-slate-500">Lundi - Vendredi :</span>
                      <strong className="text-slate-900 font-bold">08h30 - 18h30 (Journée continue)</strong>
                    </p>
                    <p className="flex items-center justify-between">
                      <span className="text-slate-500">Samedi :</span>
                      <strong className="text-slate-900 font-bold">09h00 - 13h00</strong>
                    </p>
                  </div>

                  {/* Physical Address Callout */}
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600 bg-slate-50/80 p-2.5 rounded-xl border border-slate-100">
                    <MapPin className="w-4 h-4 text-[#E11D2A] flex-shrink-0 mt-0.5" />
                    <span className="font-medium text-[11.5px] leading-relaxed text-slate-700">
                      Rdc magasin 2 imm erraha n°8 av guemassa mhamid Marrakech
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Formulaire de contact direct */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-[0_12px_32px_rgba(15,43,92,0.06)] relative">
            
            {/* Top accent badge */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-5 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#0F2B5C] bg-blue-50 px-3 py-1 rounded-full border border-blue-100 mb-2">
                  <Headphones className="w-3.5 h-3.5 text-[#0072F5]" />
                  <span>Prise en charge rapide</span>
                </span>
                <h3 
                  className="text-2xl sm:text-3xl font-black text-[#0F2B5C] tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Formulaire de contact direct
                </h3>
              </div>
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Délai moyen</span>
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                  Moins de 2h
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 mb-6 font-normal">
              Remplissez ce formulaire et notre équipe à Marrakech prendra en charge votre dossier.
            </p>

            {submitted ? (
              <div className="text-center py-10 px-4 space-y-4 bg-slate-50/60 rounded-2xl border border-slate-100">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                  Demande transmise avec succès !
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Merci <strong className="text-[#0F2B5C]">{name || 'Cher client'}</strong>. Votre demande concernant « <strong className="text-slate-800">{subject}</strong> » a été transmise à notre conseiller à l'agence de Marrakech.
                </p>
                <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-600 max-w-sm mx-auto">
                  Un conseiller vous contactera par téléphone au <strong className="text-slate-900">{phone}</strong>.
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors cursor-pointer"
                  >
                    Envoyer un autre message
                  </button>
                  <a
                    href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=${encodeURIComponent(`Bonjour Echkili Assurances, je viens de vous envoyer un message depuis le formulaire pour : ${subject} (Nom : ${name}).`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs transition-all flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Suivre sur WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                
                {/* Row 1: Nom & Numéro de téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Nom & Prénom <span className="text-[#E11D2A]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Youssef Bennani"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#0072F5] focus:ring-3 focus:ring-blue-500/15 focus:outline-none transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Numéro de téléphone <span className="text-[#E11D2A]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: 06 61 00 00 00"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#0072F5] focus:ring-3 focus:ring-blue-500/15 focus:outline-none transition-all shadow-2xs"
                    />
                  </div>
                </div>

                {/* Row 2: Adresse Email & Objet de la demande */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Adresse Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: y.bennani@gmail.com"
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#0072F5] focus:ring-3 focus:ring-blue-500/15 focus:outline-none transition-all shadow-2xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Objet de la demande
                    </label>
                    <div className="relative">
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white text-slate-900 focus:border-[#0072F5] focus:ring-3 focus:ring-blue-500/15 focus:outline-none transition-all shadow-2xs appearance-none cursor-pointer"
                      >
                        <option value="Demande de Devis Auto / Habitation">Demande de Devis Auto / Habitation</option>
                        <option value="Assurance Santé & Complémentaire">Assurance Santé & Complémentaire</option>
                        <option value="Assurance Professionnelle / Riads & Commerces">Assurance Professionnelle / Riads & Commerces</option>
                        <option value="Accidents du Travail (Loi 18-12)">Accidents du Travail (Loi 18-12)</option>
                        <option value="Flotte Automobile & Véhicules Utilitaires">Flotte Automobile & Véhicules Utilitaires</option>
                        <option value="Déclaration ou suivi de sinistre">Déclaration ou suivi de sinistre</option>
                        <option value="Autre renseignement">Autre renseignement</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Votre message ou détails de votre demande <span className="text-[#E11D2A]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Précisez votre véhicule, votre logement ou votre besoin particulier..."
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white focus:bg-white text-slate-900 placeholder:text-slate-400 focus:border-[#0072F5] focus:ring-3 focus:ring-blue-500/15 focus:outline-none transition-all shadow-2xs resize-y"
                  />
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-[#0F2B5C] hover:bg-[#1A3868] active:scale-[0.99] text-white font-black text-sm sm:text-base tracking-wide shadow-lg shadow-[#0F2B5C]/20 hover:shadow-xl hover:shadow-[#0F2B5C]/30 flex items-center justify-center gap-2.5 cursor-pointer transition-all duration-200"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-sky-300" />
                      <span>Envoyer ma demande à l'agence</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>

                {/* Legal compliance notice */}
                <div className="flex items-center justify-center gap-2 pt-2 text-[11px] sm:text-xs text-slate-400 text-center">
                  <Lock className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>
                    Vos données personnelles sont traitées dans le strict respect de la loi 09-08 relative à la protection des données au Maroc.
                  </span>
                </div>
              </form>
            )}
          </div>

        </div>
        
        {/* Interactive Google Maps Platform Component */}
        <AgencyGoogleMap />

      </div>
    </section>
  );
}
