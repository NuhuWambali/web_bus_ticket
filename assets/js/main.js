// carousel
const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
    const itemWidth = items[0].getBoundingClientRect().width;
    const moveAmount = itemWidth * 5; // 5 items at a time
    track.style.transform = `translateX(-${currentIndex * moveAmount}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < items.length / 5 - 1) {
        currentIndex++;
        updateCarousel();
    }
});

updateCarousel();
