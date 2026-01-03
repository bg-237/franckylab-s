// ===== CAROUSEL FUNCTIONALITY =====
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const indicatorsContainer = document.getElementById('indicators');

let currentIndex = 0;
let autoplayInterval;
const autoplayDelay = 5000; // 5 secondes

// Récupérer tous les items du carousel
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

// Créer les indicateurs
function createIndicators() {
    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
}

// Aller à un slide spécifique
function goToSlide(index) {
    // Retirer la classe active de l'item actuel
    items[currentIndex].classList.remove('active');
    document.querySelectorAll('.indicator')[currentIndex].classList.remove('active');
    
    // Mettre à jour l'index
    currentIndex = index;
    
    // Ajouter la classe active au nouvel item
    items[currentIndex].classList.add('active');
    document.querySelectorAll('.indicator')[currentIndex].classList.add('active');
    
    // Réinitialiser l'autoplay
    resetAutoplay();
}

// Slide suivant
function nextSlide() {
    const nextIndex = (currentIndex + 1) % totalItems;
    goToSlide(nextIndex);
}

// Slide précédent
function prevSlide() {
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    goToSlide(prevIndex);
}

// Autoplay
function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, autoplayDelay);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
}

// Event listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Pause autoplay au survol
carousel.addEventListener('mouseenter', stopAutoplay);
carousel.addEventListener('mouseleave', startAutoplay);

// Support du clavier
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'ArrowRight') {
        nextSlide();
    }
});

// Support du swipe sur mobile
let touchStartX = 0;
let touchEndX = 0;

carousel.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

carousel.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - prev slide
            prevSlide();
        }
    }
}

// Initialisation
createIndicators();
startAutoplay();

// Pause autoplay quand l'onglet n'est pas visible
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        stopAutoplay();
    } else {
        startAutoplay();
    }
});

console.log('Carousel initialisé avec succès 🎠');
