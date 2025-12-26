# 🧪 Guide de Test Local
## Avant déploiement

---

## 🚀 Démarrage rapide

### 1. Lancer le serveur local

```bash
cd Japon2026
python3 -m http.server 8000
```

**OU avec Node.js:**
```bash
npx serve -p 8000
```

### 2. Ouvrir dans le navigateur

```
http://localhost:8000
```

---

## ✅ TESTS À EFFECTUER

### Test 1: Écrans de base
- [ ] Page cover s'affiche avec image de fond
- [ ] Countdown visible (jours avant départ)
- [ ] Bouton "Commencer l'aventure" fonctionne
- [ ] Dark mode toggle fonctionne (soleil/lune)
- [ ] Menu principal affiche 9 cartes

### Test 2: Navigation
- [ ] Cliquer sur "Itinéraire" ouvre les 10 jours
- [ ] Boutons jour 1-10 fonctionnent
- [ ] Bouton retour (←) fonctionne
- [ ] Dark mode persiste après navigation
- [ ] Tous les écrans accessibles depuis menu

### Test 3: Carte interactive 🗺️
- [ ] Aller sur "À voir" (Places)
- [ ] Carte Leaflet s'affiche
- [ ] 24 points rouges visibles (lieux)
- [ ] 3 points dorés visibles (logements)
- [ ] Ligne rouge pointillée visible (route)
- [ ] Cliquer sur un point → popup s'ouvre
- [ ] Popup affiche nom + numéro jour
- [ ] Zoom/Pan fonctionne
- [ ] Légende visible en bas

### Test 4: Itinéraire détaillé
- [ ] Sélectionner "Jour 1"
- [ ] Timeline visible avec activités
- [ ] Tags (gratuit, must-see) affichés
- [ ] Bouton "Maps" ouvre Google Maps
- [ ] Notes par jour fonctionnent (textarea)
- [ ] Bouton "marquer accompli" fonctionne
- [ ] Swipe gauche/droite change de jour

### Test 5: Outils
- [ ] Convertisseur JPY → EUR fonctionne
- [ ] Budget tracker: ajouter dépense fonctionne
- [ ] Barre de progression budget s'update
- [ ] Bouton reset budget demande confirmation
- [ ] Notifications visuelles apparaissent

### Test 6: Galeries photos
- [ ] Jour 1: galerie Shibuya visible
- [ ] Cliquer sur photo → modal plein écran
- [ ] Bouton × ferme la modal
- [ ] ESC ferme la modal
- [ ] Clic en dehors ferme la modal
- [ ] Caption visible en bas

### Test 7: Checklists
- [ ] 3 sections de checklist visibles
- [ ] Cocher une case persiste (localStorage)
- [ ] Décocher fonctionne
- [ ] État sauvegardé après refresh

### Test 8: Dark mode
- [ ] Activer dark mode
- [ ] Tous les écrans en mode sombre
- [ ] Carte Leaflet en dark mode
- [ ] Texte lisible partout
- [ ] Refresh page → dark mode persiste
- [ ] Désactiver → retour light mode

### Test 9: Responsive mobile
- [ ] Ouvrir DevTools (F12)
- [ ] Mode responsive (Ctrl+Shift+M)
- [ ] iPhone 12 Pro (390x844)
- [ ] Carte visible et zoomable
- [ ] Swipe fonctionne sur mobile
- [ ] Boutons accessibles
- [ ] Pas de scroll horizontal

### Test 10: Service Worker & PWA
- [ ] Ouvrir DevTools → Application
- [ ] Service Worker visible et actif
- [ ] Cache "japon-2026-v3" visible
- [ ] Manifest.json chargé
- [ ] Icons présentes
- [ ] Mode offline:
  - Network → Offline
  - Refresh page
  - App fonctionne sans internet

---

## 🔍 VÉRIFICATIONS CONSOLE

### Ouvrir la console (F12 → Console)

**Messages attendus:**
```
✅ Service Worker enregistré: /
🇯🇵 Japon 2026 V2 - App moderne initialisée!
Navigation par écrans • Design épuré • Mobile-first
🗺️ Carte interactive initialisée avec 24 lieux
```

**Erreurs à éviter:**
```
❌ 404 sur leaflet.css ou leaflet.js
❌ Uncaught ReferenceError: L is not defined
❌ Cannot read property 'map' of undefined
❌ Service Worker registration failed
```

---

## 📱 TEST SUR MOBILE RÉEL

### iPhone (Safari)
1. Connectez iPhone au même WiFi que votre PC
2. Trouvez IP locale: `ipconfig getifaddr en0` (Mac) ou `ipconfig` (Windows)
3. Sur iPhone Safari: `http://[VOTRE_IP]:8000`
4. Installer PWA:
   - Bouton Partager
   - "Sur l'écran d'accueil"
   - "Ajouter"
5. Tester l'icône sur l'écran d'accueil

### Android (Chrome)
1. Même WiFi que PC
2. Chrome: `http://[VOTRE_IP]:8000`
3. Installer PWA:
   - Menu (⋮)
   - "Ajouter à l'écran d'accueil"
4. Tester l'icône

---

## 🐛 TROUBLESHOOTING

### La carte ne s'affiche pas
```bash
# Vérifier dans console:
# - "Leaflet or map container not ready"
# → Attendre 1-2 secondes (timeout 500ms)
# - "L is not defined"
# → Leaflet pas chargé, vérifier connexion internet
```

### Service Worker ne s'active pas
```bash
# Vérifier:
1. URL doit être http://localhost (pas file://)
2. Ou HTTPS (Netlify/GitHub Pages)
3. DevTools > Application > Service Workers
4. Bouton "Update" ou "Unregister" puis refresh
```

### Images ne se chargent pas
```bash
# Vérifier chemins:
ls images/japon.jpg
ls icons/icon-192x192.png
ls images/lieux/*.jpg

# Si manquant:
# Les images Unsplash nécessitent internet
```

### Dark mode ne persiste pas
```bash
# Vérifier localStorage:
# DevTools > Application > Local Storage
# Doit contenir: darkMode: "true"
```

### Swipe ne fonctionne pas
```bash
# Swipe uniquement sur écran itinéraire
# Vérifier que vous êtes dans:
# Menu > Itinéraire > Sélectionner un jour
```

---

## ✅ CHECKLIST FINALE

Avant de déployer, tout doit être ✅:

### Visuel
- [ ] Toutes les images chargées
- [ ] Couleurs cohérentes (rouge, rose, or)
- [ ] Animations fluides
- [ ] Texte lisible (light + dark mode)
- [ ] Icônes affichées

### Fonctionnel
- [ ] 11 écrans accessibles
- [ ] Carte Leaflet opérationnelle
- [ ] 24 lieux cliquables
- [ ] Swipe entre jours
- [ ] Dark mode toggle
- [ ] Budget tracker calcule
- [ ] Convertisseur calcule
- [ ] Checklists checkables

### Technique
- [ ] Aucune erreur console
- [ ] Service Worker actif
- [ ] localStorage fonctionne
- [ ] Offline mode OK
- [ ] PWA installable

### Performance
- [ ] Chargement < 3s (local)
- [ ] Pas de lag au scroll
- [ ] Animations à 60fps
- [ ] Carte zoom fluide

---

## 🎯 RÉSULTAT ATTENDU

Si tous les tests passent:
- ✅ Application 100% fonctionnelle
- ✅ Prête pour déploiement production
- ✅ Compatible mobile/desktop
- ✅ Mode offline garanti

**Prochaine étape:** Déployer sur Netlify/GitHub Pages!

---

## 📞 EN CAS DE PROBLÈME

1. Vérifier console pour erreurs
2. Vider cache navigateur (Ctrl+Shift+Del)
3. Tester en navigation privée
4. Vérifier que tous les fichiers sont présents
5. Relire [VERIFICATION-DEPLOIEMENT.md](VERIFICATION-DEPLOIEMENT.md)

---

*Guide de test - Version 2.1*
*Dernière mise à jour: 26 Décembre 2025*
