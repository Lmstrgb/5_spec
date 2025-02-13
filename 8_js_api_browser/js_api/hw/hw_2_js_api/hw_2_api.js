const images = [
  'image1.jpg',
  'image2.jpg',
  'image3.jpg'
];

let currentIndex = 0;

const sliderImage = document.getElementById('slider-image');
const indicators = document.querySelectorAll('.indicator');

function updateSlider() {
  sliderImage.src = images[currentIndex];

  // Обновляем индикаторы
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length; // Циклический переход
  updateSlider();
});

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length; // Циклический переход
  updateSlider();
});

// Обработка клика на индикаторы
indicators.forEach(indicator => {
  indicator.addEventListener('click', () => {
    currentIndex = parseInt(indicator.getAttribute('data-index'));
    updateSlider();
  });
});

// Инициализация слайдера
updateSlider();