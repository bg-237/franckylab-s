# 🎨 Guide des Couleurs - Labo de Francky

## Variables CSS Personnalisables

Tu peux facilement changer les couleurs en modifiant les variables CSS dans ton fichier :

```css
:root {
    /* Couleurs principales */
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --secondary: #ec4899;
    
    /* Couleurs de boutons */
    --btn-blue: #3b82f6;
    --btn-blue-dark: #2563eb;
    --btn-purple: #8b5cf6;
    --btn-purple-dark: #7c3aed;
    --btn-pink: #ec4899;
    --btn-pink-dark: #db2777;
    --btn-green: #10b981;
    --btn-green-dark: #059669;
    --btn-red: #ef4444;
    --btn-red-dark: #dc2626;
    --btn-orange: #f59e0b;
    --btn-orange-dark: #d97706;
    --btn-teal: #14b8a6;
    --btn-teal-dark: #0d9488;
}
```

## Personnaliser les Ombres

### Ombres Colorées
Chaque bouton a une ombre colorée au hover. Tu peux les personnaliser :

```css
.btn-primary:hover {
    box-shadow: 0 10px 25px rgba(99, 102, 241, 0.4); /* Ombre bleue */
}

.btn-pink:hover {
    box-shadow: 0 10px 25px rgba(236, 72, 153, 0.4); /* Ombre rose */
}
```

### Créer tes Propres Couleurs

```css
/* Nouvelle couleur : Violet */
:root {
    --btn-violet: #8b5cf6;
    --btn-violet-dark: #7c3aed;
}

.btn-violet {
    background: var(--btn-violet);
    color: white;
}

.btn-violet:hover:not(:disabled) {
    background: var(--btn-violet-dark);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
}

/* Version outline */
.btn-outline-violet {
    background: transparent;
    border: 2px solid var(--btn-violet);
    color: var(--btn-violet);
}

.btn-outline-violet:hover:not(:disabled) {
    background: var(--btn-violet);
    color: white;
    box-shadow: 0 5px 15px rgba(139, 92, 246, 0.3);
}

/* Version néon */
.btn-neon-violet {
    background: transparent;
    border: 2px solid var(--btn-violet);
    color: var(--btn-violet);
    text-shadow: 0 0 10px var(--btn-violet);
    box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
}

.btn-neon-violet:hover:not(:disabled) {
    box-shadow: 0 0 30px rgba(139, 92, 246, 0.6);
    text-shadow: 0 0 20px var(--btn-violet);
}
```

## Utilisation

```html
<!-- Bouton avec ta nouvelle couleur -->
<button class="btn btn-violet">Mon Bouton Violet</button>
<button class="btn btn-outline-violet">Outline Violet</button>
<button class="btn btn-neon-violet">Néon Violet</button>
```

## Thèmes Prédéfinis

### Thème Sombre
```css
:root {
    --primary: #818cf8;
    --btn-blue: #60a5fa;
    --btn-green: #34d399;
    --btn-red: #f87171;
}
```

### Thème Pastel
```css
:root {
    --primary: #a78bfa;
    --btn-blue: #93c5fd;
    --btn-green: #86efac;
    --btn-pink: #f9a8d4;
}
```

### Thème Vibrant
```css
:root {
    --primary: #4f46e5;
    --btn-blue: #2563eb;
    --btn-green: #059669;
    --btn-red: #dc2626;
}
```