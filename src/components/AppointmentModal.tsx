import { useState } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Video, 
  CheckCircle2, 
  MessageCircle,
  ArrowRight
} from 'lucide-react';
import { AGENCY_INFO } from '../data/content';

interface AppointmentModalProps {
  onClose: () => void;
}

export default function AppointmentModal({ onClose }: AppointmentModalProps) {
  const [meetingType, setMeetingType] = useState<'agence' | 'telephone' | 'visio'>('agence');
  const [subject, setSubject] = useState('auto');
  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState('10:00');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableSlots = [
    '09:00', '10:00', '11:00', '12:00',
    '14:30', '15:30', '16:30', '17:30'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const typeLabel = meetingType === 'agence' ? 'À l’agence Echkili Assurances (Av Guemassa, Mhamid Marrakech)' : meetingType === 'telephone' ? 'Par Téléphone' : 'En Visioconférence';
    return `Bonjour Echkili Assurances,\nJe confirme ma demande de rendez-vous :\n- Type : ${typeLabel}\n- Date : ${date} à ${timeSlot}\n- Sujet : ${subject}\n- Nom : ${fullName}\n- Tél : ${phone}`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden border border-slate-100 my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Banner */}
        <div className="bg-[#0F2B5C] text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-sky-300 text-xs font-bold uppercase tracking-wider mb-2">
            <Calendar className="w-4 h-4" />
            <span>Votre Agent Général AXA Assurances Maroc</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Prendre Rendez-vous
          </h2>
          <p className="text-xs sm:text-sm text-slate-200 mt-1 max-w-lg">
            Rencontrez nos conseillers spécialisés à l'agence (Avenue Guemassa, M'hamid Marrakech) ou planifiez un entretien téléphonique.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-black text-slate-900">Rendez-vous confirmé !</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Monsieur/Madame <strong className="text-slate-900">{fullName}</strong>, votre rendez-vous est fixé pour le <strong className="text-[#0072F5]">{date} à {timeSlot}</strong>.
              </p>
              
              <div className="p-4 bg-slate-50 rounded-xl max-w-md mx-auto text-xs text-slate-700 text-left space-y-1.5 border border-slate-200">
                <div><strong>Lieu / Canal :</strong> {meetingType === 'agence' ? 'Agence Echkili Assurances, Rdc magasin 2, Imm Erraha N°8, Av Guemassa, Mhamid Marrakech' : meetingType === 'telephone' ? `Appel au ${phone}` : 'Visioconférence'}</div>
                <div><strong>Téléphone Agence :</strong> 05 25 36 30 61 / 06 67 76 21 24</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/${AGENCY_INFO.whatsapp}?text=${encodeURIComponent(getWhatsAppMessage())}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-lg bg-[#25D366] text-white font-bold text-sm shadow-md flex items-center gap-2 hover:bg-emerald-600"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Recevoir rappel sur WhatsApp</span>
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
              {/* Meeting Type */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                  1. Format du rendez-vous
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div
                    onClick={() => setMeetingType('agence')}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      meetingType === 'agence' ? 'border-[#0072F5] bg-blue-50/60 ring-1 ring-[#0072F5]' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <MapPin className="w-5 h-5 text-[#0072F5] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-slate-900">À l'Agence</div>
                      <div className="text-[11px] text-slate-500">Av Guemassa, Mhamid Marrakech</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setMeetingType('telephone')}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      meetingType === 'telephone' ? 'border-[#0072F5] bg-blue-50/60 ring-1 ring-[#0072F5]' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Phone className="w-5 h-5 text-[#0072F5] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-slate-900">Par Téléphone</div>
                      <div className="text-[11px] text-slate-500">Rappel par un expert</div>
                    </div>
                  </div>

                  <div
                    onClick={() => setMeetingType('visio')}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      meetingType === 'visio' ? 'border-[#0072F5] bg-blue-50/60 ring-1 ring-[#0072F5]' : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <Video className="w-5 h-5 text-[#0072F5] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-sm text-slate-900">Visioconférence</div>
                      <div className="text-[11px] text-slate-500">Lien Google Meet / WhatsApp</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  2. Objet du rendez-vous
                </label>
                <select 
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                >
                  <option value="Devis Assurance Auto & Moto">Devis Assurance Auto & Moto</option>
                  <option value="Habitation Manzilouna / Riad">Habitation Manzilouna / Villa / Riad</option>
                  <option value="Multirisque Professionnelle & Commerces">Multirisque Professionnelle & Commerces</option>
                  <option value="Accidents du Travail (Loi 18-12)">Accidents du Travail (Loi 18-12)</option>
                  <option value="Tous Risques Chantier BTP">Tous Risques Chantier (TRC & BTP)</option>
                  <option value="Déclaration ou suivi d'un sinistre">Déclaration ou suivi d'un sinistre</option>
                  <option value="Autre demande de conseil">Autre demande de conseil</option>
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    3. Date souhaitée
                  </label>
                  <input 
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Créneau horaire
                  </label>
                  <select 
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                  >
                    {availableSlots.map(slot => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Client Info */}
              <div className="border-t border-slate-100 pt-4 space-y-4">
                <label className="block text-xs font-bold text-slate-700 uppercase">
                  4. Vos coordonnées
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nom complet *"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                  />
                  <input 
                    type="tel" 
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Téléphone (Maroc) *"
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-200 bg-white focus:ring-2 focus:ring-[#0072F5] focus:outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-lg bg-[#0072F5] hover:bg-[#005ec4] text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors"
                >
                  <span>Confirmer mon rendez-vous</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${AGENCY_INFO.phone1}`}
                  className="w-full sm:w-auto px-5 py-3.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#0072F5]" />
                  <span>Appel direct : {AGENCY_INFO.phoneDisplay}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
