export interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonAction: 'devis-auto' | 'rendez-vous' | 'devis-habitation';
  image: string;
  badge?: string;
}

export interface ValueItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export type SolutionCategory = 'particuliers' | 'professionnels';

export interface InsuranceSolution {
  id: string;
  title: string;
  category: SolutionCategory;
  badge: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  guarantees: string[];
  advantages: string[];
  targetAudience: string;
  whatsappMessage: string;
}

export interface SinistreStep {
  id: string;
  title: string;
  icon: string;
  urgentNotice: string;
  steps: string[];
  documents: string[];
  emergencyContact: string;
}

export interface DevisFormData {
  type: 'auto' | 'habitation' | 'sante' | 'pro';
  fullName: string;
  phone: string;
  email: string;
  city: string;
  // Auto fields
  vehicleBrand?: string;
  vehicleModel?: string;
  fiscalPower?: string;
  fuelType?: string;
  coverageLevel?: string;
  // Habitation fields
  housingType?: string;
  surfaceArea?: string;
  roomsCount?: string;
  estimatedValue?: string;
  // Sante fields
  beneficiariesCount?: string;
  coverageRate?: string;
  // Pro fields
  companyName?: string;
  activitySector?: string;
  employeesCount?: string;
  message?: string;
}
