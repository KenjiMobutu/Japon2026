# 🎨 Design Brief - App Voyage Japon 2026

## Vision
Application mobile-first ultra-moderne avec architecture par écrans dédiés.
Expérience de lecture optimale, navigation fluide, impact visuel immédiat.

---

## Structure des Écrans (ordre exact)

### Écran 1 – Cover 🌸
**Objectif:** Impact immédiat, coup de foudre visuel

**Composition:**
- Image plein écran (Mount Fuji ou torii au coucher de soleil)
- Overlay dégradé noir → transparent
- Titre "Japon 2026" (bas gauche, grande typo)
- Sous-titre "Tokyo • Kyoto • Nara • Osaka"
- Bouton CTA "Commencer le voyage" ⟶

**Règles:**
- ❌ Pas de scroll
- ✅ Hero image haute qualité
- ✅ Animation subtile au chargement

---

### Écran 2 – Sommaire 📋
**Navigation principale en Cards**

**Sections:**
1. 📋 Essentiels (infos pratiques)
2. 🚇 Se déplacer (transport)
3. 🍜 Manger (restaurants, street food)
4. ⛩️ À voir (temples, sites)
5. 🗓️ Itinéraires (jour par jour)
6. 💡 Conseils (astuces pro)
7. 🗣️ Vocabulaire (phrases utiles)

**Design Card:**
```
┌─────────────────────────┐
│ 🚇                      │
│ Se déplacer            >│
│ Métro · JR Pass · Suica│
└─────────────────────────┘
```

**Specs:**
- Espacement: 16px entre cards
- Padding card: 20px
- Border-radius: 16px
- Shadow: subtile
- Chevron: discret, aligné droite

---

### Écran 3 – Infos Essentielles 📋

**Structure:**
- Header fixe avec titre section
- Cards empilées, scrollables
- Max 30 secondes de lecture

**Cards types:**
1. **Langue**
   - Icône: 🗣️
   - Info: "Japonais · Anglais rare"
   - Conseil: "Google Translate essentiel"

2. **Monnaie**
   - Icône: 💴
   - Taux: "1€ = 184.69 JPY"
   - Convertisseur inline

3. **Sécurité**
   - Icône: 🔒
   - Texte: "Pays très sûr · Peu de vols"

4. **Urgences**
   - Icône: 🚨
   - Police: 110
   - Ambulance: 119

**Hiérarchie:**
- Titre card: 18px, Bold
- Corps: 15px, Regular
- Max 2 lignes par card

---

### Écran 4 – Lieux / Restaurants 🍜⛩️

**Card Layout:**
```
┌────────────────────┐
│     [Image 16:9]   │
├────────────────────┤
│ Nom du lieu        │
│ 📍 Quartier        │
│ [Tag] [Budget]     │
│ [Ouvrir Maps] ⟶   │
└────────────────────┘
```

**Tags:**
- 🏆 Incontournable (rouge torii)
- 💰 Budget (vert)
- 🌟 Local favorite (or)

**Bouton Maps:**
- Couleur: vert bambou
- Icon: 📍
- Action: Ouvre Google Maps

**Contraintes:**
- Description: max 2 lignes
- Si plus long → "Voir plus"

---

### Écran 5 – Itinéraire (Timeline) 🗓️

**Layout Timeline vertical:**

```
○─── 09:00
│    Petit-déjeuner
│    Konbini local
│
○─── 10:30
│    Senso-ji Temple
│    [Voir sur Maps]
│
○─── 13:00
│    Déjeuner ramen
│    800 JPY
```

**Elements:**
- Ligne verticale continue
- Cercles pour chaque étape
- Heure alignée gauche
- Card activité avec:
  - Titre
  - Description courte
  - Prix (optionnel)
  - Bouton Maps (si lieu)

**Couleurs cercles:**
- Transport: bleu
- Repas: orange
- Visite: rouge sakura
- Repos: gris

---

### Écran 6 – Conseils Pro 💡

**Format ultra-court:**

```
┌───────────────────────┐
│ ⚠️ Fushimi Inari      │
│                       │
│ Éviter 12h-14h        │
│ Files doublées        │
└───────────────────────┘
```

**Règles:**
- 1 conseil = 1 card
- Max 2 lignes de texte
- Ton direct, actionnable
- Icônes claires

**Types de conseils:**
- ⚠️ Attention
- 💡 Astuce
- 💰 Économie
- ⏰ Timing

---

## Design System

### Typographie
```css
/* Headers */
--font-xl: 32px / Bold
--font-lg: 24px / Bold
--font-md: 18px / Semibold

/* Body */
--font-base: 16px / Regular
--font-sm: 14px / Regular
--font-xs: 12px / Medium
```

### Couleurs (Japon)
```css
--sakura: #FFB7C5
--torii: #D81B2B
--bambou: #4A7C59
--nuit: #1A2332
--or: #C9A961
--blanc: #F8F9FA
```

### Spacing
```css
--xs: 8px
--sm: 12px
--md: 16px
--lg: 24px
--xl: 32px
```

### Cards
```css
border-radius: 16px
padding: 20px
shadow: 0 4px 16px rgba(0,0,0,0.08)
```

### Auto Layout (Figma equiv en CSS)
- Flex / Grid systématique
- Gap cohérent (16px défaut)
- Padding uniforme

---

## Navigation

### Bottom Tab Bar (fixe)
```
[🏠 Home] [🗓️ Jours] [🍜 Food] [⛩️ Sites] [💡 Plus]
```

### Header (par écran)
- Titre section
- Bouton retour (si sous-page)
- Actions contextuelles

---

## Animations

### Transitions
- Page slide: 300ms ease-out
- Card hover: 200ms ease
- Scroll: smooth

### Micro-interactions
- Tap: scale(0.98)
- Success: ✓ animation
- Loading: skeleton screens

---

## Images

### Format
- 16:9 ratio
- WebP optimisé
- Lazy loading
- Placeholder blur

### Sources suggérées
- Unsplash: temples, paysages
- Pexels: street food, métro
- Photos propres (quand disponibles)

---

## Responsive

### Mobile-first
- 375px: iPhone SE (base)
- 390px: iPhone 14
- 430px: iPhone 14 Pro Max

### Breakpoints
```css
@media (min-width: 768px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

---

## Performance

### Targets
- First Paint: < 1s
- Interactive: < 2s
- Lighthouse: 95+

### Optimisations
- Critical CSS inline
- Lazy load images
- Service Worker aggressive
- Minimal JS

---

## Checklist Implémentation

- [ ] Écran 1: Cover avec hero image
- [ ] Écran 2: Sommaire en cards
- [ ] Écran 3: Infos essentielles
- [ ] Écran 4: Lieux/Restaurants avec images
- [ ] Écran 5: Timeline itinéraire
- [ ] Écran 6: Conseils pro
- [ ] Design system complet
- [ ] Navigation bottom tabs
- [ ] Animations transitions
- [ ] Mode sombre adapté
- [ ] Test sur vrais devices

---

## Références Design

**Apps inspirantes:**
- Airbnb (cards, images)
- Citymapper (timeline, transport)
- Google Maps (lieux)
- Apple Travel (hero, typography)

**Principe clé:**
> "Si ça prend plus de 30 secondes à lire, c'est trop long."

---

## Next Steps

1. Créer structure HTML par écrans
2. Implémenter design system CSS
3. Ajouter images haute qualité
4. Tester navigation
5. Peaufiner animations
6. Test utilisateur réel

🎯 **Objectif:** App qui donne envie de partir au Japon MAINTENANT.
