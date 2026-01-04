// ===== CHARGEMENT - LABO DE FRANCKY =====

class LoadersComponent {
    constructor() {
        this.init();
    }

    init() {
        this.initLoadingStates();
        this.initProgressBars();
        this.addCopyFunctionality();
    }

    initLoadingStates() {
        // Demo loading button
        document.addEventListener('click', (e) => {
            if (e.target.id === 'demo-loading-btn') {
                this.toggleLoadingButton(e.target);
            }
        });

        // Auto-toggle loading card every 5 seconds
        const loadingCard = document.querySelector('.loading-card');
        if (loadingCard) {
            setInterval(() => {
                this.toggleLoadingCard(loadingCard);
            }, 5000);
        }
    }

    toggleLoadingButton(button) {
        const isLoading = button.classList.contains('loading');
        
        if (isLoading) {
            button.classList.remove('loading');
            button.disabled = false;
        } else {
            button.classList.add('loading');
            button.disabled = true;
            
            // Auto-remove loading state after 3 seconds
            setTimeout(() => {
                button.classList.remove('loading');
                button.disabled = false;
            }, 3000);
        }
    }

    toggleLoadingCard(card) {
        const isLoading = card.classList.contains('loading');
        
        if (isLoading) {
            card.classList.remove('loading');
        } else {
            card.classList.add('loading');
            
            // Auto-remove loading state after 2 seconds
            setTimeout(() => {
                card.classList.remove('loading');
            }, 2000);
        }
    }

    initProgressBars() {
        // Animate progress bars on page load
        setTimeout(() => {
            this.animateProgressBars();
        }, 500);

        // Re-animate every 10 seconds
        setInterval(() => {
            this.animateProgressBars();
        }, 10000);
    }

    animateProgressBars() {
        const progressFills = document.querySelectorAll('.progress-fill');
        const progressRings = document.querySelectorAll('.progress-ring-fill');
        
        // Reset progress bars
        progressFills.forEach(fill => {
            const targetWidth = fill.style.width;
            fill.style.width = '0%';
            
            setTimeout(() => {
                fill.style.width = targetWidth;
            }, 100);
        });

        // Reset progress rings
        progressRings.forEach(ring => {
            const targetOffset = ring.style.strokeDashoffset;
            ring.style.strokeDashoffset = '188';
            
            setTimeout(() => {
                ring.style.strokeDashoffset = targetOffset;
            }, 100);
        });
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

    // Utility methods for creating loaders programmatically
    createSpinner(type = 'basic', size = 40, color = 'var(--primary)') {
        const spinner = document.createElement('div');
        spinner.className = `spinner-${type}`;
        
        if (type === 'basic') {
            spinner.style.cssText = `
                width: ${size}px;
                height: ${size}px;
                border: 4px solid #f3f3f3;
                border-top: 4px solid ${color};
                border-radius: 50%;
                animation: spin 1s linear infinite;
            `;
        }
        
        return spinner;
    }

    createProgressBar(percentage, animated = false, striped = false) {
        const container = document.createElement('div');
        container.className = `progress-bar ${animated ? 'progress-animated' : ''} ${striped ? 'progress-striped' : ''}`;
        
        const fill = document.createElement('div');
        fill.className = 'progress-fill';
        fill.style.width = `${percentage}%`;
        
        const text = document.createElement('span');
        text.className = 'progress-text';
        text.textContent = `${percentage}%`;
        
        container.appendChild(fill);
        container.appendChild(text);
        
        return container;
    }

    createProgressCircle(percentage, size = 80, strokeWidth = 8) {
        const container = document.createElement('div');
        container.className = 'progress-circle';
        container.style.width = `${size}px`;
        container.style.height = `${size}px`;
        
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('class', 'progress-ring');
        svg.setAttribute('width', size);
        svg.setAttribute('height', size);
        
        const radius = (size - strokeWidth) / 2;
        const circumference = radius * 2 * Math.PI;
        const offset = circumference - (percentage / 100) * circumference;
        
        const bgCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        bgCircle.setAttribute('class', 'progress-ring-bg');
        bgCircle.setAttribute('cx', size / 2);
        bgCircle.setAttribute('cy', size / 2);
        bgCircle.setAttribute('r', radius);
        bgCircle.setAttribute('stroke-width', strokeWidth);
        
        const fillCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        fillCircle.setAttribute('class', 'progress-ring-fill');
        fillCircle.setAttribute('cx', size / 2);
        fillCircle.setAttribute('cy', size / 2);
        fillCircle.setAttribute('r', radius);
        fillCircle.setAttribute('stroke-width', strokeWidth);
        fillCircle.style.strokeDasharray = circumference;
        fillCircle.style.strokeDashoffset = offset;
        
        const text = document.createElement('span');
        text.className = 'progress-circle-text';
        text.textContent = `${percentage}%`;
        
        svg.appendChild(bgCircle);
        svg.appendChild(fillCircle);
        container.appendChild(svg);
        container.appendChild(text);
        
        return container;
    }

    createSkeletonLoader(type = 'card') {
        const container = document.createElement('div');
        
        if (type === 'card') {
            container.className = 'skeleton-card';
            container.innerHTML = `
                <div class="skeleton skeleton-avatar"></div>
                <div class="skeleton-content">
                    <div class="skeleton skeleton-title"></div>
                    <div class="skeleton skeleton-text"></div>
                    <div class="skeleton skeleton-text" style="width: 80%;"></div>
                </div>
            `;
        } else if (type === 'list') {
            container.className = 'skeleton-list';
            for (let i = 0; i < 3; i++) {
                const item = document.createElement('div');
                item.className = 'skeleton-item';
                item.innerHTML = `
                    <div class="skeleton skeleton-circle"></div>
                    <div class="skeleton skeleton-line"></div>
                `;
                container.appendChild(item);
            }
        }
        
        return container;
    }

    createDotsLoader(type = 'bounce', dotCount = 3) {
        const container = document.createElement('div');
        container.className = `dots-loader-${type}`;
        
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            container.appendChild(dot);
        }
        
        return container;
    }

    createBarsLoader(type = 'scale', barCount = 5) {
        const container = document.createElement('div');
        container.className = `bars-loader-${type}`;
        
        for (let i = 0; i < barCount; i++) {
            const bar = document.createElement('div');
            bar.className = 'bar';
            container.appendChild(bar);
        }
        
        return container;
    }

    // Advanced loading state management
    showLoading(element, options = {}) {
        const {
            type = 'spinner',
            message = 'Chargement...',
            overlay = true,
            blur = true
        } = options;

        // Create loading overlay
        const loadingOverlay = document.createElement('div');
        loadingOverlay.className = 'loading-overlay';
        loadingOverlay.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: ${overlay ? 'rgba(255, 255, 255, 0.9)' : 'transparent'};
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            z-index: 1000;
            ${blur ? 'backdrop-filter: blur(2px);' : ''}
        `;

        // Add loader
        const loader = this.createSpinner(type);
        loadingOverlay.appendChild(loader);

        // Add message
        if (message) {
            const messageElement = document.createElement('span');
            messageElement.textContent = message;
            messageElement.style.cssText = `
                font-size: 0.9rem;
                color: #64748b;
                font-weight: 500;
            `;
            loadingOverlay.appendChild(messageElement);
        }

        // Make element relative if not already positioned
        const computedStyle = getComputedStyle(element);
        if (computedStyle.position === 'static') {
            element.style.position = 'relative';
        }

        element.appendChild(loadingOverlay);
        element.classList.add('loading');

        return loadingOverlay;
    }

    hideLoading(element) {
        const loadingOverlay = element.querySelector('.loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.remove();
        }
        element.classList.remove('loading');
    }

    // Progress animation utilities
    animateProgress(progressElement, targetPercentage, duration = 1000) {
        const fill = progressElement.querySelector('.progress-fill');
        const text = progressElement.querySelector('.progress-text');
        const ring = progressElement.querySelector('.progress-ring-fill');
        const circleText = progressElement.querySelector('.progress-circle-text');

        let startPercentage = 0;
        const startTime = performance.now();

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentPercentage = startPercentage + (targetPercentage - startPercentage) * progress;

            if (fill && text) {
                fill.style.width = `${currentPercentage}%`;
                text.textContent = `${Math.round(currentPercentage)}%`;
            }

            if (ring && circleText) {
                const circumference = 2 * Math.PI * 30; // radius = 30
                const offset = circumference - (currentPercentage / 100) * circumference;
                ring.style.strokeDashoffset = offset;
                circleText.textContent = `${Math.round(currentPercentage)}%`;
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }
}

// Initialiser les composants de chargement
document.addEventListener('DOMContentLoaded', () => {
    new LoadersComponent();
});

// Exporter pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LoadersComponent;
}