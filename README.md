# Francky Lab's - Site Web Professionnel

Site web moderne et responsive pour l'agence digitale camerounaise Francky Lab's, spécialisée dans la création de solutions technologiques innovantes.

## 🚀 Fonctionnalités

### Design & UX
- **Design moderne** avec palette dark/cyan inspirée de Stripe, Linear, Vercel
- **Effets glassmorphism** et animations fluides
- **100% responsive** - optimisé pour tous les appareils
- **Animations 3D** avec canvas et particules interactives
- **Typing animation** dans la hero section
- **Scroll reveals** et effets parallax

### Sections du Site
- **Hero Section** avec animation typing et fond 3D généré
- **Services** - 6 services détaillés avec hover effects
- **À Propos** avec statistiques animées et valeurs
- **Réalisations** - Galerie de 4 projets avec overlays
- **Témoignages** - Slider automatique avec navigation
- **Contact** - Formulaire Netlify + EmailJS fonctionnel

### Fonctionnalités Techniques
- **SEO optimisé** avec structured data JSON-LD
- **Performance** - Lazy loading, optimisation images
- **Sécurité** - Headers de sécurité configurés
- **Accessibilité** - Tags sémantiques, ARIA labels
- **PWA Ready** - Optimisé pour les performances

### Intégrations
- **Netlify Forms** pour la gestion des formulaires
- **EmailJS** pour l'envoi d'emails
- **WhatsApp & Facebook** - Boutons sociaux intégrés
- **Google Fonts** - Typographie Inter
- **Font Awesome** - Icônes vectorielles

## 🛠️ Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Animations, Grid, Flexbox, Variables CSS
- **JavaScript Vanilla** - Interactions et animations
- **Canvas API** - Animations 3D du background
- **Intersection Observer** - Animations au scroll
- **EmailJS** - Envoi d'emails côté client
- **Netlify** - Hébergement et formulaires

## 📱 Responsive Design

Le site s'adapte parfaitement à tous les écrans :
- **Desktop** (1200px+) - Layout complet avec toutes les animations
- **Tablet** (768px-1024px) - Adaptation des grilles et espacements
- **Mobile** (320px-768px) - Menu hamburger, layout vertical

## 🎨 Palette de Couleurs

```css
--primary-color: #00d4ff     /* Cyan électrique */
--secondary-color: #0099cc   /* Bleu profond */
--accent-color: #00ffcc      /* Teal lumineux */
--dark-bg: #0a0a0a          /* Fond sombre */
--glass-bg: rgba(255,255,255,0.1) /* Glassmorphism */
```

## ⚡ Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **Lazy Loading** des images
- **Optimisation CSS** avec variables et compression
- **JavaScript optimisé** avec debouncing
- **Cache Strategy** configurée via Netlify

## 🔧 Configuration

### EmailJS Setup
1. Créer un compte sur [EmailJS](https://www.emailjs.com/)
2. Remplacer dans `js/main.js` :
   - `YOUR_PUBLIC_KEY` par votre clé publique
   - `YOUR_SERVICE_ID` par votre service ID
   - `YOUR_TEMPLATE_ID` par votre template ID

### Netlify Forms
Les formulaires sont automatiquement gérés par Netlify grâce à l'attribut `netlify` dans le HTML.

### Personnalisation
- **Couleurs** : Modifier les variables CSS dans `:root`
- **Contenu** : Éditer directement le HTML
- **Images** : Remplacer les URLs Unsplash par vos propres images
- **Contacts** : Mettre à jour les informations dans la section contact

## 📞 Informations de Contact

- **Localisation** : Yaoundé Jouvence, Cameroun
- **Services** : Sites web, logiciels, chatbots, automatisation
- **Réseaux** : WhatsApp, Facebook

## 🚀 Déploiement

1. **Netlify** (Recommandé)
   - Connecter le repository GitHub
   - Configuration automatique via `netlify.toml`
   - Déploiement continu activé

2. **Autres plateformes**
   - Vercel, GitHub Pages, Firebase Hosting
   - Servir les fichiers statiques

## 📈 SEO & Analytics

- **Meta tags** optimisés pour les réseaux sociaux
- **Structured Data** JSON-LD pour Google
- **Sitemap** généré automatiquement
- **Performance** optimisée pour Core Web Vitals

## 🔒 Sécurité

- **CSP Headers** configurés
- **XSS Protection** activée
- **HTTPS** forcé via Netlify
- **Validation** côté client et serveur

---

**Développé avec ❤️ pour Francky Lab's**
*Votre partenaire digital au Cameroun*