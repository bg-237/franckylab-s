// ===== EFFETS 3D - LABO DE FRANCKY =====

class EffectsComponent {
    constructor() {
        this.init();
    }

    init() {
        this.initParallaxEffects();
        this.initParticleEffects();
        this.addCopyFunctionality();
        this.initRandomParticleMovement();
    }

    initParallaxEffects() {
        document.addEventListener('click', (e) => {
            if (e.target.id === 'trigger-parallax') {
                const container = document.querySelector('.parallax-container');
                container.classList.toggle('active');
                
                e.target.textContent = container.classList.contains('active') 
                    ? 'Réinitialiser Parallaxe' 
                    : 'Déclencher Parallaxe';
            }
        });

        // Mouse parallax effect
        document.addEventListener('mousemove', (e) => {
            const containers = document.querySelectorAll('.parallax-container');
            
            containers.forEach(container => {
                const rect = container.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width;
                const y = (e.clientY - rect.top) / rect.height;
                
                if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
                    const layers = container.querySelectorAll('.parallax-layer');
                    
                    layers.forEach((layer, index) => {
                        const speed = (index + 1) * 0.5;
                        const xOffset = (x - 0.5) * speed * 20;
                        const yOffset = (y - 0.5) * speed * 20;
                        
                        layer.style.transform = `
                            translateZ(${-100 + index * 50}px) 
                            scale(${1.1 - index * 0.05}) 
                            translateX(${xOffset}px) 
                            translateY(${yOffset}px)
                        `;
                    });
                }
            });
        });
    }

    initParticleEffects() {
        document.addEventListener('click', (e) => {
            if (e.target.id === 'trigger-particles') {
                const particlesContainer = document.getElementById('particles-demo');
                particlesContainer.classList.toggle('active');
                
                e.target.textContent = particlesContainer.classList.contains('active') 
                    ? 'Arrêter Particules' 
                    : 'Déclencher Particules';
                
                if (particlesContainer.classList.contains('active')) {
                    this.animateParticles(particlesContainer);
                }
            }
        });
    }

    initRandomParticleMovement() {
        // Set random CSS custom properties for particle movement
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.setProperty('--random-x', (Math.random() - 0.5).toString());
            particle.style.setProperty('--random-y', (Math.random() - 0.5).toString());
            particle.style.setProperty('--random-z', (Math.random() - 0.5).toString());
        });
    }

    animateParticles(container) {
        const particles = container.querySelectorAll('.particle');
        
        particles.forEach((particle, index) => {
            // Random starting position
            const startX = Math.random() * 280 + 10;
            const startY = Math.random() * 180 + 10;
            
            particle.style.left = startX + 'px';
            particle.style.top = startY + 'px';
            
            // Update random movement values
            particle.style.setProperty('--random-x', (Math.random() - 0.5).toString());
            particle.style.setProperty('--random-y', (Math.random() - 0.5).toString());
            particle.style.setProperty('--random-z', (Math.random() - 0.5).toString());
        });
    }

    // Advanced 3D card tilt effect
    init3DCardTilt() {
        const tiltCards = document.querySelectorAll('.card-tilt');
        
        tiltCards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = (y - centerY) / centerY * -10;
                const rotateY = (x - centerX) / centerX * 10;
                
                card.style.transform = `
                    perspective(1000px) 
                    rotateX(${rotateX}deg) 
                    rotateY(${rotateY}deg)
                    translateZ(10px)
                `;
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
            });
        });
    }

    // Create floating elements
    createFloatingElements(container, count = 10) {
        for (let i = 0; i < count; i++) {
            const element = document.createElement('div');
            element.className = 'floating-element';
            element.style.cssText = `
                position: absolute;
                width: ${Math.random() * 20 + 10}px;
                height: ${Math.random() * 20 + 10}px;
                background: rgba(99, 102, 241, ${Math.random() * 0.5 + 0.3});
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: float3d ${Math.random() * 3 + 2}s ease-in-out infinite;
                animation-delay: ${Math.random() * 2}s;
            `;
            container.appendChild(element);
        }
    }

    // Advanced morphing animation
    morphElement(element, fromShape, toShape, duration = 500) {
        const shapes = {
            circle: 'border-radius: 50%;',
            square: 'border-radius: 8px;',
            triangle: 'clip-path: polygon(50% 0%, 0% 100%, 100% 100%);',
            hexagon: 'clip-path: polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%);'
        };

        element.style.transition = `all ${duration}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
        
        // Apply the target shape
        if (shapes[toShape]) {
            element.style.cssText += shapes[toShape];
        }
        
        return new Promise(resolve => {
            setTimeout(resolve, duration);
        });
    }

    // Create 3D text effect
    create3DText(text, container) {
        const textElement = document.createElement('div');
        textElement.className = 'text-3d';
        textElement.style.cssText = `
            font-size: 3rem;
            font-weight: bold;
            color: var(--primary);
            text-shadow: 
                1px 1px 0 #ccc,
                2px 2px 0 #c9c9c9,
                3px 3px 0 #bbb,
                4px 4px 0 #b9b9b9,
                5px 5px 0 #aaa,
                6px 6px 1px rgba(0,0,0,.1),
                0 0 5px rgba(0,0,0,.1),
                0 1px 3px rgba(0,0,0,.3),
                0 3px 5px rgba(0,0,0,.2),
                0 5px 10px rgba(0,0,0,.25);
            transform: perspective(500px) rotateX(15deg);
            transition: transform 0.3s ease;
        `;
        textElement.textContent = text;
        
        textElement.addEventListener('mouseenter', () => {
            textElement.style.transform = 'perspective(500px) rotateX(0deg) translateZ(20px)';
        });
        
        textElement.addEventListener('mouseleave', () => {
            textElement.style.transform = 'perspective(500px) rotateX(15deg) translateZ(0px)';
        });
        
        container.appendChild(textElement);
        return textElement;
    }

    // Advanced glass morphism effect
    createGlassMorphism(element, intensity = 10) {
        element.style.cssText += `
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(${intensity}px);
            -webkit-backdrop-filter: blur(${intensity}px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 
                0 8px 32px rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
        `;
    }

    // Holographic effect
    createHolographicEffect(element) {
        element.style.cssText += `
            background: linear-gradient(
                45deg,
                transparent 30%,
                rgba(99, 102, 241, 0.1) 50%,
                transparent 70%
            );
            background-size: 200% 200%;
            animation: hologramShimmer 2s ease-in-out infinite;
            position: relative;
            overflow: hidden;
        `;
        
        // Add shimmer overlay
        const shimmer = document.createElement('div');
        shimmer.style.cssText = `
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: linear-gradient(
                45deg,
                transparent,
                rgba(255, 255, 255, 0.1),
                transparent
            );
            transform: rotate(45deg);
            animation: shimmerMove 3s ease-in-out infinite;
        `;
        element.appendChild(shimmer);
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
}

// Add additional CSS animations
const additionalStyles = `
    @keyframes shimmerMove {
        0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
        100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
    }
    
    .floating-element {
        pointer-events: none;
        z-index: 1;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialiser les composants d'effets 3D
document.addEventListener('DOMContentLoaded', () => {
    const effectsComponent = new EffectsComponent();
    effectsComponent.init3DCardTilt();
});

// Exporter pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EffectsComponent;
}