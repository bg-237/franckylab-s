// Contact Page Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    const faqItems = document.querySelectorAll('.faq-item');

    // FAQ functionality
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = question.querySelector('i');

        question.addEventListener('click', function() {
            const isActive = item.classList.contains('active');
            
            // Close all FAQ items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
                faqItem.querySelector('.faq-answer').style.maxHeight = '0';
                faqItem.querySelector('.faq-question i').classList.remove('fa-minus');
                faqItem.querySelector('.faq-question i').classList.add('fa-plus');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            }
        });
    });

    // Contact form submission
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateContactForm()) {
                submitContactForm();
            }
        });

        // Real-time validation
        const formInputs = contactForm.querySelectorAll('input, select, textarea');
        formInputs.forEach(input => {
            input.addEventListener('blur', function() {
                validateField(this);
            });

            input.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }

    function validateContactForm() {
        let isValid = true;
        const requiredFields = ['contactFirstName', 'contactLastName', 'contactEmail', 'contactSubject', 'contactMessage', 'contactConsent'];
        
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (!validateField(field)) {
                isValid = false;
            }
        });

        return isValid;
    }

    function validateField(field) {
        const errorElement = field.closest('.form-group').querySelector('.error-message');
        let isValid = true;
        let errorMessage = '';

        // Clear previous error state
        field.classList.remove('error');
        errorElement.textContent = '';

        // Check if field is required and empty
        if (field.hasAttribute('required') && !field.value.trim()) {
            isValid = false;
            errorMessage = 'Ce champ est requis';
        } else if (field.value.trim()) {
            // Specific validation based on field type
            switch (field.type) {
                case 'email':
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value)) {
                        isValid = false;
                        errorMessage = 'Veuillez entrer une adresse email valide';
                    }
                    break;
                
                case 'tel':
                    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
                    if (field.value && !phoneRegex.test(field.value)) {
                        isValid = false;
                        errorMessage = 'Veuillez entrer un numéro de téléphone valide';
                    }
                    break;
            }
        }

        // Special validation for checkbox
        if (field.type === 'checkbox' && field.hasAttribute('required') && !field.checked) {
            isValid = false;
            errorMessage = 'Vous devez accepter cette condition';
        }

        // Apply error state if validation failed
        if (!isValid) {
            field.classList.add('error');
            errorElement.textContent = errorMessage;
        }

        return isValid;
    }

    function submitContactForm() {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            // Show success message
            showSuccessMessage();
            
            // Reset form
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
        }, 2000);
    }

    function showSuccessMessage() {
        // Create success message
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <h4>Message Envoyé avec Succès !</h4>
                <p>Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
            </div>
        `;
        
        successMessage.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 20px;
            padding: 3rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
            z-index: 10000;
            text-align: center;
            max-width: 400px;
            width: 90%;
            animation: fadeInScale 0.5s ease;
        `;

        // Add overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 9999;
            animation: fadeIn 0.5s ease;
        `;

        // Add animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInScale {
                from {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
            }
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .success-content i {
                font-size: 3rem;
                color: #10b981;
                margin-bottom: 1rem;
            }
            .success-content h4 {
                font-size: 1.5rem;
                color: #1f2937;
                margin-bottom: 0.5rem;
            }
            .success-content p {
                color: #6b7280;
                margin: 0;
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(overlay);
        document.body.appendChild(successMessage);

        // Remove message after 4 seconds
        setTimeout(() => {
            overlay.remove();
            successMessage.remove();
            style.remove();
        }, 4000);

        // Remove on click
        overlay.addEventListener('click', () => {
            overlay.remove();
            successMessage.remove();
            style.remove();
        });
    }

    // Smooth scroll for anchor links
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

    // Phone number formatting
    const phoneInput = document.getElementById('contactPhone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            
            // Add Cameroon country code if not present
            if (value.length > 0 && !value.startsWith('237')) {
                if (value.startsWith('6')) {
                    value = '237' + value;
                }
            }
            
            // Format the number
            if (value.length >= 3) {
                value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{3})/, '+$1 $2 $3 $4');
            }
            
            e.target.value = value;
        });
    }

    // Add loading animation to contact cards
    const contactCards = document.querySelectorAll('.contact-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    contactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Emergency contact highlight
    const emergencyContact = document.querySelector('.emergency-contact');
    if (emergencyContact) {
        emergencyContact.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        emergencyContact.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }

    // Map interaction
    const mapPlaceholder = document.querySelector('.map-placeholder');
    if (mapPlaceholder) {
        mapPlaceholder.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }

    console.log('Contact page loaded successfully!');
});