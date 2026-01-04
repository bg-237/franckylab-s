// ===== FORMULAIRES - LABO DE FRANCKY =====

class FormsComponent {
    constructor() {
        this.init();
    }

    init() {
        this.initRangeSliders();
        this.initFormValidation();
        this.addCopyFunctionality();
    }

    initRangeSliders() {
        // Range slider value display
        document.addEventListener('input', (e) => {
            if (e.target.type === 'range') {
                const valueDisplay = document.querySelector('#volume-value');
                if (valueDisplay && e.target.id === 'volume-slider') {
                    valueDisplay.textContent = e.target.value;
                }
            }
        });
    }

    initFormValidation() {
        // Real-time validation
        document.addEventListener('input', (e) => {
            if (e.target.classList.contains('form-input') || 
                e.target.classList.contains('form-textarea')) {
                this.validateField(e.target);
            }
        });

        // Form submission
        document.addEventListener('submit', (e) => {
            if (e.target.classList.contains('demo-form')) {
                e.preventDefault();
                this.handleFormSubmit(e.target);
            }
        });
    }

    validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        let isValid = true;
        let message = '';

        // Remove existing validation classes
        field.classList.remove('is-valid', 'is-invalid');
        
        // Remove existing feedback
        const existingFeedback = field.parentElement.querySelector('.form-feedback');
        if (existingFeedback) {
            existingFeedback.remove();
        }

        // Skip validation if field is empty and not required
        if (!value && !field.required) {
            return;
        }

        // Required field validation
        if (field.required && !value) {
            isValid = false;
            message = 'Ce champ est requis';
        }

        // Email validation
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                message = 'Adresse email invalide';
            }
        }

        // Minimum length validation
        if (field.minLength && value.length < field.minLength) {
            isValid = false;
            message = `Minimum ${field.minLength} caractères`;
        }

        // Apply validation classes and feedback
        if (value) {
            field.classList.add(isValid ? 'is-valid' : 'is-invalid');
            
            if (message) {
                const feedback = document.createElement('div');
                feedback.className = `form-feedback ${isValid ? 'valid' : 'invalid'}`;
                feedback.textContent = message;
                field.parentElement.appendChild(feedback);
            }
        }

        return isValid;
    }

    handleFormSubmit(form) {
        const fields = form.querySelectorAll('.form-input, .form-textarea');
        let isFormValid = true;

        // Validate all fields
        fields.forEach(field => {
            if (!this.validateField(field)) {
                isFormValid = false;
            }
        });

        if (isFormValid) {
            this.showSuccessMessage();
        } else {
            this.showErrorMessage();
        }
    }

    showSuccessMessage() {
        this.showNotification('Formulaire envoyé avec succès !', 'success');
    }

    showErrorMessage() {
        this.showNotification('Veuillez corriger les erreurs dans le formulaire', 'error');
    }

    showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotifications = document.querySelectorAll('.form-notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = `form-notification form-notification-${type}`;
        notification.textContent = message;

        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            top: '2rem',
            right: '2rem',
            padding: '1rem 1.5rem',
            borderRadius: '8px',
            color: 'white',
            fontWeight: '500',
            zIndex: '1000',
            transform: 'translateX(100%)',
            transition: 'transform 0.3s ease',
            maxWidth: '300px'
        });

        // Set background color based on type
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            info: '#6366f1'
        };
        notification.style.background = colors[type] || colors.info;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Auto remove after 4 seconds
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 4000);
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

    // Utility method to add custom validation rules
    addCustomValidation(fieldSelector, validationFn, errorMessage) {
        document.addEventListener('input', (e) => {
            if (e.target.matches(fieldSelector)) {
                const isValid = validationFn(e.target.value);
                
                e.target.classList.remove('is-valid', 'is-invalid');
                const existingFeedback = e.target.parentElement.querySelector('.form-feedback');
                if (existingFeedback) {
                    existingFeedback.remove();
                }

                if (e.target.value) {
                    e.target.classList.add(isValid ? 'is-valid' : 'is-invalid');
                    
                    if (!isValid) {
                        const feedback = document.createElement('div');
                        feedback.className = 'form-feedback invalid';
                        feedback.textContent = errorMessage;
                        e.target.parentElement.appendChild(feedback);
                    }
                }
            }
        });
    }
}

// Initialiser les composants de formulaire
document.addEventListener('DOMContentLoaded', () => {
    new FormsComponent();
});

// Exporter pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FormsComponent;
}