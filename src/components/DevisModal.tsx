import { useState, useMemo } from 'react';
import { 
  X, 
  Car, 
  Home, 
  HeartPulse, 
  Briefcase, 
  Calculator, 
  CheckCircle2, 
  MessageCircle, 
  ShieldCheck, 
  Info,
  ArrowRight
} from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

interface DevisModalProps {
  initialType?: 'auto' | 'habitation' | 'sante' | 'pro';
  onClose: () => void;
}

export default function DevisModal({ initialType = 'auto', onClose }: DevisModalProps) {
  const [activeTab, setActiveTab] = useState<'auto' | 'habitation' | 'sante' | 'pro'>(initialType);

  // Common contact state
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('Marrakech');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto states
  const [vehicleType, setVehicleType] = useState('voiture');
  const [fiscalPower, setFiscalPower] = useState('6'); // 6 CV
  const [fuelType, setFuelType] = useState('diesel');
  const [autoFormula, setAutoFormula] = useState<'tiers' | 'collision' | 'tous_risques'>('collision');
  const [optionBrisGlace, setOptionBrisGlace] = useState(true);
  const [optionVehiculeRelais, setOptionVehiculeRelais] = useState(false);

  // Habitation states
  const [housingType, setHousingType] = useState('appartement');
  const [surfaceArea, setSurfaceArea] = useState('100');
  const [furnitureValue, setFurnitureValue] = useState('200000');
  const [optionVol, setOptionVol] = useState(true);
  const [optionPiscine, setOptionPiscine] = useState(false);

  // Sante states
  const [santeFormula, setSanteFormula] = useState<'confort_80' | 'serenite_90' | 'prestige_100'>('serenite_90');
  const [beneficiaries, setBeneficiaries] = useState('2');
  const [optionOptiqueDentaire, setOptionOptiqueDentaire] = useState(true);

  // Pro states
  const [proActivity, setProActivity] = useState('commerce');
  const [employeeCount, setEmployeeCount] = useState('5');
  const [proCoverage, setProCoverage] = useState<'at' | 'multirisque' | 'pack_global'>('pack_global');

  // Dynamic Calculation of Indicative Premium in MAD (Moroccan Dirham)
  const estimatedPrice = useMemo(() => {
    if (activeTab === 'auto') {
      let base = 2600;
      const cv = parseInt(fiscalPower, 10) || 6;
      if (cv <= 6) base = 2500;
      else if (cv <= 8) base = 3200;
      else if (cv <= 10) base = 4400;
      else base = 6100;

      if (autoFormula === 'collision') base *= 1.45;
      if (autoFormula === 'tous_risques') base *= 2.1;

      if (optionBrisGlace) base += 350;
      if (optionVehiculeRelais) base += 400;

      return Math.round(base);
    } 
    
    if (activeTab === 'habitation') {
      let base = 850;
      const surf = parseInt(surfaceArea, 10) || 80;
      if (housingType === 'riad') base = 2100;
      else if (housingType === 'villa') base = 1800;
      else base = 750;

      base += (surf / 50) * 180;
      if (optionVol) base += 280;
      if (optionPiscine) base += 450;

      return Math.round(base);
    }

    if (activeTab === 'sante') {
      let basePerPerson = 2200;
      if (santeFormula === 'serenite_90') basePerPerson = 3400;
      if (santeFormula === 'prestige_100') basePerPerson = 4900;
      if (optionOptiqueDentaire) basePerPerson += 600;

      const count = parseInt(beneficiaries, 10) || 1;
      return Math.round(basePerPerson * count);
    }

    if (activeTab === 'pro') {
      const emps = parseInt(employeeCount, 10) || 3;
      let base = emps * 450; // Accidents de travail base
      if (proCoverage === 'multirisque') base = 2800;
      if (proCoverage === 'pack_global') base = 2800 + (emps * 400);

      if (proActivity === 'riad_hotel') base *= 1.4;
      if (proActivity === 'btp') base *= 1.6;

      return Math.round(base);
    }

    return 3000;
  }, [
    activeTab, 
    fiscalPower, 
    autoFormula, 
    optionBrisGlace, 
    optionVehiculeRelais, 
    housingType, 
    surfaceArea, 
    optionVol, 
    optionPiscine, 
    santeFormula, 
    beneficiaries, 
    optionOptiqueDentaire, 
    proActivity, 
    employeeCount, 
    proCoverage
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    let details = '';
    if (activeTab === 'auto') {
      details = `Auto (${fiscalPower} CV, Formule: ${autoFormula}, Bris de glace: ${optionBrisGlace ? 'Oui' : 'Non'})`;
    } else if (activeTab === 'habitation') {
      details = `Habitation (${housingType}, ${surfaceArea} m²)`;
    } else if (activeTab === 'sante') {
      details = `Santé (${santeFormula}, ${beneficiaries} personnes)`;
    } else {
      details = `Pro (${proActivity}, ${employeeCount} salariés, ${proCoverage})`;
    }

    return `Bonjour Echkili Assurances,\nJe souhaite valider mon devis en ligne :\n- Formule : ${details}\n- Estimation : environ ${estimatedPrice} MAD/an\n- Nom : ${fullName || 'Client'}\n- Téléphone : ${phone || 'Non renseigné'}\n- Ville : ${city}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Strip */}
        <div className="bg-[#0F2B5C] text-white p-5 sm:p-7 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4" />
            <span>Simulateur Officiel AXA Marrakech</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
            Demande & Simulation de Devis en Direct
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 mt-1">
            Calculez votre tarif indicatif immédiat et transmettez votre dossier à votre agence Echkili Assurances (Av Guemassa, Mhamid).
          </p>

          {/* Tab Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-5">
            <button
              type="button"
              onClick={() => { setActiveTab('auto'); setIsSubmitted(false); }}
              className={`py-2 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'auto' ? 'bg-[#0072F5] text-white shadow-sm' : 'bg-white/10 text-slate-200 hover:bg-white/20'
              }`}
            >
              <Car className="w-3.5 h-3.5" />
              <span>Auto & Moto</span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveTab('habitation'); setIsSubmitted(false); }}
              className={`py-2 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'habitation' ? 'bg-[#0072F5] text-white shadow-sm' : 'bg-white/10 text-slate-200 hover:bg-white/20'
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>Habitation</span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveTab('sante'); setIsSubmitted(false); }}
              className={`py-2 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'sante' ? 'bg-[#0072F5] text-white shadow-sm' : 'bg-white/10 text-slate-200 hover:bg-white/20'
              }`}
            >
              <HeartPulse className="w-3.5 h-3.5" />
              <span>Santé</span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveTab('pro'); setIsSubmitted(false); }}
              className={`py-2 px-3 rounded-lg text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
                activeTab === 'pro' ? 'bg-[#0072F5] text-white shadow-sm' : 'bg-white/10 text-slate-200 hover:bg-white/20'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Entreprise</span>
            </button>
          </div>
        </div>

        {/* Modal Form / Confirmation */}
        <div className="p-5 sm:p-8 max-h-[72vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Demande de devis enregistrée avec succès !</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Merci <strong className="text-slate-900">{fullName || 'Cher client'}</strong>. Votre conseiller dédié d'Echkili Assurances (Av Guemassa, Mhamid) a bien reçu vos paramètres de simulation (estimation : <strong className="text-[#0072F5]">{estimatedPrice.toLocaleString('fr-FR')} MAD/an</strong>).
              </p>
              <p className="text-xs text-slate-500">
                Nous vous recontacterons sous 2h ouvrées au <strong className="text-slate-800">{phone}</strong>.
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg bg-[#25D366] text-white font-bold text-sm shadow-md flex items-center gap-2 hover:bg-emerald-600"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Accélérer via WhatsApp direct</span>
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-lg bg-slate-100 text-slate-700 font-semibold text-sm hover:bg-slate-200"
                >
                  Fermer
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* TAB 1: AUTO FORM */}
              {activeTab === 'auto' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Type d'engin
                      </label>
                      <select 
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                      >
                        <option value="voiture">Voiture Particulière</option>
                        <option value="suv">SUV / 4x4</option>
                        <option value="utilitaire">Véhicule Utilitaire</option>
                        <option value="moto">Moto / Scooter</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Puissance fiscale (CV)
                      </label>
                      <select 
                        value={fiscalPower}
                        onChange={(e) => setFiscalPower(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                      >
                        <option value="6">6 CV et moins</option>
                        <option value="7">7 CV</option>
                        <option value="8">8 CV</option>
                        <option value="9">9 - 10 CV</option>
                        <option value="11">11 CV et plus</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Carburant
                      </label>
                      <select 
                        value={fuelType}
                        onChange={(e) => setFuelType(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                      >
                        <option value="diesel">Diesel</option>
                        <option value="essence">Essence</option>
                        <option value="hybride">Hybride / Électrique</option>
                      </select>
                    </div>
                  </div>

                  {/* Formules Auto */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                      Niveau de couverture souhaité
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div 
                        onClick={() => setAutoFormula('tiers')}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          autoFormula === 'tiers' ? 'border-[#0072F5] bg-blue-50/50 ring-1 ring-[#0072F5]' : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="font-bold text-sm text-slate-900">Tiers Simple</div>
                        <div className="text-xs text-slate-500 mt-1">RC obligatoire, Défense & Recours, Assistance panne</div>
                      </div>

                      <div 
                        onClick={() => setAutoFormula('collision')}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          autoFormula === 'collision' ? 'border-[#0072F5] bg-blue-50/50 ring-1 ring-[#0072F5]' : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="font-bold text-sm text-slate-900 flex items-center justify-between">
                          <span>Tiers Collision</span>
                          <span className="text-[10px] bg-blue-100 text-[#0072F5] font-bold px-1.5 py-0.5 rounded">Populaire</span>
                        </div>
                        <div className="text-xs text-slate-500 mt-1">Tiers + Bris de glace + Vol & Incendie + Collision</div>
                      </div>

                      <div 
                        onClick={() => setAutoFormula('tous_risques')}
                        className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                          autoFormula === 'tous_risques' ? 'border-[#0072F5] bg-blue-50/50 ring-1 ring-[#0072F5]' : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="font-bold text-sm text-slate-900">Tous Risques AXA</div>
                        <div className="text-xs text-slate-500 mt-1">Protection maximale tous accidents sans franchise excessive</div>
                      </div>
                    </div>
                  </div>

                  {/* Options Checkboxes */}
                  <div className="flex flex-wrap gap-4 pt-1">
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={optionBrisGlace}
                        onChange={(e) => setOptionBrisGlace(e.target.checked)}
                        className="w-4 h-4 rounded text-[#0072F5] focus:ring-[#0072F5]"
                      />
                      <span>Bris de glace sans franchise (Vitrages agréés Marrakech)</span>
                    </label>

                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={optionVehiculeRelais}
                        onChange={(e) => setOptionVehiculeRelais(e.target.checked)}
                        className="w-4 h-4 rounded text-[#0072F5] focus:ring-[#0072F5]"
                      />
                      <span>Véhicule de remplacement en cas d'immobilisation</span>
                    </label>
                  </div>
                </div>
              )}

              {/* TAB 2: HABITATION FORM */}
              {activeTab === 'habitation' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Type de bien
                      </label>
                      <select 
                        value={housingType}
                        onChange={(e) => setHousingType(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                      >
                        <option value="appartement">Appartement</option>
                        <option value="villa">Villa résidentielle</option>
                        <option value="riad">Riad Médina / Gueliz</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Superficie habitable (m²)
                      </label>
                      <input 
                        type="number" 
                        value={surfaceArea}
                        onChange={(e) => setSurfaceArea(e.target.value)}
                        placeholder="120"
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Valeur mobilier estimée (MAD)
                      </label>
                      <select 
                        value={furnitureValue}
                        onChange={(e) => setFurnitureValue(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                      >
                        <option value="100000">Jusqu'à 100 000 MAD</option>
                        <option value="200000">100 000 à 300 000 MAD</option>
                        <option value="500000">300 000 à 600 000 MAD</option>
                        <option value="1000000">Plus de 600 000 MAD</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-1">
                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={optionVol}
                        onChange={(e) => setOptionVol(e.target.checked)}
                        className="w-4 h-4 rounded text-[#0072F5]"
                      />
                      <span>Option Vol & Vandalisme avec effraction</span>
                    </label>

                    <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer">
                      <input 
                        type="checkbox"
                        checked={optionPiscine}
                        onChange={(e) => setOptionPiscine(e.target.checked)}
                        className="w-4 h-4 rounded text-[#0072F5]"
                      />
                      <span>Jardin, piscine & équipements extérieurs</span>
                    </label>
                  </div>
                </div>
              )}

              {/* TAB 3: SANTE FORM */}
              {activeTab === 'sante' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Nombre d'assurés (Famille)
                      </label>
                      <select 
                        value={beneficiaries}
                        onChange={(e) => setBeneficiaries(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                      >
                        <option value="1">1 personne (Individuel)</option>
                        <option value="2">2 personnes (Couple)</option>
                        <option value="3">3 personnes (Famille avec 1 enfant)</option>
                        <option value="4">4 personnes et plus</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Taux de remboursement souhaité
                      </label>
                      <select 
                        value={santeFormula}
                        onChange={(e) => setSanteFormula(e.target.value as any)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                      >
                        <option value="confort_80">Confort 80% (Soins courants & hospitalisation)</option>
                        <option value="serenite_90">Sérénité 90% (Cliniques privées & forfaits)</option>
                        <option value="prestige_100">Prestige 100% (Prise en charge intégrale)</option>
                      </select>
                    </div>
                  </div>

                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-700 cursor-pointer pt-1">
                    <input 
                      type="checkbox"
                      checked={optionOptiqueDentaire}
                      onChange={(e) => setOptionOptiqueDentaire(e.target.checked)}
                      className="w-4 h-4 rounded text-[#0072F5]"
                    />
                    <span>Forfait renforcé Optique (verres/montures) & Soins dentaires</span>
                  </label>
                </div>
              )}

              {/* TAB 4: PRO & ENTREPRISE */}
              {activeTab === 'pro' && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Secteur d'activité
                      </label>
                      <select 
                        value={proActivity}
                        onChange={(e) => setProActivity(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                      >
                        <option value="commerce">Commerce de détail / Showroom</option>
                        <option value="riad_hotel">Riad / Maison d'hôtes / Restauration</option>
                        <option value="btp">BTP & Construction / Artisanat</option>
                        <option value="services">Services & Bureaux d'études</option>
                        <option value="industrie">Industrie & Agroalimentaire</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Effectif de l'entreprise
                      </label>
                      <select 
                        value={employeeCount}
                        onChange={(e) => setEmployeeCount(e.target.value)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                      >
                        <option value="2">1 à 3 salariés</option>
                        <option value="5">4 à 9 salariés</option>
                        <option value="15">10 à 25 salariés</option>
                        <option value="40">Plus de 25 salariés</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Police principale
                      </label>
                      <select 
                        value={proCoverage}
                        onChange={(e) => setProCoverage(e.target.value as any)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                      >
                        <option value="at">Accidents du Travail (Loi 18-12)</option>
                        <option value="multirisque">Multirisque Locaux & Stock</option>
                        <option value="pack_global">Pack Global Pro (AT + Multirisque)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* ESTIMATION DISPLAY BAR */}
              <div className="bg-gradient-to-r from-slate-900 to-[#0F2B5C] rounded-xl p-4 sm:p-5 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-xs text-sky-300 font-semibold uppercase tracking-wider">
                    Tarif indicatif annuel calculé
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white flex items-baseline gap-1.5 mt-0.5">
                    <span>{estimatedPrice.toLocaleString('fr-FR')}</span>
                    <span className="text-sm font-bold text-sky-300">MAD TTC / an</span>
                    <span className="text-xs text-slate-400 font-normal">
                      (ou env. {Math.round(estimatedPrice / 12).toLocaleString('fr-FR')} MAD/mois)
                    </span>
                  </div>
                </div>

                <div className="text-right text-xs text-slate-300 max-w-xs sm:border-l sm:border-slate-700 sm:pl-4">
                  <span className="flex items-center gap-1 font-semibold text-white mb-0.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Assistance 0 km 24/7 incluse
                  </span>
                  Tarif garanti par Assurances Echkili, Agent Général AXA Marrakech.
                </div>
              </div>

              {/* CLIENT DETAILS SECTION */}
              <div className="border-t border-slate-100 pt-5 space-y-4">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Vos coordonnées pour finaliser le dossier
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Nom complet *
                    </label>
                    <input 
                      type="text" 
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ex: Mohamed Alami"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Numéro de téléphone (Maroc) *
                    </label>
                    <input 
                      type="tel" 
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: 06 61 23 45 67"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Adresse Email
                    </label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: m.alami@gmail.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Ville de résidence
                    </label>
                    <select 
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                    >
                      <option value="Marrakech">Marrakech (M'hamid / Guéliz / Médina)</option>
                      <option value="Casablanca">Casablanca</option>
                      <option value="Rabat">Rabat</option>
                      <option value="Autre">Autre région Maroc</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#0072F5] hover:bg-[#005ec4] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Envoyer ma demande de devis</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-[#25D366] hover:bg-emerald-600 text-white font-bold text-sm shadow-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Transmettre sur WhatsApp direct</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1">
                <Info className="w-3.5 h-3.5" />
                <span>Simulation indicative confidentielle sans engagement selon les barèmes AXA Maroc en vigueur.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
