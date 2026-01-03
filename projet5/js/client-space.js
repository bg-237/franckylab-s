// Espace Client JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Éléments
    const loginSection = document.getElementById('loginSection');
    const dashboardSection = document.getElementById('dashboardSection');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const logoutBtn = document.getElementById('logoutBtn');
    const userName = document.getElementById('userName');
    
    // Gestion des onglets
    setupTabs();
    
    // Gestion des mots de passe
    setupPasswordToggles();
    setupPasswordStrength();
    
    // Gestion des formulaires
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
    
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
    }
    
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Gestion des actions rapides
    setupQuickActions();
    
    // Vérifier si l'utilisateur est déjà connecté
    checkAuthStatus();
});

// Configuration des onglets
function setupTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const authForms = document.querySelectorAll('.auth-form');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            // Mettre à jour les boutons
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Mettre à jour les formulaires
            authForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === targetTab + 'Form') {
                    form.classList.add('active');
                }
            });
        });
    });
}

// Configuration des boutons de visibilité du mot de passe
function setupPasswordToggles() {
    const toggleBtns = document.querySelectorAll('.password-toggle');
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const input = document.getElementById(targetId);
            const icon = btn.querySelector('i');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.className = 'fas fa-eye-slash';
            } else {
                input.type = 'password';
                icon.className = 'fas fa-eye';
            }
        });
    });
}

// Configuration de l'indicateur de force du mot de passe
function setupPasswordStrength() {
    const passwordInput = document.getElementById('registerPassword');
    if (!passwordInput) return;
    
    const strengthBar = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    passwordInput.addEventListener('input', () => {
        const password = passwordInput.value;
        const strength = calculatePasswordStrength(password);
        
        // Mettre à jour la barre
        strengthBar.className = 'strength-fill';
        strengthBar.classList.add(strength.class);
        
        // Mettre à jour le texte
        strengthText.textContent = strength.text;
    });
}

// Calcul de la force du mot de passe
function calculatePasswordStrength(password) {
    if (password.length === 0) {
        return { class: '', text: 'Saisissez un mot de passe' };
    }
    
    let score = 0;
    
    // Longueur
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    
    // Caractères
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    if (score <= 2) {
        return { class: 'weak', text: 'Mot de passe faible' };
    } else if (score <= 4) {
        return { class: 'fair', text: 'Mot de passe moyen' };
    } else if (score <= 5) {
        return { class: 'good', text: 'Bon mot de passe' };
    } else {
        return { class: 'strong', text: 'Mot de passe fort' };
    }
}

// Gestion de la connexion
function handleLogin(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const remember = formData.get('remember');
    
    // Validation
    if (!email || !password) {
        showNotification('Veuillez remplir tous les champs', 'error');
        return;
    }
    
    // Simulation de connexion
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connexion...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Simulation d'une connexion réussie
        const userData = {
            firstName: 'Marie',
            lastName: 'Dubois',
            email: email,
            loginTime: new Date().toISOString()
        };
        
        // Sauvegarder les données utilisateur
        if (remember) {
            localStorage.setItem('financemax_user', JSON.stringify(userData));
        } else {
            sessionStorage.setItem('financemax_user', JSON.stringify(userData));
        }
        
        showNotification('Connexion réussie ! Bienvenue dans votre espace client.');
        
        // Afficher le dashboard
        showDashboard(userData);
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
    }, 1500);
}

// Gestion de l'inscription
function handleRegister(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    
    // Validation
    if (!validateForm(e.target)) {
        showNotification('Veuillez remplir tous les champs obligatoires', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        showNotification('Les mots de passe ne correspondent pas', 'error');
        return;
    }
    
    if (password.length < 8) {
        showNotification('Le mot de passe doit contenir au moins 8 caractères', 'error');
        return;
    }
    
    // Simulation d'inscription
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Création du compte...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        showNotification('Compte créé avec succès ! Vous pouvez maintenant vous connecter.');
        
        // Basculer vers l'onglet connexion
        document.querySelector('[data-tab="login"]').click();
        
        // Pré-remplir l'email
        document.getElementById('loginEmail').value = formData.get('email');
        
        // Reset du formulaire
        e.target.reset();
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
    }, 2000);
}

// Gestion de la déconnexion
function handleLogout() {
    // Supprimer les données utilisateur
    localStorage.removeItem('financemax_user');
    sessionStorage.removeItem('financemax_user');
    
    showNotification('Vous avez été déconnecté avec succès');
    
    // Retour à la page de connexion
    showLogin();
}

// Afficher le dashboard
function showDashboard(userData) {
    loginSection.style.display = 'none';
    dashboardSection.style.display = 'block';
    
    // Mettre à jour le nom d'utilisateur
    if (userName) {
        userName.textContent = userData.firstName;
    }
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Afficher la page de connexion
function showLogin() {
    dashboardSection.style.display = 'none';
    loginSection.style.display = 'block';
    
    // Scroll vers le haut
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Vérifier le statut d'authentification
function checkAuthStatus() {
    const userData = localStorage.getItem('financemax_user') || 
                    sessionStorage.getItem('financemax_user');
    
    if (userData) {
        try {
            const user = JSON.parse(userData);
            showDashboard(user);
        } catch (e) {
            console.error('Erreur lors de la lecture des données utilisateur:', e);
        }
    }
}

// Configuration des actions rapides
function setupQuickActions() {
    const actionBtns = document.querySelectorAll('.action-btn');
    
    actionBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const action = btn.querySelector('span').textContent;
            
            switch (action) {
                case 'Simuler un prêt':
                    window.location.href = 'simulator.html';
                    break;
                case 'Télécharger relevé':
                    downloadStatement();
                    break;
                case 'Prendre RDV':
                    bookAppointment();
                    break;
                case 'Contacter support':
                    window.location.href = 'contact.html';
                    break;
                default:
                    showNotification('Fonctionnalité en cours de développement');
            }
        });
    });
}

// Télécharger un relevé (simulation)
function downloadStatement() {
    showNotification('Génération du relevé en cours...', 'info');
    
    setTimeout(() => {
        // Simulation du téléchargement
        const link = document.createElement('a');
        link.href = 'data:text/plain;charset=utf-8,Relevé de compte FinanceMax - Simulation';
        link.download = 'releve_financemax.txt';
        link.click();
        
        showNotification('Relevé téléchargé avec succès');
    }, 2000);
}

// Prendre rendez-vous (simulation)
function bookAppointment() {
    showNotification('Redirection vers le système de prise de rendez-vous...', 'info');
    
    setTimeout(() => {
        showNotification('La prise de rendez-vous en ligne sera bientôt disponible. Contactez-nous par téléphone.');
    }, 1500);
}

// Fonction utilitaire pour formater les dates
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
}

// Fonction utilitaire pour formater les montants
function formatAmount(amount) {
    return new Intl.NumberFormat('fr-FR', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount);
}