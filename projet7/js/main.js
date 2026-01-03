// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });

    // Initialize AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // Smooth scrolling for anchor links
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

    // Loading animation
    const loadingElements = document.querySelectorAll('.loading');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, {
        threshold: 0.1
    });

    loadingElements.forEach(el => {
        observer.observe(el);
    });

    // Parallax effect for hero shapes
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            shape.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`;
        });
    });

    // Counter animation for stats
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Observe stats for counter animation
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.classList.contains('animated')) {
                    statNumber.classList.add('animated');
                    const text = statNumber.textContent;
                    const number = parseInt(text.replace(/\D/g, ''));
                    const suffix = text.replace(/\d/g, '');
                    
                    statNumber.textContent = '0' + suffix;
                    animateCounter(statNumber, number);
                    
                    setTimeout(() => {
                        statNumber.textContent = text;
                    }, 2000);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat').forEach(stat => {
        statsObserver.observe(stat);
    });

    // 3D card tilt effect
    const cards = document.querySelectorAll('.service-card, .hero-card, .floating-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });

    // Floating animation for hero elements
    function createFloatingAnimation() {
        const floatingElements = document.querySelectorAll('.hero-card, .floating-card');
        
        floatingElements.forEach((element, index) => {
            const delay = index * 0.5;
            element.style.animation = `float 6s ease-in-out infinite ${delay}s`;
        });
    }

    createFloatingAnimation();

    // Particle effect for hero background
    function createParticles() {
        const heroBackground = document.querySelector('.hero-background');
        if (!heroBackground) return;

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${5 + Math.random() * 10}s linear infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            heroBackground.appendChild(particle);
        }
    }

    // Add particle animation CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes particleFloat {
            0% {
                transform: translateY(100vh) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    createParticles();

    // Form validation and submission (for future forms)
    function validateForm(form) {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
        let isValid = true;

        inputs.forEach(input => {
            const errorElement = input.parentNode.querySelector('.error-message');
            
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                if (errorElement) {
                    errorElement.textContent = 'Ce champ est requis';
                }
            } else {
                input.classList.remove('error');
                if (errorElement) {
                    errorElement.textContent = '';
                }
            }

            // Email validation
            if (input.type === 'email' && input.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    isValid = false;
                    input.classList.add('error');
                    if (errorElement) {
                        errorElement.textContent = 'Veuillez entrer une adresse email valide';
                    }
                }
            }

            // Phone validation
            if (input.type === 'tel' && input.value.trim()) {
                const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
                if (!phoneRegex.test(input.value)) {
                    isValid = false;
                    input.classList.add('error');
                    if (errorElement) {
                        errorElement.textContent = 'Veuillez entrer un numéro de téléphone valide';
                    }
                }
            }
        });

        return isValid;
    }

    // Add form validation to all forms
    document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(form)) {
                // Show success message
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Votre message a été envoyé avec succès!';
                successMessage.style.cssText = `
                    background: #10b981;
                    color: white;
                    padding: 1rem;
                    border-radius: 8px;
                    margin-top: 1rem;
                    text-align: center;
                `;
                
                form.appendChild(successMessage);
                form.reset();
                
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    });

    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    // Scroll to top button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<span class="francky-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 20H11V8L5.5 13.5L4.08 12.08L12 4.16L19.92 12.08L18.5 13.5L13 8V20Z"/></svg></span>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    document.body.appendChild(scrollToTopBtn);

    // WhatsApp floating button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/237682986035?text=Bonjour%20Madame%20L\'assureur,%20j\'aimerais%20avoir%20des%20informations%20sur%20vos%20services%20d\'assurance.';
    whatsappBtn.target = '_blank';
    whatsappBtn.innerHTML = '<span class="francky-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382C17.367 14.382 17.188 14.382 17.11 14.304C16.957 14.226 15.847 13.675 15.847 13.675C15.668 13.597 15.566 13.597 15.413 13.854C15.413 13.854 14.865 14.644 14.687 14.826C14.584 14.928 14.406 14.928 14.253 14.826C14.1 14.723 13.552 14.382 12.442 13.597C11.717 13.018 11.307 12.312 11.205 12.133C11.102 11.955 11.205 11.826 11.307 11.723C11.41 11.621 11.512 11.468 11.615 11.366C11.717 11.263 11.717 11.161 11.82 11.058C11.922 10.956 11.82 10.853 11.717 10.751C11.615 10.648 11.205 9.538 11.027 9.103C10.848 8.668 10.67 8.668 10.567 8.668C10.465 8.668 10.362 8.668 10.26 8.668C10.157 8.668 9.952 8.771 9.85 8.873C9.747 8.976 9.337 9.386 9.337 10.496C9.337 11.606 10.157 12.665 10.26 12.767C10.362 12.87 11.717 15.016 13.859 15.947C14.304 16.149 14.661 16.277 14.943 16.379C15.388 16.533 15.782 16.507 16.099 16.456C16.442 16.405 17.367 15.947 17.57 15.438C17.772 14.928 17.772 14.484 17.67 14.382C17.567 14.279 17.472 14.382 17.472 14.382M12.19 21.785H12.185C10.36 21.785 8.587 21.297 7.052 20.397L6.684 20.185L2.925 21.214L3.973 17.584L3.734 17.2C2.76 15.616 2.235 13.794 2.24 11.916C2.24 6.615 6.615 2.24 11.916 2.24C14.484 2.24 16.897 3.171 18.761 5.035C20.625 6.899 21.556 9.312 21.556 11.88C21.556 17.181 17.181 21.556 11.88 21.556"/></svg></span>';
    whatsappBtn.className = 'whatsapp-btn';
    whatsappBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        left: 2rem;
        width: 60px;
        height: 60px;
        background: #25D366;
        color: white;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        animation: whatsappPulse 2s infinite;
    `;

    document.body.appendChild(whatsappBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
            scrollToTopBtn.classList.remove('show');
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Performance optimization: Debounce scroll events
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

    // Apply debounce to scroll events
    const debouncedScrollHandler = debounce(function() {
        // Scroll-dependent animations here
    }, 10);

    window.addEventListener('scroll', debouncedScrollHandler);

    console.log('Madame L\'assureur - Site web chargé avec succès!');
});