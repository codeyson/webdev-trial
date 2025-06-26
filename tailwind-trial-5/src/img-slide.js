// slider.js
let currentIndex = 0;

export function initSlider(slidesElement) {
  const totalSlides = slidesElement.children.length;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }
    slidesElement.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  // Auto-slide every 4 seconds
  setInterval(nextSlide, 4000);

  // Optional: Return control functions
  return { nextSlide, prevSlide };
}
