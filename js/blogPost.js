const carousel = document.querySelector('.recommend-carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const card = document.querySelector('.recommend-card');

let currentIndex = 0;
const totalCards = document.querySelectorAll('.recommend-card').length;
const visibleCards = window.innerWidth <= 1000 ? 1 : 4;

function getCardWidth() {
    return card.offsetWidth + 30;
}

nextBtn.addEventListener('click', () => {
    carousel.style.transform = `translateX(-${getNextOffset(1)}px)`;
});

prevBtn.addEventListener('click', () => {
    carousel.style.transform = `translateX(-${getNextOffset(-1)}px)`;
});

function getNextOffset(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > totalCards - visibleCards)
        currentIndex = totalCards - visibleCards;
    return currentIndex * getCardWidth();
}

window.addEventListener('resize', () => {
    currentIndex = 0;
    carousel.style.transform = `translateX(0)`;
});