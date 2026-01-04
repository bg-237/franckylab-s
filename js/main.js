// Configuration EmailJS - Voir js/config.js pour les instructions
// emailjs.init("YOUR_PUBLIC_KEY"); // Décommentez et configurez avec votre clé

// Variables globales
let typingIndex = 0;
let currentTestimonial = 0;
const typingTexts = [
    "solutions digitales",
    "sites web modernes",
    "logiciels sur mesure",
    "chatbots intelligents",
    "automatisations"
];

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initHeroAnimation();
    initTypingAnimation();
    initScrollAnimations();
    initTestimonialSlider();
    initContactForm();
    initStatsCounter();
    initParallaxEffects();
});

// Navigation
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect sur la navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Menu hamburger
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Fermer le menu mobile au clic sur un lien
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Fermer le menu mobile au clic en dehors
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            if (navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });

    // Fermer le menu mobile au redimensionnement
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Active link highlighting
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Animation du héro avec canvas 3D
function initHeroAnimation() {
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');
    
    // Redimensionner le canvas
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Particules 3D
    const particles = [];
    const particleCount = 100;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.z = Math.random() * 1000;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.vz = (Math.random() - 0.5) * 2;
            this.size = Math.random() * 2 + 1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            this.z += this.vz;
            
            // Effet de profondeur
            const scale = 1000 / (1000 + this.z);
            this.screenX = this.x * scale + canvas.width / 2;
            this.screenY = this.y * scale + canvas.height / 2;
            this.screenSize = this.size * scale;
            
            // Reset si hors écran
            if (this.z > 1000 || this.screenX < 0 || this.screenX > canvas.width || 
                this.screenY < 0 || this.screenY > canvas.height) {
                this.x = (Math.random() - 0.5) * 2000;
                this.y = (Math.random() - 0.5) * 2000;
                this.z = 0;
            }
        }
        
        draw() {
            const opacity = Math.max(0, 1 - this.z / 1000);
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.fillStyle = '#00d4ff';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00d4ff';
            ctx.beginPath();
            ctx.arc(this.screenX, this.screenY, this.screenSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    // Initialiser les particules
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    // Animation loop
    function animate() {
        ctx.fillStyle = 'rgba(10, 10, 10, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        // Connexions entre particules proches
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].screenX - particles[j].screenX;
                const dy = particles[i].screenY - particles[j].screenY;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 100) {
                    const opacity = (100 - distance) / 100 * 0.3;
                    ctx.save();
                    ctx.globalAlpha = opacity;
                    ctx.strokeStyle = '#00d4ff';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].screenX, particles[i].screenY);
                    ctx.lineTo(particles[j].screenX, particles[j].screenY);
                    ctx.stroke();
                    ctx.restore();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

// Animation de frappe
function initTypingAnimation() {
    const typingElement = document.getElementById('typing-text');
    let currentText = '';
    let isDeleting = false;
    let textIndex = 0;
    
    function typeText() {
        const fullText = typingTexts[textIndex];
        
        if (isDeleting) {
            currentText = fullText.substring(0, currentText.length - 1);
        } else {
            currentText = fullText.substring(0, currentText.length + 1);
        }
        
        typingElement.textContent = currentText;
        
        let typeSpeed = isDeleting ? 50 : 100;
        
        if (!isDeleting && currentText === fullText) {
            typeSpeed = 2000; // Pause à la fin
            isDeleting = true;
        } else if (isDeleting && currentText === '') {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            typeSpeed = 500; // Pause avant le nouveau texte
        }
        
        setTimeout(typeText, typeSpeed);
    }
    
    typeText();
}

// Animations au scroll
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    // Observer tous les éléments avec data-aos
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// Slider de témoignages
function initTestimonialSlider() {
    const testimonials = document.querySelectorAll('.testimonial-item');
    const buttons = document.querySelectorAll('.testimonial-btn');
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.classList.toggle('active', i === index);
        });
        
        buttons.forEach((button, i) => {
            button.classList.toggle('active', i === index);
        });
        
        currentTestimonial = index;
    }
    
    // Event listeners pour les boutons
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => showTestimonial(index));
    });
    
    // Auto-play
    setInterval(() => {
        const nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }, 5000);
}

// Formulaire de contact
function initContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        try {
            // Données du formulaire
            const formData = new FormData(form);
            const templateParams = {
                name: formData.get('name'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                service: formData.get('service'),
                message: formData.get('message')
            };
            
            // Envoi avec EmailJS (décommentez après configuration)
            /*
            await emailjs.send(
                'YOUR_SERVICE_ID', // Remplacez par votre service ID
                'YOUR_TEMPLATE_ID', // Remplacez par votre template ID
                templateParams
            );
            */
            
            // Simulation pour test (supprimez après configuration EmailJS)
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Succès
            showNotification('Message envoyé avec succès !', 'success');
            form.reset();
            
        } catch (error) {
            console.error('Erreur:', error);
            showNotification('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
        } finally {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    });
}

// Notification système
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#10b981' : '#ef4444',
        color: 'white',
        padding: '1rem 1.5rem',
        borderRadius: '0.5rem',
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
        zIndex: '10000',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease'
    });
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Suppression automatique
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 4000);
}

// Compteur de statistiques
function initStatsCounter() {
    const stats = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    stats.forEach(stat => observer.observe(stat));
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 30);
}

// Effets parallax
function initParallaxEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Smooth scroll pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Optimisation des performances
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Lazy loading des images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
}

// Initialiser le lazy loading
initLazyLoading();

// Vérification du chargement de Font Awesome
function checkFontAwesome() {
    // Créer un élément de test
    const testElement = document.createElement('i');
    testElement.className = 'fas fa-home';
    testElement.style.position = 'absolute';
    testElement.style.left = '-9999px';
    document.body.appendChild(testElement);
    
    // Vérifier si Font Awesome est chargé
    const computedStyle = window.getComputedStyle(testElement, ':before');
    const content = computedStyle.getPropertyValue('content');
    
    // Nettoyer
    document.body.removeChild(testElement);
    
    // Si Font Awesome n'est pas chargé, ajouter une classe fallback
    if (!content || content === 'none' || content === '""') {
        document.body.classList.add('no-fontawesome');
        console.warn('Font Awesome non chargé, utilisation des icônes custom');
        
        // Utiliser les icônes custom
        replaceFontAwesomeWithCustomIcons();
    }
}

// Remplacer les icônes Font Awesome par des icônes custom
function replaceFontAwesomeWithCustomIcons() {
    // Utiliser notre système d'icônes custom
    if (typeof franckyIcons !== 'undefined') {
        franckyIcons.replaceFontAwesome();
        console.log('Icônes custom Francky Lab\'s chargées avec succès');
    } else {
        console.warn('Système d\'icônes custom non disponible, utilisation des emojis de fallback');
        replaceFontAwesomeWithEmojis();
    }
}

// Vérifier Font Awesome après le chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    // Attendre un peu pour que Font Awesome se charge
    setTimeout(checkFontAwesome, 1000);
});

// Vérifier aussi après le chargement complet
window.addEventListener('load', function() {
    setTimeout(checkFontAwesome, 500);
});