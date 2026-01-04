# 🧪 Labo de Francky

Une librairie CSS personnalisée avec interface de démonstration pour créer et tester des composants réutilisables.

## 🚀 Fonctionnalités

### Composants Disponibles

- **Boutons** : Styles variés avec animations (wave, néon, outline)
- **Animations de chargement** : Spinners, dots, skeleton loaders
- **Effets hover** : Lift, scale, rotate
- **Formulaires** : Inputs stylisés, labels flottants
- **Layouts** : Grilles responsives, cartes
- **Navigation** : Barres de navigation personnalisées

### Interface de Démonstration

- Navigation par catégories
- Aperçu en temps réel de chaque composant
- Code CSS à copier en un clic
- Design responsive
- Interface fluide et moderne

## 📁 Structure

```
labo-francky/
├── index.html          # Interface principale
├── css/
│   ├── francky-lib.css # Librairie CSS principale
│   └── demo.css        # Styles de l'interface
├── js/
│   └── demo.js         # Script de démonstration
└── README.md
```

## 🎨 Utilisation

### 1. Intégrer la librairie

```html
<link rel="stylesheet" href="css/francky-lib.css">
```

### 2. Utiliser les classes

```html
<!-- Bouton principal -->
<button class="btn btn-primary">Mon bouton</button>

<!-- Carte avec effet hover -->
<div class="card hover-lift">
    <div class="card-header">
        <h3 class="card-title">Titre</h3>
    </div>
    <div class="card-content">
        Contenu de la carte
    </div>
</div>

<!-- Grille responsive -->
<div class="grid grid-3">
    <div>Colonne 1</div>
    <div>Colonne 2</div>
    <div>Colonne 3</div>
</div>
```

## 🎯 Classes Principales

### Boutons
- `.btn` : Classe de base
- `.btn-primary`, `.btn-secondary`, `.btn-success` : Variantes de couleur
- `.btn-outline` : Bouton avec bordure
- `.btn-sm`, `.btn-lg` : Tailles
- `.btn-wave` : Effet de vague
- `.btn-neon` : Effet néon

### Animations
- `.spinner` : Loader rotatif
- `.dots-loader` : Points qui rebondissent
- `.skeleton` : Effet skeleton

### Effets Hover
- `.hover-lift` : Élévation
- `.hover-scale` : Agrandissement
- `.hover-rotate` : Rotation

### Layouts
- `.grid`, `.grid-2`, `.grid-3`, `.grid-4` : Grilles
- `.card` : Carte de base
- `.form-group`, `.form-input`, `.form-label` : Formulaires

## 🎨 Variables CSS

La librairie utilise des variables CSS personnalisables :

```css
:root {
    --primary: #6366f1;
    --secondary: #ec4899;
    --success: #10b981;
    --radius-md: 8px;
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
    --transition-normal: 0.3s ease;
}
```

## 🔧 Développement

Pour ajouter de nouveaux composants :

1. Ajouter les styles dans `css/francky-lib.css`
2. Créer la démonstration dans `js/demo.js`
3. Tester dans l'interface

## 📱 Responsive

Tous les composants sont conçus pour être responsives avec des breakpoints à 768px et 1024px.

## 🎉 Prochaines Fonctionnalités

- [ ] Effets 3D et parallaxe
- [ ] Animations de révélation (reveal)
- [ ] Captcha personnalisés
- [ ] Navigation avancée
- [ ] Splash screens
- [ ] Transitions de page
- [ ] Thèmes sombres/clairs