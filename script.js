// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  if (scrollTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScrollTop = scrollTop;
});

// Update year in footer
const yearEl = document.getElementById('year');
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') === '#') return; // Skip empty links
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Portfolio Slider
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');
    const dots = document.querySelectorAll('.dot');

    if (track && slides.length > 0) {
        let currentPosition = 0;
        const totalSlides = slides.length;

        function updateSlider() {
            track.style.transform = `translateX(-${currentPosition * 100}%)`;
            
            dots.forEach(dot => dot.classList.remove('active'));
            if (dots[currentPosition]) {
                dots[currentPosition].classList.add('active');
            }
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                currentPosition = (currentPosition + 1) % totalSlides;
                updateSlider();
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                currentPosition = (currentPosition - 1 + totalSlides) % totalSlides;
                updateSlider();
            });
        }

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentPosition = index;
                updateSlider();
            });
        });
    }
});
