export interface ProductPack {
  name: string;
  badge?: string;
  popular?: boolean;
  priceIndication?: string;
  description: string;
  features: string[];
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface ProductExtendedInfo {
  heroTagline: string;
  keyStats: { label: string; value: string; hint?: string }[];
  packs: ProductPack[];
  requiredDocuments: string[];
  faqs: ProductFaq[];
  claimsNotice: string;
}

export const PRODUCT_EXTENDED_DETAILS: Record<string, ProductExtendedInfo> = {
  auto: {
    heroTagline: "L'Assurance Auto N°1 au Maroc avec Remorquage 0 km et Assistance 24/7 partout dans le Royaume.",
    keyStats: [
      { label: "Assistance Dépannage", value: "0 km", hint: "Dès le pas de votre porte" },
      { label: "Prise en charge sinistre", value: "24h/24", hint: "Service d'urgence continue" },
      { label: "Réseau Garages Agréés", value: "+120", hint: "Sans avance de frais" },
    ],
    packs: [
      {
        name: "Formule Tiers Éco",
        description: "L'essentiel pour circuler en toute légalité et sérénité avec assistance incluse.",
        priceIndication: "Dès 2 450 DH / an",
        features: [
          "Responsabilité Civile obligatoire",
          "Défense pénale et recours amiable",
          "Assistance remorquage 0 km",
          "Protection corporelle conducteur de base",
        ],
      },
      {
        name: "Formule Équilibre",
        badge: "Le plus choisi à Marrakech",
        popular: true,
        description: "La protection idéale contre les risques courants de la circulation et du stationnement.",
        priceIndication: "Dès 3 850 DH / an",
        features: [
          "Toutes les garanties de la formule Tiers",
          "Bris de glaces sans franchise (pare-brise, lunette)",
          "Incendie & Explosion",
          "Vol du véhicule et accessoires d'origine",
          "Véhicule de remplacement pendant les réparations",
        ],
      },
      {
        name: "Formule Tous Risques Sérénité",
        badge: "Protection Maximale",
        description: "Couverture intégrale pour les véhicules récents, berlines et SUV face à tous les imprévus.",
        priceIndication: "Sur devis personnalisé",
        features: [
          "Dommages tous accidents (même responsable)",
          "Tierce collision & vandalisme",
          "Événements naturels & catastrophes",
          "Indemnisation en valeur à neuf (selon vétusté)",
          "Assistance VIP et remorquage illimité",
        ],
      },
    ],
    requiredDocuments: [
      "Copie de la Carte Grise du véhicule (recto/verso)",
      "Copie du Permis de Conduire en cours de validité",
      "Copie de la Carte d'Identité Nationale (CIN) du souscripteur",
      "Relevé d'informations de l'assurance précédente (pour bonus/malus)",
    ],
    faqs: [
      {
        question: "Que faire immédiatement en cas d'accident de voiture à Marrakech ?",
        answer: "Sécurisez les lieux avec votre gilet et triangle. En cas de dégâts matériels, remplissez le constat amiable d'accident. Contactez immédiatement l'assistance AXA au 05 22 58 88 58 pour le remorquage et prévenez votre agence Echkili au 05 25 36 30 61.",
      },
      {
        question: "Comment fonctionne l'assistance 0 km ?",
        answer: "Même si votre voiture refuse de démarrer devant votre domicile ou votre bureau à Marrakech, une dépanneuse intervient gratuitement pour vous dépanner sur place ou remorquer le véhicule vers le garage partenaire de votre choix.",
      },
      {
        question: "Bénéficie-t-on de tarifs conventionnés pour les fonctionnaires ou conventions ?",
        answer: "Oui ! L'agence Echkili Assurances applique des remises conventionnelles substantielles pour l'Éducation Nationale (Fondation Mohammed VI), la Santé, la Justice, la DGSN et plusieurs grandes entreprises partenaires.",
      },
    ],
    claimsNotice: "En cas de sinistre automobile, déclarez votre dossier dans un délai de 5 jours ouvrés à l'agence Echkili Assurances (Av Guemassa, M'hamid).",
  },
  habitation: {
    heroTagline: "Protégez votre riad, villa ou appartement avec Manzilouna d'AXA, la référence multirisque au Maroc.",
    keyStats: [
      { label: "Intervention Urgence", value: "24h/24", hint: "Plomberie & Serrurerie" },
      { label: "Biens de valeur", value: "Couvert", hint: "Meubles, bijoux, high-tech" },
      { label: "RC Chef de Famille", value: "Incluse", hint: "Dommages causés aux tiers" },
    ],
    packs: [
      {
        name: "Pack Locataire / Studio",
        description: "Couverture économique conforme aux obligations des baux de location.",
        priceIndication: "Dès 450 DH / an",
        features: [
          "Responsabilité locative envers le propriétaire",
          "Incendie, explosion et dégât des eaux",
          "Recours des voisins et des tiers",
          "Assistance plomberie et serrurerie d'urgence",
        ],
      },
      {
        name: "Pack Famille & Propriétaire",
        badge: "Recommandé",
        popular: true,
        description: "Assurance intégrale pour votre résidence principale avec protection des biens et de la famille.",
        priceIndication: "Dès 950 DH / an",
        features: [
          "Bâtiment et contenu assurés en valeur à neuf",
          "Vol avec effraction et détériorations",
          "Bris de glaces, miroirs et baies vitrées",
          "RC Vie privée et employés de maison",
          "Frais de relogement provisoire si logement inhabitable",
        ],
      },
      {
        name: "Pack Riad & Villa Prestige",
        badge: "Sur-Mesure Marrakech",
        description: "Garanties haut de gamme adaptées aux riads de la Médina, villas de Guéliz, Palmeraie et Targa.",
        priceIndication: "Sur étude sur site",
        features: [
          "Plafonds de capitaux mobiliers très élevés",
          "Couverture des piscines, jardins et dépendances",
          "Objets d'art, tapis rares et mobilier traditionnel",
          "Assistance VIP avec artisans qualifiés express",
        ],
      },
    ],
    requiredDocuments: [
      "Copie de la CIN du propriétaire ou du locataire",
      "Adresse exacte du bien (quittance d'eau/électricité RADEEMA ou contrat de bail)",
      "Estimation globale de la valeur du mobilier et équipements",
      "Superficie approximative et nombre de pièces",
    ],
    faqs: [
      {
        question: "L'assurance habitation couvre-t-elle les fuites d'eau et infiltrations ?",
        answer: "Absolument. La garantie Dégâts des Eaux Manzilouna prend en charge la recherche de fuite, la réparation des dommages causés à vos peintures, parquets et plafonds, ainsi que les dégâts causés chez vos voisins du dessous.",
      },
      {
        question: "Mon personnel de maison est-il protégé ?",
        answer: "La responsabilité civile chef de famille couvre les dommages que vos aides ménagères ou gardiens pourraient causer à des tiers dans l'exercice de leurs fonctions.",
      },
      {
        question: "Puis-je assurer un logement destiné à la location courte durée (Airbnb / Booking) ?",
        answer: "Oui, nous proposons une clause spécifique pour les biens loués en meublé touristique à Marrakech pour sécuriser votre investissement.",
      },
    ],
    claimsNotice: "En cas de dégât des eaux ou vol, contactez-nous immédiatement et ne jetez aucun élément endommagé avant le passage de l'expert.",
  },
  sante: {
    heroTagline: "Accédez aux meilleures cliniques privées de Marrakech avec le Tiers-Payant AXA sans avance de frais.",
    keyStats: [
      { label: "Tiers-Payant Cliniques", value: "100%", hint: "Accords partenaires nationaux" },
      { label: "Remboursement soins", value: "48h", hint: "Virement direct sur votre compte" },
      { label: "Réseau Médical", value: "Maroc & Étranger", hint: "Prise en charge d'urgence" },
    ],
    packs: [
      {
        name: "Formule Essentielle",
        description: "Sécurise les gros pépins de santé et les hospitalisations imprévues.",
        features: [
          "Prise en charge hospitalisation médicale et chirurgicale",
          "Frais de séjour en clinique conventionnée",
          "Soins intensifs et réanimation",
          "Transport sanitaire d'urgence",
        ],
      },
      {
        name: "Formule Confort Famille",
        popular: true,
        badge: "Choix N°1 Familles",
        description: "Couverture globale incluant la médecine courante, la pharmacie et les examens.",
        features: [
          "Consultations généralistes et spécialistes",
          "Pharmacie et analyses de laboratoire",
          "Radiologie, échographie, scanner et IRM",
          "Optique (lunettes & verres correcteurs)",
          "Soins dentaires et détartrage",
        ],
      },
      {
        name: "Formule Sérénité Intégrale",
        badge: "Prestige Santé",
        description: "Les plafonds de remboursement les plus élevés avec prise en charge maternité et orthodontie.",
        features: [
          "Plafonds annuels renforcés par bénéficiaire",
          "Frais de maternité et accouchement en clinique privée",
          "Orthodontie et prothèses dentaires haut de gamme",
          "Chambre particulière prise en charge lors de l'hospitalisation",
          "Assistance évacuation sanitaire internationale",
        ],
      },
    ],
    requiredDocuments: [
      "Copie de la CIN du souscripteur et du conjoint",
      "Copies des livrets de famille ou actes de naissance pour les enfants",
      "Relevé d'Identité Bancaire (RIB) pour les remboursements directs",
      "Questionnaire de santé confidentiel rempli en agence",
    ],
    faqs: [
      {
        question: "Quelles cliniques de Marrakech sont conventionnées en Tiers-Payant AXA ?",
        answer: "La quasi-totalité des grandes cliniques de Marrakech (Clinique Internationale, Clinique du Sud, Clinique de l'Aéroport, etc.) disposent d'une convention directe avec AXA pour une prise en charge immédiate sans avance des frais d'hospitalisation.",
      },
      {
        question: "Sous quel délai mes feuilles de soins sont-elles remboursées ?",
        answer: "Dès dépôt de votre dossier complet à notre agence Echkili (Av Guemassa), le traitement s'effectue sous 48h à 72h ouvrées avec virement direct sur votre compte bancaire.",
      },
    ],
    claimsNotice: "Pour une hospitalisation programmée, déposez votre demande de prise en charge 48h à l'avance pour validation du tiers-payant.",
  },
  "accidents-travail": {
    heroTagline: "Conformité légale absolue avec la loi 18-12 et protection de vos salariés sur le lieu de travail et sur le trajet.",
    keyStats: [
      { label: "Obligation Maroc", value: "Loi 18-12", hint: "Indispensable pour employeurs" },
      { label: "Prise en charge", value: "Directe", hint: "Cliniques et soins sans frais" },
      { label: "Attestation", value: "Immédiate", hint: "Pour inspection et marchés" },
    ],
    packs: [
      {
        name: "Pack Artisan & Très Petite Entreprise (TPE)",
        description: "Pour les structures de 1 à 5 salariés (boutiques, ateliers, petits commerces).",
        features: [
          "Conformité avec l'Inspection du Travail",
          "Remboursement à 100% des frais médicaux et pharmaceutiques",
          "Indemnités journalières en cas d'arrêt temporaire",
          "Attestation officielle délivrée en 1 heure",
        ],
      },
      {
        name: "Pack PME & Services / Hôtellerie",
        popular: true,
        badge: "Recommandé Riads & Restaurants",
        description: "Idéal pour les riads, restaurants, sociétés de nettoyage, gardiennage et bureaux.",
        features: [
          "Gestion simplifiée des déclarations de salaires",
          "Prise en charge en clinique sans avance de fonds par l'employé",
          "Assistance juridique en cas de litige social",
          "Ajustement annuel selon la masse salariale réelle",
        ],
      },
      {
        name: "Pack BTP, Industrie & Risques Lourds",
        badge: "Haute Protection",
        description: "Garanties renforcées pour les ouvriers de chantiers, usines et ateliers mécaniques.",
        features: [
          "Plafonds renforcés pour prothèses et rééducation fonctionnelle",
          "Rentes viagères d'incapacité permanente ou de survie",
          "Cellule de gestion des accidents graves en temps réel",
          "Conseils de prévention des risques professionnels sur site",
        ],
      },
    ],
    requiredDocuments: [
      "Copie du Registre de Commerce (RC) ou Modèle J récent",
      "Copie de la CIN du gérant",
      "État de la masse salariale (ou bordereau CNSS récent avec nombre de salariés)",
      "Description précise de l'activité exercée",
    ],
    faqs: [
      {
        question: "L'assurance Accidents du Travail est-elle obligatoire pour mon entreprise ?",
        answer: "Oui, la loi marocaine n° 18-12 rend obligatoire la souscription d'une assurance Accidents du Travail pour tout employeur, sous peine de lourdes sanctions pécuniaires et pénales en cas de contrôle de l'Inspection du Travail.",
      },
      {
        question: "Le trajet entre le domicile du salarié et l'entreprise est-il couvert ?",
        answer: "Oui, les accidents de trajet survenus pendant l'aller et le retour habituel du salarié sont assimilés à des accidents du travail et pris en charge à 100%.",
      },
    ],
    claimsNotice: "Tout accident doit être déclaré dans les 5 jours à l'agence Echkili avec le certificat médical initial descriptif des blessures.",
  },
  "multirisque-pro": {
    heroTagline: "Sécurisez vos locaux professionnels, stocks, matériels et chiffre d'affaires contre tous les aléas à Marrakech.",
    keyStats: [
      { label: "Perte d'exploitation", value: "Garantie", hint: "Maintien de vos marges" },
      { label: "Locaux & Riads", value: "Sur-Mesure", hint: "Évaluation personnalisée" },
      { label: "Expertise locale", value: "Marrakech", hint: "Déplacement sur site" },
    ],
    packs: [
      {
        name: "Formule Commerce & Boutique",
        description: "Pour commerces de détail, magasins d'artisanat, showrooms et agences.",
        features: [
          "Incendie, foudre, explosion et dégâts des eaux",
          "Vol du stock et du fond de caisse",
          "Bris de vitrines et d'enseignes lumineuses",
          "RC Exploitation vis-à-vis de la clientèle",
        ],
      },
      {
        name: "Formule Riad Maison d'Hôtes & Restaurant",
        popular: true,
        badge: "Spécial Marrakech Tourisme",
        description: "Spécialement calibrée pour le secteur de l'hospitalité et de la restauration.",
        features: [
          "Bâtiment historique / riad traditionnel assuré",
          "Indemnisation en cas d'intoxication alimentaire",
          "Perte d'exploitation pour compenser les réservations annulées",
          "RC Vestiaire et bagages des clients",
        ],
      },
      {
        name: "Formule Entreprise & Industrie",
        badge: "Grands Comptes",
        description: "Pour usines, entrepôts logistiques, ateliers de fabrication et gros parcs de machines.",
        features: [
          "Bris de machines et dommages électriques",
          "Marchandises en chambres froides et denrées périssables",
          "Recours des voisins et tiers avoisinants",
          "Accompagnement par des ingénieurs prévention AXA",
        ],
      },
    ],
    requiredDocuments: [
      "Registre de commerce (RC) et Identifiant Fiscal (IF/ICE)",
      "Bail commercial ou titre de propriété des locaux",
      "Inventaire estimatif du matériel, agencements et stock moyen",
      "Chiffre d'affaires annuel moyen (pour le calcul de la perte d'exploitation)",
    ],
    faqs: [
      {
        question: "Qu'est-ce que la garantie Perte d'Exploitation ?",
        answer: "Si un incendie ou un dégât des eaux vous oblige à fermer temporairement votre commerce ou riad, cette garantie compense la marge brute perdue et prend en charge vos charges fixes (loyers, salaires, crédits bancaires).",
      },
      {
        question: "Proposez-vous une visite de pré-évaluation des risques ?",
        answer: "Oui, un conseiller de l'agence Echkili se déplace directement dans vos locaux à Marrakech pour évaluer les mesures de sécurité et optimiser votre prime.",
      },
    ],
    claimsNotice: "Prenez immédiatement des mesures de sauvegarde pour limiter l'aggravation des dégâts et contactez l'agence.",
  },
  epargne: {
    heroTagline: "Faites fructifier votre capital avec un rendement garanti et préparez la retraite ou les études de vos enfants.",
    keyStats: [
      { label: "Rendement AXA", value: "Garanti", hint: "+ Participation aux bénéfices" },
      { label: "Avantage Fiscal", value: "Déductible", hint: "Optimisation sur l'IR" },
      { label: "Versements", value: "Flexibles", hint: "Mensuels ou ponctuels" },
    ],
    packs: [
      {
        name: "Plan Futuris Individuel (Retraite)",
        popular: true,
        badge: "Meilleure Déductibilité Fiscale",
        description: "Constitution d'un complément de revenu garanti pour vivre une retraite confortable.",
        features: [
          "Taux d'intérêt annuel minimum garanti par AXA Maroc",
          "Participation annuelle aux bénéfices financiers",
          "Déduction fiscale sur l'impôt sur le revenu (IR)",
          "Sortie au terme en capital unique ou rente viagère",
        ],
      },
      {
        name: "Plan Educatis II (Études des Enfants)",
        badge: "Avenir des Enfants",
        description: "Assurez le financement des grandes écoles et universités de vos enfants.",
        features: [
          "Capital versé sous forme de rente trimestrielle pendant les études",
          "Garantie exonération des cotisations en cas de coup dur pour le parent",
          "Versements modulables selon l'âge de l'enfant",
          "Capital disponible dès l'obtention du Baccalauréat",
        ],
      },
      {
        name: "Placement & Épargne Libre",
        description: "Faire fructifier des liquidités avec disponibilité des fonds en cas d'opportunité.",
        features: [
          "Dépôt initial avec versements libres à tout moment",
          "Rachat partiel possible sans pénalités abusives",
          "Sécurité absolue du capital investi",
          "Conseils personnalisés de nos gestionnaires patrimoniaux",
        ],
      },
    ],
    requiredDocuments: [
      "Copie de la CIN du souscripteur",
      "Attestation de salaire ou dernier avis d'imposition (pour optimisation fiscale)",
      "Relevé d'Identité Bancaire (RIB) pour prélèvement ou versement",
      "Actes de naissance des enfants (pour Educatis)",
    ],
    faqs: [
      {
        question: "Quel est l'avantage fiscal du plan retraite Futuris au Maroc ?",
        answer: "Les cotisations versées sur votre plan retraite sont déductibles de votre revenu global imposable (IR) dans la limite des plafonds fiscaux en vigueur, ce qui réduit immédiatement vos impôts.",
      },
      {
        question: "Puis-je récupérer mon argent avant la retraite ?",
        answer: "Oui, des rachats partiels ou totaux sont possibles selon les conditions générales de la police en cas de besoin imprévu.",
      },
    ],
    claimsNotice: "Nos conseillers réalisent gratuitement pour vous un bilan patrimonial et fiscal en agence.",
  },
  moto: {
    heroTagline: "Profitez de vos déplacements urbains ou de vos balades avec une protection moto et scooter taillée sur mesure.",
    keyStats: [
      { label: "Assistance Remorquage", value: "0 km", hint: "Partout à Marrakech" },
      { label: "Attestation", value: "En 10 min", hint: "Délivrance immédiate en agence" },
      { label: "Conducteur", value: "Protégé", hint: "Garantie corporelle incluse" },
    ],
    packs: [
      {
        name: "Formule Scooters & Cylindrées < 125cc",
        description: "Pour vos trajets quotidiens dans la circulation marrakchie.",
        features: [
          "Responsabilité Civile obligatoire",
          "Défense pénale et recours",
          "Assistance panne et remorquage",
          "Attestation immédiate",
        ],
      },
      {
        name: "Formule Moyenne & Grosse Cylindrée",
        popular: true,
        badge: "Recommandé Motards",
        description: "Pour motos routières, trails, roadsters et maxi-scooters.",
        features: [
          "Garantie corporelle renforcée pour le pilote",
          "Assistance 0 km 24h/24",
          "Option Vol et Incendie",
          "Rapatriement de la moto en cas d'accident sur route",
        ],
      },
    ],
    requiredDocuments: [
      "Carte grise de la moto / certificat d'immatriculation",
      "Permis de conduire catégorie A / A1",
      "Copie de la CIN",
    ],
    faqs: [
      {
        question: "Mon équipement moto est-il couvert ?",
        answer: "Des options spécifiques permettent de couvrir votre casque et blouson en cas de chute ou d'accident de la circulation.",
      },
    ],
    claimsNotice: "Remplissez le constat amiable et contactez immédiatement l'assistance dépannage au 05 22 58 88 58.",
  },
  voyage: {
    heroTagline: "Attestation officielle conforme Visa Schengen délivrée en 5 minutes avec couverture médicale mondiale.",
    keyStats: [
      { label: "Conforme Visa", value: "100%", hint: "Attestation officielle Consulat" },
      { label: "Frais Médicaux", value: "Jusqu'à 50 000 €", hint: "Prise en charge à l'étranger" },
      { label: "Remboursement", value: "Si refus", hint: "Prime remboursée sur justificatif" },
    ],
    packs: [
      {
        name: "Pack Schengen Essentiel",
        popular: true,
        badge: "100% Conforme Consulat",
        description: "Conforme aux exigences strictes de l'espace Schengen (France, Espagne, Italie, etc.).",
        features: [
          "Couverture médicale minimale de 30 000 € (conforme code communautaire des visas)",
          "Rapatriement sanitaire vers le Maroc",
          "Attestation officielle bilingue délivrée immédiatement",
          "Garantie remboursement de la prime si le visa est refusé",
        ],
      },
      {
        name: "Pack Monde & Études / Affaires",
        badge: "Voyage International",
        description: "Pour les voyages vers les USA, Canada, Asie, Royaume-Uni et Moyen-Orient.",
        features: [
          "Plafonds médicaux portés à 50 000 € ou 100 000 €",
          "Assistance perte ou vol de bagages",
          "Avance de caution pénale et honoraires d'avocat à l'étranger",
          "Assistance retour d'urgence en cas de décès d'un proche au Maroc",
        ],
      },
    ],
    requiredDocuments: [
      "Copie du Passeport en cours de validité",
      "Dates précises du voyage (date départ et date retour)",
      "Pays de destination principal",
      "Copie de la CIN",
    ],
    faqs: [
      {
        question: "L'attestation est-elle acceptée par TLScontact et BLS International ?",
        answer: "Oui, nos attestations d'assistance voyage AXA sont rigoureusement homologuées et reconnues par tous les centres de visas (TLScontact, BLS, VFS Global, etc.).",
      },
      {
        question: "Que se passe-t-il si mon visa est refusé ?",
        answer: "AXA vous rembourse intégralement la prime payée sur présentation de la notification officielle de refus du consulat.",
      },
    ],
    claimsNotice: "Conservez le numéro d'assistance internationale figurant sur votre carte d'assurance pour toute urgence à l'étranger.",
  },
  "rc-pro": {
    heroTagline: "Protégez la responsabilité juridique et financière de votre société face aux réclamations de tiers et clients.",
    keyStats: [
      { label: "Couverture Juridique", value: "Incluse", hint: "Frais de défense & experts" },
      { label: "Décennale BTP", value: "Conforme", hint: "Pour entrepreneurs et architectes" },
      { label: "Plafonds", value: "Sur-Mesure", hint: "Adaptés à vos marchés" },
    ],
    packs: [
      {
        name: "RC Exploitation Professionnelle",
        description: "Dommages causés à des tiers dans le cadre habituel de vos activités.",
        features: [
          "Dommages corporels, matériels et immatériels",
          "Faute inexcusable ou imprudence d'un employé",
          "Dégâts causés aux biens confiés",
          "Frais d'avocat et défense judiciaire",
        ],
      },
      {
        name: "RC Métiers Intellectuels & Conseils",
        popular: true,
        badge: "Bureaux d'Études & Experts",
        description: "Pour architectes, bureaux d'études, développeurs informatiques et experts-comptables.",
        features: [
          "Erreurs de conception, omissions ou retards de livraison",
          "Pertes financières causées aux clients",
          "Violation involontaire de droits ou de confidentialité",
        ],
      },
      {
        name: "Garantie Décennale Constructeurs",
        badge: "BTP & Chantier",
        description: "Obligation légale pour les constructeurs, maçons et promoteurs.",
        features: [
          "Garantit la solidité de l'ouvrage pendant 10 ans",
          "Couvre les vices cachés du sol et des fondations",
          "Conforme aux exigences des investisseurs et banques",
        ],
      },
    ],
    requiredDocuments: [
      "Registre de commerce (RC) et statuts de la société",
      "Description des activités et types de contrats clients signés",
      "Chiffre d'affaires prévisionnel ou réalisé",
    ],
    faqs: [
      {
        question: "Pourquoi les grands donneurs d'ordre exigent-ils une attestation de RC Pro ?",
        answer: "Elle garantit que si une défaillance ou un dommage survient lors de l'exécution de la mission, l'assureur indemnisera les victimes sans mettre en péril l'entreprise prestataire ni le maître d'ouvrage.",
      },
    ],
    claimsNotice: "Avisez notre agence dès réception de toute mise en demeure ou assignation en justice.",
  },
  "flotte-auto": {
    heroTagline: "Gestion unifiée et tarifs dégressifs pour le parc de véhicules utilitaires et commerciaux de votre entreprise.",
    keyStats: [
      { label: "Dès", value: "3 véhicules", hint: "Contrat unique simplifié" },
      { label: "Assistance Flotte", value: "24h/24", hint: "Véhicules de relais prioritaires" },
      { label: "Tarifs", value: "Dégressifs", hint: "Optimisation de votre budget" },
    ],
    packs: [
      {
        name: "Pack Flotte Commerciale & Utilitaires",
        popular: true,
        badge: "Idéal PME Marrakech",
        description: "Pour fourgonnettes, pickups, voitures de livraison et véhicules de commerciaux.",
        features: [
          "Contrat cadre unique avec échéance commune",
          "Assistance prioritaire 24h/24 pour limiter le temps d'arrêt",
          "Entrées et sorties de véhicules simplifiées",
          "Options marchandises transportées",
        ],
      },
      {
        name: "Pack Transport Touristique & Loueurs",
        badge: "Spécial Agences Marrakech",
        description: "Pour minibus de transfert, 4x4 d'excursion et flottes de location.",
        features: [
          "Couverture des passagers transportés à titre onéreux",
          "Tous risques mutualisés avec franchises négociées",
          "Attestations officielles conformes au Ministère des Transports",
        ],
      },
    ],
    requiredDocuments: [
      "Liste détaillée des véhicules (marques, immatriculations, modèles, puissances)",
      "Copies des cartes grises de l'ensemble du parc",
      "Relevé de sinistralité des 3 dernières années fourni par l'ancien assureur",
      "Statuts de l'entreprise et RC",
    ],
    faqs: [
      {
        question: "Comment ajouter un nouveau véhicule en cours d'année ?",
        answer: "Un simple coup de téléphone ou email à l'agence Echkili avec la carte grise permet d'émettre la carte d'assurance verte immédiatement, avec régularisation comptable.",
      },
    ],
    claimsNotice: "Interlocuteur flotte dédié à l'agence Echkili Assurances pour accélérer l'expertise de vos véhicules.",
  },
  "tous-risques-chantier": {
    heroTagline: "Garantissez l'intégralité de vos travaux de construction ou réhabilitation de riads de la pose de la 1ère pierre à la réception.",
    keyStats: [
      { label: "Tous Intervenants", value: "Couverts", hint: "Entreprises & sous-traitants" },
      { label: "Dégâts mitoyens", value: "Inclus", hint: "Indispensable en Médina" },
      { label: "Crédit promoteur", value: "Accepté", hint: "Validation bancaire facilitée" },
    ],
    packs: [
      {
        name: "Pack Rénovation Riad & Villa",
        popular: true,
        badge: "Spécial Rénovation Marrakech",
        description: "Protection contre les effondrements de murs mitoyens, affaissements et infiltrations.",
        features: [
          "Dommages à l'ouvrage et matériaux stockés sur le site",
          "Responsabilité civile vis-à-vis des voisins et ruelles",
          "Vol des matériaux et équipements de second œuvre",
        ],
      },
      {
        name: "Pack Promotion Immobilière & Immeubles",
        badge: "Grands Chantiers",
        description: "Pour la construction de résidences, hôtels, lotissements et locaux commerciaux.",
        features: [
          "Couverture globale tous corps d'état (Gros œuvre + Finitions)",
          "Catastrophes naturelles, tempêtes et incendies de chantier",
          "Garantie de maintenance après réception de l'ouvrage",
        ],
      },
    ],
    requiredDocuments: [
      "Permis de construire délivré par la Commune de Marrakech",
      "Cahier des charges et devis estimatif global des travaux",
      "Rapport géotechnique du sol (le cas échéant)",
      "Planning prévisionnel du chantier",
    ],
    faqs: [
      {
        question: "Les sous-traitants sont-ils également protégés ?",
        answer: "Oui, la police TRC bénéficie à l'ensemble des entreprises intervenant sur le chantier, évitant les conflits d'assurances croisées.",
      },
    ],
    claimsNotice: "En cas de dommage sur le chantier, prévenez immédiatement l'agence pour la venue de l'expert technique AXA.",
  },
  "prevoyance-entreprise": {
    heroTagline: "Fidélisez vos collaborateurs avec des régimes de retraite collective et assurance maladie groupe 100% déductibles.",
    keyStats: [
      { label: "Déductibilité IS", value: "100%", hint: "Optimisation fiscale des charges" },
      { label: "Fidélisation RH", value: "Maximale", hint: "Avantage social très prisé" },
      { label: "Couverture Groupe", value: "Sur-Mesure", hint: "Cadres & Employés" },
    ],
    packs: [
      {
        name: "Santé Groupe Salariés",
        popular: true,
        badge: "Très Demandé",
        description: "Complémentaire maladie entreprise avec tiers-payant national en cliniques.",
        features: [
          "Remboursement des soins de santé pour les salariés et leurs familles",
          "Prise en charge directe en clinique sans avance de frais",
          "Frais d'optique et dentaires inclus",
          "Cotisations patronales déductibles du résultat fiscal",
        ],
      },
      {
        name: "Retraite Complémentaire Futuris Entreprise",
        badge: "Optimisation Fiscale IS",
        description: "Permet aux collaborateurs de se constituer un capital retraite à des conditions très avantageuses.",
        features: [
          "Abondement patronal modulable par catégorie de personnel",
          "Rendement garanti par AXA Maroc",
          "Exonération fiscale et sociale pour l'entreprise et les salariés",
        ],
      },
    ],
    requiredDocuments: [
      "Registre de commerce (RC) et ICE de la société",
      "Effectif prévisionnel à assurer et moyenne d'âge",
      "Niveau de garanties souhaité (taux de remboursement)",
    ],
    faqs: [
      {
        question: "L'assurance santé groupe est-elle réservée aux grandes entreprises ?",
        answer: "Non, nous proposons des formules santé groupe adaptées dès 5 à 10 salariés, particulièrement adaptées aux PME et établissements hôteliers de Marrakech.",
      },
    ],
    claimsNotice: "Un conseiller entreprise de l'agence Echkili vous accompagne pour la présentation du contrat à vos équipes.",
  },
};
