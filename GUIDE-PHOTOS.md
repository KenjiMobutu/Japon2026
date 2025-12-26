# 📸 Guide d'ajout des photos aux lieux

## ✅ Système de galerie photo implémenté !

### 🎯 Fonctionnalités

- ✅ **Galeries responsives** - Grille adaptative 3 colonnes sur mobile
- ✅ **Modal plein écran** - Clic sur photo pour l'agrandir
- ✅ **Lazy loading** - Images chargées à la demande
- ✅ **Animations fluides** - Zoom, hover effects
- ✅ **Dark mode support** - Adapté au thème sombre
- ✅ **Fermeture facile** - Clic extérieur, touche ESC, bouton ×
- ✅ **Légendes** - Caption sous chaque photo en modal

---

## 🚀 Comment ajouter une galerie

### 1. Trouver le lieu dans index.html

Cherchez la `timeline-card` du lieu où vous voulez ajouter des photos.

### 2. Ajouter le code de galerie

Juste avant la fermeture `</div>` de la `timeline-card`, ajoutez :

```html
<div class="location-gallery">
    <div class="gallery-item" onclick="openPhotoModal('URL_IMAGE', 'Légende photo')">
        <img src="URL_IMAGE" alt="Légende photo" loading="lazy">
    </div>
    <!-- Répéter pour chaque photo (2-4 photos recommandé) -->
</div>
```

### 3. Exemple complet

```html
<div class="timeline-card">
    <h4>⛩️ Fushimi Inari</h4>
    <p>10,000 torii gates</p>
    <span class="tag free">Gratuit</span>
    <button class="maps-btn-small" onclick="openMaps('Fushimi Inari Taisha')">
        📍 Maps
    </button>

    <div class="location-gallery">
        <div class="gallery-item" onclick="openPhotoModal('https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800', '10,000 torii gates')">
            <img src="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=800" alt="10,000 torii gates" loading="lazy">
        </div>
        <div class="gallery-item" onclick="openPhotoModal('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800', 'Tunnel de torii')">
            <img src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800" alt="Tunnel de torii" loading="lazy">
        </div>
        <div class="gallery-item" onclick="openPhotoModal('https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800', 'Escaliers et torii')">
            <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800" alt="Escaliers et torii" loading="lazy">
        </div>
    </div>
</div>
```

---

## 📷 URLs des photos prêtes à l'emploi

Le fichier [photo-urls.js](photo-urls.js) contient toutes les URLs Unsplash pour chaque lieu.

### Lieux principaux disponibles :

**Tokyo :**
- shibuya-crossing ✅ Déjà ajouté
- sensoji
- meiji-jingu
- harajuku
- akihabara
- teamlab
- tokyo-skytree

**Kyoto :**
- fushimi-inari
- gion
- kinkakuji
- arashiyama
- kiyomizudera

**Nara :**
- nara-park
- todaiji

**Osaka :**
- dotonbori
- osaka-castle
- universal-studios

### Générer le HTML pour un lieu

```bash
node photo-urls.js
```

Copier-coller le HTML généré directement dans votre timeline-card !

---

## 🎨 Personnalisation

### Changer les images

Remplacez les URLs Unsplash par :
- Vos propres photos (mettez-les dans `/images/lieux/`)
- D'autres images Unsplash
- Des URLs d'images hébergées ailleurs

### Format URL locale

```html
<div class="gallery-item" onclick="openPhotoModal('images/lieux/shibuya-1.jpg', 'Ma photo Shibuya')">
    <img src="images/lieux/shibuya-1.jpg" alt="Ma photo" loading="lazy">
</div>
```

### Nombre de photos

- **2-3 photos** : Idéal pour mobile
- **4-6 photos** : Bon pour lieux importants
- **Éviter > 6** : Peut ralentir le chargement

---

## ⚡ Optimisations

### Images déjà optimisées

- **Lazy loading** : `loading="lazy"` = images chargées uniquement si visibles
- **Taille optimale** : `?w=800` dans URLs Unsplash = 800px de large
- **WebP auto** : Unsplash sert automatiquement WebP si supporté

### Service Worker

Les images des galeries sont automatiquement mises en cache après la première visite pour mode hors-ligne !

---

## 🐛 Dépannage

### Les images ne s'affichent pas

- Vérifiez la connexion internet (Unsplash nécessite internet la 1ère fois)
- Vérifiez l'URL de l'image (doit être valide)
- Ouvrez la console (F12) pour voir les erreurs

### La modal ne s'ouvre pas

- Vérifiez que `app.js` est bien chargé
- Fonction `openPhotoModal()` doit être définie
- Vérifiez la console pour erreurs JavaScript

### Performance lente

- Réduisez le nombre de photos par galerie
- Utilisez des images plus petites (`?w=600` au lieu de `?w=800`)
- Activez le Service Worker pour cache

---

## 📝 TODO

Pour ajouter les photos à TOUS les lieux principaux :

- [ ] Jour 2 - Senso-ji Temple
- [ ] Jour 2 - Meiji Jingu
- [ ] Jour 2 - Harajuku
- [ ] Jour 3 - Akihabara
- [ ] Jour 3 - TeamLab
- [ ] Jour 4 - Tokyo Skytree
- [ ] Jour 5 - Fushimi Inari
- [ ] Jour 5 - Gion
- [ ] Jour 6 - Kinkaku-ji (Pavillon d'Or)
- [ ] Jour 6 - Arashiyama Bambouseraie
- [ ] Jour 7 - Kiyomizu-dera
- [ ] Jour 8 - Nara Park (Daims)
- [ ] Jour 8 - Todai-ji Temple
- [ ] Jour 9 - Universal Studios
- [ ] Jour 10 - Château Osaka
- [ ] Jour 10 - Dotonbori

**Temps estimé** : 5 minutes par lieu = ~1h30 pour tout compléter

---

## 🌟 Résultat

Une fois toutes les galeries ajoutées, votre app aura :

✅ Photos immersives pour chaque lieu majeur
✅ Aperçu visuel avant la visite
✅ Modal moderne et élégante
✅ Expérience utilisateur premium
✅ Mode hors-ligne avec photos en cache

**Bon ajout de photos ! 📸✨**
