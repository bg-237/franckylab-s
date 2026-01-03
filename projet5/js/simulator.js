// Simulateur de prêt
document.addEventListener('DOMContentLoaded', function() {
    // Éléments du formulaire
    const amountSlider = document.getElementById('amountSlider');
    const amountInput = document.getElementById('amount');
    const durationSlider = document.getElementById('durationSlider');
    const durationInput = document.getElementById('duration');
    const loanTypeSelect = document.getElementById('loanType');
    const incomeInput = document.getElementById('income');
    const professionSelect = document.getElementById('profession');
    const calculateBtn = document.getElementById('calculateBtn');
    
    // Éléments des résultats
    const resultsContent = document.getElementById('resultsContent');
    const resultsStatus = document.getElementById('resultsStatus');
    const monthlyPayment = document.getElementById('monthlyPayment');
    const interestRate = document.getElementById('interestRate');
    const totalCost = document.getElementById('totalCost');
    const capitalAmount = document.getElementById('capitalAmount');
    const interestAmount = document.getElementById('interestAmount');
    const capitalBar = document.getElementById('capitalBar');
    const interestBar = document.getElementById('interestBar');
    const debtRatio = document.getElementById('debtRatio');
    const debtRatioValue = document.getElementById('debtRatioValue');
    const remainingIncome = document.getElementById('remainingIncome');
    const feasibilityIndicator = document.getElementById('feasibilityIndicator');
    
    // Boutons d'action
    const applyBtn = document.getElementById('applyBtn');
    const saveBtn = document.getElementById('saveBtn');
    const backToSimulator = document.getElementById('backToSimulator');
    
    // Sections
    const loanApplication = document.getElementById('loanApplication');
    const simulatorSection = document.querySelector('.simulator-section');
    
    // Synchronisation des sliders avec les inputs
    if (amountSlider && amountInput) {
        amountSlider.addEventListener('input', function() {
            amountInput.value = this.value;
            updateLimits();
        });
        
        amountInput.addEventListener('input', function() {
            amountSlider.value = this.value;
            updateLimits();
        });
    }
    
    if (durationSlider && durationInput) {
        durationSlider.addEventListener('input', function() {
            durationInput.value = this.value;
        });
        
        durationInput.addEventListener('input', function() {
            durationSlider.value = this.value;
        });
    }
    
    // Mise à jour des limites selon le type de prêt
    function updateLimits() {
        const loanType = loanTypeSelect.value;
        let maxAmount, maxDuration;
        
        switch(loanType) {
            case 'personal':
                maxAmount = 75000;
                maxDuration = 84;
                break;
            case 'business':
                maxAmount = 500000;
                maxDuration = 120;
                break;
            case 'mortgage':
                maxAmount = 500000;
                maxDuration = 300;
                break;
            default:
                maxAmount = 75000;
                maxDuration = 84;
        }
        
        if (amountSlider) {
            amountSlider.max = maxAmount;
            amountInput.max = maxAmount;
            
            if (parseInt(amountInput.value) > maxAmount) {
                amountInput.value = maxAmount;
                amountSlider.value = maxAmount;
            }
        }
        
        if (durationSlider) {
            durationSlider.max = maxDuration;
            durationInput.max = maxDuration;
            
            if (parseInt(durationInput.value) > maxDuration) {
                durationInput.value = maxDuration;
                durationSlider.value = maxDuration;
            }
        }
    }
    
    // Écouter les changements de type de prêt
    if (loanTypeSelect) {
        loanTypeSelect.addEventListener('change', updateLimits);
    }
    
    // Calcul de la simulation
    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateLoan);
    }
    
    function calculateLoan() {
        // Récupération des valeurs
        const amount = parseFloat(amountInput.value);
        const duration = parseInt(durationInput.value);
        const loanType = loanTypeSelect.value;
        const income = parseFloat(incomeInput.value) || 0;
        const profession = professionSelect.value;
        
        // Validation
        if (!amount || !duration || !loanType) {
            showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            return;
        }
        
        // Calcul du taux selon le type de prêt et la profession
        const rate = calculateInterestRate(loanType, profession, amount, duration);
        
        // Calcul de la mensualité
        const monthlyRate = rate / 100 / 12;
        const monthly = (amount * monthlyRate * Math.pow(1 + monthlyRate, duration)) / 
                       (Math.pow(1 + monthlyRate, duration) - 1);
        
        const totalAmount = monthly * duration;
        const totalInterest = totalAmount - amount;
        
        // Calcul du taux d'endettement
        let debtRatioPercent = 0;
        let remainingAmount = 0;
        
        if (income > 0) {
            debtRatioPercent = (monthly / income) * 100;
            remainingAmount = income - monthly;
        }
        
        // Affichage des résultats
        displayResults({
            monthly: monthly,
            rate: rate,
            totalAmount: totalAmount,
            amount: amount,
            totalInterest: totalInterest,
            debtRatioPercent: debtRatioPercent,
            remainingAmount: remainingAmount,
            income: income
        });
    }
    
    function calculateInterestRate(loanType, profession, amount, duration) {
        let baseRate;
        
        // Taux de base selon le type de prêt
        switch(loanType) {
            case 'personal':
                baseRate = 4.5;
                break;
            case 'business':
                baseRate = 3.2;
                break;
            case 'mortgage':
                baseRate = 2.1;
                break;
            default:
                baseRate = 4.5;
        }
        
        // Ajustement selon la profession
        switch(profession) {
            case 'civil-servant':
                baseRate -= 0.3;
                break;
            case 'employee':
                baseRate -= 0.1;
                break;
            case 'freelance':
                baseRate += 0.5;
                break;
            case 'retired':
                baseRate += 0.2;
                break;
            case 'student':
                baseRate += 0.8;
                break;
        }
        
        // Ajustement selon le montant (plus le montant est élevé, meilleur le taux)
        if (amount > 100000) {
            baseRate -= 0.2;
        } else if (amount > 50000) {
            baseRate -= 0.1;
        }
        
        // Ajustement selon la durée
        if (duration > 120) {
            baseRate += 0.3;
        } else if (duration > 60) {
            baseRate += 0.1;
        }
        
        return Math.max(baseRate, 1.5); // Taux minimum de 1.5%
    }
    
    function displayResults(results) {
        // Mise à jour des valeurs
        monthlyPayment.textContent = formatCurrency(results.monthly);
        interestRate.textContent = results.rate.toFixed(2) + '%';
        totalCost.textContent = formatCurrency(results.totalAmount);
        capitalAmount.textContent = formatCurrency(results.amount);
        interestAmount.textContent = formatCurrency(results.totalInterest);
        
        // Mise à jour des barres de progression
        const capitalPercent = (results.amount / results.totalAmount) * 100;
        const interestPercent = (results.totalInterest / results.totalAmount) * 100;
        
        capitalBar.style.width = capitalPercent + '%';
        interestBar.style.width = interestPercent + '%';
        
        // Analyse du profil
        if (results.income > 0) {
            debtRatioValue.textContent = results.debtRatioPercent.toFixed(1) + '%';
            remainingIncome.textContent = formatCurrency(results.remainingAmount);
            
            // Mise à jour de la barre de taux d'endettement
            const ratioPercent = Math.min(results.debtRatioPercent, 100);
            debtRatio.style.width = ratioPercent + '%';
            
            // Couleur selon le taux
            if (results.debtRatioPercent <= 33) {
                debtRatio.style.background = 'var(--accent-color)';
            } else if (results.debtRatioPercent <= 40) {
                debtRatio.style.background = '#f59e0b';
            } else {
                debtRatio.style.background = '#ef4444';
            }
            
            // Indicateur de faisabilité
            updateFeasibilityIndicator(results.debtRatioPercent, results.remainingAmount);
        } else {
            debtRatioValue.textContent = 'N/A';
            remainingIncome.textContent = 'N/A';
            debtRatio.style.width = '0%';
            feasibilityIndicator.style.display = 'none';
        }
        
        // Affichage des résultats
        resultsStatus.style.display = 'none';
        resultsContent.classList.add('show');
        
        // Animation
        resultsContent.style.opacity = '0';
        setTimeout(() => {
            resultsContent.style.opacity = '1';
        }, 100);
    }
    
    function updateFeasibilityIndicator(debtRatio, remaining) {
        const indicator = feasibilityIndicator;
        
        if (debtRatio <= 33 && remaining >= 800) {
            indicator.className = 'feasibility-indicator';
            indicator.innerHTML = '<i class="fas fa-check-circle"></i><span>Projet très favorable</span>';
        } else if (debtRatio <= 40 && remaining >= 600) {
            indicator.className = 'feasibility-indicator warning';
            indicator.innerHTML = '<i class="fas fa-exclamation-triangle"></i><span>Projet réalisable</span>';
        } else {
            indicator.className = 'feasibility-indicator danger';
            indicator.innerHTML = '<i class="fas fa-times-circle"></i><span>Projet à risque</span>';
        }
        
        indicator.style.display = 'flex';
    }
    
    // Gestion des boutons d'action
    if (applyBtn) {
        applyBtn.addEventListener('click', function() {
            // Masquer le simulateur et afficher le formulaire de demande
            simulatorSection.style.display = 'none';
            loanApplication.style.display = 'block';
            
            // Scroll vers le haut
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Pré-remplir certains champs si possible
            prefillApplicationForm();
        });
    }
    
    if (saveBtn) {
        saveBtn.addEventListener('click', function() {
            // Sauvegarder la simulation dans le localStorage
            const simulationData = {
                amount: amountInput.value,
                duration: durationInput.value,
                loanType: loanTypeSelect.value,
                income: incomeInput.value,
                profession: professionSelect.value,
                timestamp: new Date().toISOString()
            };
            
            localStorage.setItem('financemax_simulation', JSON.stringify(simulationData));
            showNotification('Simulation sauvegardée avec succès');
        });
    }
    
    if (backToSimulator) {
        backToSimulator.addEventListener('click', function() {
            loanApplication.style.display = 'none';
            simulatorSection.style.display = 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
    
    function prefillApplicationForm() {
        // Cette fonction pourrait pré-remplir certains champs du formulaire
        // basés sur les données de simulation
    }
    
    // Gestion du formulaire de demande
    const applicationForm = document.getElementById('loanApplicationForm');
    if (applicationForm) {
        applicationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                // Simulation d'envoi
                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
                submitBtn.disabled = true;
                
                setTimeout(() => {
                    showNotification('Votre demande a été envoyée avec succès ! Nous vous contacterons sous 24h.');
                    
                    // Reset du formulaire
                    this.reset();
                    
                    // Retour au simulateur
                    setTimeout(() => {
                        loanApplication.style.display = 'none';
                        simulatorSection.style.display = 'block';
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 2000);
                    
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            } else {
                showNotification('Veuillez remplir tous les champs obligatoires', 'error');
            }
        });
    }
    
    // Chargement d'une simulation sauvegardée
    function loadSavedSimulation() {
        const saved = localStorage.getItem('financemax_simulation');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                
                // Vérifier que la simulation n'est pas trop ancienne (7 jours)
                const savedDate = new Date(data.timestamp);
                const now = new Date();
                const daysDiff = (now - savedDate) / (1000 * 60 * 60 * 24);
                
                if (daysDiff <= 7) {
                    // Restaurer les valeurs
                    if (amountInput) amountInput.value = data.amount;
                    if (amountSlider) amountSlider.value = data.amount;
                    if (durationInput) durationInput.value = data.duration;
                    if (durationSlider) durationSlider.value = data.duration;
                    if (loanTypeSelect) loanTypeSelect.value = data.loanType;
                    if (incomeInput) incomeInput.value = data.income;
                    if (professionSelect) professionSelect.value = data.profession;
                    
                    updateLimits();
                    
                    showNotification('Simulation précédente restaurée');
                }
            } catch (e) {
                console.error('Erreur lors du chargement de la simulation:', e);
            }
        }
    }
    
    // Charger une simulation sauvegardée au démarrage
    loadSavedSimulation();
    
    // Initialiser les limites
    updateLimits();
});