// ===== ANIMATIONS - LABO DE FRANCKY =====

class AnimationsComponent {
    constructor() {
        this.init();
    }

    init() {
        this.initReplayButtons();
        this.initRevealAnimations();
        this.addCopyFunctionality();
    }

    initReplayButtons() {
        // Replay entrance animations
        document.addEventListener('click', (e) => {
            if (e.target.id === 'replay-entrance') {
                this.replayEntranceAnimations();
            }
            if (e.target.id === 'replay-exit') {
                this.replayExitAnimations();
            }
            if (e.target.id === 'reset-reveal') {
                this.resetRevealAnimations();
            }
        });
    }

    replayEntranceAnimations() {
        const entranceItems = document.querySelectorAll('.animate-fadeIn, .animate-slideInUp, .animate-slideInLeft, .animate-zoomIn, .animate-bounceIn');
        
        entranceItems.forEach((item, index) => {
            // Remove animation class
            const animationClass = Array.from(item.classList).find(cls => cls.startsWith('animate-'));
            if (animationClass) {
                item.classList.remove(animationClass);
                
                // Add it back with a delay
                setTimeout(() => {
                    item.classList.add(animationClass);
                }, index * 200);
            }
        });
    }

    replayExitAnimations() {
        const exitItems = document.querySelectorAll('.animate-fadeOut, .animate-slideOutDown, .animate-slideOutRight, .animate-zoomOut, .animate-bounceOut');
        
        exitItems.forEach((item, index) => {
            // Remove animation class
            const animationClass = Array.from(item.classList).find(cls => cls.startsWith('animate-'));
            if (animationClass) {
                item.classList.remove(animationClass);
                
                // Add it back with a delay
                setTimeout(() => {
                    item.classList.add(animationClass);
                }, index * 200);
            }
        });
    }

    initRevealAnimations() {
        // Create intersection observer for reveal animations
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all reveal items
        document.querySelectorAll('.reveal-item').forEach(item => {
            revealObserver.observe(item);
        });

        this.revealObserver = revealObserver;
    }

    resetRevealAnimations() {
        const revealItems = document.querySelectorAll('.reveal-item');
        revealItems.forEach(item => {
            item.classList.remove('revealed');
            
            // Re-trigger the animation after a short delay
            setTimeout(() => {
                item.classList.add('revealed');
            }, 100);
        });
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

    // Utility methods for programmatic animations
    animateElement(element, animationType, duration = 600) {
        return new Promise((resolve) => {
            const animationClass = `animate-${animationType}`;
            
            // Remove any existing animation classes
            element.classList.forEach(cls => {
                if (cls.startsWith('animate-')) {
                    element.classList.remove(cls);
                }
            });
            
            // Add the new animation class
            element.classList.add(animationClass);
            
            // Remove the class after animation completes
            setTimeout(() => {
                element.classList.remove(animationClass);
                resolve();
            }, duration);
        });
    }

    // Stagger animations for multiple elements
    staggerAnimation(elements, animationType, delay = 100) {
        elements.forEach((element, index) => {
            setTimeout(() => {
                this.animateElement(element, animationType);
            }, index * delay);
        });
    }

    // Chain animations
    async chainAnimations(element, animations) {
        for (const animation of animations) {
            await this.animateElement(element, animation.type, animation.duration);
            if (animation.delay) {
                await new Promise(resolve => setTimeout(resolve, animation.delay));
            }
        }
    }

    // Add animation on scroll
    addScrollAnimation(selector, animationType, options = {}) {
        const elements = document.querySelectorAll(selector);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target, animationType);
                    if (options.once !== false) {
                        observer.unobserve(entry.target);
                    }
                }
            });
        }, {
            threshold: options.threshold || 0.1,
            rootMargin: options.rootMargin || '0px'
        });

        elements.forEach(element => observer.observe(element));
        
        return observer;
    }

    // Create custom keyframe animation
    createCustomAnimation(name, keyframes, duration = '1s', timing = 'ease') {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ${name} {
                ${keyframes}
            }
            .animate-${name} {
                animation: ${name} ${duration} ${timing};
            }
        `;
        document.head.appendChild(style);
    }

    // Performance-optimized animation using requestAnimationFrame
    animateWithRAF(element, properties, duration = 1000, easing = 'easeOutCubic') {
        const start = performance.now();
        const startValues = {};
        const endValues = {};
        
        // Get initial values
        Object.keys(properties).forEach(prop => {
            const computedStyle = getComputedStyle(element);
            startValues[prop] = parseFloat(computedStyle[prop]) || 0;
            endValues[prop] = properties[prop];
        });

        const easingFunctions = {
            linear: t => t,
            easeInCubic: t => t * t * t,
            easeOutCubic: t => 1 - Math.pow(1 - t, 3),
            easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
        };

        const easingFn = easingFunctions[easing] || easingFunctions.easeOutCubic;

        const animate = (currentTime) => {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const easedProgress = easingFn(progress);

            Object.keys(properties).forEach(prop => {
                const currentValue = startValues[prop] + (endValues[prop] - startValues[prop]) * easedProgress;
                element.style[prop] = currentValue + (prop.includes('translate') ? 'px' : '');
            });

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }
}

// Initialiser les composants d'animation
document.addEventListener('DOMContentLoaded', () => {
    new AnimationsComponent();
});

// Exporter pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AnimationsComponent;
}