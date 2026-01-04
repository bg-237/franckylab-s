// ===== LAYOUTS - LABO DE FRANCKY =====

class LayoutsComponent {
    constructor() {
        this.init();
    }

    init() {
        this.initResponsiveHelpers();
        this.addCopyFunctionality();
        this.initLayoutToggles();
    }

    initResponsiveHelpers() {
        // Add responsive breakpoint indicators
        this.createBreakpointIndicator();
        
        // Listen for window resize
        window.addEventListener('resize', () => {
            this.updateBreakpointIndicator();
            this.handleResponsiveLayouts();
        });
        
        // Initial call
        this.updateBreakpointIndicator();
        this.handleResponsiveLayouts();
    }

    createBreakpointIndicator() {
        const indicator = document.createElement('div');
        indicator.id = 'breakpoint-indicator';
        indicator.style.cssText = `
            position: fixed;
            top: 10px;
            right: 10px;
            background: var(--primary);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: var(--radius-md);
            font-size: 0.8rem;
            font-weight: 600;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
        `;
        document.body.appendChild(indicator);
    }

    updateBreakpointIndicator() {
        const indicator = document.getElementById('breakpoint-indicator');
        if (!indicator) return;

        const width = window.innerWidth;
        let breakpoint = '';
        
        if (width < 576) {
            breakpoint = 'XS';
        } else if (width < 768) {
            breakpoint = 'SM';
        } else if (width < 992) {
            breakpoint = 'MD';
        } else if (width < 1200) {
            breakpoint = 'LG';
        } else {
            breakpoint = 'XL';
        }
        
        indicator.textContent = `${breakpoint} (${width}px)`;
        indicator.style.opacity = '1';
        
        // Hide after 2 seconds
        setTimeout(() => {
            indicator.style.opacity = '0';
        }, 2000);
    }

    handleResponsiveLayouts() {
        // Handle masonry layout on resize
        this.adjustMasonryLayout();
        
        // Handle sidebar layouts
        this.adjustSidebarLayouts();
    }

    adjustMasonryLayout() {
        const masonryContainers = document.querySelectorAll('.masonry-container');
        
        masonryContainers.forEach(container => {
            const width = container.offsetWidth;
            let columns = 3;
            
            if (width < 768) {
                columns = 1;
            } else if (width < 1024) {
                columns = 2;
            }
            
            container.style.columns = columns;
        });
    }

    adjustSidebarLayouts() {
        const sidebarLayouts = document.querySelectorAll('.sidebar-layout');
        
        sidebarLayouts.forEach(layout => {
            const width = window.innerWidth;
            
            if (width < 768) {
                layout.style.flexDirection = 'column';
            } else {
                layout.style.flexDirection = 'row';
            }
        });
    }

    initLayoutToggles() {
        // Add toggle buttons for different layout demonstrations
        this.addGridToggle();
        this.addFlexToggle();
    }

    addGridToggle() {
        const gridShowcases = document.querySelectorAll('.grid-showcase');
        
        gridShowcases.forEach(showcase => {
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'btn btn-sm btn-outline';
            toggleBtn.textContent = 'Toggle Auto-fit';
            toggleBtn.style.marginBottom = '1rem';
            
            toggleBtn.addEventListener('click', () => {
                const grids = showcase.querySelectorAll('.grid');
                grids.forEach(grid => {
                    if (grid.classList.contains('grid-auto-fit')) {
                        grid.classList.remove('grid-auto-fit');
                        toggleBtn.textContent = 'Toggle Auto-fit';
                    } else {
                        grid.classList.add('grid-auto-fit');
                        toggleBtn.textContent = 'Remove Auto-fit';
                    }
                });
            });
            
            showcase.parentElement.insertBefore(toggleBtn, showcase);
        });
    }

    addFlexToggle() {
        const flexShowcases = document.querySelectorAll('.flex-showcase');
        
        flexShowcases.forEach(showcase => {
            const toggleBtn = document.createElement('button');
            toggleBtn.className = 'btn btn-sm btn-outline';
            toggleBtn.textContent = 'Toggle Wrap';
            toggleBtn.style.marginBottom = '1rem';
            
            toggleBtn.addEventListener('click', () => {
                const containers = showcase.querySelectorAll('.flex-container');
                containers.forEach(container => {
                    if (container.classList.contains('flex-wrap')) {
                        container.classList.remove('flex-wrap');
                        toggleBtn.textContent = 'Add Wrap';
                    } else {
                        container.classList.add('flex-wrap');
                        toggleBtn.textContent = 'Remove Wrap';
                    }
                });
            });
            
            showcase.parentElement.insertBefore(toggleBtn, showcase);
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

    // Utility methods for dynamic layout creation
    createGrid(columns, items, container) {
        const grid = document.createElement('div');
        grid.className = `grid grid-${columns}`;
        
        for (let i = 0; i < items; i++) {
            const item = document.createElement('div');
            item.className = 'grid-item';
            item.textContent = `Item ${i + 1}`;
            grid.appendChild(item);
        }
        
        container.appendChild(grid);
        return grid;
    }

    createFlexContainer(direction, items, container) {
        const flexContainer = document.createElement('div');
        flexContainer.className = `flex-container flex-${direction}`;
        
        for (let i = 0; i < items; i++) {
            const item = document.createElement('div');
            item.className = 'flex-item';
            item.textContent = `Flex ${i + 1}`;
            flexContainer.appendChild(item);
        }
        
        container.appendChild(flexContainer);
        return flexContainer;
    }

    createCard(title, content, type = 'basic') {
        const card = document.createElement('div');
        card.className = `card card-${type}`;
        
        const header = document.createElement('div');
        header.className = 'card-header';
        
        const titleElement = document.createElement('h4');
        titleElement.className = 'card-title';
        titleElement.textContent = title;
        
        const contentElement = document.createElement('div');
        contentElement.className = 'card-content';
        contentElement.textContent = content;
        
        header.appendChild(titleElement);
        card.appendChild(header);
        card.appendChild(contentElement);
        
        return card;
    }

    // Responsive utilities
    getBreakpoint() {
        const width = window.innerWidth;
        
        if (width < 576) return 'xs';
        if (width < 768) return 'sm';
        if (width < 992) return 'md';
        if (width < 1200) return 'lg';
        return 'xl';
    }

    isBreakpoint(breakpoint) {
        return this.getBreakpoint() === breakpoint;
    }

    isMobile() {
        return this.getBreakpoint() === 'xs' || this.getBreakpoint() === 'sm';
    }

    isTablet() {
        return this.getBreakpoint() === 'md';
    }

    isDesktop() {
        return this.getBreakpoint() === 'lg' || this.getBreakpoint() === 'xl';
    }

    // Layout animation helpers
    animateLayoutChange(element, newLayout) {
        element.style.transition = 'all 0.3s ease';
        
        // Apply new layout
        Object.assign(element.style, newLayout);
        
        // Remove transition after animation
        setTimeout(() => {
            element.style.transition = '';
        }, 300);
    }

    // Masonry layout helper
    initMasonryLayout(container) {
        const items = container.querySelectorAll('.masonry-item');
        
        // Simple masonry implementation
        const columns = this.isMobile() ? 1 : this.isTablet() ? 2 : 3;
        const columnHeights = new Array(columns).fill(0);
        
        items.forEach(item => {
            const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
            
            item.style.position = 'absolute';
            item.style.left = `${(shortestColumn * 100) / columns}%`;
            item.style.top = `${columnHeights[shortestColumn]}px`;
            item.style.width = `${100 / columns}%`;
            
            columnHeights[shortestColumn] += item.offsetHeight + 16; // 16px gap
        });
        
        container.style.height = `${Math.max(...columnHeights)}px`;
        container.style.position = 'relative';
    }
}

// Initialiser les composants de layout
document.addEventListener('DOMContentLoaded', () => {
    new LayoutsComponent();
});

// Exporter pour utilisation dans d'autres modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = LayoutsComponent;
}