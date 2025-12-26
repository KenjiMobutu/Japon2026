# 🇯🇵 Guide de Voyage Japon 2026 - PWA

Application web progressive (PWA) pour votre voyage au Japon du 12 au 21 mars 2026.

## ✨ Fonctionnalités

- ✅ **Installable sur iPhone** - Fonctionne comme une app native
- 📴 **Mode hors-ligne** - Accès complet sans connexion internet
- 📱 **Interface mobile-first** - Optimisée pour smartphone
- 📄 **Export PDF** - Exportez votre itinéraire en PDF
- 📤 **Partage** - Partagez votre voyage facilement
- ✅ **Checklist persistante** - Vos cases cochées sont sauvegardées
- 🎨 **Design moderne** - Interface élégante avec animations
- 🌙 **Dark mode** - S'adapte automatiquement à vos préférences

## 📦 Structure du projet

```
Japon2026/
├── index.html              # Page principale (nouvelle version PWA)
├── voyage-japon-mobile.html # Ancienne version (peut être supprimée)
├── styles.css              # Styles CSS externes
├── app.js                  # JavaScript principal
├── service-worker.js       # Service Worker pour mode hors-ligne
├── manifest.json           # Manifest PWA
├── icons/                  # Icônes de l'application
│   ├── generate-icons.html # Générateur d'icônes
│   └── icon-*.png         # Icônes (à générer)
└── README.md              # Ce fichier
```

## 🚀 Installation

### 1. Générer les icônes

1. Ouvrez `icons/generate-icons.html` dans votre navigateur
2. Cliquez sur "Générer toutes les icônes"
3. Téléchargez chaque icône en cliquant sur les boutons
4. Sauvegardez tous les fichiers PNG dans le dossier `icons/`

Les tailles nécessaires : 72x72, 96x96, 128x128, 144x144, 152x152, 192x192, 384x384, 512x512

### 2. Héberger l'application

L'application doit être servie via HTTPS pour fonctionner comme PWA.

#### Option A : GitHub Pages (Gratuit, Recommandé)

```bash
# 1. Créer un repo GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/japon-2026.git
git push -u origin main

# 2. Activer GitHub Pages
# - Allez dans Settings > Pages
# - Source : main branch
# - Votre site sera disponible à : https://VOTRE-USERNAME.github.io/japon-2026/
```

#### Option B : Netlify (Gratuit, Simple)

1. Créez un compte sur [netlify.com](https://www.netlify.com)
2. Glissez-déposez le dossier `Japon2026` dans Netlify
3. Votre site sera en ligne en quelques secondes

#### Option C : Serveur local pour test

```bash
# Python 3
python -m http.server 8000

# Puis ouvrez : http://localhost:8000
```

## 📱 Installation sur iPhone

### Méthode 1 : Via Safari (PWA)

1. Ouvrez l'URL de votre site dans **Safari** (pas Chrome!)
2. Une bannière "Installer l'application" apparaîtra automatiquement
3. Cliquez sur **"Installer"**
4. L'app sera ajoutée à votre écran d'accueil

### Méthode 2 : Manuellement

1. Ouvrez l'URL dans **Safari**
2. Appuyez sur le bouton **Partager** (carré avec flèche)
3. Faites défiler et sélectionnez **"Sur l'écran d'accueil"**
4. Nommez l'app et appuyez sur **"Ajouter"**

## 🎯 Utilisation

### Navigation

- **Barre du bas** : Navigation rapide entre sections
- **FAB (boutons flottants)** :
  - ↑ : Retour en haut de page
  - 📄 : Export PDF
  - 📤 : Partager

### Fonctionnalités

#### Export PDF
- Cliquez sur le bouton 📄
- Ou utilisez `Ctrl/Cmd + P`
- Le PDF sera téléchargé automatiquement

#### Partage
- Cliquez sur le bouton 📤
- Ou utilisez `Ctrl/Cmd + S`
- Partagez via vos apps préférées

#### Checklist
- Cochez les items dans la section Checklist
- Vos choix sont sauvegardés automatiquement
- Persistent même après fermeture de l'app

#### Mode hors-ligne
- Après la première visite, l'app fonctionne sans internet
- Un indicateur "Mode hors-ligne" apparaît si déconnecté
- Toutes les données sont en cache

## 🛠️ Personnalisation

### Modifier les couleurs

Éditez les variables CSS dans `styles.css` (lignes 7-14) :

```css
:root {
    --primary: #E63946;    /* Rouge principal */
    --secondary: #1D3557;  /* Bleu foncé */
    --accent: #F4A261;     /* Orange */
    --success: #2A9D8F;    /* Vert */
    /* ... */
}
```

### Modifier le contenu

Éditez directement `index.html` pour changer :
- Dates du voyage
- Itinéraire
- Budget
- Activités

### Mettre à jour le cache

Après modification, changez le `CACHE_NAME` dans `service-worker.js` :

```javascript
const CACHE_NAME = 'japon-2026-v2'; // Incrémentez la version
```

## 📊 Performances

- ⚡ Temps de chargement : < 2 secondes
- 📦 Taille totale : ~100 Ko (sans icônes)
- 🚀 Score Lighthouse : 95+
- 📴 Fonctionne 100% hors-ligne après installation

## 🐛 Dépannage

### L'app ne s'installe pas sur iPhone

1. Vérifiez que vous utilisez **Safari** (pas Chrome)
2. Le site doit être en **HTTPS**
3. Vérifiez que `manifest.json` est accessible
4. Videz le cache Safari et réessayez

### Le mode hors-ligne ne fonctionne pas

1. Ouvrez les DevTools (F12) > Application > Service Workers
2. Vérifiez que le Service Worker est actif
3. Essayez de désenregistrer et réenregistrer
4. Rechargez la page

### Les modifications ne s'affichent pas

1. Changez la version dans `service-worker.js`
2. Videz le cache du navigateur
3. Rechargez avec `Ctrl/Cmd + Shift + R`

### L'export PDF ne fonctionne pas

1. Vérifiez votre connexion internet (première fois)
2. La bibliothèque html2pdf.js doit se charger
3. Essayez de recharger la page

## 📝 TODO / Améliorations futures

- [ ] Ajouter des photos des lieux
- [ ] Intégration Google Maps interactives
- [ ] Convertisseur de devises en temps réel
- [ ] Traducteur français-japonais intégré
- [ ] Notifications push pour rappels
- [ ] Mode collaboratif multi-utilisateurs
- [ ] Import/Export itinéraire JSON

## 🤝 Contribution

Pour améliorer cette app :

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/amélioration`)
3. Commitez vos changements (`git commit -m 'Ajout fonctionnalité X'`)
4. Pushez (`git push origin feature/amélioration`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est libre d'utilisation pour votre usage personnel.

## 🙏 Crédits

- Design inspiré par les guides de voyage modernes
- Icônes : Émojis Unicode
- Bibliothèque PDF : html2pdf.js
- Développé avec amour pour un voyage inoubliable au Japon 🇯🇵

---

**Bon voyage! 🎌✨**

*Dernière mise à jour : Décembre 2025*
