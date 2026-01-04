// ===== LABO DE FRANCKY - SCRIPT DE DÉMONSTRATION =====

class LaboFrancky {
    constructor() {
        this.currentCategory = 'buttons';
        this.components = this.initComponents();
        this.init();
    }

    init() {
        this.bindEvents();
        this.loadCategory(this.currentCategory);
    }

    bindEvents() {
        // Navigation entre catégories
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.dataset.category;
                this.switchCategory(category);
            });
        });
    }

    switchCategory(category) {
        // Mise à jour de la navigation
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-category="${category}"]`).classList.add('active');

        // Chargement de la nouvelle catégorie
        this.currentCategory = category;
        this.loadCategory(category);
    }

    async loadCategory(category) {
        const categoryData = this.components[category];
        
        // Mise à jour du header
        document.getElementById('category-title').textContent = categoryData.title;
        document.getElementById('category-description').textContent = categoryData.description;
        
        // Mise à jour du compteur de composants
        const componentCount = document.getElementById('component-count');
        if (componentCount) {
            componentCount.textContent = `${categoryData.componentCount} composants`;
        }

        // Chargement du contenu HTML de la catégorie
        try {
            const response = await fetch(`components/${category}/${category}.html`);
            const html = await response.text();
            
            const container = document.getElementById('demo-container');
            container.innerHTML = html;
            
            // Animation d'entrée
            this.animateComponents();
            
        } catch (error) {
            console.error(`Erreur lors du chargement de ${category}:`, error);
            this.loadFallbackContent(category);
        }
    }

    loadFallbackContent(category) {
        const categoryData = this.components[category];
        const container = document.getElementById('demo-container');
        
        if (categoryData.fallback) {
            container.innerHTML = categoryData.fallback;
        } else {
            container.innerHTML = `
                <div class="component-card">
                    <h3 class="component-title">En développement</h3>
                    <p class="component-description">Cette catégorie est en cours de développement.</p>
                    <div class="component-demo">
                        <div style="padding: 2rem; text-align: center; color: #64748b;">
                            🚧 Bientôt disponible
                        </div>
                    </div>
                </div>
            `;
        }
    }

    animateComponents() {
        const cards = document.querySelectorAll('.component-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    initComponents() {
        return {
            buttons: {
                title: 'Boutons',
                description: 'Collection complète de boutons avec styles, couleurs et animations',
                componentCount: 13,
                hasFile: true
            },
            navigation: {
                title: 'Navigation',
                description: 'Barres de navigation, menus et breadcrumbs',
                componentCount: 6,
                hasFile: true
            },
            animations: {
                title: 'Animations',
                description: 'Animations CSS et transitions fluides',
                componentCount: 8,
                hasFile: true
            },
            effects: {
                title: 'Effets 3D',
                description: 'Effets visuels 3D et parallaxe',
                componentCount: 8,
                hasFile: true
            },
            forms: {
                title: 'Formulaires',
                description: 'Éléments de formulaire stylisés',
                componentCount: 10,
                hasFile: true
            },
            layouts: {
                title: 'Layouts',
                description: 'Systèmes de grille et mise en page',
                componentCount: 8,
                hasFile: true
            },
            loaders: {
                title: 'Chargement',
                description: 'Animations de chargement et loaders',
                componentCount: 7,
                hasFile: true
            }
        };
    }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    new LaboFrancky();
});