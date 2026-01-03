// Quote Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    let currentStep = 1;
    const totalSteps = 3;
    let selectedInsuranceType = '';

    // Elements
    const form = document.getElementById('quoteForm');
    const steps = document.querySelectorAll('.form-step');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const submitBtn = document.getElementById('submitBtn');
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');
    const insuranceTypes = document.querySelectorAll('.insurance-type');
    const quoteResult = document.getElementById('quoteResult');

    // Insurance type selection
    insuranceTypes.forEach(type => {
        type.addEventListener('click', function() {
            // Remove active class from all types
            insuranceTypes.forEach(t => t.classList.remove('active'));
            
            // Add active class to selected type
            this.classList.add('active');
            
            // Store selected type
            selectedInsuranceType = this.dataset.type;
            document.getElementById('insuranceType').value = selectedInsuranceType;
            
            // Enable next button
            nextBtn.disabled = false;
        });
    });

    // Next button functionality
    nextBtn.addEventListener('click', function() {
        if (validateCurrentStep()) {
            if (currentStep < totalSteps) {
                currentStep++;
                showStep(currentStep);
                updateProgress();
            }
        }
    });

    // Previous button functionality
    prevBtn.addEventListener('click', function() {
        if (currentStep > 1) {
            currentStep--;
            showStep(currentStep);
            updateProgress();
        }
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateCurrentStep()) {
            // Simulate form processing
            processQuote();
        }
    });

    function showStep(step) {
        // Hide all steps
        steps.forEach(s => s.classList.remove('active'));
        
        // Show current step
        document.getElementById(`step${step}`).classList.add('active');
        
        // Update navigation buttons
        if (step === 1) {
            prevBtn.style.display = 'none';
            nextBtn.style.display = 'inline-flex';
            submitBtn.style.display = 'none';
            nextBtn.disabled = !selectedInsuranceType;
        } else if (step === totalSteps) {
            prevBtn.style.display = 'inline-flex';
            nextBtn.style.display = 'none';
            submitBtn.style.display = 'inline-flex';
            
            // Show specific details based on insurance type
            showSpecificDetails();
        } else {
            prevBtn.style.display = 'inline-flex';
            nextBtn.style.display = 'inline-flex';
            submitBtn.style.display = 'none';
        }
    }

    function updateProgress() {
        const progress = (currentStep / totalSteps) * 100;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `Étape ${currentStep} sur ${totalSteps}`;
    }

    function showSpecificDetails() {
        // Hide all specific details
        document.querySelectorAll('.specific-details').forEach(detail => {
            detail.style.display = 'none';
        });
        
        // Show relevant details based on selected insurance type
        if (selectedInsuranceType) {
            const detailsElement = document.getElementById(`${selectedInsuranceType}Details`);
            if (detailsElement) {
                detailsElement.style.display = 'block';
            }
        }
    }

    function validateCurrentStep() {
        if (currentStep === 1) {
            if (!selectedInsuranceType) {
                showError('Veuillez sélectionner un type d\'assurance');
                return false;
            }
        } else if (currentStep === 2) {
            const requiredFields = ['firstName', 'lastName', 'email', 'phone'];
            let isValid = true;
            
            requiredFields.forEach(fieldId => {
                const field = document.getElementById(fieldId);
                const errorElement = field.parentNode.querySelector('.error-message');
                
                if (!field.value.trim()) {
                    field.classList.add('error');
                    errorElement.textContent = 'Ce champ est requis';
                    isValid = false;
                } else {
                    field.classList.remove('error');
                    errorElement.textContent = '';
                    
                    // Additional validation for email
                    if (fieldId === 'email') {
                        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                        if (!emailRegex.test(field.value)) {
                            field.classList.add('error');
                            errorElement.textContent = 'Veuillez entrer une adresse email valide';
                            isValid = false;
                        }
                    }
                    
                    // Additional validation for phone
                    if (fieldId === 'phone') {
                        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{8,}$/;
                        if (!phoneRegex.test(field.value)) {
                            field.classList.add('error');
                            errorElement.textContent = 'Veuillez entrer un numéro de téléphone valide';
                            isValid = false;
                        }
                    }
                }
            });
            
            return isValid;
        }
        
        return true;
    }

    function showError(message) {
        // Create or update error message
        let errorDiv = document.querySelector('.form-error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'form-error';
            form.insertBefore(errorDiv, form.firstChild);
        }
        
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            background: #fee2e2;
            color: #dc2626;
            padding: 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            text-align: center;
            border: 1px solid #fecaca;
        `;
        
        // Remove error after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.parentNode.removeChild(errorDiv);
            }
        }, 5000);
    }

    function processQuote() {
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Calcul en cours...';
        submitBtn.disabled = true;
        
        // Simulate processing time
        setTimeout(() => {
            // Calculate quote based on form data
            const quote = calculateQuote();
            
            // Display results
            displayQuoteResult(quote);
            
            // Hide form and show result
            document.querySelector('.quote-section').style.display = 'none';
            quoteResult.style.display = 'block';
            
            // Scroll to result
            quoteResult.scrollIntoView({ behavior: 'smooth' });
            
        }, 2000);
    }

    function calculateQuote() {
        const formData = new FormData(form);
        const insuranceType = formData.get('insuranceType');
        const age = formData.get('age');
        
        let basePrice = 0;
        let coverage = '';
        let typeName = '';
        
        // Calculate based on insurance type
        switch (insuranceType) {
            case 'sante':
                typeName = 'Assurance Santé';
                basePrice = 35000;
                coverage = 'Consultations, hospitalisation, médicaments, analyses';
                
                const familySize = parseInt(formData.get('familySize')) || 1;
                basePrice *= familySize;
                
                const healthBudget = formData.get('healthBudget');
                if (healthBudget === '20000-30000') basePrice *= 0.8;
                else if (healthBudget === '75000+') basePrice *= 1.3;
                break;
                
            case 'vehicule':
                typeName = 'Assurance Véhicule';
                basePrice = 180000;
                coverage = 'Responsabilité civile, vol, incendie, tous risques';
                
                const vehicleValue = formData.get('vehicleValue');
                if (vehicleValue === '0-2000000') basePrice *= 0.7;
                else if (vehicleValue === '10000000+') basePrice *= 1.8;
                break;
                
            case 'habitation':
                typeName = 'Assurance Habitation';
                basePrice = 120000;
                coverage = 'Incendie, vol, dégâts des eaux, responsabilité civile';
                
                const propertyValue = formData.get('propertyValue');
                if (propertyValue === '0-10000000') basePrice *= 0.8;
                else if (propertyValue === '50000000+') basePrice *= 1.5;
                break;
                
            case 'famille':
                typeName = 'Assurance Famille';
                basePrice = 85000;
                coverage = 'Protection globale famille, éducation, vie conjugale';
                break;
                
            case 'professionnel':
                typeName = 'Assurance Professionnelle';
                basePrice = 250000;
                coverage = 'Responsabilité civile pro, multirisque, protection employés';
                break;
        }
        
        // Age adjustment
        if (age) {
            if (age === '18-25') basePrice *= 0.9;
            else if (age === '56-65' || age === '65+') basePrice *= 1.2;
        }
        
        return {
            type: typeName,
            monthlyPrice: Math.round(basePrice),
            yearlyPrice: Math.round(basePrice * 12 * 0.9), // 10% discount for yearly payment
            coverage: coverage
        };
    }

    function displayQuoteResult(quote) {
        document.getElementById('resultType').textContent = quote.type;
        document.getElementById('resultPrice').textContent = `${quote.monthlyPrice.toLocaleString()} FCFA/mois`;
        document.getElementById('resultCoverage').textContent = quote.coverage;
        
        // Add yearly price info
        const priceElement = document.getElementById('resultPrice');
        priceElement.innerHTML += `<br><small style="color: #6b7280; font-weight: normal;">ou ${quote.yearlyPrice.toLocaleString()} FCFA/an (10% de réduction)</small>`;
    }

    // Initialize form
    showStep(1);
    updateProgress();
    
    // Add input event listeners for real-time validation
    document.querySelectorAll('input[required]').forEach(input => {
        input.addEventListener('blur', function() {
            const errorElement = this.parentNode.querySelector('.error-message');
            
            if (!this.value.trim()) {
                this.classList.add('error');
                errorElement.textContent = 'Ce champ est requis';
            } else {
                this.classList.remove('error');
                errorElement.textContent = '';
            }
        });
        
        input.addEventListener('input', function() {
            if (this.classList.contains('error') && this.value.trim()) {
                this.classList.remove('error');
                const errorElement = this.parentNode.querySelector('.error-message');
                errorElement.textContent = '';
            }
        });
    });

    // Add smooth animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.insurance-type, .step, .benefit-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});