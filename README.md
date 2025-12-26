# 🇯🇵 Guide de Voyage Japon 2026 - PWA

Application web progressive (PWA) moderne pour voyage au Japon mars 2026.

## 📱 Application

**Version actuelle** : 2.1.3 - Osaka GPS Precision Fix
**Statut** : ✅ Production Ready

---

## ✨ Fonctionnalités

### 🎯 Core Features
- ✅ **Installable sur iPhone** - Fonctionne comme une app native
- 📴 **Mode hors-ligne** - Accès complet sans connexion (Service Worker)
- 📱 **Interface mobile-first** - Design moderne par écrans
- 🌙 **Dark mode** - Thème sombre complet avec sauvegarde
- ⚡ **Performances optimisées** - Chargement < 2s, animations GPU

### 📋 Contenu Complet
- 🗓️ **Itinéraire 10 jours** - Timeline détaillée Tokyo → Kyoto → Nara → Osaka
- 🗺️ **Carte interactive** - Itinéraire complet sur Leaflet.js avec tous les lieux
- 💰 **Budget tracker** - Suivi dépenses en temps réel (800€)
- 💱 **Convertisseur** - JPY ⟷ EUR (taux: 184.69)
- ✅ **3 Checklists** - Avant départ, réservations, apps essentielles
- 🗣️ **Vocabulaire** - 50+ phrases japonaises essentielles
- 💡 **Conseils pro** - Goshuin, Sumo, astuces voyage
- 📍 **Google Maps** - Liens directs vers tous les lieux
- 🍜 **Restaurants** - Ramen, sushi, street food, konbini

### 🎨 UX Interactive
- 📝 **Notes par jour** - Prendre des notes pour chaque journée
- ✓ **Jours accomplis** - Marquer vos journées terminées
- 👆 **Swipe gestures** - Glissez entre les jours
- 📤 **Web Share API** - Partage natif iOS
- ⏱️ **Countdown** - Compte à rebours avant le départ
- 🔔 **Notifications** - Feedback visuel pour toutes les actions
- 📸 **Galeries photos** - Images des lieux en modal plein écran
- 🗺️ **Carte Leaflet** - 24 lieux touristiques + tracé d'itinéraire + logements

---

## 🚀 Déploiement Rapide

### Option 1 : Netlify (2 minutes - Recommandé)

1. Allez sur [app.netlify.com/drop](https://app.netlify.com/drop)
2. Glissez-déposez le dossier `Japon2026`
3. Obtenez une URL HTTPS instantanément

### Option 2 : GitHub Pages

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/japon-2026.git
git push -u origin main
# Settings > Pages > Source: main
```

### Option 3 : Test local

```bash
cd Japon2026
python -m http.server 8000
# Ouvrez http://localhost:8000
```

---

## 📱 Installation sur iPhone

### Automatique
1. Ouvrez l'URL dans **Safari**
2. Bannière "Installer l'application" apparaît
3. Cliquez sur **"Installer"**

### Manuelle
1. Safari > Bouton **Partager** 📤
2. **"Sur l'écran d'accueil"**
3. **"Ajouter"**

---

## 📂 Structure

```
Japon2026/
├── index.html          # App principale (1820 lignes)
├── styles.css          # Design system (1877 lignes)
├── app.js              # JavaScript (560 lignes)
├── service-worker.js   # Mode hors-ligne
├── manifest.json       # Configuration PWA
└── images/japon.jpg    # Cover image
```

---

## 🗓️ Itinéraire Complet

### Jour 1 - Arrivée (12 Mars)
**Tokyo** - Narita, Suica, Shibuya Crossing

### Jour 2 - Traditionnel (13 Mars)
**Tokyo** - Senso-ji + Goshuinchō, Meiji Jingu, Harajuku

### Jour 3 - Tech & Art (14 Mars)
**Tokyo** - Akihabara, TeamLab, Shopping Ginza

### Jour 4 - Exploration (15 Mars)
**Tokyo** - Sumo, Ueno Park, Yanaka, Skytree

### Jour 5 - Shinkansen (16 Mars)
**Tokyo → Kyoto** - Shinkansen 2h15, Fushimi Inari, Gion

### Jour 6 - Temples Nord (17 Mars)
**Kyoto** - Kinkaku-ji, Arashiyama, Nishiki Market

### Jour 7 - Culture & Thé (18 Mars)
**Kyoto** - Kiyomizu-dera, Cérémonie thé, Chemin Philosophe

### Jour 8 - Excursion Nara (19 Mars)
**Kyoto/Nara** - Nara Park (daims), Todai-ji, Kasuga Taisha

### Jour 9 - Universal (20 Mars)
**Osaka** - Universal Studios, Dotonbori

### Jour 10 - Départ (21 Mars)
**Osaka** - Château, Kuromon Market, Vol 22h10

---

## 💰 Budget (735-843€)

**Transport** : 190€ (métro, Shinkansen, pass)
**Activités** : 216€ (Goshuin, temples, TeamLab, Universal)
**Nourriture** : 162-270€ (3,000-5,000 JPY/jour)
**Divers** : 167€ (eSIM 32€ + Shopping 135€)

---

## 🗣️ Vocabulaire Essentiel

| Japonais | Romaji | Français |
|----------|--------|----------|
| こんにちは | Konnichiwa | Bonjour |
| ありがとう | Arigatou | Merci |
| すみません | Sumimasen | Pardon |
| いくらですか？ | Ikura desu ka? | Combien? |
| トイレはどこ？ | Toire wa doko? | Où toilettes? |
| おいしい | Oishii | Délicieux |

**Urgences** : 110 (Police) • 119 (Ambulance)

---

## 💡 Conseils Pro

### Goshuin (Tampons Sacrés)
1. Acheter carnet au 1er temple (1,500 JPY)
2. Chercher "御朱印"
3. Dire "Goshuin itadakemasuka?"
4. 300-500 JPY/tampon
5. ⚠️ JAMAIS écrire dedans

### Tips Importants
- 🌅 Temples tôt (8h-9h) pour éviter foules
- 👟 Chaussures faciles à retirer
- 💰 Pourboire JAMAIS
- 🏪 Konbini = meilleur ami (24h)
- 🎨 TeamLab : réserver 2 semaines avant
- 🛍️ Détaxe 8-10% avec passeport
- 🍜 Manger bruyant OK (signe de respect)

### Tournoi Sumo Osaka
**Dates** : 9-23 Mars
**Prix** : Debout ~2,000 JPY
**Réservation** : sumo.or.jp

---

## 🛠️ Personnalisation

### Modifier Couleurs

Éditez `styles.css` lignes 5-14 :

```css
:root {
  --sakura: #ffb7c5;
  --torii: #d81b2b;
  --bambou: #4a7c59;
  --nuit: #1a2332;
}
```

### Mettre à Jour le Cache

Changez version dans `service-worker.js` :

```javascript
const CACHE_NAME = 'japon-2026-v3'; // Incrémentez
```

---

## 🐛 Dépannage

### L'app ne s'installe pas
✅ Utilisez Safari (pas Chrome)
✅ Site doit être en HTTPS
✅ Videz cache Safari

### Mode hors-ligne ne fonctionne pas
✅ Ouvrez d'abord avec internet
✅ Attendez 5 secondes
✅ Vérifiez Service Worker (DevTools)

### Modifications non visibles
✅ Changez version dans service-worker.js
✅ `Ctrl/Cmd + Shift + R`

---

## ⚡ Optimisations

### Performance
- ✅ Chargement < 2s
- ✅ GPU acceleration
- ✅ `passive: true` listeners
- ✅ `requestAnimationFrame()`
- ✅ Single DOMContentLoaded

### PWA
- ✅ Service Worker cache-first
- ✅ 100% hors-ligne
- ✅ Manifest optimisé

### UX
- ✅ Pull-to-refresh désactivé
- ✅ Double chargement corrigé
- ✅ Early return patterns
- ✅ localStorage persistence

---

## 🗺️ Carte Interactive

### Fonctionnalités

- ✅ **Leaflet.js + MapTiler** - Carte interactive avec labels anglais
- ✅ **24 lieux touristiques** - Tous les points d'intérêt marqués
- ✅ **Tracé d'itinéraire** - Ligne rouge pointillée reliant les villes
- ✅ **Logements** - 3 emplacements préparés (à renseigner)
- ✅ **Popups détaillés** - Nom + jour de visite pour chaque lieu
- ✅ **Responsive** - 400px mobile, 500px desktop
- ✅ **Dark mode** - Popups adaptés au thème sombre
- ✅ **Légende** - Points rouges (lieux), dorés (hôtels), verts (restaurants)

### Configuration MapTiler

Pour afficher la carte avec labels en anglais, obtenez une clé API gratuite (2 min):

1. Créez un compte: https://cloud.maptiler.com/auth/widget
2. Copiez votre clé API
3. Éditez [app.js:597](app.js#L597) et remplacez `'get_your_key_at_maptiler.com'` par votre clé
4. Plan gratuit: 100,000 requêtes/mois

**Guide détaillé:** Voir [MAPTILER-SETUP.md](MAPTILER-SETUP.md)

**Alternative:** Pour utiliser OpenStreetMap sans clé API, voir le guide ci-dessus.

### Lieux cartographiés

**Tokyo (Jours 1-4)** : Shibuya, Senso-ji, Meiji Jingu, Harajuku, Akihabara, TeamLab, Ginza, Sumo, Ueno, Skytree

**Kyoto (Jours 5-7)** : Fushimi Inari, Gion, Kinkaku-ji, Arashiyama, Nishiki Market, Kiyomizu-dera, Chemin Philosophe

**Nara (Jour 8)** : Nara Park, Todai-ji, Kasuga Taisha

**Osaka (Jours 9-10)** : Universal Studios, Dotonbori, Château, Kuromon Market

### Personnaliser les logements

Pour ajouter vos vraies adresses d'hôtel, éditez [app.js:654-658](app.js#L654-L658) :

```javascript
const hotels = [
    { lat: 35.6812, lng: 139.7671, name: 'Nom de votre hôtel Tokyo', type: 'hotel', days: '1-4' },
    { lat: 35.0116, lng: 135.7681, name: 'Nom de votre hôtel Kyoto', type: 'hotel', days: '5-8' },
    { lat: 34.6937, lng: 135.5023, name: 'Nom de votre hôtel Osaka', type: 'hotel', days: '9-10' }
];
```

Récupérez les coordonnées GPS sur Google Maps (clic droit > coordonnées).

---

## 📊 Stats

**Lignes** : 4,900+ (HTML + CSS + JS)
**Taille** : ~110 Ko (hors Leaflet CDN)
**Score Lighthouse** : 95+
**Compatible** : iOS, Android, Desktop
**Bibliothèques** : Leaflet.js 1.9.4

---

## 📝 TODO Futur

- [x] Photos lieux (système de galerie implémenté !)
- [x] Carte interactive (Leaflet.js avec 24 lieux)
- [ ] Ajouter photos à tous les lieux (voir GUIDE-PHOTOS.md)
- [ ] Renseigner adresses exactes des logements
- [ ] Météo temps réel
- [ ] Traducteur intégré
- [ ] Notifications push
- [ ] Mode collaboratif

---

## 🙏 Crédits

**Design** : Culture japonaise authentique
**Icônes** : Émojis Unicode
**Tech** : HTML5, CSS3, Vanilla JS, PWA, Leaflet.js
**Cartes** : OpenStreetMap contributors

---

## 🌸 Bon Voyage !

**Profitez de votre aventure au Japon! 🇯🇵✨**

*Version 2.0 - Décembre 2025*
