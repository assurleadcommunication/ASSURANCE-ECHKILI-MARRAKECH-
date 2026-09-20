import { useState, useId } from 'react';
import { 
  ArrowLeft, 
  Shield, 
  CheckCircle2, 
  Star, 
  MessageCircle, 
  PhoneCall, 
  Calendar, 
  FileText, 
  HelpCircle, 
  ChevronDown, 
  ChevronRight, 
  MapPin, 
  Navigation,
  Car, 
  Home, 
  HeartPulse, 
  TrendingUp, 
  Bike, 
  Plane, 
  Briefcase, 
  Users, 
  Truck, 
  HardHat, 
  Building2,
  Share2,
  Clock,
  Sparkles
} from 'lucide-react';
import { InsuranceSolution } from '../types';
import { AGENCY_INFO, SOLUTIONS_LIST } from '../data/content';
import { PRODUCT_EXTENDED_DETAILS, ProductPack } from '../data/productDetails';

interface ProductPageProps {
  solution: InsuranceSolution;
  onBack: () => void;
  onSelectOtherProduct: (solution: InsuranceSolution) => void;
  onOpenDevis: (type?: 'auto' | 'habitation' | 'sante' | 'pro', prefillPack?: string) => void;
  onOpenAppointment: () => void;
}

export default function ProductPage({
  solution,
  onBack,
  onSelectOtherProduct,
  onOpenDevis,
  onOpenAppointment,
}: ProductPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedPackName, setSelectedPackName] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Formulaire rapide sur la page
  const [quickName, setQuickName] = useState('');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickCity, setQuickCity] = useState('Marrakech');
  const [quickMessage, setQuickMessage] = useState('');
  const [quickSubmitted, setQuickSubmitted] = useState(false);

  const nameInputId = useId();
  const phoneInputId = useId();
  const cityInputId = useId();
  const messageInputId = useId();

  const details = PRODUCT_EXTENDED_DETAILS[solution.id] || {
    heroTagline: solution.shortDesc,
    keyStats: [
      { label: "Assistance AXA", value: "24h/24", hint: "Service continu au Maroc" },
      { label: "Délivrance Attestation", value: "Immédiate", hint: "En agence ou par WhatsApp" },
      { label: "Garantie", value: "Sur-Mesure", hint: "Personnalisable selon vos besoins" },
    ],
    packs: [
      {
        name: "Formule Essentielle",
        description: "Protection de base pour votre sérénité au quotidien.",
        features: solution.guarantees.slice(0, 4),
      },
      {
        name: "Formule Intégrale Confort",
        badge: "Recommandé",
        popular: true,
        description: "Couverture élargie contre l'ensemble des risques majeurs.",
        features: solution.guarantees,
      },
    ],
    requiredDocuments: [
      "Copie de la CIN du souscripteur",
      "Justificatif d'activité ou de propriété",
      "Coordonnées bancaires pour prélèvement ou indemnisation",
    ],
    faqs: [
      {
        question: `Comment souscrire à l'offre ${solution.title} à Marrakech ?`,
        answer: "Vous pouvez souscrire directement à notre agence Echkili Assurances (Avenue Guemassa, Immeuble Erraha N°8 à M'hamid Marrakech) ou nous transmettre vos documents par WhatsApp pour préparer votre contrat à l'avance.",
      },
      {
        question: "Quels sont les délais d'effet des garanties ?",
        answer: "La prise d'effet est immédiate dès validation du dossier et signature en agence, avec remise immédiate de votre attestation officielle.",
      },
    ],
    claimsNotice: "En cas de sinistre, contactez sans attendre votre conseiller Echkili Assurances.",
  };

  const getSolutionIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'car': return <Car className={className} />;
      case 'home': return <Home className={className} />;
      case 'heart-pulse': return <HeartPulse className={className} />;
      case 'trending-up': return <TrendingUp className={className} />;
      case 'bike': return <Bike className={className} />;
      case 'plane': return <Plane className={className} />;
      case 'briefcase': return <Briefcase className={className} />;
      case 'users': return <Users className={className} />;
      case 'shield': return <Shield className={className} />;
      case 'truck': return <Truck className={className} />;
      case 'hard-hat': return <HardHat className={className} />;
      case 'building-2': return <Building2 className={className} />;
      default: return <Shield className={className} />;
    }
  };

  const getDevisType = (): 'auto' | 'habitation' | 'sante' | 'pro' => {
    if (solution.id === 'auto' || solution.id === 'moto') return 'auto';
    if (solution.id === 'habitation') return 'habitation';
    if (solution.id === 'sante') return 'sante';
    return 'pro';
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${solution.title} - Echkili Assurances AXA Maroc`,
        text: solution.shortDesc,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setQuickSubmitted(true);
  };

  // Trouver les produits connexes
  const relatedSolutions = SOLUTIONS_LIST.filter(
    (s) => s.id !== solution.id && (s.category === solution.category || Math.random() > 0.5)
  ).slice(0, 3);

  // Trouver les produits précédent et suivant
  const currentIndex = SOLUTIONS_LIST.findIndex((s) => s.id === solution.id);
  const prevSolution = currentIndex > 0 ? SOLUTIONS_LIST[currentIndex - 1] : SOLUTIONS_LIST[SOLUTIONS_LIST.length - 1];
  const nextSolution = currentIndex < SOLUTIONS_LIST.length - 1 ? SOLUTIONS_LIST[currentIndex + 1] : SOLUTIONS_LIST[0];

  return (
    <article className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      
      {/* 1. TOP BREADCRUMBS & NAVIGATION BAR */}
      <nav aria-label="Fil d'Ariane et actions produit" className="bg-[#0A1E40] text-white border-b border-white/10 sticky top-0 z-40 backdrop-blur-md bg-opacity-95 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-300 overflow-x-auto whitespace-nowrap">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 text-white hover:text-sky-300 font-bold transition-colors cursor-pointer bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Accueil</span>
            </button>
            <span className="text-slate-500">/</span>
            <span className="capitalize text-slate-300">
              Solutions {solution.category === 'particuliers' ? 'Particuliers' : 'Entreprises & Pros'}
            </span>
            <span className="text-slate-500">/</span>
            <span className="text-white font-semibold truncate max-w-[200px] sm:max-w-none">
              {solution.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
              title="Partager cette page"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{copiedLink ? 'Lien copié !' : 'Partager'}</span>
            </button>
            <button
              onClick={() => onOpenDevis(getDevisType())}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#E11D2A] hover:bg-[#c91420] text-xs font-bold text-white transition-colors shadow-sm cursor-pointer"
            >
              <span>Devis Express</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION PRODUIT */}
      <section className="relative bg-gradient-to-b from-[#0F2B5C] via-[#102B54] to-[#0A1E40] text-white py-12 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Cercles de fond stylisés */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#0072F5]/15 blur-3xl" />
          <div className="absolute bottom-0 -left-20 w-80 h-80 rounded-full bg-[#E11D2A]/10 blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Colonne gauche : Titre & description */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-sky-200 text-xs font-bold tracking-tight backdrop-blur-xs border border-white/10">
                  <Shield className="w-3.5 h-3.5 text-[#E11D2A]" />
                  <span>{solution.badge}</span>
                </span>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-300 bg-white/10 px-2.5 py-1 rounded-full">
                  AXA Assurances Maroc
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {solution.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {details.heroTagline}
              </p>

              {/* Badges d'avantages rapides */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {details.keyStats.map((stat, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-white/10 border border-white/15 backdrop-blur-xs">
                    <div className="text-xl sm:text-2xl font-black text-white">{stat.value}</div>
                    <div className="text-xs font-bold text-sky-300 mt-0.5">{stat.label}</div>
                    {stat.hint && <div className="text-[11px] text-slate-300 mt-0.5">{stat.hint}</div>}
                  </div>
                ))}
              </div>

              {/* Boutons d'action CTA */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenDevis(getDevisType())}
                  className="px-6 py-3.5 rounded-xl bg-[#E11D2A] hover:bg-[#c91420] text-white font-bold text-sm transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Obtenir mon devis personnalisé</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=${encodeURIComponent(solution.whatsappMessage)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Conseiller WhatsApp</span>
                </a>

                <button
                  onClick={onOpenAppointment}
                  className="px-4 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-sky-300" />
                  <span>Prendre RDV</span>
                </button>
              </div>
            </div>

            {/* Colonne droite : Carte résumé de l'offre */}
            <div className="lg:col-span-5">
              <div className="bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 space-y-5">
                <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0F2B5C] flex items-center justify-center flex-shrink-0">
                    {getSolutionIcon(solution.icon, "w-6 h-6")}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-base text-[#0F2B5C]">{solution.title}</h2>
                    <p className="text-xs text-slate-500">Agent Général Echkili Marrakech</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    En résumé
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {solution.fullDesc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100 text-xs text-slate-700">
                  <strong className="text-[#0F2B5C] font-bold block mb-1">Pour qui s'adresse cette offre ?</strong>
                  {solution.targetAudience}
                </div>

                <div className="pt-2 text-xs text-slate-500 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Attestation officielle délivrée en agence (Avenue Guemassa)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. COMPARATEUR DES FORMULES / PACKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
        <div className="text-center mb-8 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E11D2A] mb-1 block">
            Formules & Niveaux de Protection
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2B5C]">
            Choisissez la formule adaptée à vos besoins
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto mt-1">
            Chaque contrat peut être ajusté sur-mesure lors de votre échange avec nos conseillers à Marrakech.
          </p>
        </div>

        <div className={`grid grid-cols-1 ${details.packs.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-3'} gap-6`}>
          {details.packs.map((pack: ProductPack, idx: number) => {
            const isSelected = selectedPackName === pack.name || (!selectedPackName && pack.popular);
            return (
              <div
                key={idx}
                className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  pack.popular
                    ? 'bg-white border-2 border-[#0072F5] shadow-xl md:-translate-y-2'
                    : 'bg-white border border-slate-200 shadow-md hover:shadow-lg'
                }`}
              >
                {pack.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0072F5] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-sm">
                    {pack.badge}
                  </div>
                )}

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#0F2B5C] mb-1">
                    {pack.name}
                  </h3>
                  {pack.priceIndication && (
                    <div className="text-xs font-bold text-[#E11D2A] mb-2">
                      {pack.priceIndication}
                    </div>
                  )}
                  <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                    {pack.description}
                  </p>

                  <div className="space-y-2.5 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Garanties incluses :
                    </div>
                    {pack.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <button
                    onClick={() => {
                      setSelectedPackName(pack.name);
                      onOpenDevis(getDevisType(), pack.name);
                    }}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                      pack.popular || isSelected
                        ? 'bg-[#0F2B5C] hover:bg-[#1A3868] text-white shadow-md'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                    }`}
                  >
                    <span>Demander cette formule</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. DETAILS DES GARANTIES & AVANTAGES EXCLUSIFS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Colonne gauche : Toutes les garanties */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md">
            <div className="flex items-center gap-2 text-sky-600 text-xs font-bold uppercase tracking-wider mb-2">
              <Shield className="w-4 h-4 text-[#0072F5]" />
              <span>Couverture Complète</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0F2B5C] mb-4">
              Garanties & Protections incluses dans le contrat
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              AXA Assurances Maroc veille à vous offrir une sécurité maximale sans clauses cachées.
            </p>

            <div className="space-y-3">
              {solution.guarantees.map((guarantee, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs sm:text-sm text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold text-slate-900 block">{guarantee}</strong>
                  </div>
                </div>
              ))}
            </div>

            {/* Avantages Agence Echkili */}
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Pourquoi choisir l'Agence Echkili à Marrakech ?
              </h3>
              <div className="space-y-2.5">
                {solution.advantages.map((adv, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <Star className="w-4 h-4 text-[#E11D2A] fill-current flex-shrink-0 mt-0.5" />
                    <span>{adv}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colonne droite : Documents requis & Formulaire direct rapide */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Carte Pièces à fournir */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md">
              <div className="flex items-center gap-2 text-[#E11D2A] text-xs font-bold uppercase tracking-wider mb-2">
                <FileText className="w-4 h-4" />
                <span>Documents & Pièces à fournir</span>
              </div>
              <h3 className="text-lg font-extrabold text-[#0F2B5C] mb-3">
                Pièces pour souscrire rapidement
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                Préparez ces justificatifs pour une délivrance de votre contrat en moins de 15 minutes en agence ou via WhatsApp :
              </p>
              <ul className="space-y-2.5 text-xs text-slate-700">
                {details.requiredDocuments.map((doc, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    <span className="w-5 h-5 rounded-full bg-blue-100 text-[#0F2B5C] font-bold text-[10px] flex items-center justify-center flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Formulaire de demande express sur la page */}
            <div className="bg-[#0F2B5C] text-white rounded-3xl p-6 sm:p-7 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-1">
                Être rappelé pour {solution.title}
              </h3>
              <p className="text-xs text-slate-200 mb-4">
                Un conseiller de l'agence vous contacte sous 30 minutes avec une étude tarifaire.
              </p>

              {quickSubmitted ? (
                <div className="bg-emerald-500/20 border border-emerald-400 p-4 rounded-xl text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                  <div className="font-bold text-sm text-white">Demande transmise avec succès !</div>
                  <p className="text-xs text-emerald-100">
                    Notre équipe à Marrakech vous contactera très rapidement.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleQuickSubmit} className="space-y-3 text-xs">
                  <div>
                    <label htmlFor={nameInputId} className="block text-[11px] font-semibold text-slate-300 mb-1">Nom complet *</label>
                    <input
                      id={nameInputId}
                      type="text"
                      required
                      placeholder="Ex: Mohamed Amine"
                      value={quickName}
                      onChange={(e) => setQuickName(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div>
                    <label htmlFor={phoneInputId} className="block text-[11px] font-semibold text-slate-300 mb-1">Téléphone portable *</label>
                    <input
                      id={phoneInputId}
                      type="tel"
                      required
                      placeholder="06 XX XX XX XX"
                      value={quickPhone}
                      onChange={(e) => setQuickPhone(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label htmlFor={cityInputId} className="block text-[11px] font-semibold text-slate-300 mb-1">Ville</label>
                      <input
                        id={cityInputId}
                        type="text"
                        value={quickCity}
                        onChange={(e) => setQuickCity(e.target.value)}
                        className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-slate-300 mb-1">Formule voulue</label>
                      <input
                        type="text"
                        readOnly
                        value={selectedPackName || details.packs[0]?.name || 'Standard'}
                        className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/15 text-slate-300 text-[11px]"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor={messageInputId} className="block text-[11px] font-semibold text-slate-300 mb-1">Précisions (optionnel)</label>
                    <textarea
                      id={messageInputId}
                      rows={2}
                      placeholder="Modèle véhicule, superficie logement, effectif..."
                      value={quickMessage}
                      onChange={(e) => setQuickMessage(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-sky-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-[#E11D2A] hover:bg-[#c91420] text-white font-bold rounded-lg transition-colors shadow-md mt-2 cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <span>Envoyer ma demande</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 5. FAQ SPÉCIFIQUE AU PRODUIT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md">
          <div className="flex items-center gap-2 text-[#0072F5] text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>Questions Fréquentes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2B5C] mb-2">
            Tout savoir sur {solution.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-8 max-w-2xl">
            Retrouvez les réponses aux questions les plus courantes posées à notre agence Echkili Marrakech.
          </p>

          <div className="space-y-3">
            {details.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0F2B5C] transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#0072F5]' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="p-4 sm:p-5 text-xs sm:text-sm text-slate-700 leading-relaxed bg-white border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Avis sinistre */}
          <div className="mt-8 p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
            <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <strong>Conseil Sinistre :</strong> {details.claimsNotice}
            </div>
          </div>
        </div>
      </section>

      {/* 6. BLOC CONTACT AGENCE PHYSIQUE & ACCÈS DIRECT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-gradient-to-r from-[#0F2B5C] via-[#1A3868] to-[#0A1E40] text-white rounded-3xl p-6 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-sky-300">
              Agent Général AXA Marrakech
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Besoin de finaliser votre contrat {solution.title} ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200 max-w-xl">
              Passez nous voir à l'agence : Immeuble Erraha N°8, Avenue Guemassa, M'hamid Marrakech. Stationnement facile et accueil personnalisé.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${AGENCY_INFO.phone1}`}
              className="px-5 py-3 rounded-xl bg-white text-[#0F2B5C] hover:bg-slate-100 font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-[#0072F5]" />
              <span>05 25 36 30 61</span>
            </a>

            <a
              href={AGENCY_INFO.googleMapsDirUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-xl bg-[#E11D2A] hover:bg-[#c91420] text-white font-bold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Navigation className="w-4 h-4" />
              <span>Itinéraire GPS</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7. NAVIGATION ENTRE PRODUITS (SUIVANT / PRÉCÉDENT & RECOMMANDATIONS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="border-t border-slate-200 pt-10">
          
          {/* Suivant / Précédent */}
          <div className="flex items-center justify-between gap-4 mb-10">
            <button
              onClick={() => onSelectOtherProduct(prevSolution)}
              className="p-3 sm:px-5 sm:py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-left transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <ArrowLeft className="w-4 h-4 text-[#0072F5]" />
              <div className="hidden sm:block">
                <div className="text-[10px] uppercase font-bold text-slate-400">Solution précédente</div>
                <div className="text-xs font-bold text-[#0F2B5C]">{prevSolution.title}</div>
              </div>
            </button>

            <button
              onClick={onBack}
              className="px-4 py-2.5 rounded-xl bg-slate-200 hover:bg-slate-300 text-xs font-bold text-slate-800 transition-colors cursor-pointer"
            >
              Voir toutes les solutions
            </button>

            <button
              onClick={() => onSelectOtherProduct(nextSolution)}
              className="p-3 sm:px-5 sm:py-3 rounded-xl bg-white hover:bg-slate-100 border border-slate-200 text-right transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
            >
              <div className="hidden sm:block">
                <div className="text-[10px] uppercase font-bold text-slate-400">Solution suivante</div>
                <div className="text-xs font-bold text-[#0F2B5C]">{nextSolution.title}</div>
              </div>
              <ChevronRight className="w-4 h-4 text-[#0072F5]" />
            </button>
          </div>

          {/* Produits complémentaires recommandés */}
          <div>
            <h3 className="text-lg font-bold text-[#0F2B5C] mb-4">
              Autres solutions AXA recommandées :
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedSolutions.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => onSelectOtherProduct(rel)}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#0072F5] hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0F2B5C] flex items-center justify-center flex-shrink-0 group-hover:bg-[#0072F5] group-hover:text-white transition-colors">
                      {getSolutionIcon(rel.icon, "w-4 h-4")}
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase text-slate-400">{rel.badge}</div>
                      <h4 className="text-sm font-bold text-[#0F2B5C] group-hover:text-[#0072F5] transition-colors">{rel.title}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                    {rel.shortDesc}
                  </p>
                  <div className="mt-3 text-xs font-bold text-[#E11D2A] flex items-center gap-1">
                    <span>Consulter la page</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

    </article>
  );
}
