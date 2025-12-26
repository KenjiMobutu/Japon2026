# 🗺️ Configuration MapTiler
## Obtenir votre clé API gratuite

MapTiler offre une carte avec labels en anglais de meilleure qualité qu'OpenStreetMap standard.

---

## 📝 Étapes (2 minutes)

### 1. Créer un compte gratuit

Allez sur: **https://cloud.maptiler.com/auth/widget**

- Inscrivez-vous avec email ou Google
- Plan gratuit: **100,000 requêtes/mois** (largement suffisant)

### 2. Obtenir votre clé API

Une fois connecté:

1. Allez dans **Account** → **Keys**
   - Ou directement: https://cloud.maptiler.com/account/keys/
2. Copiez votre **Default API key**
   - Format: `aBcD1234eFgH5678iJkL9012mNoPqRsT`

### 3. Ajouter la clé dans app.js

Ouvrez [app.js](app.js) et modifiez la ligne 597:

```javascript
// AVANT:
const MAPTILER_KEY = 'get_your_key_at_maptiler.com';

// APRÈS:
const MAPTILER_KEY = 'VOTRE_CLE_API_ICI';
```

**Exemple:**
```javascript
const MAPTILER_KEY = 'aBcD1234eFgH5678iJkL9012mNoPqRsT';
```

### 4. Tester

```bash
python3 -m http.server 8000
```

Ouvrez http://localhost:8000 → Menu → À voir

Vous devriez voir la carte avec:
- ✅ Labels en anglais au Japon
- ✅ Style moderne et épuré
- ✅ Meilleure lisibilité

---

## 🆓 Plan gratuit MapTiler

| Feature | Limite |
|---------|--------|
| Requêtes/mois | 100,000 |
| Utilisateurs | Illimité |
| Maps | Streets, Satellite, Terrain |
| Langues | Multilingue (auto-détection) |
| Support | Community |

**C'est suffisant pour:**
- Usage personnel
- Petit site web
- App mobile (quelques milliers d'utilisateurs)

---

## 🔄 Alternative: Rester sur OpenStreetMap

Si vous préférez ne pas créer de compte, vous pouvez revenir à OpenStreetMap:

**app.js ligne 595-603:**

```javascript
// OpenStreetMap (pas besoin de clé API)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
}).addTo(map);
```

**Différences:**
- ✅ OpenStreetMap: Gratuit, pas de clé, labels mixtes japonais/romaji
- ✅ MapTiler: Gratuit avec clé, labels anglais clairs, style pro

---

## 🌍 Autres styles MapTiler disponibles

Une fois la clé configurée, vous pouvez changer de style:

### Streets (actuel - recommandé)
```javascript
https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${MAPTILER_KEY}
```
Labels clairs, parfait pour navigation

### Basic
```javascript
https://api.maptiler.com/maps/basic-v2/{z}/{x}/{y}.png?key=${MAPTILER_KEY}
```
Minimaliste, focus sur les routes

### Bright
```javascript
https://api.maptiler.com/maps/bright-v2/{z}/{x}/{y}.png?key=${MAPTILER_KEY}
```
Coloré, bonne lisibilité

### Outdoor
```javascript
https://api.maptiler.com/maps/outdoor-v2/{z}/{x}/{y}.png?key=${MAPTILER_KEY}
```
Relief, idéal pour randonnées

### Satellite
```javascript
https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}
```
Vue aérienne (pas de labels)

### Hybrid
```javascript
https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}
```
Satellite + labels

---

## 🔒 Sécurité de la clé API

### ⚠️ Important:

La clé API sera **visible** dans le code JavaScript côté client.

**Pour un site public:**
1. Configurez des **restrictions de domaine** dans MapTiler:
   - Account → Keys → Edit
   - HTTP Referrers: `https://votre-site.netlify.app/*`
   - Cela empêche l'utilisation de votre clé sur d'autres sites

**Pour usage personnel:**
- Pas de problème, la limite gratuite est généreuse
- MapTiler détecte les abus automatiquement

---

## 📊 Vérifier votre usage

Dashboard MapTiler: https://cloud.maptiler.com/usage/

Vous pouvez voir:
- Nombre de requêtes aujourd'hui/ce mois
- Carte des pays utilisant votre clé
- Alertes si approche de la limite

---

## ✅ Checklist

- [ ] Compte MapTiler créé
- [ ] Clé API copiée
- [ ] app.js ligne 597 modifiée
- [ ] Carte testée localement
- [ ] (Optionnel) Restrictions de domaine configurées
- [ ] Prêt pour déploiement!

---

## 🆘 Problèmes courants

### La carte ne s'affiche pas (grise)

**Vérifiez:**
1. Console navigateur (F12): erreur 401 ou 403?
   - Clé invalide ou mal copiée
2. Vérifiez que la clé est entre guillemets:
   ```javascript
   const MAPTILER_KEY = 'ABC123'; // ✅ Bon
   const MAPTILER_KEY = ABC123;   // ❌ Mauvais
   ```

### Limite dépassée

- Vérifiez usage sur dashboard
- Plan gratuit: 100k/mois devrait suffire
- Si dépassé: upgrade ou revenez à OpenStreetMap

### Labels pas en anglais

MapTiler détecte automatiquement la langue du navigateur.

**Forcer l'anglais:**
```javascript
L.tileLayer(`https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${MAPTILER_KEY}&language=en`, {
    // ...
}).addTo(map);
```

---

*Configuration MapTiler - Version 2.1*
*Dernière mise à jour: 26 Décembre 2025*
