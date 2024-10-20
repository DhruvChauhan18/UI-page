// scripts.js

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const slidesContainer = document.querySelector('.slides');
const totalSlides = slides.length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    // Calculate the percentage to move slides container to show the correct slide
    const offset = index * -100;
    slidesContainer.style.transform = `translateX(${offset}%)`;
    
    // Toggle the 'active' class on slides
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}

// Auto-play functionality (optional)
let autoSlide = setInterval(nextSlide, 5000);

// Manual navigation
prevButton.addEventListener('click', () => {
    // clearInterval(autoSlide); // Stop auto-slide on manual interaction
    prevSlide();
});

nextButton.addEventListener('click', () => {
    // clearInterval(autoSlide); // Stop auto-slide on manual interaction
    nextSlide();
});

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    // autoSlide()
});