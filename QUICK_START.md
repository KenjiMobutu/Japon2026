# 🚀 Guide de Démarrage Rapide

## ⚡ En 3 étapes

### 1️⃣ Générer les icônes (5 minutes)

1. Double-cliquez sur `icons/generate-icons.html`
2. Cliquez sur **"Générer toutes les icônes"**
3. Téléchargez les 8 icônes (cliquez sur chaque bouton "Télécharger")
4. Sauvegardez-les dans le dossier `icons/`

### 2️⃣ Tester en local (1 minute)

**Option A - Avec Python :**

```bash
cd /Users/kenjimobutu/Desktop/Japon2026
python3 -m http.server 8000
```

Puis ouvrez : http://localhost:8000

**Option B - Avec PHP :**

```bash
cd /Users/kenjimobutu/Desktop/Japon2026
php -S localhost:8000
```

**Option C - Double-cliquez simplement sur `index.html`**
(Certaines fonctionnalités PWA ne marcheront pas)

### 3️⃣ Installer sur iPhone

**IMPORTANT : L'app doit être en HTTPS pour l'installation sur iPhone**

#### 🎯 Solution la plus simple : Netlify (2 minutes)

1. Allez sur https://app.netlify.com/drop
2. Glissez-déposez le dossier **Japon2026** entier
3. Netlify vous donne une URL HTTPS automatiquement
4. Ouvrez cette URL sur votre iPhone avec **Safari**
5. Une bannière "Installer l'application" apparaîtra
6. Cliquez sur **"Installer"** ✅

## 📱 Installer manuellement sur iPhone

Si la bannière n'apparaît pas :

1. Ouvrez l'URL dans **Safari** (important!)
2. Appuyez sur le bouton **Partager** 📤
3. Faites défiler vers le bas
4. Sélectionnez **"Sur l'écran d'accueil"**
5. Nommez l'app : "Japon 2026"
6. Appuyez sur **"Ajouter"**

L'icône 🇯🇵 apparaîtra sur votre écran d'accueil!

## ✨ Fonctionnalités à tester

Une fois installée :

✅ **Mode avion** - Activez le mode avion, l'app fonctionne toujours!
✅ **Checklist** - Cochez des items, fermez l'app, rouvrez → toujours cochés
✅ **Export PDF** - Cliquez sur 📄 en bas à droite
✅ **Partage** - Cliquez sur 📤 pour partager
✅ **Navigation** - Utilisez la barre du bas pour naviguer

## 🆘 Problèmes courants

### ❌ La bannière d'installation n'apparaît pas

**Solutions :**

- Utilisez **Safari** (pas Chrome!)
- Le site doit être en **HTTPS**
- Attendez 3 secondes après le chargement
- Installez manuellement (voir ci-dessus)

### ❌ Le mode hors-ligne ne fonctionne pas

**Solutions :**

- Ouvrez l'app au moins une fois avec internet
- Attendez que tout se charge complètement
- Le Service Worker s'installe automatiquement

### ❌ L'export PDF ne fonctionne pas

**Solutions :**

- La bibliothèque doit se charger (besoin d'internet la première fois)
- Attendez 5 secondes après l'ouverture de la page
- Réessayez

## 📞 Besoin d'aide ?

Consultez le [README.md](README.md) complet pour plus de détails.

---

**C'est tout! Bon voyage au Japon! 🇯🇵✨**
