# 📁 Structure du Labo de Francky

## Organisation Modulaire

```
labo-francky/
├── index.html                 # Interface principale
├── css/
│   ├── francky-lib.css       # Styles de base (variables, reset)
│   └── demo.css              # Styles de l'interface de démo
├── js/
│   └── demo.js               # Script principal de navigation
├── components/               # Composants modulaires
│   ├── buttons/
│   │   ├── buttons.html      # HTML des boutons
│   │   ├── buttons.css       # Styles spécifiques aux boutons
│   │   └── buttons.js        # Interactions des boutons
│   ├── navigation/           # À venir
│   ├── forms/               # À venir
│   ├── animations/          # À venir
│   ├── effects/             # À venir
│   ├── layouts/             # À venir
│   └── loaders/             # À venir
├── guide-couleurs.md        # Guide de personnalisation
├── STRUCTURE.md             # Ce fichier
└── README.md                # Documentation principale
```

## 🎯 Avantages de cette Structure

### Modularité
- Chaque catégorie a ses propres fichiers
- Facilite la maintenance et les ajouts
- Permet de charger uniquement ce qui est nécessaire

### Séparation des Responsabilités
- **HTML** : Structure et contenu des composants
- **CSS** : Styles spécifiques à chaque catégorie
- **JS** : Interactions et animations

### Évolutivité
- Facile d'ajouter de nouvelles catégories
- Structure cohérente pour tous les composants
- Possibilité d'avoir des sous-catégories

## 🔧 Comment Ajouter une Nouvelle Catégorie

### 1. Créer le Dossier
```bash
mkdir components/ma-categorie
```

### 2. Créer les Fichiers
```bash
touch components/ma-categorie/ma-categorie.html
touch components/ma-categorie/ma-categorie.css
touch components/ma-categorie/ma-categorie.js
```

### 3. Structure HTML Type
```html
<!-- Composant 1 -->
<div class="component-card">
    <h3 class="component-title">Nom du Composant</h3>
    <p class="component-description">Description du composant</p>
    <div class="component-demo">
        <!-- Démo visuelle -->
    </div>
    <div class="component-code">
        <button class="copy-btn">Copier</button>
        <pre><code><!-- Code à copier --></code></pre>
    </div>
</div>
```

### 4. Ajouter dans demo.js
```javascript
// Dans initComponents()
ma_categorie: {
    title: 'Ma Catégorie',
    description: 'Description de ma catégorie',
    componentCount: 5,
    hasFile: true
}
```

### 5. Ajouter dans index.html
```html
<!-- Dans la navigation -->
<button class="nav-btn" data-category="ma-categorie">🎨 Ma Catégorie</button>

<!-- Dans le head -->
<link rel="stylesheet" href="components/ma-categorie/ma-categorie.css">

<!-- Avant la fermeture du body -->
<script src="components/ma-categorie/ma-categorie.js"></script>
```

## 🎨 Conventions de Nommage

### Classes CSS
- **Composant** : `.mon-composant`
- **Variante** : `.mon-composant-variante`
- **État** : `.mon-composant:hover`, `.mon-composant.active`
- **Taille** : `.mon-composant-sm`, `.mon-composant-lg`

### Variables CSS
- **Couleurs** : `--mon-composant-color`
- **Tailles** : `--mon-composant-size`
- **Animations** : `--mon-composant-duration`

### Fichiers
- **Kebab-case** : `ma-categorie.html`
- **Cohérence** : même nom pour HTML, CSS et JS

## 📋 Checklist pour Nouveaux Composants

- [ ] HTML structuré avec les bonnes classes
- [ ] CSS avec variables personnalisables
- [ ] JavaScript pour les interactions
- [ ] Responsive design
- [ ] États hover/focus/disabled
- [ ] Documentation dans le code
- [ ] Exemples d'utilisation
- [ ] Tests sur différents navigateurs

## 🚀 Prochaines Améliorations

- [ ] Système de thèmes
- [ ] Export de composants individuels
- [ ] Générateur de code personnalisé
- [ ] Mode sombre/clair
- [ ] Recherche de composants
- [ ] Favoris et collections
- [ ] Prévisualisation en temps réel