// Page Contact JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Gestion du formulaire de contact
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactSubmit);
    }
    
    // Gestion de la FAQ
    setupFAQ();
});

// Gestion de la soumission du formulaire de contact
function handleContactSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    // Validation
    if (!validateForm(form)) {
        showNotification('Veuillez remplir tous les champs obligatoires', 'error');
        return;
    }
    
    // Validation email
    const email = formData.get('email');
    if (!isValidEmail(email)) {
        showNotification('Veuillez saisir une adresse email valide', 'error');
        return;
    }
    
    // Simulation d'envoi
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitBtn.disabled = true;
    
    // Simuler un délai d'envoi
    setTimeout(() => {
        // Succès simulé
        showNotification('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
        
        // Reset du formulaire
        form.reset();
        
        // Restaurer le bouton
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Optionnel : envoyer les données à un service
        console.log('Données du formulaire:', Object.fromEntries(formData));
        
    }, 2000);
}

// Validation email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Configuration de la FAQ
function setupFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Fermer les autres items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle l'item actuel
            item.classList.toggle('active');
        });
    });
}

// Fonction pour ouvrir le chat (simulation)
function openChat() {
    showNotification('Le chat en ligne sera bientôt disponible. En attendant, vous pouvez nous contacter par téléphone ou email.');
}

// Fonction pour prendre rendez-vous (simulation)
function bookAppointment() {
    showNotification('La prise de rendez-vous en ligne sera bientôt disponible. Contactez-nous par téléphone pour planifier votre rendez-vous.');
}

// Ajouter des événements pour les boutons d'action si présents
document.addEventListener('DOMContentLoaded', function() {
    // Bouton chat (si ajouté)
    const chatBtn = document.querySelector('[data-action="chat"]');
    if (chatBtn) {
        chatBtn.addEventListener('click', openChat);
    }
    
    // Bouton rendez-vous (si ajouté)
    const appointmentBtn = document.querySelector('[data-action="appointment"]');
    if (appointmentBtn) {
        appointmentBtn.addEventListener('click', bookAppointment);
    }
    
    // Gestion des liens de contact rapide
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', () => {
            showNotification('Appel en cours...', 'info');
        });
    });
    
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    emailLinks.forEach(link => {
        link.addEventListener('click', () => {
            showNotification('Ouverture de votre client email...', 'info');
        });
    });
});