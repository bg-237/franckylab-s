// ===== ANIMATION DES PÉTALES DE ROSES =====

class Petal {
    constructor(canvas) {
        this.canvas = canvas;
        this.reset();
    }
    
    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = -20;
        this.z = Math.random() * 0.5 + 0.5;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = Math.random() * 1 + 0.5;
        this.rotation = Math.random() * 360;
        this.rotationSpeed = (Math.random() - 0.5) * 2;
        this.size = (Math.random() * 8 + 4) * this.z;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.swingSpeed = Math.random() * 0.02 + 0.01;
        this.swingAmount = Math.random() * 2 + 1;
    }
    
    update() {
        this.y += this.vy * this.z;
        this.x += Math.sin(this.y * this.swingSpeed) * this.swingAmount + this.vx;
        this.rotation += this.rotationSpeed;
        
        // Réinitialiser si le pétale sort de l'écran
        if (this.y > this.canvas.height + 20) {
            this.reset();
        }
        
        if (this.x < -20 || this.x > this.canvas.width + 20) {
            this.x = Math.random() * this.canvas.width;
        }
    }
    
    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.globalAlpha = this.opacity;
        
        // Dessiner un pétale de rose stylisé
        ctx.beginPath();
        
        // Forme de pétale
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, this.size);
        gradient.addColorStop(0, '#FFB6C1');
        gradient.addColorStop(0.5, '#FF69B4');
        gradient.addColorStop(1, '#FF1493');
        
        ctx.fillStyle = gradient;
        
        // Pétale en forme d'ellipse
        ctx.ellipse(0, 0, this.size, this.size * 1.5, 0, 0, Math.PI * 2);
        ctx.fill();
        
        // Ajouter un peu de brillance
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.ellipse(-this.size * 0.2, -this.size * 0.3, this.size * 0.3, this.size * 0.5, 0, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.restore();
    }
}

class PetalSystem {
    constructor() {
        this.canvas = document.getElementById('petals-canvas');
        this.ctx = this.canvas.getContext('2d');
        this.petals = [];
        this.petalCount = 30; // Nombre de pétales
        
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    init() {
        this.petals = [];
        for (let i = 0; i < this.petalCount; i++) {
            const petal = new Petal(this.canvas);
            // Distribuer les pétales sur toute la hauteur au départ
            petal.y = Math.random() * this.canvas.height;
            this.petals.push(petal);
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.petals.forEach(petal => {
            petal.update();
            petal.draw(this.ctx);
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Initialiser le système de pétales quand le DOM est chargé
document.addEventListener('DOMContentLoaded', () => {
    // Attendre un peu avant de démarrer l'animation pour de meilleures performances
    setTimeout(() => {
        new PetalSystem();
    }, 500);
});

// Ajouter des pétales supplémentaires au scroll (effet interactif)
let lastScrollTime = 0;
window.addEventListener('scroll', () => {
    const now = Date.now();
    if (now - lastScrollTime > 100) { // Throttle
        lastScrollTime = now;
        // On pourrait ajouter des pétales supplémentaires ici si souhaité
    }
});
