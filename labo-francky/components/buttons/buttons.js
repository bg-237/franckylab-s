// ===== BOUTONS - LABO DE FRANCKY ===== 

class ButtonsComponent {
    constructor() {
        this.init();
    }

    init() {
        this.addInteractiveEffects();
        this.addCopyFunctionality();
    }

    addInteractiveEffects() {
        // Effet de vague pour les boutons wave
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-wave')) {
                this.createWaveEffect(e.target, e);
            }
        });

        // Effet de particules pour les boutons particles
        document.addEventListener('mouseenter', (e) => {
            if (e.target.classList.contains('btn-particles')) {
                this.createParticles(e.target);
            }
        }, true);

        // Effet glitch amélioré
        document.addEventListener('mouseenter', (e) => {
            if (e.target.classList.contains('btn-glitch')) {
                this.enhanceGlitchEffect(e.target);
            }
        }, true);

        // Effet de bordure rotative amélioré
        this.enhanceBorderEffects();
    }

    createWaveEffect(button, event) {
        const rect = button.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const wave = document.createElement('span');
        wave.style.position = 'absolute';
        wave.style.left = x + 'px';
        wave.style.top = y + 'px';
        wave.style.width = '0';
        wave.style.height = '0';
        wave.style.background = 'rgba(255, 255, 255, 0.5)';
        wave.style.borderRadius = '50%';
        wave.style.transform = 'translate(-50%, -50%)';
        wave.style.animation = 'waveExpand 0.6s ease-out';
        wave.style.pointerEvents = 'none';

        button.appendChild(wave);

        setTimeout(() => {
            if (wave.parentNode) {
                wave.parentNode.removeChild(wave);
            }
        }, 600);
    }

    createParticles(button) {
        const particles = [];
        const particleCount = 8;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'absolute';
            particle.style.width = '4px';
            particle.style.height = '4px';
            particle.style.background = getComputedStyle(button).getPropertyValue('--primary') || '#6366f1';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';

            const angle = (i / particleCount) * Math.PI * 2;
            const distance = 50 + Math.random() * 30;
            const x = Math.cos(angle) * distance;
            const y = Math.sin(angle) * distance;

            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.transform = 'translate(-50%, -50%)';
            particle.style.animation = `particleFloat 1s ease-out forwards`;
            particle.style.setProperty('--x', x + 'px');
            particle.style.setProperty('--y', y + 'px');

            button.appendChild(particle);
            particles.push(particle);

            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1000);
        }
    }

    enhanceGlitchEffect(button) {
        const originalText = button.textContent;
        const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        let glitchInterval;

        const startGlitch = () => {
            glitchInterval = setInterval(() => {
                let glitchedText = '';
                for (let i = 0; i < originalText.length; i++) {
                    if (Math.random() < 0.1) {
                        glitchedText += glitchChars[Math.floor(Math.random() * glitchChars.length)];
                    } else {
                        glitchedText += originalText[i];
                    }
                }
                button.textContent = glitchedText;
            }, 50);
        };

        const stopGlitch = () => {
            clearInterval(glitchInterval);
            button.textContent = originalText;
        };

        button.addEventListener('mouseenter', startGlitch);
        button.addEventListener('mouseleave', stopGlitch);
    }

    enhanceBorderEffects() {
        // Ajouter des styles CSS dynamiques pour les animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes waveExpand {
                to {
                    width: 300px;
                    height: 300px;
                    opacity: 0;
                }
            }

            @keyframes particleFloat {
                to {
                    transform: translate(calc(-50% + var(--x)), calc(-50% + var(--y)));
                    opacity: 0;
                }
            }

            .btn-border-animate:hover {
                animation-duration: 1s;
            }

            .btn-border-rotate:hover::before {
                animation-duration: 0.5s;
            }

            .btn-cyberpunk:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 25px rgba(255, 0, 110, 0.4);
            }

            .btn-matrix:hover {
                animation: matrixGlow 0.3s ease;
            }

            @keyframes matrixGlow {
                0%, 100% { text-shadow: 0 0 10px #00ff00; }
                50% { text-shadow: 0 0 20px #00ff00, 0 0 30px #00ff00; }
            }
        `;
        document.head.appendChild(style);
    }

    addCopyFunctionality() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('copy-btn')) {
                const codeElement = e.target.nextElementSibling.querySelector('code');
                const code = codeElement.textContent;

                navigator.clipboard.writeText(code).then(() => {
                    this.showCopyNotification();
                    e.target.textContent = 'Copié !';
                    setTimeout(() => {
                        e.target.textContent = 'Copier';
                    }, 2000);
                });
            }
        });
    }

    showCopyNotification() {
        let notification = document.querySelector('.copy-notification');
        if (!notification) {
            notification = document.createElement('div');
            notification.className = 'copy-notification';
            notification.textContent = 'Code copié dans le presse-papiers !';
            document.body.appendChild(notification);
        }

        notification.classList.add('show');
        
        setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // Méthode pour ajouter dynamiquement de nouveaux boutons
    addCustomButton(config) {
        const { 
            name, 
            className, 
            styles, 
            hoverStyles, 
            animation 
        } = config;

        // Créer les styles CSS
        const style = document.createElement('style');
        let css = `.${className} { ${styles} }`;
        
        if (hoverStyles) {
            css += `.${className}:hover:not(:disabled) { ${hoverStyles} }`;
        }
        
        if (animation) {
            css += `@keyframes ${className}Animation { ${animation.keyframes} }`;
            css += `.${className} { animation: ${className}Animation ${animation.duration} ${animation.timing} ${animation.iteration}; }`;
        }

        style.textContent = css;
        document.head.appendChild(style);

        console.log(`Nouveau bouton "${name}" ajouté avec la classe "${className}"`);
    }
}

// Initialiser les boutons quand le DOM est prêt
document.addEventListener('DOMContentLoaded', () => {
    new ButtonsComponent();
});

// Exporter pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ButtonsComponent;
}