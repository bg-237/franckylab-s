// ===== NAVIGATION - LABO DE FRANCKY =====

class NavigationComponent {
    constructor() {
        this.init();
    }

    init() {
        this.initHamburger();
        this.initTabs();
        this.addCopyFunctionality();
    }

    initHamburger() {
        // Hamburger menu toggle
        document.addEventListener('click', (e) => {
            if (e.target.closest('.hamburger')) {
                const hamburger = e.target.closest('.hamburger');
                const menu = hamburger.parentElement.querySelector('.mobile-menu');
                
                hamburger.classList.toggle('active');
                menu.classList.toggle('active');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.mobile-nav')) {
                const activeMenus = document.querySelectorAll('.mobile-menu.active');
                const activeHamburgers = document.querySelectorAll('.hamburger.active');
                
                activeMenus.forEach(menu => menu.classList.remove('active'));
                activeHamburgers.forEach(hamburger => hamburger.classList.remove('active'));
            }
        });
    }

    initTabs() {
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('tab-btn')) {
                const tabBtn = e.target;
                const tabsContainer = tabBtn.closest('.tabs');
                const targetTab = tabBtn.dataset.tab;
                
                // Remove active class from all tabs and buttons
                tabsContainer.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                tabsContainer.querySelectorAll('.tab-pane').forEach(pane => {
                    pane.classList.remove('active');
                });
                
                // Add active class to clicked button and corresponding pane
                tabBtn.classList.add('active');
                const targetPane = tabsContainer.querySelector(`#${targetTab}`);
                if (targetPane) {
                    targetPane.classList.add('active');
                }
                
                // Move indicator
                this.moveTabIndicator(tabBtn);
            }
        });
    }

    moveTabIndicator(activeBtn) {
        const indicator = activeBtn.parentElement.querySelector('.tab-indicator');
        if (!indicator) return;
        
        const buttons = activeBtn.parentElement.querySelectorAll('.tab-btn');
        const activeIndex = Array.from(buttons).indexOf(activeBtn);
        const buttonWidth = 100 / buttons.length;
        
        indicator.style.transform = `translateX(${activeIndex * 100}%)`;
        indicator.style.width = `${buttonWidth}%`;
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
}

// Initialiser les composants de navigation
document.addEventListener('DOMContentLoaded', () => {
    new NavigationComponent();
});

// Exporter pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationComponent;
}