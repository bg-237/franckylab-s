// Navigation mobile
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Fermer le menu mobile quand on clique sur un lien
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Smooth scrolling pour les liens d'ancrage
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

    // Animation au scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observer les éléments à animer
    document.querySelectorAll('.service-card, .feature, .testimonial, .step').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Gestion des uploads de fichiers
    setupFileUploads();
});

// Configuration des uploads de fichiers
function setupFileUploads() {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    
    fileInputs.forEach(input => {
        const uploadDiv = input.closest('.file-upload');
        const placeholder = uploadDiv.querySelector('.upload-placeholder');
        
        input.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                uploadDiv.classList.add('has-file');
                placeholder.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <span>${file.name}</span>
                    <small>Fichier sélectionné (${formatFileSize(file.size)})</small>
                `;
            } else {
                uploadDiv.classList.remove('has-file');
                placeholder.innerHTML = `
                    <i class="fas fa-cloud-upload-alt"></i>
                    <span>Cliquez pour sélectionner ou glissez votre fichier</span>
                `;
            }
        });

        // Drag & drop
        uploadDiv.addEventListener('dragover', function(e) {
            e.preventDefault();
            uploadDiv.style.borderColor = 'var(--primary-color)';
            uploadDiv.style.background = 'var(--gray-50)';
        });

        uploadDiv.addEventListener('dragleave', function(e) {
            e.preventDefault();
            uploadDiv.style.borderColor = 'var(--gray-300)';
            uploadDiv.style.background = 'transparent';
        });

        uploadDiv.addEventListener('drop', function(e) {
            e.preventDefault();
            uploadDiv.style.borderColor = 'var(--gray-300)';
            uploadDiv.style.background = 'transparent';
            
            const files = e.dataTransfer.files;
            if (files.length > 0) {
                input.files = files;
                input.dispatchEvent(new Event('change'));
            }
        });
    });
}

// Formatage de la taille des fichiers
function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Formatage des nombres
function formatNumber(num) {
    return new Intl.NumberFormat('fr-FR').format(num);
}

// Formatage des montants en euros
function formatCurrency(amount) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Validation des formulaires
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            field.style.borderColor = 'var(--gray-200)';
        }
    });
    
    return isValid;
}

// Affichage des notifications
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // Animation d'entrée
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Fermeture automatique
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
    
    // Fermeture manuelle
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    });
}

// Styles pour les notifications
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--white);
        border-radius: 12px;
        box-shadow: var(--shadow-lg);
        padding: 16px 20px;
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
        border-left: 4px solid var(--accent-color);
    }
    
    .notification.error {
        border-left-color: #ef4444;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .notification i:first-child {
        color: var(--accent-color);
        font-size: 18px;
    }
    
    .notification.error i:first-child {
        color: #ef4444;
    }
    
    .notification span {
        flex: 1;
        color: var(--text-primary);
        font-weight: 500;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: var(--text-light);
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        transition: var(--transition);
    }
    
    .notification-close:hover {
        background: var(--gray-100);
        color: var(--text-primary);
    }
`;

// Injection des styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);