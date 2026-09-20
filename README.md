# Echkili Assurances - Agent Général AXA Assurances Maroc

Site web officiel moderne et responsive de l'agence **Echkili Assurances**, Agent Général AXA Assurances Maroc situé à Marrakech (M'hamid, Avenue Guemassa).

![Aperçu Echkili Assurances](/public/images/agency-office.jpg)

## 🚀 Fonctionnalités Clés

- **Présentation de l'agence** : Coordonnées complètes, horaires d'ouverture, localisation géographique avec plan interactif Google Maps.
- **Catalogue complet des solutions AXA Maroc** :
  - **Particuliers** : Assurance Automobile & Moto, Multirisque Habitation Manzilouna, Santé & Prévoyance, Épargne & Retraite.
  - **Professionnels & Entreprises** : Accidents du Travail (AT), Multirisque Professionnelle, Responsabilité Civile, Flotte Auto, Santé Groupe.
- **Simulateur de Devis Express 2 min** : Calculateur dynamique de prime indicative avec transfert direct par formulaire ou WhatsApp.
- **Prise de Rendez-vous en ligne** : Choix de la date, de l'heure et du canal (À l'agence, par Téléphone ou Visioconférence).
- **Guide des Sinistres & Urgences** : Étapes claires en cas d'accident de la circulation, dégât des eaux, vol ou bris de glace, avec assistance 24/7.
- **Moteur de Recherche Intelligente** : Recherche instantanée par mots-clés dans les garanties et solutions.
- **Boutons d'Action Flottants & Dock Mobile** : Contact WhatsApp direct, appel en 1 clic et prise de RDV.

---

## 🛠️ Stack Technique

- **Frontend** : [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler** : [Vite](https://vitejs.dev/)
- **Styles** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconographie** : [Lucide React](https://lucide.dev/)
- **Animations** : [Motion](https://motion.dev/)

---

## 💻 Installation & Développement Local

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/votre-compte/echkili-assurances.git
   cd echkili-assurances
   ```

2. **Installer les dépendances :**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement :**
   ```bash
   npm run dev
   ```
   L'application sera accessible sur `http://localhost:3000`.

4. **Compiler pour la production :**
   ```bash
   npm run build
   ```
   Les fichiers optimisés seront générés dans le dossier `dist/`.

---

## ☁️ Déploiement sur Vercel (Recommandé)

Le projet inclut un fichier `vercel.json` préconfiguré pour Vite SPA.

### Méthode 1 : Via l'interface Vercel (Import GitHub)
1. Poussez votre code sur votre compte **GitHub**.
2. Rendez-vous sur [Vercel](https://vercel.com/) et connectez-vous.
3. Cliquez sur **"Add New Project"** puis sélectionnez votre dépôt GitHub.
4. Vercel détecte automatiquement :
   - **Framework Preset** : `Vite`
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
5. Cliquez sur **"Deploy"**. En 30 secondes, votre site sera en ligne avec SSL et CDN mondial.

### Méthode 2 : Via le CLI Vercel
```bash
npm i -g vercel
vercel
```

---

## 📱 Optimisation Mobile & Ordinateur

- **Mobile First** : Navigation fluide avec drawer latéral, menu accordéon et barre d'actions rapide fixée en bas de l'écran (Devis, Appel, WhatsApp, RDV).
- **Desktop & Grand Écran** : Header complet avec méga-menus, slider hero avec transitions douces, grilles adaptatives (jusqu'à 5 colonnes) et cartes interactives.
- **Performances** : Images locales ultra-légères, pas d'appels bloquants, SVG vectoriels purs.

---

## 📍 Contact de l'Agence

- **Adresse** : Rdc magasin 2, Imm Erraha N°8, Av Guemassa, Mhamid Marrakech, Maroc
- **Téléphones** : `+212 5 25 36 30 61` / `+212 6 67 76 21 24`
- **WhatsApp** : `+212 6 67 76 21 24`
- **Email** : `agence.echkili@axa.ma`
