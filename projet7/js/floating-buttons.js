// Script pour gérer les boutons flottants (WhatsApp et Scroll-to-top)
document.addEventListener('DOMContentLoaded', function() {
    
    // Créer le bouton WhatsApp s'il n'existe pas déjà
    if (!document.querySelector('.whatsapp-btn')) {
        const whatsappBtn = document.createElement('a');
        whatsappBtn.href = 'https://wa.me/237682986035?text=Bonjour%20Madame%20L\'assureur,%20j\'aimerais%20avoir%20des%20informations%20sur%20vos%20services%20d\'assurance.';
        whatsappBtn.target = '_blank';
        whatsappBtn.rel = 'noopener noreferrer';
        whatsappBtn.innerHTML = '<span class="francky-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382C17.367 14.382 17.188 14.382 17.11 14.304C16.957 14.226 15.847 13.675 15.847 13.675C15.668 13.597 15.566 13.597 15.413 13.854C15.413 13.854 14.865 14.644 14.687 14.826C14.584 14.928 14.406 14.928 14.253 14.826C14.1 14.723 13.552 14.382 12.442 13.597C11.717 13.018 11.307 12.312 11.205 12.133C11.102 11.955 11.205 11.826 11.307 11.723C11.41 11.621 11.512 11.468 11.615 11.366C11.717 11.263 11.717 11.161 11.82 11.058C11.922 10.956 11.82 10.853 11.717 10.751C11.615 10.648 11.205 9.538 11.027 9.103C10.848 8.668 10.67 8.668 10.567 8.668C10.465 8.668 10.362 8.668 10.26 8.668C10.157 8.668 9.952 8.771 9.85 8.873C9.747 8.976 9.337 9.386 9.337 10.496C9.337 11.606 10.157 12.665 10.26 12.767C10.362 12.87 11.717 15.016 13.859 15.947C14.304 16.149 14.661 16.277 14.943 16.379C15.388 16.533 15.782 16.507 16.099 16.456C16.442 16.405 17.367 15.947 17.57 15.438C17.772 14.928 17.772 14.484 17.67 14.382C17.567 14.279 17.472 14.382 17.472 14.382M12.19 21.785H12.185C10.36 21.785 8.587 21.297 7.052 20.397L6.684 20.185L2.925 21.214L3.973 17.584L3.734 17.2C2.76 15.616 2.235 13.794 2.24 11.916C2.24 6.615 6.615 2.24 11.916 2.24C14.484 2.24 16.897 3.171 18.761 5.035C20.625 6.899 21.556 9.312 21.556 11.88C21.556 17.181 17.181 21.556 11.88 21.556"/></svg></span>';
        whatsappBtn.className = 'whatsapp-btn';
        whatsappBtn.title = 'Contactez-nous sur WhatsApp';
        
        document.body.appendChild(whatsappBtn);
        
        // Ajouter l'événement de clic pour le tracking
        whatsappBtn.addEventListener('click', function() {
            console.log('Bouton WhatsApp cliqué');
            // Ici on pourrait ajouter du tracking analytics
        });
    }
    
    // Créer le bouton scroll-to-top s'il n'existe pas déjà
    if (!document.querySelector('.scroll-to-top')) {
        const scrollToTopBtn = document.createElement('button');
        scrollToTopBtn.innerHTML = '<span class="francky-icon"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 20H11V8L5.5 13.5L4.08 12.08L12 4.16L19.92 12.08L18.5 13.5L13 8V20Z"/></svg></span>';
        scrollToTopBtn.className = 'scroll-to-top';
        scrollToTopBtn.title = 'Retour en haut';
        scrollToTopBtn.setAttribute('aria-label', 'Retour en haut de la page');
        
        document.body.appendChild(scrollToTopBtn);
        
        // Gérer l'affichage du bouton selon le scroll
        function toggleScrollButton() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('show');
            } else {
                scrollToTopBtn.classList.remove('show');
            }
        }
        
        // Événement de scroll
        window.addEventListener('scroll', toggleScrollButton);
        
        // Événement de clic pour remonter en haut
        scrollToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            console.log('Bouton scroll-to-top cliqué');
        });
        
        // Vérifier l'état initial
        toggleScrollButton();
    }
    
    // Ajouter les styles CSS si ils ne sont pas déjà présents
    if (!document.querySelector('#floating-buttons-styles')) {
        const style = document.createElement('style');
        style.id = 'floating-buttons-styles';
        style.textContent = `
            .whatsapp-btn {
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
            }
            
            .whatsapp-btn:hover {
                background: #128C7E;
                transform: scale(1.1);
                box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
                text-decoration: none;
                color: white;
            }
            
            .whatsapp-btn .francky-icon svg {
                width: 30px;
                height: 30px;
            }
            
            .scroll-to-top {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                width: 50px;
                height: 50px;
                background: var(--primary-color, #2563eb);
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
            }
            
            .scroll-to-top.show {
                opacity: 1;
                visibility: visible;
            }
            
            .scroll-to-top:hover {
                background: var(--primary-dark, #1d4ed8);
                transform: translateY(-2px);
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
            }
            
            .scroll-to-top .francky-icon svg {
                width: 20px;
                height: 20px;
            }
            
            @keyframes whatsappPulse {
                0% {
                    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3), 0 0 0 0 rgba(37, 211, 102, 0.7);
                }
                70% {
                    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3), 0 0 0 10px rgba(37, 211, 102, 0);
                }
                100% {
                    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3), 0 0 0 0 rgba(37, 211, 102, 0);
                }
            }
            
            @media (max-width: 768px) {
                .whatsapp-btn {
                    bottom: 1rem;
                    left: 1rem;
                    width: 55px;
                    height: 55px;
                }
                
                .whatsapp-btn .francky-icon svg {
                    width: 26px;
                    height: 26px;
                }
                
                .scroll-to-top {
                    bottom: 1rem;
                    right: 1rem;
                    width: 45px;
                    height: 45px;
                }
                
                .scroll-to-top .francky-icon svg {
                    width: 18px;
                    height: 18px;
                }
            }
        `;
        
        document.head.appendChild(style);
    }
    
    console.log('Boutons flottants initialisés avec succès');
});